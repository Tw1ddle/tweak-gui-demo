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
import tweak.elements.Folder;
import tweak.util.Util;

enum SimpleEnum {
	AN_ENUM_ITEM;
	ANOTHER_ENUM_ITEM;
	YET_ANOTHER_ENUM_ITEM;
	ONE_MORE_ENUM_ITEM;
}

enum ComplexEnum {
	AN_ENUM_ITEM;
	ANOTHER_ENUM_ITEM(y:Float, x:Float);
	YET_ANOTHER_ENUM_ITEM(x:String);
	ONE_MORE_ENUM_ITEM(w:String, x:Int);
	AND_ONE_MORE_ENUM_ITEM;
}

@:enum abstract EnumAbstract(String) from String to String {
	var foo = "foo";
	var bar = "bar";
	var boz = "boz";
}

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
	
	public function updateValues():Void {
		my_boolean = Math.random() < 0.5 ? true : false;
		my_integer = Std.int((Math.random() * 1000000) - 500000);
		my_float = Math.random() * 2000000 - 100000;
		my_string = Std.string("Random String: " + Math.random() * 500000);
		my_nullary_function = function() { trace("Foo"); };
	}
}

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
	simple_enum:SimpleEnum,
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
	enum_to_string_map:EnumValueMap<SimpleEnum, String>,
	string_stack:GenericStack<String>,
	anonymous_type:{x:Int, y:Int},
	balanced_tree:BalancedTree<Int, String>
	)
	{}
	
	// Set the values to something random
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
		// Ignore functions
		simple_enum = Random.enumConstructor(SimpleEnum);
		complex_enum = Random.enumConstructor(ComplexEnum);
		// Ignore the rest for now...
	}
}

class Main {
    private static function main():Void {
		// Create a GUI itself - the parent menu
		var gui = GUI.create("tweak.gui");
		
		var simpleObjectArray = new Array<SimpleTestObject>();
		for (i in 0...5) {
			simpleObjectArray.push(new SimpleTestObject(false, Std.int(Math.random() * 10), Math.random() * 12, "Test", function() { trace("Basic Test Function" + i); }));
		}
		
		var stringStack = new GenericStack<String>();
		stringStack.add("Foo");
		stringStack.add("Bar");
		stringStack.add("Boz");
		stringStack.add("Qux");
		stringStack.add("Quux");
		
		var balancedTree = new BalancedTree<Int, String>();
		balancedTree.set(0, "Foo");
		balancedTree.set(1, "Bar");
		balancedTree.set(2, "Baz");
		balancedTree.set(3, "Boz");
		
		// Add a folder with a single simple object
		var basicFolder = gui.addFolder("Simple Example");
		basicFolder.addObject(new SimpleTestObject(true, 20, 50.2, "Qux", function () { trace("Basic Test Function"); }));
		
		var testObjectComplex = new ComplexTestObject(
			true, false, true,
			10, 20, 30,
			5.5, 15.5, 25.5,
			"Foo", "Bar", "Baz",
			function() {}, function(s:String):Void { trace("Running: " + s); }, function(a:Int, b:Int) { trace("Running: " + a + "," + b); }, function(a:Int, b:SimpleTestObject, c:String) { trace("Running: " + a + "," + b + "," + c); },
			SimpleEnum.AN_ENUM_ITEM, ComplexEnum.AN_ENUM_ITEM, EnumAbstract.foo,
			Vector.fromArrayCopy([ 0, 1, 2, 3 ]), Vector.fromArrayCopy([ "Foo", "Bar", "Baz", "Boz" ]), Vector.fromArrayCopy(simpleObjectArray),
			[ 0, 1, 2, 3 ], [ "Foo", "Bar", "Baz", "Boz" ], simpleObjectArray,
			new SimpleTestObject(false, 20, 30, "Nested Test", function() { trace("Nested test"); } ),
			[ "Foo" => "Bar", "Boz" => "Baz", "Qux" => "Quux", "Quuux" => "Quuuux", "LongString" => "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789" ],
			[ 1 => "Foo", 2 => "Bar", 3 => "Boz", -23 => "Qux"],
			[ simpleObjectArray[0] => "Foo", simpleObjectArray[1] => "Bar", simpleObjectArray[2] => "Baz" ],
			[ SimpleEnum.AN_ENUM_ITEM => "Foo", SimpleEnum.ANOTHER_ENUM_ITEM => "Bar", SimpleEnum.ONE_MORE_ENUM_ITEM => "Boz" ],
			stringStack,
			{ x: 10, y: 25 },
			balancedTree
			);
			
		// Add a folder with some more custom manually-added items
		gui.addFolder("Manually Added Items")
		.addFunction(testObjectComplex.nullary_function, Util.getTypes(testObjectComplex.nullary_function), "Nullary Function")
		.addFunction(testObjectComplex.unary_string_function, Util.getTypes(testObjectComplex.unary_string_function), "Unary Function")
		.addFunction(testObjectComplex.binary_int_int_function, Util.getTypes(testObjectComplex.binary_int_int_function), "Binary Function")
		.addStringSelect(testObjectComplex, "a_string", testObjectComplex.string_array, "String Select")
		.addEnumSelect(testObjectComplex, "simple_enum", "Simple Enum Select")
		.addEnumSelect(testObjectComplex, "complex_enum", "Complex Enum Select")
		.addBooleanCheckbox(testObjectComplex, "a_bool", "Boolean Checkbox");
		
		// Add a folder with a single complex object
		var folder:Folder = gui.addFolder("Automatic Complex Example")
		.addObject(testObjectComplex);
		
		// Displays info about the first GUI
		var guiInfo = GUI.create("tweak.gui.info");		
		guiInfo.addFolderForObjectWatch(simpleObjectArray, "Simple Object Array Watch", 10);
		guiInfo.addFolderForObjectWatch(testObjectComplex, "Complex Object Watch", 10);
		
		var timer = new Timer(100);
		timer.run = function() {
			gui.update();
			guiInfo.update();
		}
		
		var watchUpdater = new Timer(1500);
		watchUpdater.run = function() {
			for (o in simpleObjectArray) {
				o.updateValues();
			}
			testObjectComplex.updateValues();
		}
	}
}