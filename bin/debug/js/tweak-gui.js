(function (console, $global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
var Lambda = function() { };
Lambda.__name__ = true;
Lambda.array = function(it) {
	var a = [];
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
};
var SimpleEnum = { __ename__ : true, __constructs__ : ["AN_ENUM_ITEM","ANOTHER_ENUM_ITEM","YET_ANOTHER_ENUM_ITEM","ONE_MORE_ENUM_ITEM"] };
SimpleEnum.AN_ENUM_ITEM = ["AN_ENUM_ITEM",0];
SimpleEnum.AN_ENUM_ITEM.toString = $estr;
SimpleEnum.AN_ENUM_ITEM.__enum__ = SimpleEnum;
SimpleEnum.ANOTHER_ENUM_ITEM = ["ANOTHER_ENUM_ITEM",1];
SimpleEnum.ANOTHER_ENUM_ITEM.toString = $estr;
SimpleEnum.ANOTHER_ENUM_ITEM.__enum__ = SimpleEnum;
SimpleEnum.YET_ANOTHER_ENUM_ITEM = ["YET_ANOTHER_ENUM_ITEM",2];
SimpleEnum.YET_ANOTHER_ENUM_ITEM.toString = $estr;
SimpleEnum.YET_ANOTHER_ENUM_ITEM.__enum__ = SimpleEnum;
SimpleEnum.ONE_MORE_ENUM_ITEM = ["ONE_MORE_ENUM_ITEM",3];
SimpleEnum.ONE_MORE_ENUM_ITEM.toString = $estr;
SimpleEnum.ONE_MORE_ENUM_ITEM.__enum__ = SimpleEnum;
SimpleEnum.__empty_constructs__ = [SimpleEnum.AN_ENUM_ITEM,SimpleEnum.ANOTHER_ENUM_ITEM,SimpleEnum.YET_ANOTHER_ENUM_ITEM,SimpleEnum.ONE_MORE_ENUM_ITEM];
var ComplexEnum = { __ename__ : true, __constructs__ : ["AN_ENUM_ITEM","ANOTHER_ENUM_ITEM","YET_ANOTHER_ENUM_ITEM","ONE_MORE_ENUM_ITEM","AND_ONE_MORE_ENUM_ITEM"] };
ComplexEnum.AN_ENUM_ITEM = ["AN_ENUM_ITEM",0];
ComplexEnum.AN_ENUM_ITEM.toString = $estr;
ComplexEnum.AN_ENUM_ITEM.__enum__ = ComplexEnum;
ComplexEnum.ANOTHER_ENUM_ITEM = function(y,x) { var $x = ["ANOTHER_ENUM_ITEM",1,y,x]; $x.__enum__ = ComplexEnum; $x.toString = $estr; return $x; };
ComplexEnum.YET_ANOTHER_ENUM_ITEM = function(x) { var $x = ["YET_ANOTHER_ENUM_ITEM",2,x]; $x.__enum__ = ComplexEnum; $x.toString = $estr; return $x; };
ComplexEnum.ONE_MORE_ENUM_ITEM = function(w,x) { var $x = ["ONE_MORE_ENUM_ITEM",3,w,x]; $x.__enum__ = ComplexEnum; $x.toString = $estr; return $x; };
ComplexEnum.AND_ONE_MORE_ENUM_ITEM = ["AND_ONE_MORE_ENUM_ITEM",4];
ComplexEnum.AND_ONE_MORE_ENUM_ITEM.toString = $estr;
ComplexEnum.AND_ONE_MORE_ENUM_ITEM.__enum__ = ComplexEnum;
ComplexEnum.__empty_constructs__ = [ComplexEnum.AN_ENUM_ITEM,ComplexEnum.AND_ONE_MORE_ENUM_ITEM];
var SimpleTestObject = function(my_boolean,my_integer,my_float,my_string,my_nullary_function) {
	this.my_nullary_function = my_nullary_function;
	this.my_string = my_string;
	this.my_float = my_float;
	this.my_integer = my_integer;
	this.my_boolean = my_boolean;
};
SimpleTestObject.__name__ = true;
SimpleTestObject.prototype = {
	updateValues: function() {
		if(Math.random() < 0.5) this.my_boolean = true; else this.my_boolean = false;
		this.my_integer = Std["int"](Math.random() * 1000000 - 500000);
		this.my_float = Math.random() * 2000000 - 100000;
		this.my_string = Std.string("Random String: " + Math.random() * 500000);
		this.my_nullary_function = function() {
			console.log("Foo");
		};
	}
	,__class__: SimpleTestObject
};
var ComplexTestObject = function(a_bool,b_bool,c_bool,x_int,y_int,z_int,x_float,y_float,z_float,a_string,b_string,c_string,nullary_function,unary_string_function,binary_int_int_function,ternary_int_object_string_function,simple_enum,complex_enum,enum_string_abstract,int_vector,string_vector,object_vector,int_array,string_array,object_array,simple_object,string_to_string_map,int_to_string_map,object_to_string_map,enum_to_string_map,string_stack,anonymous_type,balanced_tree) {
	this.balanced_tree = balanced_tree;
	this.anonymous_type = anonymous_type;
	this.string_stack = string_stack;
	this.enum_to_string_map = enum_to_string_map;
	this.object_to_string_map = object_to_string_map;
	this.int_to_string_map = int_to_string_map;
	this.string_to_string_map = string_to_string_map;
	this.simple_object = simple_object;
	this.object_array = object_array;
	this.string_array = string_array;
	this.int_array = int_array;
	this.object_vector = object_vector;
	this.string_vector = string_vector;
	this.int_vector = int_vector;
	this.enum_string_abstract = enum_string_abstract;
	this.complex_enum = complex_enum;
	this.simple_enum = simple_enum;
	this.ternary_int_object_string_function = ternary_int_object_string_function;
	this.binary_int_int_function = binary_int_int_function;
	this.unary_string_function = unary_string_function;
	this.nullary_function = nullary_function;
	this.c_string = c_string;
	this.b_string = b_string;
	this.a_string = a_string;
	this.z_float = z_float;
	this.y_float = y_float;
	this.x_float = x_float;
	this.z_int = z_int;
	this.y_int = y_int;
	this.x_int = x_int;
	this.c_bool = c_bool;
	this.b_bool = b_bool;
	this.a_bool = a_bool;
};
ComplexTestObject.__name__ = true;
ComplexTestObject.prototype = {
	updateValues: function() {
		this.a_bool = Math.random() < 0.5;
		this.b_bool = Math.random() < 0.5;
		this.c_bool = Math.random() < 0.5;
		this.x_int = Math.floor(1000001 * Math.random());
		this.y_int = -10 + Math.floor(21 * Math.random());
		this.z_int = -1000000 + Math.floor(1000001 * Math.random());
		this.x_float = 1000000 * Math.random();
		this.y_float = -10 + 20 * Math.random();
		this.z_float = -1000000 + 1000000 * Math.random();
		this.a_string = Random.string(10,"aeiou");
		this.b_string = Random.string(15);
		this.c_string = Random.string(1);
		this.simple_enum = Random.enumConstructor(SimpleEnum);
		this.complex_enum = Random.enumConstructor(ComplexEnum);
	}
	,__class__: ComplexTestObject
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	var gui = tweak_GUI.create("tweak.gui");
	var simpleObjectArray = [];
	var _g5 = 0;
	while(_g5 < 5) {
		var i3 = [_g5++];
		simpleObjectArray.push(new SimpleTestObject(false,Std["int"](Math.random() * 10),Math.random() * 12,"Test",(function(i3) {
			return function() {
				console.log("Basic Test Function" + i3[0]);
			};
		})(i3)));
	}
	var stringStack = new haxe_ds_GenericStack();
	stringStack.head = new haxe_ds_GenericCell("Foo",stringStack.head);
	stringStack.head = new haxe_ds_GenericCell("Bar",stringStack.head);
	stringStack.head = new haxe_ds_GenericCell("Boz",stringStack.head);
	stringStack.head = new haxe_ds_GenericCell("Qux",stringStack.head);
	stringStack.head = new haxe_ds_GenericCell("Quux",stringStack.head);
	var balancedTree = new haxe_ds_BalancedTree();
	balancedTree.set(0,"Foo");
	balancedTree.set(1,"Bar");
	balancedTree.set(2,"Baz");
	balancedTree.set(3,"Boz");
	var basicFolder = gui.addFolder("Simple Example");
	basicFolder.addObject(new SimpleTestObject(true,20,50.2,"Qux",function() {
		console.log("Basic Test Function");
	}));
	var testObjectComplex = new ComplexTestObject(true,false,true,10,20,30,5.5,15.5,25.5,"Foo","Bar","Baz",function() {
	},function(s) {
		console.log("Running: " + s);
	},function(a,b) {
		console.log("Running: " + a + "," + b);
	},function(a1,b1,c) {
		console.log("Running: " + a1 + "," + Std.string(b1) + "," + c);
	},SimpleEnum.AN_ENUM_ITEM,ComplexEnum.AN_ENUM_ITEM,"foo",(function($this) {
		var $r;
		var array = [0,1,2,3];
		var vec;
		{
			var this1;
			this1 = new Array(array.length);
			vec = this1;
		}
		{
			var _g1 = 0;
			var _g = array.length;
			while(_g1 < _g) {
				var i = _g1++;
				vec[i] = array[i];
			}
		}
		$r = vec;
		return $r;
	}(this)),(function($this) {
		var $r;
		var array1 = ["Foo","Bar","Baz","Boz"];
		var vec1;
		{
			var this2;
			this2 = new Array(array1.length);
			vec1 = this2;
		}
		{
			var _g11 = 0;
			var _g2 = array1.length;
			while(_g11 < _g2) {
				var i1 = _g11++;
				vec1[i1] = array1[i1];
			}
		}
		$r = vec1;
		return $r;
	}(this)),(function($this) {
		var $r;
		var vec2;
		{
			var this3;
			this3 = new Array(simpleObjectArray.length);
			vec2 = this3;
		}
		{
			var _g12 = 0;
			var _g3 = simpleObjectArray.length;
			while(_g12 < _g3) {
				var i2 = _g12++;
				vec2[i2] = simpleObjectArray[i2];
			}
		}
		$r = vec2;
		return $r;
	}(this)),[0,1,2,3],["Foo","Bar","Baz","Boz"],simpleObjectArray,new SimpleTestObject(false,20,30,"Nested Test",function() {
		console.log("Nested test");
	}),(function($this) {
		var $r;
		var _g4 = new haxe_ds_StringMap();
		if(__map_reserved.Foo != null) _g4.setReserved("Foo","Bar"); else _g4.h["Foo"] = "Bar";
		if(__map_reserved.Boz != null) _g4.setReserved("Boz","Baz"); else _g4.h["Boz"] = "Baz";
		if(__map_reserved.Qux != null) _g4.setReserved("Qux","Quux"); else _g4.h["Qux"] = "Quux";
		if(__map_reserved.Quuux != null) _g4.setReserved("Quuux","Quuuux"); else _g4.h["Quuux"] = "Quuuux";
		if(__map_reserved.LongString != null) _g4.setReserved("LongString","ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"); else _g4.h["LongString"] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
		$r = _g4;
		return $r;
	}(this)),(function($this) {
		var $r;
		var _g13 = new haxe_ds_IntMap();
		_g13.h[1] = "Foo";
		_g13.h[2] = "Bar";
		_g13.h[3] = "Boz";
		_g13.h[-23] = "Qux";
		$r = _g13;
		return $r;
	}(this)),(function($this) {
		var $r;
		var _g21 = new haxe_ds_ObjectMap();
		_g21.set(simpleObjectArray[0],"Foo");
		_g21.set(simpleObjectArray[1],"Bar");
		_g21.set(simpleObjectArray[2],"Baz");
		$r = _g21;
		return $r;
	}(this)),(function($this) {
		var $r;
		var _g31 = new haxe_ds_EnumValueMap();
		_g31.set(SimpleEnum.AN_ENUM_ITEM,"Foo");
		_g31.set(SimpleEnum.ANOTHER_ENUM_ITEM,"Bar");
		_g31.set(SimpleEnum.ONE_MORE_ENUM_ITEM,"Boz");
		$r = _g31;
		return $r;
	}(this)),stringStack,{ x : 10, y : 25},balancedTree);
	gui.addFolder("Manually Added Items").addFunction(testObjectComplex.nullary_function,"","Nullary Function").addFunction(testObjectComplex.unary_string_function,"s","Unary Function").addFunction(testObjectComplex.binary_int_int_function,"ii","Binary Function").addStringSelect(testObjectComplex,"a_string",testObjectComplex.string_array,"String Select").addEnumSelect(testObjectComplex,"simple_enum","Simple Enum Select").addEnumSelect(testObjectComplex,"complex_enum","Complex Enum Select").addBooleanCheckbox(testObjectComplex,"a_bool","Boolean Checkbox");
	var folder = gui.addFolder("Automatic Complex Example").addObject(testObjectComplex);
	var guiInfo = tweak_GUI.create("tweak.gui.info");
	guiInfo.addFolderForObjectWatch(simpleObjectArray,"Simple Object Array Watch",10);
	guiInfo.addFolderForObjectWatch(testObjectComplex,"Complex Object Watch",10);
	var timer = new haxe_Timer(100);
	timer.run = function() {
		gui.update();
		guiInfo.update();
	};
	var watchUpdater = new haxe_Timer(1500);
	watchUpdater.run = function() {
		var _g41 = 0;
		while(_g41 < simpleObjectArray.length) {
			var o = simpleObjectArray[_g41];
			++_g41;
			o.updateValues();
		}
		testObjectComplex.updateValues();
	};
};
Math.__name__ = true;
var Random = function() { };
Random.__name__ = true;
Random.bool = function() {
	return Math.random() < 0.5;
};
Random["int"] = function(from,to) {
	return from + Math.floor((to - from + 1) * Math.random());
};
Random["float"] = function(from,to) {
	return from + (to - from) * Math.random();
};
Random.string = function(length,charactersToUse) {
	if(charactersToUse == null) charactersToUse = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	var str = "";
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		str += charactersToUse.charAt(Math.floor((charactersToUse.length - 1 + 1) * Math.random()));
	}
	return str;
};
Random.date = function(earliest,latest) {
	var t = Random["float"](earliest.getTime(),latest.getTime());
	var d = new Date();
	d.setTime(t);
	return d;
};
Random.fromArray = function(arr) {
	if(arr != null && arr.length > 0) return arr[Math.floor((arr.length - 1 + 1) * Math.random())]; else return null;
};
Random.shuffle = function(arr) {
	if(arr != null) {
		var _g1 = 0;
		var _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var j = Math.floor((arr.length - 1 + 1) * Math.random());
			var a = arr[i];
			var b = arr[j];
			arr[i] = b;
			arr[j] = a;
		}
	}
	return arr;
};
Random.fromIterable = function(it) {
	if(it != null) return Random.fromArray(Lambda.array(it)); else return null;
};
Random.enumConstructor = function(e) {
	if(e != null) return Random.fromArray(Type.allEnums(e)); else return null;
};
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.compare = function(a,b) {
	if(a == b) return 0; else if(a > b) return 1; else return -1;
};
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
};
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
};
Reflect.isEnumValue = function(v) {
	return v != null && v.__enum__ != null;
};
var Std = function() { };
Std.__name__ = true;
Std["is"] = function(v,t) {
	return js_Boot.__instanceof(v,t);
};
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
var Type = function() { };
Type.__name__ = true;
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
};
Type.allEnums = function(e) {
	return e.__empty_constructs__;
};
var _$UInt_UInt_$Impl_$ = {};
_$UInt_UInt_$Impl_$.__name__ = true;
_$UInt_UInt_$Impl_$.toFloat = function(this1) {
	var $int = this1;
	if($int < 0) return 4294967296.0 + $int; else return $int + 0.0;
};
var haxe_IMap = function() { };
haxe_IMap.__name__ = true;
var haxe_Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
haxe_Timer.__name__ = true;
haxe_Timer.prototype = {
	run: function() {
	}
	,__class__: haxe_Timer
};
var haxe_ds_BalancedTree = function() {
};
haxe_ds_BalancedTree.__name__ = true;
haxe_ds_BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,setLoop: function(k,v,node) {
		if(node == null) return new haxe_ds_TreeNode(null,k,v,null);
		var c = this.compare(k,node.key);
		if(c == 0) return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null?0:node._height); else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl;
		if(l == null) hl = 0; else hl = l._height;
		var hr;
		if(r == null) hr = 0; else hr = r._height;
		if(hl > hr + 2) {
			if((function($this) {
				var $r;
				var _this = l.left;
				$r = _this == null?0:_this._height;
				return $r;
			}(this)) >= (function($this) {
				var $r;
				var _this1 = l.right;
				$r = _this1 == null?0:_this1._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r)); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
		} else if(hr > hl + 2) {
			if((function($this) {
				var $r;
				var _this2 = r.right;
				$r = _this2 == null?0:_this2._height;
				return $r;
			}(this)) > (function($this) {
				var $r;
				var _this3 = r.left;
				$r = _this3 == null?0:_this3._height;
				return $r;
			}(this))) return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right); else return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
		} else return new haxe_ds_TreeNode(l,k,v,r,(hl > hr?hl:hr) + 1);
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
	,__class__: haxe_ds_BalancedTree
};
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) h = -1;
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) this._height = ((function($this) {
		var $r;
		var _this = $this.left;
		$r = _this == null?0:_this._height;
		return $r;
	}(this)) > (function($this) {
		var $r;
		var _this1 = $this.right;
		$r = _this1 == null?0:_this1._height;
		return $r;
	}(this))?(function($this) {
		var $r;
		var _this2 = $this.left;
		$r = _this2 == null?0:_this2._height;
		return $r;
	}(this)):(function($this) {
		var $r;
		var _this3 = $this.right;
		$r = _this3 == null?0:_this3._height;
		return $r;
	}(this))) + 1; else this._height = h;
};
haxe_ds_TreeNode.__name__ = true;
haxe_ds_TreeNode.prototype = {
	__class__: haxe_ds_TreeNode
};
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = true;
haxe_ds_EnumValueMap.__interfaces__ = [haxe_IMap];
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1[1] - k2[1];
		if(d != 0) return d;
		var p1 = k1.slice(2);
		var p2 = k2.slice(2);
		if(p1.length == 0 && p2.length == 0) return 0;
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) return ld;
		var _g1 = 0;
		var _g = a1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) return d;
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) return this.compare(v1,v2); else if((v1 instanceof Array) && v1.__enum__ == null && ((v2 instanceof Array) && v2.__enum__ == null)) return this.compareArgs(v1,v2); else return Reflect.compare(v1,v2);
	}
	,__class__: haxe_ds_EnumValueMap
});
var haxe_ds_GenericCell = function(elt,next) {
	this.elt = elt;
	this.next = next;
};
haxe_ds_GenericCell.__name__ = true;
haxe_ds_GenericCell.prototype = {
	__class__: haxe_ds_GenericCell
};
var haxe_ds_GenericStack = function() {
};
haxe_ds_GenericStack.__name__ = true;
haxe_ds_GenericStack.prototype = {
	__class__: haxe_ds_GenericStack
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	setReserved: function(key,value) {
		if(this.rh == null) this.rh = { };
		this.rh["$" + key] = value;
	}
	,__class__: haxe_ds_StringMap
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) Error.captureStackTrace(this,js__$Boot_HaxeError);
};
js__$Boot_HaxeError.__name__ = true;
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else {
		var cl = o.__class__;
		if(cl != null) return cl;
		var name = js_Boot.__nativeClassName(o);
		if(name != null) return js_Boot.__resolveNativeClass(name);
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str2 = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					if(i1 != 2) str2 += "," + js_Boot.__string_rec(o[i1],s); else str2 += js_Boot.__string_rec(o[i1],s);
				}
				return str2 + ")";
			}
			var l = o.length;
			var i;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) return true;
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") return null;
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var msignal_Signal = function(valueClasses) {
	if(valueClasses == null) valueClasses = [];
	this.valueClasses = valueClasses;
	this.slots = msignal_SlotList.NIL;
	this.priorityBased = false;
};
msignal_Signal.__name__ = true;
msignal_Signal.prototype = {
	add: function(listener) {
		return this.registerListener(listener);
	}
	,addOnce: function(listener) {
		return this.registerListener(listener,true);
	}
	,addWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,false,priority);
	}
	,addOnceWithPriority: function(listener,priority) {
		if(priority == null) priority = 0;
		return this.registerListener(listener,true,priority);
	}
	,remove: function(listener) {
		var slot = this.slots.find(listener);
		if(slot == null) return null;
		this.slots = this.slots.filterNot(listener);
		return slot;
	}
	,removeAll: function() {
		this.slots = msignal_SlotList.NIL;
	}
	,registerListener: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		if(this.registrationPossible(listener,once)) {
			var newSlot = this.createSlot(listener,once,priority);
			if(!this.priorityBased && priority != 0) this.priorityBased = true;
			if(!this.priorityBased && priority == 0) this.slots = this.slots.prepend(newSlot); else this.slots = this.slots.insertWithPriority(newSlot);
			return newSlot;
		}
		return this.slots.find(listener);
	}
	,registrationPossible: function(listener,once) {
		if(!this.slots.nonEmpty) return true;
		var existingSlot = this.slots.find(listener);
		if(existingSlot == null) return true;
		if(existingSlot.once != once) throw new js__$Boot_HaxeError("You cannot addOnce() then add() the same listener without removing the relationship first.");
		return false;
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return null;
	}
	,get_numListeners: function() {
		return this.slots.get_length();
	}
	,__class__: msignal_Signal
	,__properties__: {get_numListeners:"get_numListeners"}
};
var msignal_Signal0 = function() {
	msignal_Signal.call(this);
};
msignal_Signal0.__name__ = true;
msignal_Signal0.__super__ = msignal_Signal;
msignal_Signal0.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function() {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute();
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot0(this,listener,once,priority);
	}
	,__class__: msignal_Signal0
});
var msignal_Signal1 = function(type) {
	msignal_Signal.call(this,[type]);
};
msignal_Signal1.__name__ = true;
msignal_Signal1.__super__ = msignal_Signal;
msignal_Signal1.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function(value) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot1(this,listener,once,priority);
	}
	,__class__: msignal_Signal1
});
var msignal_Signal2 = function(type1,type2) {
	msignal_Signal.call(this,[type1,type2]);
};
msignal_Signal2.__name__ = true;
msignal_Signal2.__super__ = msignal_Signal;
msignal_Signal2.prototype = $extend(msignal_Signal.prototype,{
	dispatch: function(value1,value2) {
		var slotsToProcess = this.slots;
		while(slotsToProcess.nonEmpty) {
			slotsToProcess.head.execute(value1,value2);
			slotsToProcess = slotsToProcess.tail;
		}
	}
	,createSlot: function(listener,once,priority) {
		if(priority == null) priority = 0;
		if(once == null) once = false;
		return new msignal_Slot2(this,listener,once,priority);
	}
	,__class__: msignal_Signal2
});
var msignal_Slot = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	this.signal = signal;
	this.set_listener(listener);
	this.once = once;
	this.priority = priority;
	this.enabled = true;
};
msignal_Slot.__name__ = true;
msignal_Slot.prototype = {
	remove: function() {
		this.signal.remove(this.listener);
	}
	,set_listener: function(value) {
		if(value == null) throw new js__$Boot_HaxeError("listener cannot be null");
		return this.listener = value;
	}
	,__class__: msignal_Slot
	,__properties__: {set_listener:"set_listener"}
};
var msignal_Slot0 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot0.__name__ = true;
msignal_Slot0.__super__ = msignal_Slot;
msignal_Slot0.prototype = $extend(msignal_Slot.prototype,{
	execute: function() {
		if(!this.enabled) return;
		if(this.once) this.remove();
		this.listener();
	}
	,__class__: msignal_Slot0
});
var msignal_Slot1 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot1.__name__ = true;
msignal_Slot1.__super__ = msignal_Slot;
msignal_Slot1.prototype = $extend(msignal_Slot.prototype,{
	execute: function(value1) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param != null) value1 = this.param;
		this.listener(value1);
	}
	,__class__: msignal_Slot1
});
var msignal_Slot2 = function(signal,listener,once,priority) {
	if(priority == null) priority = 0;
	if(once == null) once = false;
	msignal_Slot.call(this,signal,listener,once,priority);
};
msignal_Slot2.__name__ = true;
msignal_Slot2.__super__ = msignal_Slot;
msignal_Slot2.prototype = $extend(msignal_Slot.prototype,{
	execute: function(value1,value2) {
		if(!this.enabled) return;
		if(this.once) this.remove();
		if(this.param1 != null) value1 = this.param1;
		if(this.param2 != null) value2 = this.param2;
		this.listener(value1,value2);
	}
	,__class__: msignal_Slot2
});
var msignal_SlotList = function(head,tail) {
	this.nonEmpty = false;
	if(head == null && tail == null) {
		if(msignal_SlotList.NIL != null) throw new js__$Boot_HaxeError("Parameters head and tail are null. Use the NIL element instead.");
		this.nonEmpty = false;
	} else if(head == null) throw new js__$Boot_HaxeError("Parameter head cannot be null."); else {
		this.head = head;
		if(tail == null) this.tail = msignal_SlotList.NIL; else this.tail = tail;
		this.nonEmpty = true;
	}
};
msignal_SlotList.__name__ = true;
msignal_SlotList.prototype = {
	get_length: function() {
		if(!this.nonEmpty) return 0;
		if(this.tail == msignal_SlotList.NIL) return 1;
		var result = 0;
		var p = this;
		while(p.nonEmpty) {
			++result;
			p = p.tail;
		}
		return result;
	}
	,prepend: function(slot) {
		return new msignal_SlotList(slot,this);
	}
	,append: function(slot) {
		if(slot == null) return this;
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		if(this.tail == msignal_SlotList.NIL) return new msignal_SlotList(slot).prepend(this.head);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,insertWithPriority: function(slot) {
		if(!this.nonEmpty) return new msignal_SlotList(slot);
		var priority = slot.priority;
		if(priority >= this.head.priority) return this.prepend(slot);
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(priority > current.head.priority) {
				subClone.tail = current.prepend(slot);
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		subClone.tail = new msignal_SlotList(slot);
		return wholeClone;
	}
	,filterNot: function(listener) {
		if(!this.nonEmpty || listener == null) return this;
		if(Reflect.compareMethods(this.head.listener,listener)) return this.tail;
		var wholeClone = new msignal_SlotList(this.head);
		var subClone = wholeClone;
		var current = this.tail;
		while(current.nonEmpty) {
			if(Reflect.compareMethods(current.head.listener,listener)) {
				subClone.tail = current.tail;
				return wholeClone;
			}
			subClone = subClone.tail = new msignal_SlotList(current.head);
			current = current.tail;
		}
		return this;
	}
	,contains: function(listener) {
		if(!this.nonEmpty) return false;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return true;
			p = p.tail;
		}
		return false;
	}
	,find: function(listener) {
		if(!this.nonEmpty) return null;
		var p = this;
		while(p.nonEmpty) {
			if(Reflect.compareMethods(p.head.listener,listener)) return p.head;
			p = p.tail;
		}
		return null;
	}
	,__class__: msignal_SlotList
	,__properties__: {get_length:"get_length"}
};
var tweak_elements_BaseElement = function(name) {
	if(name == null) name = "Unnamed Element";
	this.name = name;
	this.id = tweak_elements_BaseElement._id++;
};
tweak_elements_BaseElement.__name__ = true;
tweak_elements_BaseElement.nextId = function() {
	return tweak_elements_BaseElement._id++;
};
tweak_elements_BaseElement.prototype = {
	__class__: tweak_elements_BaseElement
};
var tweak_elements_Folder = function(name,parent) {
	this.signal_didClose = new msignal_Signal1();
	this.signal_didOpen = new msignal_Signal1();
	this.signal_didRemoveProperty = new msignal_Signal2();
	this.signal_didAddProperty = new msignal_Signal2();
	this.signal_didRemoveFolder = new msignal_Signal2();
	this.signal_didAddFolder = new msignal_Signal2();
	this.signal_didUpdate = new msignal_Signal1();
	tweak_elements_BaseElement.call(this,name);
	if(parent != null) {
		this.parent = parent;
		this.backend = parent.backend;
	}
	this.folders = [];
	this.properties = [];
};
tweak_elements_Folder.__name__ = true;
tweak_elements_Folder.__super__ = tweak_elements_BaseElement;
tweak_elements_Folder.prototype = $extend(tweak_elements_BaseElement.prototype,{
	update: function() {
		var _g = 0;
		var _g1 = this.properties;
		while(_g < _g1.length) {
			var property = _g1[_g];
			++_g;
			property.update();
		}
		if(this.folders != null) {
			var _g2 = 0;
			var _g11 = this.folders;
			while(_g2 < _g11.length) {
				var folder = _g11[_g2];
				++_g2;
				folder.update();
			}
		}
		this.signal_didUpdate.dispatch(this);
	}
	,show: function() {
		this.backend.show(this);
		return this;
	}
	,hide: function() {
		this.backend.hide(this);
		return this;
	}
	,open: function() {
		this.backend.openFolder(this);
		this.signal_didOpen.dispatch(this);
		return this;
	}
	,close: function() {
		this.backend.closeFolder(this);
		this.signal_didClose.dispatch(this);
		return this;
	}
	,addFolder: function(name,updateWhenClosed) {
		if(updateWhenClosed == null) updateWhenClosed = true;
		if(!(name != null && name.length > 0)) throw new js__$Boot_HaxeError("FAIL: name != null && name.length > 0");
		var folder = new tweak_elements_Folder(name,this);
		this.folders.push(folder);
		this.signal_didAddFolder.dispatch(this.parent,this);
		var folder1 = this.backend.addFolder(folder);
		return folder1;
	}
	,remove: function() {
		if(this.parent != null) {
			var removed1 = HxOverrides.remove(this.parent.folders,this);
			if(!removed1) throw new js__$Boot_HaxeError("FAIL: removed");
		}
		var removed = this.backend.removeFolder(this);
		if(!removed) throw new js__$Boot_HaxeError("FAIL: removed");
		if(removed) this.signal_didRemoveFolder.dispatch(this.parent,this);
		return this;
	}
	,addProperty: function(object,field) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(field != null && field.length > 0)) throw new js__$Boot_HaxeError("FAIL: field != null && field.length > 0");
		var property = Reflect.getProperty(object,field);
		if(((property | 0) === property) || typeof(property) == "number") this.addNumericSpinbox(object,field); else if(typeof(property) == "string") this.addStringEdit(object,field); else if(typeof(property) == "boolean") this.addBooleanCheckbox(object,field); else if(Reflect.isFunction(property)) this.addPlaceholder(object,field); else if(Reflect.isEnumValue(property)) this.addEnumSelect(object,field); else if(Reflect.isObject(property)) {
			var folder = this.addFolder(field);
			folder.addObject(property);
		}
		return this;
	}
	,addWatch: function(object,field,history) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(field != null && field.length > 0)) throw new js__$Boot_HaxeError("FAIL: field != null && field.length > 0");
		var property = Reflect.getProperty(object,field);
		if(typeof(property) == "string") this.addWatchTextArea(object,field,history); else if(Reflect.isObject(property)) this.addFolderForObjectWatch(property,field,history); else this.addWatchTextArea(object,field,history);
		return this;
	}
	,removeProperty: function(property) {
		if(!(property != null)) throw new js__$Boot_HaxeError("FAIL: property != null");
		var removed = HxOverrides.remove(this.properties,property);
		if(!removed) throw new js__$Boot_HaxeError("FAIL: removed");
		if(!removed) return this;
		this.backend.removeProperty(this,property);
		this.signal_didRemoveProperty.dispatch(this,property);
		return this;
	}
	,addPlaceholder: function(object,field,name) {
		this.backend.addPlaceholder(this,this.makeProperty(object,field,name));
		return this;
	}
	,addWatchTextArea: function(object,field,history) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(field != null && field.length > 0)) throw new js__$Boot_HaxeError("FAIL: field != null && field.length > 0");
		this.backend.addWatchTextArea(this,this.makeProperty(object,field,null),history);
		return this;
	}
	,addBooleanCheckbox: function(object,field,name) {
		if(!(Object.prototype.hasOwnProperty.call(object,field) && typeof(Reflect.getProperty(object,field)) == "boolean")) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && Std.is(Reflect.getProperty(object, field), Bool)");
		this.backend.addBooleanCheckbox(this,this.makeProperty(object,field,name));
		return this;
	}
	,addColorPicker: function(object,field,name) {
		this.backend.addColorPicker(this,this.makeProperty(object,field,name));
		return this;
	}
	,addEnumSelect: function(object,field,name) {
		if(!(Object.prototype.hasOwnProperty.call(object,field) && Reflect.isEnumValue(Reflect.getProperty(object,field)))) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && Reflect.isEnumValue(Reflect.getProperty(object, field))");
		this.backend.addEnumSelect(this,this.makeProperty(object,field,name));
		return this;
	}
	,addStringSelect: function(object,field,options,name) {
		if(!(Object.prototype.hasOwnProperty.call(object,field) && typeof(Reflect.getProperty(object,field)) == "string")) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && Std.is(Reflect.getProperty(object, field), String)");
		this.backend.addStringSelect(this,this.makeProperty(object,field,name),options);
		return this;
	}
	,addItemSelect: function(object,field,items,name) {
		return this;
	}
	,addNumericSlider: function(object,field,name,min,max) {
		if(!(Object.prototype.hasOwnProperty.call(object,field) && (Std["is"](Reflect.getProperty(object,field),Int) || typeof(Reflect.getProperty(object,field)) == "number"))) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && (Std.is(Reflect.getProperty(object, field), Int) || Std.is(Reflect.getProperty(object, field), Float))");
		if(min == null) min = -1e20;
		if(max == null) max = 1e20;
		this.backend.addNumericSlider(this,this.makeProperty(object,field,name),min,max);
		return this;
	}
	,addNumericSpinbox: function(object,field,name) {
		if(!(Object.prototype.hasOwnProperty.call(object,field) && (Std["is"](Reflect.getProperty(object,field),Int) || typeof(Reflect.getProperty(object,field)) == "number"))) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && (Std.is(Reflect.getProperty(object, field), Int) || Std.is(Reflect.getProperty(object, field), Float))");
		this.backend.addNumericSpinbox(this,this.makeProperty(object,field,name));
		return this;
	}
	,addStringEdit: function(object,field,name) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(Object.prototype.hasOwnProperty.call(object,field) && typeof(Reflect.getProperty(object,field)) == "string")) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field) && (Std.is(Reflect.getProperty(object, field), String))");
		this.backend.addStringEdit(this,this.makeProperty(object,field,name));
		return this;
	}
	,addFunction: function(func,parameterTypes,name) {
		if(!(func != null)) throw new js__$Boot_HaxeError("FAIL: func != null");
		if(!Reflect.isFunction(func)) throw new js__$Boot_HaxeError("FAIL: Reflect.isFunction(func)");
		if(!(parameterTypes != null)) throw new js__$Boot_HaxeError("FAIL: parameterTypes != null");
		this.backend.addFunction(this,this.makeFunctionProperty(func,parameterTypes,name));
		return this;
	}
	,addFolderForObject: function(object,name) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(name != null && name.length > 0)) throw new js__$Boot_HaxeError("FAIL: name != null && name.length > 0");
		var folder = this.addFolder(name);
		folder.addObject(object);
		return this;
	}
	,addObject: function(object) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		var fields = Reflect.fields(object);
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			this.addProperty(object,field);
		}
		return this;
	}
	,addFolderForObjectWatch: function(object,name,history) {
		if(history == null) history = 50;
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(name != null && name.length > 0)) throw new js__$Boot_HaxeError("FAIL: name != null && name.length > 0");
		var folder = this.addFolder(name);
		folder.addWatchObject(object,name,history);
		return this;
	}
	,addWatchObject: function(object,name,history) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(name != null && name.length > 0)) throw new js__$Boot_HaxeError("FAIL: name != null && name.length > 0");
		if(!(history >= 0)) throw new js__$Boot_HaxeError("FAIL: history >= 0");
		var fields = Reflect.fields(object);
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			this.addWatch(object,field,history);
		}
		return this;
	}
	,addNumericGraph: function(object,field,name) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(field != null && field.length > 0)) throw new js__$Boot_HaxeError("FAIL: field != null && field.length > 0");
		return this;
	}
	,addObjectExcludingFields: function(object,excludeFields) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(excludeFields != null)) throw new js__$Boot_HaxeError("FAIL: excludeFields != null");
		var fields = Reflect.fields(object);
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			if(excludeFields != null && HxOverrides.indexOf(excludeFields,field,0) == -1) continue;
			this.addProperty(object,field);
		}
		return this;
	}
	,addObjectIncludingFields: function(object,includeFields) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(includeFields != null)) throw new js__$Boot_HaxeError("FAIL: includeFields != null");
		var fields = Reflect.fields(object);
		var _g = 0;
		while(_g < includeFields.length) {
			var field = includeFields[_g];
			++_g;
			if(!Object.prototype.hasOwnProperty.call(object,field)) throw new js__$Boot_HaxeError("FAIL: Reflect.hasField(object, field)");
			this.addProperty(object,field);
		}
		return this;
	}
	,makeProperty: function(object,field,name) {
		if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
		if(!(field != null)) throw new js__$Boot_HaxeError("FAIL: field != null");
		var property = new tweak_elements_Property(object,field,name);
		this.properties.push(property);
		this.signal_didAddProperty.dispatch(this,property);
		return property;
	}
	,makeFunctionProperty: function(func,parameterTypes,name) {
		if(!(func != null)) throw new js__$Boot_HaxeError("FAIL: func != null");
		if(!(parameterTypes != null)) throw new js__$Boot_HaxeError("FAIL: parameterTypes != null");
		var property = new tweak_elements_FunctionProperty(func,parameterTypes,name);
		this.properties.push(property);
		this.signal_didAddProperty.dispatch(this,property);
		return property;
	}
	,__class__: tweak_elements_Folder
});
var tweak_GUI = function(name) {
	tweak_elements_Folder.call(this,name,null);
	this.backend = new tweak_backend_dom_CustomDOMBackend();
	this.backend.addFolder(this);
};
tweak_GUI.__name__ = true;
tweak_GUI.create = function(name) {
	if(!(name != null)) throw new js__$Boot_HaxeError("FAIL: name != null");
	return new tweak_GUI(name);
};
tweak_GUI.__super__ = tweak_elements_Folder;
tweak_GUI.prototype = $extend(tweak_elements_Folder.prototype,{
	__class__: tweak_GUI
});
var tweak_backend_IBackend = function() { };
tweak_backend_IBackend.__name__ = true;
tweak_backend_IBackend.prototype = {
	__class__: tweak_backend_IBackend
};
var tweak_backend_dom_CustomDOMBackend = function() {
	this.lastDragY = 0;
	var _g = this;
	this.rootContainer = this.createRootContainer();
	this.rootFolder = this.createRootFolder();
	this.rootToggleButton = this.createRootToggleButton();
	this.rootContainer.appendChild(this.rootFolder);
	this.rootContainer.appendChild(this.rootToggleButton);
	window.document.body.appendChild(this.rootContainer);
	this.rootToggleButton.onclick = function(event) {
		if(!_g.rootFolder.classList.contains("collapsed")) _g.closeRootFolder(); else _g.openRootFolder();
	};
	this.openRootFolder();
};
tweak_backend_dom_CustomDOMBackend.__name__ = true;
tweak_backend_dom_CustomDOMBackend.__interfaces__ = [tweak_backend_IBackend];
tweak_backend_dom_CustomDOMBackend.prototype = {
	show: function(folder) {
		window.document.getElementById("tweak-gui-folder-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id))).style.display = "visible";
	}
	,hide: function(folder) {
		window.document.getElementById("tweak-gui-folder-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id))).style.display = "none";
	}
	,openRootFolder: function() {
		this.showElement(this.rootFolder,this.rootToggleButton);
		this.rootToggleButton.innerHTML = "Close Controls";
	}
	,closeRootFolder: function() {
		this.closeElement(this.rootFolder,this.rootToggleButton);
		this.rootToggleButton.innerHTML = "Open Controls";
	}
	,addFolder: function(folder) {
		var _g = this;
		var isRoot = folder.parent == null;
		var folderContainer = this.createFolderContainer();
		folderContainer.id = "tweak-gui-folder-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id));
		var folderButtonContainer = this.createFolderButtonContainer();
		var folderToggle = this.createFolderToggleButton(folder.name);
		var folderRemove = this.createFolderRemoveButton();
		var folderList = this.createFolderList();
		folderList.id = "tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id));
		folderButtonContainer.appendChild(folderToggle);
		if(!isRoot) folderButtonContainer.appendChild(folderRemove);
		folderContainer.appendChild(folderButtonContainer);
		folderContainer.appendChild(folderList);
		if(isRoot) this.rootFolder.appendChild(folderContainer); else window.document.getElementById("tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.parent.id))).appendChild(folderContainer);
		folderToggle.onclick = function(event) {
			if(!folderList.classList.contains("collapsed")) {
				if(!(!folderList.classList.contains("collapsed"))) null; else {
					folderList.classList.toggle("collapsed");
					folderToggle.classList.toggle("folder-open");
				}
			} else if(!folderList.classList.contains("collapsed")) null; else {
				folderList.classList.toggle("collapsed");
				folderToggle.classList.toggle("folder-open");
			}
		};
		folderRemove.onclick = function(event1) {
			folder.remove();
		};
		if(!folderContainer.classList.contains("collapsed")) null; else {
			folderContainer.classList.toggle("collapsed");
			folderToggle.classList.toggle("folder-open");
		}
		return folder;
	}
	,removeFolder: function(folder) {
		var folderContainer = window.document.getElementById("tweak-gui-folder-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		try {
			folderContainer.parentNode.removeChild(folderContainer);
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
			if( js_Boot.__instanceof(error,DOMError) ) {
				return false;
			} else throw(error);
		}
		return true;
	}
	,openFolder: function(folder) {
		var folderList = window.document.getElementById("tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		var folderButton = window.document.getElementById("tweak-gui-folder-toggle-button" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		if(!folderList.classList.contains("collapsed")) null; else {
			folderList.classList.toggle("collapsed");
			folderButton.classList.toggle("folder-open");
		}
	}
	,closeFolder: function(folder) {
		var folderList = window.document.getElementById("tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		var folderButton = window.document.getElementById("tweak-gui-folder-toggle-button" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		if(!(!folderList.classList.contains("collapsed"))) null; else {
			folderList.classList.toggle("collapsed");
			folderButton.classList.toggle("folder-open");
		}
	}
	,addLabelPropertyShell: function(folder,property,swatchClass) {
		var folderList = window.document.getElementById("tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		var propertySwatchItem = this.createPropertySwatchElement(swatchClass);
		var propertyListItem = this.createPropertyListElement();
		propertyListItem.id = "tweak-gui-property-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var propertyLabel = this.createPropertyLabel();
		propertyLabel.appendChild(window.document.createTextNode(property.name));
		propertyListItem.appendChild(propertySwatchItem);
		propertyListItem.appendChild(propertyLabel);
		folderList.appendChild(propertyListItem);
		return propertyListItem;
	}
	,addFunctionActivator: function(property,container) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var _g1 = 0;
		var _g = property.parameters.length;
		while(_g1 < _g) {
			var i = _g1++;
			container.appendChild((function($this) {
				var $r;
				var _g2 = property.parameters.charAt(i);
				$r = (function($this) {
					var $r;
					switch(_g2) {
					case "b":
						$r = $this.createCheckbox(property);
						break;
					case "f":
						$r = $this.createNumericSpinbox(property);
						break;
					case "i":
						$r = $this.createNumericSpinbox(property);
						break;
					case "s":
						$r = $this.createStringEdit(property);
						break;
					default:
						$r = (function($this) {
							var $r;
							throw new js__$Boot_HaxeError("Unsupported parameter type");
							return $r;
						}($this));
					}
					return $r;
				}($this));
				return $r;
			}(this)));
		}
		var buttonElement;
		var _this = window.document;
		buttonElement = _this.createElement("button");
		buttonElement.className = "tweak-gui-call-function-button";
		buttonElement.id = id;
		buttonElement.addEventListener("click",function(e) {
			(property.get_value())();
		},true);
		container.appendChild(buttonElement);
	}
	,removeProperty: function(folder,property) {
		var folderList = window.document.getElementById("tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(folder.id)));
		var propertyContainer = window.document.getElementById("tweak-gui-property-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id)));
		try {
			folderList.removeChild(propertyContainer);
		} catch( error ) {
			if (error instanceof js__$Boot_HaxeError) error = error.val;
			if( js_Boot.__instanceof(error,DOMError) ) {
				return false;
			} else throw(error);
		}
		return true;
	}
	,addPlaceholder: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-placeholder-swatch");
		var placeholder = this.createPlaceholder(property);
		propertyListItem.appendChild(placeholder);
	}
	,addBooleanCheckbox: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-boolean-checkbox-swatch");
		var checkbox = this.createCheckbox(property);
		propertyListItem.appendChild(checkbox);
	}
	,addFunction: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-function-swatch");
		this.addFunctionActivator(property,propertyListItem);
	}
	,addStringSelect: function(folder,property,options) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-string-select-swatch");
		var select = this.createStringSelect(property,options);
		propertyListItem.appendChild(select);
	}
	,addEnumSelect: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-enum-select-swatch");
		var select = this.createEnumSelect(property);
		propertyListItem.appendChild(select);
	}
	,addNumericSpinbox: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-numeric-spinbox-swatch");
		var spinbox = this.createNumericSpinbox(property);
		propertyListItem.appendChild(spinbox);
	}
	,addNumericSlider: function(folder,property,min,max) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-numeric-slider-swatch");
		var slider = this.createNumericSlider(property,min,max);
		propertyListItem.appendChild(slider);
	}
	,addStringEdit: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-string-edit-swatch");
		var stringEdit = this.createStringEdit(property);
		propertyListItem.appendChild(stringEdit);
	}
	,addColorPicker: function(folder,property) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-color-picker-swatch");
	}
	,addWatchTextArea: function(folder,property,history) {
		var propertyListItem = this.addLabelPropertyShell(folder,property,"tweak-gui-watch-view-swatch");
		var watchView = this.createWatchView(property,propertyListItem,history);
		propertyListItem.appendChild(watchView);
	}
	,addNumericGraph: function(folder,property) {
	}
	,showElement: function(listElement,toggleButton) {
		if(!listElement.classList.contains("collapsed")) return;
		listElement.classList.toggle("collapsed");
		toggleButton.classList.toggle("folder-open");
	}
	,closeElement: function(listElement,toggleButton) {
		if(!(!listElement.classList.contains("collapsed"))) return;
		listElement.classList.toggle("collapsed");
		toggleButton.classList.toggle("folder-open");
	}
	,isFolderOpen: function(element) {
		return !element.classList.contains("collapsed");
	}
	,createRootContainer: function() {
		var container;
		var _this = window.document;
		container = _this.createElement("div");
		container.className = "tweak-gui-root-folder-container";
		return container;
	}
	,createRootToggleButton: function() {
		var button;
		var _this = window.document;
		button = _this.createElement("button");
		button.className = "tweak-gui-root-toggle-button";
		return button;
	}
	,createRootFolder: function() {
		var folder;
		var _this = window.document;
		folder = _this.createElement("ul");
		folder.className = "tweak-gui-root-folder";
		return folder;
	}
	,createFolderContainer: function() {
		var container;
		var _this = window.document;
		container = _this.createElement("li");
		container.className = "tweak-gui-folder-container";
		return container;
	}
	,createFolderButtonContainer: function() {
		var container;
		var _this = window.document;
		container = _this.createElement("div");
		container.className = "tweak-gui-folder-button-container";
		return container;
	}
	,createFolderToggleButton: function(text) {
		var button;
		var _this = window.document;
		button = _this.createElement("button");
		button.className = "tweak-gui-folder-toggle-button";
		button.textContent = text;
		return button;
	}
	,createFolderRemoveButton: function() {
		var button;
		var _this = window.document;
		button = _this.createElement("button");
		button.className = "tweak-gui-folder-remove-button";
		return button;
	}
	,createFolderList: function() {
		var list;
		var _this = window.document;
		list = _this.createElement("ul");
		list.className = "tweak-gui-folder-list";
		return list;
	}
	,createPropertyListElement: function() {
		var element;
		var _this = window.document;
		element = _this.createElement("li");
		element.className = "tweak-gui-property-container";
		return element;
	}
	,createPropertyLabel: function() {
		var label;
		var _this = window.document;
		label = _this.createElement("div");
		label.className = "tweak-gui-property-label";
		return label;
	}
	,createPropertySwatchElement: function(swatchClass) {
		var swatch;
		var _this = window.document;
		swatch = _this.createElement("div");
		swatch.className = "tweak-gui-property-swatch";
		swatch.classList.add(swatchClass);
		return swatch;
	}
	,createPlaceholder: function(property) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var element;
		var _this = window.document;
		element = _this.createElement("div");
		element.className = "tweak-gui-placeholder";
		element.id = id;
		return element;
	}
	,createCheckbox: function(property) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var checkbox;
		var _this = window.document;
		checkbox = _this.createElement("input");
		checkbox.type = "checkbox";
		checkbox.className = "tweak-gui-checkbox";
		checkbox.id = id;
		property.signal_changed.add(function(last,current) {
			checkbox.checked = current;
		});
		checkbox.addEventListener("change",function(e) {
			property.set_value(checkbox.checked);
		},true);
		return checkbox;
	}
	,createStringEdit: function(property) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var textElement;
		var _this = window.document;
		textElement = _this.createElement("input");
		textElement.type = "text";
		textElement.className = "tweak-gui-stringedit";
		textElement.id = id;
		textElement.value = property.get_value();
		textElement.setAttribute("spellcheck","disabled");
		property.signal_changed.add(function(last,current) {
			textElement.value = current;
		});
		textElement.addEventListener("change",function(e) {
			property.set_value(textElement.value);
		},true);
		return textElement;
	}
	,createStringSelect: function(property,options) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var select;
		var _this = window.document;
		select = _this.createElement("select");
		select.className = "tweak-gui-string-select";
		select.id = id;
		var _g = 0;
		while(_g < options.length) {
			var option = options[_g];
			++_g;
			var o;
			var _this1 = window.document;
			o = _this1.createElement("option");
			o.text = option;
			select.add(o);
		}
		select.addEventListener("change",function(e) {
			property.set_value(select.value);
		},true);
		return select;
	}
	,createEnumSelect: function(property) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var select;
		var _this = window.document;
		select = _this.createElement("select");
		select.className = "tweak-gui-enum-select";
		select.id = id;
		var options = Type.allEnums(Type.getEnum(property.get_value()));
		var _g = 0;
		while(_g < options.length) {
			var option = options[_g];
			++_g;
			var o;
			var _this1 = window.document;
			o = _this1.createElement("option");
			o.text = Std.string(option);
			select.add(o);
		}
		select.addEventListener("change",function(e) {
			property.set_value(Type.allEnums(Type.getEnum(property.get_value()))[select.selectedIndex]);
		},true);
		return select;
	}
	,createNumericSpinbox: function(property) {
		var _g = this;
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var inputElement;
		var _this = window.document;
		inputElement = _this.createElement("input");
		inputElement.type = "number";
		inputElement.className = "tweak-gui-numericspinbox";
		inputElement.id = id;
		inputElement.value = property.get_value();
		property.signal_changed.add(function(last,current) {
			inputElement.value = current;
		});
		inputElement.addEventListener("change",function(e2) {
			property.set_value(parseFloat(inputElement.value));
		},true);
		var getClientY = function(e) {
			if(typeof(e.clientY) == "string") return parseFloat(e.clientY);
			return e.clientY;
		};
		var onMouseDrag = function(e1) {
			var dy = _g.lastDragY - getClientY(e1);
			var _g1 = property;
			_g1.set_value(_g1.get_value() + dy);
			_g.lastDragY = getClientY(e1);
		};
		var onMouseUp = null;
		onMouseUp = function(e3) {
			window.document.removeEventListener("mousemove",onMouseDrag);
			window.document.removeEventListener("mouseup",onMouseUp);
		};
		inputElement.addEventListener("mousedown",function(e4) {
			_g.lastDragY = getClientY(e4);
			window.document.addEventListener("mousemove",onMouseDrag);
			window.document.addEventListener("mouseup",onMouseUp);
		},true);
		return inputElement;
	}
	,createNumericSlider: function(property,min,max) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var inputElement;
		var _this = window.document;
		inputElement = _this.createElement("input");
		inputElement.type = "range";
		inputElement.className = "tweak-gui-numericslider";
		inputElement.id = id;
		inputElement.value = property.get_value();
		if(min == null) inputElement.min = "null"; else inputElement.min = "" + min;
		if(max == null) inputElement.max = "null"; else inputElement.max = "" + max;
		property.signal_changed.add(function(last,current) {
			inputElement.value = current;
		});
		inputElement.addEventListener("change",function(e) {
			property.set_value(parseFloat(inputElement.value));
		},true);
		return inputElement;
	}
	,createWatchView: function(property,propertyListItem,history) {
		var id = property.name + "-" + Std.string(_$UInt_UInt_$Impl_$.toFloat(property.id));
		var textAreaElement;
		var _this = window.document;
		textAreaElement = _this.createElement("textarea");
		textAreaElement.className = "tweak-gui-watch-view";
		textAreaElement.id = id;
		textAreaElement.setAttribute("readonly","true");
		textAreaElement.setAttribute("rows",history == null?"null":"" + history);
		textAreaElement.setAttribute("spellcheck","disabled");
		property.signal_changed.add(function(last,current) {
			textAreaElement.value = Std.string(current);
		});
		textAreaElement.value += Std.string(property.get_value()) + "\r\n";
		return textAreaElement;
	}
	,getIdForFolderContainer: function(element) {
		return "tweak-gui-folder-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(element.id));
	}
	,getIdForFolderList: function(element) {
		return "tweak-gui-folder-list" + Std.string(_$UInt_UInt_$Impl_$.toFloat(element.id));
	}
	,getIdForFolderToggleButton: function(element) {
		return "tweak-gui-folder-toggle-button" + Std.string(_$UInt_UInt_$Impl_$.toFloat(element.id));
	}
	,getIdForPropertyContainer: function(element) {
		return "tweak-gui-property-container" + Std.string(_$UInt_UInt_$Impl_$.toFloat(element.id));
	}
	,__class__: tweak_backend_dom_CustomDOMBackend
};
var tweak_elements_IProperty = function() { };
tweak_elements_IProperty.__name__ = true;
tweak_elements_IProperty.prototype = {
	__class__: tweak_elements_IProperty
	,__properties__: {set_value:"set_value",get_value:"get_value"}
};
var tweak_elements_FunctionProperty = function(func,parameters,name) {
	if(!(func != null)) throw new js__$Boot_HaxeError("FAIL: func != null");
	if(!(parameters != null)) throw new js__$Boot_HaxeError("FAIL: parameters != null");
	if(name == null) tweak_elements_BaseElement.call(this,(parameters.length == null?"null":"" + parameters.length) + "-ary Function"); else tweak_elements_BaseElement.call(this,name);
	this.signal_changed = new msignal_Signal2();
	this.parameters = parameters;
	this.set_value(func);
};
tweak_elements_FunctionProperty.__name__ = true;
tweak_elements_FunctionProperty.__interfaces__ = [tweak_elements_IProperty];
tweak_elements_FunctionProperty.__super__ = tweak_elements_BaseElement;
tweak_elements_FunctionProperty.prototype = $extend(tweak_elements_BaseElement.prototype,{
	update: function() {
	}
	,get_value: function() {
		return this.value;
	}
	,set_value: function(v) {
		var tmp = this.get_value();
		this.value = v;
		this.signal_changed.dispatch(tmp,v);
		return this.get_value();
	}
	,__class__: tweak_elements_FunctionProperty
	,__properties__: {set_value:"set_value",get_value:"get_value"}
});
var tweak_elements_Property = function(object,field,name) {
	if(!(object != null)) throw new js__$Boot_HaxeError("FAIL: object != null");
	if(!(field != null)) throw new js__$Boot_HaxeError("FAIL: field != null");
	if(name == null) tweak_elements_BaseElement.call(this,field); else tweak_elements_BaseElement.call(this,name);
	this.object = object;
	this.field = field;
	this.signal_changed = new msignal_Signal2();
	this.lastValue = this.get_value();
};
tweak_elements_Property.__name__ = true;
tweak_elements_Property.__interfaces__ = [tweak_elements_IProperty];
tweak_elements_Property.__super__ = tweak_elements_BaseElement;
tweak_elements_Property.prototype = $extend(tweak_elements_BaseElement.prototype,{
	update: function() {
		if(this.object == null) return;
		if(this.lastValue != Reflect.getProperty(this.object,this.field)) {
			this.signal_changed.dispatch(this.lastValue,this.get_value());
			this.lastValue = this.get_value();
		}
	}
	,get_value: function() {
		if(!(this.object != null && this.field != null)) throw new js__$Boot_HaxeError("FAIL: object != null && field != null");
		return Reflect.getProperty(this.object,this.field);
	}
	,set_value: function(v) {
		if(!(this.object != null && this.field != null)) throw new js__$Boot_HaxeError("FAIL: object != null && field != null");
		this.signal_changed.dispatch(this.lastValue,v);
		Reflect.setProperty(this.object,this.field,v);
		return v;
	}
	,__class__: tweak_elements_Property
	,__properties__: {set_value:"set_value",get_value:"get_value"}
});
var tweak_util_Util = function() { };
tweak_util_Util.__name__ = true;
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
Date.prototype.__class__ = Date;
Date.__name__ = ["Date"];
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
msignal_SlotList.NIL = new msignal_SlotList(null,null);
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = {}.toString;
tweak_elements_BaseElement._id = 0;
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}}, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=tweak-gui.js.map