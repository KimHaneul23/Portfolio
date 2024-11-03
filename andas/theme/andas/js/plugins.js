/*! jQuery v3.5.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function (e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function (e) {
    return null != e && e === e.window;
  },
      E = C.document,
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
  }

  var f = "3.5.0",
      S = function (e, t) {
    return new S.fn.init(e, t);
  };

  function p(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  S.fn = S.prototype = {
    jquery: f,
    constructor: S,
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = S.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function (e) {
      return S.each(this, e);
    },
    map: function (n) {
      return this.pushStack(S.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    even: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    },
    odd: function () {
      return this.pushStack(S.grep(this, function (e, t) {
        return t % 2;
      }));
    },
    eq: function (e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, S.extend = S.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));

    return a;
  }, S.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function (e) {
      throw new Error(e);
    },
    noop: function () {},
    isPlainObject: function (e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function (e) {
      var t;

      for (t in e) return !1;

      return !0;
    },
    globalEval: function (e, t, n) {
      b(e, {
        nonce: t && t.nonce
      }, n);
    },
    each: function (e, t) {
      var n,
          r = 0;

      if (p(e)) {
        for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
      } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;

      return e;
    },
    makeArray: function (e, t) {
      var n = t || [];
      return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function (e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function (e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];

      return e.length = i, e;
    },
    grep: function (e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);

      return r;
    },
    map: function (e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
      return g(a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var d = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        S = "sizzle" + 1 * new Date(),
        p = n.document,
        k = 0,
        r = 0,
        m = ue(),
        x = ue(),
        A = ue(),
        N = ue(),
        D = function (e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp(F),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + F),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
        ne = function (e, t) {
      var n = "0x" + e.slice(1) - 65536;
      return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320));
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function (e, t) {
      return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function () {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]);

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && (T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;

            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);

            c = l.join(",");
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace($, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[S] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) b.attrHandle[n[r]] = t;
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) if (n === t) return -1;
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : p;
      return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) 1 === n.nodeType && r.push(n);

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        var t;
        a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) if (t === e) return !0;
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) a.unshift(n);

        n = t;

        while (n = n.parentNode) s.unshift(n);

        while (a[r] === s[r]) r++;

        return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        N(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) t === e[i] && (r = n.push(i));

        while (r--) e.splice(n[r], 1);
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) n += o(t);

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = m[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function (n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function (h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                  i[h] = [k, s, d];
                  break;
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function (e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i]);
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace($, "$1"));
          return s[S] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function (e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function (e) {
          return e === a;
        },
        focus: function (e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;

          return !0;
        },
        parent: function (e) {
          return !b.pseudos.empty(e);
        },
        header: function (e) {
          return J.test(e.nodeName);
        },
        input: function (e) {
          return Q.test(e.nodeName);
        },
        button: function (e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) b.pseudos[e] = de(e);

    for (e in {
      submit: !0,
      reset: !0
    }) b.pseudos[e] = he(e);

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [k, p];

        if (n) {
          while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
        } else while (e = e[u]) if (1 === e.nodeType || f) if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
          if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
          if ((i[c] = a)[2] = s(e, t, n)) return !0;
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) if (!i[r](e, t, n)) return !1;

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) (a = p[o]) && i.push(f[o] = a);

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
          for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;

          return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
            value: " " === e[s - 2].type ? "*" : ""
          })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
        }

        c.push(t);
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace($, " ")
        }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
          value: n,
          type: o,
          matches: r
        }), a = a.slice(n.length));

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = A[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);

        (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument == C || (T(o), n = !E);

              while (s = v[a++]) if (s(o, t || C, n)) {
                r.push(o);
                break;
              }

              i && (k = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) s(c, f, t, n);

            if (e) {
              if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
              f = Te(f);
            }

            H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
          }

          return i && (k = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;

  var h = function (e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
      if (i && S(e).is(n)) break;
      r.push(e);
    }

    return r;
  },
      T = function (e, t) {
    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);

    return n;
  },
      k = S.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function D(e, n, r) {
    return m(n) ? S.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? S.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? S.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : S.filter(n, e, r);
  }

  S.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, S.fn.extend({
    find: function (e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
        for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);

      return 1 < r ? S.uniqueSort(n) : n;
    },
    filter: function (e) {
      return this.pushStack(D(this, e || [], !1));
    },
    not: function (e) {
      return this.pushStack(D(this, e || [], !0));
    },
    is: function (e) {
      return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length;
    }
  });
  var j,
      q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || j, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
  }).prototype = S.fn, j = S(E);
  var L = /^(?:parents|prev(?:Until|All))/,
      H = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);

    return e;
  }

  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && S(e);
      if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
        o.push(n);
        break;
      }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), S.each({
    parent: function (e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return h(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return h(e, "parentNode", n);
    },
    next: function (e) {
      return O(e, "nextSibling");
    },
    prev: function (e) {
      return O(e, "previousSibling");
    },
    nextAll: function (e) {
      return h(e, "nextSibling");
    },
    prevAll: function (e) {
      return h(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return h(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return h(e, "previousSibling", n);
    },
    siblings: function (e) {
      return T((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return T(e.firstChild);
    },
    contents: function (e) {
      return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
    }
  }, function (r, i) {
    S.fn[r] = function (e, t) {
      var n = S.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var P = /[^\x20\t\r\n\f]+/g;

  function R(e) {
    return e;
  }

  function M(e) {
    throw e;
  }

  function I(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  S.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : S.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function () {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function () {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          S.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function () {
        return S.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
        }), this;
      },
      has: function (e) {
        return e ? -1 < S.inArray(e, s) : 0 < s.length;
      },
      empty: function () {
        return s && (s = []), this;
      },
      disable: function () {
        return a = u = [], s = t = "", this;
      },
      disabled: function () {
        return !s;
      },
      lock: function () {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function () {
        return !!a;
      },
      fireWith: function (e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function () {
        return f.fireWith(this, arguments), this;
      },
      fired: function () {
        return !!o;
      }
    };

    return f;
  }, S.extend({
    Deferred: function (e) {
      var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function () {
          return i;
        },
        always: function () {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function (e) {
          return a.then(null, e);
        },
        pipe: function () {
          var i = arguments;
          return S.Deferred(function (r) {
            S.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function (t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function () {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return S.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
          }).promise();
        },
        promise: function (e) {
          return null != e ? S.extend(e, a) : a;
        }
      },
          s = {};
      return S.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function (e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) I(i[t], a(t), o.reject);

      return o.promise();
    }
  });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, S.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = S.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready();
  }

  S.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      S.readyException(e);
    }), this;
  }, S.extend({
    isReady: !1,
    readyWait: 1,
    ready: function (e) {
      (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S]);
    }
  }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var $ = function (e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
      return l.call(S(e), n);
    })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      _ = /^-ms-/,
      z = /-([a-z])/g;

  function U(e, t) {
    return t.toUpperCase();
  }

  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }

  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function G() {
    this.expando = S.expando + G.uid++;
  }

  G.uid = 1, G.prototype = {
    cache: function (e) {
      var t = e[this.expando];
      return t || (t = Object.create(null), V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function (e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[X(t)] = n;else for (r in t) i[X(r)] = t[r];
      return i;
    },
    get: function (e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    },
    access: function (e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function (e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;

          while (n--) delete r[t[n]];
        }

        (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function (e) {
      var t = e[this.expando];
      return void 0 !== t && !S.isEmptyObject(t);
    }
  };
  var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;

  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      Q.set(e, t, n);
    } else n = void 0;
    return n;
  }

  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }), S.fn.extend({
    data: function (n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));

          Y.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == typeof n ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
        this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function (e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    }
  }), S.extend({
    queue: function (e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function (e, t) {
      t = t || "fx";

      var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        S.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = t + "queueHooks";
      return Y.get(e, n) || Y.access(e, n, {
        empty: S.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        })
      });
    }
  }), S.fn.extend({
    queue: function (t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = S.queue(this, t, n);
        S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        S.dequeue(this, e);
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, t) {
      var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));

      return s(), i.promise(t);
    }
  });

  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = E.documentElement,
      ie = function (e) {
    return S.contains(e.ownerDocument, e);
  },
      oe = {
    composed: !0
  };

  re.getRootNode && (ie = function (e) {
    return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });

  var ae = function (e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display");
  };

  function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return S.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;

      c *= 2, S.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ue = {};

  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));

    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);

    return e;
  }

  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? S(this).show() : S(this).hide();
      });
    }
  });
  var ce,
      fe,
      pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i;
  ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }

  ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;

  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);else if (me.test(o)) {
      a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];

      while (c--) a = a.lastChild;

      S.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
    } else p.push(t.createTextNode(o));

    f.textContent = "", d = 0;

    while (o = p[d++]) if (r && -1 < S.inArray(o, r)) i && i.push(o);else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
      c = 0;

      while (o = a[c++]) he.test(o.type || "") && n.push(o);
    }

    return f;
  }

  var be = /^key/,
      we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Te = /^([^.]*)(?:\.(.+)|)/;

  function Ce() {
    return !0;
  }

  function Ee() {
    return !1;
  }

  function Se(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function ke(e, t, n, r, i, o) {
    var a, s;

    if ("object" == typeof t) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;else if (!i) return e;
    return 1 === o && (a = i, (i = function (e) {
      return S().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
      S.event.add(this, t, i, r, n);
    });
  }

  function Ae(e, i, o) {
    o ? (Y.set(e, i, !1), S.event.add(e, i, {
      namespace: !1,
      handler: function (e) {
        var t,
            n,
            r = Y.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Y.set(this, i, {
          value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }

  S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.get(t);

      if (V(t)) {
        n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(P) || [""]).length;

        while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
          type: d,
          origType: g,
          data: r,
          handler: n,
          guid: n.guid,
          selector: i,
          needsContext: i && S.expr.match.needsContext.test(i),
          namespace: h.join(".")
        }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0);
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Y.hasData(e) && Y.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;

        while (l--) if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
          f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

          while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));

          a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d]);
        } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);

        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = new Array(arguments.length),
          u = S.event.fix(e),
          l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
          c = S.event.special[u.type] || {};

      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];

      if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
        a = S.event.handlers.call(this, u, l), t = 0;

        while ((i = a[t++]) && !u.isPropagationStopped()) {
          u.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }

        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);

        o.length && s.push({
          elem: l,
          handlers: o
        });
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0;
        },
        _default: function (e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, S.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, S.Event = function (e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0;
  }, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: Ee,
    isPropagationStopped: Ee,
    isImmediatePropagationStopped: Ee,
    isSimulated: !1,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, S.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function (e) {
      var t = e.button;
      return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, S.event.addProp), S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    S.event.special[e] = {
      setup: function () {
        return Ae(this, e, Se), !1;
      },
      trigger: function () {
        return Ae(this, e), !0;
      },
      delegateType: t
    };
  }), S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    S.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function (e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), S.fn.extend({
    on: function (e, t, n, r) {
      return ke(this, e, t, n, r);
    },
    one: function (e, t, n, r) {
      return ke(this, e, t, n, r, 1);
    },
    off: function (e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == typeof e) {
        for (i in e) this.off(i, t, e[i]);

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
        S.event.remove(this, e, n, t);
      });
    }
  });
  var Ne = /<script|<style|<link/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function qe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e;
  }

  function Le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Oe(e, t) {
    var n, r, i, o, a, s;

    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a));
    }
  }

  function Pe(n, r, i, o) {
    r = g(r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
    });

    if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);

      if (s) for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
        nonce: u.nonce || u.getAttribute("nonce")
      }, l) : b(u.textContent.replace(je, ""), u, l));
    }

    return n;
  }

  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));

    return e;
  }

  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);else Oe(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
        if (t = n[Y.expando]) {
          if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
          n[Y.expando] = void 0;
        }

        n[Q.expando] && (n[Q.expando] = void 0);
      }
    }
  }), S.fn.extend({
    detach: function (e) {
      return Re(this, e, !0);
    },
    remove: function (e) {
      return Re(this, e);
    },
    text: function (e) {
      return $(this, function (e) {
        return void 0 === e ? S.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function () {
      return Pe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e);
      });
    },
    prepend: function () {
      return Pe(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = qe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return Pe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");

      return this;
    },
    clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return S.clone(this, e, t);
      });
    },
    html: function (e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = S.htmlPrefilter(e);

          try {
            for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var n = [];
      return Pe(this, arguments, function (e) {
        var t = this.parentNode;
        S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    S.fn[e] = function (e) {
      for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());

      return this.pushStack(n);
    };
  });

  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      Ie = function (e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      We = function (e, t, n) {
    var r,
        i,
        o = {};

    for (i in t) o[i] = e.style[i], e.style[i] = t[i];

    for (i in r = n.call(e), t) e.style[i] = o[i];

    return r;
  },
      Fe = new RegExp(ne.join("|"), "i");

  function Be(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (l) {
        u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s,
        u = E.createElement("div"),
        l = E.createElement("div");
    l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
      boxSizingReliable: function () {
        return e(), r;
      },
      pixelBoxStyles: function () {
        return e(), o;
      },
      pixelPosition: function () {
        return e(), n;
      },
      reliableMarginLeft: function () {
        return e(), s;
      },
      scrollboxSize: function () {
        return e(), i;
      },
      reliableTrDimensions: function () {
        var e, t, n, r;
        return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a;
      }
    }));
  }();
  var _e = ["Webkit", "Moz", "ms"],
      ze = E.createElement("div").style,
      Ue = {};

  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return t || (e in ze ? e : Ue[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = _e.length;

      while (n--) if ((e = _e[n] + t) in ze) return e;
    }(e) || e);
  }

  var Ve = /^(none|table(?!-c[ea]).+)/,
      Ge = /^--/,
      Ye = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Qe = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function Ze(e, t, n) {
    var r = Ie(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
        o = i,
        a = Be(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }

  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = Ge.test(t),
            l = e.style;
        if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function (e, t, n, r) {
      var i,
          o,
          a,
          s = X(t);
      return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), S.each(["height", "width"], function (e, u) {
    S.cssHooks[u] = {
      get: function (e, t, n) {
        if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
          return Ze(e, u, n);
        });
      },
      set: function (e, t, n) {
        var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s);
      }
    };
  }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), S.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    S.cssHooks[i + o] = {
      expand: function (e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];

        return n;
      }
    }, "margin" !== i && (S.cssHooks[i + o].set = Je);
  }), S.fn.extend({
    css: function (e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);

          return o;
        }

        return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((S.Tween = et).prototype = {
    constructor: et,
    init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px");
    },
    cur: function () {
      var e = et.propHooks[this.prop];
      return e && e.get ? e.get(this) : et.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
          n = et.propHooks[this.prop];
      return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this;
    }
  }).init.prototype = et.prototype, (et.propHooks = {
    _default: {
      get: function (e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function (e) {
        S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = et.propHooks.scrollLeft = {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, S.easing = {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, S.fx = et.prototype.init, S.fx.step = {};
  var tt,
      nt,
      rt,
      it,
      ot = /^(?:toggle|show|hide)$/,
      at = /queueHooks$/;

  function st() {
    nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick());
  }

  function ut() {
    return C.setTimeout(function () {
      tt = void 0;
    }), tt = Date.now();
  }

  function lt(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;

    return t && (i.opacity = i.width = e), i;
  }

  function ct(e, t, n) {
    for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
  }

  function ft(o, e, t) {
    var n,
        a,
        r = 0,
        i = ft.prefilters.length,
        s = S.Deferred().always(function () {
      delete u.elem;
    }),
        u = function () {
      if (a) return !1;

      for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: S.extend({}, e),
      opts: S.extend(!0, {
        specialEasing: {},
        easing: S.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: tt || ut(),
      duration: t.duration,
      tweens: [],
      createTween: function (e, t) {
        var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function (e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) l.tweens[t].run(1);

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) (n in e) || (e[n] = o[n], t[n] = i);else t[r] = i;
    }(c, l.opts.specialEasing); r < i; r++) if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;

    return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  S.Animation = S.extend(ft, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return se(n.elem, e, te.exec(t), n), n;
      }]
    },
    tweener: function (e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(P);

      for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t);
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");

      for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
        });
      })), t) if (i = t[r], ot.test(i)) {
        if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
          if ("show" !== i || !v || void 0 === v[r]) continue;
          g = !0;
        }

        d[r] = v && v[r] || S.style(e, r);
      }

      if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
        display: l
      }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
        for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r]);
      })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
    }],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    }
  }), S.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? S.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
    }, r;
  }, S.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function (t, e, n, r) {
      var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
        var e = ft(this, S.extend({}, t), o);
        (i || Y.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (i, e, o) {
      var a = function (e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = S.timers,
            r = Y.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);

        for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));

        !e && o || S.dequeue(this, i);
      });
    },
    finish: function (a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = S.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));

        for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);

        delete t.finish;
      });
    }
  }), S.each(["toggle", "show", "hide"], function (e, r) {
    var i = S.fn[r];

    S.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n);
    };
  }), S.each({
    slideDown: lt("show"),
    slideUp: lt("hide"),
    slideToggle: lt("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    S.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), S.timers = [], S.fx.tick = function () {
    var e,
        t = 0,
        n = S.timers;

    for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);

    n.length || S.fx.stop(), tt = void 0;
  }, S.fx.timer = function (e) {
    S.timers.push(e), S.fx.start();
  }, S.fx.interval = 13, S.fx.start = function () {
    nt || (nt = !0, st());
  }, S.fx.stop = function () {
    nt = null;
  }, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, S.fn.delay = function (r, e) {
    return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
  var pt,
      dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }), S.extend({
    attr: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function (e, t) {
      var n,
          r = 0,
          i = t && t.match(P);
      if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
    }
  }), pt = {
    set: function (e, t, n) {
      return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = dt[t] || S.find.attr;

    dt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r;
    };
  });
  var ht = /^(?:input|select|textarea|button)$/i,
      gt = /^(?:a|area)$/i;

  function vt(e) {
    return (e.match(P) || []).join(" ");
  }

  function yt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function mt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }

  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }), S.extend({
    prop: function (e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = S.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (S.propHooks.selected = {
    get: function (e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function (e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    S.propFix[this.toLowerCase()] = this;
  }), S.fn.extend({
    addClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).addClass(t.call(this, e, yt(this)));
      });
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    removeClass: function (t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        S(this).removeClass(t.call(this, e, yt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = mt(t)).length) while (n = this[u++]) if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
        a = 0;

        while (o = e[a++]) while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");

        i !== (s = vt(r)) && n.setAttribute("class", s);
      }
      return this;
    },
    toggleClass: function (i, t) {
      var o = typeof i,
          a = "string" === o || Array.isArray(i);
      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        S(this).toggleClass(i.call(this, e, yt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = S(this), r = mt(i);

          while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
      });
    },
    hasClass: function (e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;

      return !1;
    }
  });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0;
    }
  }), S.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = S.find.attr(e, "value");
          return null != t ? t : vt(S.text(e));
        }
      },
      select: {
        get: function (e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (t = S(n).val(), a) return t;
            s.push(t);
          }

          return s;
        },
        set: function (e, t) {
          var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;

          while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), S.each(["radio", "checkbox"], function () {
    S.valHooks[this] = {
      set: function (e, t) {
        if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t);
      }
    }, y.checkOn || (S.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var bt = /^(?:focusinfocus|focusoutblur)$/,
      wt = function (e) {
    e.stopPropagation();
  };

  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, {
        type: e,
        isSimulated: !0
      });
      S.event.trigger(r, null, t);
    }
  }), S.fn.extend({
    trigger: function (e, t) {
      return this.each(function () {
        S.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, t) {
      var n = this[0];
      if (n) return S.event.trigger(e, t, n, !0);
    }
  }), y.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function (e) {
      S.event.simulate(r, e.target, S.event.fix(e));
    };

    S.event.special[r] = {
      setup: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);
        t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      },
      teardown: function () {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;
        t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      }
    };
  });
  var Tt = C.location,
      Ct = {
    guid: Date.now()
  },
      Et = /\?/;

  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t;
  };

  var St = /\[\]$/,
      kt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      Nt = /^(?:input|select|textarea|keygen)/i;

  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) S.each(e, function (e, t) {
      r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }

  S.param = function (e, t) {
    var n,
        r = [],
        i = function (e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }, S.fn.extend({
    serialize: function () {
      return S.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = S.prop(this, "elements");
        return e ? S.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = S(this).val();
        return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(kt, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(kt, "\r\n")
        };
      }).get();
    }
  });
  var jt = /%20/g,
      qt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ot = /^(?:GET|HEAD)$/,
      Pt = /^\/\//,
      Rt = {},
      Mt = {},
      It = "*/".concat("*"),
      Wt = E.createElement("a");

  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];
      if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }

  function Bt(t, i, o, a) {
    var s = {},
        u = t === Mt;

    function l(e) {
      var r;
      return s[e] = !0, S.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function $t(e, t) {
    var n,
        r,
        i = S.ajaxSettings.flatOptions || {};

    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);

    return r && S.extend(!0, e, r), e;
  }

  Wt.href = Tt.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Tt.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": It,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": S.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (e, t) {
      return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
    },
    ajaxPrefilter: Ft(Rt),
    ajaxTransport: Ft(Mt),
    ajax: function (e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function (e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function () {
          return h ? p : null;
        },
        setRequestHeader: function (e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function (e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function (e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) w[t] = [w[t], e[t]];
          return this;
        },
        abort: function (e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;

      for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));

          if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
          o = c.shift();

          while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
              !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
              break;
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
              t = a(t);
            } catch (e) {
              return {
                state: "parsererror",
                error: a ? e : "No conversion from " + u + " to " + o
              };
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function (e, t, n) {
      return S.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return S.get(e, void 0, t, "script");
    }
  }), S.each(["get", "post"], function (e, i) {
    S[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, S.isPlainObject(e) && e));
    };
  }), S.ajaxPrefilter(function (e) {
    var t;

    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
  }), S._evalUrl = function (e, t, n) {
    return S.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function () {}
      },
      dataFilter: function (e) {
        S.globalEval(e, t, n);
      }
    });
  }, S.fn.extend({
    wrapAll: function (e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) e = e.firstElementChild;

        return e;
      }).append(this)), this;
    },
    wrapInner: function (n) {
      return m(n) ? this.each(function (e) {
        S(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = S(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function (t) {
      var n = m(t);
      return this.each(function (e) {
        S(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function (e) {
      return this.parent(e).not("body").each(function () {
        S(this).replaceWith(this.childNodes);
      }), this;
    }
  }), S.expr.pseudos.hidden = function (e) {
    return !S.expr.pseudos.visible(e);
  }, S.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, S.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var _t = {
    0: 200,
    1223: 204
  },
      zt = S.ajaxSettings.xhr();
  y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
    var o, a;
    if (y.cors || zt && !i.crossDomain) return {
      send: function (e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);

        o = function (e) {
          return function () {
            o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            o && a();
          });
        }, o = o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (o) throw e;
        }
      },
      abort: function () {
        o && o();
      }
    };
  }), S.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), S.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (e) {
        return S.globalEval(e), e;
      }
    }
  }), S.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), S.ajaxTransport("script", function (n) {
    var r, i;
    if (n.crossDomain || n.scriptAttrs) return {
      send: function (e, t) {
        r = S("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", i = function (e) {
          r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function () {
        i && i();
      }
    };
  });
  var Ut,
      Xt = [],
      Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return this[e] = !0, e;
    }
  }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || S.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
    var r, i, o;
  }, S.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, S.expr.pseudos.animated = function (t) {
    return S.grep(S.timers, function (e) {
      return t === e.elem;
    }).length;
  }, S.offset = {
    setOffset: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
    }
  }, S.fn.extend({
    offset: function (t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        S.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function () {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;

          e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - S.css(r, "marginTop", !0),
          left: t.left - i.left - S.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === S.css(e, "position")) e = e.offsetParent;

        return e || re;
      });
    }
  }), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    S.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), S.each(["top", "left"], function (e, n) {
    S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
      if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t;
    });
  }), S.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    S.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      S.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return $(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    S.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), S.fn.extend({
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    S.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  S.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || S.guid++, i;
  }, S.holdReady = function (e) {
    e ? S.readyWait++ : S.ready(!0);
  }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
    var t = S.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, S.trim = function (e) {
    return null == e ? "" : (e + "").replace(Gt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return S;
  });
  var Yt = C.jQuery,
      Qt = C.$;
  return S.noConflict = function (e) {
    return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
  }, "undefined" == typeof e && (C.jQuery = C.$ = S), S;
});
/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */

;
(function () {
  function n(n, t, r) {
    switch (r.length) {
      case 0:
        return n.call(t);

      case 1:
        return n.call(t, r[0]);

      case 2:
        return n.call(t, r[0], r[1]);

      case 3:
        return n.call(t, r[0], r[1], r[2]);
    }

    return n.apply(t, r);
  }

  function t(n, t, r, e) {
    for (var u = -1, i = null == n ? 0 : n.length; ++u < i;) {
      var o = n[u];
      t(e, o, r(o), n);
    }

    return e;
  }

  function r(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e && false !== t(n[r], r, n););

    return n;
  }

  function e(n, t) {
    for (var r = null == n ? 0 : n.length; r-- && false !== t(n[r], r, n););

    return n;
  }

  function u(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (!t(n[r], r, n)) return false;

    return true;
  }

  function i(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];
      t(o, r, n) && (i[u++] = o);
    }

    return i;
  }

  function o(n, t) {
    return !(null == n || !n.length) && -1 < v(n, t, 0);
  }

  function f(n, t, r) {
    for (var e = -1, u = null == n ? 0 : n.length; ++e < u;) if (r(t, n[e])) return true;

    return false;
  }

  function c(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length, u = Array(e); ++r < e;) u[r] = t(n[r], r, n);

    return u;
  }

  function a(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e;) n[u + r] = t[r];

    return n;
  }

  function l(n, t, r, e) {
    var u = -1,
        i = null == n ? 0 : n.length;

    for (e && i && (r = n[++u]); ++u < i;) r = t(r, n[u], u, n);

    return r;
  }

  function s(n, t, r, e) {
    var u = null == n ? 0 : n.length;

    for (e && u && (r = n[--u]); u--;) r = t(r, n[u], u, n);

    return r;
  }

  function h(n, t) {
    for (var r = -1, e = null == n ? 0 : n.length; ++r < e;) if (t(n[r], r, n)) return true;

    return false;
  }

  function p(n, t, r) {
    var e;
    return r(n, function (n, r, u) {
      if (t(n, r, u)) return e = r, false;
    }), e;
  }

  function _(n, t, r, e) {
    var u = n.length;

    for (r += e ? 1 : -1; e ? r-- : ++r < u;) if (t(n[r], r, n)) return r;

    return -1;
  }

  function v(n, t, r) {
    if (t === t) n: {
      --r;

      for (var e = n.length; ++r < e;) if (n[r] === t) {
        n = r;
        break n;
      }

      n = -1;
    } else n = _(n, d, r);
    return n;
  }

  function g(n, t, r, e) {
    --r;

    for (var u = n.length; ++r < u;) if (e(n[r], t)) return r;

    return -1;
  }

  function d(n) {
    return n !== n;
  }

  function y(n, t) {
    var r = null == n ? 0 : n.length;
    return r ? m(n, t) / r : F;
  }

  function b(n) {
    return function (t) {
      return null == t ? T : t[n];
    };
  }

  function x(n) {
    return function (t) {
      return null == n ? T : n[t];
    };
  }

  function j(n, t, r, e, u) {
    return u(n, function (n, u, i) {
      r = e ? (e = false, n) : t(r, n, u, i);
    }), r;
  }

  function w(n, t) {
    var r = n.length;

    for (n.sort(t); r--;) n[r] = n[r].c;

    return n;
  }

  function m(n, t) {
    for (var r, e = -1, u = n.length; ++e < u;) {
      var i = t(n[e]);
      i !== T && (r = r === T ? i : r + i);
    }

    return r;
  }

  function A(n, t) {
    for (var r = -1, e = Array(n); ++r < n;) e[r] = t(r);

    return e;
  }

  function E(n, t) {
    return c(t, function (t) {
      return [t, n[t]];
    });
  }

  function k(n) {
    return function (t) {
      return n(t);
    };
  }

  function S(n, t) {
    return c(t, function (t) {
      return n[t];
    });
  }

  function O(n, t) {
    return n.has(t);
  }

  function I(n, t) {
    for (var r = -1, e = n.length; ++r < e && -1 < v(t, n[r], 0););

    return r;
  }

  function R(n, t) {
    for (var r = n.length; r-- && -1 < v(t, n[r], 0););

    return r;
  }

  function z(n) {
    return "\\" + Un[n];
  }

  function W(n) {
    var t = -1,
        r = Array(n.size);
    return n.forEach(function (n, e) {
      r[++t] = [e, n];
    }), r;
  }

  function B(n, t) {
    return function (r) {
      return n(t(r));
    };
  }

  function L(n, t) {
    for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
      var o = n[r];
      o !== t && "__lodash_placeholder__" !== o || (n[r] = "__lodash_placeholder__", i[u++] = r);
    }

    return i;
  }

  function U(n) {
    var t = -1,
        r = Array(n.size);
    return n.forEach(function (n) {
      r[++t] = n;
    }), r;
  }

  function C(n) {
    var t = -1,
        r = Array(n.size);
    return n.forEach(function (n) {
      r[++t] = [n, n];
    }), r;
  }

  function D(n) {
    if (Rn.test(n)) {
      for (var t = On.lastIndex = 0; On.test(n);) ++t;

      n = t;
    } else n = Qn(n);

    return n;
  }

  function M(n) {
    return Rn.test(n) ? n.match(On) || [] : n.split("");
  }

  var T,
      $ = 1 / 0,
      F = NaN,
      N = [["ary", 128], ["bind", 1], ["bindKey", 2], ["curry", 8], ["curryRight", 16], ["flip", 512], ["partial", 32], ["partialRight", 64], ["rearg", 256]],
      P = /\b__p\+='';/g,
      Z = /\b(__p\+=)''\+/g,
      q = /(__e\(.*?\)|\b__t\))\+'';/g,
      V = /&(?:amp|lt|gt|quot|#39);/g,
      K = /[&<>"']/g,
      G = RegExp(V.source),
      H = RegExp(K.source),
      J = /<%-([\s\S]+?)%>/g,
      Y = /<%([\s\S]+?)%>/g,
      Q = /<%=([\s\S]+?)%>/g,
      X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      nn = /^\w*$/,
      tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      rn = /[\\^$.*+?()[\]{}|]/g,
      en = RegExp(rn.source),
      un = /^\s+|\s+$/g,
      on = /^\s+/,
      fn = /\s+$/,
      cn = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      an = /\{\n\/\* \[wrapped with (.+)\] \*/,
      ln = /,? & /,
      sn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      hn = /\\(\\)?/g,
      pn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      _n = /\w*$/,
      vn = /^[-+]0x[0-9a-f]+$/i,
      gn = /^0b[01]+$/i,
      dn = /^\[object .+?Constructor\]$/,
      yn = /^0o[0-7]+$/i,
      bn = /^(?:0|[1-9]\d*)$/,
      xn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      jn = /($^)/,
      wn = /['\n\r\u2028\u2029\\]/g,
      mn = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",
      An = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + mn,
      En = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      kn = RegExp("['\u2019]", "g"),
      Sn = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g"),
      On = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + En + mn, "g"),
      In = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+", An].join("|"), "g"),
      Rn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),
      zn = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Wn = "Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),
      Bn = {};
  Bn["[object Float32Array]"] = Bn["[object Float64Array]"] = Bn["[object Int8Array]"] = Bn["[object Int16Array]"] = Bn["[object Int32Array]"] = Bn["[object Uint8Array]"] = Bn["[object Uint8ClampedArray]"] = Bn["[object Uint16Array]"] = Bn["[object Uint32Array]"] = true, Bn["[object Arguments]"] = Bn["[object Array]"] = Bn["[object ArrayBuffer]"] = Bn["[object Boolean]"] = Bn["[object DataView]"] = Bn["[object Date]"] = Bn["[object Error]"] = Bn["[object Function]"] = Bn["[object Map]"] = Bn["[object Number]"] = Bn["[object Object]"] = Bn["[object RegExp]"] = Bn["[object Set]"] = Bn["[object String]"] = Bn["[object WeakMap]"] = false;
  var Ln = {};
  Ln["[object Arguments]"] = Ln["[object Array]"] = Ln["[object ArrayBuffer]"] = Ln["[object DataView]"] = Ln["[object Boolean]"] = Ln["[object Date]"] = Ln["[object Float32Array]"] = Ln["[object Float64Array]"] = Ln["[object Int8Array]"] = Ln["[object Int16Array]"] = Ln["[object Int32Array]"] = Ln["[object Map]"] = Ln["[object Number]"] = Ln["[object Object]"] = Ln["[object RegExp]"] = Ln["[object Set]"] = Ln["[object String]"] = Ln["[object Symbol]"] = Ln["[object Uint8Array]"] = Ln["[object Uint8ClampedArray]"] = Ln["[object Uint16Array]"] = Ln["[object Uint32Array]"] = true, Ln["[object Error]"] = Ln["[object Function]"] = Ln["[object WeakMap]"] = false;

  var Un = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
  },
      Cn = parseFloat,
      Dn = parseInt,
      Mn = typeof global == "object" && global && global.Object === Object && global,
      Tn = typeof self == "object" && self && self.Object === Object && self,
      $n = Mn || Tn || Function("return this")(),
      Fn = typeof exports == "object" && exports && !exports.nodeType && exports,
      Nn = Fn && typeof module == "object" && module && !module.nodeType && module,
      Pn = Nn && Nn.exports === Fn,
      Zn = Pn && Mn.process,
      qn = function () {
    try {
      var n = Nn && Nn.f && Nn.f("util").types;
      return n ? n : Zn && Zn.binding && Zn.binding("util");
    } catch (n) {}
  }(),
      Vn = qn && qn.isArrayBuffer,
      Kn = qn && qn.isDate,
      Gn = qn && qn.isMap,
      Hn = qn && qn.isRegExp,
      Jn = qn && qn.isSet,
      Yn = qn && qn.isTypedArray,
      Qn = b("length"),
      Xn = x({
    "\xc0": "A",
    "\xc1": "A",
    "\xc2": "A",
    "\xc3": "A",
    "\xc4": "A",
    "\xc5": "A",
    "\xe0": "a",
    "\xe1": "a",
    "\xe2": "a",
    "\xe3": "a",
    "\xe4": "a",
    "\xe5": "a",
    "\xc7": "C",
    "\xe7": "c",
    "\xd0": "D",
    "\xf0": "d",
    "\xc8": "E",
    "\xc9": "E",
    "\xca": "E",
    "\xcb": "E",
    "\xe8": "e",
    "\xe9": "e",
    "\xea": "e",
    "\xeb": "e",
    "\xcc": "I",
    "\xcd": "I",
    "\xce": "I",
    "\xcf": "I",
    "\xec": "i",
    "\xed": "i",
    "\xee": "i",
    "\xef": "i",
    "\xd1": "N",
    "\xf1": "n",
    "\xd2": "O",
    "\xd3": "O",
    "\xd4": "O",
    "\xd5": "O",
    "\xd6": "O",
    "\xd8": "O",
    "\xf2": "o",
    "\xf3": "o",
    "\xf4": "o",
    "\xf5": "o",
    "\xf6": "o",
    "\xf8": "o",
    "\xd9": "U",
    "\xda": "U",
    "\xdb": "U",
    "\xdc": "U",
    "\xf9": "u",
    "\xfa": "u",
    "\xfb": "u",
    "\xfc": "u",
    "\xdd": "Y",
    "\xfd": "y",
    "\xff": "y",
    "\xc6": "Ae",
    "\xe6": "ae",
    "\xde": "Th",
    "\xfe": "th",
    "\xdf": "ss",
    "\u0100": "A",
    "\u0102": "A",
    "\u0104": "A",
    "\u0101": "a",
    "\u0103": "a",
    "\u0105": "a",
    "\u0106": "C",
    "\u0108": "C",
    "\u010a": "C",
    "\u010c": "C",
    "\u0107": "c",
    "\u0109": "c",
    "\u010b": "c",
    "\u010d": "c",
    "\u010e": "D",
    "\u0110": "D",
    "\u010f": "d",
    "\u0111": "d",
    "\u0112": "E",
    "\u0114": "E",
    "\u0116": "E",
    "\u0118": "E",
    "\u011a": "E",
    "\u0113": "e",
    "\u0115": "e",
    "\u0117": "e",
    "\u0119": "e",
    "\u011b": "e",
    "\u011c": "G",
    "\u011e": "G",
    "\u0120": "G",
    "\u0122": "G",
    "\u011d": "g",
    "\u011f": "g",
    "\u0121": "g",
    "\u0123": "g",
    "\u0124": "H",
    "\u0126": "H",
    "\u0125": "h",
    "\u0127": "h",
    "\u0128": "I",
    "\u012a": "I",
    "\u012c": "I",
    "\u012e": "I",
    "\u0130": "I",
    "\u0129": "i",
    "\u012b": "i",
    "\u012d": "i",
    "\u012f": "i",
    "\u0131": "i",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013b": "L",
    "\u013d": "L",
    "\u013f": "L",
    "\u0141": "L",
    "\u013a": "l",
    "\u013c": "l",
    "\u013e": "l",
    "\u0140": "l",
    "\u0142": "l",
    "\u0143": "N",
    "\u0145": "N",
    "\u0147": "N",
    "\u014a": "N",
    "\u0144": "n",
    "\u0146": "n",
    "\u0148": "n",
    "\u014b": "n",
    "\u014c": "O",
    "\u014e": "O",
    "\u0150": "O",
    "\u014d": "o",
    "\u014f": "o",
    "\u0151": "o",
    "\u0154": "R",
    "\u0156": "R",
    "\u0158": "R",
    "\u0155": "r",
    "\u0157": "r",
    "\u0159": "r",
    "\u015a": "S",
    "\u015c": "S",
    "\u015e": "S",
    "\u0160": "S",
    "\u015b": "s",
    "\u015d": "s",
    "\u015f": "s",
    "\u0161": "s",
    "\u0162": "T",
    "\u0164": "T",
    "\u0166": "T",
    "\u0163": "t",
    "\u0165": "t",
    "\u0167": "t",
    "\u0168": "U",
    "\u016a": "U",
    "\u016c": "U",
    "\u016e": "U",
    "\u0170": "U",
    "\u0172": "U",
    "\u0169": "u",
    "\u016b": "u",
    "\u016d": "u",
    "\u016f": "u",
    "\u0171": "u",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017b": "Z",
    "\u017d": "Z",
    "\u017a": "z",
    "\u017c": "z",
    "\u017e": "z",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0152": "Oe",
    "\u0153": "oe",
    "\u0149": "'n",
    "\u017f": "s"
  }),
      nt = x({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }),
      tt = x({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }),
      rt = function x(mn) {
    function An(n) {
      if (yu(n) && !ff(n) && !(n instanceof Un)) {
        if (n instanceof On) return n;
        if (oi.call(n, "__wrapped__")) return Fe(n);
      }

      return new On(n);
    }

    function En() {}

    function On(n, t) {
      this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = T;
    }

    function Un(n) {
      this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = [];
    }

    function Mn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;

      for (this.clear(); ++t < r;) {
        var e = n[t];
        this.set(e[0], e[1]);
      }
    }

    function Tn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;

      for (this.clear(); ++t < r;) {
        var e = n[t];
        this.set(e[0], e[1]);
      }
    }

    function Fn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;

      for (this.clear(); ++t < r;) {
        var e = n[t];
        this.set(e[0], e[1]);
      }
    }

    function Nn(n) {
      var t = -1,
          r = null == n ? 0 : n.length;

      for (this.__data__ = new Fn(); ++t < r;) this.add(n[t]);
    }

    function Zn(n) {
      this.size = (this.__data__ = new Tn(n)).size;
    }

    function qn(n, t) {
      var r,
          e = ff(n),
          u = !e && of(n),
          i = !e && !u && af(n),
          o = !e && !u && !i && _f(n),
          u = (e = e || u || i || o) ? A(n.length, ni) : [],
          f = u.length;

      for (r in n) !t && !oi.call(n, r) || e && ("length" == r || i && ("offset" == r || "parent" == r) || o && ("buffer" == r || "byteLength" == r || "byteOffset" == r) || Se(r, f)) || u.push(r);

      return u;
    }

    function Qn(n) {
      var t = n.length;
      return t ? n[ir(0, t - 1)] : T;
    }

    function et(n, t) {
      return De(Ur(n), pt(t, 0, n.length));
    }

    function ut(n) {
      return De(Ur(n));
    }

    function it(n, t, r) {
      (r === T || lu(n[t], r)) && (r !== T || t in n) || st(n, t, r);
    }

    function ot(n, t, r) {
      var e = n[t];
      oi.call(n, t) && lu(e, r) && (r !== T || t in n) || st(n, t, r);
    }

    function ft(n, t) {
      for (var r = n.length; r--;) if (lu(n[r][0], t)) return r;

      return -1;
    }

    function ct(n, t, r, e) {
      return uo(n, function (n, u, i) {
        t(e, n, r(n), i);
      }), e;
    }

    function at(n, t) {
      return n && Cr(t, Wu(t), n);
    }

    function lt(n, t) {
      return n && Cr(t, Bu(t), n);
    }

    function st(n, t, r) {
      "__proto__" == t && Ai ? Ai(n, t, {
        configurable: true,
        enumerable: true,
        value: r,
        writable: true
      }) : n[t] = r;
    }

    function ht(n, t) {
      for (var r = -1, e = t.length, u = Ku(e), i = null == n; ++r < e;) u[r] = i ? T : Ru(n, t[r]);

      return u;
    }

    function pt(n, t, r) {
      return n === n && (r !== T && (n = n <= r ? n : r), t !== T && (n = n >= t ? n : t)), n;
    }

    function _t(n, t, e, u, i, o) {
      var f,
          c = 1 & t,
          a = 2 & t,
          l = 4 & t;
      if (e && (f = i ? e(n, u, i, o) : e(n)), f !== T) return f;
      if (!du(n)) return n;

      if (u = ff(n)) {
        if (f = me(n), !c) return Ur(n, f);
      } else {
        var s = vo(n),
            h = "[object Function]" == s || "[object GeneratorFunction]" == s;
        if (af(n)) return Ir(n, c);

        if ("[object Object]" == s || "[object Arguments]" == s || h && !i) {
          if (f = a || h ? {} : Ae(n), !c) return a ? Mr(n, lt(f, n)) : Dr(n, at(f, n));
        } else {
          if (!Ln[s]) return i ? n : {};
          f = Ee(n, s, c);
        }
      }

      if (o || (o = new Zn()), i = o.get(n)) return i;
      o.set(n, f), pf(n) ? n.forEach(function (r) {
        f.add(_t(r, t, e, r, n, o));
      }) : sf(n) && n.forEach(function (r, u) {
        f.set(u, _t(r, t, e, u, n, o));
      });
      var a = l ? a ? ve : _e : a ? Bu : Wu,
          p = u ? T : a(n);
      return r(p || n, function (r, u) {
        p && (u = r, r = n[u]), ot(f, u, _t(r, t, e, u, n, o));
      }), f;
    }

    function vt(n) {
      var t = Wu(n);
      return function (r) {
        return gt(r, n, t);
      };
    }

    function gt(n, t, r) {
      var e = r.length;
      if (null == n) return !e;

      for (n = Qu(n); e--;) {
        var u = r[e],
            i = t[u],
            o = n[u];
        if (o === T && !(u in n) || !i(o)) return false;
      }

      return true;
    }

    function dt(n, t, r) {
      if (typeof n != "function") throw new ti("Expected a function");
      return bo(function () {
        n.apply(T, r);
      }, t);
    }

    function yt(n, t, r, e) {
      var u = -1,
          i = o,
          a = true,
          l = n.length,
          s = [],
          h = t.length;
      if (!l) return s;
      r && (t = c(t, k(r))), e ? (i = f, a = false) : 200 <= t.length && (i = O, a = false, t = new Nn(t));

      n: for (; ++u < l;) {
        var p = n[u],
            _ = null == r ? p : r(p),
            p = e || 0 !== p ? p : 0;

        if (a && _ === _) {
          for (var v = h; v--;) if (t[v] === _) continue n;

          s.push(p);
        } else i(t, _, e) || s.push(p);
      }

      return s;
    }

    function bt(n, t) {
      var r = true;
      return uo(n, function (n, e, u) {
        return r = !!t(n, e, u);
      }), r;
    }

    function xt(n, t, r) {
      for (var e = -1, u = n.length; ++e < u;) {
        var i = n[e],
            o = t(i);
        if (null != o && (f === T ? o === o && !wu(o) : r(o, f))) var f = o,
            c = i;
      }

      return c;
    }

    function jt(n, t) {
      var r = [];
      return uo(n, function (n, e, u) {
        t(n, e, u) && r.push(n);
      }), r;
    }

    function wt(n, t, r, e, u) {
      var i = -1,
          o = n.length;

      for (r || (r = ke), u || (u = []); ++i < o;) {
        var f = n[i];
        0 < t && r(f) ? 1 < t ? wt(f, t - 1, r, e, u) : a(u, f) : e || (u[u.length] = f);
      }

      return u;
    }

    function mt(n, t) {
      return n && oo(n, t, Wu);
    }

    function At(n, t) {
      return n && fo(n, t, Wu);
    }

    function Et(n, t) {
      return i(t, function (t) {
        return _u(n[t]);
      });
    }

    function kt(n, t) {
      t = Sr(t, n);

      for (var r = 0, e = t.length; null != n && r < e;) n = n[Me(t[r++])];

      return r && r == e ? n : T;
    }

    function St(n, t, r) {
      return t = t(n), ff(n) ? t : a(t, r(n));
    }

    function Ot(n) {
      if (null == n) n = n === T ? "[object Undefined]" : "[object Null]";else if (mi && mi in Qu(n)) {
        var t = oi.call(n, mi),
            r = n[mi];

        try {
          n[mi] = T;
          var e = true;
        } catch (n) {}

        var u = ai.call(n);
        e && (t ? n[mi] = r : delete n[mi]), n = u;
      } else n = ai.call(n);
      return n;
    }

    function It(n, t) {
      return n > t;
    }

    function Rt(n, t) {
      return null != n && oi.call(n, t);
    }

    function zt(n, t) {
      return null != n && t in Qu(n);
    }

    function Wt(n, t, r) {
      for (var e = r ? f : o, u = n[0].length, i = n.length, a = i, l = Ku(i), s = 1 / 0, h = []; a--;) {
        var p = n[a];
        a && t && (p = c(p, k(t))), s = Ci(p.length, s), l[a] = !r && (t || 120 <= u && 120 <= p.length) ? new Nn(a && p) : T;
      }

      var p = n[0],
          _ = -1,
          v = l[0];

      n: for (; ++_ < u && h.length < s;) {
        var g = p[_],
            d = t ? t(g) : g,
            g = r || 0 !== g ? g : 0;

        if (v ? !O(v, d) : !e(h, d, r)) {
          for (a = i; --a;) {
            var y = l[a];
            if (y ? !O(y, d) : !e(n[a], d, r)) continue n;
          }

          v && v.push(d), h.push(g);
        }
      }

      return h;
    }

    function Bt(n, t, r) {
      var e = {};
      return mt(n, function (n, u, i) {
        t(e, r(n), u, i);
      }), e;
    }

    function Lt(t, r, e) {
      return r = Sr(r, t), t = 2 > r.length ? t : kt(t, hr(r, 0, -1)), r = null == t ? t : t[Me(Ve(r))], null == r ? T : n(r, t, e);
    }

    function Ut(n) {
      return yu(n) && "[object Arguments]" == Ot(n);
    }

    function Ct(n) {
      return yu(n) && "[object ArrayBuffer]" == Ot(n);
    }

    function Dt(n) {
      return yu(n) && "[object Date]" == Ot(n);
    }

    function Mt(n, t, r, e, u) {
      if (n === t) t = true;else if (null == n || null == t || !yu(n) && !yu(t)) t = n !== n && t !== t;else n: {
        var i = ff(n),
            o = ff(t),
            f = i ? "[object Array]" : vo(n),
            c = o ? "[object Array]" : vo(t),
            f = "[object Arguments]" == f ? "[object Object]" : f,
            c = "[object Arguments]" == c ? "[object Object]" : c,
            a = "[object Object]" == f,
            o = "[object Object]" == c;

        if ((c = f == c) && af(n)) {
          if (!af(t)) {
            t = false;
            break n;
          }

          i = true, a = false;
        }

        if (c && !a) u || (u = new Zn()), t = i || _f(n) ? se(n, t, r, e, Mt, u) : he(n, t, f, r, e, Mt, u);else {
          if (!(1 & r) && (i = a && oi.call(n, "__wrapped__"), f = o && oi.call(t, "__wrapped__"), i || f)) {
            n = i ? n.value() : n, t = f ? t.value() : t, u || (u = new Zn()), t = Mt(n, t, r, e, u);
            break n;
          }

          if (c) {
            t: if (u || (u = new Zn()), i = 1 & r, f = _e(n), o = f.length, c = _e(t).length, o == c || i) {
              for (a = o; a--;) {
                var l = f[a];

                if (!(i ? l in t : oi.call(t, l))) {
                  t = false;
                  break t;
                }
              }

              if ((c = u.get(n)) && u.get(t)) t = c == t;else {
                c = true, u.set(n, t), u.set(t, n);

                for (var s = i; ++a < o;) {
                  var l = f[a],
                      h = n[l],
                      p = t[l];
                  if (e) var _ = i ? e(p, h, l, t, n, u) : e(h, p, l, n, t, u);

                  if (_ === T ? h !== p && !Mt(h, p, r, e, u) : !_) {
                    c = false;
                    break;
                  }

                  s || (s = "constructor" == l);
                }

                c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u.delete(n), u.delete(t), t = c;
              }
            } else t = false;
          } else t = false;
        }
      }
      return t;
    }

    function Tt(n) {
      return yu(n) && "[object Map]" == vo(n);
    }

    function $t(n, t, r, e) {
      var u = r.length,
          i = u,
          o = !e;
      if (null == n) return !i;

      for (n = Qu(n); u--;) {
        var f = r[u];
        if (o && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false;
      }

      for (; ++u < i;) {
        var f = r[u],
            c = f[0],
            a = n[c],
            l = f[1];

        if (o && f[2]) {
          if (a === T && !(c in n)) return false;
        } else {
          if (f = new Zn(), e) var s = e(a, l, c, n, t, f);
          if (s === T ? !Mt(l, a, 3, e, f) : !s) return false;
        }
      }

      return true;
    }

    function Ft(n) {
      return !(!du(n) || ci && ci in n) && (_u(n) ? hi : dn).test(Te(n));
    }

    function Nt(n) {
      return yu(n) && "[object RegExp]" == Ot(n);
    }

    function Pt(n) {
      return yu(n) && "[object Set]" == vo(n);
    }

    function Zt(n) {
      return yu(n) && gu(n.length) && !!Bn[Ot(n)];
    }

    function qt(n) {
      return typeof n == "function" ? n : null == n ? $u : typeof n == "object" ? ff(n) ? Jt(n[0], n[1]) : Ht(n) : Zu(n);
    }

    function Vt(n) {
      if (!ze(n)) return Li(n);
      var t,
          r = [];

      for (t in Qu(n)) oi.call(n, t) && "constructor" != t && r.push(t);

      return r;
    }

    function Kt(n, t) {
      return n < t;
    }

    function Gt(n, t) {
      var r = -1,
          e = su(n) ? Ku(n.length) : [];
      return uo(n, function (n, u, i) {
        e[++r] = t(n, u, i);
      }), e;
    }

    function Ht(n) {
      var t = xe(n);
      return 1 == t.length && t[0][2] ? We(t[0][0], t[0][1]) : function (r) {
        return r === n || $t(r, n, t);
      };
    }

    function Jt(n, t) {
      return Ie(n) && t === t && !du(t) ? We(Me(n), t) : function (r) {
        var e = Ru(r, n);
        return e === T && e === t ? zu(r, n) : Mt(t, e, 3);
      };
    }

    function Yt(n, t, r, e, u) {
      n !== t && oo(t, function (i, o) {
        if (u || (u = new Zn()), du(i)) {
          var f = u,
              c = Le(n, o),
              a = Le(t, o),
              l = f.get(a);
          if (l) it(n, o, l);else {
            var l = e ? e(c, a, o + "", n, t, f) : T,
                s = l === T;

            if (s) {
              var h = ff(a),
                  p = !h && af(a),
                  _ = !h && !p && _f(a),
                  l = a;

              h || p || _ ? ff(c) ? l = c : hu(c) ? l = Ur(c) : p ? (s = false, l = Ir(a, true)) : _ ? (s = false, l = zr(a, true)) : l = [] : xu(a) || of(a) ? (l = c, of(c) ? l = Ou(c) : du(c) && !_u(c) || (l = Ae(a))) : s = false;
            }

            s && (f.set(a, l), Yt(l, a, r, e, f), f.delete(a)), it(n, o, l);
          }
        } else f = e ? e(Le(n, o), i, o + "", n, t, u) : T, f === T && (f = i), it(n, o, f);
      }, Bu);
    }

    function Qt(n, t) {
      var r = n.length;
      if (r) return t += 0 > t ? r : 0, Se(t, r) ? n[t] : T;
    }

    function Xt(n, t, r) {
      var e = -1;
      return t = c(t.length ? t : [$u], k(ye())), n = Gt(n, function (n) {
        return {
          a: c(t, function (t) {
            return t(n);
          }),
          b: ++e,
          c: n
        };
      }), w(n, function (n, t) {
        var e;

        n: {
          e = -1;

          for (var u = n.a, i = t.a, o = u.length, f = r.length; ++e < o;) {
            var c = Wr(u[e], i[e]);

            if (c) {
              e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);
              break n;
            }
          }

          e = n.b - t.b;
        }

        return e;
      });
    }

    function nr(n, t) {
      return tr(n, t, function (t, r) {
        return zu(n, r);
      });
    }

    function tr(n, t, r) {
      for (var e = -1, u = t.length, i = {}; ++e < u;) {
        var o = t[e],
            f = kt(n, o);
        r(f, o) && lr(i, Sr(o, n), f);
      }

      return i;
    }

    function rr(n) {
      return function (t) {
        return kt(t, n);
      };
    }

    function er(n, t, r, e) {
      var u = e ? g : v,
          i = -1,
          o = t.length,
          f = n;

      for (n === t && (t = Ur(t)), r && (f = c(n, k(r))); ++i < o;) for (var a = 0, l = t[i], l = r ? r(l) : l; -1 < (a = u(f, l, a, e));) f !== n && xi.call(f, a, 1), xi.call(n, a, 1);

      return n;
    }

    function ur(n, t) {
      for (var r = n ? t.length : 0, e = r - 1; r--;) {
        var u = t[r];

        if (r == e || u !== i) {
          var i = u;
          Se(u) ? xi.call(n, u, 1) : xr(n, u);
        }
      }
    }

    function ir(n, t) {
      return n + Ii(Ti() * (t - n + 1));
    }

    function or(n, t) {
      var r = "";
      if (!n || 1 > t || 9007199254740991 < t) return r;

      do t % 2 && (r += n), (t = Ii(t / 2)) && (n += n); while (t);

      return r;
    }

    function fr(n, t) {
      return xo(Be(n, t, $u), n + "");
    }

    function cr(n) {
      return Qn(Uu(n));
    }

    function ar(n, t) {
      var r = Uu(n);
      return De(r, pt(t, 0, r.length));
    }

    function lr(n, t, r, e) {
      if (!du(n)) return n;
      t = Sr(t, n);

      for (var u = -1, i = t.length, o = i - 1, f = n; null != f && ++u < i;) {
        var c = Me(t[u]),
            a = r;

        if (u != o) {
          var l = f[c],
              a = e ? e(l, c, f) : T;
          a === T && (a = du(l) ? l : Se(t[u + 1]) ? [] : {});
        }

        ot(f, c, a), f = f[c];
      }

      return n;
    }

    function sr(n) {
      return De(Uu(n));
    }

    function hr(n, t, r) {
      var e = -1,
          u = n.length;

      for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Ku(u); ++e < u;) r[e] = n[e + t];

      return r;
    }

    function pr(n, t) {
      var r;
      return uo(n, function (n, e, u) {
        return r = t(n, e, u), !r;
      }), !!r;
    }

    function _r(n, t, r) {
      var e = 0,
          u = null == n ? e : n.length;

      if (typeof t == "number" && t === t && 2147483647 >= u) {
        for (; e < u;) {
          var i = e + u >>> 1,
              o = n[i];
          null !== o && !wu(o) && (r ? o <= t : o < t) ? e = i + 1 : u = i;
        }

        return u;
      }

      return vr(n, t, $u, r);
    }

    function vr(n, t, r, e) {
      t = r(t);

      for (var u = 0, i = null == n ? 0 : n.length, o = t !== t, f = null === t, c = wu(t), a = t === T; u < i;) {
        var l = Ii((u + i) / 2),
            s = r(n[l]),
            h = s !== T,
            p = null === s,
            _ = s === s,
            v = wu(s);

        (o ? e || _ : a ? _ && (e || h) : f ? _ && h && (e || !p) : c ? _ && h && !p && (e || !v) : p || v ? 0 : e ? s <= t : s < t) ? u = l + 1 : i = l;
      }

      return Ci(i, 4294967294);
    }

    function gr(n, t) {
      for (var r = -1, e = n.length, u = 0, i = []; ++r < e;) {
        var o = n[r],
            f = t ? t(o) : o;

        if (!r || !lu(f, c)) {
          var c = f;
          i[u++] = 0 === o ? 0 : o;
        }
      }

      return i;
    }

    function dr(n) {
      return typeof n == "number" ? n : wu(n) ? F : +n;
    }

    function yr(n) {
      if (typeof n == "string") return n;
      if (ff(n)) return c(n, yr) + "";
      if (wu(n)) return ro ? ro.call(n) : "";
      var t = n + "";
      return "0" == t && 1 / n == -$ ? "-0" : t;
    }

    function br(n, t, r) {
      var e = -1,
          u = o,
          i = n.length,
          c = true,
          a = [],
          l = a;
      if (r) c = false, u = f;else if (200 <= i) {
        if (u = t ? null : so(n)) return U(u);
        c = false, u = O, l = new Nn();
      } else l = t ? [] : a;

      n: for (; ++e < i;) {
        var s = n[e],
            h = t ? t(s) : s,
            s = r || 0 !== s ? s : 0;

        if (c && h === h) {
          for (var p = l.length; p--;) if (l[p] === h) continue n;

          t && l.push(h), a.push(s);
        } else u(l, h, r) || (l !== a && l.push(h), a.push(s));
      }

      return a;
    }

    function xr(n, t) {
      return t = Sr(t, n), n = 2 > t.length ? n : kt(n, hr(t, 0, -1)), null == n || delete n[Me(Ve(t))];
    }

    function jr(n, t, r, e) {
      for (var u = n.length, i = e ? u : -1; (e ? i-- : ++i < u) && t(n[i], i, n););

      return r ? hr(n, e ? 0 : i, e ? i + 1 : u) : hr(n, e ? i + 1 : 0, e ? u : i);
    }

    function wr(n, t) {
      var r = n;
      return r instanceof Un && (r = r.value()), l(t, function (n, t) {
        return t.func.apply(t.thisArg, a([n], t.args));
      }, r);
    }

    function mr(n, t, r) {
      var e = n.length;
      if (2 > e) return e ? br(n[0]) : [];

      for (var u = -1, i = Ku(e); ++u < e;) for (var o = n[u], f = -1; ++f < e;) f != u && (i[u] = yt(i[u] || o, n[f], t, r));

      return br(wt(i, 1), t, r);
    }

    function Ar(n, t, r) {
      for (var e = -1, u = n.length, i = t.length, o = {}; ++e < u;) r(o, n[e], e < i ? t[e] : T);

      return o;
    }

    function Er(n) {
      return hu(n) ? n : [];
    }

    function kr(n) {
      return typeof n == "function" ? n : $u;
    }

    function Sr(n, t) {
      return ff(n) ? n : Ie(n, t) ? [n] : jo(Iu(n));
    }

    function Or(n, t, r) {
      var e = n.length;
      return r = r === T ? e : r, !t && r >= e ? n : hr(n, t, r);
    }

    function Ir(n, t) {
      if (t) return n.slice();
      var r = n.length,
          r = gi ? gi(r) : new n.constructor(r);
      return n.copy(r), r;
    }

    function Rr(n) {
      var t = new n.constructor(n.byteLength);
      return new vi(t).set(new vi(n)), t;
    }

    function zr(n, t) {
      return new n.constructor(t ? Rr(n.buffer) : n.buffer, n.byteOffset, n.length);
    }

    function Wr(n, t) {
      if (n !== t) {
        var r = n !== T,
            e = null === n,
            u = n === n,
            i = wu(n),
            o = t !== T,
            f = null === t,
            c = t === t,
            a = wu(t);
        if (!f && !a && !i && n > t || i && o && c && !f && !a || e && o && c || !r && c || !u) return 1;
        if (!e && !i && !a && n < t || a && r && u && !e && !i || f && r && u || !o && u || !c) return -1;
      }

      return 0;
    }

    function Br(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = r.length,
          f = -1,
          c = t.length,
          a = Ui(i - o, 0),
          l = Ku(c + a);

      for (e = !e; ++f < c;) l[f] = t[f];

      for (; ++u < o;) (e || u < i) && (l[r[u]] = n[u]);

      for (; a--;) l[f++] = n[u++];

      return l;
    }

    function Lr(n, t, r, e) {
      var u = -1,
          i = n.length,
          o = -1,
          f = r.length,
          c = -1,
          a = t.length,
          l = Ui(i - f, 0),
          s = Ku(l + a);

      for (e = !e; ++u < l;) s[u] = n[u];

      for (l = u; ++c < a;) s[l + c] = t[c];

      for (; ++o < f;) (e || u < i) && (s[l + r[o]] = n[u++]);

      return s;
    }

    function Ur(n, t) {
      var r = -1,
          e = n.length;

      for (t || (t = Ku(e)); ++r < e;) t[r] = n[r];

      return t;
    }

    function Cr(n, t, r, e) {
      var u = !r;
      r || (r = {});

      for (var i = -1, o = t.length; ++i < o;) {
        var f = t[i],
            c = e ? e(r[f], n[f], f, r, n) : T;
        c === T && (c = n[f]), u ? st(r, f, c) : ot(r, f, c);
      }

      return r;
    }

    function Dr(n, t) {
      return Cr(n, po(n), t);
    }

    function Mr(n, t) {
      return Cr(n, _o(n), t);
    }

    function Tr(n, r) {
      return function (e, u) {
        var i = ff(e) ? t : ct,
            o = r ? r() : {};
        return i(e, n, ye(u, 2), o);
      };
    }

    function $r(n) {
      return fr(function (t, r) {
        var e = -1,
            u = r.length,
            i = 1 < u ? r[u - 1] : T,
            o = 2 < u ? r[2] : T,
            i = 3 < n.length && typeof i == "function" ? (u--, i) : T;

        for (o && Oe(r[0], r[1], o) && (i = 3 > u ? T : i, u = 1), t = Qu(t); ++e < u;) (o = r[e]) && n(t, o, e, i);

        return t;
      });
    }

    function Fr(n, t) {
      return function (r, e) {
        if (null == r) return r;
        if (!su(r)) return n(r, e);

        for (var u = r.length, i = t ? u : -1, o = Qu(r); (t ? i-- : ++i < u) && false !== e(o[i], i, o););

        return r;
      };
    }

    function Nr(n) {
      return function (t, r, e) {
        var u = -1,
            i = Qu(t);
        e = e(t);

        for (var o = e.length; o--;) {
          var f = e[n ? o : ++u];
          if (false === r(i[f], f, i)) break;
        }

        return t;
      };
    }

    function Pr(n, t, r) {
      function e() {
        return (this && this !== $n && this instanceof e ? i : n).apply(u ? r : this, arguments);
      }

      var u = 1 & t,
          i = Vr(n);
      return e;
    }

    function Zr(n) {
      return function (t) {
        t = Iu(t);
        var r = Rn.test(t) ? M(t) : T,
            e = r ? r[0] : t.charAt(0);
        return t = r ? Or(r, 1).join("") : t.slice(1), e[n]() + t;
      };
    }

    function qr(n) {
      return function (t) {
        return l(Mu(Du(t).replace(kn, "")), n, "");
      };
    }

    function Vr(n) {
      return function () {
        var t = arguments;

        switch (t.length) {
          case 0:
            return new n();

          case 1:
            return new n(t[0]);

          case 2:
            return new n(t[0], t[1]);

          case 3:
            return new n(t[0], t[1], t[2]);

          case 4:
            return new n(t[0], t[1], t[2], t[3]);

          case 5:
            return new n(t[0], t[1], t[2], t[3], t[4]);

          case 6:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5]);

          case 7:
            return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
        }

        var r = eo(n.prototype),
            t = n.apply(r, t);
        return du(t) ? t : r;
      };
    }

    function Kr(t, r, e) {
      function u() {
        for (var o = arguments.length, f = Ku(o), c = o, a = de(u); c--;) f[c] = arguments[c];

        return c = 3 > o && f[0] !== a && f[o - 1] !== a ? [] : L(f, a), o -= c.length, o < e ? ue(t, r, Jr, u.placeholder, T, f, c, T, T, e - o) : n(this && this !== $n && this instanceof u ? i : t, this, f);
      }

      var i = Vr(t);
      return u;
    }

    function Gr(n) {
      return function (t, r, e) {
        var u = Qu(t);

        if (!su(t)) {
          var i = ye(r, 3);
          t = Wu(t), r = function (n) {
            return i(u[n], n, u);
          };
        }

        return r = n(t, r, e), -1 < r ? u[i ? t[r] : r] : T;
      };
    }

    function Hr(n) {
      return pe(function (t) {
        var r = t.length,
            e = r,
            u = On.prototype.thru;

        for (n && t.reverse(); e--;) {
          var i = t[e];
          if (typeof i != "function") throw new ti("Expected a function");
          if (u && !o && "wrapper" == ge(i)) var o = new On([], true);
        }

        for (e = o ? e : r; ++e < r;) var i = t[e], u = ge(i), f = "wrapper" == u ? ho(i) : T, o = f && Re(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? o[ge(f[0])].apply(o, f[3]) : 1 == i.length && Re(i) ? o[u]() : o.thru(i);

        return function () {
          var n = arguments,
              e = n[0];
          if (o && 1 == n.length && ff(e)) return o.plant(e).value();

          for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;) n = t[u].call(this, n);

          return n;
        };
      });
    }

    function Jr(n, t, r, e, u, i, o, f, c, a) {
      function l() {
        for (var d = arguments.length, y = Ku(d), b = d; b--;) y[b] = arguments[b];

        if (_) {
          var x,
              j = de(l),
              b = y.length;

          for (x = 0; b--;) y[b] === j && ++x;
        }

        if (e && (y = Br(y, e, u, _)), i && (y = Lr(y, i, o, _)), d -= x, _ && d < a) return j = L(y, j), ue(n, t, Jr, l.placeholder, r, y, j, f, c, a - d);

        if (j = h ? r : this, b = p ? j[n] : n, d = y.length, f) {
          x = y.length;

          for (var w = Ci(f.length, x), m = Ur(y); w--;) {
            var A = f[w];
            y[w] = Se(A, x) ? m[A] : T;
          }
        } else v && 1 < d && y.reverse();

        return s && c < d && (y.length = c), this && this !== $n && this instanceof l && (b = g || Vr(b)), b.apply(j, y);
      }

      var s = 128 & t,
          h = 1 & t,
          p = 2 & t,
          _ = 24 & t,
          v = 512 & t,
          g = p ? T : Vr(n);

      return l;
    }

    function Yr(n, t) {
      return function (r, e) {
        return Bt(r, n, t(e));
      };
    }

    function Qr(n, t) {
      return function (r, e) {
        var u;
        if (r === T && e === T) return t;

        if (r !== T && (u = r), e !== T) {
          if (u === T) return e;
          typeof r == "string" || typeof e == "string" ? (r = yr(r), e = yr(e)) : (r = dr(r), e = dr(e)), u = n(r, e);
        }

        return u;
      };
    }

    function Xr(t) {
      return pe(function (r) {
        return r = c(r, k(ye())), fr(function (e) {
          var u = this;
          return t(r, function (t) {
            return n(t, u, e);
          });
        });
      });
    }

    function ne(n, t) {
      t = t === T ? " " : yr(t);
      var r = t.length;
      return 2 > r ? r ? or(t, n) : t : (r = or(t, Oi(n / D(t))), Rn.test(t) ? Or(M(r), 0, n).join("") : r.slice(0, n));
    }

    function te(t, r, e, u) {
      function i() {
        for (var r = -1, c = arguments.length, a = -1, l = u.length, s = Ku(l + c), h = this && this !== $n && this instanceof i ? f : t; ++a < l;) s[a] = u[a];

        for (; c--;) s[a++] = arguments[++r];

        return n(h, o ? e : this, s);
      }

      var o = 1 & r,
          f = Vr(t);
      return i;
    }

    function re(n) {
      return function (t, r, e) {
        e && typeof e != "number" && Oe(t, r, e) && (r = e = T), t = Au(t), r === T ? (r = t, t = 0) : r = Au(r), e = e === T ? t < r ? 1 : -1 : Au(e);
        var u = -1;
        r = Ui(Oi((r - t) / (e || 1)), 0);

        for (var i = Ku(r); r--;) i[n ? r : ++u] = t, t += e;

        return i;
      };
    }

    function ee(n) {
      return function (t, r) {
        return typeof t == "string" && typeof r == "string" || (t = Su(t), r = Su(r)), n(t, r);
      };
    }

    function ue(n, t, r, e, u, i, o, f, c, a) {
      var l = 8 & t,
          s = l ? o : T;
      o = l ? T : o;
      var h = l ? i : T;
      return i = l ? T : i, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), u = [n, t, u, h, s, i, o, f, c, a], r = r.apply(T, u), Re(n) && yo(r, u), r.placeholder = e, Ue(r, n, t);
    }

    function ie(n) {
      var t = Yu[n];
      return function (n, r) {
        if (n = Su(n), (r = null == r ? 0 : Ci(Eu(r), 292)) && Wi(n)) {
          var e = (Iu(n) + "e").split("e"),
              e = t(e[0] + "e" + (+e[1] + r)),
              e = (Iu(e) + "e").split("e");
          return +(e[0] + "e" + (+e[1] - r));
        }

        return t(n);
      };
    }

    function oe(n) {
      return function (t) {
        var r = vo(t);
        return "[object Map]" == r ? W(t) : "[object Set]" == r ? C(t) : E(t, n(t));
      };
    }

    function fe(n, t, r, e, u, i, o, f) {
      var c = 2 & t;
      if (!c && typeof n != "function") throw new ti("Expected a function");
      var a = e ? e.length : 0;

      if (a || (t &= -97, e = u = T), o = o === T ? o : Ui(Eu(o), 0), f = f === T ? f : Eu(f), a -= u ? u.length : 0, 64 & t) {
        var l = e,
            s = u;
        e = u = T;
      }

      var h = c ? T : ho(n);
      return i = [n, t, r, e, u, l, s, i, o, f], h && (r = i[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && i[7].length <= h[8] || 384 == n && h[7].length <= h[8] && 8 == r, 131 > t || e) && (1 & n && (i[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = i[3], i[3] = e ? Br(e, r, h[4]) : r, i[4] = e ? L(i[3], "__lodash_placeholder__") : h[4]), (r = h[5]) && (e = i[5], i[5] = e ? Lr(e, r, h[6]) : r, i[6] = e ? L(i[5], "__lodash_placeholder__") : h[6]), (r = h[7]) && (i[7] = r), 128 & n && (i[8] = null == i[8] ? h[8] : Ci(i[8], h[8])), null == i[9] && (i[9] = h[9]), i[0] = h[0], i[1] = t), n = i[0], t = i[1], r = i[2], e = i[3], u = i[4], f = i[9] = i[9] === T ? c ? 0 : n.length : Ui(i[9] - a, 0), !f && 24 & t && (t &= -25), Ue((h ? co : yo)(t && 1 != t ? 8 == t || 16 == t ? Kr(n, t, f) : 32 != t && 33 != t || u.length ? Jr.apply(T, i) : te(n, t, r, e) : Pr(n, t, r), i), n, t);
    }

    function ce(n, t, r, e) {
      return n === T || lu(n, ei[r]) && !oi.call(e, r) ? t : n;
    }

    function ae(n, t, r, e, u, i) {
      return du(n) && du(t) && (i.set(t, n), Yt(n, t, T, ae, i), i.delete(t)), n;
    }

    function le(n) {
      return xu(n) ? T : n;
    }

    function se(n, t, r, e, u, i) {
      var o = 1 & r,
          f = n.length,
          c = t.length;
      if (f != c && !(o && c > f)) return false;
      if ((c = i.get(n)) && i.get(t)) return c == t;
      var c = -1,
          a = true,
          l = 2 & r ? new Nn() : T;

      for (i.set(n, t), i.set(t, n); ++c < f;) {
        var s = n[c],
            p = t[c];
        if (e) var _ = o ? e(p, s, c, t, n, i) : e(s, p, c, n, t, i);

        if (_ !== T) {
          if (_) continue;
          a = false;
          break;
        }

        if (l) {
          if (!h(t, function (n, t) {
            if (!O(l, t) && (s === n || u(s, n, r, e, i))) return l.push(t);
          })) {
            a = false;
            break;
          }
        } else if (s !== p && !u(s, p, r, e, i)) {
          a = false;
          break;
        }
      }

      return i.delete(n), i.delete(t), a;
    }

    function he(n, t, r, e, u, i, o) {
      switch (r) {
        case "[object DataView]":
          if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;
          n = n.buffer, t = t.buffer;

        case "[object ArrayBuffer]":
          if (n.byteLength != t.byteLength || !i(new vi(n), new vi(t))) break;
          return true;

        case "[object Boolean]":
        case "[object Date]":
        case "[object Number]":
          return lu(+n, +t);

        case "[object Error]":
          return n.name == t.name && n.message == t.message;

        case "[object RegExp]":
        case "[object String]":
          return n == t + "";

        case "[object Map]":
          var f = W;

        case "[object Set]":
          if (f || (f = U), n.size != t.size && !(1 & e)) break;
          return (r = o.get(n)) ? r == t : (e |= 2, o.set(n, t), t = se(f(n), f(t), e, u, i, o), o.delete(n), t);

        case "[object Symbol]":
          if (to) return to.call(n) == to.call(t);
      }

      return false;
    }

    function pe(n) {
      return xo(Be(n, T, Ze), n + "");
    }

    function _e(n) {
      return St(n, Wu, po);
    }

    function ve(n) {
      return St(n, Bu, _o);
    }

    function ge(n) {
      for (var t = n.name + "", r = Gi[t], e = oi.call(Gi, t) ? r.length : 0; e--;) {
        var u = r[e],
            i = u.func;
        if (null == i || i == n) return u.name;
      }

      return t;
    }

    function de(n) {
      return (oi.call(An, "placeholder") ? An : n).placeholder;
    }

    function ye() {
      var n = An.iteratee || Fu,
          n = n === Fu ? qt : n;
      return arguments.length ? n(arguments[0], arguments[1]) : n;
    }

    function be(n, t) {
      var r = n.__data__,
          e = typeof t;
      return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }

    function xe(n) {
      for (var t = Wu(n), r = t.length; r--;) {
        var e = t[r],
            u = n[e];
        t[r] = [e, u, u === u && !du(u)];
      }

      return t;
    }

    function je(n, t) {
      var r = null == n ? T : n[t];
      return Ft(r) ? r : T;
    }

    function we(n, t, r) {
      t = Sr(t, n);

      for (var e = -1, u = t.length, i = false; ++e < u;) {
        var o = Me(t[e]);
        if (!(i = null != n && r(n, o))) break;
        n = n[o];
      }

      return i || ++e != u ? i : (u = null == n ? 0 : n.length, !!u && gu(u) && Se(o, u) && (ff(n) || of(n)));
    }

    function me(n) {
      var t = n.length,
          r = new n.constructor(t);
      return t && "string" == typeof n[0] && oi.call(n, "index") && (r.index = n.index, r.input = n.input), r;
    }

    function Ae(n) {
      return typeof n.constructor != "function" || ze(n) ? {} : eo(di(n));
    }

    function Ee(n, t, r) {
      var e = n.constructor;

      switch (t) {
        case "[object ArrayBuffer]":
          return Rr(n);

        case "[object Boolean]":
        case "[object Date]":
          return new e(+n);

        case "[object DataView]":
          return t = r ? Rr(n.buffer) : n.buffer, new n.constructor(t, n.byteOffset, n.byteLength);

        case "[object Float32Array]":
        case "[object Float64Array]":
        case "[object Int8Array]":
        case "[object Int16Array]":
        case "[object Int32Array]":
        case "[object Uint8Array]":
        case "[object Uint8ClampedArray]":
        case "[object Uint16Array]":
        case "[object Uint32Array]":
          return zr(n, r);

        case "[object Map]":
          return new e();

        case "[object Number]":
        case "[object String]":
          return new e(n);

        case "[object RegExp]":
          return t = new n.constructor(n.source, _n.exec(n)), t.lastIndex = n.lastIndex, t;

        case "[object Set]":
          return new e();

        case "[object Symbol]":
          return to ? Qu(to.call(n)) : {};
      }
    }

    function ke(n) {
      return ff(n) || of(n) || !!(ji && n && n[ji]);
    }

    function Se(n, t) {
      var r = typeof n;
      return t = null == t ? 9007199254740991 : t, !!t && ("number" == r || "symbol" != r && bn.test(n)) && -1 < n && 0 == n % 1 && n < t;
    }

    function Oe(n, t, r) {
      if (!du(r)) return false;
      var e = typeof t;
      return !!("number" == e ? su(r) && Se(t, r.length) : "string" == e && t in r) && lu(r[t], n);
    }

    function Ie(n, t) {
      if (ff(n)) return false;
      var r = typeof n;
      return !("number" != r && "symbol" != r && "boolean" != r && null != n && !wu(n)) || nn.test(n) || !X.test(n) || null != t && n in Qu(t);
    }

    function Re(n) {
      var t = ge(n),
          r = An[t];
      return typeof r == "function" && t in Un.prototype && (n === r || (t = ho(r), !!t && n === t[0]));
    }

    function ze(n) {
      var t = n && n.constructor;
      return n === (typeof t == "function" && t.prototype || ei);
    }

    function We(n, t) {
      return function (r) {
        return null != r && r[n] === t && (t !== T || n in Qu(r));
      };
    }

    function Be(t, r, e) {
      return r = Ui(r === T ? t.length - 1 : r, 0), function () {
        for (var u = arguments, i = -1, o = Ui(u.length - r, 0), f = Ku(o); ++i < o;) f[i] = u[r + i];

        for (i = -1, o = Ku(r + 1); ++i < r;) o[i] = u[i];

        return o[r] = e(f), n(t, this, o);
      };
    }

    function Le(n, t) {
      if (("constructor" !== t || "function" != typeof n[t]) && "__proto__" != t) return n[t];
    }

    function Ue(n, t, r) {
      var e = t + "";
      t = xo;
      var u,
          i = $e;
      return u = (u = e.match(an)) ? u[1].split(ln) : [], r = i(u, r), (i = r.length) && (u = i - 1, r[u] = (1 < i ? "& " : "") + r[u], r = r.join(2 < i ? ", " : " "), e = e.replace(cn, "{\n/* [wrapped with " + r + "] */\n")), t(n, e);
    }

    function Ce(n) {
      var t = 0,
          r = 0;
      return function () {
        var e = Di(),
            u = 16 - (e - r);

        if (r = e, 0 < u) {
          if (800 <= ++t) return arguments[0];
        } else t = 0;

        return n.apply(T, arguments);
      };
    }

    function De(n, t) {
      var r = -1,
          e = n.length,
          u = e - 1;

      for (t = t === T ? e : t; ++r < t;) {
        var e = ir(r, u),
            i = n[e];
        n[e] = n[r], n[r] = i;
      }

      return n.length = t, n;
    }

    function Me(n) {
      if (typeof n == "string" || wu(n)) return n;
      var t = n + "";
      return "0" == t && 1 / n == -$ ? "-0" : t;
    }

    function Te(n) {
      if (null != n) {
        try {
          return ii.call(n);
        } catch (n) {}

        return n + "";
      }

      return "";
    }

    function $e(n, t) {
      return r(N, function (r) {
        var e = "_." + r[0];
        t & r[1] && !o(n, e) && n.push(e);
      }), n.sort();
    }

    function Fe(n) {
      if (n instanceof Un) return n.clone();
      var t = new On(n.__wrapped__, n.__chain__);
      return t.__actions__ = Ur(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t;
    }

    function Ne(n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (r = null == r ? 0 : Eu(r), 0 > r && (r = Ui(e + r, 0)), _(n, ye(t, 3), r)) : -1;
    }

    function Pe(n, t, r) {
      var e = null == n ? 0 : n.length;
      if (!e) return -1;
      var u = e - 1;
      return r !== T && (u = Eu(r), u = 0 > r ? Ui(e + u, 0) : Ci(u, e - 1)), _(n, ye(t, 3), u, true);
    }

    function Ze(n) {
      return (null == n ? 0 : n.length) ? wt(n, 1) : [];
    }

    function qe(n) {
      return n && n.length ? n[0] : T;
    }

    function Ve(n) {
      var t = null == n ? 0 : n.length;
      return t ? n[t - 1] : T;
    }

    function Ke(n, t) {
      return n && n.length && t && t.length ? er(n, t) : n;
    }

    function Ge(n) {
      return null == n ? n : $i.call(n);
    }

    function He(n) {
      if (!n || !n.length) return [];
      var t = 0;
      return n = i(n, function (n) {
        if (hu(n)) return t = Ui(n.length, t), true;
      }), A(t, function (t) {
        return c(n, b(t));
      });
    }

    function Je(t, r) {
      if (!t || !t.length) return [];
      var e = He(t);
      return null == r ? e : c(e, function (t) {
        return n(r, T, t);
      });
    }

    function Ye(n) {
      return n = An(n), n.__chain__ = true, n;
    }

    function Qe(n, t) {
      return t(n);
    }

    function Xe() {
      return this;
    }

    function nu(n, t) {
      return (ff(n) ? r : uo)(n, ye(t, 3));
    }

    function tu(n, t) {
      return (ff(n) ? e : io)(n, ye(t, 3));
    }

    function ru(n, t) {
      return (ff(n) ? c : Gt)(n, ye(t, 3));
    }

    function eu(n, t, r) {
      return t = r ? T : t, t = n && null == t ? n.length : t, fe(n, 128, T, T, T, T, t);
    }

    function uu(n, t) {
      var r;
      if (typeof t != "function") throw new ti("Expected a function");
      return n = Eu(n), function () {
        return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = T), r;
      };
    }

    function iu(n, t, r) {
      return t = r ? T : t, n = fe(n, 8, T, T, T, T, T, t), n.placeholder = iu.placeholder, n;
    }

    function ou(n, t, r) {
      return t = r ? T : t, n = fe(n, 16, T, T, T, T, T, t), n.placeholder = ou.placeholder, n;
    }

    function fu(n, t, r) {
      function e(t) {
        var r = c,
            e = a;
        return c = a = T, _ = t, s = n.apply(e, r);
      }

      function u(n) {
        var r = n - p;
        return n -= _, p === T || r >= t || 0 > r || g && n >= l;
      }

      function i() {
        var n = Go();
        if (u(n)) return o(n);
        var r,
            e = bo;
        r = n - _, n = t - (n - p), r = g ? Ci(n, l - r) : n, h = e(i, r);
      }

      function o(n) {
        return h = T, d && c ? e(n) : (c = a = T, s);
      }

      function f() {
        var n = Go(),
            r = u(n);

        if (c = arguments, a = this, p = n, r) {
          if (h === T) return _ = n = p, h = bo(i, t), v ? e(n) : s;
          if (g) return lo(h), h = bo(i, t), e(p);
        }

        return h === T && (h = bo(i, t)), s;
      }

      var c,
          a,
          l,
          s,
          h,
          p,
          _ = 0,
          v = false,
          g = false,
          d = true;
      if (typeof n != "function") throw new ti("Expected a function");
      return t = Su(t) || 0, du(r) && (v = !!r.leading, l = (g = "maxWait" in r) ? Ui(Su(r.maxWait) || 0, t) : l, d = "trailing" in r ? !!r.trailing : d), f.cancel = function () {
        h !== T && lo(h), _ = 0, c = p = a = h = T;
      }, f.flush = function () {
        return h === T ? s : o(Go());
      }, f;
    }

    function cu(n, t) {
      function r() {
        var e = arguments,
            u = t ? t.apply(this, e) : e[0],
            i = r.cache;
        return i.has(u) ? i.get(u) : (e = n.apply(this, e), r.cache = i.set(u, e) || i, e);
      }

      if (typeof n != "function" || null != t && typeof t != "function") throw new ti("Expected a function");
      return r.cache = new (cu.Cache || Fn)(), r;
    }

    function au(n) {
      if (typeof n != "function") throw new ti("Expected a function");
      return function () {
        var t = arguments;

        switch (t.length) {
          case 0:
            return !n.call(this);

          case 1:
            return !n.call(this, t[0]);

          case 2:
            return !n.call(this, t[0], t[1]);

          case 3:
            return !n.call(this, t[0], t[1], t[2]);
        }

        return !n.apply(this, t);
      };
    }

    function lu(n, t) {
      return n === t || n !== n && t !== t;
    }

    function su(n) {
      return null != n && gu(n.length) && !_u(n);
    }

    function hu(n) {
      return yu(n) && su(n);
    }

    function pu(n) {
      if (!yu(n)) return false;
      var t = Ot(n);
      return "[object Error]" == t || "[object DOMException]" == t || typeof n.message == "string" && typeof n.name == "string" && !xu(n);
    }

    function _u(n) {
      return !!du(n) && (n = Ot(n), "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n);
    }

    function vu(n) {
      return typeof n == "number" && n == Eu(n);
    }

    function gu(n) {
      return typeof n == "number" && -1 < n && 0 == n % 1 && 9007199254740991 >= n;
    }

    function du(n) {
      var t = typeof n;
      return null != n && ("object" == t || "function" == t);
    }

    function yu(n) {
      return null != n && typeof n == "object";
    }

    function bu(n) {
      return typeof n == "number" || yu(n) && "[object Number]" == Ot(n);
    }

    function xu(n) {
      return !(!yu(n) || "[object Object]" != Ot(n)) && (n = di(n), null === n || (n = oi.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && ii.call(n) == li));
    }

    function ju(n) {
      return typeof n == "string" || !ff(n) && yu(n) && "[object String]" == Ot(n);
    }

    function wu(n) {
      return typeof n == "symbol" || yu(n) && "[object Symbol]" == Ot(n);
    }

    function mu(n) {
      if (!n) return [];
      if (su(n)) return ju(n) ? M(n) : Ur(n);

      if (wi && n[wi]) {
        n = n[wi]();

        for (var t, r = []; !(t = n.next()).done;) r.push(t.value);

        return r;
      }

      return t = vo(n), ("[object Map]" == t ? W : "[object Set]" == t ? U : Uu)(n);
    }

    function Au(n) {
      return n ? (n = Su(n), n === $ || n === -$ ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
    }

    function Eu(n) {
      n = Au(n);
      var t = n % 1;
      return n === n ? t ? n - t : n : 0;
    }

    function ku(n) {
      return n ? pt(Eu(n), 0, 4294967295) : 0;
    }

    function Su(n) {
      if (typeof n == "number") return n;
      if (wu(n)) return F;
      if (du(n) && (n = typeof n.valueOf == "function" ? n.valueOf() : n, n = du(n) ? n + "" : n), typeof n != "string") return 0 === n ? n : +n;
      n = n.replace(un, "");
      var t = gn.test(n);
      return t || yn.test(n) ? Dn(n.slice(2), t ? 2 : 8) : vn.test(n) ? F : +n;
    }

    function Ou(n) {
      return Cr(n, Bu(n));
    }

    function Iu(n) {
      return null == n ? "" : yr(n);
    }

    function Ru(n, t, r) {
      return n = null == n ? T : kt(n, t), n === T ? r : n;
    }

    function zu(n, t) {
      return null != n && we(n, t, zt);
    }

    function Wu(n) {
      return su(n) ? qn(n) : Vt(n);
    }

    function Bu(n) {
      if (su(n)) n = qn(n, true);else if (du(n)) {
        var t,
            r = ze(n),
            e = [];

        for (t in n) ("constructor" != t || !r && oi.call(n, t)) && e.push(t);

        n = e;
      } else {
        if (t = [], null != n) for (r in Qu(n)) t.push(r);
        n = t;
      }
      return n;
    }

    function Lu(n, t) {
      if (null == n) return {};
      var r = c(ve(n), function (n) {
        return [n];
      });
      return t = ye(t), tr(n, r, function (n, r) {
        return t(n, r[0]);
      });
    }

    function Uu(n) {
      return null == n ? [] : S(n, Wu(n));
    }

    function Cu(n) {
      return $f(Iu(n).toLowerCase());
    }

    function Du(n) {
      return (n = Iu(n)) && n.replace(xn, Xn).replace(Sn, "");
    }

    function Mu(n, t, r) {
      return n = Iu(n), t = r ? T : t, t === T ? zn.test(n) ? n.match(In) || [] : n.match(sn) || [] : n.match(t) || [];
    }

    function Tu(n) {
      return function () {
        return n;
      };
    }

    function $u(n) {
      return n;
    }

    function Fu(n) {
      return qt(typeof n == "function" ? n : _t(n, 1));
    }

    function Nu(n, t, e) {
      var u = Wu(t),
          i = Et(t, u);
      null != e || du(t) && (i.length || !u.length) || (e = t, t = n, n = this, i = Et(t, Wu(t)));

      var o = !(du(e) && "chain" in e && !e.chain),
          f = _u(n);

      return r(i, function (r) {
        var e = t[r];
        n[r] = e, f && (n.prototype[r] = function () {
          var t = this.__chain__;

          if (o || t) {
            var r = n(this.__wrapped__);
            return (r.__actions__ = Ur(this.__actions__)).push({
              func: e,
              args: arguments,
              thisArg: n
            }), r.__chain__ = t, r;
          }

          return e.apply(n, a([this.value()], arguments));
        });
      }), n;
    }

    function Pu() {}

    function Zu(n) {
      return Ie(n) ? b(Me(n)) : rr(n);
    }

    function qu() {
      return [];
    }

    function Vu() {
      return false;
    }

    mn = null == mn ? $n : rt.defaults($n.Object(), mn, rt.pick($n, Wn));

    var Ku = mn.Array,
        Gu = mn.Date,
        Hu = mn.Error,
        Ju = mn.Function,
        Yu = mn.Math,
        Qu = mn.Object,
        Xu = mn.RegExp,
        ni = mn.String,
        ti = mn.TypeError,
        ri = Ku.prototype,
        ei = Qu.prototype,
        ui = mn["__core-js_shared__"],
        ii = Ju.prototype.toString,
        oi = ei.hasOwnProperty,
        fi = 0,
        ci = function () {
      var n = /[^.]+$/.exec(ui && ui.keys && ui.keys.IE_PROTO || "");
      return n ? "Symbol(src)_1." + n : "";
    }(),
        ai = ei.toString,
        li = ii.call(Qu),
        si = $n._,
        hi = Xu("^" + ii.call(oi).replace(rn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        pi = Pn ? mn.Buffer : T,
        _i = mn.Symbol,
        vi = mn.Uint8Array,
        gi = pi ? pi.g : T,
        di = B(Qu.getPrototypeOf, Qu),
        yi = Qu.create,
        bi = ei.propertyIsEnumerable,
        xi = ri.splice,
        ji = _i ? _i.isConcatSpreadable : T,
        wi = _i ? _i.iterator : T,
        mi = _i ? _i.toStringTag : T,
        Ai = function () {
      try {
        var n = je(Qu, "defineProperty");
        return n({}, "", {}), n;
      } catch (n) {}
    }(),
        Ei = mn.clearTimeout !== $n.clearTimeout && mn.clearTimeout,
        ki = Gu && Gu.now !== $n.Date.now && Gu.now,
        Si = mn.setTimeout !== $n.setTimeout && mn.setTimeout,
        Oi = Yu.ceil,
        Ii = Yu.floor,
        Ri = Qu.getOwnPropertySymbols,
        zi = pi ? pi.isBuffer : T,
        Wi = mn.isFinite,
        Bi = ri.join,
        Li = B(Qu.keys, Qu),
        Ui = Yu.max,
        Ci = Yu.min,
        Di = Gu.now,
        Mi = mn.parseInt,
        Ti = Yu.random,
        $i = ri.reverse,
        Fi = je(mn, "DataView"),
        Ni = je(mn, "Map"),
        Pi = je(mn, "Promise"),
        Zi = je(mn, "Set"),
        qi = je(mn, "WeakMap"),
        Vi = je(Qu, "create"),
        Ki = qi && new qi(),
        Gi = {},
        Hi = Te(Fi),
        Ji = Te(Ni),
        Yi = Te(Pi),
        Qi = Te(Zi),
        Xi = Te(qi),
        no = _i ? _i.prototype : T,
        to = no ? no.valueOf : T,
        ro = no ? no.toString : T,
        eo = function () {
      function n() {}

      return function (t) {
        return du(t) ? yi ? yi(t) : (n.prototype = t, t = new n(), n.prototype = T, t) : {};
      };
    }();

    An.templateSettings = {
      escape: J,
      evaluate: Y,
      interpolate: Q,
      variable: "",
      imports: {
        _: An
      }
    }, An.prototype = En.prototype, An.prototype.constructor = An, On.prototype = eo(En.prototype), On.prototype.constructor = On, Un.prototype = eo(En.prototype), Un.prototype.constructor = Un, Mn.prototype.clear = function () {
      this.__data__ = Vi ? Vi(null) : {}, this.size = 0;
    }, Mn.prototype.delete = function (n) {
      return n = this.has(n) && delete this.__data__[n], this.size -= n ? 1 : 0, n;
    }, Mn.prototype.get = function (n) {
      var t = this.__data__;
      return Vi ? (n = t[n], "__lodash_hash_undefined__" === n ? T : n) : oi.call(t, n) ? t[n] : T;
    }, Mn.prototype.has = function (n) {
      var t = this.__data__;
      return Vi ? t[n] !== T : oi.call(t, n);
    }, Mn.prototype.set = function (n, t) {
      var r = this.__data__;
      return this.size += this.has(n) ? 0 : 1, r[n] = Vi && t === T ? "__lodash_hash_undefined__" : t, this;
    }, Tn.prototype.clear = function () {
      this.__data__ = [], this.size = 0;
    }, Tn.prototype.delete = function (n) {
      var t = this.__data__;
      return n = ft(t, n), !(0 > n) && (n == t.length - 1 ? t.pop() : xi.call(t, n, 1), --this.size, true);
    }, Tn.prototype.get = function (n) {
      var t = this.__data__;
      return n = ft(t, n), 0 > n ? T : t[n][1];
    }, Tn.prototype.has = function (n) {
      return -1 < ft(this.__data__, n);
    }, Tn.prototype.set = function (n, t) {
      var r = this.__data__,
          e = ft(r, n);
      return 0 > e ? (++this.size, r.push([n, t])) : r[e][1] = t, this;
    }, Fn.prototype.clear = function () {
      this.size = 0, this.__data__ = {
        hash: new Mn(),
        map: new (Ni || Tn)(),
        string: new Mn()
      };
    }, Fn.prototype.delete = function (n) {
      return n = be(this, n).delete(n), this.size -= n ? 1 : 0, n;
    }, Fn.prototype.get = function (n) {
      return be(this, n).get(n);
    }, Fn.prototype.has = function (n) {
      return be(this, n).has(n);
    }, Fn.prototype.set = function (n, t) {
      var r = be(this, n),
          e = r.size;
      return r.set(n, t), this.size += r.size == e ? 0 : 1, this;
    }, Nn.prototype.add = Nn.prototype.push = function (n) {
      return this.__data__.set(n, "__lodash_hash_undefined__"), this;
    }, Nn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Zn.prototype.clear = function () {
      this.__data__ = new Tn(), this.size = 0;
    }, Zn.prototype.delete = function (n) {
      var t = this.__data__;
      return n = t.delete(n), this.size = t.size, n;
    }, Zn.prototype.get = function (n) {
      return this.__data__.get(n);
    }, Zn.prototype.has = function (n) {
      return this.__data__.has(n);
    }, Zn.prototype.set = function (n, t) {
      var r = this.__data__;

      if (r instanceof Tn) {
        var e = r.__data__;
        if (!Ni || 199 > e.length) return e.push([n, t]), this.size = ++r.size, this;
        r = this.__data__ = new Fn(e);
      }

      return r.set(n, t), this.size = r.size, this;
    };

    var uo = Fr(mt),
        io = Fr(At, true),
        oo = Nr(),
        fo = Nr(true),
        co = Ki ? function (n, t) {
      return Ki.set(n, t), n;
    } : $u,
        ao = Ai ? function (n, t) {
      return Ai(n, "toString", {
        configurable: true,
        enumerable: false,
        value: Tu(t),
        writable: true
      });
    } : $u,
        lo = Ei || function (n) {
      return $n.clearTimeout(n);
    },
        so = Zi && 1 / U(new Zi([, -0]))[1] == $ ? function (n) {
      return new Zi(n);
    } : Pu,
        ho = Ki ? function (n) {
      return Ki.get(n);
    } : Pu,
        po = Ri ? function (n) {
      return null == n ? [] : (n = Qu(n), i(Ri(n), function (t) {
        return bi.call(n, t);
      }));
    } : qu,
        _o = Ri ? function (n) {
      for (var t = []; n;) a(t, po(n)), n = di(n);

      return t;
    } : qu,
        vo = Ot;

    (Fi && "[object DataView]" != vo(new Fi(new ArrayBuffer(1))) || Ni && "[object Map]" != vo(new Ni()) || Pi && "[object Promise]" != vo(Pi.resolve()) || Zi && "[object Set]" != vo(new Zi()) || qi && "[object WeakMap]" != vo(new qi())) && (vo = function (n) {
      var t = Ot(n);
      if (n = (n = "[object Object]" == t ? n.constructor : T) ? Te(n) : "") switch (n) {
        case Hi:
          return "[object DataView]";

        case Ji:
          return "[object Map]";

        case Yi:
          return "[object Promise]";

        case Qi:
          return "[object Set]";

        case Xi:
          return "[object WeakMap]";
      }
      return t;
    });

    var go = ui ? _u : Vu,
        yo = Ce(co),
        bo = Si || function (n, t) {
      return $n.setTimeout(n, t);
    },
        xo = Ce(ao),
        jo = function (n) {
      n = cu(n, function (n) {
        return 500 === t.size && t.clear(), n;
      });
      var t = n.cache;
      return n;
    }(function (n) {
      var t = [];
      return 46 === n.charCodeAt(0) && t.push(""), n.replace(tn, function (n, r, e, u) {
        t.push(e ? u.replace(hn, "$1") : r || n);
      }), t;
    }),
        wo = fr(function (n, t) {
      return hu(n) ? yt(n, wt(t, 1, hu, true)) : [];
    }),
        mo = fr(function (n, t) {
      var r = Ve(t);
      return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), ye(r, 2)) : [];
    }),
        Ao = fr(function (n, t) {
      var r = Ve(t);
      return hu(r) && (r = T), hu(n) ? yt(n, wt(t, 1, hu, true), T, r) : [];
    }),
        Eo = fr(function (n) {
      var t = c(n, Er);
      return t.length && t[0] === n[0] ? Wt(t) : [];
    }),
        ko = fr(function (n) {
      var t = Ve(n),
          r = c(n, Er);
      return t === Ve(r) ? t = T : r.pop(), r.length && r[0] === n[0] ? Wt(r, ye(t, 2)) : [];
    }),
        So = fr(function (n) {
      var t = Ve(n),
          r = c(n, Er);
      return (t = typeof t == "function" ? t : T) && r.pop(), r.length && r[0] === n[0] ? Wt(r, T, t) : [];
    }),
        Oo = fr(Ke),
        Io = pe(function (n, t) {
      var r = null == n ? 0 : n.length,
          e = ht(n, t);
      return ur(n, c(t, function (n) {
        return Se(n, r) ? +n : n;
      }).sort(Wr)), e;
    }),
        Ro = fr(function (n) {
      return br(wt(n, 1, hu, true));
    }),
        zo = fr(function (n) {
      var t = Ve(n);
      return hu(t) && (t = T), br(wt(n, 1, hu, true), ye(t, 2));
    }),
        Wo = fr(function (n) {
      var t = Ve(n),
          t = typeof t == "function" ? t : T;
      return br(wt(n, 1, hu, true), T, t);
    }),
        Bo = fr(function (n, t) {
      return hu(n) ? yt(n, t) : [];
    }),
        Lo = fr(function (n) {
      return mr(i(n, hu));
    }),
        Uo = fr(function (n) {
      var t = Ve(n);
      return hu(t) && (t = T), mr(i(n, hu), ye(t, 2));
    }),
        Co = fr(function (n) {
      var t = Ve(n),
          t = typeof t == "function" ? t : T;
      return mr(i(n, hu), T, t);
    }),
        Do = fr(He),
        Mo = fr(function (n) {
      var t = n.length,
          t = 1 < t ? n[t - 1] : T,
          t = typeof t == "function" ? (n.pop(), t) : T;
      return Je(n, t);
    }),
        To = pe(function (n) {
      function t(t) {
        return ht(t, n);
      }

      var r = n.length,
          e = r ? n[0] : 0,
          u = this.__wrapped__;
      return !(1 < r || this.__actions__.length) && u instanceof Un && Se(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
        func: Qe,
        args: [t],
        thisArg: T
      }), new On(u, this.__chain__).thru(function (n) {
        return r && !n.length && n.push(T), n;
      })) : this.thru(t);
    }),
        $o = Tr(function (n, t, r) {
      oi.call(n, r) ? ++n[r] : st(n, r, 1);
    }),
        Fo = Gr(Ne),
        No = Gr(Pe),
        Po = Tr(function (n, t, r) {
      oi.call(n, r) ? n[r].push(t) : st(n, r, [t]);
    }),
        Zo = fr(function (t, r, e) {
      var u = -1,
          i = typeof r == "function",
          o = su(t) ? Ku(t.length) : [];
      return uo(t, function (t) {
        o[++u] = i ? n(r, t, e) : Lt(t, r, e);
      }), o;
    }),
        qo = Tr(function (n, t, r) {
      st(n, r, t);
    }),
        Vo = Tr(function (n, t, r) {
      n[r ? 0 : 1].push(t);
    }, function () {
      return [[], []];
    }),
        Ko = fr(function (n, t) {
      if (null == n) return [];
      var r = t.length;
      return 1 < r && Oe(n, t[0], t[1]) ? t = [] : 2 < r && Oe(t[0], t[1], t[2]) && (t = [t[0]]), Xt(n, wt(t, 1), []);
    }),
        Go = ki || function () {
      return $n.Date.now();
    },
        Ho = fr(function (n, t, r) {
      var e = 1;
      if (r.length) var u = L(r, de(Ho)),
          e = 32 | e;
      return fe(n, e, t, r, u);
    }),
        Jo = fr(function (n, t, r) {
      var e = 3;
      if (r.length) var u = L(r, de(Jo)),
          e = 32 | e;
      return fe(t, e, n, r, u);
    }),
        Yo = fr(function (n, t) {
      return dt(n, 1, t);
    }),
        Qo = fr(function (n, t, r) {
      return dt(n, Su(t) || 0, r);
    });

    cu.Cache = Fn;

    var Xo = fr(function (t, r) {
      r = 1 == r.length && ff(r[0]) ? c(r[0], k(ye())) : c(wt(r, 1), k(ye()));
      var e = r.length;
      return fr(function (u) {
        for (var i = -1, o = Ci(u.length, e); ++i < o;) u[i] = r[i].call(this, u[i]);

        return n(t, this, u);
      });
    }),
        nf = fr(function (n, t) {
      return fe(n, 32, T, t, L(t, de(nf)));
    }),
        tf = fr(function (n, t) {
      return fe(n, 64, T, t, L(t, de(tf)));
    }),
        rf = pe(function (n, t) {
      return fe(n, 256, T, T, T, t);
    }),
        ef = ee(It),
        uf = ee(function (n, t) {
      return n >= t;
    }),
        of = Ut(function () {
      return arguments;
    }()) ? Ut : function (n) {
      return yu(n) && oi.call(n, "callee") && !bi.call(n, "callee");
    },
        ff = Ku.isArray,
        cf = Vn ? k(Vn) : Ct,
        af = zi || Vu,
        lf = Kn ? k(Kn) : Dt,
        sf = Gn ? k(Gn) : Tt,
        hf = Hn ? k(Hn) : Nt,
        pf = Jn ? k(Jn) : Pt,
        _f = Yn ? k(Yn) : Zt,
        vf = ee(Kt),
        gf = ee(function (n, t) {
      return n <= t;
    }),
        df = $r(function (n, t) {
      if (ze(t) || su(t)) Cr(t, Wu(t), n);else for (var r in t) oi.call(t, r) && ot(n, r, t[r]);
    }),
        yf = $r(function (n, t) {
      Cr(t, Bu(t), n);
    }),
        bf = $r(function (n, t, r, e) {
      Cr(t, Bu(t), n, e);
    }),
        xf = $r(function (n, t, r, e) {
      Cr(t, Wu(t), n, e);
    }),
        jf = pe(ht),
        wf = fr(function (n, t) {
      n = Qu(n);
      var r = -1,
          e = t.length,
          u = 2 < e ? t[2] : T;

      for (u && Oe(t[0], t[1], u) && (e = 1); ++r < e;) for (var u = t[r], i = Bu(u), o = -1, f = i.length; ++o < f;) {
        var c = i[o],
            a = n[c];
        (a === T || lu(a, ei[c]) && !oi.call(n, c)) && (n[c] = u[c]);
      }

      return n;
    }),
        mf = fr(function (t) {
      return t.push(T, ae), n(Of, T, t);
    }),
        Af = Yr(function (n, t, r) {
      null != t && typeof t.toString != "function" && (t = ai.call(t)), n[t] = r;
    }, Tu($u)),
        Ef = Yr(function (n, t, r) {
      null != t && typeof t.toString != "function" && (t = ai.call(t)), oi.call(n, t) ? n[t].push(r) : n[t] = [r];
    }, ye),
        kf = fr(Lt),
        Sf = $r(function (n, t, r) {
      Yt(n, t, r);
    }),
        Of = $r(function (n, t, r, e) {
      Yt(n, t, r, e);
    }),
        If = pe(function (n, t) {
      var r = {};
      if (null == n) return r;
      var e = false;
      t = c(t, function (t) {
        return t = Sr(t, n), e || (e = 1 < t.length), t;
      }), Cr(n, ve(n), r), e && (r = _t(r, 7, le));

      for (var u = t.length; u--;) xr(r, t[u]);

      return r;
    }),
        Rf = pe(function (n, t) {
      return null == n ? {} : nr(n, t);
    }),
        zf = oe(Wu),
        Wf = oe(Bu),
        Bf = qr(function (n, t, r) {
      return t = t.toLowerCase(), n + (r ? Cu(t) : t);
    }),
        Lf = qr(function (n, t, r) {
      return n + (r ? "-" : "") + t.toLowerCase();
    }),
        Uf = qr(function (n, t, r) {
      return n + (r ? " " : "") + t.toLowerCase();
    }),
        Cf = Zr("toLowerCase"),
        Df = qr(function (n, t, r) {
      return n + (r ? "_" : "") + t.toLowerCase();
    }),
        Mf = qr(function (n, t, r) {
      return n + (r ? " " : "") + $f(t);
    }),
        Tf = qr(function (n, t, r) {
      return n + (r ? " " : "") + t.toUpperCase();
    }),
        $f = Zr("toUpperCase"),
        Ff = fr(function (t, r) {
      try {
        return n(t, T, r);
      } catch (n) {
        return pu(n) ? n : new Hu(n);
      }
    }),
        Nf = pe(function (n, t) {
      return r(t, function (t) {
        t = Me(t), st(n, t, Ho(n[t], n));
      }), n;
    }),
        Pf = Hr(),
        Zf = Hr(true),
        qf = fr(function (n, t) {
      return function (r) {
        return Lt(r, n, t);
      };
    }),
        Vf = fr(function (n, t) {
      return function (r) {
        return Lt(n, r, t);
      };
    }),
        Kf = Xr(c),
        Gf = Xr(u),
        Hf = Xr(h),
        Jf = re(),
        Yf = re(true),
        Qf = Qr(function (n, t) {
      return n + t;
    }, 0),
        Xf = ie("ceil"),
        nc = Qr(function (n, t) {
      return n / t;
    }, 1),
        tc = ie("floor"),
        rc = Qr(function (n, t) {
      return n * t;
    }, 1),
        ec = ie("round"),
        uc = Qr(function (n, t) {
      return n - t;
    }, 0);

    return An.after = function (n, t) {
      if (typeof t != "function") throw new ti("Expected a function");
      return n = Eu(n), function () {
        if (1 > --n) return t.apply(this, arguments);
      };
    }, An.ary = eu, An.assign = df, An.assignIn = yf, An.assignInWith = bf, An.assignWith = xf, An.at = jf, An.before = uu, An.bind = Ho, An.bindAll = Nf, An.bindKey = Jo, An.castArray = function () {
      if (!arguments.length) return [];
      var n = arguments[0];
      return ff(n) ? n : [n];
    }, An.chain = Ye, An.chunk = function (n, t, r) {
      if (t = (r ? Oe(n, t, r) : t === T) ? 1 : Ui(Eu(t), 0), r = null == n ? 0 : n.length, !r || 1 > t) return [];

      for (var e = 0, u = 0, i = Ku(Oi(r / t)); e < r;) i[u++] = hr(n, e, e += t);

      return i;
    }, An.compact = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = 0, u = []; ++t < r;) {
        var i = n[t];
        i && (u[e++] = i);
      }

      return u;
    }, An.concat = function () {
      var n = arguments.length;
      if (!n) return [];

      for (var t = Ku(n - 1), r = arguments[0]; n--;) t[n - 1] = arguments[n];

      return a(ff(r) ? Ur(r) : [r], wt(t, 1));
    }, An.cond = function (t) {
      var r = null == t ? 0 : t.length,
          e = ye();
      return t = r ? c(t, function (n) {
        if ("function" != typeof n[1]) throw new ti("Expected a function");
        return [e(n[0]), n[1]];
      }) : [], fr(function (e) {
        for (var u = -1; ++u < r;) {
          var i = t[u];
          if (n(i[0], this, e)) return n(i[1], this, e);
        }
      });
    }, An.conforms = function (n) {
      return vt(_t(n, 1));
    }, An.constant = Tu, An.countBy = $o, An.create = function (n, t) {
      var r = eo(n);
      return null == t ? r : at(r, t);
    }, An.curry = iu, An.curryRight = ou, An.debounce = fu, An.defaults = wf, An.defaultsDeep = mf, An.defer = Yo, An.delay = Qo, An.difference = wo, An.differenceBy = mo, An.differenceWith = Ao, An.drop = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (t = r || t === T ? 1 : Eu(t), hr(n, 0 > t ? 0 : t, e)) : [];
    }, An.dropRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (t = r || t === T ? 1 : Eu(t), t = e - t, hr(n, 0, 0 > t ? 0 : t)) : [];
    }, An.dropRightWhile = function (n, t) {
      return n && n.length ? jr(n, ye(t, 3), true, true) : [];
    }, An.dropWhile = function (n, t) {
      return n && n.length ? jr(n, ye(t, 3), true) : [];
    }, An.fill = function (n, t, r, e) {
      var u = null == n ? 0 : n.length;
      if (!u) return [];

      for (r && typeof r != "number" && Oe(n, t, r) && (r = 0, e = u), u = n.length, r = Eu(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === T || e > u ? u : Eu(e), 0 > e && (e += u), e = r > e ? 0 : ku(e); r < e;) n[r++] = t;

      return n;
    }, An.filter = function (n, t) {
      return (ff(n) ? i : jt)(n, ye(t, 3));
    }, An.flatMap = function (n, t) {
      return wt(ru(n, t), 1);
    }, An.flatMapDeep = function (n, t) {
      return wt(ru(n, t), $);
    }, An.flatMapDepth = function (n, t, r) {
      return r = r === T ? 1 : Eu(r), wt(ru(n, t), r);
    }, An.flatten = Ze, An.flattenDeep = function (n) {
      return (null == n ? 0 : n.length) ? wt(n, $) : [];
    }, An.flattenDepth = function (n, t) {
      return null != n && n.length ? (t = t === T ? 1 : Eu(t), wt(n, t)) : [];
    }, An.flip = function (n) {
      return fe(n, 512);
    }, An.flow = Pf, An.flowRight = Zf, An.fromPairs = function (n) {
      for (var t = -1, r = null == n ? 0 : n.length, e = {}; ++t < r;) {
        var u = n[t];
        e[u[0]] = u[1];
      }

      return e;
    }, An.functions = function (n) {
      return null == n ? [] : Et(n, Wu(n));
    }, An.functionsIn = function (n) {
      return null == n ? [] : Et(n, Bu(n));
    }, An.groupBy = Po, An.initial = function (n) {
      return (null == n ? 0 : n.length) ? hr(n, 0, -1) : [];
    }, An.intersection = Eo, An.intersectionBy = ko, An.intersectionWith = So, An.invert = Af, An.invertBy = Ef, An.invokeMap = Zo, An.iteratee = Fu, An.keyBy = qo, An.keys = Wu, An.keysIn = Bu, An.map = ru, An.mapKeys = function (n, t) {
      var r = {};
      return t = ye(t, 3), mt(n, function (n, e, u) {
        st(r, t(n, e, u), n);
      }), r;
    }, An.mapValues = function (n, t) {
      var r = {};
      return t = ye(t, 3), mt(n, function (n, e, u) {
        st(r, e, t(n, e, u));
      }), r;
    }, An.matches = function (n) {
      return Ht(_t(n, 1));
    }, An.matchesProperty = function (n, t) {
      return Jt(n, _t(t, 1));
    }, An.memoize = cu, An.merge = Sf, An.mergeWith = Of, An.method = qf, An.methodOf = Vf, An.mixin = Nu, An.negate = au, An.nthArg = function (n) {
      return n = Eu(n), fr(function (t) {
        return Qt(t, n);
      });
    }, An.omit = If, An.omitBy = function (n, t) {
      return Lu(n, au(ye(t)));
    }, An.once = function (n) {
      return uu(2, n);
    }, An.orderBy = function (n, t, r, e) {
      return null == n ? [] : (ff(t) || (t = null == t ? [] : [t]), r = e ? T : r, ff(r) || (r = null == r ? [] : [r]), Xt(n, t, r));
    }, An.over = Kf, An.overArgs = Xo, An.overEvery = Gf, An.overSome = Hf, An.partial = nf, An.partialRight = tf, An.partition = Vo, An.pick = Rf, An.pickBy = Lu, An.property = Zu, An.propertyOf = function (n) {
      return function (t) {
        return null == n ? T : kt(n, t);
      };
    }, An.pull = Oo, An.pullAll = Ke, An.pullAllBy = function (n, t, r) {
      return n && n.length && t && t.length ? er(n, t, ye(r, 2)) : n;
    }, An.pullAllWith = function (n, t, r) {
      return n && n.length && t && t.length ? er(n, t, T, r) : n;
    }, An.pullAt = Io, An.range = Jf, An.rangeRight = Yf, An.rearg = rf, An.reject = function (n, t) {
      return (ff(n) ? i : jt)(n, au(ye(t, 3)));
    }, An.remove = function (n, t) {
      var r = [];
      if (!n || !n.length) return r;
      var e = -1,
          u = [],
          i = n.length;

      for (t = ye(t, 3); ++e < i;) {
        var o = n[e];
        t(o, e, n) && (r.push(o), u.push(e));
      }

      return ur(n, u), r;
    }, An.rest = function (n, t) {
      if (typeof n != "function") throw new ti("Expected a function");
      return t = t === T ? t : Eu(t), fr(n, t);
    }, An.reverse = Ge, An.sampleSize = function (n, t, r) {
      return t = (r ? Oe(n, t, r) : t === T) ? 1 : Eu(t), (ff(n) ? et : ar)(n, t);
    }, An.set = function (n, t, r) {
      return null == n ? n : lr(n, t, r);
    }, An.setWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : T, null == n ? n : lr(n, t, r, e);
    }, An.shuffle = function (n) {
      return (ff(n) ? ut : sr)(n);
    }, An.slice = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (r && typeof r != "number" && Oe(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Eu(t), r = r === T ? e : Eu(r)), hr(n, t, r)) : [];
    }, An.sortBy = Ko, An.sortedUniq = function (n) {
      return n && n.length ? gr(n) : [];
    }, An.sortedUniqBy = function (n, t) {
      return n && n.length ? gr(n, ye(t, 2)) : [];
    }, An.split = function (n, t, r) {
      return r && typeof r != "number" && Oe(n, t, r) && (t = r = T), r = r === T ? 4294967295 : r >>> 0, r ? (n = Iu(n)) && (typeof t == "string" || null != t && !hf(t)) && (t = yr(t), !t && Rn.test(n)) ? Or(M(n), 0, r) : n.split(t, r) : [];
    }, An.spread = function (t, r) {
      if (typeof t != "function") throw new ti("Expected a function");
      return r = null == r ? 0 : Ui(Eu(r), 0), fr(function (e) {
        var u = e[r];
        return e = Or(e, 0, r), u && a(e, u), n(t, this, e);
      });
    }, An.tail = function (n) {
      var t = null == n ? 0 : n.length;
      return t ? hr(n, 1, t) : [];
    }, An.take = function (n, t, r) {
      return n && n.length ? (t = r || t === T ? 1 : Eu(t), hr(n, 0, 0 > t ? 0 : t)) : [];
    }, An.takeRight = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (t = r || t === T ? 1 : Eu(t), t = e - t, hr(n, 0 > t ? 0 : t, e)) : [];
    }, An.takeRightWhile = function (n, t) {
      return n && n.length ? jr(n, ye(t, 3), false, true) : [];
    }, An.takeWhile = function (n, t) {
      return n && n.length ? jr(n, ye(t, 3)) : [];
    }, An.tap = function (n, t) {
      return t(n), n;
    }, An.throttle = function (n, t, r) {
      var e = true,
          u = true;
      if (typeof n != "function") throw new ti("Expected a function");
      return du(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), fu(n, t, {
        leading: e,
        maxWait: t,
        trailing: u
      });
    }, An.thru = Qe, An.toArray = mu, An.toPairs = zf, An.toPairsIn = Wf, An.toPath = function (n) {
      return ff(n) ? c(n, Me) : wu(n) ? [n] : Ur(jo(Iu(n)));
    }, An.toPlainObject = Ou, An.transform = function (n, t, e) {
      var u = ff(n),
          i = u || af(n) || _f(n);

      if (t = ye(t, 4), null == e) {
        var o = n && n.constructor;
        e = i ? u ? new o() : [] : du(n) && _u(o) ? eo(di(n)) : {};
      }

      return (i ? r : mt)(n, function (n, r, u) {
        return t(e, n, r, u);
      }), e;
    }, An.unary = function (n) {
      return eu(n, 1);
    }, An.union = Ro, An.unionBy = zo, An.unionWith = Wo, An.uniq = function (n) {
      return n && n.length ? br(n) : [];
    }, An.uniqBy = function (n, t) {
      return n && n.length ? br(n, ye(t, 2)) : [];
    }, An.uniqWith = function (n, t) {
      return t = typeof t == "function" ? t : T, n && n.length ? br(n, T, t) : [];
    }, An.unset = function (n, t) {
      return null == n || xr(n, t);
    }, An.unzip = He, An.unzipWith = Je, An.update = function (n, t, r) {
      return null == n ? n : lr(n, t, kr(r)(kt(n, t)), void 0);
    }, An.updateWith = function (n, t, r, e) {
      return e = typeof e == "function" ? e : T, null != n && (n = lr(n, t, kr(r)(kt(n, t)), e)), n;
    }, An.values = Uu, An.valuesIn = function (n) {
      return null == n ? [] : S(n, Bu(n));
    }, An.without = Bo, An.words = Mu, An.wrap = function (n, t) {
      return nf(kr(t), n);
    }, An.xor = Lo, An.xorBy = Uo, An.xorWith = Co, An.zip = Do, An.zipObject = function (n, t) {
      return Ar(n || [], t || [], ot);
    }, An.zipObjectDeep = function (n, t) {
      return Ar(n || [], t || [], lr);
    }, An.zipWith = Mo, An.entries = zf, An.entriesIn = Wf, An.extend = yf, An.extendWith = bf, Nu(An, An), An.add = Qf, An.attempt = Ff, An.camelCase = Bf, An.capitalize = Cu, An.ceil = Xf, An.clamp = function (n, t, r) {
      return r === T && (r = t, t = T), r !== T && (r = Su(r), r = r === r ? r : 0), t !== T && (t = Su(t), t = t === t ? t : 0), pt(Su(n), t, r);
    }, An.clone = function (n) {
      return _t(n, 4);
    }, An.cloneDeep = function (n) {
      return _t(n, 5);
    }, An.cloneDeepWith = function (n, t) {
      return t = typeof t == "function" ? t : T, _t(n, 5, t);
    }, An.cloneWith = function (n, t) {
      return t = typeof t == "function" ? t : T, _t(n, 4, t);
    }, An.conformsTo = function (n, t) {
      return null == t || gt(n, t, Wu(t));
    }, An.deburr = Du, An.defaultTo = function (n, t) {
      return null == n || n !== n ? t : n;
    }, An.divide = nc, An.endsWith = function (n, t, r) {
      n = Iu(n), t = yr(t);
      var e = n.length,
          e = r = r === T ? e : pt(Eu(r), 0, e);
      return r -= t.length, 0 <= r && n.slice(r, e) == t;
    }, An.eq = lu, An.escape = function (n) {
      return (n = Iu(n)) && H.test(n) ? n.replace(K, nt) : n;
    }, An.escapeRegExp = function (n) {
      return (n = Iu(n)) && en.test(n) ? n.replace(rn, "\\$&") : n;
    }, An.every = function (n, t, r) {
      var e = ff(n) ? u : bt;
      return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
    }, An.find = Fo, An.findIndex = Ne, An.findKey = function (n, t) {
      return p(n, ye(t, 3), mt);
    }, An.findLast = No, An.findLastIndex = Pe, An.findLastKey = function (n, t) {
      return p(n, ye(t, 3), At);
    }, An.floor = tc, An.forEach = nu, An.forEachRight = tu, An.forIn = function (n, t) {
      return null == n ? n : oo(n, ye(t, 3), Bu);
    }, An.forInRight = function (n, t) {
      return null == n ? n : fo(n, ye(t, 3), Bu);
    }, An.forOwn = function (n, t) {
      return n && mt(n, ye(t, 3));
    }, An.forOwnRight = function (n, t) {
      return n && At(n, ye(t, 3));
    }, An.get = Ru, An.gt = ef, An.gte = uf, An.has = function (n, t) {
      return null != n && we(n, t, Rt);
    }, An.hasIn = zu, An.head = qe, An.identity = $u, An.includes = function (n, t, r, e) {
      return n = su(n) ? n : Uu(n), r = r && !e ? Eu(r) : 0, e = n.length, 0 > r && (r = Ui(e + r, 0)), ju(n) ? r <= e && -1 < n.indexOf(t, r) : !!e && -1 < v(n, t, r);
    }, An.indexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      return e ? (r = null == r ? 0 : Eu(r), 0 > r && (r = Ui(e + r, 0)), v(n, t, r)) : -1;
    }, An.inRange = function (n, t, r) {
      return t = Au(t), r === T ? (r = t, t = 0) : r = Au(r), n = Su(n), n >= Ci(t, r) && n < Ui(t, r);
    }, An.invoke = kf, An.isArguments = of, An.isArray = ff, An.isArrayBuffer = cf, An.isArrayLike = su, An.isArrayLikeObject = hu, An.isBoolean = function (n) {
      return true === n || false === n || yu(n) && "[object Boolean]" == Ot(n);
    }, An.isBuffer = af, An.isDate = lf, An.isElement = function (n) {
      return yu(n) && 1 === n.nodeType && !xu(n);
    }, An.isEmpty = function (n) {
      if (null == n) return true;
      if (su(n) && (ff(n) || typeof n == "string" || typeof n.splice == "function" || af(n) || _f(n) || of(n))) return !n.length;
      var t = vo(n);
      if ("[object Map]" == t || "[object Set]" == t) return !n.size;
      if (ze(n)) return !Vt(n).length;

      for (var r in n) if (oi.call(n, r)) return false;

      return true;
    }, An.isEqual = function (n, t) {
      return Mt(n, t);
    }, An.isEqualWith = function (n, t, r) {
      var e = (r = typeof r == "function" ? r : T) ? r(n, t) : T;
      return e === T ? Mt(n, t, T, r) : !!e;
    }, An.isError = pu, An.isFinite = function (n) {
      return typeof n == "number" && Wi(n);
    }, An.isFunction = _u, An.isInteger = vu, An.isLength = gu, An.isMap = sf, An.isMatch = function (n, t) {
      return n === t || $t(n, t, xe(t));
    }, An.isMatchWith = function (n, t, r) {
      return r = typeof r == "function" ? r : T, $t(n, t, xe(t), r);
    }, An.isNaN = function (n) {
      return bu(n) && n != +n;
    }, An.isNative = function (n) {
      if (go(n)) throw new Hu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
      return Ft(n);
    }, An.isNil = function (n) {
      return null == n;
    }, An.isNull = function (n) {
      return null === n;
    }, An.isNumber = bu, An.isObject = du, An.isObjectLike = yu, An.isPlainObject = xu, An.isRegExp = hf, An.isSafeInteger = function (n) {
      return vu(n) && -9007199254740991 <= n && 9007199254740991 >= n;
    }, An.isSet = pf, An.isString = ju, An.isSymbol = wu, An.isTypedArray = _f, An.isUndefined = function (n) {
      return n === T;
    }, An.isWeakMap = function (n) {
      return yu(n) && "[object WeakMap]" == vo(n);
    }, An.isWeakSet = function (n) {
      return yu(n) && "[object WeakSet]" == Ot(n);
    }, An.join = function (n, t) {
      return null == n ? "" : Bi.call(n, t);
    }, An.kebabCase = Lf, An.last = Ve, An.lastIndexOf = function (n, t, r) {
      var e = null == n ? 0 : n.length;
      if (!e) return -1;
      var u = e;

      if (r !== T && (u = Eu(r), u = 0 > u ? Ui(e + u, 0) : Ci(u, e - 1)), t === t) {
        for (r = u + 1; r-- && n[r] !== t;);

        n = r;
      } else n = _(n, d, u, true);

      return n;
    }, An.lowerCase = Uf, An.lowerFirst = Cf, An.lt = vf, An.lte = gf, An.max = function (n) {
      return n && n.length ? xt(n, $u, It) : T;
    }, An.maxBy = function (n, t) {
      return n && n.length ? xt(n, ye(t, 2), It) : T;
    }, An.mean = function (n) {
      return y(n, $u);
    }, An.meanBy = function (n, t) {
      return y(n, ye(t, 2));
    }, An.min = function (n) {
      return n && n.length ? xt(n, $u, Kt) : T;
    }, An.minBy = function (n, t) {
      return n && n.length ? xt(n, ye(t, 2), Kt) : T;
    }, An.stubArray = qu, An.stubFalse = Vu, An.stubObject = function () {
      return {};
    }, An.stubString = function () {
      return "";
    }, An.stubTrue = function () {
      return true;
    }, An.multiply = rc, An.nth = function (n, t) {
      return n && n.length ? Qt(n, Eu(t)) : T;
    }, An.noConflict = function () {
      return $n._ === this && ($n._ = si), this;
    }, An.noop = Pu, An.now = Go, An.pad = function (n, t, r) {
      n = Iu(n);
      var e = (t = Eu(t)) ? D(n) : 0;
      return !t || e >= t ? n : (t = (t - e) / 2, ne(Ii(t), r) + n + ne(Oi(t), r));
    }, An.padEnd = function (n, t, r) {
      n = Iu(n);
      var e = (t = Eu(t)) ? D(n) : 0;
      return t && e < t ? n + ne(t - e, r) : n;
    }, An.padStart = function (n, t, r) {
      n = Iu(n);
      var e = (t = Eu(t)) ? D(n) : 0;
      return t && e < t ? ne(t - e, r) + n : n;
    }, An.parseInt = function (n, t, r) {
      return r || null == t ? t = 0 : t && (t = +t), Mi(Iu(n).replace(on, ""), t || 0);
    }, An.random = function (n, t, r) {
      if (r && typeof r != "boolean" && Oe(n, t, r) && (t = r = T), r === T && (typeof t == "boolean" ? (r = t, t = T) : typeof n == "boolean" && (r = n, n = T)), n === T && t === T ? (n = 0, t = 1) : (n = Au(n), t === T ? (t = n, n = 0) : t = Au(t)), n > t) {
        var e = n;
        n = t, t = e;
      }

      return r || n % 1 || t % 1 ? (r = Ti(), Ci(n + r * (t - n + Cn("1e-" + ((r + "").length - 1))), t)) : ir(n, t);
    }, An.reduce = function (n, t, r) {
      var e = ff(n) ? l : j,
          u = 3 > arguments.length;
      return e(n, ye(t, 4), r, u, uo);
    }, An.reduceRight = function (n, t, r) {
      var e = ff(n) ? s : j,
          u = 3 > arguments.length;
      return e(n, ye(t, 4), r, u, io);
    }, An.repeat = function (n, t, r) {
      return t = (r ? Oe(n, t, r) : t === T) ? 1 : Eu(t), or(Iu(n), t);
    }, An.replace = function () {
      var n = arguments,
          t = Iu(n[0]);
      return 3 > n.length ? t : t.replace(n[1], n[2]);
    }, An.result = function (n, t, r) {
      t = Sr(t, n);
      var e = -1,
          u = t.length;

      for (u || (u = 1, n = T); ++e < u;) {
        var i = null == n ? T : n[Me(t[e])];
        i === T && (e = u, i = r), n = _u(i) ? i.call(n) : i;
      }

      return n;
    }, An.round = ec, An.runInContext = x, An.sample = function (n) {
      return (ff(n) ? Qn : cr)(n);
    }, An.size = function (n) {
      if (null == n) return 0;
      if (su(n)) return ju(n) ? D(n) : n.length;
      var t = vo(n);
      return "[object Map]" == t || "[object Set]" == t ? n.size : Vt(n).length;
    }, An.snakeCase = Df, An.some = function (n, t, r) {
      var e = ff(n) ? h : pr;
      return r && Oe(n, t, r) && (t = T), e(n, ye(t, 3));
    }, An.sortedIndex = function (n, t) {
      return _r(n, t);
    }, An.sortedIndexBy = function (n, t, r) {
      return vr(n, t, ye(r, 2));
    }, An.sortedIndexOf = function (n, t) {
      var r = null == n ? 0 : n.length;

      if (r) {
        var e = _r(n, t);

        if (e < r && lu(n[e], t)) return e;
      }

      return -1;
    }, An.sortedLastIndex = function (n, t) {
      return _r(n, t, true);
    }, An.sortedLastIndexBy = function (n, t, r) {
      return vr(n, t, ye(r, 2), true);
    }, An.sortedLastIndexOf = function (n, t) {
      if (null == n ? 0 : n.length) {
        var r = _r(n, t, true) - 1;
        if (lu(n[r], t)) return r;
      }

      return -1;
    }, An.startCase = Mf, An.startsWith = function (n, t, r) {
      return n = Iu(n), r = null == r ? 0 : pt(Eu(r), 0, n.length), t = yr(t), n.slice(r, r + t.length) == t;
    }, An.subtract = uc, An.sum = function (n) {
      return n && n.length ? m(n, $u) : 0;
    }, An.sumBy = function (n, t) {
      return n && n.length ? m(n, ye(t, 2)) : 0;
    }, An.template = function (n, t, r) {
      var e = An.templateSettings;
      r && Oe(n, t, r) && (t = T), n = Iu(n), t = bf({}, t, e, ce), r = bf({}, t.imports, e.imports, ce);
      var u,
          i,
          o = Wu(r),
          f = S(r, o),
          c = 0;
      r = t.interpolate || jn;
      var a = "__p+='";
      r = Xu((t.escape || jn).source + "|" + r.source + "|" + (r === Q ? pn : jn).source + "|" + (t.evaluate || jn).source + "|$", "g");
      var l = oi.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/[\r\n]/g, " ") + "\n" : "";
      if (n.replace(r, function (t, r, e, o, f, l) {
        return e || (e = o), a += n.slice(c, l).replace(wn, z), r && (u = true, a += "'+__e(" + r + ")+'"), f && (i = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t;
      }), a += "';", (t = oi.call(t, "variable") && t.variable) || (a = "with(obj){" + a + "}"), a = (i ? a.replace(P, "") : a).replace(Z, "$1").replace(q, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (i ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = Ff(function () {
        return Ju(o, l + "return " + a).apply(T, f);
      }), t.source = a, pu(t)) throw t;
      return t;
    }, An.times = function (n, t) {
      if (n = Eu(n), 1 > n || 9007199254740991 < n) return [];
      var r = 4294967295,
          e = Ci(n, 4294967295);

      for (t = ye(t), n -= 4294967295, e = A(e, t); ++r < n;) t(r);

      return e;
    }, An.toFinite = Au, An.toInteger = Eu, An.toLength = ku, An.toLower = function (n) {
      return Iu(n).toLowerCase();
    }, An.toNumber = Su, An.toSafeInteger = function (n) {
      return n ? pt(Eu(n), -9007199254740991, 9007199254740991) : 0 === n ? n : 0;
    }, An.toString = Iu, An.toUpper = function (n) {
      return Iu(n).toUpperCase();
    }, An.trim = function (n, t, r) {
      return (n = Iu(n)) && (r || t === T) ? n.replace(un, "") : n && (t = yr(t)) ? (n = M(n), r = M(t), t = I(n, r), r = R(n, r) + 1, Or(n, t, r).join("")) : n;
    }, An.trimEnd = function (n, t, r) {
      return (n = Iu(n)) && (r || t === T) ? n.replace(fn, "") : n && (t = yr(t)) ? (n = M(n), t = R(n, M(t)) + 1, Or(n, 0, t).join("")) : n;
    }, An.trimStart = function (n, t, r) {
      return (n = Iu(n)) && (r || t === T) ? n.replace(on, "") : n && (t = yr(t)) ? (n = M(n), t = I(n, M(t)), Or(n, t).join("")) : n;
    }, An.truncate = function (n, t) {
      var r = 30,
          e = "...";
      if (du(t)) var u = "separator" in t ? t.separator : u,
          r = "length" in t ? Eu(t.length) : r,
          e = "omission" in t ? yr(t.omission) : e;
      n = Iu(n);
      var i = n.length;
      if (Rn.test(n)) var o = M(n),
          i = o.length;
      if (r >= i) return n;
      if (i = r - D(e), 1 > i) return e;
      if (r = o ? Or(o, 0, i).join("") : n.slice(0, i), u === T) return r + e;

      if (o && (i += r.length - i), hf(u)) {
        if (n.slice(i).search(u)) {
          var f = r;

          for (u.global || (u = Xu(u.source, Iu(_n.exec(u)) + "g")), u.lastIndex = 0; o = u.exec(f);) var c = o.index;

          r = r.slice(0, c === T ? i : c);
        }
      } else n.indexOf(yr(u), i) != i && (u = r.lastIndexOf(u), -1 < u && (r = r.slice(0, u)));

      return r + e;
    }, An.unescape = function (n) {
      return (n = Iu(n)) && G.test(n) ? n.replace(V, tt) : n;
    }, An.uniqueId = function (n) {
      var t = ++fi;
      return Iu(n) + t;
    }, An.upperCase = Tf, An.upperFirst = $f, An.each = nu, An.eachRight = tu, An.first = qe, Nu(An, function () {
      var n = {};
      return mt(An, function (t, r) {
        oi.call(An.prototype, r) || (n[r] = t);
      }), n;
    }(), {
      chain: false
    }), An.VERSION = "4.17.15", r("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
      An[n].placeholder = An;
    }), r(["drop", "take"], function (n, t) {
      Un.prototype[n] = function (r) {
        r = r === T ? 1 : Ui(Eu(r), 0);
        var e = this.__filtered__ && !t ? new Un(this) : this.clone();
        return e.__filtered__ ? e.__takeCount__ = Ci(r, e.__takeCount__) : e.__views__.push({
          size: Ci(r, 4294967295),
          type: n + (0 > e.__dir__ ? "Right" : "")
        }), e;
      }, Un.prototype[n + "Right"] = function (t) {
        return this.reverse()[n](t).reverse();
      };
    }), r(["filter", "map", "takeWhile"], function (n, t) {
      var r = t + 1,
          e = 1 == r || 3 == r;

      Un.prototype[n] = function (n) {
        var t = this.clone();
        return t.__iteratees__.push({
          iteratee: ye(n, 3),
          type: r
        }), t.__filtered__ = t.__filtered__ || e, t;
      };
    }), r(["head", "last"], function (n, t) {
      var r = "take" + (t ? "Right" : "");

      Un.prototype[n] = function () {
        return this[r](1).value()[0];
      };
    }), r(["initial", "tail"], function (n, t) {
      var r = "drop" + (t ? "" : "Right");

      Un.prototype[n] = function () {
        return this.__filtered__ ? new Un(this) : this[r](1);
      };
    }), Un.prototype.compact = function () {
      return this.filter($u);
    }, Un.prototype.find = function (n) {
      return this.filter(n).head();
    }, Un.prototype.findLast = function (n) {
      return this.reverse().find(n);
    }, Un.prototype.invokeMap = fr(function (n, t) {
      return typeof n == "function" ? new Un(this) : this.map(function (r) {
        return Lt(r, n, t);
      });
    }), Un.prototype.reject = function (n) {
      return this.filter(au(ye(n)));
    }, Un.prototype.slice = function (n, t) {
      n = Eu(n);
      var r = this;
      return r.__filtered__ && (0 < n || 0 > t) ? new Un(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== T && (t = Eu(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r);
    }, Un.prototype.takeRightWhile = function (n) {
      return this.reverse().takeWhile(n).reverse();
    }, Un.prototype.toArray = function () {
      return this.take(4294967295);
    }, mt(Un.prototype, function (n, t) {
      var r = /^(?:filter|find|map|reject)|While$/.test(t),
          e = /^(?:head|last)$/.test(t),
          u = An[e ? "take" + ("last" == t ? "Right" : "") : t],
          i = e || /^find/.test(t);
      u && (An.prototype[t] = function () {
        function t(n) {
          return n = u.apply(An, a([n], f)), e && h ? n[0] : n;
        }

        var o = this.__wrapped__,
            f = e ? [1] : arguments,
            c = o instanceof Un,
            l = f[0],
            s = c || ff(o);
        s && r && typeof l == "function" && 1 != l.length && (c = s = false);
        var h = this.__chain__,
            p = !!this.__actions__.length,
            l = i && !h,
            c = c && !p;
        return !i && s ? (o = c ? o : new Un(this), o = n.apply(o, f), o.__actions__.push({
          func: Qe,
          args: [t],
          thisArg: T
        }), new On(o, h)) : l && c ? n.apply(this, f) : (o = this.thru(t), l ? e ? o.value()[0] : o.value() : o);
      });
    }), r("pop push shift sort splice unshift".split(" "), function (n) {
      var t = ri[n],
          r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
          e = /^(?:pop|shift)$/.test(n);

      An.prototype[n] = function () {
        var n = arguments;

        if (e && !this.__chain__) {
          var u = this.value();
          return t.apply(ff(u) ? u : [], n);
        }

        return this[r](function (r) {
          return t.apply(ff(r) ? r : [], n);
        });
      };
    }), mt(Un.prototype, function (n, t) {
      var r = An[t];

      if (r) {
        var e = r.name + "";
        oi.call(Gi, e) || (Gi[e] = []), Gi[e].push({
          name: t,
          func: r
        });
      }
    }), Gi[Jr(T, 2).name] = [{
      name: "wrapper",
      func: T
    }], Un.prototype.clone = function () {
      var n = new Un(this.__wrapped__);
      return n.__actions__ = Ur(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Ur(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Ur(this.__views__), n;
    }, Un.prototype.reverse = function () {
      if (this.__filtered__) {
        var n = new Un(this);
        n.__dir__ = -1, n.__filtered__ = true;
      } else n = this.clone(), n.__dir__ *= -1;

      return n;
    }, Un.prototype.value = function () {
      var n,
          t = this.__wrapped__.value(),
          r = this.__dir__,
          e = ff(t),
          u = 0 > r,
          i = e ? t.length : 0;

      n = i;

      for (var o = this.__views__, f = 0, c = -1, a = o.length; ++c < a;) {
        var l = o[c],
            s = l.size;

        switch (l.type) {
          case "drop":
            f += s;
            break;

          case "dropRight":
            n -= s;
            break;

          case "take":
            n = Ci(n, f + s);
            break;

          case "takeRight":
            f = Ui(f, n - s);
        }
      }

      if (n = {
        start: f,
        end: n
      }, o = n.start, f = n.end, n = f - o, o = u ? f : o - 1, f = this.__iteratees__, c = f.length, a = 0, l = Ci(n, this.__takeCount__), !e || !u && i == n && l == n) return wr(t, this.__actions__);
      e = [];

      n: for (; n-- && a < l;) {
        for (o += r, u = -1, i = t[o]; ++u < c;) {
          var h = f[u],
              s = h.type,
              h = (0, h.iteratee)(i);
          if (2 == s) i = h;else if (!h) {
            if (1 == s) continue n;
            break n;
          }
        }

        e[a++] = i;
      }

      return e;
    }, An.prototype.at = To, An.prototype.chain = function () {
      return Ye(this);
    }, An.prototype.commit = function () {
      return new On(this.value(), this.__chain__);
    }, An.prototype.next = function () {
      this.__values__ === T && (this.__values__ = mu(this.value()));
      var n = this.__index__ >= this.__values__.length;
      return {
        done: n,
        value: n ? T : this.__values__[this.__index__++]
      };
    }, An.prototype.plant = function (n) {
      for (var t, r = this; r instanceof En;) {
        var e = Fe(r);
        e.__index__ = 0, e.__values__ = T, t ? u.__wrapped__ = e : t = e;
        var u = e,
            r = r.__wrapped__;
      }

      return u.__wrapped__ = n, t;
    }, An.prototype.reverse = function () {
      var n = this.__wrapped__;
      return n instanceof Un ? (this.__actions__.length && (n = new Un(this)), n = n.reverse(), n.__actions__.push({
        func: Qe,
        args: [Ge],
        thisArg: T
      }), new On(n, this.__chain__)) : this.thru(Ge);
    }, An.prototype.toJSON = An.prototype.valueOf = An.prototype.value = function () {
      return wr(this.__wrapped__, this.__actions__);
    }, An.prototype.first = An.prototype.head, wi && (An.prototype[wi] = Xe), An;
  }();

  typeof define == "function" && typeof define.amd == "object" && define.amd ? ($n._ = rt, define(function () {
    return rt;
  })) : Nn ? ((Nn.exports = rt)._ = rt, Fn._ = rt) : $n._ = rt;
}).call(this);

var getParam = function () {
  var key = false,
      res = {},
      itm = null; // get the query string without the ?

  var qs = location.search.substring(1); // check for the key as an argument

  if (arguments.length > 0 && arguments[0].length > 1) key = arguments[0]; // make a regex pattern to grab key/value

  var pattern = /([^&=]+)=([^&]*)/g; // loop the items in the query string, either
  // find a match to the argument, or build an object
  // with key/value pairs

  while (itm = pattern.exec(qs)) {
    if (key !== false && decodeURIComponent(itm[1]) === key) return decodeURIComponent(itm[2]);else if (key === false) res[decodeURIComponent(itm[1])] = decodeURIComponent(itm[2]);
  }

  return key === false ? res : null;
};
/**
 * Swiper 5.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 3, 2020
 */


!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t();
}(this, function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
  }

  function t(i, s) {
    void 0 === i && (i = {}), void 0 === s && (s = {}), Object.keys(s).forEach(function (a) {
      void 0 === i[a] ? i[a] = s[a] : e(s[a]) && e(i[a]) && Object.keys(s[a]).length > 0 && t(i[a], s[a]);
    });
  }

  var i = "undefined" != typeof document ? document : {},
      s = {
    body: {},
    addEventListener: function () {},
    removeEventListener: function () {},
    activeElement: {
      blur: function () {},
      nodeName: ""
    },
    querySelector: function () {
      return null;
    },
    querySelectorAll: function () {
      return [];
    },
    getElementById: function () {
      return null;
    },
    createEvent: function () {
      return {
        initEvent: function () {}
      };
    },
    createElement: function () {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function () {},
        getElementsByTagName: function () {
          return [];
        }
      };
    },
    createElementNS: function () {
      return {};
    },
    importNode: function () {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  t(i, s);
  var a = "undefined" != typeof window ? window : {};
  t(a, {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function () {},
      pushState: function () {},
      go: function () {},
      back: function () {}
    },
    CustomEvent: function () {
      return this;
    },
    addEventListener: function () {},
    removeEventListener: function () {},
    getComputedStyle: function () {
      return {
        getPropertyValue: function () {
          return "";
        }
      };
    },
    Image: function () {},
    Date: function () {},
    screen: {},
    setTimeout: function () {},
    clearTimeout: function () {},
    matchMedia: function () {
      return {};
    }
  });

  var r = function (e) {
    for (var t = 0; t < e.length; t += 1) this[t] = e[t];

    return this.length = e.length, this;
  };

  function n(e, t) {
    var s = [],
        n = 0;
    if (e && !t && e instanceof r) return e;
    if (e) if ("string" == typeof e) {
      var o,
          l,
          d = e.trim();

      if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
        var h = "div";

        for (0 === d.indexOf("<li") && (h = "ul"), 0 === d.indexOf("<tr") && (h = "tbody"), 0 !== d.indexOf("<td") && 0 !== d.indexOf("<th") || (h = "tr"), 0 === d.indexOf("<tbody") && (h = "table"), 0 === d.indexOf("<option") && (h = "select"), (l = i.createElement(h)).innerHTML = d, n = 0; n < l.childNodes.length; n += 1) s.push(l.childNodes[n]);
      } else for (o = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], n = 0; n < o.length; n += 1) o[n] && s.push(o[n]);
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n += 1) s.push(e[n]);
    return new r(s);
  }

  function o(e) {
    for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);

    return t;
  }

  n.fn = r.prototype, n.Class = r, n.Dom7 = r;
  var l = {
    addClass: function (e) {
      if (void 0 === e) return this;

      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);

      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);

      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);

      return this;
    },
    attr: function (e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t);else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);

      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);

      return this;
    },
    data: function (e, t) {
      var i;

      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;

        return this;
      }

      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransform = e, i.transform = e;
      }

      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");

      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        i.webkitTransitionDuration = e, i.transitionDuration = e;
      }

      return this;
    },
    on: function () {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];

      var s = t[0],
          a = t[1],
          r = t[2],
          o = t[3];

      function l(e) {
        var t = e.target;

        if (t) {
          var i = e.target.dom7EventData || [];
          if (i.indexOf(e) < 0 && i.unshift(e), n(t).is(a)) r.apply(t, i);else for (var s = n(t).parents(), o = 0; o < s.length; o += 1) n(s[o]).is(a) && r.apply(s[o], i);
        }
      }

      function d(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }

      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], o = e[2], a = void 0), o || (o = !1);

      for (var h, p = s.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (a) for (h = 0; h < p.length; h += 1) {
          var v = p[h];
          u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []), u.dom7LiveListeners[v].push({
            listener: r,
            proxyListener: l
          }), u.addEventListener(v, l, o);
        } else for (h = 0; h < p.length; h += 1) {
          var f = p[h];
          u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[f] || (u.dom7Listeners[f] = []), u.dom7Listeners[f].push({
            listener: r,
            proxyListener: d
          }), u.addEventListener(f, d, o);
        }
      }

      return this;
    },
    off: function () {
      for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];

      var s = t[0],
          a = t[1],
          r = t[2],
          n = t[3];
      "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);

      for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
        var p = this[h],
            c = void 0;
        if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
          var v = c[u];
          r && v.listener === r || r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1));
        }
      }

      return this;
    },
    trigger: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];

      for (var s = e[0].split(" "), r = e[1], n = 0; n < s.length; n += 1) for (var o = s[n], l = 0; l < this.length; l += 1) {
        var d = this[l],
            h = void 0;

        try {
          h = new a.CustomEvent(o, {
            detail: r,
            bubbles: !0,
            cancelable: !0
          });
        } catch (e) {
          (h = i.createEvent("Event")).initEvent(o, !0, !0), h.detail = r;
        }

        d.dom7EventData = e.filter(function (e, t) {
          return t > 0;
        }), d.dispatchEvent(h), d.dom7EventData = [], delete d.dom7EventData;
      }

      return this;
    },
    transitionEnd: function (e) {
      var t,
          i = ["webkitTransitionEnd", "transitionend"],
          s = this;

      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }

      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
            t = e.getBoundingClientRect(),
            s = i.body,
            r = e.clientTop || s.clientTop || 0,
            n = e.clientLeft || s.clientLeft || 0,
            o = e === a ? a.scrollY : e.scrollTop,
            l = e === a ? a.scrollX : e.scrollLeft;
        return {
          top: t.top + o - r,
          left: t.left + l - n
        };
      }

      return null;
    },
    css: function (e, t) {
      var i;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];

          return this;
        }

        if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;

        return this;
      }

      return this;
    },
    each: function (e) {
      if (!e) return this;

      for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;

      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;

      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;

      return this;
    },
    is: function (e) {
      var t,
          s,
          o = this[0];
      if (!o || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (o.matches) return o.matches(e);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(e);
        if (o.msMatchesSelector) return o.msMatchesSelector(e);

        for (t = n(e), s = 0; s < t.length; s += 1) if (t[s] === o) return !0;

        return !1;
      }

      if (e === i) return o === i;
      if (e === a) return o === a;

      if (e.nodeType || e instanceof r) {
        for (t = e.nodeType ? [e] : e, s = 0; s < t.length; s += 1) if (t[s] === o) return !0;

        return !1;
      }

      return !1;
    },
    index: function () {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);

        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
          i = this.length;
      return new r(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]]);
    },
    append: function () {
      for (var e, t = [], s = arguments.length; s--;) t[s] = arguments[s];

      for (var a = 0; a < t.length; a += 1) {
        e = t[a];

        for (var n = 0; n < this.length; n += 1) if ("string" == typeof e) {
          var o = i.createElement("div");

          for (o.innerHTML = e; o.firstChild;) this[n].appendChild(o.firstChild);
        } else if (e instanceof r) for (var l = 0; l < e.length; l += 1) this[n].appendChild(e[l]);else this[n].appendChild(e);
      }

      return this;
    },
    prepend: function (e) {
      var t, s;

      for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
        var a = i.createElement("div");

        for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(a.childNodes[s], this[t].childNodes[0]);
      } else if (e instanceof r) for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);else this[t].insertBefore(e, this[t].childNodes[0]);

      return this;
    },
    next: function (e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && n(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([]);
    },
    nextAll: function (e) {
      var t = [],
          i = this[0];
      if (!i) return new r([]);

      for (; i.nextElementSibling;) {
        var s = i.nextElementSibling;
        e ? n(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return new r(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e ? t.previousElementSibling && n(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([]);
      }

      return new r([]);
    },
    prevAll: function (e) {
      var t = [],
          i = this[0];
      if (!i) return new r([]);

      for (; i.previousElementSibling;) {
        var s = i.previousElementSibling;
        e ? n(s).is(e) && t.push(s) : t.push(s), i = s;
      }

      return new r(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? n(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));

      return n(o(t));
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? n(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;

      return n(o(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);

      return new r(t);
    },
    children: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && n(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);

      return new r(o(t));
    },
    filter: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);

      return new r(t);
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);

      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];

      var i,
          s,
          a = this;

      for (i = 0; i < e.length; i += 1) {
        var r = n(e[i]);

        for (s = 0; s < r.length; s += 1) a[a.length] = r[s], a.length += 1;
      }

      return a;
    },
    styles: function () {
      return this[0] ? a.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(l).forEach(function (e) {
    n.fn[e] = n.fn[e] || l[e];
  });

  var d = {
    deleteProps: function (e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}

        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick: function (e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    },
    now: function () {
      return Date.now();
    },
    getTranslate: function (e, t) {
      var i, s, r;
      void 0 === t && (t = "x");
      var n = a.getComputedStyle(e, null);
      return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0;
    },
    parseUrlQuery: function (e) {
      var t,
          i,
          s,
          r,
          n = {},
          o = e || a.location.href;
      if ("string" == typeof o && o.length) for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, t = 0; t < r; t += 1) s = i[t].replace(/#\S+/g, "").split("="), n[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
      return n;
    },
    isObject: function (e) {
      return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function () {
      for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];

      for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
        var a = e[s];
        if (null != a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
          var l = r[n],
              h = Object.getOwnPropertyDescriptor(a, l);
          void 0 !== h && h.enumerable && (d.isObject(i[l]) && d.isObject(a[l]) ? d.extend(i[l], a[l]) : !d.isObject(i[l]) && d.isObject(a[l]) ? (i[l] = {}, d.extend(i[l], a[l])) : i[l] = a[l]);
        }
      }

      return i;
    }
  },
      h = {
    touch: !!("ontouchstart" in a || a.DocumentTouch && i instanceof a.DocumentTouch),
    pointerEvents: !!a.PointerEvent && "maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints >= 0,
    observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
    passiveListener: function () {
      var e = !1;

      try {
        var t = Object.defineProperty({}, "passive", {
          get: function () {
            e = !0;
          }
        });
        a.addEventListener("testPassiveListener", null, t);
      } catch (e) {}

      return e;
    }(),
    gestures: "ongesturestart" in a
  },
      p = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
      t.on(e, t.params.on[e]);
    });
  },
      c = {
    components: {
      configurable: !0
    }
  };

  p.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return e.split(" ").forEach(function (e) {
      s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
    }), s;
  }, p.prototype.once = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;

    function a() {
      for (var i = [], r = arguments.length; r--;) i[r] = arguments[r];

      s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
    }

    return a.f7proxy = t, s.on(e, a, i);
  }, p.prototype.off = function (e, t) {
    var i = this;
    return i.eventsListeners ? (e.split(" ").forEach(function (e) {
      void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (s, a) {
        (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(a, 1);
      });
    }), i) : i;
  }, p.prototype.emit = function () {
    for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];

    var i,
        s,
        a,
        r = this;
    if (!r.eventsListeners) return r;
    "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
    var n = Array.isArray(i) ? i : i.split(" ");
    return n.forEach(function (e) {
      if (r.eventsListeners && r.eventsListeners[e]) {
        var t = [];
        r.eventsListeners[e].forEach(function (e) {
          t.push(e);
        }), t.forEach(function (e) {
          e.apply(a, s);
        });
      }
    }), r;
  }, p.prototype.useModulesParams = function (e) {
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i];
      s.params && d.extend(e, s.params);
    });
  }, p.prototype.useModules = function (e) {
    void 0 === e && (e = {});
    var t = this;
    t.modules && Object.keys(t.modules).forEach(function (i) {
      var s = t.modules[i],
          a = e[i] || {};
      s.instance && Object.keys(s.instance).forEach(function (e) {
        var i = s.instance[e];
        t[e] = "function" == typeof i ? i.bind(t) : i;
      }), s.on && t.on && Object.keys(s.on).forEach(function (e) {
        t.on(e, s.on[e]);
      }), s.create && s.create.bind(t)(a);
    });
  }, c.components.set = function (e) {
    this.use && this.use(e);
  }, p.installModule = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];

    var s = this;
    s.prototype.modules || (s.prototype.modules = {});
    var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
    return s.prototype.modules[a] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
      s.prototype[t] = e.proto[t];
    }), e.static && Object.keys(e.static).forEach(function (t) {
      s[t] = e.static[t];
    }), e.install && e.install.apply(s, t), s;
  }, p.use = function (e) {
    for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];

    var s = this;
    return Array.isArray(e) ? (e.forEach(function (e) {
      return s.installModule(e);
    }), s) : s.installModule.apply(s, [e].concat(t));
  }, Object.defineProperties(p, c);
  var u = {
    updateSize: function () {
      var e,
          t,
          i = this.$el;
      e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(this, {
        width: e,
        height: t,
        size: this.isHorizontal() ? e : t
      }));
    },
    updateSlides: function () {
      var e = this.params,
          t = this.$wrapperEl,
          i = this.size,
          s = this.rtlTranslate,
          r = this.wrongRTL,
          n = this.virtual && e.virtual.enabled,
          o = n ? this.virtual.slides.length : this.slides.length,
          l = t.children("." + this.params.slideClass),
          h = n ? this.virtual.slides.length : l.length,
          p = [],
          c = [],
          u = [];

      function v(t) {
        return !e.cssMode || t !== l.length - 1;
      }

      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
          b = this.snapGrid.length,
          w = e.spaceBetween,
          y = -f,
          x = 0,
          E = 0;

      if (void 0 !== i) {
        var T, S;
        "string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i), this.virtualSize = -w, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        }), e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / this.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));

        for (var C, M = e.slidesPerColumn, P = T / M, z = Math.floor(h / e.slidesPerColumn), k = 0; k < h; k += 1) {
          S = 0;
          var $ = l.eq(k);

          if (e.slidesPerColumn > 1) {
            var L = void 0,
                I = void 0,
                O = void 0;

            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var D = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                  A = k - e.slidesPerColumn * e.slidesPerGroup * D,
                  G = 0 === D ? e.slidesPerGroup : Math.min(Math.ceil((h - D * M * e.slidesPerGroup) / M), e.slidesPerGroup);
              L = (I = A - (O = Math.floor(A / G)) * G + D * e.slidesPerGroup) + O * T / M, $.css({
                "-webkit-box-ordinal-group": L,
                "-moz-box-ordinal-group": L,
                "-ms-flex-order": L,
                "-webkit-order": L,
                order: L
              });
            } else "column" === e.slidesPerColumnFill ? (O = k - (I = Math.floor(k / M)) * M, (I > z || I === z && O === M - 1) && (O += 1) >= M && (O = 0, I += 1)) : I = k - (O = Math.floor(k / P)) * P;

            $.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== O && e.spaceBetween && e.spaceBetween + "px");
          }

          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var H = a.getComputedStyle($[0], null),
                  B = $[0].style.transform,
                  N = $[0].style.webkitTransform;
              if (B && ($[0].style.transform = "none"), N && ($[0].style.webkitTransform = "none"), e.roundLengths) S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);else if (this.isHorizontal()) {
                var X = parseFloat(H.getPropertyValue("width")),
                    V = parseFloat(H.getPropertyValue("padding-left")),
                    Y = parseFloat(H.getPropertyValue("padding-right")),
                    F = parseFloat(H.getPropertyValue("margin-left")),
                    W = parseFloat(H.getPropertyValue("margin-right")),
                    R = H.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(H.getPropertyValue("height")),
                    j = parseFloat(H.getPropertyValue("padding-top")),
                    K = parseFloat(H.getPropertyValue("padding-bottom")),
                    U = parseFloat(H.getPropertyValue("margin-top")),
                    _ = parseFloat(H.getPropertyValue("margin-bottom")),
                    Z = H.getPropertyValue("box-sizing");

                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              B && ($[0].style.transform = B), N && ($[0].style.webkitTransform = N), e.roundLengths && (S = Math.floor(S));
            } else S = (i - (e.slidesPerView - 1) * w) / e.slidesPerView, e.roundLengths && (S = Math.floor(S)), l[k] && (this.isHorizontal() ? l[k].style.width = S + "px" : l[k].style.height = S + "px");

            l[k] && (l[k].swiperSlideSize = S), u.push(S), e.centeredSlides ? (y = y + S / 2 + x / 2 + w, 0 === x && 0 !== k && (y = y - i / 2 - w), 0 === k && (y = y - i / 2 - w), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), E % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), (E - Math.min(this.params.slidesPerGroupSkip, E)) % this.params.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + S + w), this.virtualSize += S + w, x = S, E += 1;
          }
        }

        if (this.virtualSize = Math.max(this.virtualSize, i) + m, s && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }), e.setWrapperSize && (this.isHorizontal() ? t.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : t.css({
          height: this.virtualSize + e.spaceBetween + "px"
        })), e.slidesPerColumn > 1 && (this.virtualSize = (S + e.spaceBetween) * T, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({
          width: this.virtualSize + e.spaceBetween + "px"
        }) : t.css({
          height: this.virtualSize + e.spaceBetween + "px"
        }), e.centeredSlides)) {
          C = [];

          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)), p[Q] < this.virtualSize + p[0] && C.push(J);
          }

          p = C;
        }

        if (!e.centeredSlides) {
          C = [];

          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)), p[ee] <= this.virtualSize - i && C.push(te);
          }

          p = C, Math.floor(this.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(this.virtualSize - i);
        }

        if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? s ? l.filter(v).css({
          marginLeft: w + "px"
        }) : l.filter(v).css({
          marginRight: w + "px"
        }) : l.filter(v).css({
          marginBottom: w + "px"
        })), e.centeredSlides && e.centeredSlidesBounds) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - i;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }

        if (e.centerInsufficientSlides) {
          var ae = 0;

          if (u.forEach(function (t) {
            ae += t + (e.spaceBetween ? e.spaceBetween : 0);
          }), (ae -= e.spaceBetween) < i) {
            var re = (i - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }), c.forEach(function (e, t) {
              c[t] = e + re;
            });
          }
        }

        d.extend(this, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u
        }), h !== o && this.emit("slidesLengthChange"), p.length !== g && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), c.length !== b && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
          i = [],
          s = 0;
      if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) {
        if (this.params.centeredSlides) this.visibleSlides.each(function (e, t) {
          i.push(t);
        });else for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
          var a = this.activeIndex + t;
          if (a > this.slides.length) break;
          i.push(this.slides.eq(a)[0]);
        }
      } else i.push(this.slides.eq(this.activeIndex)[0]);

      for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
        var r = i[t].offsetHeight;
        s = r > s ? r : s;
      }

      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this.params,
          i = this.slides,
          s = this.rtlTranslate;

      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var a = -e;
        s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];

        for (var r = 0; r < i.length; r += 1) {
          var o = i[r],
              l = (a + (t.centeredSlides ? this.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + t.spaceBetween);

          if (t.watchSlidesVisibility || t.centeredSlides && t.autoHeight) {
            var d = -(a - o.swiperSlideOffset),
                h = d + this.slidesSizesGrid[r];
            (d >= 0 && d < this.size - 1 || h > 1 && h <= this.size || d <= 0 && h >= this.size) && (this.visibleSlides.push(o), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass));
          }

          o.progress = s ? -l : l;
        }

        this.visibleSlides = n(this.visibleSlides);
      }
    },
    updateProgress: function (e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = this && this.translate && this.translate * t || 0;
      }

      var i = this.params,
          s = this.maxTranslate() - this.minTranslate(),
          a = this.progress,
          r = this.isBeginning,
          n = this.isEnd,
          o = r,
          l = n;
      0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), d.extend(this, {
        progress: a,
        isBeginning: r,
        isEnd: n
      }), (i.watchSlidesProgress || i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a);
    },
    updateSlidesClasses: function () {
      var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;
      t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
      var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
          i = this.rtlTranslate ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          n = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          h = e;

      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1) void 0 !== s[p + 1] ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2 ? h = p : i >= s[p] && i < s[p + 1] && (h = p + 1) : i >= s[p] && (h = p);

        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }

      if (a.indexOf(i) >= 0) t = a.indexOf(i);else {
        var c = Math.min(r.slidesPerGroupSkip, h);
        t = c + Math.floor((h - c) / r.slidesPerGroup);
      }

      if (t >= a.length && (t = a.length - 1), h !== n) {
        var u = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
        d.extend(this, {
          snapIndex: t,
          realIndex: u,
          previousIndex: n,
          activeIndex: h
        }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== u && this.emit("realIndexChange"), (this.initialized || this.params.runCallbacksOnInit) && this.emit("slideChange");
      } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this.params,
          i = n(e.target).closest("." + t.slideClass)[0],
          s = !1;
      if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
      if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
      this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(n(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = n(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide();
    }
  };
  var v = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
          i = this.rtlTranslate,
          s = this.translate,
          a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = d.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var i = this.rtlTranslate,
          s = this.params,
          a = this.$wrapperEl,
          r = this.wrapperEl,
          n = this.progress,
          o = 0,
          l = 0;
      this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
      var n = this,
          o = n.params,
          l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
          h = n.minTranslate(),
          p = n.maxTranslate();

      if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
        var c = n.isHorizontal();
        return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0;
      }

      return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"));
      }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  var f = {
    setTransition: function (e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;

      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;

        if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
          s = this.previousIndex,
          a = this.params;

      if (this.animating = !1, !a.cssMode) {
        this.setTransition(0);
        var r = t;

        if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd");
        }
      }
    }
  };
  var m = {
    slideTo: function (e, t, i, s) {
      var a;
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var r = this,
          n = e;
      n < 0 && (n = 0);
      var o = r.params,
          l = r.snapGrid,
          d = r.slidesGrid,
          h = r.previousIndex,
          p = r.activeIndex,
          c = r.rtlTranslate,
          u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.min(r.params.slidesPerGroupSkip, n),
          f = v + Math.floor((n - v) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
      var m,
          g = -l[f];
      if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);

      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1;
      }

      if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;

      if (o.cssMode) {
        var w = r.isHorizontal(),
            y = -g;
        return c && (y = u.scrollWidth - u.offsetWidth - y), 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = y : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = y, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = y, !0;
      }

      return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m));
      }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0;
    },
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
      var a = e;
      return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s);
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating,
          r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;

      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }

      return this.slideTo(this.activeIndex + r, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
          a = this.animating,
          r = this.snapGrid,
          n = this.slidesGrid,
          o = this.rtlTranslate;

      if (s.loop) {
        if (a) return !1;
        this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft;
      }

      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var d,
          h = l(o ? this.translate : -this.translate),
          p = r.map(function (e) {
        return l(e);
      }),
          c = (n.map(function (e) {
        return l(e);
      }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
      return void 0 === c && s.cssMode && r.forEach(function (e) {
        !c && h >= e && (c = e);
      }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i);
    },
    slideReset: function (e, t, i) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
      var a = this.activeIndex,
          r = Math.min(this.params.slidesPerGroupSkip, a),
          n = r + Math.floor((a - r) / this.params.slidesPerGroup),
          o = this.rtlTranslate ? this.translate : -this.translate;

      if (o >= this.snapGrid[n]) {
        var l = this.snapGrid[n];
        o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup);
      } else {
        var d = this.snapGrid[n - 1];
        o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup);
      }

      return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i);
    },
    slideToClickedSlide: function () {
      var e,
          t = this,
          i = t.params,
          s = t.$wrapperEl,
          a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          r = t.clickedIndex;

      if (i.loop) {
        if (t.animating) return;
        e = parseInt(n(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), d.nextTick(function () {
          t.slideTo(r);
        })) : t.slideTo(r);
      } else t.slideTo(r);
    }
  };
  var g = {
    loopCreate: function () {
      var e = this,
          t = e.params,
          s = e.$wrapperEl;
      s.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
      var a = s.children("." + t.slideClass);

      if (t.loopFillGroupWithBlank) {
        var r = t.slidesPerGroup - a.length % t.slidesPerGroup;

        if (r !== t.slidesPerGroup) {
          for (var o = 0; o < r; o += 1) {
            var l = n(i.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
            s.append(l);
          }

          a = s.children("." + t.slideClass);
        }
      }

      "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
      var d = [],
          h = [];
      a.each(function (t, i) {
        var s = n(i);
        t < e.loopedSlides && h.push(i), t < a.length && t >= a.length - e.loopedSlides && d.push(i), s.attr("data-swiper-slide-index", t);
      });

      for (var p = 0; p < h.length; p += 1) s.append(n(h[p].cloneNode(!0)).addClass(t.slideDuplicateClass));

      for (var c = d.length - 1; c >= 0; c -= 1) s.prepend(n(d[c].cloneNode(!0)).addClass(t.slideDuplicateClass));
    },
    loopFix: function () {
      this.emit("beforeLoopFix");
      var e,
          t = this.activeIndex,
          i = this.slides,
          s = this.loopedSlides,
          a = this.allowSlidePrev,
          r = this.allowSlideNext,
          n = this.snapGrid,
          o = this.rtlTranslate;
      this.allowSlidePrev = !0, this.allowSlideNext = !0;
      var l = -n[t] - this.getTranslate();
      if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);else if (t >= i.length - s) {
        e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix");
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
      e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var b = {
    setGrabCursor: function (e) {
      if (!(h.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
        var t = this.el;
        t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
      }
    },
    unsetGrabCursor: function () {
      h.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "");
    }
  };
  var w,
      y,
      x,
      E,
      T,
      S,
      C,
      M,
      P,
      z,
      k,
      $,
      L,
      I,
      O,
      D = {
    appendSlide: function (e) {
      var t = this.$wrapperEl,
          i = this.params;
      if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);else t.append(e);
      i.loop && this.loopCreate(), i.observer && h.observer || this.update();
    },
    prependSlide: function (e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && this.loopDestroy();
      var a = s + 1;

      if ("object" == typeof e && "length" in e) {
        for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);

        a = s + e.length;
      } else i.prepend(e);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), this.slideTo(a, 0, !1);
    },
    addSlide: function (e, t) {
      var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
      s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
      var r = this.slides.length;
      if (e <= 0) this.prependSlide(t);else if (e >= r) this.appendSlide(t);else {
        for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
          var d = this.slides.eq(l);
          d.remove(), o.unshift(d);
        }

        if ("object" == typeof t && "length" in t) {
          for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);

          n = a > e ? a + t.length : a;
        } else i.append(t);

        for (var c = 0; c < o.length; c += 1) i.append(o[c]);

        s.loop && this.loopCreate(), s.observer && h.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1);
      }
    },
    removeSlide: function (e) {
      var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
      t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
      var a,
          r = s;

      if ("object" == typeof e && "length" in e) {
        for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);

        r = Math.max(r, 0);
      } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);

      t.loop && this.loopCreate(), t.observer && h.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1);
    },
    removeAllSlides: function () {
      for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);

      this.removeSlide(e);
    }
  },
      A = (w = a.navigator.platform, y = a.navigator.userAgent, x = {
    ios: !1,
    android: !1,
    androidChrome: !1,
    desktop: !1,
    iphone: !1,
    ipod: !1,
    ipad: !1,
    edge: !1,
    ie: !1,
    firefox: !1,
    macos: !1,
    windows: !1,
    cordova: !(!a.cordova && !a.phonegap),
    phonegap: !(!a.cordova && !a.phonegap),
    electron: !1
  }, E = a.screen.width, T = a.screen.height, S = y.match(/(Android);?[\s\/]+([\d.]+)?/), C = y.match(/(iPad).*OS\s([\d_]+)/), M = y.match(/(iPod)(.*OS\s([\d_]+))?/), P = !C && y.match(/(iPhone\sOS|iOS)\s([\d_]+)/), z = y.indexOf("MSIE ") >= 0 || y.indexOf("Trident/") >= 0, k = y.indexOf("Edge/") >= 0, $ = y.indexOf("Gecko/") >= 0 && y.indexOf("Firefox/") >= 0, L = "Win32" === w, I = y.toLowerCase().indexOf("electron") >= 0, O = "MacIntel" === w, !C && O && h.touch && (1024 === E && 1366 === T || 834 === E && 1194 === T || 834 === E && 1112 === T || 768 === E && 1024 === T) && (C = y.match(/(Version)\/([\d.]+)/), O = !1), x.ie = z, x.edge = k, x.firefox = $, S && !L && (x.os = "android", x.osVersion = S[2], x.android = !0, x.androidChrome = y.toLowerCase().indexOf("chrome") >= 0), (C || P || M) && (x.os = "ios", x.ios = !0), P && !M && (x.osVersion = P[2].replace(/_/g, "."), x.iphone = !0), C && (x.osVersion = C[2].replace(/_/g, "."), x.ipad = !0), M && (x.osVersion = M[3] ? M[3].replace(/_/g, ".") : null, x.ipod = !0), x.ios && x.osVersion && y.indexOf("Version/") >= 0 && "10" === x.osVersion.split(".")[0] && (x.osVersion = y.toLowerCase().split("version/")[1].split(" ")[0]), x.webView = !(!(P || C || M) || !y.match(/.*AppleWebKit(?!.*Safari)/i) && !a.navigator.standalone) || a.matchMedia && a.matchMedia("(display-mode: standalone)").matches, x.webview = x.webView, x.standalone = x.webView, x.desktop = !(x.ios || x.android) || I, x.desktop && (x.electron = I, x.macos = O, x.windows = L, x.macos && (x.os = "macos"), x.windows && (x.os = "windows")), x.pixelRatio = a.devicePixelRatio || 1, x);

  function G(e) {
    var t = this.touchEventsData,
        s = this.params,
        r = this.touches;

    if (!this.animating || !s.preventInteractionOnTransition) {
      var o = e;
      o.originalEvent && (o = o.originalEvent);
      var l = n(o.target);
      if (("wrapper" !== s.touchEventsTarget || l.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === o.type, (t.isTouchEvent || !("which" in o) || 3 !== o.which) && !(!t.isTouchEvent && "button" in o && o.button > 0 || t.isTouched && t.isMoved))) if (s.noSwiping && l.closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) this.allowClick = !0;else if (!s.swipeHandler || l.closest(s.swipeHandler)[0]) {
        r.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, r.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
        var h = r.currentX,
            p = r.currentY,
            c = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            u = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;

        if (!c || !(h <= u || h >= a.screen.width - u)) {
          if (d.extend(t, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
          }), r.startX = h, r.startY = p, t.touchStartTime = d.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, s.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== o.type) {
            var v = !0;
            l.is(t.formElements) && (v = !1), i.activeElement && n(i.activeElement).is(t.formElements) && i.activeElement !== l[0] && i.activeElement.blur();
            var f = v && this.allowTouchMove && s.touchStartPreventDefault;
            (s.touchStartForcePreventDefault || f) && o.preventDefault();
          }

          this.emit("touchStart", o);
        }
      }
    }
  }

  function H(e) {
    var t = this.touchEventsData,
        s = this.params,
        a = this.touches,
        r = this.rtlTranslate,
        o = e;

    if (o.originalEvent && (o = o.originalEvent), t.isTouched) {
      if (!t.isTouchEvent || "touchmove" === o.type) {
        var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
            h = "touchmove" === o.type ? l.pageX : o.pageX,
            p = "touchmove" === o.type ? l.pageY : o.pageY;
        if (o.preventedByNestedSwiper) return a.startX = h, void (a.startY = p);
        if (!this.allowTouchMove) return this.allowClick = !1, void (t.isTouched && (d.extend(a, {
          startX: h,
          startY: p,
          currentX: h,
          currentY: p
        }), t.touchStartTime = d.now()));
        if (t.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (this.isVertical()) {
          if (p < a.startY && this.translate <= this.maxTranslate() || p > a.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void (t.isMoved = !1);
        } else if (h < a.startX && this.translate <= this.maxTranslate() || h > a.startX && this.translate >= this.minTranslate()) return;
        if (t.isTouchEvent && i.activeElement && o.target === i.activeElement && n(o.target).is(t.formElements)) return t.isMoved = !0, void (this.allowClick = !1);

        if (t.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          a.currentX = h, a.currentY = p;
          var c = a.currentX - a.startX,
              u = a.currentY - a.startY;

          if (!(this.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold)) {
            var v;
            if (void 0 === t.isScrolling) this.isHorizontal() && a.currentY === a.startY || this.isVertical() && a.currentX === a.startX ? t.isScrolling = !1 : c * c + u * u >= 25 && (v = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, t.isScrolling = this.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle);
            if (t.isScrolling && this.emit("touchMoveOpposite", o), void 0 === t.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1;else if (t.startMoving) {
              this.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), t.isMoved || (s.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !s.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", o)), this.emit("sliderMove", o), t.isMoved = !0;
              var f = this.isHorizontal() ? c : u;
              a.diff = f, f *= s.touchRatio, r && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", t.currentTranslate = f + t.startTranslate;
              var m = !0,
                  g = s.resistanceRatio;

              if (s.touchReleaseOnEdges && (g = 0), f > 0 && t.currentTranslate > this.minTranslate() ? (m = !1, s.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + f, g))) : f < 0 && t.currentTranslate < this.maxTranslate() && (m = !1, s.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - f, g))), m && (o.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), s.threshold > 0) {
                if (!(Math.abs(f) > s.threshold || t.allowThresholdMove)) return void (t.currentTranslate = t.startTranslate);
                if (!t.allowThresholdMove) return t.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, t.currentTranslate = t.startTranslate, void (a.diff = this.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
              }

              s.followFinger && !s.cssMode && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), s.freeMode && (0 === t.velocities.length && t.velocities.push({
                position: a[this.isHorizontal() ? "startX" : "startY"],
                time: t.touchStartTime
              }), t.velocities.push({
                position: a[this.isHorizontal() ? "currentX" : "currentY"],
                time: d.now()
              })), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate));
            }
          }
        }
      }
    } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", o);
  }

  function B(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtlTranslate,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid,
        h = e;
    if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var p,
        c = d.now(),
        u = c - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(h), t.emit("tap click", h), u < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", h)), i.lastClickTime = d.now(), d.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

      if (s.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;
          t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || d.now() - v.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
        var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;
        r && (y = -y);
        var x,
            E,
            T = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
        if (y < t.maxTranslate()) s.freeModeMomentumBounce ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S), x = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.maxTranslate(), s.loop && s.centeredSlides && (E = !0);else if (y > t.minTranslate()) s.freeModeMomentumBounce ? (y - t.minTranslate() > S && (y = t.minTranslate() + S), x = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : y = t.minTranslate(), s.loop && s.centeredSlides && (E = !0);else if (s.freeModeSticky) {
          for (var C, M = 0; M < l.length; M += 1) if (l[M] > -y) {
            C = M;
            break;
          }

          y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1]);
        }

        if (E && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) {
          if (b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), s.freeModeSticky) {
            var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex];
            b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
          }
        } else if (s.freeModeSticky) return void t.slideToClosest();

        s.freeModeMomentumBounce && T ? (t.updateProgress(x), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), setTimeout(function () {
            t.setTranslate(x), n.transitionEnd(function () {
              t && !t.destroyed && t.transitionEnd();
            });
          }, 0));
        })) : t.velocity ? (t.updateProgress(y), t.setTransition(b), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (s.freeModeSticky) return void t.slideToClosest();

      (!s.freeModeMomentum || u >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
    } else {
      for (var k = 0, $ = t.slidesSizesGrid[0], L = 0; L < o.length; L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[L + I] ? p >= o[L] && p < o[L + I] && (k = L, $ = o[L + I] - o[L]) : p >= o[L] && (k = L, $ = o[o.length - 1] - o[o.length - 2]);
      }

      var O = (p - o[k]) / $,
          D = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;

      if (u > s.longSwipesMs) {
        if (!s.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection && (O >= s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k)), "prev" === t.swipeDirection && (O > 1 - s.longSwipesRatio ? t.slideTo(k + D) : t.slideTo(k));
      } else {
        if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation && (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl) ? h.target === t.navigation.nextEl ? t.slideTo(k + D) : t.slideTo(k) : ("next" === t.swipeDirection && t.slideTo(k + D), "prev" === t.swipeDirection && t.slideTo(k));
      }
    }
  }

  function N() {
    var e = this.params,
        t = this.el;

    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
          s = this.allowSlidePrev,
          a = this.snapGrid;
      this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow();
    }
  }

  function X(e) {
    this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  function V() {
    var e = this.wrapperEl,
        t = this.rtlTranslate;
    this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = t ? e.scrollWidth - e.offsetWidth - e.scrollLeft : -e.scrollLeft : this.translate = -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
    var i = this.maxTranslate() - this.minTranslate();
    (0 === i ? 0 : (this.translate - this.minTranslate()) / i) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1);
  }

  var Y = !1;

  function F() {}

  var W = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    preventInteractionOnTransition: !1,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0
  },
      R = {
    update: u,
    translate: v,
    transition: f,
    slide: m,
    loop: g,
    grabCursor: b,
    manipulation: D,
    events: {
      attachEvents: function () {
        var e = this.params,
            t = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
        this.onTouchStart = G.bind(this), this.onTouchMove = H.bind(this), this.onTouchEnd = B.bind(this), e.cssMode && (this.onScroll = V.bind(this)), this.onClick = X.bind(this);
        var r = !!e.nested;
        if (!h.touch && h.pointerEvents) s.addEventListener(t.start, this.onTouchStart, !1), i.addEventListener(t.move, this.onTouchMove, r), i.addEventListener(t.end, this.onTouchEnd, !1);else {
          if (h.touch) {
            var n = !("touchstart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.addEventListener(t.start, this.onTouchStart, n), s.addEventListener(t.move, this.onTouchMove, h.passiveListener ? {
              passive: !1,
              capture: r
            } : r), s.addEventListener(t.end, this.onTouchEnd, n), t.cancel && s.addEventListener(t.cancel, this.onTouchEnd, n), Y || (i.addEventListener("touchstart", F), Y = !0);
          }

          (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.addEventListener("mousedown", this.onTouchStart, !1), i.addEventListener("mousemove", this.onTouchMove, r), i.addEventListener("mouseup", this.onTouchEnd, !1));
        }
        (e.preventClicks || e.preventClicksPropagation) && s.addEventListener("click", this.onClick, !0), e.cssMode && a.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N, !0) : this.on("observerUpdate", N, !0);
      },
      detachEvents: function () {
        var e = this.params,
            t = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!e.nested;
        if (!h.touch && h.pointerEvents) s.removeEventListener(t.start, this.onTouchStart, !1), i.removeEventListener(t.move, this.onTouchMove, r), i.removeEventListener(t.end, this.onTouchEnd, !1);else {
          if (h.touch) {
            var n = !("onTouchStart" !== t.start || !h.passiveListener || !e.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            s.removeEventListener(t.start, this.onTouchStart, n), s.removeEventListener(t.move, this.onTouchMove, r), s.removeEventListener(t.end, this.onTouchEnd, n), t.cancel && s.removeEventListener(t.cancel, this.onTouchEnd, n);
          }

          (e.simulateTouch && !A.ios && !A.android || e.simulateTouch && !h.touch && A.ios) && (s.removeEventListener("mousedown", this.onTouchStart, !1), i.removeEventListener("mousemove", this.onTouchMove, r), i.removeEventListener("mouseup", this.onTouchEnd, !1));
        }
        (e.preventClicks || e.preventClicksPropagation) && s.removeEventListener("click", this.onClick, !0), e.cssMode && a.removeEventListener("scroll", this.onScroll), this.off(A.ios || A.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", N);
      }
    },
    breakpoints: {
      setBreakpoint: function () {
        var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
        void 0 === i && (i = 0);
        var s = this.params,
            a = this.$el,
            r = s.breakpoints;

        if (r && (!r || 0 !== Object.keys(r).length)) {
          var n = this.getBreakpoint(r);

          if (n && this.currentBreakpoint !== n) {
            var o = n in r ? r[n] : void 0;
            o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
              var t = o[e];
              void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
            });
            var l = o || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = l.slidesPerColumn > 1;
            h && !p ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !h && p && (a.addClass(s.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
            var c = l.direction && l.direction !== s.direction,
                u = s.loop && (l.slidesPerView !== s.slidesPerView || c);
            c && t && this.changeDirection(), d.extend(this.params, l), d.extend(this, {
              allowTouchMove: this.params.allowTouchMove,
              allowSlideNext: this.params.allowSlideNext,
              allowSlidePrev: this.params.allowSlidePrev
            }), this.currentBreakpoint = n, u && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", l);
          }
        }
      },
      getBreakpoint: function (e) {
        if (e) {
          var t = !1,
              i = Object.keys(e).map(function (e) {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              var t = parseFloat(e.substr(1));
              return {
                value: a.innerHeight * t,
                point: e
              };
            }

            return {
              value: e,
              point: e
            };
          });
          i.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });

          for (var s = 0; s < i.length; s += 1) {
            var r = i[s],
                n = r.point;
            r.value <= a.innerWidth && (t = n);
          }

          return t || "max";
        }
      }
    },
    checkOverflow: {
      checkOverflow: function () {
        var e = this.params,
            t = this.isLocked,
            i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
        e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update());
      }
    },
    classes: {
      addClasses: function () {
        var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
        a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), t.autoHeight && a.push("autoheight"), i && a.push("rtl"), t.slidesPerColumn > 1 && (a.push("multirow"), "column" === t.slidesPerColumnFill && a.push("multirow-column")), A.android && a.push("android"), A.ios && a.push("ios"), t.cssMode && a.push("css-mode"), a.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), s.addClass(e.join(" "));
      },
      removeClasses: function () {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function (e, t, i, s, r, o) {
        var l;

        function d() {
          o && o();
        }

        n(e).parent("picture")[0] || e.complete && r ? d() : t ? ((l = new a.Image()).onload = d, l.onerror = d, s && (l.sizes = s), i && (l.srcset = i), t && (l.src = t)) : d();
      },
      preloadImages: function () {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
          var s = e.imagesToLoad[i];
          e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      q = {},
      j = function (e) {
    function t() {
      for (var i, s, a, r = [], o = arguments.length; o--;) r[o] = arguments[o];

      1 === r.length && r[0].constructor && r[0].constructor === Object ? a = r[0] : (s = (i = r)[0], a = i[1]), a || (a = {}), a = d.extend({}, a), s && !a.el && (a.el = s), e.call(this, a), Object.keys(R).forEach(function (e) {
        Object.keys(R[e]).forEach(function (i) {
          t.prototype[i] || (t.prototype[i] = R[e][i]);
        });
      });
      var l = this;
      void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
        var t = l.modules[e];

        if (t.params) {
          var i = Object.keys(t.params)[0],
              s = t.params[i];
          if ("object" != typeof s || null === s) return;
          if (!(i in a) || !("enabled" in s)) return;
          !0 === a[i] && (a[i] = {
            enabled: !0
          }), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
            enabled: !1
          });
        }
      });
      var p = d.extend({}, W);
      l.useModulesParams(p), l.params = d.extend({}, p, q, a), l.originalParams = d.extend({}, l.params), l.passedParams = d.extend({}, a), l.$ = n;
      var c = n(l.params.el);

      if (s = c[0]) {
        if (c.length > 1) {
          var u = [];
          return c.each(function (e, i) {
            var s = d.extend({}, a, {
              el: i
            });
            u.push(new t(s));
          }), u;
        }

        var v, f, m;
        return s.swiper = l, c.data("swiper", l), s && s.shadowRoot && s.shadowRoot.querySelector ? (v = n(s.shadowRoot.querySelector("." + l.params.wrapperClass))).children = function (e) {
          return c.children(e);
        } : v = c.children("." + l.params.wrapperClass), d.extend(l, {
          $el: c,
          el: s,
          $wrapperEl: v,
          wrapperEl: v[0],
          classNames: [],
          slides: n(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: function () {
            return "horizontal" === l.params.direction;
          },
          isVertical: function () {
            return "vertical" === l.params.direction;
          },
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
          rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
          wrongRTL: "-webkit-box" === v.css("display"),
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: l.params.allowSlideNext,
          allowSlidePrev: l.params.allowSlidePrev,
          touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], h.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), l.touchEventsTouch = {
            start: f[0],
            move: f[1],
            end: f[2],
            cancel: f[3]
          }, l.touchEventsDesktop = {
            start: m[0],
            move: m[1],
            end: m[2]
          }, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            formElements: "input, select, option, textarea, button, video, label",
            lastClickTime: d.now(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: l.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          imagesToLoad: [],
          imagesLoaded: 0
        }), l.useModules(), l.params.init && l.init(), l;
      }
    }

    e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
    var i = {
      extendedDefaults: {
        configurable: !0
      },
      defaults: {
        configurable: !0
      },
      Class: {
        configurable: !0
      },
      $: {
        configurable: !0
      }
    };
    return t.prototype.slidesPerViewDynamic = function () {
      var e = this.params,
          t = this.slides,
          i = this.slidesGrid,
          s = this.size,
          a = this.activeIndex,
          r = 1;

      if (e.centeredSlides) {
        for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));

        for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0));
      } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);

      return r;
    }, t.prototype.update = function () {
      var e = this;

      if (e && !e.destroyed) {
        var t = e.snapGrid,
            i = e.params;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }

      function s() {
        var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
      }
    }, t.prototype.changeDirection = function (e, t) {
      void 0 === t && (t = !0);
      var i = this.params.direction;
      return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.$el.removeClass("" + this.params.containerModifierClass + i).addClass("" + this.params.containerModifierClass + e), this.params.direction = e, this.slides.each(function (t, i) {
        "vertical" === e ? i.style.width = "" : i.style.height = "";
      }), this.emit("changeDirection"), t && this.update()), this;
    }, t.prototype.init = function () {
      this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"));
    }, t.prototype.destroy = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      var i = this,
          s = i.params,
          a = i.$el,
          r = i.$wrapperEl,
          n = i.slides;
      return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
        i.off(e);
      }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0), null;
    }, t.extendDefaults = function (e) {
      d.extend(q, e);
    }, i.extendedDefaults.get = function () {
      return q;
    }, i.defaults.get = function () {
      return W;
    }, i.Class.get = function () {
      return e;
    }, i.$.get = function () {
      return n;
    }, Object.defineProperties(t, i), t;
  }(p),
      K = {
    name: "device",
    proto: {
      device: A
    },
    static: {
      device: A
    }
  },
      U = {
    name: "support",
    proto: {
      support: h
    },
    static: {
      support: h
    }
  },
      _ = {
    isEdge: !!a.navigator.userAgent.match(/Edge/g),
    isSafari: function () {
      var e = a.navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
  },
      Z = {
    name: "browser",
    proto: {
      browser: _
    },
    static: {
      browser: _
    }
  },
      Q = {
    name: "resize",
    create: function () {
      var e = this;
      d.extend(e, {
        resize: {
          resizeHandler: function () {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function () {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function () {
        a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function () {
        a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  },
      J = {
    func: a.MutationObserver || a.WebkitMutationObserver,
    attach: function (e, t) {
      void 0 === t && (t = {});
      var i = this,
          s = new (0, J.func)(function (e) {
        if (1 !== e.length) {
          var t = function () {
            i.emit("observerUpdate", e[0]);
          };

          a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
        } else i.emit("observerUpdate", e[0]);
      });
      s.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(s);
    },
    init: function () {
      if (h.observer && this.params.observer) {
        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
        this.observer.attach(this.$el[0], {
          childList: this.params.observeSlideChildren
        }), this.observer.attach(this.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function () {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  },
      ee = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function () {
      d.extend(this, {
        observer: {
          init: J.init.bind(this),
          attach: J.attach.bind(this),
          destroy: J.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init: function () {
        this.observer.init();
      },
      destroy: function () {
        this.observer.destroy();
      }
    }
  },
      te = {
    update: function (e) {
      var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.params.virtual,
          o = n.addSlidesBefore,
          l = n.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
      t.updateActiveIndex();
      var g,
          b,
          w,
          y = t.activeIndex || 0;
      g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (b = Math.floor(s / 2) + a + o, w = Math.floor(s / 2) + a + l) : (b = s + (a - 1) + o, w = a + l);
      var x = Math.max((y || 0) - w, 0),
          E = Math.min((y || 0) + b, u.length - 1),
          T = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);

      function S() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (d.extend(t.virtual, {
        from: x,
        to: E,
        offset: T,
        slidesGrid: t.slidesGrid
      }), p === x && c === E && !e) return t.slidesGrid !== v && T !== m && t.slides.css(g, T + "px"), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: T,
        from: x,
        to: E,
        slides: function () {
          for (var e = [], t = x; t <= E; t += 1) e.push(u[t]);

          return e;
        }()
      }), void S();
      var C = [],
          M = [];
      if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();else for (var P = p; P <= c; P += 1) (P < x || P > E) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + P + '"]').remove();

      for (var z = 0; z < u.length; z += 1) z >= x && z <= E && (void 0 === c || e ? M.push(z) : (z > c && M.push(z), z < p && C.push(z)));

      M.forEach(function (e) {
        t.$wrapperEl.append(f(u[e], e));
      }), C.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(f(u[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(g, T + "px"), S();
    },
    renderSlide: function (e, t) {
      var i = this.params.virtual;
      if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
      var s = i.renderSlide ? n(i.renderSlide.call(this, e, t)) : n('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s;
    },
    appendSlide: function (e) {
      if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);else this.virtual.slides.push(e);
      this.virtual.update(!0);
    },
    prependSlide: function (e) {
      var t = this.activeIndex,
          i = t + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);

        i = t + e.length, s = e.length;
      } else this.virtual.slides.unshift(e);

      if (this.params.virtual.cache) {
        var r = this.virtual.cache,
            n = {};
        Object.keys(r).forEach(function (e) {
          var t = r[e],
              i = t.attr("data-swiper-slide-index");
          i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t;
        }), this.virtual.cache = n;
      }

      this.virtual.update(!0), this.slideTo(i, 0);
    },
    removeSlide: function (e) {
      if (null != e) {
        var t = this.activeIndex;
        if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0);else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
        this.virtual.update(!0), this.slideTo(t, 0);
      }
    },
    removeAllSlides: function () {
      this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
    }
  },
      ie = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function () {
      d.extend(this, {
        virtual: {
          update: te.update.bind(this),
          appendSlide: te.appendSlide.bind(this),
          prependSlide: te.prependSlide.bind(this),
          removeSlide: te.removeSlide.bind(this),
          removeAllSlides: te.removeAllSlides.bind(this),
          renderSlide: te.renderSlide.bind(this),
          slides: this.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function () {
        if (this.params.virtual.enabled) {
          this.classNames.push(this.params.containerModifierClass + "virtual");
          var e = {
            watchSlidesProgress: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update();
        }
      },
      setTranslate: function () {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  },
      se = {
    handle: function (e) {
      var t = this.rtlTranslate,
          s = e;
      s.originalEvent && (s = s.originalEvent);
      var r = s.keyCode || s.charCode;
      if (!this.allowSlideNext && (this.isHorizontal() && 39 === r || this.isVertical() && 40 === r || 34 === r)) return !1;
      if (!this.allowSlidePrev && (this.isHorizontal() && 37 === r || this.isVertical() && 38 === r || 33 === r)) return !1;

      if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (this.params.keyboard.onlyInViewport && (33 === r || 34 === r || 37 === r || 39 === r || 38 === r || 40 === r)) {
          var n = !1;
          if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
          var o = a.innerWidth,
              l = a.innerHeight,
              d = this.$el.offset();
          t && (d.left -= this.$el[0].scrollLeft);

          for (var h = [[d.left, d.top], [d.left + this.width, d.top], [d.left, d.top + this.height], [d.left + this.width, d.top + this.height]], p = 0; p < h.length; p += 1) {
            var c = h[p];
            c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
          }

          if (!n) return;
        }

        this.isHorizontal() ? (33 !== r && 34 !== r && 37 !== r && 39 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (34 !== r && 39 !== r || t) && (33 !== r && 37 !== r || !t) || this.slideNext(), (33 !== r && 37 !== r || t) && (34 !== r && 39 !== r || !t) || this.slidePrev()) : (33 !== r && 34 !== r && 38 !== r && 40 !== r || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 34 !== r && 40 !== r || this.slideNext(), 33 !== r && 38 !== r || this.slidePrev()), this.emit("keyPress", r);
      }
    },
    enable: function () {
      this.keyboard.enabled || (n(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function () {
      this.keyboard.enabled && (n(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  },
      ae = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function () {
      d.extend(this, {
        keyboard: {
          enabled: !1,
          enable: se.enable.bind(this),
          disable: se.disable.bind(this),
          handle: se.handle.bind(this)
        }
      });
    },
    on: {
      init: function () {
        this.params.keyboard.enabled && this.keyboard.enable();
      },
      destroy: function () {
        this.keyboard.enabled && this.keyboard.disable();
      }
    }
  };

  var re = {
    lastScrollTime: d.now(),
    lastEventBeforeSnap: void 0,
    recentWheelEvents: [],
    event: function () {
      return a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
        var e = ("onwheel" in i);

        if (!e) {
          var t = i.createElement("div");
          t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel;
        }

        return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e;
      }() ? "wheel" : "mousewheel";
    },
    normalize: function (e) {
      var t = 0,
          i = 0,
          s = 0,
          a = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: s,
        pixelY: a
      };
    },
    handleMouseEnter: function () {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function () {
      this.mouseEntered = !1;
    },
    handle: function (e) {
      var t = e,
          i = this,
          s = i.params.mousewheel;
      i.params.cssMode && t.preventDefault();
      var a = i.$el;
      if ("container" !== i.params.mousewheel.eventsTarged && (a = n(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var r = 0,
          o = i.rtlTranslate ? -1 : 1,
          l = re.normalize(t);
      if (s.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          r = -l.pixelX * o;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          r = -l.pixelY;
        }
      } else r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
      if (0 === r) return !0;

      if (s.invert && (r = -r), i.params.freeMode) {
        var h = {
          time: d.now(),
          delta: Math.abs(r),
          direction: Math.sign(r)
        },
            p = i.mousewheel.lastEventBeforeSnap,
            c = p && h.time < p.time + 500 && h.delta <= p.delta && h.direction === p.direction;

        if (!c) {
          i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
          var u = i.getTranslate() + r * s.sensitivity,
              v = i.isBeginning,
              f = i.isEnd;

          if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!v && i.isBeginning || !f && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
            clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
            var m = i.mousewheel.recentWheelEvents;
            m.length >= 15 && m.shift();
            var g = m.length ? m[m.length - 1] : void 0,
                b = m[0];
            if (m.push(h), g && (h.delta > g.delta || h.direction !== g.direction)) m.splice(0);else if (m.length >= 15 && h.time - b.time < 500 && b.delta - h.delta >= 1 && h.delta <= 6) {
              var w = r > 0 ? .8 : .2;
              i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.mousewheel.timeout = d.nextTick(function () {
                i.slideToClosest(i.params.speed, !0, void 0, w);
              }, 0);
            }
            i.mousewheel.timeout || (i.mousewheel.timeout = d.nextTick(function () {
              i.mousewheel.lastEventBeforeSnap = h, m.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5);
            }, 500));
          }

          if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0;
        }
      } else {
        var y = {
          time: d.now(),
          delta: Math.abs(r),
          direction: Math.sign(r),
          raw: e
        },
            x = i.mousewheel.recentWheelEvents;
        x.length >= 2 && x.shift();
        var E = x.length ? x[x.length - 1] : void 0;
        if (x.push(y), E ? (y.direction !== E.direction || y.delta > E.delta || y.time > E.time + 150) && i.mousewheel.animateSlider(y) : i.mousewheel.animateSlider(y), i.mousewheel.releaseScroll(y)) return !0;
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    animateSlider: function (e) {
      return e.delta >= 6 && d.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = new a.Date().getTime(), !1);
    },
    releaseScroll: function (e) {
      var t = this.params.mousewheel;

      if (e.direction < 0) {
        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
      } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;

      return !1;
    },
    enable: function () {
      var e = re.event();
      if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0;
    },
    disable: function () {
      var e = re.event();
      if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
      if (!e) return !1;
      if (!this.mousewheel.enabled) return !1;
      var t = this.$el;
      return "container" !== this.params.mousewheel.eventsTarged && (t = n(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0;
    }
  },
      ne = {
    update: function () {
      var e = this.params.navigation;

      if (!this.params.loop) {
        var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
        s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass));
      }
    },
    onPrevClick: function (e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function (e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function () {
      var e,
          t,
          i = this.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = n(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = n(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), d.extend(this.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy: function () {
      var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
      t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass));
    }
  },
      oe = {
    update: function () {
      var e = this.rtl,
          t = this.params.pagination;

      if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var i,
            s = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            a = this.pagination.$el,
            r = this.params.loop ? Math.ceil((s - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;

        if (this.params.loop ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > s - 1 - 2 * this.loopedSlides && (i -= s - 2 * this.loopedSlides), i > r - 1 && (i -= r), i < 0 && "bullets" !== this.params.paginationType && (i = r + i)) : i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
          var o,
              l,
              d,
              h = this.pagination.bullets;
          if (t.dynamicBullets && (this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"), t.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += i - this.previousIndex, this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = t.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), o = i - this.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) + o) / 2), h.removeClass(t.bulletActiveClass + " " + t.bulletActiveClass + "-next " + t.bulletActiveClass + "-next-next " + t.bulletActiveClass + "-prev " + t.bulletActiveClass + "-prev-prev " + t.bulletActiveClass + "-main"), a.length > 1) h.each(function (e, s) {
            var a = n(s),
                r = a.index();
            r === i && a.addClass(t.bulletActiveClass), t.dynamicBullets && (r >= o && r <= l && a.addClass(t.bulletActiveClass + "-main"), r === o && a.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), r === l && a.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next"));
          });else {
            var p = h.eq(i),
                c = p.index();

            if (p.addClass(t.bulletActiveClass), t.dynamicBullets) {
              for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1) h.eq(f).addClass(t.bulletActiveClass + "-main");

              if (this.params.loop) {
                if (c >= h.length - t.dynamicMainBullets) {
                  for (var m = t.dynamicMainBullets; m >= 0; m -= 1) h.eq(h.length - m).addClass(t.bulletActiveClass + "-main");

                  h.eq(h.length - t.dynamicMainBullets - 1).addClass(t.bulletActiveClass + "-prev");
                } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
              } else u.prev().addClass(t.bulletActiveClass + "-prev").prev().addClass(t.bulletActiveClass + "-prev-prev"), v.next().addClass(t.bulletActiveClass + "-next").next().addClass(t.bulletActiveClass + "-next-next");
            }
          }

          if (t.dynamicBullets) {
            var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b = (this.pagination.bulletSize * g - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                w = e ? "right" : "left";
            h.css(this.isHorizontal() ? w : "top", b + "px");
          }
        }

        if ("fraction" === t.type && (a.find("." + t.currentClass).text(t.formatFractionCurrent(i + 1)), a.find("." + t.totalClass).text(t.formatFractionTotal(r))), "progressbar" === t.type) {
          var y;
          y = t.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
          var x = (i + 1) / r,
              E = 1,
              T = 1;
          "horizontal" === y ? E = x : T = x, a.find("." + t.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + E + ") scaleY(" + T + ")").transition(this.params.speed);
        }

        "custom" === t.type && t.renderCustom ? (a.html(t.renderCustom(this, i + 1, r)), this.emit("paginationRender", this, a[0])) : this.emit("paginationUpdate", this, a[0]), a[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass);
      }
    },
    render: function () {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";

        if ("bullets" === e.type) {
          for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";

          i.html(s), this.pagination.bullets = i.find("." + e.bulletClass);
        }

        "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]);
      }
    },
    init: function () {
      var e = this,
          t = e.params.pagination;

      if (t.el) {
        var i = n(t.el);
        0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("" + t.modifierClass + t.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, function (t) {
          t.preventDefault();
          var i = n(this).index() * e.params.slidesPerGroup;
          e.params.loop && (i += e.loopedSlides), e.slideTo(i);
        }), d.extend(e.pagination, {
          $el: i,
          el: i[0]
        }));
      }
    },
    destroy: function () {
      var e = this.params.pagination;

      if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
        var t = this.pagination.$el;
        t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass);
      }
    }
  },
      le = {
    setTranslate: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
        t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
          n[0].style.opacity = 0, n.transition(400);
        }, 1e3));
      }
    },
    setTransition: function (e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function () {
      if (this.params.scrollbar.el && this.scrollbar.el) {
        var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
        t[0].style.width = "", t[0].style.height = "";
        var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
        s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), d.extend(e, {
          trackSize: a,
          divider: r,
          moveDivider: n,
          dragSize: s
        }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass);
      }
    },
    getPointerPosition: function (e) {
      return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function (e) {
      var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
      t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
      var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
      this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function (e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function (e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
      this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = d.nextTick(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest());
    },
    enableDraggable: function () {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = e.$el[0],
            n = !(!h.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.touch ? (r.addEventListener(t.start, this.scrollbar.onDragStart, n), r.addEventListener(t.move, this.scrollbar.onDragMove, n), r.addEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.addEventListener(s.start, this.scrollbar.onDragStart, n), i.addEventListener(s.move, this.scrollbar.onDragMove, n), i.addEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    disableDraggable: function () {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = e.$el[0],
            n = !(!h.passiveListener || !a.passiveListeners) && {
          passive: !1,
          capture: !1
        },
            o = !(!h.passiveListener || !a.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        h.touch ? (r.removeEventListener(t.start, this.scrollbar.onDragStart, n), r.removeEventListener(t.move, this.scrollbar.onDragMove, n), r.removeEventListener(t.end, this.scrollbar.onDragEnd, o)) : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n), i.removeEventListener(s.move, this.scrollbar.onDragMove, n), i.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
      }
    },
    init: function () {
      if (this.params.scrollbar.el) {
        var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            s = n(i.el);
        this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
        var a = s.find("." + this.params.scrollbar.dragClass);
        0 === a.length && (a = n('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), d.extend(e, {
          $el: s,
          el: s[0],
          $dragEl: a,
          dragEl: a[0]
        }), i.draggable && e.enableDraggable();
      }
    },
    destroy: function () {
      this.scrollbar.disableDraggable();
    }
  },
      de = {
    setTransform: function (e, t) {
      var i = this.rtl,
          s = n(e),
          a = i ? -1 : 1,
          r = s.attr("data-swiper-parallax") || "0",
          o = s.attr("data-swiper-parallax-x"),
          l = s.attr("data-swiper-parallax-y"),
          d = s.attr("data-swiper-parallax-scale"),
          h = s.attr("data-swiper-parallax-opacity");

      if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * a + "%" : o * t * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px", null != h) {
        var p = h - (h - 1) * (1 - Math.abs(t));
        s[0].style.opacity = p;
      }

      if (null == d) s.transform("translate3d(" + o + ", " + l + ", 0px)");else {
        var c = d - (d - 1) * (1 - Math.abs(t));
        s.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
      }
    },
    setTranslate: function () {
      var e = this,
          t = e.$el,
          i = e.slides,
          s = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
        e.parallax.setTransform(i, s);
      }), i.each(function (t, i) {
        var r = i.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - s * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), n(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
          e.parallax.setTransform(i, r);
        });
      });
    },
    setTransition: function (e) {
      void 0 === e && (e = this.params.speed);
      this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (t, i) {
        var s = n(i),
            a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (a = 0), s.transition(a);
      });
    }
  },
      he = {
    getDistanceBetweenTouches: function (e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
    },
    onGestureStart: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !h.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, s.scaleStart = he.getDistanceBetweenTouches(e);
      }

      s.$slideEl && s.$slideEl.length || (s.$slideEl = n(e.target).closest("." + this.params.slideClass), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl && s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0;
    },
    onGestureChange: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureMoved = !0, s.scaleMove = he.getDistanceBetweenTouches(e);
      }

      s.$imageEl && 0 !== s.$imageEl.length && (i.scale = h.gestures ? e.scale * i.currentScale : s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
    },
    onGestureEnd: function (e) {
      var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;

      if (!h.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !A.android) return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }

      s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0));
    },
    onTouchStart: function (e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image;
      i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (A.android && e.cancelable && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function (e) {
      var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;

      if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        var r = s.width * t.scale,
            n = s.height * t.scale;

        if (!(r < i.slideWidth && n < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
            if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
            if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
          }

          e.cancelable && e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
        }
      }
    },
    onTouchEnd: function () {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;

      if (t.$imageEl && 0 !== t.$imageEl.length) {
        if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
        i.isTouched = !1, i.isMoved = !1;
        var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
        0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
        var h = Math.max(a, r);
        i.currentX = o, i.currentY = d;
        var p = i.width * e.scale,
            c = i.height * e.scale;
        i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
      }
    },
    onTransitionEnd: function () {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function (e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t.in(e);
    },
    in: function (e) {
      var t,
          i,
          s,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g = this.zoom,
          b = this.params.zoom,
          w = g.gesture,
          y = g.image;
      (w.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? w.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : w.$slideEl = this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"));
    },
    out: function () {
      var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
      i.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : i.$slideEl = this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0);
    },
    enable: function () {
      var e = this.zoom;

      if (!e.enabled) {
        e.enabled = !0;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            i = !h.passiveListener || {
          passive: !1,
          capture: !0
        },
            s = "." + this.params.slideClass;
        h.gestures ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
      }
    },
    disable: function () {
      var e = this.zoom;

      if (e.enabled) {
        this.zoom.enabled = !1;
        var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
          passive: !0,
          capture: !1
        },
            i = !h.passiveListener || {
          passive: !1,
          capture: !0
        },
            s = "." + this.params.slideClass;
        h.gestures ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t), this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t), this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, s, e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, s, e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, s, e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i);
      }
    }
  },
      pe = {
    loadInSlide: function (e, t) {
      void 0 === t && (t = !0);
      var i = this,
          s = i.params.lazy;

      if (void 0 !== e && 0 !== i.slides.length) {
        var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : i.slides.eq(e),
            r = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
        !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (r = r.add(a[0])), 0 !== r.length && r.each(function (e, r) {
          var o = n(r);
          o.addClass(s.loadingClass);
          var l = o.attr("data-background"),
              d = o.attr("data-src"),
              h = o.attr("data-srcset"),
              p = o.attr("data-sizes"),
              c = o.parent("picture");
          i.loadImage(o[0], d || l, h, p, !1, function () {
            if (null != i && i && (!i || i.params) && !i.destroyed) {
              if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")), p && (o.attr("sizes", p), o.removeAttr("data-sizes")), c.length && c.children("source").each(function (e, t) {
                var i = n(t);
                i.attr("data-srcset") && (i.attr("srcset", i.attr("data-srcset")), i.removeAttr("data-srcset"));
              }), d && (o.attr("src", d), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                var e = a.attr("data-swiper-slide-index");

                if (a.hasClass(i.params.slideDuplicateClass)) {
                  var r = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                  i.lazy.loadInSlide(r.index(), !1);
                } else {
                  var u = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                  i.lazy.loadInSlide(u.index(), !1);
                }
              }

              i.emit("lazyImageReady", a[0], o[0]), i.params.autoHeight && i.updateAutoHeight();
            }
          }), i.emit("lazyImageLoad", a[0], o[0]);
        });
      }
    },
    load: function () {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          s = e.slides,
          a = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;

      function d(e) {
        if (r) {
          if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
        } else if (s[e]) return !0;

        return !1;
      }

      function h(e) {
        return r ? n(e).attr("data-swiper-slide-index") : n(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (t, i) {
        var s = r ? n(i).attr("data-swiper-slide-index") : n(i).index();
        e.lazy.loadInSlide(s);
      });else if (l > 1) for (var p = a; p < a + l; p += 1) d(p) && e.lazy.loadInSlide(p);else e.lazy.loadInSlide(a);
      if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        for (var c = o.loadPrevNextAmount, u = l, v = Math.min(a + u + Math.max(c, u), s.length), f = Math.max(a - Math.max(u, c), 0), m = a + l; m < v; m += 1) d(m) && e.lazy.loadInSlide(m);

        for (var g = f; g < a; g += 1) d(g) && e.lazy.loadInSlide(g);
      } else {
        var b = t.children("." + i.slideNextClass);
        b.length > 0 && e.lazy.loadInSlide(h(b));
        var w = t.children("." + i.slidePrevClass);
        w.length > 0 && e.lazy.loadInSlide(h(w));
      }
    }
  },
      ce = {
    LinearSpline: function (e, t) {
      var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
        for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;

        return i;
      };

      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
      }, this;
    },
    getInterpolateFunction: function (e) {
      this.controller.spline || (this.controller.spline = this.params.loop ? new ce.LinearSpline(this.slidesGrid, e.slidesGrid) : new ce.LinearSpline(this.snapGrid, e.snapGrid));
    },
    setTranslate: function (e, t) {
      var i,
          s,
          a = this,
          r = a.controller.control;

      function n(e) {
        var t = a.rtlTranslate ? -a.translate : a.translate;
        "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof j && n(r[o]);else r instanceof j && t !== r && n(r);
    },
    setTransition: function (e, t) {
      var i,
          s = this,
          a = s.controller.control;

      function r(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof j && r(a[i]);else a instanceof j && t !== a && r(a);
    }
  },
      ue = {
    makeElFocusable: function (e) {
      return e.attr("tabIndex", "0"), e;
    },
    makeElNotFocusable: function (e) {
      return e.attr("tabIndex", "-1"), e;
    },
    addElRole: function (e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function (e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function (e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function (e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function (e) {
      var t = this.params.a11y;

      if (13 === e.keyCode) {
        var i = n(e.target);
        this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify: function (e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function () {
      if (!this.params.loop && this.navigation) {
        var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
        i && i.length > 0 && (this.isBeginning ? (this.a11y.disableEl(i), this.a11y.makeElNotFocusable(i)) : (this.a11y.enableEl(i), this.a11y.makeElFocusable(i))), t && t.length > 0 && (this.isEnd ? (this.a11y.disableEl(t), this.a11y.makeElNotFocusable(t)) : (this.a11y.enableEl(t), this.a11y.makeElFocusable(t)));
      }
    },
    updatePagination: function () {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, s) {
        var a = n(s);
        e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1));
      });
    },
    init: function () {
      this.$el.append(this.a11y.liveRegion);
      var e,
          t,
          i = this.params.a11y;
      this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    },
    destroy: function () {
      var e, t;
      this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey);
    }
  },
      ve = {
    init: function () {
      if (this.params.history) {
        if (!a.history || !a.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
        var e = this.history;
        e.initialized = !0, e.paths = ve.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || a.addEventListener("popstate", this.history.setHistoryPopState));
      }
    },
    destroy: function () {
      this.params.history.replaceState || a.removeEventListener("popstate", this.history.setHistoryPopState);
    },
    setHistoryPopState: function () {
      this.history.paths = ve.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function () {
      var e = a.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          t = e.length;
      return {
        key: e[t - 2],
        value: e[t - 1]
      };
    },
    setHistory: function (e, t) {
      if (this.history.initialized && this.params.history.enabled) {
        var i = this.slides.eq(t),
            s = ve.slugify(i.attr("data-history"));
        a.location.pathname.includes(e) || (s = e + "/" + s);
        var r = a.history.state;
        r && r.value === s || (this.params.history.replaceState ? a.history.replaceState({
          value: s
        }, null, s) : a.history.pushState({
          value: s
        }, null, s));
      }
    },
    slugify: function (e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function (e, t, i) {
      if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
        var r = this.slides.eq(s);

        if (ve.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
          var n = r.index();
          this.slideTo(n, e, i);
        }
      } else this.slideTo(0, e, i);
    }
  },
      fe = {
    onHashCange: function () {
      this.emit("hashChange");
      var e = i.location.hash.replace("#", "");

      if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
        var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
        if (void 0 === t) return;
        this.slideTo(t);
      }
    },
    setHash: function () {
      if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""), this.emit("hashSet");else {
        var e = this.slides.eq(this.activeIndex),
            t = e.attr("data-hash") || e.attr("data-history");
        i.location.hash = t || "", this.emit("hashSet");
      }
    },
    init: function () {
      if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
        this.hashNavigation.initialized = !0;
        var e = i.location.hash.replace("#", "");
        if (e) for (var t = 0, s = this.slides.length; t < s; t += 1) {
          var r = this.slides.eq(t);

          if ((r.attr("data-hash") || r.attr("data-history")) === e && !r.hasClass(this.params.slideDuplicateClass)) {
            var o = r.index();
            this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
          }
        }
        this.params.hashNavigation.watchState && n(a).on("hashchange", this.hashNavigation.onHashCange);
      }
    },
    destroy: function () {
      this.params.hashNavigation.watchState && n(a).off("hashchange", this.hashNavigation.onHashCange);
    }
  },
      me = {
    run: function () {
      var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = d.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run();
      }, i);
    },
    start: function () {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function () {
      return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0);
    },
    pause: function (e) {
      this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())));
    }
  },
      ge = {
    setTranslate: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1) {
        var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
        this.params.virtualTranslate || (s -= this.translate);
        var a = 0;
        this.isHorizontal() || (a = s, s = 0);
        var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: r
        }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
      }
    },
    setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var a = !1;
        i.transitionEnd(function () {
          if (!a && t && !t.destroyed) {
            a = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
          }
        });
      }
    }
  },
      be = {
    setTranslate: function () {
      var e,
          t = this.$el,
          i = this.$wrapperEl,
          s = this.slides,
          a = this.width,
          r = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
      d.shadow && (h ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
        height: a + "px"
      })) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = n('<div class="swiper-cube-shadow"></div>'), t.append(e)));

      for (var u = 0; u < s.length; u += 1) {
        var v = s.eq(u),
            f = u;
        p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
        var m = 90 * f,
            g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), h || (y = w, w = 0);
        var E = "rotateX(" + (h ? 0 : -m) + "deg) rotateY(" + (h ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";

        if (b <= 1 && b > -1 && (c = 90 * f + 90 * b, o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows) {
          var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
          0 === T.length && (T = n('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>'), v.append(T)), 0 === S.length && (S = n('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>'), v.append(S)), T.length && (T[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }

      if (i.css({
        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
        "transform-origin": "50% 50% -" + l / 2 + "px"
      }), d.shadow) if (h) e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");else {
        var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
            P = d.shadowScale,
            z = d.shadowScale / M,
            k = d.shadowOffset;
        e.transform("scale3d(" + P + ", 1, " + z + ") translate3d(0px, " + (r / 2 + k) + "px, " + -r / 2 / z + "px) rotateX(-90deg)");
      }
      var $ = _.isSafari || _.isUiWebView ? -l / 2 : 0;
      i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (this.isHorizontal() ? 0 : c) + "deg) rotateY(" + (this.isHorizontal() ? -c : 0) + "deg)");
    },
    setTransition: function (e) {
      var t = this.$el;
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  },
      we = {
    setTranslate: function () {
      for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
        var s = e.eq(i),
            a = s[0].progress;
        this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
        var r = -180 * a,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;

        if (this.isHorizontal() ? t && (r = -r) : (d = l, l = 0, o = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
          var h = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
          0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(h)), 0 === p.length && (p = n('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(p)), h.length && (h[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0));
        }

        s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + r + "deg)");
      }
    },
    setTransition: function (e) {
      var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var r = !1;
        i.eq(s).transitionEnd(function () {
          if (!r && t && !t.destroyed) {
            r = !0, t.animating = !1;

            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
          }
        });
      }
    }
  },
      ye = {
    setTranslate: function () {
      for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, d = o ? e / 2 - l : t / 2 - l, p = o ? r.rotate : -r.rotate, c = r.depth, u = 0, v = i.length; u < v; u += 1) {
        var f = i.eq(u),
            m = a[u],
            g = (d - f[0].swiperSlideOffset - m / 2) / m * r.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = r.stretch;
        "string" == typeof x && -1 !== x.indexOf("%") && (x = parseFloat(r.stretch) / 100 * m);
        var E = o ? 0 : x * g,
            T = o ? x * g : 0,
            S = 1 - (1 - r.scale) * Math.abs(g);
        Math.abs(T) < .001 && (T = 0), Math.abs(E) < .001 && (E = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0), Math.abs(S) < .001 && (S = 0);
        var C = "translate3d(" + T + "px," + E + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg) scale(" + S + ")";

        if (f.transform(C), f[0].style.zIndex = 1 - Math.abs(Math.round(g)), r.slideShadows) {
          var M = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              P = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
          0 === M.length && (M = n('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), f.append(M)), 0 === P.length && (P = n('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), f.append(P)), M.length && (M[0].style.opacity = g > 0 ? g : 0), P.length && (P[0].style.opacity = -g > 0 ? -g : 0);
        }
      }

      (h.pointerEvents || h.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%");
    },
    setTransition: function (e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  },
      xe = {
    init: function () {
      var e = this.params.thumbs,
          t = this.constructor;
      e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, d.extend(this.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), d.extend(this.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : d.isObject(e.swiper) && (this.thumbs.swiper = new t(d.extend({}, e.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
    },
    onThumbClick: function () {
      var e = this.thumbs.swiper;

      if (e) {
        var t = e.clickedIndex,
            i = e.clickedSlide;

        if (!(i && n(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
          var s;

          if (s = e.params.loop ? parseInt(n(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
            var a = this.activeIndex;
            this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
            var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                o = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
            s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r;
          }

          this.slideTo(s);
        }
      }
    },
    update: function (e) {
      var t = this.thumbs.swiper;

      if (t) {
        var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView,
            s = this.params.thumbs.autoScrollOffset,
            a = s && !t.params.loop;

        if (this.realIndex !== t.realIndex || a) {
          var r,
              n,
              o = t.activeIndex;

          if (t.params.loop) {
            t.slides.eq(o).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, o = t.activeIndex);
            var l = t.slides.eq(o).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(),
                d = t.slides.eq(o).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
            r = void 0 === l ? d : void 0 === d ? l : d - o == o - l ? o : d - o < o - l ? d : l, n = this.activeIndex > this.previousIndex ? "next" : "prev";
          } else n = (r = this.realIndex) > this.previousIndex ? "next" : "prev";

          a && (r += "next" === n ? s : -1 * s), t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(r) < 0 && (t.params.centeredSlides ? r = r > o ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > o && (r = r - i + 1), t.slideTo(r, e ? 0 : void 0));
        }

        var h = 1,
            p = this.params.thumbs.slideThumbActiveClass;
        if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (h = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (h = 1), h = Math.floor(h), t.slides.removeClass(p), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var c = 0; c < h; c += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + c) + '"]').addClass(p);else for (var u = 0; u < h; u += 1) t.slides.eq(this.realIndex + u).addClass(p);
      }
    }
  },
      Ee = [K, U, Z, Q, ee, ie, ae, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function () {
      d.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: re.enable.bind(this),
          disable: re.disable.bind(this),
          handle: re.handle.bind(this),
          handleMouseEnter: re.handleMouseEnter.bind(this),
          handleMouseLeave: re.handleMouseLeave.bind(this),
          animateSlider: re.animateSlider.bind(this),
          releaseScroll: re.releaseScroll.bind(this),
          lastScrollTime: d.now(),
          lastEventBeforeSnap: void 0,
          recentWheelEvents: []
        }
      });
    },
    on: {
      init: function () {
        !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
      },
      destroy: function () {
        this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function () {
      d.extend(this, {
        navigation: {
          init: ne.init.bind(this),
          update: ne.update.bind(this),
          destroy: ne.destroy.bind(this),
          onNextClick: ne.onNextClick.bind(this),
          onPrevClick: ne.onPrevClick.bind(this)
        }
      });
    },
    on: {
      init: function () {
        this.navigation.init(), this.navigation.update();
      },
      toEdge: function () {
        this.navigation.update();
      },
      fromEdge: function () {
        this.navigation.update();
      },
      destroy: function () {
        this.navigation.destroy();
      },
      click: function (e) {
        var t,
            i = this.navigation,
            s = i.$nextEl,
            a = i.$prevEl;
        !this.params.navigation.hideOnClick || n(e.target).is(a) || n(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass));
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function (e) {
          return e;
        },
        formatFractionTotal: function (e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function () {
      d.extend(this, {
        pagination: {
          init: oe.init.bind(this),
          render: oe.render.bind(this),
          update: oe.update.bind(this),
          destroy: oe.destroy.bind(this),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function () {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      },
      activeIndexChange: function () {
        (this.params.loop || void 0 === this.snapIndex) && this.pagination.update();
      },
      snapIndexChange: function () {
        this.params.loop || this.pagination.update();
      },
      slidesLengthChange: function () {
        this.params.loop && (this.pagination.render(), this.pagination.update());
      },
      snapGridLengthChange: function () {
        this.params.loop || (this.pagination.render(), this.pagination.update());
      },
      destroy: function () {
        this.pagination.destroy();
      },
      click: function (e) {
        this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !n(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass));
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function () {
      d.extend(this, {
        scrollbar: {
          init: le.init.bind(this),
          destroy: le.destroy.bind(this),
          updateSize: le.updateSize.bind(this),
          setTranslate: le.setTranslate.bind(this),
          setTransition: le.setTransition.bind(this),
          enableDraggable: le.enableDraggable.bind(this),
          disableDraggable: le.disableDraggable.bind(this),
          setDragPosition: le.setDragPosition.bind(this),
          getPointerPosition: le.getPointerPosition.bind(this),
          onDragStart: le.onDragStart.bind(this),
          onDragMove: le.onDragMove.bind(this),
          onDragEnd: le.onDragEnd.bind(this),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function () {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      },
      update: function () {
        this.scrollbar.updateSize();
      },
      resize: function () {
        this.scrollbar.updateSize();
      },
      observerUpdate: function () {
        this.scrollbar.updateSize();
      },
      setTranslate: function () {
        this.scrollbar.setTranslate();
      },
      setTransition: function (e) {
        this.scrollbar.setTransition(e);
      },
      destroy: function () {
        this.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function () {
      d.extend(this, {
        parallax: {
          setTransform: de.setTransform.bind(this),
          setTranslate: de.setTranslate.bind(this),
          setTransition: de.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      init: function () {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTranslate: function () {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTransition: function (e) {
        this.params.parallax.enabled && this.parallax.setTransition(e);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function () {
      var e = this,
          t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = he[i].bind(e);
      }), d.extend(e, {
        zoom: t
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function () {
          return i;
        },
        set: function (t) {
          if (i !== t) {
            var s = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                a = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
            e.emit("zoomChange", t, s, a);
          }

          i = t;
        }
      });
    },
    on: {
      init: function () {
        this.params.zoom.enabled && this.zoom.enable();
      },
      destroy: function () {
        this.zoom.disable();
      },
      touchStart: function (e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      },
      touchEnd: function (e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      },
      doubleTap: function (e) {
        this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
      },
      transitionEnd: function () {
        this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
      },
      slideChange: function () {
        this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function () {
      d.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: pe.load.bind(this),
          loadInSlide: pe.loadInSlide.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
      },
      init: function () {
        this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
      },
      scroll: function () {
        this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
      },
      resize: function () {
        this.params.lazy.enabled && this.lazy.load();
      },
      scrollbarDragMove: function () {
        this.params.lazy.enabled && this.lazy.load();
      },
      transitionStart: function () {
        this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load();
      },
      transitionEnd: function () {
        this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
      },
      slideChange: function () {
        this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function () {
      d.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: ce.getInterpolateFunction.bind(this),
          setTranslate: ce.setTranslate.bind(this),
          setTransition: ce.setTransition.bind(this)
        }
      });
    },
    on: {
      update: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      resize: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      observerUpdate: function () {
        this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
      },
      setTranslate: function (e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      },
      setTransition: function (e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function () {
      var e = this;
      d.extend(e, {
        a11y: {
          liveRegion: n('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
        }
      }), Object.keys(ue).forEach(function (t) {
        e.a11y[t] = ue[t].bind(e);
      });
    },
    on: {
      init: function () {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      },
      toEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      fromEdge: function () {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      paginationUpdate: function () {
        this.params.a11y.enabled && this.a11y.updatePagination();
      },
      destroy: function () {
        this.params.a11y.enabled && this.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function () {
      d.extend(this, {
        history: {
          init: ve.init.bind(this),
          setHistory: ve.setHistory.bind(this),
          setHistoryPopState: ve.setHistoryPopState.bind(this),
          scrollToSlide: ve.scrollToSlide.bind(this),
          destroy: ve.destroy.bind(this)
        }
      });
    },
    on: {
      init: function () {
        this.params.history.enabled && this.history.init();
      },
      destroy: function () {
        this.params.history.enabled && this.history.destroy();
      },
      transitionEnd: function () {
        this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
      },
      slideChange: function () {
        this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function () {
      d.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: fe.init.bind(this),
          destroy: fe.destroy.bind(this),
          setHash: fe.setHash.bind(this),
          onHashCange: fe.onHashCange.bind(this)
        }
      });
    },
    on: {
      init: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.init();
      },
      destroy: function () {
        this.params.hashNavigation.enabled && this.hashNavigation.destroy();
      },
      transitionEnd: function () {
        this.hashNavigation.initialized && this.hashNavigation.setHash();
      },
      slideChange: function () {
        this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function () {
      var e = this;
      d.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: me.run.bind(e),
          start: me.start.bind(e),
          stop: me.stop.bind(e),
          pause: me.pause.bind(e),
          onVisibilityChange: function () {
            "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1);
          },
          onTransitionEnd: function (t) {
            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
          }
        }
      });
    },
    on: {
      init: function () {
        this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
      },
      beforeTransitionStart: function (e, t) {
        this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
      },
      sliderFirstMove: function () {
        this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
      },
      touchEnd: function () {
        this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
      },
      destroy: function () {
        this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function () {
      d.extend(this, {
        fadeEffect: {
          setTranslate: ge.setTranslate.bind(this),
          setTransition: ge.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        if ("fade" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "fade");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function () {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      },
      setTransition: function (e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function () {
      d.extend(this, {
        cubeEffect: {
          setTranslate: be.setTranslate.bind(this),
          setTransition: be.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        if ("cube" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: !1,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function () {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      },
      setTransition: function (e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function () {
      d.extend(this, {
        flipEffect: {
          setTranslate: we.setTranslate.bind(this),
          setTransition: we.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        if ("flip" === this.params.effect) {
          this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
          var e = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !0
          };
          d.extend(this.params, e), d.extend(this.originalParams, e);
        }
      },
      setTranslate: function () {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      },
      setTransition: function (e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function () {
      d.extend(this, {
        coverflowEffect: {
          setTranslate: ye.setTranslate.bind(this),
          setTransition: ye.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function () {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      },
      setTransition: function (e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: !0,
        autoScrollOffset: 0,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function () {
      d.extend(this, {
        thumbs: {
          swiper: null,
          init: xe.init.bind(this),
          update: xe.update.bind(this),
          onThumbClick: xe.onThumbClick.bind(this)
        }
      });
    },
    on: {
      beforeInit: function () {
        var e = this.params.thumbs;
        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
      },
      slideChange: function () {
        this.thumbs.swiper && this.thumbs.update();
      },
      update: function () {
        this.thumbs.swiper && this.thumbs.update();
      },
      resize: function () {
        this.thumbs.swiper && this.thumbs.update();
      },
      observerUpdate: function () {
        this.thumbs.swiper && this.thumbs.update();
      },
      setTransition: function (e) {
        var t = this.thumbs.swiper;
        t && t.setTransition(e);
      },
      beforeDestroy: function () {
        var e = this.thumbs.swiper;
        e && this.thumbs.swiperCreated && e && e.destroy();
      }
    }
  }];
  return void 0 === j.use && (j.use = j.Class.use, j.installModule = j.Class.installModule), j.use(Ee), j;
});
/*!
 * GSAP 3.3.4
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }

  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }

  function n(t) {
    return "string" == typeof t;
  }

  function o(t) {
    return "function" == typeof t;
  }

  function p(t) {
    return "number" == typeof t;
  }

  function q(t) {
    return void 0 === t;
  }

  function r(t) {
    return "object" == typeof t;
  }

  function s(t) {
    return !1 !== t;
  }

  function t() {
    return "undefined" != typeof window;
  }

  function u(t) {
    return o(t) || n(t);
  }

  function K(t) {
    return (l = pt(t, at)) && ie;
  }

  function L(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }

  function M(t, e) {
    return !e && console.warn(t);
  }

  function N(t, e) {
    return t && (at[t] = e) && l && (l[t] = e) || at;
  }

  function O() {
    return 0;
  }

  function Y(t) {
    var e,
        i,
        n = t[0];

    if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
      for (i = dt.length; i-- && !dt[i].targetTest(n););

      e = dt[i];
    }

    for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e))) || t.splice(i, 1);

    return t;
  }

  function Z(t) {
    return t._gsap || Y(yt(t))[0]._gsap;
  }

  function $(t, e) {
    var r = t[e];
    return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r;
  }

  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }

  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }

  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);

    return i < r;
  }

  function ca(t, e, r) {
    var i,
        n = p(t[1]),
        a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
        o = t[a];

    if (n && (o.duration = t[1]), o.parent = r, e) {
      for (i = o; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;

      o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
    }

    return o;
  }

  function da() {
    var t,
        e,
        r = ot.length,
        i = ot.slice(0);

    for (ut = {}, t = ot.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }

  function ea(t, e, r, i) {
    ot.length && da(), t.render(e, r, i), ot.length && da();
  }

  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;
  }

  function ga(t) {
    return t;
  }

  function ha(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);

    return t;
  }

  function ia(t, e) {
    for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }

  function ka(t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];

    return t;
  }

  function la(t, e) {
    var r,
        i = {};

    for (r in t) r in e || (i[r] = t[r]);

    return i;
  }

  function ma(t) {
    var e = t.parent || F,
        r = t.keyframes ? ia : ha;
    if (s(t.inherit)) for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
    return t;
  }

  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
        a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }

  function qa(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }

  function ra(t) {
    for (var e = t; e;) e._dirty = 1, e = e.parent;

    return t;
  }

  function ua(t) {
    return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }

  function wa(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }

  function xa(t) {
    return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0));
  }

  function ya(t, e) {
    var r;

    if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -B;
    }
  }

  function za(t, e, r, i) {
    return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a,
          s = t[i];
      if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
      s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
    }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || ya(t, e), t;
  }

  function Aa(t, e) {
    return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t);
  }

  function Ba(t, e, r, i) {
    return qt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }

  function Ea(t, e, r) {
    var i = t._repeat,
        n = aa(e) || 0;
    return t._dur = n, t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n, t._time > n && (t._time = n, t._tTime = Math.min(t._tTime, t._tDur)), r || ra(t.parent), t.parent && xa(t), t;
  }

  function Fa(t) {
    return t instanceof Bt ? ra(t) : Ea(t, t._dur);
  }

  function Ha(t, e) {
    var r,
        i,
        a = t.labels,
        s = t._recent || mt,
        o = t.duration() >= E ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ha(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
  }

  function Ia(t, e) {
    return t || 0 === t ? e(t) : e;
  }

  function Ka(t) {
    return (t + "").substr((parseFloat(t) + "").length);
  }

  function Na(t, e) {
    return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;
  }

  function Qa(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }

  function Ra(t) {
    if (o(t)) return t;

    var p = r(t) ? t : {
      each: t
    },
        _ = zt(p.ease),
        m = p.from || 0,
        g = parseFloat(p.base) || 0,
        v = {},
        e = 0 < m && m < 1,
        y = isNaN(m) || e,
        T = p.axis,
        b = m,
        w = m;

    return n(m) ? b = w = {
      center: .5,
      edges: .5,
      end: 1
    }[m] || 0 : !e && y && (b = m[0], w = m[1]), function (t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = v[d];

      if (!c) {
        if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, E])[1])) {
          for (h = -E; h < (h = r[f++].getBoundingClientRect().left) && f < d;);

          f--;
        }

        for (c = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = E, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : V(a * a + s * s), h < o && (h = o), o < l && (l = o);

        "random" === m && Qa(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ka(p.amount || p.each) || 0, _ = _ && d < 0 ? At(_) : _;
      }

      return d = (c[t] - c.min) / c.max || 0, aa(c.b + (_ ? _(d) : d) * c.v) + c.u;
    };
  }

  function Sa(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ka(t));
    };
  }

  function Ta(u, t) {
    var h,
        l,
        e = W(u);
    return !e && r(u) && (h = e = u.radius || E, u.values ? (u = yt(u.values), (l = !p(u[0])) && (h *= h)) : u = Sa(u.increment)), Ia(t, e ? o(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = E, s = 0, o = u.length; o--;) (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);

      return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Ka(t);
    } : Sa(u));
  }

  function Ua(t, e, r, i) {
    return Ia(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
    });
  }

  function Ya(e, r, t) {
    return Ia(t, function (t) {
      return e[~~r(t)];
    });
  }

  function _a(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : G), s += t.substr(a, e - a) + Ua(n ? r : +r[0], +r[1], +r[2] || 1e-5), a = i + 1;

    return s + t.substr(a, t.length - a);
  }

  function cb(t, e, r) {
    var i,
        n,
        a,
        s = t.labels,
        o = E;

    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);

    return a;
  }

  function eb(t) {
    return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
  }

  function jb(t, e, r) {
    return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0;
  }

  function kb(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;

    if (!c) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]) c = xt[t];else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];else if ("hsl" === t.substr(0, 3)) {
        if (c = d = t.match(G), e) {
          if (~t.indexOf("=")) return c = t.match(J), r && c.length < 4 && (c[3] = 1), c;
        } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = jb(s + 1 / 3, i, n), c[1] = jb(s, i, n), c[2] = jb(s - 1 / 3, i, n);
      } else c = t.match(G) || xt.transparent;
      c = c.map(Number);
    }

    return e && !d && (i = c[0] / wt, n = c[1] / wt, a = c[2] / wt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c;
  }

  function lb(t) {
    var r = [],
        i = [],
        n = -1;
    return t.split(kt).forEach(function (t) {
      var e = t.match(tt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }

  function mb(t, e, r) {
    var i,
        n,
        a,
        s,
        o = "",
        u = (t + o).match(kt),
        h = e ? "hsla(" : "rgba(",
        l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = kb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = lb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }

  function pb(t) {
    var e,
        r = t.join(" ");
    if (kt.lastIndex = 0, kt.test(r)) return e = Ot.test(r), t[1] = mb(t[1], e), t[0] = mb(t[0], e, lb(t[1])), !0;
  }

  function xb(t) {
    var e = (t + "").split("("),
        r = Ct[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Dt, "").trim() : +i, s = r.substr(e + 1).trim();

      return n;
    }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Ct._CE && St.test(t) ? Ct._CE("", t) : r;
  }

  function zb(t, e) {
    for (var r, i = t._first; i;) i instanceof Bt ? zb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? zb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
  }

  function Bb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
        a = {
      easeIn: e,
      easeOut: r,
      easeInOut: i
    };
    return _(t, function (t) {
      for (var e in Ct[t] = at[t] = a, Ct[n = t.toLowerCase()] = r, a) Ct[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ct[t + "." + e] = a[e];
    }), a;
  }

  function Cb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }

  function Db(r, t, e) {
    function el(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1;
    }

    var i = 1 <= t ? t : 1,
        n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
        a = n / I * (Math.asin(1 / i) || 0),
        s = "out" === r ? el : "in" === r ? function (t) {
      return 1 - el(1 - t);
    } : Cb(el);
    return n = I / n, s.config = function (t, e) {
      return Db(r, t, e);
    }, s;
  }

  function Eb(e, r) {
    function ml(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }

    void 0 === r && (r = 1.70158);
    var t = "out" === e ? ml : "in" === e ? function (t) {
      return 1 - ml(1 - t);
    } : Cb(ml);
    return t.config = function (t) {
      return Eb(e, t);
    }, t;
  }

  var F,
      i,
      a,
      h,
      l,
      f,
      d,
      c,
      m,
      g,
      v,
      y,
      T,
      b,
      w,
      x,
      k,
      P,
      C,
      S,
      D,
      A,
      z,
      U = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  },
      R = {
    duration: .5,
    overwrite: !1,
    delay: 0
  },
      E = 1e8,
      B = 1 / E,
      I = 2 * Math.PI,
      H = I / 4,
      X = 0,
      V = Math.sqrt,
      j = Math.cos,
      Q = Math.sin,
      W = Array.isArray,
      G = /(?:-?\.?\d|\.)+/gi,
      J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
      tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
      rt = /\(([^()]+)\)/i,
      it = /[+-]=-?[\.\d]+/,
      nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
      at = {},
      st = {},
      ot = [],
      ut = {},
      ht = {},
      lt = {},
      ft = 30,
      dt = [],
      ct = "",
      pt = function _merge(t, e) {
    for (var r in e) t[r] = e[r];

    return t;
  },
      _t = function _animationCycle(t, e) {
    return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
  },
      mt = {
    _start: 0,
    endTime: O
  },
      gt = function _clamp(t, e, r) {
    return r < t ? t : e < r ? e : r;
  },
      vt = [].slice,
      yt = function toArray(t, e) {
    return !n(t) || e || !a && Pt() ? W(t) ? function _flatten(t, e, r) {
      return void 0 === r && (r = []), t.forEach(function (t) {
        return n(t) && !e || Na(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);
      }) || r;
    }(t, e) : Na(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0);
  },
      Tt = function mapRange(e, t, r, i, n) {
    var a = t - e,
        s = i - r;
    return Ia(n, function (t) {
      return r + ((t - e) / a * s || 0);
    });
  },
      bt = function _callback(t, e, r) {
    var i,
        n,
        a = t.vars,
        s = a[e];
    if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ot.length && da(), i ? s.apply(n, i) : s.call(n);
  },
      wt = 255,
      xt = {
    aqua: [0, wt, wt],
    lime: [0, wt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, wt],
    navy: [0, 0, 128],
    white: [wt, wt, wt],
    olive: [128, 128, 0],
    yellow: [wt, wt, 0],
    orange: [wt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [wt, 0, 0],
    pink: [wt, 192, 203],
    cyan: [0, wt, wt],
    transparent: [wt, wt, wt, 0]
  },
      kt = function () {
    var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

    for (t in xt) e += "|" + t + "\\b";

    return new RegExp(e + ")", "gi");
  }(),
      Ot = /hsl[a]?\(/,
      Mt = (b = Date.now, w = 500, x = 33, k = b(), P = k, S = C = 1 / 240, T = {
    time: 0,
    frame: 0,
    tick: function tick() {
      gk(!0);
    },
    wake: function wake() {
      f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ie, (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function (t) {
        return setTimeout(t, 1e3 * (S - T.time) + 1 | 0);
      }, m = 1, gk(2));
    },
    sleep: function sleep() {
      (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;
    },
    lagSmoothing: function lagSmoothing(t, e) {
      w = t || 1e8, x = Math.min(e, w, 0);
    },
    fps: function fps(t) {
      C = 1 / (t || 240), S = T.time + C;
    },
    add: function add(t) {
      D.indexOf(t) < 0 && D.push(t), Pt();
    },
    remove: function remove(t) {
      var e;
      ~(e = D.indexOf(t)) && D.splice(e, 1);
    },
    _listeners: D = []
  }),
      Pt = function _wake() {
    return !m && Mt.wake();
  },
      Ct = {},
      St = /^[\d.\-M][\d.\-,\s]/,
      Dt = /["']/g,
      At = function _invertEase(e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
      zt = function _parseEase(t, e) {
    return t && (o(t) ? t : Ct[t] || xb(t)) || e;
  };

  function gk(e) {
    var t,
        r,
        i = b() - P,
        n = !0 === e;
    w < i && (k += i - x), P += i, T.time = (P - k) / 1e3, (0 < (t = T.time - S) || n) && (T.frame++, S += t + (C <= t ? .004 : C - t), r = 1), n || (g = v(gk)), r && D.forEach(function (t) {
      return t(T.time, i, T.frame, e);
    });
  }

  function Dl(t) {
    return t < z ? A * t * t : t < .7272727272727273 ? A * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? A * (t -= 2.25 / 2.75) * t + .9375 : A * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }

  _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Bb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), Ct.Linear.easeNone = Ct.none = Ct.Linear.easeIn, Bb("Elastic", Db("in"), Db("out"), Db()), A = 7.5625, z = 1 / 2.75, Bb("Bounce", function (t) {
    return 1 - Dl(1 - t);
  }, Dl), Bb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Bb("Circ", function (t) {
    return -(V(1 - t * t) - 1);
  }), Bb("Sine", function (t) {
    return 1 === t ? 1 : 1 - j(t * H);
  }), Bb("Back", Eb("in"), Eb("out"), Eb()), Ct.SteppedEase = Ct.steps = at.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
      return function (t) {
        return ((i * gt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, R.ease = Ct["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return ct += t + "," + t + "Params,";
  });

  var Et,
      Ft = function GSCache(t, e) {
    this.id = X++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Zt;
  },
      Rt = ((Et = Animation.prototype).delay = function delay(t) {
    return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
  }, Et.duration = function duration(t) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
  }, Et.totalDuration = function totalDuration(t) {
    return arguments.length ? (this._dirty = 0, Ea(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, Et.totalTime = function totalTime(t, e) {
    if (Pt(), !arguments.length) return this._tTime;
    var r = this.parent || this._dp;

    if (r && r.smoothChildTiming && this._ts) {
      for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;

      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && za(this._dp, this, this._start - this._delay);
    }

    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t), ea(this, t, e)), this;
  }, Et.time = function time(t, e) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
  }, Et.totalProgress = function totalProgress(t, e) {
    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, Et.progress = function progress(t, e) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, Et.iteration = function iteration(t, e) {
    var r = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1;
  }, Et.timeScale = function timeScale(t) {
    if (!arguments.length) return this._rts === -B ? 0 : this._rts;
    if (this._rts === t) return this;
    var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
    return this._rts = +t || 0, this._ts = this._ps || t === -B ? 0 : this._rts, function _recacheAncestors(t) {
      for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;

      return t;
    }(this.totalTime(gt(0, this._tDur, e), !0));
  }, Et.paused = function paused(t) {
    return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps;
  }, Et.startTime = function startTime(t) {
    if (arguments.length) {
      this._start = t;
      var e = this.parent || this._dp;
      return !e || !e._sort && this.parent || za(e, this, t - this._delay), this;
    }

    return this._start;
  }, Et.endTime = function endTime(t) {
    return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
  }, Et.rawTime = function rawTime(t) {
    var e = this.parent || this._dp;
    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;
  }, Et.repeat = function repeat(t) {
    return arguments.length ? (this._repeat = t, Fa(this)) : this._repeat;
  }, Et.repeatDelay = function repeatDelay(t) {
    return arguments.length ? (this._rDelay = t, Fa(this)) : this._rDelay;
  }, Et.yoyo = function yoyo(t) {
    return arguments.length ? (this._yoyo = t, this) : this._yoyo;
  }, Et.seek = function seek(t, e) {
    return this.totalTime(Ha(this, t), s(e));
  }, Et.restart = function restart(t, e) {
    return this.play().totalTime(t ? -this._delay : 0, s(e));
  }, Et.play = function play(t, e) {
    return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
  }, Et.reverse = function reverse(t, e) {
    return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
  }, Et.pause = function pause(t, e) {
    return null != t && this.seek(t, e), this.paused(!0);
  }, Et.resume = function resume() {
    return this.paused(!1);
  }, Et.reversed = function reversed(t) {
    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0;
  }, Et.invalidate = function invalidate() {
    return this._initted = 0, this._zTime = -B, this;
  }, Et.isActive = function isActive(t) {
    var e,
        r = this.parent || this._dp,
        i = this._start;
    return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B));
  }, Et.eventCallback = function eventCallback(t, e, r) {
    var i = this.vars;
    return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
  }, Et.then = function then(t) {
    var i = this;
    return new Promise(function (e) {
      function Sm() {
        var t = i.then;
        i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
      }

      var r = o(t) ? t : ga;
      i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Sm() : i._prom = Sm;
    });
  }, Et.kill = function kill() {
    eb(this);
  }, Animation);

  function Animation(t, e) {
    var r = t.parent || F;
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ea(this, +t.duration, 1), this.data = t.data, m || Mt.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
  }

  ha(Rt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -B,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });

  var Bt = function (i) {
    function Timeline(t, e) {
      var r;
      return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && ya(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Aa(_assertThisInitialized(r), t.scrollTrigger), r;
    }

    _inheritsLoose(Timeline, i);

    var t = Timeline.prototype;
    return t.to = function to(t, e, r, i) {
      return new Ht(t, ca(arguments, 0, this), Ha(this, p(e) ? i : r)), this;
    }, t.from = function from(t, e, r, i) {
      return new Ht(t, ca(arguments, 1, this), Ha(this, p(e) ? i : r)), this;
    }, t.fromTo = function fromTo(t, e, r, i, n) {
      return new Ht(t, ca(arguments, 2, this), Ha(this, p(e) ? n : i)), this;
    }, t.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ht(t, e, Ha(this, r), 1), this;
    }, t.call = function call(t, e, r) {
      return za(this, Ht.delayedCall(0, t, e), Ha(this, r));
    }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Ht(t, r, Ha(this, n)), this;
    }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
      return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);
    }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
      return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);
    }, t.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);

      if (v !== this._tTime || r || y) {
        if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = g + this._rDelay, (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && (i = g, s--), d = _t(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock)) {
          var T = c && 1 & d,
              b = T === (c && 1 & s);
          if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;
          if (b && (this._lock = 2, _ = T ? g + 1e-4 : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
          zb(this, p);
        }

        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if (!i._dur && "isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if (!i._dur && "isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, aa(_), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !i || e || bt(this, "onStart"), _ <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);

            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -B);
              break;
            }
          }

          n = a;
        } else {
          n = this._last;

          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -B : B);
                break;
              }
            }

            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
        this._onUpdate && !e && bt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }

      return this;
    }, t.add = function add(t, e) {
      var r = this;

      if (p(e) || (e = Ha(this, e)), !(t instanceof Rt)) {
        if (W(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), ra(this);
        if (n(t)) return this.addLabel(t, e);
        if (!o(t)) return this;
        t = Ht.delayedCall(0, t);
      }

      return this !== t ? za(this, t, e) : this;
    }, t.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -E);

      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Ht ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;

      return n;
    }, t.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, t.remove = function remove(t) {
      return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));
    }, t.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, t.addLabel = function addLabel(t, e) {
      return this.labels[t] = Ha(this, e), this;
    }, t.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, t.addPause = function addPause(t, e, r) {
      var i = Ht.delayedCall(0, e || O, r);
      return i.data = "isPause", this._hasPause = 1, za(this, i, Ha(this, t));
    }, t.removePause = function removePause(t) {
      var e = this._first;

      for (t = Ha(this, t); e;) e._start === t && "isPause" === e.data && qa(e), e = e._next;
    }, t.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) It !== i[n] && i[n].kill(t, e);

      return this;
    }, t.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = yt(t), a = this._first; a;) a instanceof Ht ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;

      return i;
    }, t.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r = this,
          i = Ha(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Ht.to(r, ha(e, {
        ease: "none",
        lazy: !1,
        time: i,
        duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B,
        onStart: function onStart() {
          r.pause();
          var t = e.duration || Math.abs((i - r._time) / r.timeScale());
          o._dur !== t && Ea(o, t).render(o._time, !0, !0), a && a.apply(o, s || []);
        }
      }));
      return o;
    }, t.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ha({
        startAt: {
          time: Ha(this, t)
        }
      }, r));
    }, t.recent = function recent() {
      return this._recent;
    }, t.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), cb(this, Ha(this, t));
    }, t.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), cb(this, Ha(this, t), 1);
    }, t.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
    }, t.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);

      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t), n = n._next;

      if (e) for (i in a) a[i] >= r && (a[i] += t);
      return ra(this);
    }, t.invalidate = function invalidate() {
      var t = this._first;

      for (this._lock = 0; t;) t.invalidate(), t = t._next;

      return i.prototype.invalidate.call(this);
    }, t.clear = function clear(t) {
      void 0 === t && (t = !0);

      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;

      return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this);
    }, t.totalDuration = function totalDuration(t) {
      var e,
          r,
          i,
          n,
          a = 0,
          s = this,
          o = s._last,
          u = E;
      if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));

      if (s._dirty) {
        for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, za(s, o, i - o._delay, 1)._lock = 0) : u = i, i < 0 && o._ts && (a -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), u = 0), a < (r = xa(o)) && o._ts && (a = r), o = e;

        Ea(s, s === F && s._time > a ? s._time : a, 1), s._dirty = 0;
      }

      return s._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (F._ts && (ea(F, wa(t, F)), d = Mt.frame), Mt.frame >= ft) {
        ft += U.autoSleep || 120;
        var e = F._first;

        if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;

          e || Mt.sleep();
        }
      }
    }, Timeline;
  }(Rt);

  ha(Bt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });

  function Lb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (ht[t] && !1 !== (h = new ht[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
      if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || W(t)) return n(t) ? Yt(t, s, e, i, a) : t;
      var u,
          h = {};

      for (u in t) h[u] = Yt(t[u], s, e, i, a);

      return h;
    }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c)) for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) f[h._props[d]] = l;
    return h;
  }

  var It,
      Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
    o(i) && (i = i(a || 0, t, s));
    var f,
        d = t[e],
        c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
        p = o(d) ? l ? jt : Vt : Xt;
    if (n(i) && (~i.indexOf("random(") && (i = _a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ka(c) || 0))), c !== i) return isNaN(c + i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
      var o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = new ee(this._pt, t, e, 0, 1, Wt, null, n),
          m = 0,
          g = 0;

      for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = _a(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(et) || []; o = et.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
        _next: _._pt,
        p: f || 1 === g ? f : ",",
        s: d,
        c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
        m: h && h < 4 ? Math.round : 0
      }, m = et.lastIndex);

      return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (it.test(i) || c) && (_.e = 0), this._pt = _;
    }.call(this, t, e, c, i, p, h || U.stringFilter, l)) : (f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Qt : Kt, 0, p), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
  },
      qt = function _initTween(t, e) {
    var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        w = _.callbackScope,
        x = _.runBackwards,
        k = _.yoyoEase,
        O = _.keyframes,
        M = _.autoRevert,
        P = t._dur,
        C = t._startAt,
        S = t._targets,
        D = t.parent,
        A = D && "nested" === D.data ? D.parent._targets : S,
        z = "auto" === t._overwrite,
        E = t.timeline;

    if (!E || O && m || (m = "none"), t._ease = zt(m, R.ease), t._yEase = k ? At(zt(!0 === k ? m : k, R.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !E) {
      if (p = (l = S[0] ? Z(S[0]).harness : 0) && _[l.prop], r = la(_, st), C && C.render(-1, !0).kill(), g) {
        if (qa(t._startAt = Ht.set(S, ha({
          data: "isStart",
          overwrite: !1,
          parent: D,
          immediateRender: !0,
          lazy: s(y),
          startAt: null,
          delay: 0,
          onUpdate: T,
          onUpdateParams: b,
          callbackScope: w,
          stagger: 0
        }, g))), v) if (0 < e) M || (t._startAt = 0);else if (P) return;
      } else if (x && P) if (C) M || (t._startAt = 0);else if (e && (v = !1), n = ha({
        overwrite: !1,
        data: "isFromStart",
        lazy: v && s(y),
        immediateRender: v,
        stagger: 0,
        parent: D
      }, r), p && (n[l.prop] = p), qa(t._startAt = Ht.set(S, n)), v) {
        if (!e) return;
      } else _initTween(t._startAt, B);

      for (t._pt = 0, y = P && s(y) || y && !P, i = 0; i < S.length; i++) {
        if (h = (o = S[i])._gsap || Y(S)[i]._gsap, t._ptLookup[i] = d = {}, ut[h.id] && da(), c = A === S ? i : A.indexOf(o), l && !1 !== (f = new l()).init(o, p || r, t, c, A) && (t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
          d[t] = a;
        }), f.priority && (u = 1)), !l || p) for (n in r) ht[n] && (f = Lb(n, r, t, c, o, A)) ? f.priority && (u = 1) : d[n] = a = Lt.call(t, o, n, "get", r[n], c, A, 0, _.stringFilter);
        t._op && t._op[i] && t.kill(o, t._op[i]), z && t._pt && (It = t, F.killTweensOf(o, d, "started"), It = 0), t._pt && y && (ut[h.id] = 1);
      }

      u && te(t), t._onInit && t._onInit(t);
    }

    t._from = !E && !!_.runBackwards, t._onUpdate = T, t._initted = !!t.parent;
  },
      Yt = function _parseFuncOrString(t, e, r, i, a) {
    return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? _a(t) : t;
  },
      Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
      Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
      Ht = function (A) {
    function Tween(t, e, i, n) {
      var a;
      "number" == typeof e && (i.duration = e, e = i, i = null);

      var o,
          h,
          l,
          f,
          d,
          c,
          _,
          m,
          g = (a = A.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          P = g.scrollTrigger,
          C = g.yoyoEase,
          S = a.parent,
          D = (W(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);

      if (a._targets = D.length ? Y(D) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
        if (e = a.vars, (o = a.timeline = new Bt({
          data: "nested",
          defaults: k || {}
        })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
          ease: "none"
        }), x.forEach(function (t) {
          return o.to(D, t, ">");
        });else {
          if (f = D.length, _ = b ? Ra(b) : O, r(b)) for (d in b) ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);

          for (h = 0; h < f; h++) {
            for (d in l = {}, e) Ut.indexOf(d) < 0 && (l[d] = e[d]);

            l.stagger = 0, C && (l.yoyoEase = C), m && pt(l, m), c = D[h], l.duration = +Yt(v, _assertThisInitialized(a), h, c, D), l.delay = (+Yt(y, _assertThisInitialized(a), h, c, D) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(c, l, _(h, c, D));
          }

          o.duration() ? v = y = 0 : a.timeline = 0;
        }
        v || a.duration(v = o.duration());
      } else a.timeline = 0;

      return !0 === w && (It = _assertThisInitialized(a), F.killTweensOf(D), It = 0), S && ya(S, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(S._time) && s(T) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== S.data) && (a._tTime = -B, a.render(Math.max(0, -y))), P && Aa(_assertThisInitialized(a), P), a;
    }

    _inheritsLoose(Tween, A);

    var t = Tween.prototype;
    return t.render = function render(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = this._time,
          c = this._tDur,
          p = this._dur,
          _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;

      if (p) {
        if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
          if (i = _, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && (i = p, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = _t(this._tTime, s), i === d && !r && this._initted) return this;
            a !== o && (l && this._yEase && zb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0));
          }

          if (!this._initted) {
            if (Ba(this, i, r, e)) return this._tTime = 0, this;
            if (p !== this._dur) return this.render(t, e, r);
          }

          for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || bt(this, "onStart"), n = this._pt; n;) n.r(h, n.d), n = n._next;

          l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !_ && !d || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
            a,
            s = t.ratio,
            o = e < 0 || !e && s && !t._start && t._zTime > B && !t._dp._lock || t._ts < 0 || t._dp._ts < 0 ? 0 : 1,
            u = t._rDelay,
            h = 0;
        if (u && t._repeat && (h = gt(0, t._tDur, e), _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ba(t, e, i, r)) if (o !== s || i || t._zTime === B || !e && t._zTime) {
          for (a = t._zTime, t._zTime = e || (r ? B : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || bt(t, "onStart"), n = t._pt; n;) n.r(o, n.d), n = n._next;

          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && bt(t, "onUpdate"), h && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (bt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);

      return this;
    }, t.targets = function targets() {
      return this._targets;
    }, t.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), A.prototype.invalidate.call(this);
    }, t.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return eb(this);

      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, It && !0 !== It.vars.overwrite)._first || eb(this), this.parent && r !== this.timeline.totalDuration() && Ea(this, this._dur * this.timeline._tDur / r), this;
      }

      var i,
          a,
          s,
          o,
          u,
          h,
          l,
          f = this._targets,
          d = t ? yt(t) : f,
          c = this._ptLookup,
          p = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);

        return r < 0;
      }(f, d)) return eb(this);

      for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
            i,
            n,
            a,
            s = t[0] ? Z(t[0]).harness : 0,
            o = s && s.aliases;
        if (!o) return e;

        for (i in r = pt({}, e), o) if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];

        return r;
      }(f, e)), l = f.length; l--;) if (~d.indexOf(f[l])) for (u in a = c[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o) (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);

      return this._initted && !this._pt && p && eb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return new Tween(t, ca(arguments, 1));
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return new Tween(t, ca(arguments, 2));
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return F.killTweensOf(t, e, r);
    }, Tween;
  }(Rt);

  ha(Ht.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), _("staggerTo,staggerFrom,staggerFromTo", function (r) {
    Ht[r] = function () {
      var t = new Bt(),
          e = vt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });

  function Wb(t, e, r) {
    return t.setAttribute(e, r);
  }

  function cc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }

  var Xt = function _setterPlain(t, e, r) {
    return t[e] = r;
  },
      Vt = function _setterFunc(t, e, r) {
    return t[e](r);
  },
      jt = function _setterFuncWithParam(t, e, r, i) {
    return t[e](i.fp, r);
  },
      Zt = function _getSetter(t, e) {
    return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Wb : Xt;
  },
      Kt = function _renderPlain(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
  },
      Qt = function _renderBoolean(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
      Wt = function _renderComplexString(t, e) {
    var r = e._pt,
        i = "";
    if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
      for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;

      i += e.c;
    }
    e.set(e.t, e.p, i, e);
  },
      Gt = function _renderPropTweens(t, e) {
    for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
  },
      $t = function _addPluginModifier(t, e, r, i) {
    for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
  },
      Jt = function _killPropTweensOf(t) {
    for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;

    return !e;
  },
      te = function _sortPropTweensByPriority(t) {
    for (var e, r, i, n, a = t._pt; a;) {
      for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;

      (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
    }

    t._pt = i;
  },
      ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
    this.mSet = this.mSet || this.set, this.set = cc, this.m = t, this.mt = r, this.tween = e;
  }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Kt, this.d = s || this, this.set = o || Xt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }

  _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return st[t] = 1;
  }), at.TweenMax = at.TweenLite = Ht, at.TimelineLite = at.TimelineMax = Bt, F = new Bt({
    sortChildren: !1,
    defaults: R,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), U.stringFilter = pb;
  var re = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
              r = o(t),
              i = e && !r && t.init ? function () {
            this._props = [];
          } : t,
              n = {
            init: O,
            render: Gt,
            add: Lt,
            kill: Jt,
            modifier: $t,
            rawVars: 0
          },
              a = {
            targetTest: 0,
            get: 0,
            getSetter: Zt,
            aliases: {},
            register: 0
          };

          if (Pt(), t !== i) {
            if (ht[e]) return;
            ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), ht[i.prop = e] = i, t.targetTest && (dt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }

          N(e, i), t.register && t.register(ie, i, ee);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return F.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = yt(i)[0]);
      var a = Z(i || {}).get,
          s = e ? ga : fa;
      return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function (t, e, r) {
        return s((ht[t] && ht[t].get || a)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = yt(r)).length) {
        var n = r.map(function (t) {
          return ie.quickSetter(t, e, i);
        }),
            a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t);
        };
      }

      r = r[0] || {};
      var s = ht[e],
          o = Z(r),
          u = o.harness && (o.harness.aliases || {})[e] || e,
          h = s ? function (t) {
        var e = new s();
        c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Gt(1, c);
      } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    isTweening: function isTweening(t) {
      return 0 < F.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = zt(t.ease, R.ease)), ka(R, t || {});
    },
    config: function config(t) {
      return ka(U, t || {});
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
          i = t.effect,
          e = t.plugins,
          a = t.defaults,
          s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.");
      }), lt[n] = function (t, e, r) {
        return i(yt(t), ha(e || {}, a), r);
      }, s && (Bt.prototype[n] = function (t, e, i) {
        return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i);
      });
    },
    registerEase: function registerEase(t, e) {
      Ct[t] = zt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? zt(t, e) : Ct;
    },
    getById: function getById(t) {
      return F.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
          i,
          n = new Bt(t);

      for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r;) i = r._next, !e && !r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay), r = i;

      return za(F, n, 0), n;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return W(e) ? Ya(e, wrap(0, e.length), t) : Ia(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
            n = 2 * i;
        return W(e) ? Ya(e, wrapYoyo(0, e.length - 1), t) : Ia(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Ra,
      random: Ua,
      snap: Ta,
      normalize: function normalize(t, e, r) {
        return Tt(t, e, 0, 1, r);
      },
      getUnit: Ka,
      clamp: function clamp(e, r, t) {
        return Ia(t, function (t) {
          return gt(e, r, t);
        });
      },
      splitColor: kb,
      toArray: yt,
      mapRange: Tt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];

        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ka(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };

        if (!a) {
          var s,
              o,
              u,
              h,
              l,
              f = n(e),
              d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (W(e) && !W(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));

            h--, a = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = pt(W(e) ? [] : {}, e));

          if (!u) {
            for (s in r) Lt.call(d, e, s, "get", r[s]);

            a = function func(t) {
              return Gt(t, d) || (f ? e.p : e);
            };
          }
        }

        return Ia(t, a);
      },
      shuffle: Qa
    },
    install: K,
    effects: lt,
    ticker: Mt,
    updateRoot: Bt.updateRoot,
    plugins: ht,
    globalTimeline: F,
    core: {
      PropTween: ee,
      globals: N,
      Tween: Ht,
      Timeline: Bt,
      Animation: Rt,
      getCache: Z,
      _removeLinkedListItem: pa
    }
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return re[t] = Ht[t];
  }), Mt.add(Bt.updateRoot), c = re.to({}, {
    duration: 0
  });

  function gc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;

    return r;
  }

  function ic(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;

          if (n(i) && (e = {}, _(i, function (t) {
            return e[t] = 1;
          }), i = e), a) {
            for (r in e = {}, i) e[r] = a(i[r]);

            i = e;
          }

          !function _addModifiers(t, e) {
            var r,
                i,
                n,
                a = t._targets;

            for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          }(t, i);
        };
      }
    };
  }

  var ie = re.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;

      for (a in e) (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]);
    }
  }, ic("roundProps", Sa), ic("modifiers"), ic("snap", Ta)) || re;
  Ht.version = Bt.version = ie.version = "3.3.4", f = 1, t() && Pt();

  function Tc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function Uc(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }

  function Vc(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }

  function Wc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }

  function Xc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }

  function Yc(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }

  function Zc(t, e, r) {
    return t.style[e] = r;
  }

  function $c(t, e, r) {
    return t.style.setProperty(e, r);
  }

  function _c(t, e, r) {
    return t._gsap[e] = r;
  }

  function ad(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }

  function bd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }

  function cd(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }

  function gd(t, e) {
    var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
    return r.style ? r : ae.createElement(t);
  }

  function hd(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && hd(t, Ne(e) || e, 1) || "";
  }

  function kd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (ne = window, ae = ne.document, se = ae.documentElement, ue = gd("div") || {
      style: {}
    }, he = gd("div"), Le = Ne(Le), qe = Ne(qe), ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", fe = !!Ne("perspective"), oe = 1);
  }

  function ld(t) {
    var e,
        r = gd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
        i = this.parentNode,
        n = this.nextSibling,
        a = this.style.cssText;
    if (se.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ld;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), this.style.cssText = a, e;
  }

  function md(t, e) {
    for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }

  function nd(e) {
    var r;

    try {
      r = e.getBBox();
    } catch (t) {
      r = ld.call(e, !0);
    }

    return r && (r.width || r.height) || e.getBBox === ld || (r = ld.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +md(e, ["x", "cx", "x1"]) || 0,
      y: +md(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }

  function od(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !nd(t));
  }

  function pd(t, e) {
    if (e) {
      var r = t.style;
      e in De && (e = Le), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }

  function qd(t, e, r, i, n, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Yc : Xc);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }

  function sd(t, e, r, i) {
    var n,
        a,
        s,
        o,
        u = parseFloat(r) || 0,
        h = (r + "").trim().substr((u + "").length) || "px",
        l = ue.style,
        f = Re.test(e),
        d = "svg" === t.tagName.toLowerCase(),
        c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
        p = "px" === i,
        _ = "%" === i;

    return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || p || (u = sd(t, e, r, "px")), o = t.getCTM && od(t), _ && (De[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ae && a.appendChild || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = hd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), n = ue[c], a.removeChild(ue), l.position = "absolute", f && _ && ((s = Z(a)).time = Mt.time, s.width = a[c]), aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))));
  }

  function td(t, e, r, i) {
    var n;
    return oe || kd(), e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]), De[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : Ke(hd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || hd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? sd(t, e, n, r) + r : n;
  }

  function ud(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ne(e, t, 1),
          a = n && hd(t, n, 1);
      a && a !== r && (e = n, r = a);
    }

    var s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v = new ee(this._pt, t.style, e, 0, 1, Wt),
        y = 0,
        T = 0;

    if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = hd(t, e) || i, t.style[e] = r), pb(s = [r, i]), i = s[1], u = (r = s[0]).match(tt) || [], (i.match(tt) || []).length) {
      for (; o = tt.exec(i);) d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = tt.lastIndex - _.length, _ || (_ = _ || U.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = sd(t, e, f, _) || 0), v._pt = {
        _next: v._pt,
        p: p || 1 === T ? p : ",",
        s: h,
        c: g ? g * c : c - h,
        m: l && l < 4 ? Math.round : 0
      });

      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? Yc : Xc;

    return it.test(i) && (v.e = 0), this._pt = v;
  }

  function wd(t) {
    var e = t.split(" "),
        r = e[0],
        i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = He[r] || r, e[1] = He[i] || i, e.join(" ");
  }

  function xd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
          i,
          n,
          a = e.t,
          s = a.style,
          o = e.u,
          u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], De[r] && (i = 1, r = "transformOrigin" === r ? qe : Le), pd(a, r);
      i && (pd(a, Le), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));
    }
  }

  function Bd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }

  function Cd(t) {
    var e = hd(t, Le);
    return Bd(e) ? Ve : e.substr(7).match(J).map(aa);
  }

  function Dd(t, e) {
    var r,
        i,
        n,
        a,
        s = t._gsap || Z(t),
        o = t.style,
        u = Cd(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, se.appendChild(t)), u = Cd(t), n ? o.display = n : pd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }

  function Ed(t, e, r, i, n, a) {
    var s,
        o,
        u,
        h = t._gsap,
        l = n || Dd(t, !0),
        f = h.xOrigin || 0,
        d = h.yOrigin || 0,
        c = h.xOffset || 0,
        p = h.yOffset || 0,
        _ = l[0],
        m = l[1],
        g = l[2],
        v = l[3],
        y = l[4],
        T = l[5],
        b = e.split(" "),
        w = parseFloat(b[0]) || 0,
        x = parseFloat(b[1]) || 0;
    r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = nd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[qe] = "0px 0px", a && (qd(a, h, "xOrigin", f, w), qd(a, h, "yOrigin", d, x), qd(a, h, "xOffset", c, h.xOffset), qd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }

  function Hd(t, e, r) {
    var i = Ka(e);
    return aa(parseFloat(e) + parseFloat(sd(t, "x", r + "px", i))) + i;
  }

  function Od(t, e, r, i, a, s) {
    var o,
        u,
        h = 360,
        l = n(a),
        f = parseFloat(a) * (l && ~a.indexOf("rad") ? Ae : 1),
        d = s ? f * s : f - i,
        c = i + d + "deg";
    return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ee(t._pt, e, r, i, d, Uc), u.e = c, u.u = "deg", t._props.push(r), u;
  }

  function Pd(t, e, r) {
    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l = he.style,
        f = r._gsap;

    for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Le] = e, ae.body.appendChild(he), i = Ze(he, 1), De) (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ka(a) !== (h = Ka(s)) ? sd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ee(t._pt, f, n, o, u - o, Tc), t._pt.u = h || 0, t._props.push(n));

    ae.body.removeChild(he);
  }

  var ne,
      ae,
      se,
      oe,
      ue,
      he,
      le,
      fe,
      de = Ct.Power0,
      ce = Ct.Power1,
      pe = Ct.Power2,
      _e = Ct.Power3,
      me = Ct.Power4,
      ge = Ct.Linear,
      ve = Ct.Quad,
      ye = Ct.Cubic,
      Te = Ct.Quart,
      be = Ct.Quint,
      we = Ct.Strong,
      xe = Ct.Elastic,
      ke = Ct.Back,
      Oe = Ct.SteppedEase,
      Me = Ct.Bounce,
      Pe = Ct.Sine,
      Ce = Ct.Expo,
      Se = Ct.Circ,
      De = {},
      Ae = 180 / Math.PI,
      ze = Math.PI / 180,
      Ee = Math.atan2,
      Fe = /([A-Z])/g,
      Re = /(?:left|right|width|margin|padding|x)/i,
      Be = /[\s,\(]\S/,
      Ie = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  },
      Le = "transform",
      qe = Le + "Origin",
      Ye = "O,Moz,ms,Ms,Webkit".split(","),
      Ne = function _checkPropPrefix(t, e, r) {
    var i = (e || ue).style,
        n = 5;
    if (t in i && !r) return t;

    for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i););

    return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t;
  },
      Ue = {
    deg: 1,
    rad: 1,
    turn: 1
  },
      He = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  },
      Xe = {
    clearProps: function clearProps(t, e, r, i, n) {
      if ("isFromStart" !== n.data) {
        var a = t._pt = new ee(t._pt, e, r, 0, 0, xd);
        return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
      }
    }
  },
      Ve = [1, 0, 0, 1, 0, 0],
      je = {},
      Ze = function _parseTransform(t, e) {
    var r = t._gsap || new Ft(t);
    if ("x" in r && !e && !r.uncache) return r;

    var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        M,
        P,
        C,
        S,
        D,
        A,
        z,
        E,
        F,
        R = t.style,
        B = r.scaleX < 0,
        I = "deg",
        L = hd(t, qe) || "0";

    return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !od(t)), m = Dd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Ed(t, M || L, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ve && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * Ae : 0, (f = w || x ? Ee(w, x) * Ae + u : 0) && (o *= Math.cos(f * ze)), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (F = m[6], z = m[7], S = m[8], D = m[9], A = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(F, A)) * Ae, g && (M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + D * y, C = F * v + A * y, S = k * -y + S * v, D = O * -y + D * v, A = F * -y + A * v, E = z * -y + E * v, k = M, O = P, F = C), l = (g = Ee(-w, A)) * Ae, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = M = T * v - S * y, b = P = b * v - D * y, w = C = w * v - A * y), u = (g = Ee(b, T)) * Ae, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + F * F)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * Ae : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Bd(hd(t, Le)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + I, r.rotationX = aa(h) + I, r.rotationY = aa(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[qe] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? tr : fe ? Je : Qe, r.uncache = 0, r;
  },
      Ke = function _firstTwoOnly(t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
      Qe = function _renderNon3DTransforms(t, e) {
    e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Je(t, e);
  },
      We = "0deg",
      Ge = "0px",
      $e = ") ",
      Je = function _renderCSSTransforms(t, e) {
    var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;

    if (v && (l !== We || h !== We)) {
      var b,
          w = parseFloat(h) * ze,
          x = Math.sin(w),
          k = Math.cos(w);
      w = parseFloat(l) * ze, b = Math.cos(w), a = Hd(g, a, x * b * -v), s = Hd(g, s, -Math.sin(w) * -v), o = Hd(g, o, k * b * -v + v);
    }

    _ !== Ge && (y += "perspective(" + _ + $e), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ge && s === Ge && o === Ge || (y += o !== Ge || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + $e), u !== We && (y += "rotate(" + u + $e), h !== We && (y += "rotateY(" + h + $e), l !== We && (y += "rotateX(" + l + $e), f === We && d === We || (y += "skew(" + f + ", " + d + $e), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + $e), g.style[Le] = y || "translate(0, 0)";
  },
      tr = function _renderSVGTransforms(t, e) {
    var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
    d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ze, c *= ze, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ze, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = sd(g, "x", l, "px"), k = sd(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Le] = s);
  };

  _("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
        i = "Bottom",
        n = "Left",
        o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
      return r < 2 ? e + t : "border" + t + e;
    });

    Xe[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return td(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });

  var er,
      rr,
      ir,
      nr = {
    name: "css",
    register: kd,
    targetTest: function targetTest(t) {
      return t.style && t.nodeType;
    },
    init: function init(t, e, r, i, n) {
      var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style;

      for (f in oe || kd(), e) if ("autoRound" !== f && (s = e[f], !ht[f] || !Lb(f, e, r, i, t, n))) if (h = typeof s, l = Xe[f], "function" === h && (h = typeof (s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = _a(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);else {
        if (a = td(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Ie && ("autoAlpha" === f && (1 === u && "hidden" === td(t, "visibility") && o && (u = 0), qd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in De) {
          if (m || ((g = t._gsap).renderTransform || Ze(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ee(this._pt, b, Le, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), T.push("scaleY", f), f += "X";else {
            if ("transformOrigin" === f) {
              s = wd(s), g.svg ? Ed(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && qd(this, g, "zOrigin", g.zOrigin, c), qd(this, b, f, Ke(a), Ke(s)));
              continue;
            }

            if ("svgOrigin" === f) {
              Ed(t, s, 1, v, 0, this);
              continue;
            }

            if (f in je) {
              Od(this, g, f, u, s, p);
              continue;
            }

            if ("smoothOrigin" === f) {
              qd(this, g, "smooth", g.smooth, s);
              continue;
            }

            if ("force3D" === f) {
              g[f] = s;
              continue;
            }

            if ("transform" === f) {
              Pd(this, s, t);
              continue;
            }
          }
        } else f in b || (f = Ne(f) || f);
        if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = sd(t, f, a, c)), this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Tc : Wc), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = Vc);else if (f in b) ud.call(this, t, f, a, s);else {
          if (!(f in t)) {
            L(f, s);
            continue;
          }

          this.add(t, f, t[f], s, i, n);
        }
        T.push(f);
      }

      y && te(this);
    },
    get: td,
    aliases: Ie,
    getSetter: function getSetter(t, e, r) {
      var i = Ie[e];
      return i && i.indexOf(",") < 0 && (e = i), e in De && e !== qe && (t._gsap.x || td(t, "x")) ? r && le === r ? "scale" === e ? ad : _c : (le = r || {}) && ("scale" === e ? bd : cd) : t.style && !q(t.style[e]) ? Zc : ~e.indexOf("-") ? $c : Zt(t, e);
    },
    core: {
      _removeProperty: pd,
      _getMatrix: Dd
    }
  };
  ie.utils.checkPrefix = Ne, ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    De[t] = 1;
  }), _(rr, function (t) {
    U.units[t] = "deg", je[t] = 1;
  }), Ie[ir[13]] = er + "," + rr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    Ie[e[1]] = ir[e[0]];
  }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    U.units[t] = "px";
  }), ie.registerPlugin(nr);
  var ar = ie.registerPlugin(nr) || ie,
      sr = ar.core.Tween;
  e.Back = ke, e.Bounce = Me, e.CSSPlugin = nr, e.Circ = Se, e.Cubic = ye, e.Elastic = xe, e.Expo = Ce, e.Linear = ge, e.Power0 = de, e.Power1 = ce, e.Power2 = pe, e.Power3 = _e, e.Power4 = me, e.Quad = ve, e.Quart = Te, e.Quint = be, e.Sine = Pe, e.SteppedEase = Oe, e.Strong = we, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Ht, e.TweenMax = sr, e.default = ar, e.gsap = ar;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
/*!
 * CustomEase 3.4.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function m(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }

  var b = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      w = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      Y = Math.PI / 180,
      k = Math.sin,
      B = Math.cos,
      F = Math.abs,
      J = Math.sqrt;

  function arcToSegment(e, t, n, s, a, r, i, o, h) {
    if (e !== o || t !== h) {
      n = F(n), s = F(s);
      var u = a % 360 * Y,
          f = B(u),
          c = k(u),
          l = Math.PI,
          g = 2 * l,
          d = (e - o) / 2,
          m = (t - h) / 2,
          x = f * d + c * m,
          p = -c * d + f * m,
          y = x * x,
          M = p * p,
          v = y / (n * n) + M / (s * s);
      1 < v && (n = J(v) * n, s = J(v) * s);
      var C = n * n,
          E = s * s,
          b = (C * E - C * M - E * y) / (C * M + E * y);
      b < 0 && (b = 0);

      var w = (r === i ? -1 : 1) * J(b),
          P = n * p / s * w,
          S = -s * x / n * w,
          N = f * P - c * S + (e + o) / 2,
          D = c * P + f * S + (t + h) / 2,
          T = (x - P) / n,
          V = (p - S) / s,
          _ = (-x - P) / n,
          q = (-p - S) / s,
          A = T * T + V * V,
          R = (V < 0 ? -1 : 1) * Math.acos(T / J(A)),
          G = (T * q - V * _ < 0 ? -1 : 1) * Math.acos((T * _ + V * q) / J(A * (_ * _ + q * q)));

      isNaN(G) && (G = l), !i && 0 < G ? G -= g : i && G < 0 && (G += g), R %= g, G %= g;
      var L,
          O = Math.ceil(F(G) / (g / 4)),
          j = [],
          z = G / O,
          I = 4 / 3 * k(z / 2) / (1 + B(z / 2)),
          H = f * n,
          Q = c * n,
          Z = c * -s,
          U = f * s;

      for (L = 0; L < O; L++) x = B(a = R + L * z), p = k(a), T = B(a += z), V = k(a), j.push(x - I * p, p + I * x, T + I * V, V - I * T, T, V);

      for (L = 0; L < j.length; L += 2) x = j[L], p = j[L + 1], j[L] = x * H + p * Z + N, j[L + 1] = x * Q + p * U + D;

      return j[L - 2] = o, j[L - 1] = h, j;
    }
  }

  function stringToRawPath(e) {
    function db(e, t, n, s) {
      f = (n - e) / 3, c = (s - t) / 3, o.push(e + f, t + c, n - f, s - c, n, s);
    }

    var t,
        n,
        s,
        a,
        r,
        i,
        o,
        h,
        u,
        f,
        c,
        l,
        g,
        d,
        m,
        x = (e + "").replace(w, function (e) {
      var t = +e;
      return t < 1e-4 && -1e-4 < t ? 0 : t;
    }).match(b) || [],
        p = [],
        y = 0,
        M = 0,
        v = x.length,
        C = 0,
        E = "ERROR: malformed path: " + e;
    if (!e || !isNaN(x[0]) || isNaN(x[1])) return console.log(E), p;

    for (t = 0; t < v; t++) if (g = r, isNaN(x[t]) ? i = (r = x[t].toUpperCase()) !== x[t] : t--, s = +x[t + 1], a = +x[t + 2], i && (s += y, a += M), t || (h = s, u = a), "M" === r) o && (o.length < 8 ? --p.length : C += o.length), y = h = s, M = u = a, o = [s, a], p.push(o), t += 2, r = "L";else if ("C" === r) i || (y = M = 0), (o = o || [0, 0]).push(s, a, y + 1 * x[t + 3], M + 1 * x[t + 4], y += 1 * x[t + 5], M += 1 * x[t + 6]), t += 6;else if ("S" === r) f = y, c = M, "C" !== g && "S" !== g || (f += y - o[o.length - 4], c += M - o[o.length - 3]), i || (y = M = 0), o.push(f, c, s, a, y += 1 * x[t + 3], M += 1 * x[t + 4]), t += 4;else if ("Q" === r) f = y + 2 / 3 * (s - y), c = M + 2 / 3 * (a - M), i || (y = M = 0), y += 1 * x[t + 3], M += 1 * x[t + 4], o.push(f, c, y + 2 / 3 * (s - y), M + 2 / 3 * (a - M), y, M), t += 4;else if ("T" === r) f = y - o[o.length - 4], c = M - o[o.length - 3], o.push(y + f, M + c, s + 2 / 3 * (y + 1.5 * f - s), a + 2 / 3 * (M + 1.5 * c - a), y = s, M = a), t += 2;else if ("H" === r) db(y, M, y = s, M), t += 1;else if ("V" === r) db(y, M, y, M = s + (i ? M - y : 0)), t += 1;else if ("L" === r || "Z" === r) "Z" === r && (s = h, a = u, o.closed = !0), ("L" === r || .5 < F(y - s) || .5 < F(M - a)) && (db(y, M, s, a), "L" === r && (t += 2)), y = s, M = a;else if ("A" === r) {
      if (d = x[t + 4], m = x[t + 5], f = x[t + 6], c = x[t + 7], n = 7, 1 < d.length && (d.length < 3 ? (c = f, f = m, n--) : (c = m, f = d.substr(2), n -= 2), m = d.charAt(1), d = d.charAt(0)), l = arcToSegment(y, M, +x[t + 1], +x[t + 2], +x[t + 3], +d, +m, (i ? y : 0) + 1 * f, (i ? M : 0) + 1 * c), t += n, l) for (n = 0; n < l.length; n++) o.push(l[n]);
      y = o[o.length - 2], M = o[o.length - 1];
    } else console.log(E);

    return (t = o.length) < 6 ? (p.pop(), t = 0) : o[0] === o[t - 2] && o[1] === o[t - 1] && (o.closed = !0), p.totalPoints = C + t, p;
  }

  function p() {
    return M || "undefined" != typeof window && (M = window.gsap) && M.registerPlugin && M;
  }

  function q() {
    (M = p()) ? (M.registerEase("_CE", n.create), a = 1) : console.warn("Please gsap.registerPlugin(CustomEase)");
  }

  function s(e) {
    return ~~(1e3 * e + (e < 0 ? -.5 : .5)) / 1e3;
  }

  function x(e, t, n, s, a, r, i, o, h, u, f) {
    var c,
        l = (e + n) / 2,
        g = (t + s) / 2,
        d = (n + a) / 2,
        m = (s + r) / 2,
        p = (a + i) / 2,
        y = (r + o) / 2,
        M = (l + d) / 2,
        v = (g + m) / 2,
        C = (d + p) / 2,
        E = (m + y) / 2,
        b = (M + C) / 2,
        w = (v + E) / 2,
        P = i - e,
        S = o - t,
        N = Math.abs((n - i) * S - (s - o) * P),
        D = Math.abs((a - i) * S - (r - o) * P);
    return u || (u = [{
      x: e,
      y: t
    }, {
      x: i,
      y: o
    }], f = 1), u.splice(f || u.length - 1, 0, {
      x: b,
      y: w
    }), h * (P * P + S * S) < (N + D) * (N + D) && (c = u.length, x(e, t, l, g, M, v, b, w, h, u, f), x(b, w, C, E, p, y, i, o, h, u, f + 1 + (u.length - c))), u;
  }

  var M,
      a,
      t,
      y = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      v = /[cLlsSaAhHvVtTqQ]/g,
      n = ((t = CustomEase.prototype).setData = function setData(e, t) {
    t = t || {};
    var n,
        s,
        a,
        r,
        i,
        o,
        h,
        u,
        f,
        c = (e = e || "0,0,1,1").match(y),
        l = 1,
        g = [],
        d = [],
        m = t.precision || 1,
        p = m <= 1;
    if (this.data = e, (v.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (c = stringToRawPath(e)[0]), 4 === (n = c.length)) c.unshift(0, 0), c.push(1, 1), n = 8;else if ((n - 2) % 6) throw "Invalid CustomEase";

    for (0 == +c[0] && 1 == +c[n - 2] || function _normalize(e, t, n) {
      n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
      var s,
          a = -1 * e[0],
          r = -n,
          i = e.length,
          o = 1 / (+e[i - 2] + a),
          h = -t || (Math.abs(e[i - 1] - e[1]) < .01 * (e[i - 2] - e[0]) ? function _findMinimum(e) {
        var t,
            n = e.length,
            s = 1e20;

        for (t = 1; t < n; t += 6) +e[t] < s && (s = +e[t]);

        return s;
      }(e) + r : +e[i - 1] + r);

      for (h = h ? 1 / h : -o, s = 0; s < i; s += 2) e[s] = (+e[s] + a) * o, e[s + 1] = (+e[s + 1] + r) * h;
    }(c, t.height, t.originY), this.segment = c, r = 2; r < n; r += 6) s = {
      x: +c[r - 2],
      y: +c[r - 1]
    }, a = {
      x: +c[r + 4],
      y: +c[r + 5]
    }, g.push(s, a), x(s.x, s.y, +c[r], +c[r + 1], +c[r + 2], +c[r + 3], a.x, a.y, 1 / (2e5 * m), g, g.length - 1);

    for (n = g.length, r = 0; r < n; r++) h = g[r], u = g[r - 1] || h, h.x > u.x || u.y !== h.y && u.x === h.x || h === u ? (u.cx = h.x - u.x, u.cy = h.y - u.y, u.n = h, u.nx = h.x, p && 1 < r && 2 < Math.abs(u.cy / u.cx - g[r - 2].cy / g[r - 2].cx) && (p = 0), u.cx < l && (u.cx ? l = u.cx : (u.cx = .001, r === n - 1 && (u.x -= .001, l = Math.min(l, .001), p = 0)))) : (g.splice(r--, 1), n--);

    if (i = 1 / (n = 1 / l + 1 | 0), h = g[o = 0], p) {
      for (r = 0; r < n; r++) f = r * i, h.nx < f && (h = g[++o]), s = h.y + (f - h.x) / h.cx * h.cy, d[r] = {
        x: f,
        cx: i,
        y: s,
        cy: 0,
        nx: 9
      }, r && (d[r - 1].cy = s - d[r - 1].y);

      d[n - 1].cy = g[g.length - 1].y - s;
    } else {
      for (r = 0; r < n; r++) h.nx < r * i && (h = g[++o]), d[r] = h;

      o < g.length - 1 && (d[r - 1] = g[g.length - 2]);
    }

    return this.ease = function (e) {
      var t = d[e * n | 0] || d[n - 1];
      return t.nx < e && (t = t.n), t.y + (e - t.x) / t.cx * t.cy;
    }, (this.ease.custom = this).id && M.registerEase(this.id, this.ease), this;
  }, t.getSVGData = function getSVGData(e) {
    return CustomEase.getSVGData(this, e);
  }, CustomEase.create = function create(e, t, n) {
    return new CustomEase(e, t, n).ease;
  }, CustomEase.register = function register(e) {
    M = e, q();
  }, CustomEase.get = function get(e) {
    return M.parseEase(e);
  }, CustomEase.getSVGData = function getSVGData(e, t) {
    var n,
        a,
        r,
        i,
        o,
        h,
        u,
        f,
        c,
        l,
        g = (t = t || {}).width || 100,
        d = t.height || 100,
        x = t.x || 0,
        p = (t.y || 0) + d,
        y = M.utils.toArray(t.path)[0];
    if (t.invert && (d = -d, p = 0), "string" == typeof e && (e = M.parseEase(e)), e.custom && (e = e.custom), e instanceof CustomEase) n = function rawPathToString(e) {
      !function _isNumber(e) {
        return "number" == typeof e;
      }(e[0]) || (e = [e]);
      var t,
          n,
          s,
          a,
          r = "",
          i = e.length;

      for (n = 0; n < i; n++) {
        for (a = e[n], r += "M" + m(a[0]) + "," + m(a[1]) + " C", t = a.length, s = 2; s < t; s++) r += m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s++]) + " " + m(a[s++]) + "," + m(a[s]) + " ";

        a.closed && (r += "z");
      }

      return r;
    }(function transformRawPath(e, t, n, s, a, r, i) {
      for (var o, h, u, f, c, l = e.length; -1 < --l;) for (h = (o = e[l]).length, u = 0; u < h; u += 2) f = o[u], c = o[u + 1], o[u] = f * t + c * s + r, o[u + 1] = f * n + c * a + i;

      return e._dirty = 1, e;
    }([e.segment], g, 0, 0, -d, x, p));else {
      for (n = [x, p], i = 1 / (u = Math.max(5, 200 * (t.precision || 1))), f = 5 / (u += 2), c = s(x + i * g), a = ((l = s(p + e(i) * -d)) - p) / (c - x), r = 2; r < u; r++) o = s(x + r * i * g), h = s(p + e(r * i) * -d), (Math.abs((h - l) / (o - c) - a) > f || r === u - 1) && (n.push(c, l), a = (h - l) / (o - c)), c = o, l = h;

      n = "M" + n.join(",");
    }
    return y && y.setAttribute("d", n), n;
  }, CustomEase);

  function CustomEase(e, t, n) {
    a || q(), this.id = e, this.setData(t, n);
  }

  p() && M.registerPlugin(n), n.version = "3.4.0", e.CustomEase = n, e.default = n;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

!function (factory) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery);
}(function ($) {
  "use strict";

  function init(options) {
    return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
      var $this = $(this),
          plugin = $this.data(PLUGIN_NS);
      plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
    });
  }

  function TouchSwipe(element, options) {
    function touchStart(jqEvent) {
      if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

        if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
          var ret,
              touches = event.touches,
              evt = touches ? touches[0] : event;
          return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
            $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target));
          }, this), options.longTapThreshold)), setTouchInProgress(!0), null);
        }
      }
    }

    function touchMove(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

      if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
        var ret,
            touches = event.touches,
            evt = touches ? touches[0] : event,
            currentFinger = updateFingerData(evt);

        if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
          if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
            var inBounds = !0;

            if (options.triggerOnTouchLeave) {
              var bounds = getbounds(this);
              inBounds = isInBounds(currentFinger.end, bounds);
            }

            !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase);
          }
        } else phase = PHASE_CANCEL, triggerHandler(event, phase);

        ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
      }
    }

    function touchEnd(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
          touches = event.touches;

      if (touches) {
        if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
        if (touches.length && inMultiFingerRelease()) return !0;
      }

      return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null;
    }

    function touchCancel() {
      fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
    }

    function touchLeave(jqEvent) {
      var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
      options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
    }

    function removeListeners() {
      $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1);
    }

    function getNextPhase(currentPhase) {
      var nextPhase = currentPhase,
          validTime = validateSwipeTime(),
          validDistance = validateSwipeDistance(),
          didCancel = didSwipeBackToCancel();
      return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase;
    }

    function triggerHandler(event, phase) {
      var ret,
          touches = event.touches;
      return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret;
    }

    function triggerHandlerForGesture(event, phase, gesture) {
      var ret;

      if (gesture == SWIPE) {
        if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;

        if (phase == PHASE_END && validateSwipe()) {
          if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;

          switch (direction) {
            case LEFT:
              $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;

            case RIGHT:
              $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;

            case UP:
              $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
              break;

            case DOWN:
              $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
          }
        }
      }

      if (gesture == PINCH) {
        if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
        if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
          case IN:
            $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
            break;

          case OUT:
            $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
        }
      }

      return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
        doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target));
      }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret;
    }

    function validateSwipeDistance() {
      var valid = !0;
      return null !== options.threshold && (valid = distance >= options.threshold), valid;
    }

    function didSwipeBackToCancel() {
      var cancelled = !1;
      return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled;
    }

    function validatePinchDistance() {
      return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold;
    }

    function validateSwipeTime() {
      var result;
      return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold);
    }

    function validateDefaultEvent(jqEvent, direction) {
      if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault();else {
        var auto = options.allowPageScroll === AUTO;

        switch (direction) {
          case LEFT:
            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;

          case RIGHT:
            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
            break;

          case UP:
            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;

          case DOWN:
            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
            break;

          case NONE:
        }
      }
    }

    function validatePinch() {
      var hasCorrectFingerCount = validateFingers(),
          hasEndPoint = validateEndPoint(),
          hasCorrectDistance = validatePinchDistance();
      return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
    }

    function hasPinches() {
      return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
    }

    function didPinch() {
      return !(!validatePinch() || !hasPinches());
    }

    function validateSwipe() {
      var hasValidTime = validateSwipeTime(),
          hasValidDistance = validateSwipeDistance(),
          hasCorrectFingerCount = validateFingers(),
          hasEndPoint = validateEndPoint(),
          didCancel = didSwipeBackToCancel(),
          valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
      return valid;
    }

    function hasSwipes() {
      return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
    }

    function didSwipe() {
      return !(!validateSwipe() || !hasSwipes());
    }

    function validateFingers() {
      return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
    }

    function validateEndPoint() {
      return 0 !== fingerData[0].end.x;
    }

    function hasTap() {
      return !!options.tap;
    }

    function hasDoubleTap() {
      return !!options.doubleTap;
    }

    function hasLongTap() {
      return !!options.longTap;
    }

    function validateDoubleTap() {
      if (null == doubleTapStartTime) return !1;
      var now = getTimeStamp();
      return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
    }

    function inDoubleTap() {
      return validateDoubleTap();
    }

    function validateTap() {
      return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
    }

    function validateLongTap() {
      return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD;
    }

    function didTap() {
      return !(!validateTap() || !hasTap());
    }

    function didDoubleTap() {
      return !(!validateDoubleTap() || !hasDoubleTap());
    }

    function didLongTap() {
      return !(!validateLongTap() || !hasLongTap());
    }

    function startMultiFingerRelease(event) {
      previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1;
    }

    function cancelMultiFingerRelease() {
      previousTouchEndTime = 0, fingerCountAtRelease = 0;
    }

    function inMultiFingerRelease() {
      var withinThreshold = !1;

      if (previousTouchEndTime) {
        var diff = getTimeStamp() - previousTouchEndTime;
        diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
      }

      return withinThreshold;
    }

    function getTouchInProgress() {
      return !($element.data(PLUGIN_NS + "_intouch") !== !0);
    }

    function setTouchInProgress(val) {
      $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0));
    }

    function createFingerData(id, evt) {
      var f = {
        start: {
          x: 0,
          y: 0
        },
        last: {
          x: 0,
          y: 0
        },
        end: {
          x: 0,
          y: 0
        }
      };
      return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f;
    }

    function updateFingerData(evt) {
      var id = void 0 !== evt.identifier ? evt.identifier : 0,
          f = getFingerData(id);
      return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
    }

    function getFingerData(id) {
      return fingerData[id] || null;
    }

    function setMaxDistance(direction, distance) {
      direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance);
    }

    function getMaxDistance(direction) {
      if (maximumsMap[direction]) return maximumsMap[direction].distance;
    }

    function createMaximumsData() {
      var maxData = {};
      return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
    }

    function createMaximumVO(dir) {
      return {
        direction: dir,
        distance: 0
      };
    }

    function calculateDuration() {
      return endTime - startTime;
    }

    function calculateTouchesDistance(startPoint, endPoint) {
      var diffX = Math.abs(startPoint.x - endPoint.x),
          diffY = Math.abs(startPoint.y - endPoint.y);
      return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
    }

    function calculatePinchZoom(startDistance, endDistance) {
      var percent = endDistance / startDistance * 1;
      return percent.toFixed(2);
    }

    function calculatePinchDirection() {
      return pinchZoom < 1 ? OUT : IN;
    }

    function calculateDistance(startPoint, endPoint) {
      return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
    }

    function calculateAngle(startPoint, endPoint) {
      var x = startPoint.x - endPoint.x,
          y = endPoint.y - startPoint.y,
          r = Math.atan2(y, x),
          angle = Math.round(180 * r / Math.PI);
      return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
    }

    function calculateDirection(startPoint, endPoint) {
      if (comparePoints(startPoint, endPoint)) return NONE;
      var angle = calculateAngle(startPoint, endPoint);
      return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP;
    }

    function getTimeStamp() {
      var now = new Date();
      return now.getTime();
    }

    function getbounds(el) {
      el = $(el);
      var offset = el.offset(),
          bounds = {
        left: offset.left,
        right: offset.left + el.outerWidth(),
        top: offset.top,
        bottom: offset.top + el.outerHeight()
      };
      return bounds;
    }

    function isInBounds(point, bounds) {
      return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
    }

    function comparePoints(pointA, pointB) {
      return pointA.x == pointB.x && pointA.y == pointB.y;
    }

    var options = $.extend({}, options),
        useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
        START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
        MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
        END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
        LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
        CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
        distance = 0,
        direction = null,
        currentDirection = null,
        duration = 0,
        startTouchesDistance = 0,
        endTouchesDistance = 0,
        pinchZoom = 1,
        pinchDistance = 0,
        pinchDirection = 0,
        maximumsMap = null,
        $element = $(element),
        phase = "start",
        fingerCount = 0,
        fingerData = {},
        startTime = 0,
        endTime = 0,
        previousTouchEndTime = 0,
        fingerCountAtRelease = 0,
        doubleTapStartTime = 0,
        singleTapTimeout = null,
        holdTimeout = null;

    try {
      $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel);
    } catch (e) {
      $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
    }

    this.enable = function () {
      return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element;
    }, this.disable = function () {
      return removeListeners(), $element;
    }, this.destroy = function () {
      removeListeners(), $element.data(PLUGIN_NS, null), $element = null;
    }, this.option = function (property, value) {
      if ("object" == typeof property) options = $.extend(options, property);else if (void 0 !== options[property]) {
        if (void 0 === value) return options[property];
        options[property] = value;
      } else {
        if (!property) return options;
        $.error("Option " + property + " does not exist on jQuery.swipe.options");
      }
      return null;
    };
  }

  var VERSION = "1.6.18",
      LEFT = "left",
      RIGHT = "right",
      UP = "up",
      DOWN = "down",
      IN = "in",
      OUT = "out",
      NONE = "none",
      AUTO = "auto",
      SWIPE = "swipe",
      PINCH = "pinch",
      TAP = "tap",
      DOUBLE_TAP = "doubletap",
      LONG_TAP = "longtap",
      HORIZONTAL = "horizontal",
      VERTICAL = "vertical",
      ALL_FINGERS = "all",
      DOUBLE_TAP_THRESHOLD = 10,
      PHASE_START = "start",
      PHASE_MOVE = "move",
      PHASE_END = "end",
      PHASE_CANCEL = "cancel",
      SUPPORTS_TOUCH = ("ontouchstart" in window),
      SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.PointerEvent && !SUPPORTS_TOUCH,
      SUPPORTS_POINTER = (window.PointerEvent || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
      PLUGIN_NS = "TouchSwipe",
      defaults = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: !0,
    triggerOnTouchLeave: !1,
    allowPageScroll: "auto",
    fallbackToMouseEvents: !0,
    excludedElements: ".noSwipe",
    preventDefaultEvents: !0
  };
  $.fn.swipe = function (method) {
    var $this = $(this),
        plugin = $this.data(PLUGIN_NS);

    if (plugin && "string" == typeof method) {
      if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
      $.error("Method " + method + " does not exist on jQuery.swipe");
    } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);

    return $this;
  }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
    PHASE_START: PHASE_START,
    PHASE_MOVE: PHASE_MOVE,
    PHASE_END: PHASE_END,
    PHASE_CANCEL: PHASE_CANCEL
  }, $.fn.swipe.directions = {
    LEFT: LEFT,
    RIGHT: RIGHT,
    UP: UP,
    DOWN: DOWN,
    IN: IN,
    OUT: OUT
  }, $.fn.swipe.pageScroll = {
    NONE: NONE,
    HORIZONTAL: HORIZONTAL,
    VERTICAL: VERTICAL,
    AUTO: AUTO
  }, $.fn.swipe.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    ALL: ALL_FINGERS
  };
});
/*!
 * ScrollTrigger 3.4.2
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
}(this, function (e) {
  "use strict";

  function H(e) {
    return e;
  }

  function I() {
    return "undefined" != typeof window;
  }

  function J() {
    return _e || I() && (_e = window.gsap) && _e.registerPlugin && _e;
  }

  function K(e) {
    return !!~i.indexOf(e);
  }

  function L(e, t) {
    return ~He.indexOf(e) && He[He.indexOf(e) + 1][t];
  }

  function M(t, e) {
    var r = e.s,
        n = e.sc,
        o = h.indexOf(t),
        i = ~o ? h[o + 1] : L(t, r) || (K(t) ? n : function (e) {
      return arguments.length ? t[r] = e : t[r];
    });
    return ~o || h.push(t, i), i;
  }

  function N(e) {
    return L(e, "getBoundingClientRect") || (K(e) ? function () {
      return ut.width = Pe.innerWidth, ut.height = Pe.innerHeight, ut;
    } : function () {
      return ot(e);
    });
  }

  function Q(e, t) {
    var r = t.s,
        n = t.d2,
        o = t.d,
        i = t.a;
    return (r = "scroll" + n) && (i = L(e, r)) ? i() - N(e)()[o] : K(e) ? Math.max(Me[r], Ee[r]) - (Pe["inner" + n] || Me["client" + n] || Ee["client" + n]) : e[r] - e["offset" + n];
  }

  function R(e, t) {
    for (var r = 0; r < p.length; r += 3) t && !~t.indexOf(p[r + 1]) || e(p[r], p[r + 1], p[r + 2]);
  }

  function S(e) {
    return "string" == typeof e;
  }

  function T(e) {
    return "function" == typeof e;
  }

  function U(e) {
    return "number" == typeof e;
  }

  function V(e) {
    return "object" == typeof e;
  }

  function W(e) {
    return T(e) && e();
  }

  function X(r, n) {
    return function () {
      var e = W(r),
          t = W(n);
      return function () {
        W(e), W(t);
      };
    };
  }

  function qa(e) {
    return Pe.getComputedStyle(e);
  }

  function sa(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);

    return e;
  }

  function ua(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }

  function wa(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }

  function xa(e, t, r) {
    return e.addEventListener(t, r, {
      passive: !0
    });
  }

  function ya(e, t, r) {
    return e.removeEventListener(t, r);
  }

  function Ca(e, t) {
    if (S(e)) {
      var r = e.indexOf("="),
          n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in b ? b[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }

    return e;
  }

  function Da(e, t, r, n, o, i, a) {
    var s = o.startColor,
        l = o.endColor,
        c = o.fontSize,
        f = o.indent,
        u = o.fontWeight,
        d = Oe.createElement("div"),
        p = K(r) || "fixed" === L(r, "pinType"),
        g = -1 !== e.indexOf("scroller"),
        h = p ? Ee : r,
        v = -1 !== e.indexOf("start"),
        m = v ? s : l,
        b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return b += "position:" + (g && p ? "fixed;" : "absolute;"), !g && p || (b += (n === nt ? x : y) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = v, d.setAttribute("class", "gsap-marker-" + e), d.style.cssText = b, d.innerText = t || 0 === t ? e + "-" + t : e, h.insertBefore(d, h.children[0]), d._offset = d["offset" + n.op.d2], w(d, 0, n, v), d;
  }

  function Ha() {
    return l = l || s(B);
  }

  function Ia() {
    l || (l = s(B), Je || P("scrollStart"), Je = De());
  }

  function Ja() {
    return !Ae && a.restart(!0);
  }

  function Pa(e) {
    var t = _e.ticker.frame,
        r = [],
        n = 0;

    if (g !== t || We) {
      for (A(); n < _.length; n += 3) Pe.matchMedia(_[n]).matches ? r.push(n) : A(1, _[n]) || T(_[n + 2]) && _[n + 2]();

      for (E(), n = 0; n < r.length; n++) Fe = _[r[n]], _[r[n] + 2] = _[r[n] + 1](e);

      z(Fe = 0, 1), g = t;
    }
  }

  function Qa() {
    return ya(Y, "scrollEnd", Qa) || z(!0);
  }

  function ab(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var o, i = F.length, a = t.style, s = e.style; i--;) a[o = F[i]] = r[o];

      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[y] = s[x] = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[je] = ua(e, rt) + tt, a[Xe] = ua(e, nt) + tt, a[$e] = s[Ge] = s.top = s[m] = "0", ft(n), s[je] = r[je], s[Xe] = r[Xe], s[$e] = r[$e], e.parentNode.insertBefore(t, e), t.appendChild(e);
    }
  }

  function db(e) {
    for (var t = D.length, r = e.style, n = [], o = 0; o < t; o++) n.push(D[o], r[D[o]]);

    return n.t = e, n;
  }

  function gb(e, t, r, n, o, i, a, s, l, c, f, u) {
    if (T(e) && (e = e(s)), S(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? Ca("0" + e.substr(3), r) : 0)), U(e)) a && w(a, r, n, !0);else {
      T(t) && (t = t(s));
      var d,
          p,
          g,
          h = Le(t)[0] || Ee,
          v = ot(h) || {},
          m = e.split(" ");
      v && (v.left || v.top) || "none" !== qa(h).display || (g = h.style.display, h.style.display = "block", v = ot(h), g ? h.style.display = g : h.style.removeProperty("display")), d = Ca(m[0], v[n.d]), p = Ca(m[1] || "0", r), e = v[n.p] - l[n.p] - c + d + o - p, a && w(a, p, n, r - p < 20 || a._isStart && 20 < p), r -= r - p;
    }

    if (i) {
      var b = e + r,
          x = i._isStart;
      u = "scroll" + n.d2, w(i, b, n, x && 20 < b || !x && (f ? Math.max(Ee[u], Me[u]) : i.parentNode[u]) <= b + 1), f && (l = ot(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + tt));
    }

    return Math.round(e);
  }

  function jb(l, e) {
    var c,
        f = M(l, e),
        u = "_scroll" + e.p2;
    return l[u] = f, function getTween(e, t, r, n, o) {
      var i = getTween.tween,
          a = t.onComplete,
          s = {};
      return i && i.kill(), c = f(), t[u] = e, (t.modifiers = s)[u] = function (e) {
        return 7 < Math.abs(f() - c) ? (i.kill(), getTween.tween = 0, e = f()) : n && (e = r + n * i.ratio + o * i.ratio * i.ratio), c = Math.round(e);
      }, t.onComplete = function () {
        getTween.tween = 0, a && a.call(i);
      }, i = getTween.tween = _e.to(l, t);
    };
  }

  var _e,
      o,
      Pe,
      Oe,
      Me,
      Ee,
      i,
      a,
      s,
      l,
      Le,
      Ie,
      Re,
      c,
      Ae,
      ze,
      f,
      Ne,
      u,
      d,
      p,
      qe,
      Be,
      Fe,
      g,
      We = 1,
      He = [],
      h = [],
      De = Date.now,
      v = De(),
      Je = 0,
      Qe = 1,
      Ke = Math.abs,
      t = "scrollLeft",
      r = "scrollTop",
      m = "left",
      x = "right",
      y = "bottom",
      je = "width",
      Xe = "height",
      Ue = "Right",
      Ve = "Left",
      Ye = "Top",
      Ze = "Bottom",
      $e = "padding",
      Ge = "margin",
      et = "Width",
      n = "Height",
      tt = "px",
      rt = {
    s: t,
    p: m,
    p2: Ve,
    os: x,
    os2: Ue,
    d: je,
    d2: et,
    a: "x",
    sc: function sc(e) {
      return arguments.length ? Pe.scrollTo(e, nt.sc()) : Pe.pageXOffset || Oe[t] || Me[t] || Ee[t] || 0;
    }
  },
      nt = {
    s: r,
    p: "top",
    p2: Ye,
    os: y,
    os2: Ze,
    d: Xe,
    d2: n,
    a: "y",
    op: rt,
    sc: function sc(e) {
      return arguments.length ? Pe.scrollTo(rt.sc(), e) : Pe.pageYOffset || Oe[r] || Me[r] || Ee[r] || 0;
    }
  },
      ot = function _getBounds(e, t) {
    var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== qa(e)[f] && _e.to(e, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1),
        n = e.getBoundingClientRect();

    return r && r.progress(0).kill(), n;
  },
      it = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  },
      at = {
    toggleActions: "play",
    anticipatePin: 0
  },
      b = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
  },
      w = function _positionMarker(e, t, r, n) {
    var o = {
      display: "block"
    },
        i = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
    e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? 1 : 0, o["border" + i + et] = 1, o["border" + a + et] = 0, o[r.p] = t, _e.set(e, o);
  },
      st = [],
      lt = {},
      C = {},
      k = [],
      _ = [],
      P = function _dispatch(e) {
    return C[e] && C[e].map(function (e) {
      return e();
    }) || k;
  },
      O = [],
      E = function _revertRecorded(e) {
    for (var t = 0; t < O.length; t += 4) e && O[t + 3] !== e || (O[t].style.cssText = O[t + 1], O[t + 2].uncache = 1);
  },
      A = function _revertAll(e, t) {
    var r;

    for (Ne = 0; Ne < st.length; Ne++) r = st[Ne], t && r.media !== t || (e ? r.kill(1) : (r.scroll.rec || (r.scroll.rec = r.scroll()), r.revert()));

    E(t), t || P("revert");
  },
      z = function _refreshAll(e, t) {
    if (!Je || e) {
      var r = P("refreshInit");

      for (qe && Y.sort(), t || A(), Ne = 0; Ne < st.length; Ne++) st[Ne].refresh();

      for (r.forEach(function (e) {
        return e && e.render && e.render(-1);
      }), Ne = st.length; Ne--;) st[Ne].scroll.rec = 0;

      P("refresh");
    } else xa(Y, "scrollEnd", Qa);
  },
      q = 0,
      ct = 1,
      B = function _updateAll() {
    var e = st.length,
        t = De(),
        r = 50 <= t - v,
        n = e && st[0].scroll();

    if (ct = n < q ? -1 : 1, q = n, r && (Je && !ze && 200 < t - Je && (Je = 0, P("scrollEnd")), Re = v, v = t), ct < 0) {
      for (Ne = e; Ne--;) st[Ne].update(0, r);

      ct = 1;
    } else for (Ne = 0; Ne < e; Ne++) st[Ne] && st[Ne].update(0, r);

    l = 0;
  },
      F = [m, "top", y, x, Ge + Ze, Ge + Ue, Ge + Ye, Ge + Ve, "display", "flexShrink", "float"],
      D = F.concat([je, Xe, "boxSizing", "max" + et, "max" + n, "position", Ge, $e, $e + Ye, $e + Ue, $e + Ze, $e + Ve]),
      j = /([A-Z])/g,
      ft = function _setState(e) {
    if (e) for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(j, "-$1").toLowerCase());
  },
      ut = {
    left: 0,
    top: 0
  },
      dt = /(?:webkit|moz|length)/i;

  rt.op = nt;
  var Y = (ScrollTrigger.prototype.init = function init(b, x) {
    if (this.progress = 0, this.vars && this.kill(1), Qe) {
      var p,
          n,
          c,
          y,
          w,
          C,
          k,
          _,
          P,
          O,
          E,
          I,
          e,
          R,
          A,
          z,
          q,
          B,
          t,
          F,
          g,
          W,
          D,
          h,
          J,
          v,
          m,
          r,
          j,
          X,
          Y,
          Z,
          o,
          f,
          $,
          G,
          ee,
          te,
          re = (b = sa(S(b) || U(b) || b.nodeType ? {
        trigger: b
      } : b, at)).horizontal ? rt : nt,
          ne = b.onUpdate,
          oe = b.toggleClass,
          i = b.id,
          ie = b.onToggle,
          ae = b.onRefresh,
          a = b.scrub,
          se = b.trigger,
          le = b.pin,
          ce = b.pinSpacing,
          fe = b.invalidateOnRefresh,
          ue = b.anticipatePin,
          s = b.onScrubComplete,
          u = b.onSnapComplete,
          de = b.once,
          pe = b.snap,
          ge = b.pinReparent,
          he = !a && 0 !== a,
          ve = Le(b.scroller || Pe)[0],
          l = _e.core.getCache(ve),
          d = K(ve),
          me = d || "fixed" === L(ve, "pinType"),
          be = [b.onEnter, b.onLeave, b.onEnterBack, b.onLeaveBack],
          xe = he && (de ? "play" : b.toggleActions).split(" "),
          ye = "markers" in b ? b.markers : at.markers,
          Te = d ? 0 : parseFloat(qa(ve)["border" + re.p2 + et]) || 0,
          we = this,
          Se = b.onRefreshInit && function () {
        return b.onRefreshInit(we);
      },
          Ce = function _getSizeFunc(e, t, r) {
        var n = r.d,
            o = r.d2,
            i = r.a;
        return (i = L(e, "getBoundingClientRect")) ? function () {
          return i()[n];
        } : function () {
          return (t ? Pe["inner" + o] : e["client" + o]) || 0;
        };
      }(ve, d, re),
          ke = function _getOffsetsFunc(e, t) {
        return !t || ~He.indexOf(e) ? N(e) : function () {
          return ut;
        };
      }(ve, d);

      we.media = Fe, ue *= 45, st.push(we), we.scroller = ve, we.scroll = M(ve, re), w = we.scroll(), we.vars = b, x = x || b.animation, "refreshPriority" in b && (qe = 1), l.tweenScroll = l.tweenScroll || {
        top: jb(ve, nt),
        left: jb(ve, rt)
      }, we.tweenTo = p = l.tweenScroll[re.p], x && (x.vars.lazy = !1, x._initted || !1 !== x.vars.immediateRender && !1 !== b.immediateRender && x.render(0, !0, !0), we.animation = x.pause(), x.scrollTrigger = we, (o = U(a) && a) && (Z = _e.to(x, {
        ease: "power3",
        duration: o,
        onComplete: function onComplete() {
          return s && s(we);
        }
      })), j = 0, i = i || x.vars.id), pe && (V(pe) || (pe = {
        snapTo: pe
      }), _e.set(d ? [Ee, Me] : ve, {
        scrollBehavior: "auto"
      }), c = T(pe.snapTo) ? pe.snapTo : "labels" === pe.snapTo ? function _getLabels(i) {
        return function (e) {
          var t,
              r = [],
              n = i.labels,
              o = i.duration();

          for (t in n) r.push(n[t] / o);

          return _e.utils.snap(r, e);
        };
      }(x) : _e.utils.snap(pe.snapTo), f = pe.duration || {
        min: .1,
        max: 2
      }, f = V(f) ? Ie(f.min, f.max) : Ie(f, f), $ = _e.delayedCall(pe.delay || o / 2 || .1, function () {
        if (!Je || Je === Y && !ze) {
          var e = x && !he ? x.totalProgress() : we.progress,
              t = (e - X) / (De() - Re) * 1e3 || 0,
              r = Ke(t / 2) * t / .185,
              n = e + r,
              o = Ie(0, 1, c(n, we)),
              i = o - e - r,
              a = we.scroll(),
              s = Math.round(k + o * R),
              l = p.tween;

          if (a <= _ && k <= a) {
            if (l && !l._initted) {
              if (l.data <= Math.abs(s - a)) return;
              l.kill();
            }

            p(s, {
              duration: f(Ke(.185 * Math.max(Ke(n - e), Ke(o - e)) / t / .05 || 0)),
              ease: pe.ease || "power3",
              data: Math.abs(s - a),
              onComplete: function onComplete() {
                j = X = x && !he ? x.totalProgress() : we.progress, u && u(we);
              }
            }, k + e * R, r * R, i * R);
          }
        } else $.restart(!0);
      }).pause()), i && (lt[i] = we), se = we.trigger = Le(se || le)[0], le = !0 === le ? se : Le(le)[0], S(oe) && (oe = {
        targets: se,
        className: oe
      }), le && (!1 === ce || ce === Ge || (ce = "flex" !== qa(le.parentNode).display && $e), we.pin = le, !1 !== b.force3D && _e.set(le, {
        force3D: !0
      }), (n = _e.core.getCache(le)).spacer ? A = n.pinState : (n.spacer = B = Oe.createElement("div"), B.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), n.pinState = A = db(le)), we.spacer = B = n.spacer, r = qa(le), h = r[ce + re.os2], F = _e.getProperty(le), g = _e.quickSetter(le, re.a, tt), le.firstChild && !Q(le, re) && (le.style.overflow = "hidden"), ab(le, B, r), q = db(le)), ye && (e = V(ye) ? sa(ye, it) : it, E = Da("scroller-start", i, ve, re, e, 0), I = Da("scroller-end", i, ve, re, e, 0, E), t = E["offset" + re.op.d2], P = Da("start", i, ve, re, e, t), O = Da("end", i, ve, re, e, t), me || (function _makePositionable(e) {
        e.style.position = "absolute" === qa(e).position ? "absolute" : "relative";
      }(ve), _e.set([E, I], {
        force3D: !0
      }), v = _e.quickSetter(E, re.a, tt), m = _e.quickSetter(I, re.a, tt))), we.revert = function (e) {
        var t = !1 !== e || !we.enabled,
            r = Ae;
        t !== y && (t && (ee = Math.max(we.scroll(), we.scroll.rec || 0), G = we.progress, te = x && x.progress()), P && [P, O, E, I].forEach(function (e) {
          return e.style.display = t ? "none" : "block";
        }), Ae = 1, we.update(t), Ae = r, le && (t ? function _swapPinOut(e, t, r) {
          if (ft(r), e.parentNode === t) {
            var n = t.parentNode;
            n && (n.insertBefore(e, t), n.removeChild(t));
          }
        }(le, B, A) : ab(le, B, qa(le), J)), y = t);
      }, we.refresh = function (e) {
        if (!Ae && we.enabled) if (le && e && Je) xa(ScrollTrigger, "scrollEnd", Qa);else {
          Ae = 1, Z && Z.kill(), fe && x && x.progress(0).invalidate(), y || we.revert();

          for (var t, r, n, o, i, a, s, l = Ce(), c = ke(), f = Q(ve, re), u = 0, d = 0, p = b.end, g = b.endTrigger || se, h = b.start || (le || !se ? "0 0" : "0 100%"), v = se && Math.max(0, st.indexOf(we)) || 0, m = v; m--;) !(s = st[m].pin) || s !== se && s !== le || st[m].revert();

          for (k = gb(h, se, l, re, we.scroll(), P, E, we, c, Te, me, f) || (le ? -.001 : 0), T(p) && (p = p(we)), S(p) && !p.indexOf("+=") && (~p.indexOf(" ") ? p = (S(h) ? h.split(" ")[0] : "") + p : (u = Ca(p.substr(2), l), p = S(h) ? h : k + u, g = se)), _ = Math.max(k, gb(p || (g ? "100% 0" : f), g, l, re, we.scroll() + u, O, I, we, c, Te, me, f)) || -.001, R = _ - k || (k -= .01) && .001, u = 0, m = v; m--;) (s = (a = st[m]).pin) && a.start - a._pinPush < k && (t = a.end - a.start, s === se && (u += t), s === le && (d += t));

          if (k += u, _ += u, we._pinPush = d, P && u && ((t = {})[re.a] = "+=" + u, _e.set([P, O], t)), le) t = qa(le), o = re === nt, n = we.scroll(), W = parseFloat(F(re.a)) + d, ab(le, B, t), q = db(le), r = ot(le, !0), ce && ((J = [ce + re.os2, R + d + tt]).t = B, (m = ce === $e ? ua(le, re) + R + d : 0) && J.push(re.d, m + tt), ft(J), me && we.scroll(ee)), me && ((i = {
            top: r.top + (o ? n - k : 0) + tt,
            left: r.left + (o ? 0 : n - k) + tt,
            boxSizing: "border-box",
            position: "fixed"
          })[je] = i.maxWidth = Math.ceil(r.width) + tt, i[Xe] = i.maxHeight = Math.ceil(r.height) + tt, i[Ge] = i[Ge + Ye] = i[Ge + Ue] = i[Ge + Ze] = i[Ge + Ve] = "0", i[$e] = t[$e], i[$e + Ye] = t[$e + Ye], i[$e + Ue] = t[$e + Ue], i[$e + Ze] = t[$e + Ze], i[$e + Ve] = t[$e + Ve], z = function _copyState(e, t, r) {
            for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);

            return o.t = e.t, o;
          }(A, i, ge)), x ? (x.progress(1, !0), D = F(re.a) - W + R + d, R !== D && z.splice(z.length - 2, 2), x.progress(0, !0)) : D = R;else if (se && we.scroll()) for (r = se.parentNode; r && r !== Ee;) r._pinOffset && (k -= r._pinOffset, _ -= r._pinOffset), r = r.parentNode;

          for (m = 0; m < v; m++) !(a = st[m].pin) || a !== se && a !== le || st[m].revert(!1);

          we.start = k, we.end = _, (w = C = we.scroll()) < ee && we.scroll(ee), we.revert(!1), Ae = 0, te && he && x.progress(te, !0), G !== we.progress && (Z && x.totalProgress(G, !0), we.progress = G, we.update()), le && ce && (B._pinOffset = Math.round(we.progress * D)), ae && ae(we);
        }
      }, we.getVelocity = function () {
        return (we.scroll() - C) / (De() - Re) * 1e3 || 0;
      }, we.update = function (e, t) {
        var r,
            n,
            o,
            i,
            a,
            s = we.scroll(),
            l = e ? 0 : (s - k) / R,
            c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
            f = we.progress;

        if (t && (C = w, w = s, pe && (X = j, j = x && !he ? x.totalProgress() : c)), ue && !c && le && !Ae && !We && Je && k < s + (s - C) / (De() - Re) * ue && (c = 1e-4), c !== f && we.enabled) {
          if (i = (a = (r = we.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, we.direction = f < c ? 1 : -1, we.progress = c, he || (!Z || Ae || We ? x && x.totalProgress(c, !!Ae) : (Z.vars.totalProgress = c, Z.invalidate().restart())), le) if (e && ce && (B.style[ce + re.os2] = h), me) {
            if (i) {
              if (o = !e && f < c && s < _ + 1 && s + 1 >= Q(ve, re), ge) {
                if (!Ae && (r || o)) {
                  var u = ot(le, !0),
                      d = s - k;
                  le.style.top = u.top + (re === nt ? d : 0) + tt, le.style.left = u.left + (re === nt ? 0 : d) + tt;
                }

                !function _reparent(e, t) {
                  if (e.parentNode !== t) {
                    var r,
                        n,
                        o = e.style;
                    if (t === Ee) for (r in e._stOrig = o.cssText, n = qa(e)) +r || dt.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);else o.cssText = e._stOrig;
                    t.appendChild(e);
                  }
                }(le, Ae || !r && !o ? B : Ee);
              }

              ft(r || o ? z : q), D !== R && c < 1 && r || g(W + (1 !== c || o ? 0 : D));
            }
          } else g(W + D * c);
          !pe || p.tween || Ae || We || (Y = Je, $.restart(!0)), oe && a && (!de || r) && Le(oe.targets).forEach(function (e) {
            return e.classList[r ? "add" : "remove"](oe.className);
          }), !ne || he || e || ne(we), i && !Ae ? (n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3, he && (o = !a && "none" !== xe[n + 1] && xe[n + 1] || xe[n], x && ("complete" === o || "reset" === o || o in x) && ("complete" === o ? x.pause().totalProgress(1) : "reset" === o ? x.restart(!0).pause() : x[o]()), ne && ne(we)), !a && Be || (ie && a && ie(we), be[n] && be[n](we), de && (1 === c ? we.kill(!1, 1) : be[n] = 0), a || be[n = 1 === c ? 1 : 3] && be[n](we))) : he && ne && !Ae && ne(we);
        }

        m && (v(s + (E._isFlipped ? 1 : 0)), m(s));
      }, we.enable = function () {
        we.enabled || (we.enabled = !0, xa(ve, "resize", Ja), xa(ve, "scroll", Ia), Se && xa(ScrollTrigger, "refreshInit", Se), x && x.add ? _e.delayedCall(.01, we.refresh) && (R = .01) && (k = _ = 0) : we.refresh());
      }, we.disable = function (e, t) {
        if (we.enabled && (!1 !== e && we.revert(), we.enabled = we.isActive = !1, t || Z && Z.pause(), ee = 0, n && (n.uncache = 1), Se && ya(ScrollTrigger, "refreshInit", Se), $ && ($.pause(), p.tween && p.tween.kill()), !d)) {
          for (var r = st.length; r--;) if (st[r].scroller === ve && st[r] !== we) return;

          ya(ve, "resize", Ja), ya(ve, "scroll", Ia);
        }
      }, we.kill = function (e, t) {
        we.disable(e, t), i && delete lt[i];
        var r = st.indexOf(we);
        st.splice(r, 1), r === Ne && 0 < ct && Ne--, x && (x.scrollTrigger = null, e && x.render(-1), t && Z || x.kill()), P && [P, O, E, I].forEach(function (e) {
          return e.parentNode.removeChild(e);
        }), n && (n.uncache = 1);
      }, we.enable();
    } else this.update = this.refresh = this.kill = H;
  }, ScrollTrigger.register = function register(e) {
    if (!o && (_e = e || J(), I() && window.document && (Pe = window, Oe = document, Me = Oe.documentElement, Ee = Oe.body), _e && (Le = _e.utils.toArray, Ie = _e.utils.clamp, _e.core.globals("ScrollTrigger", ScrollTrigger), Ee))) {
      s = Pe.requestAnimationFrame || function (e) {
        return setTimeout(e, 16);
      }, xa(Pe, "mousewheel", Ia), i = [Pe, Oe, Me, Ee], xa(Oe, "scroll", Ia);
      var t,
          r = Ee.style,
          n = r.borderTop;
      r.borderTop = "1px solid #000", t = ot(Ee), nt.m = Math.round(t.top + nt.sc()) || 0, rt.m = Math.round(t.left + rt.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(Ha, 200), _e.delayedCall(.5, function () {
        return We = 0;
      }), xa(Oe, "touchcancel", H), xa(Ee, "touchstart", H), wa(xa, Oe, "pointerdown,touchstart,mousedown", function () {
        return ze = 1;
      }), wa(xa, Oe, "pointerup,touchend,mouseup", function () {
        return ze = 0;
      }), f = _e.utils.checkPrefix("transform"), D.push(f), o = De(), a = _e.delayedCall(.2, z).pause(), p = [Oe, "visibilitychange", function () {
        var e = Pe.innerWidth,
            t = Pe.innerHeight;
        Oe.hidden ? (u = e, d = t) : u === e && d === t || Ja();
      }, Oe, "DOMContentLoaded", z, Pe, "load", function () {
        return Je || z();
      }, Pe, "resize", Ja], R(xa);
    }

    return o;
  }, ScrollTrigger.defaults = function defaults(e) {
    for (var t in e) at[t] = e[t];
  }, ScrollTrigger.kill = function kill() {
    Qe = 0, st.slice(0).forEach(function (e) {
      return e.kill(1);
    });
  }, ScrollTrigger.config = function config(e) {
    "limitCallbacks" in e && (Be = !!e.limitCallbacks);
    var t = e.syncInterval;
    t && clearInterval(c) || (c = t) && setInterval(Ha, t), "autoRefreshEvents" in e && (R(ya) || R(xa, e.autoRefreshEvents || "none"));
  }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
    var r = Le(e)[0];
    K(r) ? He.unshift(Pe, t, Ee, t, Me, t) : He.unshift(r, t);
  }, ScrollTrigger.matchMedia = function matchMedia(e) {
    var t, r, n, o, i;

    for (r in e) n = _.indexOf(r), o = e[r], "all" === (Fe = r) ? o() : (t = Pe.matchMedia(r)) && (t.matches && (i = o()), ~n ? (_[n + 1] = X(_[n + 1], o), _[n + 2] = X(_[n + 2], i)) : (n = _.length, _.push(r, o, i), t.addListener ? t.addListener(Pa) : t.addEventListener("change", Pa))), Fe = 0;

    return _;
  }, ScrollTrigger);

  function ScrollTrigger(e, t) {
    o || ScrollTrigger.register(_e) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
  }

  Y.version = "3.4.2", Y.saveStyles = function (e) {
    return e ? Le(e).forEach(function (e) {
      var t = O.indexOf(e);
      0 <= t && O.splice(t, 4), O.push(e, e.style.cssText, _e.core.getCache(e), Fe);
    }) : O;
  }, Y.revert = function (e, t) {
    return A(!e, t);
  }, Y.create = function (e, t) {
    return new Y(e, t);
  }, Y.refresh = function (e) {
    return e ? Ja() : z(!0);
  }, Y.update = B, Y.maxScroll = function (e, t) {
    return Q(e, t ? rt : nt);
  }, Y.getScrollFunc = function (e, t) {
    return M(Le(e)[0], t ? rt : nt);
  }, Y.getById = function (e) {
    return lt[e];
  }, Y.getAll = function () {
    return st.slice(0);
  }, Y.isScrolling = function () {
    return !!Je;
  }, Y.addEventListener = function (e, t) {
    var r = C[e] || (C[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, Y.removeEventListener = function (e, t) {
    var r = C[e],
        n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, Y.batch = function (e, t) {
    function Zh(e, t) {
      var r = [],
          n = [],
          o = _e.delayedCall(i, function () {
        t(r, n), r = [], n = [];
      }).pause();

      return function (e) {
        r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
      };
    }

    var r,
        n = [],
        o = {},
        i = t.interval || .016,
        a = t.batchMax || 1e9;

    for (r in t) o[r] = "on" === r.substr(0, 2) && T(t[r]) && "onRefreshInit" !== r ? Zh(0, t[r]) : t[r];

    return T(a) && (a = a(), xa(Y, "refresh", function () {
      return a = t.batchMax();
    })), Le(e).forEach(function (e) {
      var t = {};

      for (r in o) t[r] = o[r];

      t.trigger = e, n.push(Y.create(t));
    }), n;
  }, Y.sort = function (e) {
    return st.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, J() && _e.registerPlugin(Y), e.ScrollTrigger = Y, e.default = Y;

  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});
/*!
 * MorphSVGPlugin 3.4.0
 * https://greensock.com
 *
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function (t) {
  "use strict";

  function m(t) {
    return "string" == typeof t;
  }

  var x = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      N = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
      b = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
      n = /(^[#\.][a-z]|[a-y][a-z])/i,
      B = Math.PI / 180,
      D = Math.sin,
      E = Math.cos,
      k = Math.abs,
      $ = Math.sqrt,
      h = function _isNumber(t) {
    return "number" == typeof t;
  },
      s = function _round(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  };

  function reverseSegment(t) {
    var e,
        r = 0;

    for (t.reverse(); r < t.length; r += 2) e = t[r], t[r] = t[r + 1], t[r + 1] = e;

    t.reversed = !t.reversed;
  }

  var A = {
    rect: "rx,ry,x,y,width,height",
    circle: "r,cx,cy",
    ellipse: "rx,ry,cx,cy",
    line: "x1,x2,y1,y2"
  };

  function convertToPath(t, e) {
    var r,
        n,
        a,
        o,
        i,
        h,
        s,
        l,
        g,
        c,
        p,
        u,
        f,
        d,
        _,
        P,
        v,
        m,
        y,
        w,
        M,
        x,
        T = t.tagName.toLowerCase(),
        b = .552284749831;

    return "path" !== T && t.getBBox ? (h = function _createPath(t, e) {
      var r,
          n = document.createElementNS("http://www.w3.org/2000/svg", "path"),
          a = [].slice.call(t.attributes),
          o = a.length;

      for (e = "," + e + ","; -1 < --o;) r = a[o].nodeName.toLowerCase(), e.indexOf("," + r + ",") < 0 && n.setAttributeNS(null, r, a[o].nodeValue);

      return n;
    }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), x = function _attrToObj(t, e) {
      for (var r = e ? e.split(",") : [], n = {}, a = r.length; -1 < --a;) n[r[a]] = +t.getAttribute(r[a]) || 0;

      return n;
    }(t, A[T]), "rect" === T ? (o = x.rx, i = x.ry || o, n = x.x, a = x.y, c = x.width - 2 * o, p = x.height - 2 * i, r = o || i ? "M" + (P = (d = (f = n + o) + c) + o) + "," + (m = a + i) + " V" + (y = m + p) + " C" + [P, w = y + i * b, _ = d + o * b, M = y + i, d, M, d - (d - f) / 3, M, f + (d - f) / 3, M, f, M, u = n + o * (1 - b), M, n, w, n, y, n, y - (y - m) / 3, n, m + (y - m) / 3, n, m, n, v = a + i * (1 - b), u, a, f, a, f + (d - f) / 3, a, d - (d - f) / 3, a, d, a, _, a, P, v, P, m].join(",") + "z" : "M" + (n + c) + "," + a + " v" + p + " h" + -c + " v" + -p + " h" + c + "z") : "circle" === T || "ellipse" === T ? (l = "circle" === T ? (o = i = x.r) * b : (o = x.rx, (i = x.ry) * b), r = "M" + ((n = x.cx) + o) + "," + (a = x.cy) + " C" + [n + o, a + l, n + (s = o * b), a + i, n, a + i, n - s, a + i, n - o, a + l, n - o, a, n - o, a - l, n - s, a - i, n, a - i, n + s, a - i, n + o, a - l, n + o, a].join(",") + "z") : "line" === T ? r = "M" + x.x1 + "," + x.y1 + " L" + x.x2 + "," + x.y2 : "polyline" !== T && "polygon" !== T || (r = "M" + (n = (g = (t.getAttribute("points") + "").match(N) || []).shift()) + "," + (a = g.shift()) + " L" + g.join(","), "polygon" === T && (r += "," + n + "," + a + "z")), h.setAttribute("d", rawPathToString(h._gsRawPath = stringToRawPath(r))), e && t.parentNode && (t.parentNode.insertBefore(h, t), t.parentNode.removeChild(t)), h) : t;
  }

  function arcToSegment(t, e, r, n, a, o, i, h, s) {
    if (t !== h || e !== s) {
      r = k(r), n = k(n);

      var l = a % 360 * B,
          g = E(l),
          c = D(l),
          p = Math.PI,
          u = 2 * p,
          f = (t - h) / 2,
          d = (e - s) / 2,
          _ = g * f + c * d,
          P = -c * f + g * d,
          v = _ * _,
          m = P * P,
          y = v / (r * r) + m / (n * n);

      1 < y && (r = $(y) * r, n = $(y) * n);
      var w = r * r,
          M = n * n,
          x = (w * M - w * m - M * v) / (w * m + M * v);
      x < 0 && (x = 0);
      var T = (o === i ? -1 : 1) * $(x),
          b = r * P / n * T,
          S = -n * _ / r * T,
          N = g * b - c * S + (t + h) / 2,
          z = c * b + g * S + (e + s) / 2,
          A = (_ - b) / r,
          R = (P - S) / n,
          O = (-_ - b) / r,
          j = (-P - S) / n,
          Y = A * A + R * R,
          C = (R < 0 ? -1 : 1) * Math.acos(A / $(Y)),
          F = (A * j - R * O < 0 ? -1 : 1) * Math.acos((A * O + R * j) / $(Y * (O * O + j * j)));
      isNaN(F) && (F = p), !i && 0 < F ? F -= u : i && F < 0 && (F += u), C %= u, F %= u;
      var V,
          I = Math.ceil(k(F) / (u / 4)),
          L = [],
          X = F / I,
          U = 4 / 3 * D(X / 2) / (1 + E(X / 2)),
          G = g * r,
          Q = c * r,
          q = c * -n,
          H = g * n;

      for (V = 0; V < I; V++) _ = E(a = C + V * X), P = D(a), A = E(a += X), R = D(a), L.push(_ - U * P, P + U * _, A + U * R, R - U * A, A, R);

      for (V = 0; V < L.length; V += 2) _ = L[V], P = L[V + 1], L[V] = _ * G + P * q + N, L[V + 1] = _ * Q + P * H + z;

      return L[V - 2] = h, L[V - 1] = s, L;
    }
  }

  function stringToRawPath(t) {
    function uc(t, e, r, n) {
      g = (r - t) / 3, c = (n - e) / 3, h.push(t + g, e + c, r - g, n - c, r, n);
    }

    var e,
        r,
        n,
        a,
        o,
        i,
        h,
        s,
        l,
        g,
        c,
        p,
        u,
        f,
        d,
        _ = (t + "").replace(b, function (t) {
      var e = +t;
      return e < 1e-4 && -1e-4 < e ? 0 : e;
    }).match(x) || [],
        P = [],
        v = 0,
        m = 0,
        y = _.length,
        w = 0,
        M = "ERROR: malformed path: " + t;

    if (!t || !isNaN(_[0]) || isNaN(_[1])) return console.log(M), P;

    for (e = 0; e < y; e++) if (u = o, isNaN(_[e]) ? i = (o = _[e].toUpperCase()) !== _[e] : e--, n = +_[e + 1], a = +_[e + 2], i && (n += v, a += m), e || (s = n, l = a), "M" === o) h && (h.length < 8 ? --P.length : w += h.length), v = s = n, m = l = a, h = [n, a], P.push(h), e += 2, o = "L";else if ("C" === o) i || (v = m = 0), (h = h || [0, 0]).push(n, a, v + 1 * _[e + 3], m + 1 * _[e + 4], v += 1 * _[e + 5], m += 1 * _[e + 6]), e += 6;else if ("S" === o) g = v, c = m, "C" !== u && "S" !== u || (g += v - h[h.length - 4], c += m - h[h.length - 3]), i || (v = m = 0), h.push(g, c, n, a, v += 1 * _[e + 3], m += 1 * _[e + 4]), e += 4;else if ("Q" === o) g = v + 2 / 3 * (n - v), c = m + 2 / 3 * (a - m), i || (v = m = 0), v += 1 * _[e + 3], m += 1 * _[e + 4], h.push(g, c, v + 2 / 3 * (n - v), m + 2 / 3 * (a - m), v, m), e += 4;else if ("T" === o) g = v - h[h.length - 4], c = m - h[h.length - 3], h.push(v + g, m + c, n + 2 / 3 * (v + 1.5 * g - n), a + 2 / 3 * (m + 1.5 * c - a), v = n, m = a), e += 2;else if ("H" === o) uc(v, m, v = n, m), e += 1;else if ("V" === o) uc(v, m, v, m = n + (i ? m - v : 0)), e += 1;else if ("L" === o || "Z" === o) "Z" === o && (n = s, a = l, h.closed = !0), ("L" === o || .5 < k(v - n) || .5 < k(m - a)) && (uc(v, m, n, a), "L" === o && (e += 2)), v = n, m = a;else if ("A" === o) {
      if (f = _[e + 4], d = _[e + 5], g = _[e + 6], c = _[e + 7], r = 7, 1 < f.length && (f.length < 3 ? (c = g, g = d, r--) : (c = d, g = f.substr(2), r -= 2), d = f.charAt(1), f = f.charAt(0)), p = arcToSegment(v, m, +_[e + 1], +_[e + 2], +_[e + 3], +f, +d, (i ? v : 0) + 1 * g, (i ? m : 0) + 1 * c), e += r, p) for (r = 0; r < p.length; r++) h.push(p[r]);
      v = h[h.length - 2], m = h[h.length - 1];
    } else console.log(M);

    return (e = h.length) < 6 ? (P.pop(), e = 0) : h[0] === h[e - 2] && h[1] === h[e - 1] && (h.closed = !0), P.totalPoints = w + e, P;
  }

  function rawPathToString(t) {
    h(t[0]) && (t = [t]);
    var e,
        r,
        n,
        a,
        o = "",
        i = t.length;

    for (r = 0; r < i; r++) {
      for (a = t[r], o += "M" + s(a[0]) + "," + s(a[1]) + " C", e = a.length, n = 2; n < e; n++) o += s(a[n++]) + "," + s(a[n++]) + " " + s(a[n++]) + "," + s(a[n++]) + " " + s(a[n++]) + "," + s(a[n]) + " ";

      a.closed && (o += "z");
    }

    return o;
  }

  function y() {
    return r || "undefined" != typeof window && (r = window.gsap) && r.registerPlugin && r;
  }

  function z(t) {
    return "function" == typeof t;
  }

  function M(t) {
    return console && console.warn(t);
  }

  function O(t) {
    var e,
        r = t.length,
        n = 0,
        a = 0;

    for (e = 0; e < r; e++) n += t[e++], a += t[e];

    return [n / (r / 2), a / (r / 2)];
  }

  function P(t) {
    var e,
        r,
        n,
        a = t.length,
        o = t[0],
        i = o,
        h = t[1],
        s = h;

    for (n = 6; n < a; n += 6) o < (e = t[n]) ? o = e : e < i && (i = e), h < (r = t[n + 1]) ? h = r : r < s && (s = r);

    return t.centerX = (o + i) / 2, t.centerY = (h + s) / 2, t.size = (o - i) * (h - s);
  }

  function Q(t, e) {
    void 0 === e && (e = 3);

    for (var r, n, a, o, i, h, s, l, g, c, p, u, f, d, _, P, v = t.length, m = t[0][0], y = m, w = t[0][1], M = w, x = 1 / e; -1 < --v;) for (r = (i = t[v]).length, o = 6; o < r; o += 6) for (g = i[o], c = i[o + 1], p = i[o + 2] - g, d = i[o + 3] - c, u = i[o + 4] - g, _ = i[o + 5] - c, f = i[o + 6] - g, P = i[o + 7] - c, h = e; -1 < --h;) m < (n = ((s = x * h) * s * f + 3 * (l = 1 - s) * (s * u + l * p)) * s + g) ? m = n : n < y && (y = n), w < (a = (s * s * P + 3 * l * (s * _ + l * d)) * s + c) ? w = a : a < M && (M = a);

    return t.centerX = (m + y) / 2, t.centerY = (w + M) / 2, t.left = y, t.width = m - y, t.top = M, t.height = w - M, t.size = (m - y) * (w - M);
  }

  function R(t, e) {
    return e.length - t.length;
  }

  function S(t, e) {
    var r = t.size || P(t),
        n = e.size || P(e);
    return Math.abs(n - r) < (r + n) / 20 ? e.centerX - t.centerX || e.centerY - t.centerY : n - r;
  }

  function T(t, e) {
    var r,
        n,
        a = t.slice(0),
        o = t.length,
        i = o - 2;

    for (e |= 0, r = 0; r < o; r++) n = (r + e) % i, t[r++] = a[n], t[r] = a[1 + n];
  }

  function U(t, e, r, n, a) {
    var o,
        i,
        h,
        s,
        l = t.length,
        g = 0,
        c = l - 2;

    for (r *= 6, i = 0; i < l; i += 6) s = t[o = (i + r) % c] - (e[i] - n), h = t[1 + o] - (e[i + 1] - a), g += _(h * h + s * s);

    return g;
  }

  function V(t, e, r) {
    var n,
        a,
        o,
        i = t.length,
        h = O(t),
        s = O(e),
        l = s[0] - h[0],
        g = s[1] - h[1],
        c = U(t, e, 0, l, g),
        p = 0;

    for (o = 6; o < i; o += 6) (a = U(t, e, o / 6, l, g)) < c && (c = a, p = o);

    if (r) for (reverseSegment(n = t.slice(0)), o = 6; o < i; o += 6) (a = U(n, e, o / 6, l, g)) < c && (c = a, p = -o);
    return p / 6;
  }

  function W(t, e, r) {
    for (var n, a, o, i, h, s, l = t.length, g = 1e20, c = 0, p = 0; -1 < --l;) for (s = (n = t[l]).length, h = 0; h < s; h += 6) a = n[h] - e, o = n[h + 1] - r, (i = _(a * a + o * o)) < g && (g = i, c = n[h], p = n[h + 1]);

    return [c, p];
  }

  function X(t, e, r, n, a, o) {
    var i,
        h,
        s,
        l,
        g = e.length,
        c = 0,
        p = Math.min(t.size || P(t), e[r].size || P(e[r])) * n,
        u = 1e20,
        f = t.centerX + a,
        d = t.centerY + o;

    for (i = r; i < g && !((e[i].size || P(e[i])) < p); i++) h = e[i].centerX - f, s = e[i].centerY - d, (l = _(h * h + s * s)) < u && (c = i, u = l);

    return l = e[c], e.splice(c, 1), l;
  }

  function Y(t, e) {
    var r,
        n,
        a,
        o,
        i,
        h,
        s,
        l,
        g,
        c,
        p,
        u,
        f,
        d,
        _ = 0,
        P = t.length,
        v = e / ((P - 2) / 6);

    for (f = 2; f < P; f += 6) for (_ += v; .999999 < _;) r = t[f - 2], n = t[f - 1], a = t[f], o = t[f + 1], i = t[f + 2], h = t[f + 3], s = t[f + 4], l = t[f + 5], g = r + (a - r) * (d = 1 / ((Math.floor(_) || 1) + 1)), g += ((p = a + (i - a) * d) - g) * d, p += (i + (s - i) * d - p) * d, c = n + (o - n) * d, c += ((u = o + (h - o) * d) - c) * d, u += (h + (l - h) * d - u) * d, t.splice(f, 4, r + (a - r) * d, n + (o - n) * d, g, c, g + (p - g) * d, c + (u - c) * d, p, u, i + (s - i) * d, h + (l - h) * d), f += 6, P += 6, _--;

    return t;
  }

  function Z(t, e, r, n, a) {
    var o,
        i,
        h,
        s,
        l,
        g,
        c,
        p = e.length - t.length,
        u = 0 < p ? e : t,
        f = 0 < p ? t : e,
        d = 0,
        _ = "complexity" === n ? R : S,
        v = "position" === n ? 0 : "number" == typeof n ? n : .8,
        m = f.length,
        y = "object" == typeof r && r.push ? r.slice(0) : [r],
        w = "reverse" === y[0] || y[0] < 0,
        x = "log" === r;

    if (f[0]) {
      if (1 < u.length && (t.sort(_), e.sort(_), u.size || Q(u), f.size || Q(f), g = u.centerX - f.centerX, c = u.centerY - f.centerY, _ === S)) for (m = 0; m < f.length; m++) u.splice(m, 0, X(f[m], u, m, v, g, c));
      if (p) for (p < 0 && (p = -p), u[0].length > f[0].length && Y(f[0], (u[0].length - f[0].length) / 6 | 0), m = f.length; d < p;) u[m].size || P(u[m]), s = (h = W(f, u[m].centerX, u[m].centerY))[0], l = h[1], f[m++] = [s, l, s, l, s, l, s, l], f.totalPoints += 8, d++;

      for (m = 0; m < t.length; m++) o = e[m], i = t[m], (p = o.length - i.length) < 0 ? Y(o, -p / 6 | 0) : 0 < p && Y(i, p / 6 | 0), w && !1 !== a && !i.reversed && reverseSegment(i), (r = y[m] || 0 === y[m] ? y[m] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === r || "log" === r ? (y[m] = r = V(i, o, !m || !1 === a), r < 0 && (w = !0, reverseSegment(i), r = -r), T(i, 6 * r)) : "reverse" !== r && (m && r < 0 && reverseSegment(i), T(i, 6 * (r < 0 ? -r : r))) : !w && ("auto" === r && Math.abs(o[0] - i[0]) + Math.abs(o[1] - i[1]) + Math.abs(o[o.length - 2] - i[i.length - 2]) + Math.abs(o[o.length - 1] - i[i.length - 1]) > Math.abs(o[0] - i[i.length - 2]) + Math.abs(o[1] - i[i.length - 1]) + Math.abs(o[o.length - 2] - i[0]) + Math.abs(o[o.length - 1] - i[1]) || r % 2) ? (reverseSegment(i), y[m] = -1, w = !0) : "auto" === r ? y[m] = 0 : "reverse" === r && (y[m] = -1), i.closed !== o.closed && (i.closed = o.closed = !1));

      return x && M("shapeIndex:[" + y.join(",") + "]"), t.shapeIndex = y;
    }
  }

  function aa(t, e) {
    var r,
        n,
        a,
        o,
        i,
        h,
        s,
        l = 0,
        g = parseFloat(t[0]),
        c = parseFloat(t[1]),
        p = g + "," + c + " ";

    for (r = .5 * e / (.5 * (a = t.length) - 1), n = 0; n < a - 2; n += 2) {
      if (l += r, h = parseFloat(t[n + 2]), s = parseFloat(t[n + 3]), .999999 < l) for (i = 1 / (Math.floor(l) + 1), o = 1; .999999 < l;) p += (g + (h - g) * i * o).toFixed(2) + "," + (c + (s - c) * i * o).toFixed(2) + " ", l--, o++;
      p += h + "," + s + " ", g = h, c = s;
    }

    return p;
  }

  function ba(t) {
    var e = t[0].match(G) || [],
        r = t[1].match(G) || [],
        n = r.length - e.length;
    0 < n ? t[0] = aa(e, n) : t[1] = aa(r, -n);
  }

  function ca(e) {
    return isNaN(e) ? ba : function (t) {
      ba(t), t[1] = function _offsetPoints(t, e) {
        if (!e) return t;
        var r,
            n,
            a,
            o = t.match(G) || [],
            i = o.length,
            h = "";

        for (r = "reverse" === e ? (n = i - 1, -2) : (n = (2 * (parseInt(e, 10) || 0) + 1 + 100 * i) % i, 2), a = 0; a < i; a += 2) h += o[n - 1] + "," + o[n] + " ", n = (n + r) % i;

        return h;
      }(t[1], parseInt(e, 10));
    };
  }

  function ea(t, e) {
    for (var r, n, a, o, i, h, s, l, g, c, p, u, f = t.length, d = .2 * (e || 1); -1 < --f;) {
      for (p = (n = t[f]).isSmooth = n.isSmooth || [0, 0, 0, 0], u = n.smoothData = n.smoothData || [0, 0, 0, 0], p.length = 4, l = n.length - 2, s = 6; s < l; s += 6) a = n[s] - n[s - 2], o = n[s + 1] - n[s - 1], i = n[s + 2] - n[s], h = n[s + 3] - n[s + 1], g = w(o, a), c = w(h, i), (r = Math.abs(g - c) < d) && (u[s - 2] = g, u[s + 2] = c, u[s - 1] = _(a * a + o * o), u[s + 3] = _(i * i + h * h)), p.push(r, r, 0, 0, r, r);

      n[l] === n[0] && n[1 + l] === n[1] && (a = n[0] - n[l - 2], o = n[1] - n[l - 1], i = n[2] - n[0], h = n[3] - n[1], g = w(o, a), c = w(h, i), Math.abs(g - c) < d && (u[l - 2] = g, u[2] = c, u[l - 1] = _(a * a + o * o), u[3] = _(i * i + h * h), p[l - 2] = p[l - 1] = !0));
    }

    return t;
  }

  function fa(t) {
    var e = t.trim().split(" ");
    return {
      x: (~t.indexOf("left") ? 0 : ~t.indexOf("right") ? 100 : isNaN(parseFloat(e[0])) ? 50 : parseFloat(e[0])) / 100,
      y: (~t.indexOf("top") ? 0 : ~t.indexOf("bottom") ? 100 : isNaN(parseFloat(e[1])) ? 50 : parseFloat(e[1])) / 100
    };
  }

  function ia(t, e, r, n) {
    var a,
        o,
        i = this._origin,
        h = this._eOrigin,
        s = t[r] - i.x,
        l = t[r + 1] - i.y,
        g = _(s * s + l * l),
        c = w(l, s);

    return s = e[r] - h.x, l = e[r + 1] - h.y, o = function _shortAngle(t) {
      return t !== t % p ? t + (t < 0 ? u : -u) : t;
    }(a = w(l, s) - c), !n && F && Math.abs(o + F.ca) < f && (n = F), this._anchorPT = F = {
      _next: this._anchorPT,
      t: t,
      sa: c,
      ca: n && o * n.ca < 0 && Math.abs(o) > d ? a : o,
      sl: g,
      cl: _(s * s + l * l) - g,
      i: r
    };
  }

  function ja(t) {
    r = y(), a = a || r && r.plugins.morphSVG, r && a ? (C = r.utils.toArray, a.prototype._tweenRotation = ia, I = 1) : t && M("Please gsap.registerPlugin(MorphSVGPlugin)");
  }

  var r,
      C,
      F,
      I,
      a,
      w = Math.atan2,
      j = Math.cos,
      L = Math.sin,
      _ = Math.sqrt,
      p = Math.PI,
      u = 2 * p,
      f = .3 * p,
      d = .7 * p,
      G = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
      q = /(^[#\.][a-z]|[a-y][a-z])/gi,
      H = /[achlmqstvz]/gi,
      J = "Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",
      K = {
    version: "3.4.0",
    name: "morphSVG",
    rawVars: 1,
    register: function register(t, e) {
      r = t, a = e, ja();
    },
    init: function init(t, e, r, n, a) {
      if (I || ja(1), !e) return M("invalid shape"), !1;

      var o, i, h, s, l, g, c, p, u, f, d, _, P, v, m, y, w, x, T, b, S, N;

      if (z(e) && (e = e.call(r, n, t, a)), "string" == typeof e || e.getBBox || e[0]) e = {
        shape: e
      };else if ("object" == typeof e) {
        for (i in o = {}, e) o[i] = z(e[i]) && "render" !== i ? e[i].call(r, n, t, a) : e[i];

        e = o;
      }
      var A = t.nodeType ? window.getComputedStyle(t) : {},
          R = A.fill + "",
          O = !("none" === R || "0" === (R.match(G) || [])[3] || "evenodd" === A.fillRule),
          j = (e.origin || "50 50").split(",");
      if (l = "POLYLINE" === (o = (t.nodeName + "").toUpperCase()) || "POLYGON" === o, "PATH" !== o && !l && !e.prop) return M("Cannot morph a <" + o + "> element. " + J), !1;
      if (i = "PATH" === o ? "d" : "points", !e.prop && !z(t.setAttribute)) return !1;
      if (s = function _parseShape(t, e, r) {
        var n, a;
        return (!("string" == typeof t) || q.test(t) || (t.match(G) || []).length < 3) && ((n = C(t)[0]) ? (a = (n.nodeName + "").toUpperCase(), e && "PATH" !== a && (n = convertToPath(n, !1), a = "PATH"), t = n.getAttribute("PATH" === a ? "d" : "points") || "", n === r && (t = n.getAttributeNS(null, "data-original") || t)) : (M("WARNING: invalid morph to: " + t), t = !1)), t;
      }(e.shape || e.d || e.points || "", "d" === i, t), l && H.test(s)) return M("A <" + o + "> cannot accept path data. " + J), !1;

      if (g = e.shapeIndex || 0 === e.shapeIndex ? e.shapeIndex : "auto", c = e.map || K.defaultMap, this._prop = e.prop, this._render = e.render || K.defaultRender, this._apply = "updateTarget" in e ? e.updateTarget : K.defaultUpdateTarget, this._rnd = Math.pow(10, isNaN(e.precision) ? 2 : +e.precision), this._tween = r, s) {
        if (this._target = t, w = "object" == typeof e.precompile, f = this._prop ? t[this._prop] : t.getAttribute(i), this._prop || t.getAttributeNS(null, "data-original") || t.setAttributeNS(null, "data-original", f), "d" === i || this._prop) {
          if (f = stringToRawPath(w ? e.precompile[0] : f), d = stringToRawPath(w ? e.precompile[1] : s), !w && !Z(f, d, g, c, O)) return !1;

          for ("log" !== e.precompile && !0 !== e.precompile || M('precompile:["' + rawPathToString(f) + '","' + rawPathToString(d) + '"]'), (S = "linear" !== (e.type || K.defaultType)) && (f = ea(f, e.smoothTolerance), d = ea(d, e.smoothTolerance), f.size || Q(f), d.size || Q(d), b = fa(j[0]), this._origin = f.origin = {
            x: f.left + b.x * f.width,
            y: f.top + b.y * f.height
          }, j[1] && (b = fa(j[1])), this._eOrigin = {
            x: d.left + b.x * d.width,
            y: d.top + b.y * d.height
          }), this._rawPath = t._gsRawPath = f, P = f.length; -1 < --P;) for (m = f[P], y = d[P], p = m.isSmooth || [], u = y.isSmooth || [], v = m.length, _ = F = 0; _ < v; _ += 2) y[_] === m[_] && y[_ + 1] === m[_ + 1] || (S ? p[_] && u[_] ? (x = m.smoothData, T = y.smoothData, N = _ + (_ === v - 4 ? 7 - v : 5), this._controlPT = {
            _next: this._controlPT,
            i: _,
            j: P,
            l1s: x[_ + 1],
            l1c: T[_ + 1] - x[_ + 1],
            l2s: x[N],
            l2c: T[N] - x[N]
          }, h = this._tweenRotation(m, y, _ + 2), this._tweenRotation(m, y, _, h), this._tweenRotation(m, y, N - 1, h), _ += 4) : this._tweenRotation(m, y, _) : (h = this.add(m, _, m[_], y[_]), h = this.add(m, _ + 1, m[_ + 1], y[_ + 1]) || h));
        } else h = this.add(t, "setAttribute", t.getAttribute(i) + "", s + "", n, a, 0, ca(g), i);

        S && (this.add(this._origin, "x", this._origin.x, this._eOrigin.x), h = this.add(this._origin, "y", this._origin.y, this._eOrigin.y)), h && (this._props.push("morphSVG"), h.end = s, h.endProp = i);
      }

      return 1;
    },
    render: function render(t, e) {
      for (var r, n, a, o, i, h, s, l, g, c, p, u, f = e._rawPath, d = e._controlPT, _ = e._anchorPT, P = e._rnd, v = e._target, m = e._pt; m;) m.r(t, m.d), m = m._next;

      if (1 === t && e._apply) for (m = e._pt; m;) m.end && (e._prop ? v[e._prop] = m.end : v.setAttribute(m.endProp, m.end)), m = m._next;else if (f) {
        for (; _;) i = _.sa + t * _.ca, o = _.sl + t * _.cl, _.t[_.i] = e._origin.x + j(i) * o, _.t[_.i + 1] = e._origin.y + L(i) * o, _ = _._next;

        for (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1; d;) u = (h = d.i) + (h === (a = f[d.j]).length - 4 ? 7 - a.length : 5), i = w(a[u] - a[h + 1], a[u - 1] - a[h]), c = L(i), p = j(i), l = a[h + 2], g = a[h + 3], o = d.l1s + n * d.l1c, a[h] = l - p * o, a[h + 1] = g - c * o, o = d.l2s + n * d.l2c, a[u - 1] = l + p * o, a[u] = g + c * o, d = d._next;

        if (v._gsRawPath = f, e._apply) {
          for (r = "", s = 0; s < f.length; s++) for (o = (a = f[s]).length, r += "M" + (a[0] * P | 0) / P + " " + (a[1] * P | 0) / P + " C", h = 2; h < o; h++) r += (a[h] * P | 0) / P + " ";

          e._prop ? v[e._prop] = r : v.setAttribute("d", r);
        }
      }
      e._render && f && e._render.call(e._tween, f, v);
    },
    kill: function kill() {
      this._pt = this._rawPath = 0;
    },
    getRawPath: function getRawPath(t) {
      var e,
          r = (t = m(t) && n.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
      return r && (t = t.getAttribute("d")) ? (r._gsPath || (r._gsPath = {}), (e = r._gsPath[t]) && !e._dirty ? e : r._gsPath[t] = stringToRawPath(t)) : t ? m(t) ? stringToRawPath(t) : h(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string");
    },
    stringToRawPath: stringToRawPath,
    rawPathToString: rawPathToString,
    pathFilter: function _pathFilter(t, e, r, n, a) {
      var o = stringToRawPath(t[0]),
          i = stringToRawPath(t[1]);
      Z(o, i, e || 0 === e ? e : "auto", r, a) && (t[0] = rawPathToString(o), t[1] = rawPathToString(i), "log" !== n && !0 !== n || M('precompile:["' + t[0] + '","' + t[1] + '"]'));
    },
    pointsFilter: ba,
    getTotalSize: Q,
    equalizeSegmentQuantity: Z,
    convertToPath: function convertToPath$1(t, e) {
      return C(t).map(function (t) {
        return convertToPath(t, !1 !== e);
      });
    },
    defaultType: "linear",
    defaultUpdateTarget: !0,
    defaultMap: "size"
  };
  y() && r.registerPlugin(K), t.MorphSVGPlugin = K, t.default = K;

  if (typeof window === "undefined" || window !== t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
  } else {
    delete t.default;
  }
});
/* ellipsis.js */

!function () {
  "use strict";

  function a(a) {
    var c = k(b, a || {});
    this.create(c), this.add();
  }

  var b = {
    ellipsis: "…",
    debounce: 0,
    responsive: !0,
    className: ".clamp",
    lines: 2,
    portrait: null,
    break_word: !0
  },
      c = 0,
      d = !!window.requestAnimationFrame,
      e = function () {
    return c += 1;
  },
      f = function (a, b) {
    a.setAttribute("data-ellipsis-id", b);
  },
      g = function (a) {
    return a.getAttribute("data-ellipsis-id");
  },
      h = function (a, b) {
    var c = e();
    f(b, c), a[c] = a[c] || {}, a[c].element = b, a[c].innerHTML = b.innerHTML;
  },
      i = function (a, b) {
    return a ? a[g(b)] : null;
  },
      j = function (a) {
    return Object.keys(a).map(function (b, c) {
      return a[b].element;
    });
  },
      k = function (a, b) {
    var c = {};

    for (var d in a) c[d] = a[d];

    for (var e in b) c[e] = b[e];

    return c;
  };

  a.prototype = {
    conf: {},
    prop: {},
    lines: {},
    temp: null,
    listener: null,
    create: function (a) {
      if (this.conf = a, this.lines = {
        get current() {
          return a.portrait && window.innerHeight > window.innerWidth ? a.portrait : a.lines;
        }

      }, this.conf.responsive) {
        this.temp = {};
        var b,
            c = this.conf.debounce;

        if (d && !c) {
          this._isScheduled = !1;
          var e = this;

          b = function (a) {
            e._isScheduled || (e._isScheduled = !0, window.requestAnimationFrame(function () {
              e._isScheduled = !1, e.add(j(e.temp));
            }));
          };
        } else {
          c = c || 16;
          var f;

          b = function (a) {
            clearTimeout(f), f = setTimeout(function () {
              this.add(j(this.temp));
            }.bind(this), c);
          };
        }

        this.listener = b.bind(this), window.addEventListener("resize", this.listener, !1), window.removeEventListener("beforeunload", this.listener, !1);
      }
    },
    destroy: function () {
      this.listener && window.removeEventListener("resize", this.listener, !1);
    },
    createProp: function (a) {
      this.prop = {
        get height() {
          var b = a.getBoundingClientRect();
          return parseInt(b.bottom - b.top, 10);
        },

        get lineheight() {
          var b = getComputedStyle(a).getPropertyValue("line-height");
          return String("normal|initial|inherit").indexOf(b) > -1 && (b = parseInt(getComputedStyle(a).getPropertyValue("font-size"), 10) + 2), parseInt(b, 10);
        }

      };
    },
    add: function (a) {
      if (!a && this.conf.className && (a = document.querySelectorAll(this.conf.className)), a) if (a.length) for (var b = 0; b < a.length; b++) this.addElement(a[b]);else void 0 === a.length && this.addElement(a);
    },
    addElement: function (a) {
      if (this.conf.responsive) {
        var b = i(this.temp, a);
        b ? a.innerHTML !== b.innerHTML && (a.innerHTML = b.innerHTML) : h(this.temp, a);
      }

      this.createProp(a), this.isNotCorrect() && (a.childNodes.length && a.childNodes.length > 1 ? this.handleChildren(a) : a.childNodes.length && 1 === a.childNodes.length && 3 === a.childNodes[0].nodeType && this.simpleText(a));
    },
    breakWord: function (a, b, c) {
      var d = a.split(" ");
      if (d.pop(), c && d.pop(), !b) return d[d.length - 1] && (d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, "")), d.push(this.conf.ellipsis), d.join(" ");
      if (d[d.length - 1]) return d[d.length - 1] = d[d.length - 1].replace(/(,$)/g, "").replace(/(\.$)/g, ""), d.push(this.conf.ellipsis), [d.join(" "), b];

      if (!d[d.length - 1] && b) {
        var e = " " + b.trim().replace(/(,$)/g, "").replace(/(\.$)/g, "") + " ";
        return d.push(this.conf.ellipsis), [d.join(" "), e];
      }
    },
    simpleText: function (a) {
      for (var b = a.childNodes[0].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) a.childNodes[0].nodeValue = b.slice(0, -1), b = a.childNodes[0].nodeValue;

      this.conf.break_word ? (a.childNodes[0].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect() && (a.childNodes[0].nodeValue = " " + a.childNodes[0].nodeValue.slice(0, -(this.conf.ellipsis.length + 1)).trim().slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis)) : (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue), this.isNotCorrect() && (a.childNodes[0].nodeValue = this.breakWord(a.childNodes[0].nodeValue, null, !0)));
    },
    isNotCorrect: function () {
      return this.prop.height > this.prop.lineheight * this.lines.current;
    },
    processBreak: function (a, b, c) {
      var d = this.breakWord(a.innerText || a.nodeValue, b.innerText || b.nodeValue, c);
      a.innerText ? a.innerText = d[0] : a.nodeValue = d[0], b.innerText ? b.innerText = d[1] : b.nodeValue = d[1];
    },
    handleChildren: function (a) {
      for (var b, c = a.childNodes, d = c.length - 1; d >= 0; d--) {
        var e;

        if (8 !== c[d].nodeType) {
          if (3 === c[d].nodeType ? (e = c[d].nodeValue, c[d].nodeValue = "") : (e = getComputedStyle(c[d]).getPropertyValue("display"), c[d].style.display = "none"), this.prop.height <= this.prop.lineheight * this.lines.current) {
            if (3 === c[d].nodeType) {
              for (c[d].nodeValue = e, b = c[d].nodeValue; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].nodeValue = b.slice(0, -1), b = c[d].nodeValue;

              if (this.conf.break_word) {
                if (c[d].nodeValue = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].nodeValue = " " + c[d].nodeValue.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].nodeValue.length > 1)) continue;
                  c[d].nodeValue = c[d].nodeValue.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            } else {
              for (c[d].style.display = e, b = c[d].innerText; this.prop.height > this.prop.lineheight * this.lines.current;) c[d].innerText = b.slice(0, -1), b = c[d].innerText;

              if (this.conf.break_word) {
                if (c[d].innerText = b.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis, this.isNotCorrect()) {
                  if (c[d].innerText = " " + c[d].innerText.slice(0, -this.conf.ellipsis.length).trim().slice(0, -this.conf.ellipsis.length), !(c[d].innerText.length > 1)) continue;
                  c[d].innerText = c[d].innerText.slice(0, -this.conf.ellipsis.length) + this.conf.ellipsis;
                }
              } else {
                if (!c[d].innerText && !c[d].nodeValue) continue;

                if (this.processBreak(c[d], c[d - 1]), this.isNotCorrect() && (this.processBreak(c[d], c[d - 1], !0), this.isNotCorrect())) {
                  a.removeChild(c[d]);
                  continue;
                }
              }
            }

            break;
          }

          a.removeChild(c[d]);
        }
      }
    }
  };

  var l = function (b) {
    return new a(b);
  };

  "function" == typeof define && define.amd && define("ellipsis", [], function () {
    return l;
  }), self.Ellipsis = l;
}();