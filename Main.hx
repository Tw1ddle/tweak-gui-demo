package;

import Random;
import haxe.Timer;
import haxe.ds.BalancedTree;
import haxe.ds.EnumValueMap;
import haxe.ds.GenericStack;
import haxe.ds.IntMap;
import haxe.ds.ObjectMap;
import haxe.ds.StringMap;
import haxe.ds.Vector;
import tweak.GUI;
import tweak.util.Util;

#if tweak_threejsbackend
import js.three.Object3D;
import js.three.Scene;
import js.three.WebGLRenderer;
import js.three.PerspectiveCamera;
import js.Browser.window;
import js.Browser;
#end

/**
 * A cross-platform demo for tweak-gui.
 */
class Main {	
    private static function main():Void {		
		// Start by creating some objects to add to the GUI
		// Create a single basic test object
		var basicTestObject = new SimpleTestObject(true, 20, 50.2, "Qux", function () { trace("Basic Test Function"); });
		
		// Create an array of basic test objects
		var simpleObjectArray = new Array<SimpleTestObject>();
		for (i in 0...5) {
			simpleObjectArray.push(new SimpleTestObject(false, Std.int(Math.random() * 10), Math.random() * 12, "Test", function() { trace("Basic Test Function" + i); }));
		}
		
		// Create a string stack
		var stringStack = new GenericStack<String>();
		stringStack.add("Foo");
		stringStack.add("Bar");
		stringStack.add("Boz");
		stringStack.add("Qux");
		stringStack.add("Quux");
		
		// Create a balanced tree
		var balancedTree = new BalancedTree<Int, String>();
		balancedTree.set(0, "Foo");
		balancedTree.set(1, "Bar");
		balancedTree.set(2, "Baz");
		balancedTree.set(3, "Boz");
		
		// Create a complex test object containing both primitive and object types
		var testObjectComplex = new ComplexTestObject(
			true, false, true,
			10, 20, 30,
			5.5, 15.5, 25.5,
			"Foo", "Bar", "Baz",
			function() {}, function(s:String):Void { trace("Running: " + s); }, function(a:Int, b:Int) { trace("Running: " + a + "," + b); }, function(a:Int, b:SimpleTestObject, c:String) { trace("Running: " + a + "," + b + "," + c); },
			FlatEnum.AN_ENUM_ITEM, ComplexEnum.AN_ENUM_ITEM, EnumAbstract.foo,
			Vector.fromArrayCopy([ 0, 1, 2, 3 ]), Vector.fromArrayCopy([ "Foo", "Bar", "Baz", "Boz" ]), Vector.fromArrayCopy(simpleObjectArray),
			[ 0, 1, 2, 3 ], [ "Foo", "Bar", "Baz", "Boz" ], simpleObjectArray,
			new SimpleTestObject(false, 20, 30, "Nested Test", function() { trace("Nested test"); } ),
			[ "Foo" => "Bar", "Boz" => "Baz", "Qux" => "Quux", "Quuux" => "Quuuux", "LongString" => "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789" ],
			[ 1 => "Foo", 2 => "Bar", 3 => "Boz", -23 => "Qux"],
			[ simpleObjectArray[0] => "Foo", simpleObjectArray[1] => "Bar", simpleObjectArray[2] => "Baz" ],
			[ FlatEnum.AN_ENUM_ITEM => "Foo", FlatEnum.ANOTHER_ENUM_ITEM => "Bar", FlatEnum.ONE_MORE_ENUM_ITEM => "Boz" ],
			stringStack,
			{ x: 10, y: 25 },
			balancedTree
		);
		
		// Create a test object that takes type parameters
		var testObjectGeneric = new GenericTestObject<Bool, Int, Float, String, SimpleTestObject>(
			false,
			20,
			10.5,
			"Foo",
			new SimpleTestObject(false, 0, 10, "Bar", function() { trace("Test"); }),
			[ false, true, false, true ],
			[ 0, 1, 2, 3 ],
			[ -2.2, -0.5, 0.0, 0.6, 1.0, 2.0 ],
			[ "Foo", "Bar", "Baz", "Boz" ],
			[ new SimpleTestObject(true, 10, 0.5, "Foo", function() { trace("Test"); }) ]
		);
			
		var guiSimple = GUI.create("tweak.gui.simple");
		
		// Add a folder with a single simple object
		guiSimple.addFolder("Simple Example")
		.addObject(basicTestObject);
		
		// Add a folder with a generic object
		guiSimple.addFolder("Generic Example")
		.addObject(testObjectGeneric);
		
		// Add a folder with a single complex object
		guiSimple.addFolder("Automatic Complex Example")
		.addObject(testObjectComplex);
		
		var guiMacroGuided = GUI.create("tweak.gui.macroguided");
		
		// Add a folder with a single simple object using macros
		guiMacroGuided.addFolder("Simple Example")
		.addObjectIncludingFields(basicTestObject, Util.getInstanceFieldNames(basicTestObject));
		
		// Add a folder with a generic object
		guiMacroGuided.addFolder("Generic Example")
		.addObjectIncludingFields(testObjectGeneric, Util.getInstanceFieldNames(testObjectGeneric));
		
		// Add a folder with a single complex object
		guiMacroGuided.addFolder("Automatic Complex Example")
		.addObjectIncludingFields(testObjectComplex, Util.getInstanceFieldNames(testObjectComplex));
		
		var guiWatches = GUI.create("tweak.gui.watches")
		.addFolderForObjectWatch(simpleObjectArray, "Simple Object Array Watch", 10)
		.addFolderForObjectWatch(testObjectComplex, "Complex Object Watch", 10);
		
		// Add a folder with some custom, manually-added items
		GUI.create("tweak.gui.manual")
		.addFolder("Manually Added Items")
		.addFunction(testObjectComplex.nullary_function, Util.getFunctionSignature(testObjectComplex.nullary_function), "Nullary Function")
		.addFunction(testObjectComplex.unary_string_function, Util.getFunctionSignature(testObjectComplex.unary_string_function), "Unary Function")
		.addFunction(testObjectComplex.binary_int_int_function, Util.getFunctionSignature(testObjectComplex.binary_int_int_function), "Binary Function")
		.addStringSelect(testObjectComplex, "a_string", testObjectComplex.string_array, "String Select")
		.addEnumSelect(testObjectComplex, "simple_enum", "Simple Enum Select")
		.addEnumSelect(testObjectComplex, "complex_enum", "Complex Enum Select")
		.addBooleanCheckbox(testObjectComplex, "a_bool", "Boolean Checkbox");
		
		// Update the GUIs
		var timer = new Timer(100);
		timer.run = function() {
			guiSimple.update();
			guiWatches.update();
		}
		
		// Update the values of some of the test variables
		var valueUpdater = new Timer(1500);
		valueUpdater.run = function() {
			for (o in simpleObjectArray) {
				o.updateValues();
			}
			testObjectComplex.updateValues();
		}
		
		#if tweak_threejsbackend
		var renderer = new WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		var scene = new Scene();
		var camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1.0, 10000.0);
		var attachPoint = Browser.document.getElementById("tweak-gui-scene");
		attachPoint.appendChild(renderer.domElement);
		var animate = null;
		animate = function(t:Float):Void {
			renderer.render(scene, camera);
			window.requestAnimationFrame(animate);
		}
		window.requestAnimationFrame(animate);
		#end
	}
}

/**
 * An enum with no constructor parameters.
 */
enum FlatEnum {
	AN_ENUM_ITEM;
	ANOTHER_ENUM_ITEM;
	YET_ANOTHER_ENUM_ITEM;
	ONE_MORE_ENUM_ITEM;
}

/**
 * An enum containing a mixture of values that take no constructor parameters, and some that do take parameters.
 */
enum ComplexEnum {
	AN_ENUM_ITEM;
	ANOTHER_ENUM_ITEM(y:Float, x:Float);
	YET_ANOTHER_ENUM_ITEM(x:String);
	ONE_MORE_ENUM_ITEM(w:String, x:Int);
	AND_ONE_MORE_ENUM_ITEM;
}

/**
 * A fake enum that describes a set of strings.
 */
@:enum abstract EnumAbstract(String) from String to String {
	var foo = "foo";
	var bar = "bar";
	var boz = "boz";
}

/**
 * A basic test class.
 */
@:build(LazyProps.build())
class SimpleTestObject {
	@:propPublic('*')
	public function new(
	my_boolean:Bool,
	my_integer:Int,
	my_float:Float,
	my_string:String,
	my_nullary_function:Void->Void
	)	
	{}
	
	// Sets the values to something random
	public function updateValues():Void {
		my_boolean = Math.random() < 0.5 ? true : false;
		my_integer = Std.int((Math.random() * 1000000) - 500000);
		my_float = Math.random() * 2000000 - 100000;
		my_string = Std.string("Random String: " + Math.random() * 500000);
		my_nullary_function = function() { trace("Foo"); };
	}
}

/**
 * A generic test object
 */
@:build(LazyProps.build())
@:generic
class GenericTestObject<A, B, C, D, E> {
	@:propPublic('*')
	public function new(
		generic_a:A,
		generic_b:B,
		generic_c:C,
		generic_d:D,
		generic_e:E,
		generic_array_a:Array<A>,
		generic_array_b:Array<B>,
		generic_array_c:Array<C>,
		generic_array_d:Array<D>,
		generic_array_e:Array<E>
	)
	{}
}
 
/**
 * A more complicated test class.
 */
@:build(LazyProps.build())
class ComplexTestObject {
	@:propPublic('*')
	public function new(
	a_bool:Bool,
	b_bool:Bool,
	c_bool:Bool,
	x_int:Int,
	y_int:Int,
	z_int:Int,
	x_float:Float,
	y_float:Float,
	z_float:Float,
	a_string:String,
	b_string:String,
	c_string:String,
	nullary_function:Void->Void,
	unary_string_function:String->Void,
	binary_int_int_function:Int->Int->Void,
	ternary_int_object_string_function:Int->SimpleTestObject->String->Void,
	simple_enum:FlatEnum,
	complex_enum:ComplexEnum,
	enum_string_abstract:EnumAbstract,
	int_vector:Vector<Int>,
	string_vector:Vector<String>,
	object_vector:Vector<SimpleTestObject>,
	int_array:Array<Int>,
	string_array:Array<String>,
	object_array:Array<SimpleTestObject>,
	simple_object:SimpleTestObject,
	string_to_string_map:StringMap<String>,
	int_to_string_map:IntMap<String>,
	object_to_string_map:ObjectMap<SimpleTestObject, String>,
	enum_to_string_map:EnumValueMap<FlatEnum, String>,
	string_stack:GenericStack<String>,
	anonymous_type:{x:Int, y:Int},
	balanced_tree:BalancedTree<Int, String>
	)
	{}
	
	// Sets the values to something random
	public function updateValues():Void {
		a_bool = Random.bool();
		b_bool = Random.bool();
		c_bool = Random.bool();
		x_int = Random.int(0, 1000000);
		y_int = Random.int(-10, 10);
		z_int = Random.int(-1000000, 0);
		x_float = Random.float(0, 1000000);
		y_float = Random.float(-10, 10);
		z_float = Random.float(-1000000, 0);
		a_string = Random.string(10, "aeiou");
		b_string = Random.string(15);
		c_string = Random.string(1);
		nullary_function = function() {};
		unary_string_function = function(s:String) {};
		binary_int_int_function = function(a:Int, b:Int) {};
		ternary_int_object_string_function = function(a:Int, o:SimpleTestObject, s:String) {};
		simple_enum = Random.enumConstructor(FlatEnum);
		complex_enum = Random.enumConstructor(ComplexEnum);
		enum_string_abstract = EnumAbstract.foo;
		// Ignore the rest for now...
	}
}