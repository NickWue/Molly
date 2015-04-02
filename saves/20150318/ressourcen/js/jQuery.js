/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function (e, undefined) {
	var t,
	n,
	r = typeof undefined,
	i = e.location,
	o = e.document,
	s = o.documentElement,
	a = e.jQuery,
	u = e.$,
	l = {},
	c = [],
	p = "2.0.3",
	f = c.concat,
	h = c.push,
	d = c.slice,
	g = c.indexOf,
	m = l.toString,
	y = l.hasOwnProperty,
	v = p.trim,
	x = function (e, n) {
		return new x.fn.init(e, n, t)
	},
	b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	w = /\S+/g,
	T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	k = /^-ms-/,
	N = /-([\da-z])/gi,
	E = function (e, t) {
		return t.toUpperCase()
	},
	S = function () {
		o.removeEventListener("DOMContentLoaded", S, !1),
		e.removeEventListener("load", S, !1),
		x.ready()
	};
	x.fn = x.prototype = {
		jquery : p,
		constructor : x,
		init : function (e, t, n) {
			var r,
			i;
			if (!e)
				return this;
			if ("string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t)
					return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
						for (r in t)
							x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = o.getElementById(r[2]),
				i && i.parentNode && (this.length = 1, this[0] = i),
				this.context = o,
				this.selector = e,
				this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector : "",
		length : 0,
		toArray : function () {
			return d.call(this)
		},
		get : function (e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack : function (e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this,
			t.context = this.context,
			t
		},
		each : function (e, t) {
			return x.each(this, e, t)
		},
		ready : function (e) {
			return x.ready.promise().done(e),
			this
		},
		slice : function () {
			return this.pushStack(d.apply(this, arguments))
		},
		first : function () {
			return this.eq(0)
		},
		last : function () {
			return this.eq(-1)
		},
		eq : function (e) {
			var t = this.length,
			n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map : function (e) {
			return this.pushStack(x.map(this, function (t, n) {
					return e.call(t, n, t)
				}))
		},
		end : function () {
			return this.prevObject || this.constructor(null)
		},
		push : h,
		sort : [].sort,
		splice : [].splice
	},
	x.fn.init.prototype = x.fn,
	x.extend = x.fn.extend = function () {
		var e,
		t,
		n,
		r,
		i,
		o,
		s = arguments[0] || {},
		a = 1,
		u = arguments.length,
		l = !1;
		for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
			if (null != (e = arguments[a]))
				for (t in e)
					n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
		return s
	},
	x.extend({
		expando : "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noConflict : function (t) {
			return e.$ === x && (e.$ = u),
			t && e.jQuery === x && (e.jQuery = a),
			x
		},
		isReady : !1,
		readyWait : 1,
		holdReady : function (e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready : function (e) {
			(e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")))
		},
		isFunction : function (e) {
			return "function" === x.type(e)
		},
		isArray : Array.isArray,
		isWindow : function (e) {
			return null != e && e === e.window
		},
		isNumeric : function (e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type : function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject : function (e) {
			if ("object" !== x.type(e) || e.nodeType || x.isWindow(e))
				return !1;
			try {
				if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf"))
					return !1
			} catch (t) {
				return !1
			}
			return !0
		},
		isEmptyObject : function (e) {
			var t;
			for (t in e)
				return !1;
			return !0
		},
		error : function (e) {
			throw Error(e)
		},
		parseHTML : function (e, t, n) {
			if (!e || "string" != typeof e)
				return null;
			"boolean" == typeof t && (n = t, t = !1),
			t = t || o;
			var r = C.exec(e),
			i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON : JSON.parse,
		parseXML : function (e) {
			var t,
			n;
			if (!e || "string" != typeof e)
				return null;
			try {
				n = new DOMParser,
				t = n.parseFromString(e, "text/xml")
			} catch (r) {
				t = undefined
			}
			return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e),
			t
		},
		noop : function () {},
		globalEval : function (e) {
			var t,
			n = eval;
			e = x.trim(e),
			e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase : function (e) {
			return e.replace(k, "ms-").replace(N, E)
		},
		nodeName : function (e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each : function (e, t, n) {
			var r,
			i = 0,
			o = e.length,
			s = j(e);
			if (n) {
				if (s) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1)
							break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1)
							break
			} else if (s) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1)
						break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1)
						break;
			return e
		},
		trim : function (e) {
			return null == e ? "" : v.call(e)
		},
		makeArray : function (e, t) {
			var n = t || [];
			return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
			n
		},
		inArray : function (e, t, n) {
			return null == t ? -1 : g.call(t, e, n)
		},
		merge : function (e, t) {
			var n = t.length,
			r = e.length,
			i = 0;
			if ("number" == typeof n)
				for (; n > i; i++)
					e[r++] = t[i];
			else
				while (t[i] !== undefined)
					e[r++] = t[i++];
			return e.length = r,
			e
		},
		grep : function (e, t, n) {
			var r,
			i = [],
			o = 0,
			s = e.length;
			for (n = !!n; s > o; o++)
				r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map : function (e, t, n) {
			var r,
			i = 0,
			o = e.length,
			s = j(e),
			a = [];
			if (s)
				for (; o > i; i++)
					r = t(e[i], i, n), null != r && (a[a.length] = r);
			else
				for (i in e)
					r = t(e[i], i, n), null != r && (a[a.length] = r);
			return f.apply([], a)
		},
		guid : 1,
		proxy : function (e, t) {
			var n,
			r,
			i;
			return "string" == typeof t && (n = e[t], t = e, e = n),
			x.isFunction(e) ? (r = d.call(arguments, 2), i = function () {
				return e.apply(t || this, r.concat(d.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : undefined
		},
		access : function (e, t, n, r, i, o, s) {
			var a = 0,
			u = e.length,
			l = null == n;
			if ("object" === x.type(n)) {
				i = !0;
				for (a in n)
					x.access(e, t, a, n[a], !0, o, s)
			} else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
							return l.call(x(e), n)
						})), t))
				for (; u > a; a++)
					t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		now : Date.now,
		swap : function (e, t, n, r) {
			var i,
			o,
			s = {};
			for (o in t)
				s[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t)
				e.style[o] = s[o];
			return i
		}
	}),
	x.ready.promise = function (t) {
		return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))),
		n.promise(t)
	},
	x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});
	function j(e) {
		var t = e.length,
		n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	t = x(o),
	function (e, undefined) {
		var t,
		n,
		r,
		i,
		o,
		s,
		a,
		u,
		l,
		c,
		p,
		f,
		h,
		d,
		g,
		m,
		y,
		v = "sizzle" + -new Date,
		b = e.document,
		w = 0,
		T = 0,
		C = st(),
		k = st(),
		N = st(),
		E = !1,
		S = function (e, t) {
			return e === t ? (E = !0, 0) : 0
		},
		j = typeof undefined,
		D = 1 << 31,
		A = {}

		.hasOwnProperty,
		L = [],
		q = L.pop,
		H = L.push,
		O = L.push,
		F = L.slice,
		P = L.indexOf || function (e) {
			var t = 0,
			n = this.length;
			for (; n > t; t++)
				if (this[t] === e)
					return t;
			return -1
		},
		R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		M = "[\\x20\\t\\r\\n\\f]",
		W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		$ = W.replace("w", "w#"),
		B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
		I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
		z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
		_ = RegExp("^" + M + "*," + M + "*"),
		X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
		U = RegExp(M + "*[+~]"),
		Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"),
		V = RegExp(I),
		G = RegExp("^" + $ + "$"),
		J = {
			ID : RegExp("^#(" + W + ")"),
			CLASS : RegExp("^\\.(" + W + ")"),
			TAG : RegExp("^(" + W.replace("w", "w*") + ")"),
			ATTR : RegExp("^" + B),
			PSEUDO : RegExp("^" + I),
			CHILD : RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
			bool : RegExp("^(?:" + R + ")$", "i"),
			needsContext : RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
		},
		Q = /^[^{]+\{\s*\[native \w/,
		K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Z = /^(?:input|select|textarea|button)$/i,
		et = /^h\d$/i,
		tt = /'|\\/g,
		nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
		rt = function (e, t, n) {
			var r = "0x" + t - 65536;
			return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
		};
		try {
			O.apply(L = F.call(b.childNodes), b.childNodes),
			L[b.childNodes.length].nodeType
		} catch (it) {
			O = {
				apply : L.length ? function (e, t) {
					H.apply(e, F.call(t))
				}
				 : function (e, t) {
					var n = e.length,
					r = 0;
					while (e[n++] = t[r++]);
					e.length = n - 1
				}
			}
		}
		function ot(e, t, r, i) {
			var o,
			s,
			a,
			u,
			l,
			f,
			g,
			m,
			x,
			w;
			if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e)
				return r;
			if (1 !== (u = t.nodeType) && 9 !== u)
				return [];
			if (h && !i) {
				if (o = K.exec(e))
					if (a = o[1]) {
						if (9 === u) {
							if (s = t.getElementById(a), !s || !s.parentNode)
								return r;
							if (s.id === a)
								return r.push(s), r
						} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a)
							return r.push(s), r
					} else {
						if (o[2])
							return O.apply(r, t.getElementsByTagName(e)), r;
						if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName)
							return O.apply(r, t.getElementsByClassName(a)), r
					}
				if (n.qsa && (!d || !d.test(e))) {
					if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
						f = gt(e),
						(g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m),
						m = "[id='" + m + "'] ",
						l = f.length;
						while (l--)
							f[l] = m + mt(f[l]);
						x = U.test(e) && t.parentNode || t,
						w = f.join(",")
					}
					if (w)
						try {
							return O.apply(r, x.querySelectorAll(w)),
							r
						} catch (T) {}

					finally {
						g || t.removeAttribute("id")
					}
				}
			}
			return kt(e.replace(z, "$1"), t, r, i)
		}
		function st() {
			var e = [];
			function t(n, r) {
				return e.push(n += " ") > i.cacheLength && delete t[e.shift()],
				t[n] = r
			}
			return t
		}
		function at(e) {
			return e[v] = !0,
			e
		}
		function ut(e) {
			var t = p.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			}
			finally {
				t.parentNode && t.parentNode.removeChild(t),
				t = null
			}
		}
		function lt(e, t) {
			var n = e.split("|"),
			r = e.length;
			while (r--)
				i.attrHandle[n[r]] = t
		}
		function ct(e, t) {
			var n = t && e,
			r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
			if (r)
				return r;
			if (n)
				while (n = n.nextSibling)
					if (n === t)
						return -1;
			return e ? 1 : -1
		}
		function pt(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function ft(e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function ht(e) {
			return at(function (t) {
				return t = +t,
				at(function (n, r) {
					var i,
					o = e([], n.length, t),
					s = o.length;
					while (s--)
						n[i = o[s]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		s = ot.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		},
		n = ot.support = {},
		c = ot.setDocument = function (e) {
			var t = e ? e.ownerDocument || e : b,
			r = t.defaultView;
			return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
					c()
				}), n.attributes = ut(function (e) {
						return e.className = "i",
						!e.getAttribute("className")
					}), n.getElementsByTagName = ut(function (e) {
						return e.appendChild(t.createComment("")),
						!e.getElementsByTagName("*").length
					}), n.getElementsByClassName = ut(function (e) {
						return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
						e.firstChild.className = "i",
						2 === e.getElementsByClassName("i").length
					}), n.getById = ut(function (e) {
						return f.appendChild(e).id = v,
						!t.getElementsByName || !t.getElementsByName(v).length
					}), n.getById ? (i.find.ID = function (e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, i.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						return e.getAttribute("id") === t
					}
				}) : (delete i.find.ID, i.filter.ID = function (e) {
					var t = e.replace(nt, rt);
					return function (e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), i.find.TAG = n.getElementsByTagName ? function (e, t) {
				return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
			}
				 : function (e, t) {
				var n,
				r = [],
				i = 0,
				o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++])
						1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, i.find.CLASS = n.getElementsByClassName && function (e, t) {
				return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
			}, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function (e) {
						e.innerHTML = "<select><option selected=''></option></select>",
						e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"),
						e.querySelectorAll(":checked").length || d.push(":checked")
					}), ut(function (e) {
						var n = t.createElement("input");
						n.setAttribute("type", "hidden"),
						e.appendChild(n).setAttribute("t", ""),
						e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"),
						e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"),
						e.querySelectorAll("*,:x"),
						d.push(",.*:")
					})), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function (e) {
					n.disconnectedMatch = m.call(e, "div"),
					m.call(e, "[s!='']:x"),
					g.push("!=", I)
				}), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
				r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			}
				 : function (e, t) {
				if (t)
					while (t = t.parentNode)
						if (t === e)
							return !0;
				return !1
			}, S = f.compareDocumentPosition ? function (e, r) {
				if (e === r)
					return E = !0, 0;
				var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
				return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			}
				 : function (e, n) {
				var r,
				i = 0,
				o = e.parentNode,
				s = n.parentNode,
				a = [e],
				u = [n];
				if (e === n)
					return E = !0, 0;
				if (!o || !s)
					return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
				if (o === s)
					return ct(e, n);
				r = e;
				while (r = r.parentNode)
					a.unshift(r);
				r = n;
				while (r = r.parentNode)
					u.unshift(r);
				while (a[i] === u[i])
					i++;
				return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
			}, t) : p
		},
		ot.matches = function (e, t) {
			return ot(e, null, null, t)
		},
		ot.matchesSelector = function (e, t) {
			if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t)))
				try {
					var r = m.call(e, t);
					if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
						return r
				} catch (i) {}

			return ot(t, p, null, [e]).length > 0
		},
		ot.contains = function (e, t) {
			return (e.ownerDocument || e) !== p && c(e),
			y(e, t)
		},
		ot.attr = function (e, t) {
			(e.ownerDocument || e) !== p && c(e);
			var r = i.attrHandle[t.toLowerCase()],
			o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
			return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
		},
		ot.error = function (e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		},
		ot.uniqueSort = function (e) {
			var t,
			r = [],
			i = 0,
			o = 0;
			if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
				while (t = e[o++])
					t === e[o] && (i = r.push(o));
				while (i--)
					e.splice(r[i], 1)
			}
			return e
		},
		o = ot.getText = function (e) {
			var t,
			n = "",
			r = 0,
			i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent)
						return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling)
						n += o(e)
				} else if (3 === i || 4 === i)
					return e.nodeValue
			} else
				for (; t = e[r]; r++)
					n += o(t);
			return n
		},
		i = ot.selectors = {
			cacheLength : 50,
			createPseudo : at,
			match : J,
			attrHandle : {},
			find : {},
			relative : {
				">" : {
					dir : "parentNode",
					first : !0
				},
				" " : {
					dir : "parentNode"
				},
				"+" : {
					dir : "previousSibling",
					first : !0
				},
				"~" : {
					dir : "previousSibling"
				}
			},
			preFilter : {
				ATTR : function (e) {
					return e[1] = e[1].replace(nt, rt),
					e[3] = (e[4] || e[5] || "").replace(nt, rt),
					"~=" === e[2] && (e[3] = " " + e[3] + " "),
					e.slice(0, 4)
				},
				CHILD : function (e) {
					return e[1] = e[1].toLowerCase(),
					"nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] =  + (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =  + (e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]),
					e
				},
				PSEUDO : function (e) {
					var t,
					n = !e[5] && e[2];
					return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter : {
				TAG : function (e) {
					var t = e.replace(nt, rt).toLowerCase();
					return "*" === e ? function () {
						return !0
					}
					 : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS : function (e) {
					var t = C[e + " "];
					return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
					})
				},
				ATTR : function (e, t, n) {
					return function (r) {
						var i = ot.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD : function (e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
					s = "last" !== e.slice(-4),
					a = "of-type" === t;
					return 1 === r && 0 === i ? function (e) {
						return !!e.parentNode
					}
					 : function (t, n, u) {
						var l,
						c,
						p,
						f,
						h,
						d,
						g = o !== s ? "nextSibling" : "previousSibling",
						m = t.parentNode,
						y = a && t.nodeName.toLowerCase(),
						x = !u && !a;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g])
										if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
											return !1;
									d = g = "only" === e && !d && "nextSibling"
								}
								return !0
							}
							if (d = [s ? m.firstChild : m.lastChild], s && x) {
								c = m[v] || (m[v] = {}),
								l = c[e] || [],
								h = l[0] === w && l[1],
								f = l[0] === w && l[2],
								p = h && m.childNodes[h];
								while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
									if (1 === p.nodeType && ++f && p === t) {
										c[e] = [w, h, f];
										break
									}
							} else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w)
								f = l[1];
							else
								while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
									if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t))
										break;
							return f -= i,
							f === r || 0 === f % r && f / r >= 0
						}
					}
				},
				PSEUDO : function (e, t) {
					var n,
					r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
					return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function (e, n) {
							var i,
							o = r(e, t),
							s = o.length;
							while (s--)
								i = P.call(e, o[s]), e[i] = !(n[i] = o[s])
						}) : function (e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos : {
				not : at(function (e) {
					var t = [],
					n = [],
					r = a(e.replace(z, "$1"));
					return r[v] ? at(function (e, t, n, i) {
						var o,
						s = r(e, null, i, []),
						a = e.length;
						while (a--)
							(o = s[a]) && (e[a] = !(t[a] = o))
					}) : function (e, i, o) {
						return t[0] = e,
						r(t, null, o, n),
						!n.pop()
					}
				}),
				has : at(function (e) {
					return function (t) {
						return ot(e, t).length > 0
					}
				}),
				contains : at(function (e) {
					return function (t) {
						return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
					}
				}),
				lang : at(function (e) {
					return G.test(e || "") || ot.error("unsupported lang: " + e),
					e = e.replace(nt, rt).toLowerCase(),
					function (t) {
						var n;
						do
							if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
								return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target : function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root : function (e) {
					return e === f
				},
				focus : function (e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled : function (e) {
					return e.disabled === !1
				},
				disabled : function (e) {
					return e.disabled === !0
				},
				checked : function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected : function (e) {
					return e.parentNode && e.parentNode.selectedIndex,
					e.selected === !0
				},
				empty : function (e) {
					for (e = e.firstChild; e; e = e.nextSibling)
						if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
							return !1;
					return !0
				},
				parent : function (e) {
					return !i.pseudos.empty(e)
				},
				header : function (e) {
					return et.test(e.nodeName)
				},
				input : function (e) {
					return Z.test(e.nodeName)
				},
				button : function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text : function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first : ht(function () {
					return [0]
				}),
				last : ht(function (e, t) {
					return [t - 1]
				}),
				eq : ht(function (e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even : ht(function (e, t) {
					var n = 0;
					for (; t > n; n += 2)
						e.push(n);
					return e
				}),
				odd : ht(function (e, t) {
					var n = 1;
					for (; t > n; n += 2)
						e.push(n);
					return e
				}),
				lt : ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0; )
						e.push(r);
					return e
				}),
				gt : ht(function (e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r; )
						e.push(r);
					return e
				})
			}
		},
		i.pseudos.nth = i.pseudos.eq;
		for (t in {
			radio : !0,
			checkbox : !0,
			file : !0,
			password : !0,
			image : !0
		})
			i.pseudos[t] = pt(t);
		for (t in {
			submit : !0,
			reset : !0
		})
			i.pseudos[t] = ft(t);
		function dt() {}

		dt.prototype = i.filters = i.pseudos,
		i.setFilters = new dt;
		function gt(e, t) {
			var n,
			r,
			o,
			s,
			a,
			u,
			l,
			c = k[e + " "];
			if (c)
				return t ? 0 : c.slice(0);
			a = e,
			u = [],
			l = i.preFilter;
			while (a) {
				(!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])),
				n = !1,
				(r = X.exec(a)) && (n = r.shift(), o.push({
						value : n,
						type : r[0].replace(z, " ")
					}), a = a.slice(n.length));
				for (s in i.filter)
					!(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
							value : n,
							type : s,
							matches : r
						}), a = a.slice(n.length));
				if (!n)
					break
			}
			return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
		}
		function mt(e) {
			var t = 0,
			n = e.length,
			r = "";
			for (; n > t; t++)
				r += e[t].value;
			return r
		}
		function yt(e, t, n) {
			var i = t.dir,
			o = n && "parentNode" === i,
			s = T++;
			return t.first ? function (t, n, r) {
				while (t = t[i])
					if (1 === t.nodeType || o)
						return e(t, n, r)
			}
			 : function (t, n, a) {
				var u,
				l,
				c,
				p = w + " " + s;
				if (a) {
					while (t = t[i])
						if ((1 === t.nodeType || o) && e(t, n, a))
							return !0
				} else
					while (t = t[i])
						if (1 === t.nodeType || o)
							if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
								if ((u = l[1]) === !0 || u === r)
									return u === !0
							} else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0)
								return !0
			}
		}
		function vt(e) {
			return e.length > 1 ? function (t, n, r) {
				var i = e.length;
				while (i--)
					if (!e[i](t, n, r))
						return !1;
				return !0
			}
			 : e[0]
		}
		function xt(e, t, n, r, i) {
			var o,
			s = [],
			a = 0,
			u = e.length,
			l = null != t;
			for (; u > a; a++)
				(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
			return s
		}
		function bt(e, t, n, r, i, o) {
			return r && !r[v] && (r = bt(r)),
			i && !i[v] && (i = bt(i, o)),
			at(function (o, s, a, u) {
				var l,
				c,
				p,
				f = [],
				h = [],
				d = s.length,
				g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
				m = !e || !o && t ? g : xt(g, f, e, a, u),
				y = n ? i || (o ? e : d || r) ? [] : s : m;
				if (n && n(m, y, a, u), r) {
					l = xt(y, h),
					r(l, [], a, u),
					c = l.length;
					while (c--)
						(p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
				}
				if (o) {
					if (i || e) {
						if (i) {
							l = [],
							c = y.length;
							while (c--)
								(p = y[c]) && l.push(m[c] = p);
							i(null, y = [], l, u)
						}
						c = y.length;
						while (c--)
							(p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
					}
				} else
					y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y)
			})
		}
		function wt(e) {
			var t,
			n,
			r,
			o = e.length,
			s = i.relative[e[0].type],
			a = s || i.relative[" "],
			l = s ? 1 : 0,
			c = yt(function (e) {
					return e === t
				}, a, !0),
			p = yt(function (e) {
					return P.call(t, e) > -1
				}, a, !0),
			f = [function (e, n, r) {
					return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
				}
			];
			for (; o > l; l++)
				if (n = i.relative[e[l].type])
					f = [yt(vt(f), n)];
				else {
					if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
						for (r = ++l; o > r; r++)
							if (i.relative[e[r].type])
								break;
						return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({
									value : " " === e[l - 2].type ? "*" : ""
								})).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
					}
					f.push(n)
				}
			return vt(f)
		}
		function Tt(e, t) {
			var n = 0,
			o = t.length > 0,
			s = e.length > 0,
			a = function (a, l, c, f, h) {
				var d,
				g,
				m,
				y = [],
				v = 0,
				x = "0",
				b = a && [],
				T = null != h,
				C = u,
				k = a || s && i.find.TAG("*", h && l.parentNode || l),
				N = w += null == C ? 1 : Math.random() || .1;
				for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
					if (s && d) {
						g = 0;
						while (m = e[g++])
							if (m(d, l, c)) {
								f.push(d);
								break
							}
						T && (w = N, r = ++n)
					}
					o && ((d = !m && d) && v--, a && b.push(d))
				}
				if (v += x, o && x !== v) {
					g = 0;
					while (m = t[g++])
						m(b, y, l, c);
					if (a) {
						if (v > 0)
							while (x--)
								b[x] || y[x] || (y[x] = q.call(f));
						y = xt(y)
					}
					O.apply(f, y),
					T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
				}
				return T && (w = N, u = C),
				b
			};
			return o ? at(a) : a
		}
		a = ot.compile = function (e, t) {
			var n,
			r = [],
			i = [],
			o = N[e + " "];
			if (!o) {
				t || (t = gt(e)),
				n = t.length;
				while (n--)
					o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
				o = N(e, Tt(i, r))
			}
			return o
		};
		function Ct(e, t, n) {
			var r = 0,
			i = t.length;
			for (; i > r; r++)
				ot(e, t[r], n);
			return n
		}
		function kt(e, t, r, o) {
			var s,
			u,
			l,
			c,
			p,
			f = gt(e);
			if (!o && 1 === f.length) {
				if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
					if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t)
						return r;
					e = e.slice(u.shift().value.length)
				}
				s = J.needsContext.test(e) ? 0 : u.length;
				while (s--) {
					if (l = u[s], i.relative[c = l.type])
						break;
					if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
						if (u.splice(s, 1), e = o.length && mt(u), !e)
							return O.apply(r, o), r;
						break
					}
				}
			}
			return a(e, f)(o, t, !h, r, U.test(e)),
			r
		}
		n.sortStable = v.split("").sort(S).join("") === v,
		n.detectDuplicates = E,
		c(),
		n.sortDetached = ut(function (e) {
				return 1 & e.compareDocumentPosition(p.createElement("div"))
			}),
		ut(function (e) {
			return e.innerHTML = "<a href='#'></a>",
			"#" === e.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function (e, t, n) {
			return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}),
		n.attributes && ut(function (e) {
			return e.innerHTML = "<input/>",
			e.firstChild.setAttribute("value", ""),
			"" === e.firstChild.getAttribute("value")
		}) || lt("value", function (e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
		}),
		ut(function (e) {
			return null == e.getAttribute("disabled")
		}) || lt(R, function (e, t, n) {
			var r;
			return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
		}),
		x.find = ot,
		x.expr = ot.selectors,
		x.expr[":"] = x.expr.pseudos,
		x.unique = ot.uniqueSort,
		x.text = ot.getText,
		x.isXMLDoc = ot.isXML,
		x.contains = ot.contains
	}
	(e);
	var D = {};
	function A(e) {
		var t = D[e] = {};
		return x.each(e.match(w) || [], function (e, n) {
			t[n] = !0
		}),
		t
	}
	x.Callbacks = function (e) {
		e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
		var t,
		n,
		r,
		i,
		o,
		s,
		a = [],
		u = !e.once && [],
		l = function (p) {
			for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
				if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
					t = !1;
					break
				}
			r = !1,
			a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
		},
		c = {
			add : function () {
				if (a) {
					var n = a.length;
					(function s(t) {
						x.each(t, function (t, n) {
							var r = x.type(n);
							"function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
						})
					})(arguments),
					r ? o = a.length : t && (i = n, l(t))
				}
				return this
			},
			remove : function () {
				return a && x.each(arguments, function (e, t) {
					var n;
					while ((n = x.inArray(t, a, n)) > -1)
						a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
				}),
				this
			},
			has : function (e) {
				return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
			},
			empty : function () {
				return a = [],
				o = 0,
				this
			},
			disable : function () {
				return a = u = t = undefined,
				this
			},
			disabled : function () {
				return !a
			},
			lock : function () {
				return u = undefined,
				t || c.disable(),
				this
			},
			locked : function () {
				return !u
			},
			fireWith : function (e, t) {
				return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)),
				this
			},
			fire : function () {
				return c.fireWith(this, arguments),
				this
			},
			fired : function () {
				return !!n
			}
		};
		return c
	},
	x.extend({
		Deferred : function (e) {
			var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]],
			n = "pending",
			r = {
				state : function () {
					return n
				},
				always : function () {
					return i.done(arguments).fail(arguments),
					this
				},
				then : function () {
					var e = arguments;
					return x.Deferred(function (n) {
						x.each(t, function (t, o) {
							var s = o[0],
							a = x.isFunction(e[t]) && e[t];
							i[o[1]](function () {
								var e = a && a.apply(this, arguments);
								e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
							})
						}),
						e = null
					}).promise()
				},
				promise : function (e) {
					return null != e ? x.extend(e, r) : r
				}
			},
			i = {};
			return r.pipe = r.then,
			x.each(t, function (e, o) {
				var s = o[2],
				a = o[3];
				r[o[1]] = s.add,
				a && s.add(function () {
					n = a
				}, t[1^e][2].disable, t[2][2].lock),
				i[o[0]] = function () {
					return i[o[0] + "With"](this === i ? r : this, arguments),
					this
				},
				i[o[0] + "With"] = s.fireWith
			}),
			r.promise(i),
			e && e.call(i, i),
			i
		},
		when : function (e) {
			var t = 0,
			n = d.call(arguments),
			r = n.length,
			i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
			o = 1 === i ? e : x.Deferred(),
			s = function (e, t, n) {
				return function (r) {
					t[e] = this,
					n[e] = arguments.length > 1 ? d.call(arguments) : r,
					n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
				}
			},
			a,
			u,
			l;
			if (r > 1)
				for (a = Array(r), u = Array(r), l = Array(r); r > t; t++)
					n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
			return i || o.resolveWith(l, n),
			o.promise()
		}
	}),
	x.support = function (t) {
		var n = o.createElement("input"),
		r = o.createDocumentFragment(),
		i = o.createElement("div"),
		s = o.createElement("select"),
		a = s.appendChild(o.createElement("option"));
		return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function () {
				var n,
				r,
				s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				a = o.getElementsByTagName("body")[0];
				a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {
						zoom : 1
					}
						 : {}, function () {
						t.boxSizing = 4 === i.offsetWidth
					}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
								width : "4px"
							}).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
			}), t) : t
	}
	({});
	var L,
	q,
	H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	O = /([A-Z])/g;
	function F() {
		Object.defineProperty(this.cache = {}, 0, {
			get : function () {
				return {}

			}
		}),
		this.expando = x.expando + Math.random()
	}
	F.uid = 1,
	F.accepts = function (e) {
		return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
	},
	F.prototype = {
		key : function (e) {
			if (!F.accepts(e))
				return 0;
			var t = {},
			n = e[this.expando];
			if (!n) {
				n = F.uid++;
				try {
					t[this.expando] = {
						value : n
					},
					Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n,
					x.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}),
			n
		},
		set : function (e, t, n) {
			var r,
			i = this.key(e),
			o = this.cache[i];
			if ("string" == typeof t)
				o[t] = n;
			else if (x.isEmptyObject(o))
				x.extend(this.cache[i], t);
			else
				for (r in t)
					o[r] = t[r];
			return o
		},
		get : function (e, t) {
			var n = this.cache[this.key(e)];
			return t === undefined ? n : n[t]
		},
		access : function (e, t, n) {
			var r;
			return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
		},
		remove : function (e, t) {
			var n,
			r,
			i,
			o = this.key(e),
			s = this.cache[o];
			if (t === undefined)
				this.cache[o] = {};
			else {
				x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])),
				n = r.length;
				while (n--)
					delete s[r[n]]
			}
		},
		hasData : function (e) {
			return !x.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard : function (e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	},
	L = new F,
	q = new F,
	x.extend({
		acceptData : F.accepts,
		hasData : function (e) {
			return L.hasData(e) || q.hasData(e)
		},
		data : function (e, t, n) {
			return L.access(e, t, n)
		},
		removeData : function (e, t) {
			L.remove(e, t)
		},
		_data : function (e, t, n) {
			return q.access(e, t, n)
		},
		_removeData : function (e, t) {
			q.remove(e, t)
		}
	}),
	x.fn.extend({
		data : function (e, t) {
			var n,
			r,
			i = this[0],
			o = 0,
			s = null;
			if (e === undefined) {
				if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
					for (n = i.attributes; n.length > o; o++)
						r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
					q.set(i, "hasDataAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function () {
				L.set(this, e)
			}) : x.access(this, function (t) {
				var n,
				r = x.camelCase(e);
				if (i && t === undefined) {
					if (n = L.get(i, e), n !== undefined)
						return n;
					if (n = L.get(i, r), n !== undefined)
						return n;
					if (n = P(i, r, undefined), n !== undefined)
						return n
				} else
					this.each(function () {
						var n = L.get(this, r);
						L.set(this, r, t),
						-1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
					})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData : function (e) {
			return this.each(function () {
				L.remove(this, e)
			})
		}
	});
	function P(e, t, n) {
		var r;
		if (n === undefined && 1 === e.nodeType)
			if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
				} catch (i) {}

				L.set(e, t, n)
			} else
				n = undefined;
		return n
	}
	x.extend({
		queue : function (e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined
		},
		dequeue : function (e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
			r = n.length,
			i = n.shift(),
			o = x._queueHooks(e, t),
			s = function () {
				x.dequeue(e, t)
			};
			"inprogress" === i && (i = n.shift(), r--),
			i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)),
			!r && o && o.empty.fire()
		},
		_queueHooks : function (e, t) {
			var n = t + "queueHooks";
			return q.get(e, n) || q.access(e, n, {
				empty : x.Callbacks("once memory").add(function () {
					q.remove(e, [t + "queue", n])
				})
			})
		}
	}),
	x.fn.extend({
		queue : function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--),
			n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function () {
				var n = x.queue(this, e, t);
				x._queueHooks(this, e),
				"fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
			})
		},
		dequeue : function (e) {
			return this.each(function () {
				x.dequeue(this, e)
			})
		},
		delay : function (e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e,
			t = t || "fx",
			this.queue(t, function (t, n) {
				var r = setTimeout(t, e);
				n.stop = function () {
					clearTimeout(r)
				}
			})
		},
		clearQueue : function (e) {
			return this.queue(e || "fx", [])
		},
		promise : function (e, t) {
			var n,
			r = 1,
			i = x.Deferred(),
			o = this,
			s = this.length,
			a = function () {
				--r || i.resolveWith(o, [o])
			};
			"string" != typeof e && (t = e, e = undefined),
			e = e || "fx";
			while (s--)
				n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
			return a(),
			i.promise(t)
		}
	});
	var R,
	M,
	W = /[\t\r\n\f]/g,
	$ = /\r/g,
	B = /^(?:input|select|textarea|button)$/i;
	x.fn.extend({
		attr : function (e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr : function (e) {
			return this.each(function () {
				x.removeAttr(this, e)
			})
		},
		prop : function (e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp : function (e) {
			return this.each(function () {
				delete this[x.propFix[e] || e]
			})
		},
		addClass : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s = 0,
			a = this.length,
			u = "string" == typeof e && e;
			if (x.isFunction(e))
				return this.each(function (t) {
					x(this).addClass(e.call(this, t, this.className))
				});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
						o = 0;
						while (i = t[o++])
							0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s = 0,
			a = this.length,
			u = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e))
				return this.each(function (t) {
					x(this).removeClass(e.call(this, t, this.className))
				});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0)
								r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass : function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function () {
				if ("string" === n) {
					var t,
					i = 0,
					o = x(this),
					s = e.match(w) || [];
					while (t = s[i++])
						o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else (n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
			})
		},
		hasClass : function (e) {
			var t = " " + e + " ",
			n = 0,
			r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0)
					return !0;
			return !1
		},
		val : function (e) {
			var t,
			n,
			r,
			i = this[0]; {
				if (arguments.length)
					return r = x.isFunction(e), this.each(function (n) {
						var i;
						1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function (e) {
											return null == e ? "" : e + ""
										})), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
					});
				if (i)
					return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
			}
		}
	}),
	x.extend({
		valHooks : {
			option : {
				get : function (e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select : {
				get : function (e) {
					var t,
					n,
					r = e.options,
					i = e.selectedIndex,
					o = "select-one" === e.type || 0 > i,
					s = o ? null : [],
					a = o ? i + 1 : r.length,
					u = 0 > i ? a : o ? i : 0;
					for (; a > u; u++)
						if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o)
								return t;
							s.push(t)
						}
					return s
				},
				set : function (e, t) {
					var n,
					r,
					i = e.options,
					o = x.makeArray(t),
					s = i.length;
					while (s--)
						r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1),
					o
				}
			}
		},
		attr : function (e, t, n) {
			var i,
			o,
			s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)
				return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined))
		},
		removeAttr : function (e, t) {
			var n,
			r,
			i = 0,
			o = t && t.match(w);
			if (o && 1 === e.nodeType)
				while (n = o[i++])
					r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks : {
			type : {
				set : function (e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t),
						n && (e.value = n),
						t
					}
				}
			}
		},
		propFix : {
			"for" : "htmlFor",
			"class" : "className"
		},
		prop : function (e, t, n) {
			var r,
			i,
			o,
			s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s)
				return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks : {
			tabIndex : {
				get : function (e) {
					return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}),
	M = {
		set : function (e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n),
			n
		}
	},
	x.each(x.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = x.expr.attrHandle[t] || x.find.attr;
		x.expr.attrHandle[t] = function (e, t, r) {
			var i = x.expr.attrHandle[t],
			o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
			return x.expr.attrHandle[t] = i,
			o
		}
	}),
	x.support.optSelected || (x.propHooks.selected = {
			get : function (e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex,
				null
			}
		}),
	x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		x.propFix[this.toLowerCase()] = this
	}),
	x.each(["radio", "checkbox"], function () {
		x.valHooks[this] = {
			set : function (e, t) {
				return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
			}
		},
		x.support.checkOn || (x.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var I = /^key/,
	z = /^(?:mouse|contextmenu)|click/,
	_ = /^(?:focusinfocus|focusoutblur)$/,
	X = /^([^.]*)(?:\.(.+)|)$/;
	function U() {
		return !0
	}
	function Y() {
		return !1
	}
	function V() {
		try {
			return o.activeElement
		} catch (e) {}

	}
	x.event = {
		global : {},
		add : function (e, t, n, i, o) {
			var s,
			a,
			u,
			l,
			c,
			p,
			f,
			h,
			d,
			g,
			m,
			y = q.get(e);
			if (y) {
				n.handler && (s = n, n = s.handler, o = s.selector),
				n.guid || (n.guid = x.guid++),
				(l = y.events) || (l = y.events = {}),
				(a = y.handle) || (a = y.handle = function (e) {
					return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
				}, a.elem = e),
				t = (t || "").match(w) || [""],
				c = t.length;
				while (c--)
					u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
								type : d,
								origType : m,
								data : i,
								handler : n,
								guid : n.guid,
								selector : o,
								needsContext : o && x.expr.match.needsContext.test(o),
								namespace : g.join(".")
							}, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
				e = null
			}
		},
		remove : function (e, t, n, r, i) {
			var o,
			s,
			a,
			u,
			l,
			c,
			p,
			f,
			h,
			d,
			g,
			m = q.hasData(e) && q.get(e);
			if (m && (u = m.events)) {
				t = (t || "").match(w) || [""],
				l = t.length;
				while (l--)
					if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
						p = x.event.special[h] || {},
						h = (r ? p.delegateType : p.bindType) || h,
						f = u[h] || [],
						a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
						s = o = f.length;
						while (o--)
							c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
						s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h])
					} else
						for (h in u)
							x.event.remove(e, h + t[l], n, r, !0);
				x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"))
			}
		},
		trigger : function (t, n, r, i) {
			var s,
			a,
			u,
			l,
			c,
			p,
			f,
			h = [r || o],
			d = y.call(t, "type") ? t.type : t,
			g = y.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !x.isWindow(r)) {
					for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode)
						h.push(a), u = a;
					u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
				}
				s = 0;
				while ((a = h[s++]) && !t.isPropagationStopped())
					t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
				return t.type = d,
				i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)),
				t.result
			}
		},
		dispatch : function (e) {
			e = x.event.fix(e);
			var t,
			n,
			r,
			i,
			o,
			s = [],
			a = d.call(arguments),
			u = (q.get(this, "events") || {})[e.type] || [],
			l = x.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u),
				t = 0;
				while ((i = s[t++]) && !e.isPropagationStopped()) {
					e.currentTarget = i.elem,
					n = 0;
					while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())
						(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return l.postDispatch && l.postDispatch.call(this, e),
				e.result
			}
		},
		handlers : function (e, t) {
			var n,
			r,
			i,
			o,
			s = [],
			a = t.delegateCount,
			u = e.target;
			if (a && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== e.type) {
						for (r = [], n = 0; a > n; n++)
							o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && s.push({
							elem : u,
							handlers : r
						})
					}
			return t.length > a && s.push({
				elem : this,
				handlers : t.slice(a)
			}),
			s
		},
		props : "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks : {},
		keyHooks : {
			props : "char charCode key keyCode".split(" "),
			filter : function (e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
				e
			}
		},
		mouseHooks : {
			props : "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter : function (e, t) {
				var n,
				r,
				i,
				s = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
				e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
				e
			}
		},
		fix : function (e) {
			if (e[x.expando])
				return e;
			var t,
			n,
			r,
			i = e.type,
			s = e,
			a = this.fixHooks[i];
			a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}),
			r = a.props ? this.props.concat(a.props) : this.props,
			e = new x.Event(s),
			t = r.length;
			while (t--)
				n = r[t], e[n] = s[n];
			return e.target || (e.target = o),
			3 === e.target.nodeType && (e.target = e.target.parentNode),
			a.filter ? a.filter(e, s) : e
		},
		special : {
			load : {
				noBubble : !0
			},
			focus : {
				trigger : function () {
					return this !== V() && this.focus ? (this.focus(), !1) : undefined
				},
				delegateType : "focusin"
			},
			blur : {
				trigger : function () {
					return this === V() && this.blur ? (this.blur(), !1) : undefined
				},
				delegateType : "focusout"
			},
			click : {
				trigger : function () {
					return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined
				},
				_default : function (e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload : {
				postDispatch : function (e) {
					e.result !== undefined && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate : function (e, t, n, r) {
			var i = x.extend(new x.Event, n, {
					type : e,
					isSimulated : !0,
					originalEvent : {}

				});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
			i.isDefaultPrevented() && n.preventDefault()
		}
	},
	x.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	},
	x.Event = function (e, t) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t)
	},
	x.Event.prototype = {
		isDefaultPrevented : Y,
		isPropagationStopped : Y,
		isImmediatePropagationStopped : Y,
		preventDefault : function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = U,
			e && e.preventDefault && e.preventDefault()
		},
		stopPropagation : function () {
			var e = this.originalEvent;
			this.isPropagationStopped = U,
			e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation : function () {
			this.isImmediatePropagationStopped = U,
			this.stopPropagation()
		}
	},
	x.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout"
	}, function (e, t) {
		x.event.special[e] = {
			delegateType : t,
			bindType : t,
			handle : function (e) {
				var n,
				r = this,
				i = e.relatedTarget,
				o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
				n
			}
		}
	}),
	x.support.focusinBubbles || x.each({
		focus : "focusin",
		blur : "focusout"
	}, function (e, t) {
		var n = 0,
		r = function (e) {
			x.event.simulate(t, e.target, x.event.fix(e), !0)
		};
		x.event.special[t] = {
			setup : function () {
				0 === n++ && o.addEventListener(e, r, !0)
			},
			teardown : function () {
				0 === --n && o.removeEventListener(e, r, !0)
			}
		}
	}),
	x.fn.extend({
		on : function (e, t, n, r, i) {
			var o,
			s;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = undefined);
				for (s in e)
					this.on(s, t, n, e[s], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1)
				r = Y;
			else if (!r)
				return this;
			return 1 === i && (o = r, r = function (e) {
				return x().off(e),
				o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = x.guid++)),
			this.each(function () {
				x.event.add(this, e, r, n, t)
			})
		},
		one : function (e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off : function (e, t, n) {
			var r,
			i;
			if (e && e.preventDefault && e.handleObj)
				return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e)
					this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = undefined),
			n === !1 && (n = Y),
			this.each(function () {
				x.event.remove(this, e, n, t)
			})
		},
		trigger : function (e, t) {
			return this.each(function () {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler : function (e, t) {
			var n = this[0];
			return n ? x.event.trigger(e, t, n, !0) : undefined
		}
	});
	var G = /^.[^:#\[\.,]*$/,
	J = /^(?:parents|prev(?:Until|All))/,
	Q = x.expr.match.needsContext,
	K = {
		children : !0,
		contents : !0,
		next : !0,
		prev : !0
	};
	x.fn.extend({
		find : function (e) {
			var t,
			n = [],
			r = this,
			i = r.length;
			if ("string" != typeof e)
				return this.pushStack(x(e).filter(function () {
						for (t = 0; i > t; t++)
							if (x.contains(r[t], this))
								return !0
					}));
			for (t = 0; i > t; t++)
				x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n),
			n.selector = this.selector ? this.selector + " " + e : e,
			n
		},
		has : function (e) {
			var t = x(e, this),
			n = t.length;
			return this.filter(function () {
				var e = 0;
				for (; n > e; e++)
					if (x.contains(this, t[e]))
						return !0
			})
		},
		not : function (e) {
			return this.pushStack(et(this, e || [], !0))
		},
		filter : function (e) {
			return this.pushStack(et(this, e || [], !1))
		},
		is : function (e) {
			return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
		},
		closest : function (e, t) {
			var n,
			r = 0,
			i = this.length,
			o = [],
			s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index : function (e) {
			return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add : function (e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
			r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack : function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});
	function Z(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent : function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents : function (e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil : function (e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next : function (e) {
			return Z(e, "nextSibling")
		},
		prev : function (e) {
			return Z(e, "previousSibling")
		},
		nextAll : function (e) {
			return x.dir(e, "nextSibling")
		},
		prevAll : function (e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil : function (e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil : function (e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings : function (e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children : function (e) {
			return x.sibling(e.firstChild)
		},
		contents : function (e) {
			return e.contentDocument || x.merge([], e.childNodes)
		}
	}, function (e, t) {
		x.fn[e] = function (n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n),
			r && "string" == typeof r && (i = x.filter(r, i)),
			this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()),
			this.pushStack(i)
		}
	}),
	x.extend({
		filter : function (e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"),
			1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
					return 1 === e.nodeType
				}))
		},
		dir : function (e, t, n) {
			var r = [],
			i = n !== undefined;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && x(e).is(n))
						break;
					r.push(e)
				}
			return r
		},
		sibling : function (e, t) {
			var n = [];
			for (; e; e = e.nextSibling)
				1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});
	function et(e, t, n) {
		if (x.isFunction(t))
			return x.grep(e, function (e, r) {
				return !!t.call(e, r, e) !== n
			});
		if (t.nodeType)
			return x.grep(e, function (e) {
				return e === t !== n
			});
		if ("string" == typeof t) {
			if (G.test(t))
				return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function (e) {
			return g.call(t, e) >= 0 !== n
		})
	}
	var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	nt = /<([\w:]+)/,
	rt = /<|&#?\w+;/,
	it = /<(?:script|style|link)/i,
	ot = /^(?:checkbox|radio)$/i,
	st = /checked\s*(?:[^=]|=\s*.checked.)/i,
	at = /^$|\/(?:java|ecma)script/i,
	ut = /^true\/(.*)/,
	lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	ct = {
		option : [1, "<select multiple='multiple'>", "</select>"],
		thead : [1, "<table>", "</table>"],
		col : [2, "<table><colgroup>", "</colgroup></table>"],
		tr : [2, "<table><tbody>", "</tbody></table>"],
		td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default : [0, "", ""]
	};
	ct.optgroup = ct.option,
	ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead,
	ct.th = ct.td,
	x.fn.extend({
		text : function (e) {
			return x.access(this, function (e) {
				return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		append : function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend : function () {
			return this.domManip(arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before : function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after : function () {
			return this.domManip(arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove : function (e, t) {
			var n,
			r = e ? x.filter(e, this) : this,
			i = 0;
			for (; null != (n = r[i]); i++)
				t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty : function () {
			var e,
			t = 0;
			for (; null != (e = this[t]); t++)
				1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
			return this
		},
		clone : function (e, t) {
			return e = null == e ? !1 : e,
			t = null == t ? e : t,
			this.map(function () {
				return x.clone(this, e, t)
			})
		},
		html : function (e) {
			return x.access(this, function (e) {
				var t = this[0] || {},
				n = 0,
				r = this.length;
				if (e === undefined && 1 === t.nodeType)
					return t.innerHTML;
				if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(tt, "<$1></$2>");
					try {
						for (; r > n; n++)
							t = this[n] || {},
						1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}

				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith : function () {
			var e = x.map(this, function (e) {
					return [e.nextSibling, e.parentNode]
				}),
			t = 0;
			return this.domManip(arguments, function (n) {
				var r = e[t++],
				i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0),
			t ? this : this.remove()
		},
		detach : function (e) {
			return this.remove(e, !0)
		},
		domManip : function (e, t, n) {
			e = f.apply([], e);
			var r,
			i,
			o,
			s,
			a,
			u,
			l = 0,
			c = this.length,
			p = this,
			h = c - 1,
			d = e[0],
			g = x.isFunction(d);
			if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d))
				return this.each(function (r) {
					var i = p.eq(r);
					g && (e[0] = d.call(this, r, i.html())),
					i.domManip(e, t, n)
				});
			if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
				for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++)
					a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
				if (s)
					for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++)
						a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
			}
			return this
		}
	}),
	x.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function (e, t) {
		x.fn[e] = function (e) {
			var n,
			r = [],
			i = x(e),
			o = i.length - 1,
			s = 0;
			for (; o >= s; s++)
				n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
			return this.pushStack(r)
		}
	}),
	x.extend({
		clone : function (e, t, n) {
			var r,
			i,
			o,
			s,
			a = e.cloneNode(!0),
			u = x.contains(e.ownerDocument, e);
			if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++)
					yt(o[r], s[r]);
			if (t)
				if (n)
					for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++)
						gt(o[r], s[r]);
				else
					gt(e, a);
			return s = mt(a, "script"),
			s.length > 0 && dt(s, !u && mt(e, "script")),
			a
		},
		buildFragment : function (e, t, n, r) {
			var i,
			o,
			s,
			a,
			u,
			l,
			c = 0,
			p = e.length,
			f = t.createDocumentFragment(),
			h = [];
			for (; p > c; c++)
				if (i = e[c], i || 0 === i)
					if ("object" === x.type(i))
						x.merge(h, i.nodeType ? [i] : i);
					else if (rt.test(i)) {
						o = o || f.appendChild(t.createElement("div")),
						s = (nt.exec(i) || ["", ""])[1].toLowerCase(),
						a = ct[s] || ct._default,
						o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2],
						l = a[0];
						while (l--)
							o = o.lastChild;
						x.merge(h, o.childNodes),
						o = f.firstChild,
						o.textContent = ""
					} else
						h.push(t.createTextNode(i));
			f.textContent = "",
			c = 0;
			while (i = h[c++])
				if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
					l = 0;
					while (i = o[l++])
						at.test(i.type || "") && n.push(i)
				}
			return f
		},
		cleanData : function (e) {
			var t,
			n,
			r,
			i,
			o,
			s,
			a = x.event.special,
			u = 0;
			for (; (n = e[u]) !== undefined; u++) {
				if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
					if (r = Object.keys(t.events || {}), r.length)
						for (s = 0; (i = r[s]) !== undefined; s++)
							a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
					q.cache[o] && delete q.cache[o]
				}
				delete L.cache[n[L.expando]]
			}
		},
		_evalUrl : function (e) {
			return x.ajax({
				url : e,
				type : "GET",
				dataType : "script",
				async : !1,
				global : !1,
				"throws" : !0
			})
		}
	});
	function pt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function ft(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
		e
	}
	function ht(e) {
		var t = ut.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"),
		e
	}
	function dt(e, t) {
		var n = e.length,
		r = 0;
		for (; n > r; r++)
			q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
	}
	function gt(e, t) {
		var n,
		r,
		i,
		o,
		s,
		a,
		u,
		l;
		if (1 === t.nodeType) {
			if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
				delete s.handle,
				s.events = {};
				for (i in l)
					for (n = 0, r = l[i].length; r > n; n++)
						x.event.add(t, i, l[i][n])
			}
			L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u))
		}
	}
	function mt(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
	}
	function yt(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	x.fn.extend({
		wrapAll : function (e) {
			var t;
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
						var e = this;
						while (e.firstElementChild)
							e = e.firstElementChild;
						return e
					}).append(this)), this)
		},
		wrapInner : function (e) {
			return x.isFunction(e) ? this.each(function (t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = x(this),
				n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap : function (e) {
			var t = x.isFunction(e);
			return this.each(function (n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap : function () {
			return this.parent().each(function () {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var vt,
	xt,
	bt = /^(none|table(?!-c[ea]).+)/,
	wt = /^margin/,
	Tt = RegExp("^(" + b + ")(.*)$", "i"),
	Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
	kt = RegExp("^([+-])=(" + b + ")", "i"),
	Nt = {
		BODY : "block"
	},
	Et = {
		position : "absolute",
		visibility : "hidden",
		display : "block"
	},
	St = {
		letterSpacing : 0,
		fontWeight : 400
	},
	jt = ["Top", "Right", "Bottom", "Left"],
	Dt = ["Webkit", "O", "Moz", "ms"];
	function At(e, t) {
		if (t in e)
			return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
		r = t,
		i = Dt.length;
		while (i--)
			if (t = Dt[i] + n, t in e)
				return t;
		return r
	}
	function Lt(e, t) {
		return e = t || e,
		"none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}
	function qt(t) {
		return e.getComputedStyle(t, null)
	}
	function Ht(e, t) {
		var n,
		r,
		i,
		o = [],
		s = 0,
		a = e.length;
		for (; a > s; s++)
			r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (s = 0; a > s; s++)
			r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}
	x.fn.extend({
		css : function (e, t) {
			return x.access(this, function (e, t, n) {
				var r,
				i,
				o = {},
				s = 0;
				if (x.isArray(t)) {
					for (r = qt(e), i = t.length; i > s; s++)
						o[t[s]] = x.css(e, t[s], !1, r);
					return o
				}
				return n !== undefined ? x.style(e, t, n) : x.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show : function () {
			return Ht(this, !0)
		},
		hide : function () {
			return Ht(this)
		},
		toggle : function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Lt(this) ? x(this).show() : x(this).hide()
			})
		}
	}),
	x.extend({
		cssHooks : {
			opacity : {
				get : function (e, t) {
					if (t) {
						var n = vt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber : {
			columnCount : !0,
			fillOpacity : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			order : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {
			"float" : "cssFloat"
		},
		style : function (e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i,
				o,
				s,
				a = x.camelCase(t),
				u = e.style;
				return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)),
				s = x.cssHooks[t] || x.cssHooks[a],
				n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined)
			}
		},
		css : function (e, t, n, r) {
			var i,
			o,
			s,
			a = x.camelCase(t);
			return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)),
			s = x.cssHooks[t] || x.cssHooks[a],
			s && "get" in s && (i = s.get(e, !0, n)),
			i === undefined && (i = vt(e, t, r)),
			"normal" === i && t in St && (i = St[t]),
			"" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i
		}
	}),
	vt = function (e, t, n) {
		var r,
		i,
		o,
		s = n || qt(e),
		a = s ? s.getPropertyValue(t) || s[t] : undefined,
		u = e.style;
		return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)),
		a
	};
	function Ot(e, t, n) {
		var r = Tt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function Ft(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
		s = 0;
		for (; 4 > o; o += 2)
			"margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
		return s
	}
	function Pt(e, t, n) {
		var r = !0,
		i = "width" === t ? e.offsetWidth : e.offsetHeight,
		o = qt(e),
		s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i))
				return i;
			r = s && (x.support.boxSizingReliable || i === e.style[t]),
			i = parseFloat(i) || 0
		}
		return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}
	function Rt(e) {
		var t = o,
		n = Nt[e];
		return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n),
		n
	}
	function Mt(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
		r = x.css(n[0], "display");
		return n.remove(),
		r
	}
	x.each(["height", "width"], function (e, t) {
		x.cssHooks[t] = {
			get : function (e, n, r) {
				return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function () {
					return Pt(e, t, r)
				}) : Pt(e, t, r) : undefined
			},
			set : function (e, n, r) {
				var i = r && qt(e);
				return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}),
	x(function () {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
				get : function (e, t) {
					return t ? x.swap(e, {
						display : "inline-block"
					}, vt, [e, "marginRight"]) : undefined
				}
			}),
		!x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, t) {
			x.cssHooks[t] = {
				get : function (e, n) {
					return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
				}
			}
		})
	}),
	x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight
	}, x.expr.filters.visible = function (e) {
		return !x.expr.filters.hidden(e)
	}),
	x.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function (e, t) {
		x.cssHooks[e + t] = {
			expand : function (n) {
				var r = 0,
				i = {},
				o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++)
					i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		},
		wt.test(e) || (x.cssHooks[e + t].set = Ot)
	});
	var Wt = /%20/g,
	$t = /\[\]$/,
	Bt = /\r?\n/g,
	It = /^(?:submit|button|image|reset|file)$/i,
	zt = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize : function () {
			return x.param(this.serializeArray())
		},
		serializeArray : function () {
			return this.map(function () {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
			}).map(function (e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
					return {
						name : t.name,
						value : e.replace(Bt, "\r\n")
					}
				}) : {
					name : t.name,
					value : n.replace(Bt, "\r\n")
				}
			}).get()
		}
	}),
	x.param = function (e, t) {
		var n,
		r = [],
		i = function (e, t) {
			t = x.isFunction(t) ? t() : null == t ? "" : t,
			r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
		};
		if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))
			x.each(e, function () {
				i(this.name, this.value)
			});
		else
			for (n in e)
				_t(n, e[n], t, i);
		return r.join("&").replace(Wt, "+")
	};
	function _t(e, t, n, r) {
		var i;
		if (x.isArray(t))
			x.each(t, function (t, i) {
				n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			});
		else if (n || "object" !== x.type(t))
			r(e, t);
		else
			for (i in t)
				_t(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
		x.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}),
	x.fn.extend({
		hover : function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind : function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind : function (e, t) {
			return this.off(e, null, t)
		},
		delegate : function (e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate : function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Xt,
	Ut,
	Yt = x.now(),
	Vt = /\?/,
	Gt = /#.*$/,
	Jt = /([?&])_=[^&]*/,
	Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	Zt = /^(?:GET|HEAD)$/,
	en = /^\/\//,
	tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
	nn = x.fn.load,
	rn = {},
	on = {},
	sn = "*/".concat("*");
	try {
		Ut = i.href
	} catch (an) {
		Ut = o.createElement("a"),
		Ut.href = "",
		Ut = Ut.href
	}
	Xt = tn.exec(Ut.toLowerCase()) || [];
	function un(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r,
			i = 0,
			o = t.toLowerCase().match(w) || [];
			if (x.isFunction(n))
				while (r = o[i++])
					"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function ln(e, t, n, r) {
		var i = {},
		o = e === on;
		function s(a) {
			var u;
			return i[a] = !0,
			x.each(e[a] || [], function (e, a) {
				var l = a(t, n, r);
				return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1)
			}),
			u
		}
		return s(t.dataTypes[0]) || !i["*"] && s("*")
	}
	function cn(e, t) {
		var n,
		r,
		i = x.ajaxSettings.flatOptions || {};
		for (n in t)
			t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && x.extend(!0, e, r),
		e
	}
	x.fn.load = function (e, t, n) {
		if ("string" != typeof e && nn)
			return nn.apply(this, arguments);
		var r,
		i,
		o,
		s = this,
		a = e.indexOf(" ");
		return a >= 0 && (r = e.slice(a), e = e.slice(0, a)),
		x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"),
		s.length > 0 && x.ajax({
			url : e,
			type : i,
			dataType : "html",
			data : t
		}).done(function (e) {
			o = arguments,
			s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
		}).complete(n && function (e, t) {
			s.each(n, o || [e.responseText, t, e])
		}),
		this
	},
	x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		x.fn[t] = function (e) {
			return this.on(t, e)
		}
	}),
	x.extend({
		active : 0,
		lastModified : {},
		etag : {},
		ajaxSettings : {
			url : Ut,
			type : "GET",
			isLocal : Kt.test(Xt[1]),
			global : !0,
			processData : !0,
			async : !0,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			accepts : {
				"*" : sn,
				text : "text/plain",
				html : "text/html",
				xml : "application/xml, text/xml",
				json : "application/json, text/javascript"
			},
			contents : {
				xml : /xml/,
				html : /html/,
				json : /json/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText",
				json : "responseJSON"
			},
			converters : {
				"* text" : String,
				"text html" : !0,
				"text json" : x.parseJSON,
				"text xml" : x.parseXML
			},
			flatOptions : {
				url : !0,
				context : !0
			}
		},
		ajaxSetup : function (e, t) {
			return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
		},
		ajaxPrefilter : un(rn),
		ajaxTransport : un(on),
		ajax : function (e, t) {
			"object" == typeof e && (t = e, e = undefined),
			t = t || {};
			var n,
			r,
			i,
			o,
			s,
			a,
			u,
			l,
			c = x.ajaxSetup({}, t),
			p = c.context || c,
			f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event,
			h = x.Deferred(),
			d = x.Callbacks("once memory"),
			g = c.statusCode || {},
			m = {},
			y = {},
			v = 0,
			b = "canceled",
			T = {
				readyState : 0,
				getResponseHeader : function (e) {
					var t;
					if (2 === v) {
						if (!o) {
							o = {};
							while (t = Qt.exec(i))
								o[t[1].toLowerCase()] = t[2]
						}
						t = o[e.toLowerCase()]
					}
					return null == t ? null : t
				},
				getAllResponseHeaders : function () {
					return 2 === v ? i : null
				},
				setRequestHeader : function (e, t) {
					var n = e.toLowerCase();
					return v || (e = y[n] = y[n] || e, m[e] = t),
					this
				},
				overrideMimeType : function (e) {
					return v || (c.mimeType = e),
					this
				},
				statusCode : function (e) {
					var t;
					if (e)
						if (2 > v)
							for (t in e)
								g[t] = [g[t], e[t]];
						else
							T.always(e[T.status]);
					return this
				},
				abort : function (e) {
					var t = e || b;
					return n && n.abort(t),
					k(0, t),
					this
				}
			};
			if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v)
				return T;
			u = c.global,
			u && 0 === x.active++ && x.event.trigger("ajaxStart"),
			c.type = c.type.toUpperCase(),
			c.hasContent = !Zt.test(c.type),
			r = c.url,
			c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)),
			c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])),
			(c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType),
			T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
			for (l in c.headers)
				T.setRequestHeader(l, c.headers[l]);
			if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v))
				return T.abort();
			b = "abort";
			for (l in {
				success : 1,
				error : 1,
				complete : 1
			})
				T[l](c[l]);
			if (n = ln(on, c, t, T)) {
				T.readyState = 1,
				u && f.trigger("ajaxSend", [T, c]),
				c.async && c.timeout > 0 && (s = setTimeout(function () {
							T.abort("timeout")
						}, c.timeout));
				try {
					v = 1,
					n.send(m, k)
				} catch (C) {
					if (!(2 > v))
						throw C;
					k(-1, C)
				}
			} else
				k(-1, "No Transport");
			function k(e, t, o, a) {
				var l,
				m,
				y,
				b,
				w,
				C = t;
				2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON : function (e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript : function (e, t) {
			return x.get(e, undefined, t, "script")
		}
	}),
	x.each(["get", "post"], function (e, t) {
		x[t] = function (e, n, r, i) {
			return x.isFunction(n) && (i = i || r, r = n, n = undefined),
			x.ajax({
				url : e,
				type : t,
				dataType : i,
				data : n,
				success : r
			})
		}
	});
	function pn(e, t, n) {
		var r,
		i,
		o,
		s,
		a = e.contents,
		u = e.dataTypes;
		while ("*" === u[0])
			u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in a)
				if (a[i] && a[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0]in n)
			o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined
	}
	function fn(e, t, n, r) {
		var i,
		o,
		s,
		a,
		u,
		l = {},
		c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters)
				l[s.toLowerCase()] = e.converters[s];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o)
					o = u;
				else if ("*" !== u && u !== o) {
					if (s = l[u + " " + o] || l["* " + o], !s)
						for (i in l)
							if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
								s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
								break
							}
					if (s !== !0)
						if (s && e["throws"])
							t = s(t);
						else
							try {
								t = s(t)
							} catch (p) {
								return {
									state : "parsererror",
									error : s ? p : "No conversion from " + u + " to " + o
								}
							}
				}
		return {
			state : "success",
			data : t
		}
	}
	x.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /(?:java|ecma)script/
		},
		converters : {
			"text script" : function (e) {
				return x.globalEval(e),
				e
			}
		}
	}),
	x.ajaxPrefilter("script", function (e) {
		e.cache === undefined && (e.cache = !1),
		e.crossDomain && (e.type = "GET")
	}),
	x.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t,
			n;
			return {
				send : function (r, i) {
					t = x("<script>").prop({
							async : !0,
							charset : e.scriptCharset,
							src : e.url
						}).on("load error", n = function (e) {
							t.remove(),
							n = null,
							e && i("error" === e.type ? 404 : 200, e.type)
						}),
					o.head.appendChild(t[0])
				},
				abort : function () {
					n && n()
				}
			}
		}
	});
	var hn = [],
	dn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function () {
			var e = hn.pop() || x.expando + "_" + Yt++;
			return this[e] = !0,
			e
		}
	}),
	x.ajaxPrefilter("json jsonp", function (t, n, r) {
		var i,
		o,
		s,
		a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
			return s || x.error(i + " was not called"),
			s[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
			s = arguments
		}, r.always(function () {
				e[i] = o,
				t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)),
				s && x.isFunction(o) && o(s[0]),
				s = o = undefined
			}), "script") : undefined
	}),
	x.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest
		} catch (e) {}

	};
	var gn = x.ajaxSettings.xhr(),
	mn = {
		0 : 200,
		1223 : 204
	},
	yn = 0,
	vn = {};
	e.ActiveXObject && x(e).on("unload", function () {
		for (var e in vn)
			vn[e]();
		vn = undefined
	}),
	x.support.cors = !!gn && "withCredentials" in gn,
	x.support.ajax = gn = !!gn,
	x.ajaxTransport(function (e) {
		var t;
		return x.support.cors || gn && !e.crossDomain ? {
			send : function (n, r) {
				var i,
				o,
				s = e.xhr();
				if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (i in e.xhrFields)
						s[i] = e.xhrFields[i];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
				e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n)
					s.setRequestHeader(i, n[i]);
				t = function (e) {
					return function () {
						t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
								text : s.responseText
							}
								 : undefined, s.getAllResponseHeaders()))
					}
				},
				s.onload = t(),
				s.onerror = t("error"),
				t = vn[o = yn++] = t("abort"),
				s.send(e.hasContent && e.data || null)
			},
			abort : function () {
				t && t()
			}
		}
		 : undefined
	});
	var xn,
	bn,
	wn = /^(?:toggle|show|hide)$/,
	Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
	Cn = /queueHooks$/,
	kn = [An],
	Nn = {
		"*" : [function (e, t) {
				var n = this.createTween(e, t),
				r = n.cur(),
				i = Tn.exec(t),
				o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
				s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)),
				a = 1,
				u = 20;
				if (s && s[3] !== o) {
					o = o || s[3],
					i = i || [],
					s = +r || 1;
					do
						a = a || ".5", s /= a, x.style(n.elem, e, s + o);
					while (a !== (a = n.cur() / r) && 1 !== a && --u)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
				n
			}
		]
	};
	function En() {
		return setTimeout(function () {
			xn = undefined
		}),
		xn = x.now()
	}
	function Sn(e, t, n) {
		var r,
		i = (Nn[t] || []).concat(Nn["*"]),
		o = 0,
		s = i.length;
		for (; s > o; o++)
			if (r = i[o].call(n, t, e))
				return r
	}
	function jn(e, t, n) {
		var r,
		i,
		o = 0,
		s = kn.length,
		a = x.Deferred().always(function () {
				delete u.elem
			}),
		u = function () {
			if (i)
				return !1;
			var t = xn || En(),
			n = Math.max(0, l.startTime + l.duration - t),
			r = n / l.duration || 0,
			o = 1 - r,
			s = 0,
			u = l.tweens.length;
			for (; u > s; s++)
				l.tweens[s].run(o);
			return a.notifyWith(e, [l, o, n]),
			1 > o && u ? n : (a.resolveWith(e, [l]), !1)
		},
		l = a.promise({
				elem : e,
				props : x.extend({}, t),
				opts : x.extend(!0, {
					specialEasing : {}

				}, n),
				originalProperties : t,
				originalOptions : n,
				startTime : xn || En(),
				duration : n.duration,
				tweens : [],
				createTween : function (t, n) {
					var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r),
					r
				},
				stop : function (t) {
					var n = 0,
					r = t ? l.tweens.length : 0;
					if (i)
						return this;
					for (i = !0; r > n; n++)
						l.tweens[n].run(1);
					return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
					this
				}
			}),
		c = l.props;
		for (Dn(c, l.opts.specialEasing); s > o; o++)
			if (r = kn[o].call(l, e, c, l.opts))
				return r;
		return x.map(c, Sn, l),
		x.isFunction(l.opts.start) && l.opts.start.call(e, l),
		x.fx.timer(x.extend(u, {
				elem : e,
				anim : l,
				queue : l.opts.queue
			})),
		l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function Dn(e, t) {
		var n,
		r,
		i,
		o,
		s;
		for (n in e)
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
				o = s.expand(o),
				delete e[r];
				for (n in o)
					n in e || (e[n] = o[n], t[n] = i)
			} else
				t[r] = i
	}
	x.Animation = x.extend(jn, {
			tweener : function (e, t) {
				x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
				var n,
				r = 0,
				i = e.length;
				for (; i > r; r++)
					n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t)
			},
			prefilter : function (e, t) {
				t ? kn.unshift(e) : kn.push(e)
			}
		});
	function An(e, t, n) {
		var r,
		i,
		o,
		s,
		a,
		u,
		l = this,
		c = {},
		p = e.style,
		f = e.nodeType && Lt(e),
		h = q.get(e, "fxshow");
		n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
				a.unqueued || u()
			}), a.unqueued++, l.always(function () {
				l.always(function () {
					a.unqueued--,
					x.queue(e, "fx").length || a.empty.fire()
				})
			})),
		1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")),
		n.overflow && (p.overflow = "hidden", l.always(function () {
				p.overflow = n.overflow[0],
				p.overflowX = n.overflow[1],
				p.overflowY = n.overflow[2]
			}));
		for (r in t)
			if (i = t[r], wn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
					if ("show" !== i || !h || h[r] === undefined)
						continue;
					f = !0
				}
				c[r] = h && h[r] || x.style(e, r)
			}
		if (!x.isEmptyObject(c)) {
			h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}),
			o && (h.hidden = !f),
			f ? x(e).show() : l.done(function () {
				x(e).hide()
			}),
			l.done(function () {
				var t;
				q.remove(e, "fxshow");
				for (t in c)
					x.style(e, t, c[t])
			});
			for (r in c)
				s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function Ln(e, t, n, r, i) {
		return new Ln.prototype.init(e, t, n, r, i)
	}
	x.Tween = Ln,
	Ln.prototype = {
		constructor : Ln,
		init : function (e, t, n, r, i, o) {
			this.elem = e,
			this.prop = n,
			this.easing = i || "swing",
			this.options = t,
			this.start = this.now = this.cur(),
			this.end = r,
			this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur : function () {
			var e = Ln.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
		},
		run : function (e) {
			var t,
			n = Ln.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
			this.now = (this.end - this.start) * t + this.start,
			this.options.step && this.options.step.call(this.elem, this.now, this),
			n && n.set ? n.set(this) : Ln.propHooks._default.set(this),
			this
		}
	},
	Ln.prototype.init.prototype = Ln.prototype,
	Ln.propHooks = {
		_default : {
			get : function (e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set : function (e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	},
	Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
		set : function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	},
	x.each(["toggle", "show", "hide"], function (e, t) {
		var n = x.fn[t];
		x.fn[t] = function (e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
		}
	}),
	x.fn.extend({
		fadeTo : function (e, t, n, r) {
			return this.filter(Lt).css("opacity", 0).show().end().animate({
				opacity : t
			}, e, n, r)
		},
		animate : function (e, t, n, r) {
			var i = x.isEmptyObject(e),
			o = x.speed(t, n, r),
			s = function () {
				var t = jn(this, x.extend({}, e), o);
				(i || q.get(this, "finish")) && t.stop(!0)
			};
			return s.finish = s,
			i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop : function (e, t, n) {
			var r = function (e) {
				var t = e.stop;
				delete e.stop,
				t(n)
			};
			return "string" != typeof e && (n = t, t = e, e = undefined),
			t && e !== !1 && this.queue(e || "fx", []),
			this.each(function () {
				var t = !0,
				i = null != e && e + "queueHooks",
				o = x.timers,
				s = q.get(this);
				if (i)
					s[i] && s[i].stop && r(s[i]);
				else
					for (i in s)
						s[i] && s[i].stop && Cn.test(i) && r(s[i]);
				for (i = o.length; i--; )
					o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && x.dequeue(this, e)
			})
		},
		finish : function (e) {
			return e !== !1 && (e = e || "fx"),
			this.each(function () {
				var t,
				n = q.get(this),
				r = n[e + "queue"],
				i = n[e + "queueHooks"],
				o = x.timers,
				s = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
					o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; s > t; t++)
					r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});
	function qn(e, t) {
		var n,
		r = {
			height : e
		},
		i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t)
			n = jt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e),
		r
	}
	x.each({
		slideDown : qn("show"),
		slideUp : qn("hide"),
		slideToggle : qn("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function (e, t) {
		x.fn[e] = function (e, n, r) {
			return this.animate(t, e, n, r)
		}
	}),
	x.speed = function (e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete : n || !n && t || x.isFunction(e) && e,
			duration : e,
			easing : n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
		(null == r.queue || r.queue === !0) && (r.queue = "fx"),
		r.old = r.complete,
		r.complete = function () {
			x.isFunction(r.old) && r.old.call(this),
			r.queue && x.dequeue(this, r.queue)
		},
		r
	},
	x.easing = {
		linear : function (e) {
			return e
		},
		swing : function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	},
	x.timers = [],
	x.fx = Ln.prototype.init,
	x.fx.tick = function () {
		var e,
		t = x.timers,
		n = 0;
		for (xn = x.now(); t.length > n; n++)
			e = t[n], e() || t[n] !== e || t.splice(n--, 1);
		t.length || x.fx.stop(),
		xn = undefined
	},
	x.fx.timer = function (e) {
		e() && x.timers.push(e) && x.fx.start()
	},
	x.fx.interval = 13,
	x.fx.start = function () {
		bn || (bn = setInterval(x.fx.tick, x.fx.interval))
	},
	x.fx.stop = function () {
		clearInterval(bn),
		bn = null
	},
	x.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	},
	x.fx.step = {},
	x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
		return x.grep(x.timers, function (t) {
			return e === t.elem
		}).length
	}),
	x.fn.offset = function (e) {
		if (arguments.length)
			return e === undefined ? this : this.each(function (t) {
				x.offset.setOffset(this, e, t)
			});
		var t,
		n,
		i = this[0],
		o = {
			top : 0,
			left : 0
		},
		s = i && i.ownerDocument;
		if (s)
			return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
				top : o.top + n.pageYOffset - t.clientTop,
				left : o.left + n.pageXOffset - t.clientLeft
			}) : o
	},
	x.offset = {
		setOffset : function (e, t, n) {
			var r,
			i,
			o,
			s,
			a,
			u,
			l,
			c = x.css(e, "position"),
			p = x(e),
			f = {};
			"static" === c && (e.style.position = "relative"),
			a = p.offset(),
			o = x.css(e, "top"),
			u = x.css(e, "left"),
			l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
			l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0),
			x.isFunction(t) && (t = t.call(e, n, a)),
			null != t.top && (f.top = t.top - a.top + s),
			null != t.left && (f.left = t.left - a.left + i),
			"using" in t ? t.using.call(e, f) : p.css(f)
		}
	},
	x.fn.extend({
		position : function () {
			if (this[0]) {
				var e,
				t,
				n = this[0],
				r = {
					top : 0,
					left : 0
				};
				return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {
					top : t.top - r.top - x.css(n, "marginTop", !0),
					left : t.left - r.left - x.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent : function () {
			return this.map(function () {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
					e = e.offsetParent;
				return e || s
			})
		}
	}),
	x.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function (t, n) {
		var r = "pageYOffset" === n;
		x.fn[t] = function (i) {
			return x.access(this, function (t, i, o) {
				var s = Hn(t);
				return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined)
			}, t, i, arguments.length, null)
		}
	});
	function Hn(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	x.each({
		Height : "height",
		Width : "width"
	}, function (e, t) {
		x.each({
			padding : "inner" + e,
			content : t,
			"" : "outer" + e
		}, function (n, r) {
			x.fn[r] = function (r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
				s = n || (r === !0 || i === !0 ? "margin" : "border");
				return x.access(this, function (t, n, r) {
					var i;
					return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
				}, t, o ? r : undefined, o, null)
			}
		})
	}),
	x.fn.size = function () {
		return this.length
	},
	x.fn.andSelf = x.fn.addBack,
	"object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function () {
			return x
		}),
	"object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);

/*! jQuery UI - v1.10.4 - 2014-04-11
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (t, e) {
	function n(e, n) {
		var r,
		s,
		o,
		a = e.nodeName.toLowerCase();
		return "area" === a ? (r = e.parentNode, s = r.name, e.href && s && "map" === r.nodeName.toLowerCase() ? (o = t("img[usemap=#" + s + "]")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a ? e.href || n : n) && i(e)
	}
	function i(e) {
		return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
			return "hidden" === t.css(this, "visibility")
		}).length
	}
	var r = 0,
	s = /^ui-id-\d+$/;
	t.ui = t.ui || {},
	t.extend(t.ui, {
		version : "1.10.4",
		keyCode : {
			BACKSPACE : 8,
			COMMA : 188,
			DELETE : 46,
			DOWN : 40,
			END : 35,
			ENTER : 13,
			ESCAPE : 27,
			HOME : 36,
			LEFT : 37,
			NUMPAD_ADD : 107,
			NUMPAD_DECIMAL : 110,
			NUMPAD_DIVIDE : 111,
			NUMPAD_ENTER : 108,
			NUMPAD_MULTIPLY : 106,
			NUMPAD_SUBTRACT : 109,
			PAGE_DOWN : 34,
			PAGE_UP : 33,
			PERIOD : 190,
			RIGHT : 39,
			SPACE : 32,
			TAB : 9,
			UP : 38
		}
	}),
	t.fn.extend({
		focus : function (e) {
			return function (n, i) {
				return "number" == typeof n ? this.each(function () {
					var e = this;
					setTimeout(function () {
						t(e).focus(),
						i && i.call(e)
					}, n)
				}) : e.apply(this, arguments)
			}
		}
		(t.fn.focus),
		scrollParent : function () {
			var e;
			return e = t.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
					return /(relative|absolute|fixed)/.test(t.css(this, "position")) && /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
				}).eq(0) : this.parents().filter(function () {
					return /(auto|scroll)/.test(t.css(this, "overflow") + t.css(this, "overflow-y") + t.css(this, "overflow-x"))
				}).eq(0),
			/fixed/.test(this.css("position")) || !e.length ? t(document) : e
		},
		zIndex : function (n) {
			if (n !== e)
				return this.css("zIndex", n);
			if (this.length)
				for (var i, r, s = t(this[0]); s.length && s[0] !== document; ) {
					if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(s.css("zIndex"), 10), !isNaN(r) && 0 !== r))
						return r;
					s = s.parent()
				}
			return 0
		},
		uniqueId : function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++r)
			})
		},
		removeUniqueId : function () {
			return this.each(function () {
				s.test(this.id) && t(this).removeAttr("id")
			})
		}
	}),
	t.extend(t.expr[":"], {
		data : t.expr.createPseudo ? t.expr.createPseudo(function (e) {
			return function (n) {
				return !!t.data(n, e)
			}
		}) : function (e, n, i) {
			return !!t.data(e, i[3])
		},
		focusable : function (e) {
			return n(e, !isNaN(t.attr(e, "tabindex")))
		},
		tabbable : function (e) {
			var i = t.attr(e, "tabindex"),
			r = isNaN(i);
			return (r || i >= 0) && n(e, !r)
		}
	}),
	t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (n, i) {
		function r(e, n, i, r) {
			return t.each(s, function () {
				n -= parseFloat(t.css(e, "padding" + this)) || 0,
				i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
				r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
			}),
			n
		}
		var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
		o = i.toLowerCase(),
		a = {
			innerWidth : t.fn.innerWidth,
			innerHeight : t.fn.innerHeight,
			outerWidth : t.fn.outerWidth,
			outerHeight : t.fn.outerHeight
		};
		t.fn["inner" + i] = function (n) {
			return n === e ? a["inner" + i].call(this) : this.each(function () {
				t(this).css(o, r(this, n) + "px")
			})
		},
		t.fn["outer" + i] = function (e, n) {
			return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
				t(this).css(o, r(this, e, !0, n) + "px")
			})
		}
	}),
	t.fn.addBack || (t.fn.addBack = function (t) {
		return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
	}),
	t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
		return function (n) {
			return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
		}
	}
		(t.fn.removeData)),
	t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
	t.support.selectstart = "onselectstart" in document.createElement("div"),
	t.fn.extend({
		disableSelection : function () {
			return this.bind((t.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (t) {
				t.preventDefault()
			})
		},
		enableSelection : function () {
			return this.unbind(".ui-disableSelection")
		}
	}),
	t.extend(t.ui, {
		plugin : {
			add : function (e, n, i) {
				var r,
				s = t.ui[e].prototype;
				for (r in i)
					s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([n, i[r]])
			},
			call : function (t, e, n) {
				var i,
				r = t.plugins[e];
				if (r && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)
					for (i = 0; r.length > i; i++)
						t.options[r[i][0]] && r[i][1].apply(t.element, n)
			}
		},
		hasScroll : function (e, n) {
			if ("hidden" === t(e).css("overflow"))
				return !1;
			var i = n && "left" === n ? "scrollLeft" : "scrollTop",
			r = !1;
			return e[i] > 0 ? !0 : (e[i] = 1, r = e[i] > 0, e[i] = 0, r)
		}
	})
})(jQuery);
(function (t, e) {
	var i = 0,
	n = Array.prototype.slice,
	s = t.cleanData;
	t.cleanData = function (e) {
		for (var i, n = 0; null != (i = e[n]); n++)
			try {
				t(i).triggerHandler("remove")
			} catch (o) {}

		s(e)
	},
	t.widget = function (i, n, s) {
		var o,
		r,
		a,
		l,
		u = {},
		h = i.split(".")[0];
		i = i.split(".")[1],
		o = h + "-" + i,
		s || (s = n, n = t.Widget),
		t.expr[":"][o.toLowerCase()] = function (e) {
			return !!t.data(e, o)
		},
		t[h] = t[h] || {},
		r = t[h][i],
		a = t[h][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new a(t, i)
		},
		t.extend(a, r, {
			version : s.version,
			_proto : t.extend({}, s),
			_childConstructors : []
		}),
		l = new n,
		l.options = t.widget.extend({}, l.options),
		t.each(s, function (i, s) {
			return t.isFunction(s) ? (u[i] = function () {
				var t = function () {
					return n.prototype[i].apply(this, arguments)
				},
				e = function (t) {
					return n.prototype[i].apply(this, t)
				};
				return function () {
					var i,
					n = this._super,
					o = this._superApply;
					return this._super = t,
					this._superApply = e,
					i = s.apply(this, arguments),
					this._super = n,
					this._superApply = o,
					i
				}
			}
				(), e) : (u[i] = s, e)
		}),
		a.prototype = t.widget.extend(l, {
				widgetEventPrefix : r ? l.widgetEventPrefix || i : i
			}, u, {
				constructor : a,
				namespace : h,
				widgetName : i,
				widgetFullName : o
			}),
		r ? (t.each(r._childConstructors, function (e, i) {
				var n = i.prototype;
				t.widget(n.namespace + "." + n.widgetName, a, i._proto)
			}), delete r._childConstructors) : n._childConstructors.push(a),
		t.widget.bridge(i, a)
	},
	t.widget.extend = function (i) {
		for (var s, o, r = n.call(arguments, 1), a = 0, l = r.length; l > a; a++)
			for (s in r[a])
				o = r[a][s], r[a].hasOwnProperty(s) && o !== e && (i[s] = t.isPlainObject(o) ? t.isPlainObject(i[s]) ? t.widget.extend({}, i[s], o) : t.widget.extend({}, o) : o);
		return i
	},
	t.widget.bridge = function (i, s) {
		var o = s.prototype.widgetFullName || i;
		t.fn[i] = function (r) {
			var a = "string" == typeof r,
			l = n.call(arguments, 1),
			u = this;
			return r = !a && l.length ? t.widget.extend.apply(null, [r].concat(l)) : r,
			a ? this.each(function () {
				var n,
				s = t.data(this, o);
				return s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, l), n !== s && n !== e ? (u = n && n.jquery ? u.pushStack(n.get()) : n, !1) : e) : t.error("no such method '" + r + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
			}) : this.each(function () {
				var e = t.data(this, o);
				e ? e.option(r || {})._init() : t.data(this, o, new s(r, this))
			}),
			u
		}
	},
	t.Widget = function () {},
	t.Widget._childConstructors = [],
	t.Widget.prototype = {
		widgetName : "widget",
		widgetEventPrefix : "",
		defaultElement : "<div>",
		options : {
			disabled : !1,
			create : null
		},
		_createWidget : function (e, n) {
			n = t(n || this.defaultElement || this)[0],
			this.element = t(n),
			this.uuid = i++,
			this.eventNamespace = "." + this.widgetName + this.uuid,
			this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e),
			this.bindings = t(),
			this.hoverable = t(),
			this.focusable = t(),
			n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
					remove : function (t) {
						t.target === n && this.destroy()
					}
				}), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)),
			this._create(),
			this._trigger("create", null, this._getCreateEventData()),
			this._init()
		},
		_getCreateOptions : t.noop,
		_getCreateEventData : t.noop,
		_create : t.noop,
		_init : t.noop,
		destroy : function () {
			this._destroy(),
			this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
			this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"),
			this.bindings.unbind(this.eventNamespace),
			this.hoverable.removeClass("ui-state-hover"),
			this.focusable.removeClass("ui-state-focus")
		},
		_destroy : t.noop,
		widget : function () {
			return this.element
		},
		option : function (i, n) {
			var s,
			o,
			r,
			a = i;
			if (0 === arguments.length)
				return t.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (a = {}, s = i.split("."), i = s.shift(), s.length) {
					for (o = a[i] = t.widget.extend({}, this.options[i]), r = 0; s.length - 1 > r; r++)
						o[s[r]] = o[s[r]] || {},
					o = o[s[r]];
					if (i = s.pop(), 1 === arguments.length)
						return o[i] === e ? null : o[i];
					o[i] = n
				} else {
					if (1 === arguments.length)
						return this.options[i] === e ? null : this.options[i];
					a[i] = n
				}
			return this._setOptions(a),
			this
		},
		_setOptions : function (t) {
			var e;
			for (e in t)
				this._setOption(e, t[e]);
			return this
		},
		_setOption : function (t, e) {
			return this.options[t] = e,
			"disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")),
			this
		},
		enable : function () {
			return this._setOption("disabled", !1)
		},
		disable : function () {
			return this._setOption("disabled", !0)
		},
		_on : function (i, n, s) {
			var o,
			r = this;
			"boolean" != typeof i && (s = n, n = i, i = !1),
			s ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (s = n, n = this.element, o = this.widget()),
			t.each(s, function (s, a) {
				function l() {
					return i || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : e
				}
				"string" != typeof a && (l.guid = a.guid = a.guid || l.guid || t.guid++);
				var u = s.match(/^(\w+)\s*(.*)$/),
				h = u[1] + r.eventNamespace,
				c = u[2];
				c ? o.delegate(c, h, l) : n.bind(h, l)
			})
		},
		_off : function (t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
			t.unbind(e).undelegate(e)
		},
		_delay : function (t, e) {
			function i() {
				return ("string" == typeof t ? n[t] : t).apply(n, arguments)
			}
			var n = this;
			return setTimeout(i, e || 0)
		},
		_hoverable : function (e) {
			this.hoverable = this.hoverable.add(e),
			this._on(e, {
				mouseenter : function (e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave : function (e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable : function (e) {
			this.focusable = this.focusable.add(e),
			this._on(e, {
				focusin : function (e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout : function (e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger : function (e, i, n) {
			var s,
			o,
			r = this.options[e];
			if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
				for (s in o)
					s in i || (i[s] = o[s]);
			return this.element.trigger(i, n),
			!(t.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
		}
	},
	t.each({
		show : "fadeIn",
		hide : "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (n, s, o) {
			"string" == typeof s && (s = {
					effect : s
				});
			var r,
			a = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
			s = s || {},
			"number" == typeof s && (s = {
					duration : s
				}),
			r = !t.isEmptyObject(s),
			s.complete = o,
			s.delay && n.delay(s.delay),
			r && t.effects && t.effects.effect[a] ? n[e](s) : a !== e && n[a] ? n[a](s.duration, s.easing, o) : n.queue(function (i) {
				t(this)[e](),
				o && o.call(n[0]),
				i()
			})
		}
	})
})(jQuery);
(function (t) {
	var e = !1;
	t(document).mouseup(function () {
		e = !1
	}),
	t.widget("ui.mouse", {
		version : "1.10.4",
		options : {
			cancel : "input,textarea,button,select,option",
			distance : 1,
			delay : 0
		},
		_mouseInit : function () {
			var e = this;
			this.element.bind("mousedown." + this.widgetName, function (t) {
				return e._mouseDown(t)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}),
			this.started = !1
		},
		_mouseDestroy : function () {
			this.element.unbind("." + this.widgetName),
			this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown : function (i) {
			if (!e) {
				this._mouseStarted && this._mouseUp(i),
				this._mouseDownEvent = i;
				var s = this,
				n = 1 === i.which,
				a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
				return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
								s.mouseDelayMet = !0
							}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
						return s._mouseMove(t)
					}, this._mouseUpDelegate = function (t) {
						return s._mouseUp(t)
					}, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
			}
		},
		_mouseMove : function (e) {
			return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
		},
		_mouseUp : function (e) {
			return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
			this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)),
			!1
		},
		_mouseDistanceMet : function (t) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
		},
		_mouseDelayMet : function () {
			return this.mouseDelayMet
		},
		_mouseStart : function () {},
		_mouseDrag : function () {},
		_mouseStop : function () {},
		_mouseCapture : function () {
			return !0
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.draggable", t.ui.mouse, {
		version : "1.10.4",
		widgetEventPrefix : "drag",
		options : {
			addClasses : !0,
			appendTo : "parent",
			axis : !1,
			connectToSortable : !1,
			containment : !1,
			cursor : "auto",
			cursorAt : !1,
			grid : !1,
			handle : !1,
			helper : "original",
			iframeFix : !1,
			opacity : !1,
			refreshPositions : !1,
			revert : !1,
			revertDuration : 500,
			scope : "default",
			scroll : !0,
			scrollSensitivity : 20,
			scrollSpeed : 20,
			snap : !1,
			snapMode : "both",
			snapTolerance : 20,
			stack : !1,
			zIndex : !1,
			drag : null,
			start : null,
			stop : null
		},
		_create : function () {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
			this.options.addClasses && this.element.addClass("ui-draggable"),
			this.options.disabled && this.element.addClass("ui-draggable-disabled"),
			this._mouseInit()
		},
		_destroy : function () {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
			this._mouseDestroy()
		},
		_mouseCapture : function (e) {
			var i = this.options;
			return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
						t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
							width : this.offsetWidth + "px",
							height : this.offsetHeight + "px",
							position : "absolute",
							opacity : "0.001",
							zIndex : 1e3
						}).css(t(this).offset()).appendTo("body")
					}), !0) : !1)
		},
		_mouseStart : function (e) {
			var i = this.options;
			return this.helper = this._createHelper(e),
			this.helper.addClass("ui-draggable-dragging"),
			this._cacheHelperProportions(),
			t.ui.ddmanager && (t.ui.ddmanager.current = this),
			this._cacheMargins(),
			this.cssPosition = this.helper.css("position"),
			this.scrollParent = this.helper.scrollParent(),
			this.offsetParent = this.helper.offsetParent(),
			this.offsetParentCssPosition = this.offsetParent.css("position"),
			this.offset = this.positionAbs = this.element.offset(),
			this.offset = {
				top : this.offset.top - this.margins.top,
				left : this.offset.left - this.margins.left
			},
			this.offset.scroll = !1,
			t.extend(this.offset, {
				click : {
					left : e.pageX - this.offset.left,
					top : e.pageY - this.offset.top
				},
				parent : this._getParentOffset(),
				relative : this._getRelativeOffset()
			}),
			this.originalPosition = this.position = this._generatePosition(e),
			this.originalPageX = e.pageX,
			this.originalPageY = e.pageY,
			i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
			this._setContainment(),
			this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
		},
		_mouseDrag : function (e, i) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", e, s) === !1)
					return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"),
			this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"),
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			!1
		},
		_mouseStop : function (e) {
			var i = this,
			s = !1;
			return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)),
			this.dropped && (s = this.dropped, this.dropped = !1),
			"original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
					i._trigger("stop", e) !== !1 && i._clear()
				}) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp : function (e) {
			return t("div.ui-draggable-iframeFix").each(function () {
				this.parentNode.removeChild(this)
			}),
			t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
			t.ui.mouse.prototype._mouseUp.call(this, e)
		},
		cancel : function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
			this
		},
		_getHandle : function (e) {
			return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper : function (e) {
			var i = this.options,
			s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo),
			s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"),
			s
		},
		_adjustOffsetFromHelper : function (e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
					left : +e[0],
					top : +e[1] || 0
				}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset : function () {
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			(this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top : 0,
					left : 0
				}), {
				top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset : function () {
			if ("relative" === this.cssPosition) {
				var t = this.element.position();
				return {
					top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top : 0,
				left : 0
			}
		},
		_cacheMargins : function () {
			this.margins = {
				left : parseInt(this.element.css("marginLeft"), 10) || 0,
				top : parseInt(this.element.css("marginTop"), 10) || 0,
				right : parseInt(this.element.css("marginRight"), 10) || 0,
				bottom : parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions : function () {
			this.helperProportions = {
				width : this.helper.outerWidth(),
				height : this.helper.outerHeight()
			}
		},
		_setContainment : function () {
			var e,
			i,
			s,
			n = this.options;
			return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
		},
		_convertPositionTo : function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
			n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
			return this.offset.scroll || (this.offset.scroll = {
					top : n.scrollTop(),
					left : n.scrollLeft()
				}), {
				top : i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
				left : i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
			}
		},
		_generatePosition : function (e) {
			var i,
			s,
			n,
			a,
			o = this.options,
			r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			l = e.pageX,
			h = e.pageY;
			return this.offset.scroll || (this.offset.scroll = {
					top : r.scrollTop(),
					left : r.scrollLeft()
				}),
			this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
				top : h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
				left : l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
			}
		},
		_clear : function () {
			this.helper.removeClass("ui-draggable-dragging"),
			this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
			this.helper = null,
			this.cancelHelperRemoval = !1
		},
		_trigger : function (e, i, s) {
			return s = s || this._uiHash(),
			t.ui.plugin.call(this, e, [i, s]),
			"drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
			t.Widget.prototype._trigger.call(this, e, i, s)
		},
		plugins : {},
		_uiHash : function () {
			return {
				helper : this.helper,
				position : this.position,
				originalPosition : this.originalPosition,
				offset : this.positionAbs
			}
		}
	}),
	t.ui.plugin.add("draggable", "connectToSortable", {
		start : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = s.options,
			a = t.extend({}, i, {
					item : s.element
				});
			s.sortables = [],
			t(n.connectToSortable).each(function () {
				var i = t.data(this, "ui-sortable");
				i && !i.options.disabled && (s.sortables.push({
						instance : i,
						shouldRevert : i.options.revert
					}), i.refreshPositions(), i._trigger("activate", e, a))
			})
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = t.extend({}, i, {
					item : s.element
				});
			t.each(s.sortables, function () {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
						top : "auto",
						left : "auto"
					})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
			})
		},
		drag : function (e, i) {
			var s = t(this).data("ui-draggable"),
			n = this;
			t.each(s.sortables, function () {
				var a = !1,
				o = this;
				this.instance.positionAbs = s.positionAbs,
				this.instance.helperProportions = s.helperProportions,
				this.instance.offset.click = s.offset.click,
				this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function () {
						return this.instance.positionAbs = s.positionAbs,
						this.instance.helperProportions = s.helperProportions,
						this.instance.offset.click = s.offset.click,
						this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1),
						a
					})),
				a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
						return i.helper[0]
					}, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
			})
		}
	}),
	t.ui.plugin.add("draggable", "cursor", {
		start : function () {
			var e = t("body"),
			i = t(this).data("ui-draggable").options;
			e.css("cursor") && (i._cursor = e.css("cursor")),
			e.css("cursor", i.cursor)
		},
		stop : function () {
			var e = t(this).data("ui-draggable").options;
			e._cursor && t("body").css("cursor", e._cursor)
		}
	}),
	t.ui.plugin.add("draggable", "opacity", {
		start : function (e, i) {
			var s = t(i.helper),
			n = t(this).data("ui-draggable").options;
			s.css("opacity") && (n._opacity = s.css("opacity")),
			s.css("opacity", n.opacity)
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._opacity && t(i.helper).css("opacity", s._opacity)
		}
	}),
	t.ui.plugin.add("draggable", "scroll", {
		start : function () {
			var e = t(this).data("ui-draggable");
			e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
		},
		drag : function (e) {
			var i = t(this).data("ui-draggable"),
			s = i.options,
			n = !1;
			i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))),
			n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
		}
	}),
	t.ui.plugin.add("draggable", "snap", {
		start : function () {
			var e = t(this).data("ui-draggable"),
			i = e.options;
			e.snapElements = [],
			t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
				var i = t(this),
				s = i.offset();
				this !== e.element[0] && e.snapElements.push({
					item : this,
					width : i.outerWidth(),
					height : i.outerHeight(),
					top : s.top,
					left : s.left
				})
			})
		},
		drag : function (e, i) {
			var s,
			n,
			a,
			o,
			r,
			l,
			h,
			c,
			u,
			d,
			p = t(this).data("ui-draggable"),
			f = p.options,
			g = f.snapTolerance,
			m = i.offset.left,
			v = m + p.helperProportions.width,
			_ = i.offset.top,
			b = _ + p.helperProportions.height;
			for (u = p.snapElements.length - 1; u >= 0; u--)
				r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - g > v || m > l + g || h - g > b || _ > c + g || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
							snapItem : p.snapElements[u].item
						})), p.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(h - b), n = g >= Math.abs(c - _), a = g >= Math.abs(r - v), o = g >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
									top : h - p.helperProportions.height,
									left : 0
								}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
									top : c,
									left : 0
								}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : r - p.helperProportions.width
								}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : l
								}).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = g >= Math.abs(h - _), n = g >= Math.abs(c - b), a = g >= Math.abs(r - m), o = g >= Math.abs(l - v), s && (i.position.top = p._convertPositionTo("relative", {
									top : h,
									left : 0
								}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
									top : c - p.helperProportions.height,
									left : 0
								}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : r
								}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
									top : 0,
									left : l - p.helperProportions.width
								}).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
							snapItem : p.snapElements[u].item
						})), p.snapElements[u].snapping = s || n || a || o || d)
		}
	}),
	t.ui.plugin.add("draggable", "stack", {
		start : function () {
			var e,
			i = this.data("ui-draggable").options,
			s = t.makeArray(t(i.stack)).sort(function (e, i) {
					return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
				});
			s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function (i) {
					t(this).css("zIndex", e + i)
				}), this.css("zIndex", e + s.length))
		}
	}),
	t.ui.plugin.add("draggable", "zIndex", {
		start : function (e, i) {
			var s = t(i.helper),
			n = t(this).data("ui-draggable").options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")),
			s.css("zIndex", n.zIndex)
		},
		stop : function (e, i) {
			var s = t(this).data("ui-draggable").options;
			s._zIndex && t(i.helper).css("zIndex", s._zIndex)
		}
	})
})(jQuery);
(function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}
	t.widget("ui.droppable", {
		version : "1.10.4",
		widgetEventPrefix : "drop",
		options : {
			accept : "*",
			activeClass : !1,
			addClasses : !0,
			greedy : !1,
			hoverClass : !1,
			scope : "default",
			tolerance : "intersect",
			activate : null,
			deactivate : null,
			drop : null,
			out : null,
			over : null
		},
		_create : function () {
			var e,
			i = this.options,
			s = i.accept;
			this.isover = !1,
			this.isout = !0,
			this.accept = t.isFunction(s) ? s : function (t) {
				return t.is(s)
			},
			this.proportions = function () {
				return arguments.length ? (e = arguments[0], undefined) : e ? e : e = {
					width : this.element[0].offsetWidth,
					height : this.element[0].offsetHeight
				}
			},
			t.ui.ddmanager.droppables[i.scope] = t.ui.ddmanager.droppables[i.scope] || [],
			t.ui.ddmanager.droppables[i.scope].push(this),
			i.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy : function () {
			for (var e = 0, i = t.ui.ddmanager.droppables[this.options.scope]; i.length > e; e++)
				i[e] === this && i.splice(e, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption : function (e, i) {
			"accept" === e && (this.accept = t.isFunction(i) ? i : function (t) {
				return t.is(i)
			}),
			t.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate : function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass),
			i && this._trigger("activate", e, this.ui(i))
		},
		_deactivate : function (e) {
			var i = t.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass),
			i && this._trigger("deactivate", e, this.ui(i))
		},
		_over : function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
		},
		_out : function (e) {
			var i = t.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
		},
		_drop : function (e, i) {
			var s = i || t.ui.ddmanager.current,
			n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
					var e = t.data(this, "ui-droppable");
					return e.options.greedy && !e.options.disabled && e.options.scope === s.options.scope && e.accept.call(e.element[0], s.currentItem || s.element) && t.ui.intersect(s, t.extend(e, {
							offset : e.element.offset()
						}), e.options.tolerance) ? (n = !0, !1) : undefined
				}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(s)), this.element) : !1) : !1
		},
		ui : function (t) {
			return {
				draggable : t.currentItem || t.element,
				helper : t.helper,
				position : t.position,
				offset : t.positionAbs
			}
		}
	}),
	t.ui.intersect = function (t, i, s) {
		if (!i.offset)
			return !1;
		var n,
		a,
		o = (t.positionAbs || t.position.absolute).left,
		r = (t.positionAbs || t.position.absolute).top,
		l = o + t.helperProportions.width,
		h = r + t.helperProportions.height,
		c = i.offset.left,
		u = i.offset.top,
		d = c + i.proportions().width,
		p = u + i.proportions().height;
		switch (s) {
		case "fit":
			return o >= c && d >= l && r >= u && p >= h;
		case "intersect":
			return o + t.helperProportions.width / 2 > c && d > l - t.helperProportions.width / 2 && r + t.helperProportions.height / 2 > u && p > h - t.helperProportions.height / 2;
		case "pointer":
			return n = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
			a = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
			e(a, u, i.proportions().height) && e(n, c, i.proportions().width);
		case "touch":
			return (r >= u && p >= r || h >= u && p >= h || u > r && h > p) && (o >= c && d >= o || l >= c && d >= l || c > o && l > d);
		default:
			return !1
		}
	},
	t.ui.ddmanager = {
		current : null,
		droppables : {
			"default" : []
		},
		prepareOffsets : function (e, i) {
			var s,
			n,
			a = t.ui.ddmanager.droppables[e.options.scope] || [],
			o = i ? i.type : null,
			r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
			t : for (s = 0; a.length > s; s++)
				if (!(a[s].options.disabled || e && !a[s].accept.call(a[s].element[0], e.currentItem || e.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === a[s].element[0]) {
							a[s].proportions().height = 0;
							continue t
						}
					a[s].visible = "none" !== a[s].element.css("display"),
					a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
							width : a[s].element[0].offsetWidth,
							height : a[s].element[0].offsetHeight
						}))
				}
		},
		drop : function (e, i) {
			var s = !1;
			return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
				this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}),
			s
		},
		dragStart : function (e, i) {
			e.element.parentsUntil("body").bind("scroll.droppable", function () {
				e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
			})
		},
		drag : function (e, i) {
			e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
			t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s,
					n,
					a,
					o = t.ui.intersect(e, this, this.options.tolerance),
					r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
									return t.data(this, "ui-droppable").options.scope === n
								}), a.length && (s = t.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop : function (e, i) {
			e.element.parentsUntil("body").unbind("scroll.droppable"),
			e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
		}
	}
})(jQuery);
(function (t) {
	function e(t) {
		return parseInt(t, 10) || 0
	}
	function i(t) {
		return !isNaN(parseInt(t, 10))
	}
	t.widget("ui.resizable", t.ui.mouse, {
		version : "1.10.4",
		widgetEventPrefix : "resize",
		options : {
			alsoResize : !1,
			animate : !1,
			animateDuration : "slow",
			animateEasing : "swing",
			aspectRatio : !1,
			autoHide : !1,
			containment : !1,
			ghost : !1,
			grid : !1,
			handles : "e,s,se",
			helper : !1,
			maxHeight : null,
			maxWidth : null,
			minHeight : 10,
			minWidth : 10,
			zIndex : 90,
			resize : null,
			start : null,
			stop : null
		},
		_create : function () {
			var e,
			i,
			s,
			n,
			a,
			o = this,
			r = this.options;
			if (this.element.addClass("ui-resizable"), t.extend(this, {
					_aspectRatio : !!r.aspectRatio,
					aspectRatio : r.aspectRatio,
					originalElement : this.element,
					_proportionallyResizeElements : [],
					_helper : r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
							position : this.element.css("position"),
							width : this.element.outerWidth(),
							height : this.element.outerHeight(),
							top : this.element.css("top"),
							left : this.element.css("left")
						})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
						marginLeft : this.originalElement.css("marginLeft"),
						marginTop : this.originalElement.css("marginTop"),
						marginRight : this.originalElement.css("marginRight"),
						marginBottom : this.originalElement.css("marginBottom")
					}), this.originalElement.css({
						marginLeft : 0,
						marginTop : 0,
						marginRight : 0,
						marginBottom : 0
					}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
							position : "static",
							zoom : 1,
							display : "block"
						})), this.originalElement.css({
						margin : this.originalElement.css("margin")
					}), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
						n : ".ui-resizable-n",
						e : ".ui-resizable-e",
						s : ".ui-resizable-s",
						w : ".ui-resizable-w",
						se : ".ui-resizable-se",
						sw : ".ui-resizable-sw",
						ne : ".ui-resizable-ne",
						nw : ".ui-resizable-nw"
					}
						 : "e,s,se"), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++)
					s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
						zIndex : r.zIndex
					}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
			this._renderAxis = function (e) {
				var i,
				s,
				n,
				a;
				e = e || this.element;
				for (i in this.handles)
					this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
			},
			this._renderAxis(this.element),
			this._handles = t(".ui-resizable-handle", this.element).disableSelection(),
			this._handles.mouseover(function () {
				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
			}),
			r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
					r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
				}).mouseleave(function () {
					r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
				})),
			this._mouseInit()
		},
		_destroy : function () {
			this._mouseDestroy();
			var e,
			i = function (e) {
				t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
					position : e.css("position"),
					width : e.outerWidth(),
					height : e.outerHeight(),
					top : e.css("top"),
					left : e.css("left")
				}).insertAfter(e), e.remove()),
			this.originalElement.css("resize", this.originalResizeStyle),
			i(this.originalElement),
			this
		},
		_mouseCapture : function (e) {
			var i,
			s,
			n = !1;
			for (i in this.handles)
				s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart : function (i) {
			var s,
			n,
			a,
			o = this.options,
			r = this.element.position(),
			h = this.element;
			return this.resizing = !0,
			/absolute/.test(h.css("position")) ? h.css({
				position : "absolute",
				top : h.css("top"),
				left : h.css("left")
			}) : h.is(".ui-draggable") && h.css({
				position : "absolute",
				top : r.top,
				left : r.left
			}),
			this._renderProxy(),
			s = e(this.helper.css("left")),
			n = e(this.helper.css("top")),
			o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0),
			this.offset = this.helper.offset(),
			this.position = {
				left : s,
				top : n
			},
			this.size = this._helper ? {
				width : this.helper.width(),
				height : this.helper.height()
			}
			 : {
				width : h.width(),
				height : h.height()
			},
			this.originalSize = this._helper ? {
				width : h.outerWidth(),
				height : h.outerHeight()
			}
			 : {
				width : h.width(),
				height : h.height()
			},
			this.originalPosition = {
				left : s,
				top : n
			},
			this.sizeDiff = {
				width : h.outerWidth() - h.width(),
				height : h.outerHeight() - h.height()
			},
			this.originalMousePosition = {
				left : i.pageX,
				top : i.pageY
			},
			this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
			a = t(".ui-resizable-" + this.axis).css("cursor"),
			t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a),
			h.addClass("ui-resizable-resizing"),
			this._propagate("start", i),
			!0
		},
		_mouseDrag : function (e) {
			var i,
			s = this.helper,
			n = {},
			a = this.originalMousePosition,
			o = this.axis,
			r = this.position.top,
			h = this.position.left,
			l = this.size.width,
			c = this.size.height,
			u = e.pageX - a.left || 0,
			d = e.pageY - a.top || 0,
			p = this._change[o];
			return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
		},
		_mouseStop : function (e) {
			this.resizing = !1;
			var i,
			s,
			n,
			a,
			o,
			r,
			h,
			l = this.options,
			c = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
					width : c.helper.width() - a,
					height : c.helper.height() - n
				}, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
						top : h,
						left : r
					})), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()),
			t("body").css("cursor", "auto"),
			this.element.removeClass("ui-resizable-resizing"),
			this._propagate("stop", e),
			this._helper && this.helper.remove(),
			!1
		},
		_updateVirtualBoundaries : function (t) {
			var e,
			s,
			n,
			a,
			o,
			r = this.options;
			o = {
				minWidth : i(r.minWidth) ? r.minWidth : 0,
				maxWidth : i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight : i(r.minHeight) ? r.minHeight : 0,
				maxHeight : i(r.maxHeight) ? r.maxHeight : 1 / 0
			},
			(this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)),
			this._vBoundaries = o
		},
		_updateCache : function (t) {
			this.offset = this.helper.offset(),
			i(t.left) && (this.position.left = t.left),
			i(t.top) && (this.position.top = t.top),
			i(t.height) && (this.size.height = t.height),
			i(t.width) && (this.size.width = t.width)
		},
		_updateRatio : function (t) {
			var e = this.position,
			s = this.size,
			n = this.axis;
			return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio),
			"sw" === n && (t.left = e.left + (s.width - t.width), t.top = null),
			"nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)),
			t
		},
		_respectSize : function (t) {
			var e = this._vBoundaries,
			s = this.axis,
			n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
			a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
			o = i(t.width) && e.minWidth && e.minWidth > t.width,
			r = i(t.height) && e.minHeight && e.minHeight > t.height,
			h = this.originalPosition.left + this.originalSize.width,
			l = this.position.top + this.size.height,
			c = /sw|nw|w/.test(s),
			u = /nw|ne|n/.test(s);
			return o && (t.width = e.minWidth),
			r && (t.height = e.minHeight),
			n && (t.width = e.maxWidth),
			a && (t.height = e.maxHeight),
			o && c && (t.left = h - e.minWidth),
			n && c && (t.left = h - e.maxWidth),
			r && u && (t.top = l - e.minHeight),
			a && u && (t.top = l - e.maxHeight),
			t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
			t
		},
		_proportionallyResize : function () {
			if (this._proportionallyResizeElements.length) {
				var t,
				e,
				i,
				s,
				n,
				a = this.helper || this.element;
				for (t = 0; this._proportionallyResizeElements.length > t; t++) {
					if (n = this._proportionallyResizeElements[t], !this.borderDif)
						for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++)
							this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
					n.css({
						height : a.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width : a.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy : function () {
			var e = this.element,
			i = this.options;
			this.elementOffset = e.offset(),
			this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
					width : this.element.outerWidth() - 1,
					height : this.element.outerHeight() - 1,
					position : "absolute",
					left : this.elementOffset.left + "px",
					top : this.elementOffset.top + "px",
					zIndex : ++i.zIndex
				}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change : {
			e : function (t, e) {
				return {
					width : this.originalSize.width + e
				}
			},
			w : function (t, e) {
				var i = this.originalSize,
				s = this.originalPosition;
				return {
					left : s.left + e,
					width : i.width - e
				}
			},
			n : function (t, e, i) {
				var s = this.originalSize,
				n = this.originalPosition;
				return {
					top : n.top + i,
					height : s.height - i
				}
			},
			s : function (t, e, i) {
				return {
					height : this.originalSize.height + i
				}
			},
			se : function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			sw : function (e, i, s) {
				return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			},
			ne : function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
			},
			nw : function (e, i, s) {
				return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
			}
		},
		_propagate : function (e, i) {
			t.ui.plugin.call(this, e, [i, this.ui()]),
			"resize" !== e && this._trigger(e, i, this.ui())
		},
		plugins : {},
		ui : function () {
			return {
				originalElement : this.originalElement,
				element : this.element,
				helper : this.helper,
				position : this.position,
				size : this.size,
				originalSize : this.originalSize,
				originalPosition : this.originalPosition
			}
		}
	}),
	t.ui.plugin.add("resizable", "animate", {
		stop : function (e) {
			var i = t(this).data("ui-resizable"),
			s = i.options,
			n = i._proportionallyResizeElements,
			a = n.length && /textarea/i.test(n[0].nodeName),
			o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
			r = a ? 0 : i.sizeDiff.width,
			h = {
				width : i.size.width - r,
				height : i.size.height - o
			},
			l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
			c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(t.extend(h, c && l ? {
					top : c,
					left : l
				}
					 : {}), {
				duration : s.animateDuration,
				easing : s.animateEasing,
				step : function () {
					var s = {
						width : parseInt(i.element.css("width"), 10),
						height : parseInt(i.element.css("height"), 10),
						top : parseInt(i.element.css("top"), 10),
						left : parseInt(i.element.css("left"), 10)
					};
					n && n.length && t(n[0]).css({
						width : s.width,
						height : s.height
					}),
					i._updateCache(s),
					i._propagate("resize", e)
				}
			})
		}
	}),
	t.ui.plugin.add("resizable", "containment", {
		start : function () {
			var i,
			s,
			n,
			a,
			o,
			r,
			h,
			l = t(this).data("ui-resizable"),
			c = l.options,
			u = l.element,
			d = c.containment,
			p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
			p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
						left : 0,
						top : 0
					}, l.containerPosition = {
						left : 0,
						top : 0
					}, l.parentData = {
						element : t(document),
						left : 0,
						top : 0,
						width : t(document).width(),
						height : t(document).height() || document.body.parentNode.scrollHeight
					}) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
						s[t] = e(i.css("padding" + n))
					}), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
						height : i.innerHeight() - s[3],
						width : i.innerWidth() - s[1]
					}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
						element : p,
						left : n.left,
						top : n.top,
						width : r,
						height : h
					}))
		},
		resize : function (e) {
			var i,
			s,
			n,
			a,
			o = t(this).data("ui-resizable"),
			r = o.options,
			h = o.containerOffset,
			l = o.position,
			c = o._aspectRatio || e.shiftKey,
			u = {
				top : 0,
				left : 0
			},
			d = o.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (u = h),
			l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0),
			l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0),
			o.offset.left = o.parentData.left + o.position.left,
			o.offset.top = o.parentData.top + o.position.top,
			i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width),
			s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height),
			n = o.containerElement.get(0) === o.element.parent().get(0),
			a = /relative|absolute/.test(o.containerElement.css("position")),
			n && a && (i -= Math.abs(o.parentData.left)),
			i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)),
			s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
		},
		stop : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.containerOffset,
			n = e.containerPosition,
			a = e.containerElement,
			o = t(e.helper),
			r = o.offset(),
			h = o.outerWidth() - e.sizeDiff.width,
			l = o.outerHeight() - e.sizeDiff.height;
			e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
				left : r.left - n.left - s.left,
				width : h,
				height : l
			}),
			e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
				left : r.left - n.left - s.left,
				width : h,
				height : l
			})
		}
	}),
	t.ui.plugin.add("resizable", "alsoResize", {
		start : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = function (e) {
				t(e).each(function () {
					var e = t(this);
					e.data("ui-resizable-alsoresize", {
						width : parseInt(e.width(), 10),
						height : parseInt(e.height(), 10),
						left : parseInt(e.css("left"), 10),
						top : parseInt(e.css("top"), 10)
					})
				})
			};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function (t) {
				s(t)
			})
		},
		resize : function (e, i) {
			var s = t(this).data("ui-resizable"),
			n = s.options,
			a = s.originalSize,
			o = s.originalPosition,
			r = {
				height : s.size.height - a.height || 0,
				width : s.size.width - a.width || 0,
				top : s.position.top - o.top || 0,
				left : s.position.left - o.left || 0
			},
			h = function (e, s) {
				t(e).each(function () {
					var e = t(this),
					n = t(this).data("ui-resizable-alsoresize"),
					a = {},
					o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
					t.each(o, function (t, e) {
						var i = (n[e] || 0) + (r[e] || 0);
						i && i >= 0 && (a[e] = i || null)
					}),
					e.css(a)
				})
			};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function (t, e) {
				h(t, e)
			})
		},
		stop : function () {
			t(this).removeData("resizable-alsoresize")
		}
	}),
	t.ui.plugin.add("resizable", "ghost", {
		start : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.size;
			e.ghost = e.originalElement.clone(),
			e.ghost.css({
				opacity : .25,
				display : "block",
				position : "relative",
				height : s.height,
				width : s.width,
				margin : 0,
				left : 0,
				top : 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""),
			e.ghost.appendTo(e.helper)
		},
		resize : function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.ghost.css({
				position : "relative",
				height : e.size.height,
				width : e.size.width
			})
		},
		stop : function () {
			var e = t(this).data("ui-resizable");
			e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
		}
	}),
	t.ui.plugin.add("resizable", "grid", {
		resize : function () {
			var e = t(this).data("ui-resizable"),
			i = e.options,
			s = e.size,
			n = e.originalSize,
			a = e.originalPosition,
			o = e.axis,
			r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
			h = r[0] || 1,
			l = r[1] || 1,
			c = Math.round((s.width - n.width) / h) * h,
			u = Math.round((s.height - n.height) / l) * l,
			d = n.width + c,
			p = n.height + u,
			f = i.maxWidth && d > i.maxWidth,
			g = i.maxHeight && p > i.maxHeight,
			m = i.minWidth && i.minWidth > d,
			v = i.minHeight && i.minHeight > p;
			i.grid = r,
			m && (d += h),
			v && (p += l),
			f && (d -= h),
			g && (p -= l),
			/^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.selectable", t.ui.mouse, {
		version : "1.10.4",
		options : {
			appendTo : "body",
			autoRefresh : !0,
			distance : 0,
			filter : "*",
			tolerance : "touch",
			selected : null,
			selecting : null,
			start : null,
			stop : null,
			unselected : null,
			unselecting : null
		},
		_create : function () {
			var e,
			i = this;
			this.element.addClass("ui-selectable"),
			this.dragged = !1,
			this.refresh = function () {
				e = t(i.options.filter, i.element[0]),
				e.addClass("ui-selectee"),
				e.each(function () {
					var e = t(this),
					i = e.offset();
					t.data(this, "selectable-item", {
						element : this,
						$element : e,
						left : i.left,
						top : i.top,
						right : i.left + e.outerWidth(),
						bottom : i.top + e.outerHeight(),
						startselected : !1,
						selected : e.hasClass("ui-selected"),
						selecting : e.hasClass("ui-selecting"),
						unselecting : e.hasClass("ui-unselecting")
					})
				})
			},
			this.refresh(),
			this.selectees = e.addClass("ui-selectee"),
			this._mouseInit(),
			this.helper = t("<div class='ui-selectable-helper'></div>")
		},
		_destroy : function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
			this.element.removeClass("ui-selectable ui-selectable-disabled"),
			this._mouseDestroy()
		},
		_mouseStart : function (e) {
			var i = this,
			s = this.options;
			this.opos = [e.pageX, e.pageY],
			this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
					left : e.pageX,
					top : e.pageY,
					width : 0,
					height : 0
				}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
					var s = t.data(this, "selectable-item");
					s.startselected = !0,
					e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
							unselecting : s.element
						}))
				}), t(e.target).parents().addBack().each(function () {
					var s,
					n = t.data(this, "selectable-item");
					return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
							selecting : n.element
						}) : i._trigger("unselecting", e, {
							unselecting : n.element
						}), !1) : undefined
				}))
		},
		_mouseDrag : function (e) {
			if (this.dragged = !0, !this.options.disabled) {
				var i,
				s = this,
				n = this.options,
				a = this.opos[0],
				o = this.opos[1],
				r = e.pageX,
				l = e.pageY;
				return a > r && (i = r, r = a, a = i),
				o > l && (i = l, l = o, o = i),
				this.helper.css({
					left : a,
					top : o,
					width : r - a,
					height : l - o
				}),
				this.selectees.each(function () {
					var i = t.data(this, "selectable-item"),
					h = !1;
					i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
									selecting : i.element
								}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
										unselecting : i.element
									}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
										unselecting : i.element
									})))))
				}),
				!1
			}
		},
		_mouseStop : function (e) {
			var i = this;
			return this.dragged = !1,
			t(".ui-unselecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"),
				s.unselecting = !1,
				s.startselected = !1,
				i._trigger("unselected", e, {
					unselected : s.element
				})
			}),
			t(".ui-selecting", this.element[0]).each(function () {
				var s = t.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"),
				s.selecting = !1,
				s.selected = !0,
				s.startselected = !0,
				i._trigger("selected", e, {
					selected : s.element
				})
			}),
			this._trigger("stop", e),
			this.helper.remove(),
			!1
		}
	})
})(jQuery);
(function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}
	function i(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version : "1.10.4",
		widgetEventPrefix : "sort",
		ready : !1,
		options : {
			appendTo : "parent",
			axis : !1,
			connectWith : !1,
			containment : !1,
			cursor : "auto",
			cursorAt : !1,
			dropOnEmpty : !0,
			forcePlaceholderSize : !1,
			forceHelperSize : !1,
			grid : !1,
			handle : !1,
			helper : "original",
			items : "> *",
			opacity : !1,
			placeholder : !1,
			revert : !1,
			scroll : !0,
			scrollSensitivity : 20,
			scrollSpeed : 20,
			scope : "default",
			tolerance : "intersect",
			zIndex : 1e3,
			activate : null,
			beforeStop : null,
			change : null,
			deactivate : null,
			out : null,
			over : null,
			receive : null,
			remove : null,
			sort : null,
			start : null,
			stop : null,
			update : null
		},
		_create : function () {
			var t = this.options;
			this.containerCache = {},
			this.element.addClass("ui-sortable"),
			this.refresh(),
			this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1,
			this.offset = this.element.offset(),
			this._mouseInit(),
			this.ready = !0
		},
		_destroy : function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled"),
			this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--)
				this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption : function (e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture : function (e, i) {
			var s = null,
			n = !1,
			o = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
					return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
				}), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
						this === e.target && (n = !0)
					}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart : function (e, i, s) {
			var n,
			o,
			a = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top : this.offset.top - this.margins.top,
					left : this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click : {
						left : e.pageX - this.offset.left,
						top : e.pageY - this.offset.top
					},
					parent : this._getParentOffset(),
					relative : this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
					prev : this.currentItem.prev()[0],
					parent : this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--)
					this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this),
			t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e),
			this.dragging = !0,
			this.helper.addClass("ui-sortable-helper"),
			this._mouseDrag(e),
			!0
		},
		_mouseDrag : function (e) {
			var i,
			s,
			n,
			o,
			a = this.options,
			r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s))
						break;
					this._rearrange(e, s),
					this._trigger("change", e, this._uiHash());
					break
				}
			return this._contactContainers(e),
			t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
			this._trigger("sort", e, this._uiHash()),
			this.lastPositionAbs = this.positionAbs,
			!1
		},
		_mouseStop : function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
					n = this.placeholder.offset(),
					o = this.options.axis,
					a = {};
					o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
					o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
					this.reverting = !0,
					t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else
					this._clear(e, i);
				return !1
			}
		},
		cancel : function () {
			if (this.dragging) {
				this._mouseUp({
					target : null
				}),
				"original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--)
					this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
					helper : null,
					dragging : !1,
					reverting : !1,
					_noFinalSort : null
				}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)),
			this
		},
		serialize : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			s = [];
			return e = e || {},
			t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}),
			!s.length && e.key && s.push(e.key + "="),
			s.join("&")
		},
		toArray : function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
			s = [];
			return e = e || {},
			i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}),
			s
		},
		_intersectsWith : function (t) {
			var e = this.positionAbs.left,
			i = e + this.helperProportions.width,
			s = this.positionAbs.top,
			n = s + this.helperProportions.height,
			o = t.left,
			a = o + t.width,
			r = t.top,
			h = r + t.height,
			l = this.offset.click.top,
			c = this.offset.click.left,
			u = "x" === this.options.axis || s + l > r && h > s + l,
			d = "y" === this.options.axis || e + c > o && a > e + c,
			p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer : function (t) {
			var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
			s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
			n = i && s,
			o = this._getDragVerticalDirection(),
			a = this._getDragHorizontalDirection();
			return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
		},
		_intersectsWithSides : function (t) {
			var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
			s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
			n = this._getDragVerticalDirection(),
			o = this._getDragHorizontalDirection();
			return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
		},
		_getDragVerticalDirection : function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection : function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh : function (t) {
			return this._refreshItems(t),
			this.refreshPositions(),
			this
		},
		_connectWith : function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery : function (e) {
			function i() {
				r.push(this)
			}
			var s,
			n,
			o,
			a,
			r = [],
			h = [],
			l = this._connectWith();
			if (l && e)
				for (s = l.length - 1; s >= 0; s--)
					for (o = t(l[s]), n = o.length - 1; n >= 0; n--)
						a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
							options : this.options,
							item : this.currentItem
						}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--)
				h[s][0].each(i);
			return t(r)
		},
		_removeCurrentsFromItems : function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
					for (var i = 0; e.length > i; i++)
						if (e[i] === t.item[0])
							return !1;
					return !0
				})
		},
		_refreshItems : function (e) {
			this.items = [],
			this.containers = [this];
			var i,
			s,
			n,
			o,
			a,
			r,
			h,
			l,
			c = this.items,
			u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item : this.currentItem
					}) : t(this.options.items, this.element), this]],
			d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i]), s = n.length - 1; s >= 0; s--)
						o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
										item : this.currentItem
									}) : t(o.options.items, o.element), o]), this.containers.push(o));
			for (i = u.length - 1; i >= 0; i--)
				for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++)
					h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
						item : h,
						instance : a,
						width : 0,
						height : 0,
						left : 0,
						top : 0
					})
		},
		refreshPositions : function (e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i,
			s,
			n,
			o;
			for (i = this.items.length - 1; i >= 0; i--)
				s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
			if (this.options.custom && this.options.custom.refreshContainers)
				this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--)
					o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder : function (e) {
			e = e || this;
			var i,
			s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
					element : function () {
						var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
						return "tr" === s ? e.currentItem.children().each(function () {
							t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
						}) : "img" === s && n.attr("src", e.currentItem.attr("src")),
						i || n.css("visibility", "hidden"),
						n
					},
					update : function (t, n) {
						(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
					}
				}),
			e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)),
			e.currentItem.after(e.placeholder),
			s.placeholder.update(e, e.placeholder)
		},
		_contactContainers : function (s) {
			var n,
			o,
			a,
			r,
			h,
			l,
			c,
			u,
			d,
			p,
			f = null,
			g = null;
			for (n = this.containers.length - 1; n >= 0; n--)
				if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (f && t.contains(this.containers[n].element[0], f.element[0]))
							continue;
						f = this.containers[n],
						g = n
					} else
						this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
			if (f)
				if (1 === this.containers.length)
					this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
				else {
					for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--)
						t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
					if (!r && !this.options.dropOnEmpty)
						return;
					if (this.currentContainer === this.containers[g])
						return;
					r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0),
					this._trigger("change", s, this._uiHash()),
					this.containers[g]._trigger("change", s, this._uiHash(this)),
					this.currentContainer = this.containers[g],
					this.options.placeholder.update(this.currentContainer, this.placeholder),
					this.containers[g]._trigger("over", s, this._uiHash(this)),
					this.containers[g].containerCache.over = 1
				}
		},
		_createHelper : function (e) {
			var i = this.options,
			s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
			s[0] === this.currentItem[0] && (this._storedCSS = {
					width : this.currentItem[0].style.width,
					height : this.currentItem[0].style.height,
					position : this.currentItem.css("position"),
					top : this.currentItem.css("top"),
					left : this.currentItem.css("left")
				}),
			(!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
			(!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
			s
		},
		_adjustOffsetFromHelper : function (e) {
			"string" == typeof e && (e = e.split(" ")),
			t.isArray(e) && (e = {
					left : +e[0],
					top : +e[1] || 0
				}),
			"left" in e && (this.offset.click.left = e.left + this.margins.left),
			"right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
			"top" in e && (this.offset.click.top = e.top + this.margins.top),
			"bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset : function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()),
			(this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
					top : 0,
					left : 0
				}), {
				top : e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left : e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset : function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top : t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left : t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top : 0,
				left : 0
			}
		},
		_cacheMargins : function () {
			this.margins = {
				left : parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top : parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions : function () {
			this.helperProportions = {
				width : this.helper.outerWidth(),
				height : this.helper.outerHeight()
			}
		},
		_setContainment : function () {
			var e,
			i,
			s,
			n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode),
			("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]),
			/^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo : function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
			n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			o = /(html|body)/i.test(n[0].tagName);
			return {
				top : i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
				left : i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition : function (e) {
			var i,
			s,
			n = this.options,
			o = e.pageX,
			a = e.pageY,
			r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
			h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()),
			this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top : a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left : o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange : function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling),
			this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear : function (t, e) {
			function i(t, e, i) {
				return function (s) {
					i._trigger(t, s, e._uiHash(e))
				}
			}
			this.reverting = !1;
			var s,
			n = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (s in this._storedCSS)
					("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else
				this.currentItem.show();
			for (this.fromOutside && !e && n.push(function (t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (n.push(function (t) {
							this._trigger("remove", t, this._uiHash())
						}), n.push(function (t) {
							return function (e) {
								t._trigger("receive", e, this._uiHash(this))
							}
						}
							.call(this, this.currentContainer)), n.push(function (t) {
							return function (e) {
								t._trigger("update", e, this._uiHash(this))
							}
						}
							.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--)
				e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++)
						n[s].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1,
				!1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (s = 0; n.length > s; s++)
					n[s].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1,
			!0
		},
		_trigger : function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash : function (e) {
			var i = e || this;
			return {
				helper : i.helper,
				placeholder : i.placeholder || t([]),
				position : i.position,
				originalPosition : i.originalPosition,
				offset : i.positionAbs,
				item : i.currentItem,
				sender : e ? e.element : null
			}
		}
	})
})(jQuery);
(function (t, e) {
	var i = "ui-effects-";
	t.effects = {
		effect : {}

	},
	function (t, e) {
		function i(t, e, i) {
			var s = u[e.type] || {};
			return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
		}
		function s(i) {
			var s = h(),
			n = s._rgba = [];
			return i = i.toLowerCase(),
			f(l, function (t, a) {
				var o,
				r = a.re.exec(i),
				l = r && a.parse(r),
				h = a.space || "rgba";
				return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
			}),
			n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
		}
		function n(t, e, i) {
			return i = (i + 1) % 1,
			1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
		}
		var a,
		o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
		r = /^([\-+])=\s*(\d+\.?\d*)/,
		l = [{
				re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (t) {
					return [t[1], t[2], t[3], t[4]]
				}
			}, {
				re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse : function (t) {
					return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
				}
			}, {
				re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse : function (t) {
					return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
				}
			}, {
				re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse : function (t) {
					return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
				}
			}, {
				re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space : "hsla",
				parse : function (t) {
					return [t[1], t[2] / 100, t[3] / 100, t[4]]
				}
			}
		],
		h = t.Color = function (e, i, s, n) {
			return new t.Color.fn.parse(e, i, s, n)
		},
		c = {
			rgba : {
				props : {
					red : {
						idx : 0,
						type : "byte"
					},
					green : {
						idx : 1,
						type : "byte"
					},
					blue : {
						idx : 2,
						type : "byte"
					}
				}
			},
			hsla : {
				props : {
					hue : {
						idx : 0,
						type : "degrees"
					},
					saturation : {
						idx : 1,
						type : "percent"
					},
					lightness : {
						idx : 2,
						type : "percent"
					}
				}
			}
		},
		u = {
			"byte" : {
				floor : !0,
				max : 255
			},
			percent : {
				max : 1
			},
			degrees : {
				mod : 360,
				floor : !0
			}
		},
		d = h.support = {},
		p = t("<p>")[0],
		f = t.each;
		p.style.cssText = "background-color:rgba(1,1,1,.5)",
		d.rgba = p.style.backgroundColor.indexOf("rgba") > -1,
		f(c, function (t, e) {
			e.cache = "_" + t,
			e.props.alpha = {
				idx : 3,
				type : "percent",
				def : 1
			}
		}),
		h.fn = t.extend(h.prototype, {
				parse : function (n, o, r, l) {
					if (n === e)
						return this._rgba = [null, null, null, null], this;
					(n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
					var u = this,
					d = t.type(n),
					p = this._rgba = [];
					return o !== e && (n = [n, o, r, l], d = "array"),
					"string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
							p[e.idx] = i(n[e.idx], e)
						}), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
							n[e.cache] && (u[e.cache] = n[e.cache].slice())
						}) : f(c, function (e, s) {
							var a = s.cache;
							f(s.props, function (t, e) {
								if (!u[a] && s.to) {
									if ("alpha" === t || null == n[t])
										return;
									u[a] = s.to(u._rgba)
								}
								u[a][e.idx] = i(n[t], e, !0)
							}),
							u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
						}), this) : e
				},
				is : function (t) {
					var i = h(t),
					s = !0,
					n = this;
					return f(c, function (t, a) {
						var o,
						r = i[a.cache];
						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
								return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
							})),
						s
					}),
					s
				},
				_space : function () {
					var t = [],
					e = this;
					return f(c, function (i, s) {
						e[s.cache] && t.push(i)
					}),
					t.pop()
				},
				transition : function (t, e) {
					var s = h(t),
					n = s._space(),
					a = c[n],
					o = 0 === this.alpha() ? h("transparent") : this,
					r = o[a.cache] || a.to(o._rgba),
					l = r.slice();
					return s = s[a.cache],
					f(a.props, function (t, n) {
						var a = n.idx,
						o = r[a],
						h = s[a],
						c = u[n.type] || {};
						null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
					}),
					this[n](l)
				},
				blend : function (e) {
					if (1 === this._rgba[3])
						return this;
					var i = this._rgba.slice(),
					s = i.pop(),
					n = h(e)._rgba;
					return h(t.map(i, function (t, e) {
							return (1 - s) * n[e] + s * t
						}))
				},
				toRgbaString : function () {
					var e = "rgba(",
					i = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("),
					e + i.join() + ")"
				},
				toHslaString : function () {
					var e = "hsla(",
					i = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0),
							e && 3 > e && (t = Math.round(100 * t) + "%"),
							t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("),
					e + i.join() + ")"
				},
				toHexString : function (e) {
					var i = this._rgba.slice(),
					s = i.pop();
					return e && i.push(~~(255 * s)),
					"#" + t.map(i, function (t) {
						return t = (t || 0).toString(16),
						1 === t.length ? "0" + t : t
					}).join("")
				},
				toString : function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}),
		h.fn.parse.prototype = h.fn,
		c.hsla.to = function (t) {
			if (null == t[0] || null == t[1] || null == t[2])
				return [null, null, null, t[3]];
			var e,
			i,
			s = t[0] / 255,
			n = t[1] / 255,
			a = t[2] / 255,
			o = t[3],
			r = Math.max(s, n, a),
			l = Math.min(s, n, a),
			h = r - l,
			c = r + l,
			u = .5 * c;
			return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240,
			i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c),
			[Math.round(e) % 360, i, u, null == o ? 1 : o]
		},
		c.hsla.from = function (t) {
			if (null == t[0] || null == t[1] || null == t[2])
				return [null, null, null, t[3]];
			var e = t[0] / 360,
			i = t[1],
			s = t[2],
			a = t[3],
			o = .5 >= s ? s * (1 + i) : s + i - s * i,
			r = 2 * s - o;
			return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
		},
		f(c, function (s, n) {
			var a = n.props,
			o = n.cache,
			l = n.to,
			c = n.from;
			h.fn[s] = function (s) {
				if (l && !this[o] && (this[o] = l(this._rgba)), s === e)
					return this[o].slice();
				var n,
				r = t.type(s),
				u = "array" === r || "object" === r ? s : arguments,
				d = this[o].slice();
				return f(a, function (t, e) {
					var s = u["object" === r ? t : e.idx];
					null == s && (s = d[e.idx]),
					d[e.idx] = i(s, e)
				}),
				c ? (n = h(c(d)), n[o] = d, n) : h(d)
			},
			f(a, function (e, i) {
				h.fn[e] || (h.fn[e] = function (n) {
					var a,
					o = t.type(n),
					l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
					h = this[l](),
					c = h[i.idx];
					return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
				})
			})
		}),
		h.hook = function (e) {
			var i = e.split(" ");
			f(i, function (e, i) {
				t.cssHooks[i] = {
					set : function (e, n) {
						var a,
						o,
						r = "";
						if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
							if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
								for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style; )
									try {
										r = t.css(o, "backgroundColor"),
										o = o.parentNode
									} catch (l) {}

								n = n.blend(r && "transparent" !== r ? r : "_default")
							}
							n = n.toRgbaString()
						}
						try {
							e.style[i] = n
						} catch (l) {}

					}
				},
				t.fx.step[i] = function (e) {
					e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0),
					t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
				}
			})
		},
		h.hook(o),
		t.cssHooks.borderColor = {
			expand : function (t) {
				var e = {};
				return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
					e["border" + s + "Color"] = t
				}),
				e
			}
		},
		a = t.Color.names = {
			aqua : "#00ffff",
			black : "#000000",
			blue : "#0000ff",
			fuchsia : "#ff00ff",
			gray : "#808080",
			green : "#008000",
			lime : "#00ff00",
			maroon : "#800000",
			navy : "#000080",
			olive : "#808000",
			purple : "#800080",
			red : "#ff0000",
			silver : "#c0c0c0",
			teal : "#008080",
			white : "#ffffff",
			yellow : "#ffff00",
			transparent : [null, null, null, 0],
			_default : "#ffffff"
		}
	}
	(jQuery),
	function () {
		function i(e) {
			var i,
			s,
			n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
			a = {};
			if (n && n.length && n[0] && n[n[0]])
				for (s = n.length; s--; )
					i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
			else
				for (i in n)
					"string" == typeof n[i] && (a[i] = n[i]);
			return a
		}
		function s(e, i) {
			var s,
			n,
			o = {};
			for (s in i)
				n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
			return o
		}
		var n = ["add", "remove", "toggle"],
		a = {
			border : 1,
			borderBottom : 1,
			borderColor : 1,
			borderLeft : 1,
			borderRight : 1,
			borderTop : 1,
			borderWidth : 1,
			margin : 1,
			padding : 1
		};
		t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
			t.fx.step[i] = function (t) {
				("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
			}
		}),
		t.fn.addBack || (t.fn.addBack = function (t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}),
		t.effects.animateClass = function (e, a, o, r) {
			var l = t.speed(a, o, r);
			return this.queue(function () {
				var a,
				o = t(this),
				r = o.attr("class") || "",
				h = l.children ? o.find("*").addBack() : o;
				h = h.map(function () {
						var e = t(this);
						return {
							el : e,
							start : i(this)
						}
					}),
				a = function () {
					t.each(n, function (t, i) {
						e[i] && o[i + "Class"](e[i])
					})
				},
				a(),
				h = h.map(function () {
						return this.end = i(this.el[0]),
						this.diff = s(this.start, this.end),
						this
					}),
				o.attr("class", r),
				h = h.map(function () {
						var e = this,
						i = t.Deferred(),
						s = t.extend({}, l, {
								queue : !1,
								complete : function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s),
						i.promise()
					}),
				t.when.apply(t, h.get()).done(function () {
					a(),
					t.each(arguments, function () {
						var e = this.el;
						t.each(this.diff, function (t) {
							e.css(t, "")
						})
					}),
					l.complete.call(o[0])
				})
			})
		},
		t.fn.extend({
			addClass : function (e) {
				return function (i, s, n, a) {
					return s ? t.effects.animateClass.call(this, {
						add : i
					}, s, n, a) : e.apply(this, arguments)
				}
			}
			(t.fn.addClass),
			removeClass : function (e) {
				return function (i, s, n, a) {
					return arguments.length > 1 ? t.effects.animateClass.call(this, {
						remove : i
					}, s, n, a) : e.apply(this, arguments)
				}
			}
			(t.fn.removeClass),
			toggleClass : function (i) {
				return function (s, n, a, o, r) {
					return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
						add : s
					}
						 : {
						remove : s
					}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
						toggle : s
					}, n, a, o)
				}
			}
			(t.fn.toggleClass),
			switchClass : function (e, i, s, n, a) {
				return t.effects.animateClass.call(this, {
					add : i,
					remove : e
				}, s, n, a)
			}
		})
	}
	(),
	function () {
		function s(e, i, s, n) {
			return t.isPlainObject(e) && (i = e, e = e.effect),
			e = {
				effect : e
			},
			null == i && (i = {}),
			t.isFunction(i) && (n = i, s = null, i = {}),
			("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}),
			t.isFunction(s) && (n = s, s = null),
			i && t.extend(e, i),
			s = s || i.duration,
			e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default,
			e.complete = n || i.complete,
			e
		}
		function n(e) {
			return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
		}
		t.extend(t.effects, {
			version : "1.10.4",
			save : function (t, e) {
				for (var s = 0; e.length > s; s++)
					null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
			},
			restore : function (t, s) {
				var n,
				a;
				for (a = 0; s.length > a; a++)
					null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
			},
			setMode : function (t, e) {
				return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"),
				e
			},
			getBaseline : function (t, e) {
				var i,
				s;
				switch (t[0]) {
				case "top":
					i = 0;
					break;
				case "middle":
					i = .5;
					break;
				case "bottom":
					i = 1;
					break;
				default:
					i = t[0] / e.height
				}
				switch (t[1]) {
				case "left":
					s = 0;
					break;
				case "center":
					s = .5;
					break;
				case "right":
					s = 1;
					break;
				default:
					s = t[1] / e.width
				}
				return {
					x : s,
					y : i
				}
			},
			createWrapper : function (e) {
				if (e.parent().is(".ui-effects-wrapper"))
					return e.parent();
				var i = {
					width : e.outerWidth(!0),
					height : e.outerHeight(!0),
					"float" : e.css("float")
				},
				s = t("<div></div>").addClass("ui-effects-wrapper").css({
						fontSize : "100%",
						background : "transparent",
						border : "none",
						margin : 0,
						padding : 0
					}),
				n = {
					width : e.width(),
					height : e.height()
				},
				a = document.activeElement;
				try {
					a.id
				} catch (o) {
					a = document.body
				}
				return e.wrap(s),
				(e[0] === a || t.contains(e[0], a)) && t(a).focus(),
				s = e.parent(),
				"static" === e.css("position") ? (s.css({
						position : "relative"
					}), e.css({
						position : "relative"
					})) : (t.extend(i, {
						position : e.css("position"),
						zIndex : e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s),
						isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position : "relative",
						top : 0,
						left : 0,
						right : "auto",
						bottom : "auto"
					})),
				e.css(n),
				s.css(i).show()
			},
			removeWrapper : function (e) {
				var i = document.activeElement;
				return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
				e
			},
			setTransition : function (e, i, s, n) {
				return n = n || {},
				t.each(i, function (t, i) {
					var a = e.cssUnit(i);
					a[0] > 0 && (n[i] = a[0] * s + a[1])
				}),
				n
			}
		}),
		t.fn.extend({
			effect : function () {
				function e(e) {
					function s() {
						t.isFunction(a) && a.call(n[0]),
						t.isFunction(e) && e()
					}
					var n = t(this),
					a = i.complete,
					r = i.mode;
					(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
				}
				var i = s.apply(this, arguments),
				n = i.mode,
				a = i.queue,
				o = t.effects.effect[i.effect];
				return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
					i.complete && i.complete.call(this)
				}) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
			},
			show : function (t) {
				return function (e) {
					if (n(e))
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "show",
					this.effect.call(this, i)
				}
			}
			(t.fn.show),
			hide : function (t) {
				return function (e) {
					if (n(e))
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "hide",
					this.effect.call(this, i)
				}
			}
			(t.fn.hide),
			toggle : function (t) {
				return function (e) {
					if (n(e) || "boolean" == typeof e)
						return t.apply(this, arguments);
					var i = s.apply(this, arguments);
					return i.mode = "toggle",
					this.effect.call(this, i)
				}
			}
			(t.fn.toggle),
			cssUnit : function (e) {
				var i = this.css(e),
				s = [];
				return t.each(["em", "px", "%", "pt"], function (t, e) {
					i.indexOf(e) > 0 && (s = [parseFloat(i), e])
				}),
				s
			}
		})
	}
	(),
	function () {
		var e = {};
		t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
			e[i] = function (e) {
				return Math.pow(e, t + 2)
			}
		}),
		t.extend(e, {
			Sine : function (t) {
				return 1 - Math.cos(t * Math.PI / 2)
			},
			Circ : function (t) {
				return 1 - Math.sqrt(1 - t * t)
			},
			Elastic : function (t) {
				return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
			},
			Back : function (t) {
				return t * t * (3 * t - 2)
			},
			Bounce : function (t) {
				for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t; );
				return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
			}
		}),
		t.each(e, function (e, i) {
			t.easing["easeIn" + e] = i,
			t.easing["easeOut" + e] = function (t) {
				return 1 - i(1 - t)
			},
			t.easing["easeInOut" + e] = function (t) {
				return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
			}
		})
	}
	()
})(jQuery);
(function (t) {
	var e = /up|down|vertical/,
	i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (s, n) {
		var a,
		o,
		r,
		l = t(this),
		h = ["position", "top", "bottom", "left", "right", "height", "width"],
		c = t.effects.setMode(l, s.mode || "hide"),
		u = s.direction || "up",
		d = e.test(u),
		p = d ? "height" : "width",
		f = d ? "top" : "left",
		g = i.test(u),
		m = {},
		v = "show" === c;
		l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h),
		l.show(),
		a = t.effects.createWrapper(l).css({
				overflow : "hidden"
			}),
		o = a[p](),
		r = parseFloat(a.css(f)) || 0,
		m[p] = v ? o : 0,
		g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
				position : "absolute"
			}), m[f] = v ? r : o + r),
		v && (a.css(p, 0), g || a.css(f, r + o)),
		a.animate(m, {
			duration : s.duration,
			easing : s.easing,
			queue : !1,
			complete : function () {
				"hide" === c && l.hide(),
				t.effects.restore(l, h),
				t.effects.removeWrapper(l),
				n()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.bounce = function (e, i) {
		var s,
		n,
		a,
		o = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = t.effects.setMode(o, e.mode || "effect"),
		h = "hide" === l,
		c = "show" === l,
		u = e.direction || "up",
		d = e.distance,
		p = e.times || 5,
		f = 2 * p + (c || h ? 1 : 0),
		g = e.duration / f,
		m = e.easing,
		v = "up" === u || "down" === u ? "top" : "left",
		_ = "up" === u || "left" === u,
		b = o.queue(),
		y = b.length;
		for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
					opacity : 1
				}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++)
			n = {},
		n[v] = (_ ? "-=" : "+=") + d,
		o.animate(n, g, m).animate(a, g, m),
		d = h ? 2 * d : d / 2;
		h && (n = {
				opacity : 0
			}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)),
		o.queue(function () {
			h && o.hide(),
			t.effects.restore(o, r),
			t.effects.removeWrapper(o),
			i()
		}),
		y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
		o.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.clip = function (e, i) {
		var s,
		n,
		a,
		o = t(this),
		r = ["position", "top", "bottom", "left", "right", "height", "width"],
		l = t.effects.setMode(o, e.mode || "hide"),
		h = "show" === l,
		c = e.direction || "vertical",
		u = "vertical" === c,
		d = u ? "height" : "width",
		p = u ? "top" : "left",
		f = {};
		t.effects.save(o, r),
		o.show(),
		s = t.effects.createWrapper(o).css({
				overflow : "hidden"
			}),
		n = "IMG" === o[0].tagName ? s : o,
		a = n[d](),
		h && (n.css(d, 0), n.css(p, a / 2)),
		f[d] = h ? a : 0,
		f[p] = h ? 0 : a / 2,
		n.animate(f, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				h || o.hide(),
				t.effects.restore(o, r),
				t.effects.removeWrapper(o),
				i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.drop = function (e, i) {
		var s,
		n = t(this),
		a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
		o = t.effects.setMode(n, e.mode || "hide"),
		r = "show" === o,
		l = e.direction || "left",
		h = "up" === l || "down" === l ? "top" : "left",
		c = "up" === l || "left" === l ? "pos" : "neg",
		u = {
			opacity : r ? 1 : 0
		};
		t.effects.save(n, a),
		n.show(),
		t.effects.createWrapper(n),
		s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2,
		r && n.css("opacity", 0).css(h, "pos" === c ? -s : s),
		u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s,
		n.animate(u, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === o && n.hide(),
				t.effects.restore(n, a),
				t.effects.removeWrapper(n),
				i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.explode = function (e, i) {
		function s() {
			b.push(this),
			b.length === u * d && n()
		}
		function n() {
			p.css({
				visibility : "visible"
			}),
			t(b).remove(),
			g || p.hide(),
			i()
		}
		var a,
		o,
		r,
		l,
		h,
		c,
		u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
		d = u,
		p = t(this),
		f = t.effects.setMode(p, e.mode || "hide"),
		g = "show" === f,
		m = p.show().css("visibility", "hidden").offset(),
		v = Math.ceil(p.outerWidth() / d),
		_ = Math.ceil(p.outerHeight() / u),
		b = [];
		for (a = 0; u > a; a++)
			for (l = m.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++)
				r = m.left + o * v, h = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
					position : "absolute",
					visibility : "visible",
					left : -o * v,
					top : -a * _
				}).parent().addClass("ui-effects-explode").css({
					position : "absolute",
					overflow : "hidden",
					width : v,
					height : _,
					left : r + (g ? h * v : 0),
					top : l + (g ? c * _ : 0),
					opacity : g ? 0 : 1
				}).animate({
					left : r + (g ? 0 : h * v),
					top : l + (g ? 0 : c * _),
					opacity : g ? 1 : 0
				}, e.duration || 500, e.easing, s)
	}
})(jQuery);
(function (t) {
	t.effects.effect.fade = function (e, i) {
		var s = t(this),
		n = t.effects.setMode(s, e.mode || "toggle");
		s.animate({
			opacity : n
		}, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : i
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.fold = function (e, i) {
		var s,
		n,
		a = t(this),
		o = ["position", "top", "bottom", "left", "right", "height", "width"],
		r = t.effects.setMode(a, e.mode || "hide"),
		l = "show" === r,
		h = "hide" === r,
		c = e.size || 15,
		u = /([0-9]+)%/.exec(c),
		d = !!e.horizFirst,
		p = l !== d,
		f = p ? ["width", "height"] : ["height", "width"],
		g = e.duration / 2,
		m = {},
		v = {};
		t.effects.save(a, o),
		a.show(),
		s = t.effects.createWrapper(a).css({
				overflow : "hidden"
			}),
		n = p ? [s.width(), s.height()] : [s.height(), s.width()],
		u && (c = parseInt(u[1], 10) / 100 * n[h ? 0 : 1]),
		l && s.css(d ? {
			height : 0,
			width : c
		}
			 : {
			height : c,
			width : 0
		}),
		m[f[0]] = l ? n[0] : c,
		v[f[1]] = l ? n[1] : 0,
		s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
			h && a.hide(),
			t.effects.restore(a, o),
			t.effects.removeWrapper(a),
			i()
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.highlight = function (e, i) {
		var s = t(this),
		n = ["backgroundImage", "backgroundColor", "opacity"],
		a = t.effects.setMode(s, e.mode || "show"),
		o = {
			backgroundColor : s.css("backgroundColor")
		};
		"hide" === a && (o.opacity = 0),
		t.effects.save(s, n),
		s.show().css({
			backgroundImage : "none",
			backgroundColor : e.color || "#ffff99"
		}).animate(o, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === a && s.hide(),
				t.effects.restore(s, n),
				i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.pulsate = function (e, i) {
		var s,
		n = t(this),
		a = t.effects.setMode(n, e.mode || "show"),
		o = "show" === a,
		r = "hide" === a,
		l = o || "hide" === a,
		h = 2 * (e.times || 5) + (l ? 1 : 0),
		c = e.duration / h,
		u = 0,
		d = n.queue(),
		p = d.length;
		for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++)
			n.animate({
				opacity : u
			}, c, e.easing), u = 1 - u;
		n.animate({
			opacity : u
		}, c, e.easing),
		n.queue(function () {
			r && n.hide(),
			i()
		}),
		p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))),
		n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.puff = function (e, i) {
		var s = t(this),
		n = t.effects.setMode(s, e.mode || "hide"),
		a = "hide" === n,
		o = parseInt(e.percent, 10) || 150,
		r = o / 100,
		l = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		};
		t.extend(e, {
			effect : "scale",
			queue : !1,
			fade : !0,
			mode : n,
			complete : i,
			percent : a ? o : 100,
			from : a ? l : {
				height : l.height * r,
				width : l.width * r,
				outerHeight : l.outerHeight * r,
				outerWidth : l.outerWidth * r
			}
		}),
		s.effect(e)
	},
	t.effects.effect.scale = function (e, i) {
		var s = t(this),
		n = t.extend(!0, {}, e),
		a = t.effects.setMode(s, e.mode || "effect"),
		o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
		r = e.direction || "both",
		l = e.origin,
		h = {
			height : s.height(),
			width : s.width(),
			outerHeight : s.outerHeight(),
			outerWidth : s.outerWidth()
		},
		c = {
			y : "horizontal" !== r ? o / 100 : 1,
			x : "vertical" !== r ? o / 100 : 1
		};
		n.effect = "size",
		n.queue = !1,
		n.complete = i,
		"effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0),
		n.from = e.from || ("show" === a ? {
				height : 0,
				width : 0,
				outerHeight : 0,
				outerWidth : 0
			}
				 : h),
		n.to = {
			height : h.height * c.y,
			width : h.width * c.x,
			outerHeight : h.outerHeight * c.y,
			outerWidth : h.outerWidth * c.x
		},
		n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)),
		s.effect(n)
	},
	t.effects.effect.size = function (e, i) {
		var s,
		n,
		a,
		o = t(this),
		r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
		l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
		h = ["width", "height", "overflow"],
		c = ["fontSize"],
		u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
		d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
		p = t.effects.setMode(o, e.mode || "effect"),
		f = e.restore || "effect" !== p,
		g = e.scale || "both",
		m = e.origin || ["middle", "center"],
		v = o.css("position"),
		_ = f ? r : l,
		b = {
			height : 0,
			width : 0,
			outerHeight : 0,
			outerWidth : 0
		};
		"show" === p && o.show(),
		s = {
			height : o.height(),
			width : o.width(),
			outerHeight : o.outerHeight(),
			outerWidth : o.outerWidth()
		},
		"toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)),
		a = {
			from : {
				y : o.from.height / s.height,
				x : o.from.width / s.width
			},
			to : {
				y : o.to.height / s.height,
				x : o.to.width / s.width
			}
		},
		("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))),
		("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)),
		t.effects.save(o, _),
		o.show(),
		t.effects.createWrapper(o),
		o.css("overflow", "hidden").css(o.from),
		m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x),
		o.css(o.from),
		("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function () {
				var i = t(this),
				s = {
					height : i.height(),
					width : i.width(),
					outerHeight : i.outerHeight(),
					outerWidth : i.outerWidth()
				};
				f && t.effects.save(i, h),
				i.from = {
					height : s.height * a.from.y,
					width : s.width * a.from.x,
					outerHeight : s.outerHeight * a.from.y,
					outerWidth : s.outerWidth * a.from.x
				},
				i.to = {
					height : s.height * a.to.y,
					width : s.width * a.to.x,
					outerHeight : s.height * a.to.y,
					outerWidth : s.width * a.to.x
				},
				a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)),
				a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)),
				i.css(i.from),
				i.animate(i.to, e.duration, e.easing, function () {
					f && t.effects.restore(i, h)
				})
			})),
		o.animate(o.to, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				0 === o.to.opacity && o.css("opacity", o.from.opacity),
				"hide" === p && o.hide(),
				t.effects.restore(o, _),
				f || ("static" === v ? o.css({
						position : "relative",
						top : o.to.top,
						left : o.to.left
					}) : t.each(["top", "left"], function (t, e) {
						o.css(e, function (e, i) {
							var s = parseInt(i, 10),
							n = t ? o.to.left : o.to.top;
							return "auto" === i ? n + "px" : s + n + "px"
						})
					})),
				t.effects.removeWrapper(o),
				i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.shake = function (e, i) {
		var s,
		n = t(this),
		a = ["position", "top", "bottom", "left", "right", "height", "width"],
		o = t.effects.setMode(n, e.mode || "effect"),
		r = e.direction || "left",
		l = e.distance || 20,
		h = e.times || 3,
		c = 2 * h + 1,
		u = Math.round(e.duration / c),
		d = "up" === r || "down" === r ? "top" : "left",
		p = "up" === r || "left" === r,
		f = {},
		g = {},
		m = {},
		v = n.queue(),
		_ = v.length;
		for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + l, g[d] = (p ? "+=" : "-=") + 2 * l, m[d] = (p ? "-=" : "+=") + 2 * l, n.animate(f, u, e.easing), s = 1; h > s; s++)
			n.animate(g, u, e.easing).animate(m, u, e.easing);
		n.animate(g, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
			"hide" === o && n.hide(),
			t.effects.restore(n, a),
			t.effects.removeWrapper(n),
			i()
		}),
		_ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))),
		n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.slide = function (e, i) {
		var s,
		n = t(this),
		a = ["position", "top", "bottom", "left", "right", "width", "height"],
		o = t.effects.setMode(n, e.mode || "show"),
		r = "show" === o,
		l = e.direction || "left",
		h = "up" === l || "down" === l ? "top" : "left",
		c = "up" === l || "left" === l,
		u = {};
		t.effects.save(n, a),
		n.show(),
		s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0),
		t.effects.createWrapper(n).css({
			overflow : "hidden"
		}),
		r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s),
		u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s,
		n.animate(u, {
			queue : !1,
			duration : e.duration,
			easing : e.easing,
			complete : function () {
				"hide" === o && n.hide(),
				t.effects.restore(n, a),
				t.effects.removeWrapper(n),
				i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.transfer = function (e, i) {
		var s = t(this),
		n = t(e.to),
		a = "fixed" === n.css("position"),
		o = t("body"),
		r = a ? o.scrollTop() : 0,
		l = a ? o.scrollLeft() : 0,
		h = n.offset(),
		c = {
			top : h.top - r,
			left : h.left - l,
			height : n.innerHeight(),
			width : n.innerWidth()
		},
		u = s.offset(),
		d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top : u.top - r,
				left : u.left - l,
				height : s.innerHeight(),
				width : s.innerWidth(),
				position : a ? "fixed" : "absolute"
			}).animate(c, e.duration, e.easing, function () {
				d.remove(),
				i()
			})
	}
})(jQuery);






/*! jQuery UI - v1.11.3 - 2015-02-18
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var s=0,n=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,a=n.call(arguments,1),o=0,r=a.length;r>o;o++)for(i in a[o])s=a[o][i],a[o].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(a){var o="string"==typeof a,r=n.call(arguments,1),h=this;return o?this.each(function(){var i,n=e.data(this,s);return"instance"===a?(h=n,!1):n?e.isFunction(n[a])&&"_"!==a.charAt(0)?(i=n[a].apply(n,r),i!==n&&void 0!==i?(h=i&&i.jquery?h.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+a+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+a+"'")}):(r.length&&(a=e.widget.extend.apply(null,[a].concat(r))),this.each(function(){var t=e.data(this,s);t?(t.option(a||{}),t._init&&t._init()):e.data(this,s,new i(a,this))})),h}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var a=!1;e(document).mouseup(function(){a=!1}),e.widget("ui.mouse",{version:"1.11.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!a){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),a=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),a=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,N=e.extend({},y),M=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?N.left-=d:"center"===n.my[0]&&(N.left-=d/2),"bottom"===n.my[1]?N.top-=c:"center"===n.my[1]&&(N.top-=c/2),N.left+=M[0],N.top+=M[1],a||(N.left=h(N.left),N.top=h(N.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](N,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+M[0],p[1]+M[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-N.left,i=t+m-d,s=v.top-N.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:N.left,top:N.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(N,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n
})),n?(a.isOver||(a.isOver=1,a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.droppable",{version:"1.11.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.selectable",e.ui.mouse,{version:"1.11.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;
i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}});var o="ui-effects-",r=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};
return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(r),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(r.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.3",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(o+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(o+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})}});