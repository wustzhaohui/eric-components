import He, { useState as Re, useEffect as Oe } from "react";
function Ie(b, P, A) {
  if (A || arguments.length === 2)
    for (var E = 0, W = P.length, N; E < W; E++)
      (N || !(E in P)) && (N || (N = Array.prototype.slice.call(P, 0, E)), N[E] = P[E]);
  return b.concat(N || Array.prototype.slice.call(P));
}
var vr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hr(b) {
  return b && b.__esModule && Object.prototype.hasOwnProperty.call(b, "default") ? b.default : b;
}
var Se = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function pr() {
  if (We)
    return he;
  We = 1;
  var b = He, P = Symbol.for("react.element"), A = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, W = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, N = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(D, R, S) {
    var x, d = {}, y = null, U = null;
    S !== void 0 && (y = "" + S), R.key !== void 0 && (y = "" + R.key), R.ref !== void 0 && (U = R.ref);
    for (x in R)
      E.call(R, x) && !N.hasOwnProperty(x) && (d[x] = R[x]);
    if (D && D.defaultProps)
      for (x in R = D.defaultProps, R)
        d[x] === void 0 && (d[x] = R[x]);
    return { $$typeof: P, type: D, key: y, ref: U, props: d, _owner: W.current };
  }
  return he.Fragment = A, he.jsx = T, he.jsxs = T, he;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function mr() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var b = He, P = Symbol.for("react.element"), A = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), D = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), G = Symbol.iterator, se = "@@iterator";
    function ue(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = G && e[G] || e[se];
      return typeof r == "function" ? r : null;
    }
    var ee = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          i[f - 1] = arguments[f];
        oe("error", e, i);
      }
    }
    function oe(e, r, i) {
      {
        var f = ee.ReactDebugCurrentFrame, g = f.getStackAddendum();
        g !== "" && (r += "%s", i = i.concat([g]));
        var O = i.map(function(m) {
          return String(m);
        });
        O.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, O);
      }
    }
    var de = !1, ne = !1, Z = !1, w = !1, z = !1, C;
    C = Symbol.for("react.module.reference");
    function v(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === N || z || e === W || e === S || e === x || w || e === U || de || ne || Z || typeof e == "object" && e !== null && (e.$$typeof === y || e.$$typeof === d || e.$$typeof === T || e.$$typeof === D || e.$$typeof === R || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === C || e.getModuleId !== void 0));
    }
    function u(e, r, i) {
      var f = e.displayName;
      if (f)
        return f;
      var g = r.displayName || r.name || "";
      return g !== "" ? i + "(" + g + ")" : i;
    }
    function K(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case A:
          return "Portal";
        case N:
          return "Profiler";
        case W:
          return "StrictMode";
        case S:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case D:
            var r = e;
            return K(r) + ".Consumer";
          case T:
            var i = e;
            return K(i._context) + ".Provider";
          case R:
            return u(e, e.render, "ForwardRef");
          case d:
            var f = e.displayName || null;
            return f !== null ? f : V(e.type) || "Memo";
          case y: {
            var g = e, O = g._payload, m = g._init;
            try {
              return V(m(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var s = Object.assign, t = 0, n, o, a, c, l, p, _;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function j() {
      {
        if (t === 0) {
          n = console.log, o = console.info, a = console.warn, c = console.error, l = console.group, p = console.groupCollapsed, _ = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        t++;
      }
    }
    function H() {
      {
        if (t--, t === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: s({}, e, {
              value: n
            }),
            info: s({}, e, {
              value: o
            }),
            warn: s({}, e, {
              value: a
            }),
            error: s({}, e, {
              value: c
            }),
            group: s({}, e, {
              value: l
            }),
            groupCollapsed: s({}, e, {
              value: p
            }),
            groupEnd: s({}, e, {
              value: _
            })
          });
        }
        t < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = ee.ReactCurrentDispatcher, X;
    function re(e, r, i) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (g) {
            var f = g.stack.trim().match(/\n( *(at )?)/);
            X = f && f[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Q = !1, L;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      L = new te();
    }
    function ie(e, r) {
      if (!e || Q)
        return "";
      {
        var i = L.get(e);
        if (i !== void 0)
          return i;
      }
      var f;
      Q = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = J.current, J.current = null, j();
      try {
        if (r) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (ae) {
              f = ae;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch (ae) {
              f = ae;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            f = ae;
          }
          e();
        }
      } catch (ae) {
        if (ae && f && typeof ae.stack == "string") {
          for (var h = ae.stack.split(`
`), B = f.stack.split(`
`), M = h.length - 1, F = B.length - 1; M >= 1 && F >= 0 && h[M] !== B[F]; )
            F--;
          for (; M >= 1 && F >= 0; M--, F--)
            if (h[M] !== B[F]) {
              if (M !== 1 || F !== 1)
                do
                  if (M--, F--, F < 0 || h[M] !== B[F]) {
                    var q = `
` + h[M].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, q), q;
                  }
                while (M >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        Q = !1, J.current = O, H(), Error.prepareStackTrace = g;
      }
      var fe = e ? e.displayName || e.name : "", Le = fe ? re(fe) : "";
      return typeof e == "function" && L.set(e, Le), Le;
    }
    function ce(e, r, i) {
      return ie(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function me(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ie(e, ze(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case S:
          return re("Suspense");
        case x:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            return ce(e.render);
          case d:
            return me(e.type, r, i);
          case y: {
            var f = e, g = f._payload, O = f._init;
            try {
              return me(O(g), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, xe = {}, Ce = ee.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, i = me(e.type, e._source, r ? r.type : null);
        Ce.setExtraStackFrame(i);
      } else
        Ce.setExtraStackFrame(null);
    }
    function Je(e, r, i, f, g) {
      {
        var O = Function.call.bind(ye);
        for (var m in e)
          if (O(e, m)) {
            var h = void 0;
            try {
              if (typeof e[m] != "function") {
                var B = Error((f || "React class") + ": " + i + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              h = e[m](r, m, f, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (M) {
              h = M;
            }
            h && !(h instanceof Error) && (ge(g), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", i, m, typeof h), ge(null)), h instanceof Error && !(h.message in xe) && (xe[h.message] = !0, ge(g), Y("Failed %s type: %s", i, h.message), ge(null));
          }
      }
    }
    var qe = Array.isArray;
    function be(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Ze(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function Te(e) {
      if (Ze(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), ke(e);
    }
    var ve = ee.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, je, _e;
    _e = {};
    function Xe(e) {
      if (ye.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (ye.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && ve.current && r && ve.current.stateNode !== r) {
        var i = V(ve.current.type);
        _e[i] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ve.current.type), e.ref), _e[i] = !0);
      }
    }
    function rr(e, r) {
      {
        var i = function() {
          De || (De = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var i = function() {
          je || (je = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, i, f, g, O, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: P,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: m,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function ar(e, r, i, f, g) {
      {
        var O, m = {}, h = null, B = null;
        i !== void 0 && (Te(i), h = "" + i), Qe(r) && (Te(r.key), h = "" + r.key), Xe(r) && (B = r.ref, er(r, g));
        for (O in r)
          ye.call(r, O) && !Ke.hasOwnProperty(O) && (m[O] = r[O]);
        if (e && e.defaultProps) {
          var M = e.defaultProps;
          for (O in M)
            m[O] === void 0 && (m[O] = M[O]);
        }
        if (h || B) {
          var F = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && rr(m, F), B && tr(m, F);
        }
        return nr(e, h, B, g, f, ve.current, m);
      }
    }
    var Ee = ee.ReactCurrentOwner, Me = ee.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, i = me(e.type, e._source, r ? r.type : null);
        Me.setExtraStackFrame(i);
      } else
        Me.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function $e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    function Pe() {
      {
        if (Ee.current) {
          var e = V(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function or(e) {
      {
        var r = Pe();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function Ne(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = or(r);
        if (Ae[i])
          return;
        Ae[i] = !0;
        var f = "";
        e && e._owner && e._owner !== Ee.current && (f = " It was passed a child from " + V(e._owner.type) + "."), le(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, f), le(null);
      }
    }
    function Fe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (be(e))
          for (var i = 0; i < e.length; i++) {
            var f = e[i];
            $e(f) && Ne(f, r);
          }
        else if ($e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ue(e);
          if (typeof g == "function" && g !== e.entries)
            for (var O = g.call(e), m; !(m = O.next()).done; )
              $e(m.value) && Ne(m.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === R || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === d))
          i = r.propTypes;
        else
          return;
        if (i) {
          var f = V(r);
          Je(i, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !we) {
          we = !0;
          var g = V(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var f = r[i];
          if (f !== "children" && f !== "key") {
            le(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), le(null);
            break;
          }
        }
        e.ref !== null && (le(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), le(null));
      }
    }
    function Ye(e, r, i, f, g, O) {
      {
        var m = v(e);
        if (!m) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = ir(g);
          B ? h += B : h += Pe();
          var M;
          e === null ? M = "null" : be(e) ? M = "array" : e !== void 0 && e.$$typeof === P ? (M = "<" + (V(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : M = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", M, h);
        }
        var F = ar(e, r, i, g, O);
        if (F == null)
          return F;
        if (m) {
          var q = r.children;
          if (q !== void 0)
            if (f)
              if (be(q)) {
                for (var fe = 0; fe < q.length; fe++)
                  Fe(q[fe], e);
                Object.freeze && Object.freeze(q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fe(q, e);
        }
        return e === E ? ur(F) : sr(F), F;
      }
    }
    function cr(e, r, i) {
      return Ye(e, r, i, !0);
    }
    function lr(e, r, i) {
      return Ye(e, r, i, !1);
    }
    var fr = lr, dr = cr;
    pe.Fragment = E, pe.jsx = fr, pe.jsxs = dr;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Se.exports = pr() : Se.exports = mr();
var k = Se.exports, Be = { exports: {} };
(function(b, P) {
  (function(A, E) {
    b.exports = E();
  })(vr, function() {
    var A = 1e3, E = 6e4, W = 36e5, N = "millisecond", T = "second", D = "minute", R = "hour", S = "day", x = "week", d = "month", y = "quarter", U = "year", G = "date", se = "Invalid Date", ue = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ee = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, Y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var t = ["th", "st", "nd", "rd"], n = s % 100;
      return "[" + s + (t[(n - 20) % 10] || t[n] || t[0]) + "]";
    } }, oe = function(s, t, n) {
      var o = String(s);
      return !o || o.length >= t ? s : "" + Array(t + 1 - o.length).join(n) + s;
    }, de = { s: oe, z: function(s) {
      var t = -s.utcOffset(), n = Math.abs(t), o = Math.floor(n / 60), a = n % 60;
      return (t <= 0 ? "+" : "-") + oe(o, 2, "0") + ":" + oe(a, 2, "0");
    }, m: function s(t, n) {
      if (t.date() < n.date())
        return -s(n, t);
      var o = 12 * (n.year() - t.year()) + (n.month() - t.month()), a = t.clone().add(o, d), c = n - a < 0, l = t.clone().add(o + (c ? -1 : 1), d);
      return +(-(o + (n - a) / (c ? a - l : l - a)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: d, y: U, w: x, d: S, D: G, h: R, m: D, s: T, ms: N, Q: y }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, ne = "en", Z = {};
    Z[ne] = Y;
    var w = "$isDayjsObject", z = function(s) {
      return s instanceof K || !(!s || !s[w]);
    }, C = function s(t, n, o) {
      var a;
      if (!t)
        return ne;
      if (typeof t == "string") {
        var c = t.toLowerCase();
        Z[c] && (a = c), n && (Z[c] = n, a = c);
        var l = t.split("-");
        if (!a && l.length > 1)
          return s(l[0]);
      } else {
        var p = t.name;
        Z[p] = t, a = p;
      }
      return !o && a && (ne = a), a || !o && ne;
    }, v = function(s, t) {
      if (z(s))
        return s.clone();
      var n = typeof t == "object" ? t : {};
      return n.date = s, n.args = arguments, new K(n);
    }, u = de;
    u.l = C, u.i = z, u.w = function(s, t) {
      return v(s, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset });
    };
    var K = function() {
      function s(n) {
        this.$L = C(n.locale, null, !0), this.parse(n), this.$x = this.$x || n.x || {}, this[w] = !0;
      }
      var t = s.prototype;
      return t.parse = function(n) {
        this.$d = function(o) {
          var a = o.date, c = o.utc;
          if (a === null)
            return /* @__PURE__ */ new Date(NaN);
          if (u.u(a))
            return /* @__PURE__ */ new Date();
          if (a instanceof Date)
            return new Date(a);
          if (typeof a == "string" && !/Z$/i.test(a)) {
            var l = a.match(ue);
            if (l) {
              var p = l[2] - 1 || 0, _ = (l[7] || "0").substring(0, 3);
              return c ? new Date(Date.UTC(l[1], p, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, _)) : new Date(l[1], p, l[3] || 1, l[4] || 0, l[5] || 0, l[6] || 0, _);
            }
          }
          return new Date(a);
        }(n), this.init();
      }, t.init = function() {
        var n = this.$d;
        this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
      }, t.$utils = function() {
        return u;
      }, t.isValid = function() {
        return this.$d.toString() !== se;
      }, t.isSame = function(n, o) {
        var a = v(n);
        return this.startOf(o) <= a && a <= this.endOf(o);
      }, t.isAfter = function(n, o) {
        return v(n) < this.startOf(o);
      }, t.isBefore = function(n, o) {
        return this.endOf(o) < v(n);
      }, t.$g = function(n, o, a) {
        return u.u(n) ? this[o] : this.set(a, n);
      }, t.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, t.valueOf = function() {
        return this.$d.getTime();
      }, t.startOf = function(n, o) {
        var a = this, c = !!u.u(o) || o, l = u.p(n), p = function(Q, L) {
          var te = u.w(a.$u ? Date.UTC(a.$y, L, Q) : new Date(a.$y, L, Q), a);
          return c ? te : te.endOf(S);
        }, _ = function(Q, L) {
          return u.w(a.toDate()[Q].apply(a.toDate("s"), (c ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(L)), a);
        }, $ = this.$W, j = this.$M, H = this.$D, J = "set" + (this.$u ? "UTC" : "");
        switch (l) {
          case U:
            return c ? p(1, 0) : p(31, 11);
          case d:
            return c ? p(1, j) : p(0, j + 1);
          case x:
            var X = this.$locale().weekStart || 0, re = ($ < X ? $ + 7 : $) - X;
            return p(c ? H - re : H + (6 - re), j);
          case S:
          case G:
            return _(J + "Hours", 0);
          case R:
            return _(J + "Minutes", 1);
          case D:
            return _(J + "Seconds", 2);
          case T:
            return _(J + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, t.endOf = function(n) {
        return this.startOf(n, !1);
      }, t.$set = function(n, o) {
        var a, c = u.p(n), l = "set" + (this.$u ? "UTC" : ""), p = (a = {}, a[S] = l + "Date", a[G] = l + "Date", a[d] = l + "Month", a[U] = l + "FullYear", a[R] = l + "Hours", a[D] = l + "Minutes", a[T] = l + "Seconds", a[N] = l + "Milliseconds", a)[c], _ = c === S ? this.$D + (o - this.$W) : o;
        if (c === d || c === U) {
          var $ = this.clone().set(G, 1);
          $.$d[p](_), $.init(), this.$d = $.set(G, Math.min(this.$D, $.daysInMonth())).$d;
        } else
          p && this.$d[p](_);
        return this.init(), this;
      }, t.set = function(n, o) {
        return this.clone().$set(n, o);
      }, t.get = function(n) {
        return this[u.p(n)]();
      }, t.add = function(n, o) {
        var a, c = this;
        n = Number(n);
        var l = u.p(o), p = function(j) {
          var H = v(c);
          return u.w(H.date(H.date() + Math.round(j * n)), c);
        };
        if (l === d)
          return this.set(d, this.$M + n);
        if (l === U)
          return this.set(U, this.$y + n);
        if (l === S)
          return p(1);
        if (l === x)
          return p(7);
        var _ = (a = {}, a[D] = E, a[R] = W, a[T] = A, a)[l] || 1, $ = this.$d.getTime() + n * _;
        return u.w($, this);
      }, t.subtract = function(n, o) {
        return this.add(-1 * n, o);
      }, t.format = function(n) {
        var o = this, a = this.$locale();
        if (!this.isValid())
          return a.invalidDate || se;
        var c = n || "YYYY-MM-DDTHH:mm:ssZ", l = u.z(this), p = this.$H, _ = this.$m, $ = this.$M, j = a.weekdays, H = a.months, J = a.meridiem, X = function(L, te, ie, ce) {
          return L && (L[te] || L(o, c)) || ie[te].slice(0, ce);
        }, re = function(L) {
          return u.s(p % 12 || 12, L, "0");
        }, Q = J || function(L, te, ie) {
          var ce = L < 12 ? "AM" : "PM";
          return ie ? ce.toLowerCase() : ce;
        };
        return c.replace(ee, function(L, te) {
          return te || function(ie) {
            switch (ie) {
              case "YY":
                return String(o.$y).slice(-2);
              case "YYYY":
                return u.s(o.$y, 4, "0");
              case "M":
                return $ + 1;
              case "MM":
                return u.s($ + 1, 2, "0");
              case "MMM":
                return X(a.monthsShort, $, H, 3);
              case "MMMM":
                return X(H, $);
              case "D":
                return o.$D;
              case "DD":
                return u.s(o.$D, 2, "0");
              case "d":
                return String(o.$W);
              case "dd":
                return X(a.weekdaysMin, o.$W, j, 2);
              case "ddd":
                return X(a.weekdaysShort, o.$W, j, 3);
              case "dddd":
                return j[o.$W];
              case "H":
                return String(p);
              case "HH":
                return u.s(p, 2, "0");
              case "h":
                return re(1);
              case "hh":
                return re(2);
              case "a":
                return Q(p, _, !0);
              case "A":
                return Q(p, _, !1);
              case "m":
                return String(_);
              case "mm":
                return u.s(_, 2, "0");
              case "s":
                return String(o.$s);
              case "ss":
                return u.s(o.$s, 2, "0");
              case "SSS":
                return u.s(o.$ms, 3, "0");
              case "Z":
                return l;
            }
            return null;
          }(L) || l.replace(":", "");
        });
      }, t.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, t.diff = function(n, o, a) {
        var c, l = this, p = u.p(o), _ = v(n), $ = (_.utcOffset() - this.utcOffset()) * E, j = this - _, H = function() {
          return u.m(l, _);
        };
        switch (p) {
          case U:
            c = H() / 12;
            break;
          case d:
            c = H();
            break;
          case y:
            c = H() / 3;
            break;
          case x:
            c = (j - $) / 6048e5;
            break;
          case S:
            c = (j - $) / 864e5;
            break;
          case R:
            c = j / W;
            break;
          case D:
            c = j / E;
            break;
          case T:
            c = j / A;
            break;
          default:
            c = j;
        }
        return a ? c : u.a(c);
      }, t.daysInMonth = function() {
        return this.endOf(d).$D;
      }, t.$locale = function() {
        return Z[this.$L];
      }, t.locale = function(n, o) {
        if (!n)
          return this.$L;
        var a = this.clone(), c = C(n, o, !0);
        return c && (a.$L = c), a;
      }, t.clone = function() {
        return u.w(this.$d, this);
      }, t.toDate = function() {
        return new Date(this.valueOf());
      }, t.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, t.toISOString = function() {
        return this.$d.toISOString();
      }, t.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), V = K.prototype;
    return v.prototype = V, [["$ms", N], ["$s", T], ["$m", D], ["$H", R], ["$W", S], ["$M", d], ["$y", U], ["$D", G]].forEach(function(s) {
      V[s[1]] = function(t) {
        return this.$g(t, s[0], s[1]);
      };
    }), v.extend = function(s, t) {
      return s.$i || (s(t, K, v), s.$i = !0), v;
    }, v.locale = C, v.isDayjs = z, v.unix = function(s) {
      return v(1e3 * s);
    }, v.en = Z[ne], v.Ls = Z, v.p = {}, v;
  });
})(Be);
var yr = Be.exports;
const I = /* @__PURE__ */ hr(yr);
var Ve = function(b) {
  var P = b.className, A = b.link;
  return k.jsx("svg", { className: "icon ".concat(P), "aria-hidden": "true", children: k.jsx("use", { xlinkHref: "#".concat(A) }) });
};
window._iconfont_svg_string_4438865 = '<svg><symbol id="h-left" viewBox="0 0 1024 1024"><path d="M786.44211358 131.79410963V31.72630124c0-8.67340642-9.96794469-13.46319803-16.69954371-8.15559111L186.16471703 479.37763555c-21.23042765 16.57008987-21.23042765 48.54518518 0 65.11527506l583.57785284 455.80692544c6.86105283 5.30760691 16.6995437 0.51781531 16.69954371-8.15559111v-100.06780841c0-6.34323753-2.97743803-12.42756741-7.89668345-16.31118222l-466.03377778-363.76525431 466.03377778-363.89470815c4.91924543-3.88361482 7.89668347-9.96794469 7.89668345-16.31118222z"  ></path></symbol><symbol id="h-left-copy" viewBox="0 0 1024 1024"><path d="M237.55788642 892.20589037L237.55788642 992.27369876c0 8.67340641 9.96794469 13.46319803 16.69954371 8.15559111L837.83528297 544.62236445c21.23042765-16.57008987 21.23042766-48.54518518 0-65.11527506l-583.57785284-455.80692544c-6.86105283-5.30760691-16.6995437-0.51781531-16.69954371 8.15559111l0 100.06780841c0 6.34323753 2.97743803 12.42756741 7.89668345 16.31118222l466.03377778 363.76525431-466.03377778 363.89470815c-4.91924543 3.88361482-7.89668347 9.96794469-7.89668345 16.31118222z"  ></path></symbol></svg>', function(b) {
  var A = (A = document.getElementsByTagName("script"))[A.length - 1], P = A.getAttribute("data-injectcss"), A = A.getAttribute("data-disable-injectsvg");
  if (!A) {
    var E, W, N, T, D, R = function(d, y) {
      y.parentNode.insertBefore(d, y);
    };
    if (P && !b.__iconfont__svg__cssinject__) {
      b.__iconfont__svg__cssinject__ = !0;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (d) {
        console && console.log(d);
      }
    }
    E = function() {
      var d, y = document.createElement("div");
      y.innerHTML = b._iconfont_svg_string_4438865, (y = y.getElementsByTagName("svg")[0]) && (y.setAttribute("aria-hidden", "true"), y.style.position = "absolute", y.style.width = 0, y.style.height = 0, y.style.overflow = "hidden", y = y, (d = document.body).firstChild ? R(y, d.firstChild) : d.appendChild(y));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(E, 0) : (W = function() {
      document.removeEventListener("DOMContentLoaded", W, !1), E();
    }, document.addEventListener("DOMContentLoaded", W, !1)) : document.attachEvent && (N = E, T = b.document, D = !1, x(), T.onreadystatechange = function() {
      T.readyState == "complete" && (T.onreadystatechange = null, S());
    });
  }
  function S() {
    D || (D = !0, N());
  }
  function x() {
    try {
      T.documentElement.doScroll("left");
    } catch {
      return void setTimeout(x, 50);
    }
    S();
  }
}(window);
var br = function(b) {
  var P = b.date, A = b.className, E = b.title, W = b.dayContent, N = b.todayClick, T = b.preMonthClick, D = b.nextMonthClick, R = b.dayClick, S = "YYYY/MM/DD", x = Re(I().format(S)), d = x[0], y = x[1], U = Re([]), G = U[0], se = U[1], ue = Re([]), ee = ue[0], Y = ue[1];
  Oe(function() {
    for (var w = {
      0: "周日",
      1: "周一",
      2: "周二",
      3: "周三",
      4: "周四",
      5: "周五",
      6: "周六"
    }, z = [], C = 0; C < 7; )
      z.push({
        name: w[C],
        value: C
      }), C++;
    se(function() {
      return z;
    });
  }, []), Oe(function() {
    P && y(function() {
      return I(P).format(S);
    });
  }, [P]), Oe(function() {
    if (d) {
      for (var w = [], z = I(d).startOf("month"), C = I(d).endOf("month"), v = [], u = z.valueOf(); u <= C.valueOf(); u = I(u).add(1, "day").valueOf())
        v.push({
          date: u,
          week: I(u).day(),
          format: I(u).format(S),
          day: I(u).format("DD"),
          data: {}
        });
      var K = v[0], V = v[v.length - 1];
      if (K.week !== 0) {
        for (var s = K.format, t = K.week, n = [], u = t - 1; u >= 0; u--) {
          var o = I(s).subtract(u, "day").valueOf(), a = I(s).subtract(u + 1, "day"), c = {}, l = {
            date: o,
            week: a.day(),
            format: a.format(s),
            day: a.format("DD"),
            data: c
          };
          n.push(l);
        }
        v = Ie(Ie([], n, !0), v, !0);
      }
      if (V.week !== 6)
        for (var p = V.format, t = V.week, _ = 1, u = t; u < 6; u++) {
          var c = {};
          v.push({
            date: I(p).add(_, "day").valueOf(),
            week: t + _,
            format: I(p).add(_, "day").format(p),
            day: I(p).add(_, "day").format("DD"),
            data: c
          }), _++;
        }
      for (var $ = [], u = 0; u < v.length; u++) {
        var c = {}, j = v[u], t = j.week, H = j.format;
        W && Object.keys(W).length && (c = W[H]), v[u].data = c, t <= 6 && t !== 0 ? ($.push(v[u]), u === v.length - 1 && (w.push($), $ = [])) : t == 0 && (w.push($), $ = [], $.push(v[u]));
      }
      w = w.filter(function(J) {
        return J.length;
      }), Y(function() {
        return w;
      });
    }
  }, [d]);
  var oe = function(w) {
    y(I().format(S)), N && N(w, I());
  }, de = function(w) {
    y(I(d).subtract(1, "M").format(S)), T && T(w, I(d).subtract(1, "M"));
  }, ne = function(w) {
    y(I(d).add(1, "M").format(S)), D && D(w, I(d).add(1, "M"));
  }, Z = function(w, z) {
    R && R(w, z);
  };
  return k.jsxs("div", { className: "".concat(A, " calendar"), children: [k.jsxs("div", { className: "calendar-header", children: [E ? typeof E == "string" ? k.jsx("div", { className: "calendar-header-title", children: E }) : E : k.jsx("div", { className: "calendar-header-title", children: d }), k.jsxs("div", { className: "calendar-header-extra", children: [k.jsx("span", { className: "calendar-header-extra-pre calendar-header-extra-btn p-l-1 p-r-1", onClick: de, children: k.jsx(Ve, { link: "h-left" }) }), k.jsx("span", { className: "calendar-header-extra", onClick: oe, children: "今天" }), k.jsx("span", { className: "calendar-header-extra-next calendar-header-extra-btn p-l-1 p-r-1", onClick: ne, children: k.jsx(Ve, { link: "h-left-copy" }) })] })] }), k.jsx("div", { className: "calendar-content", children: k.jsxs("table", { children: [k.jsx("thead", { children: k.jsx("tr", { children: G.map(function(w) {
    return k.jsx("th", { onClick: function() {
      return w.onClick && w.onClick(w);
    }, children: w.name }, w.value);
  }) }) }), k.jsx("tbody", { children: ee.map(function(w, z) {
    return k.jsx("tr", { children: w.map(function(C) {
      return k.jsxs("td", { onClick: function(v) {
        return Z(v, C);
      }, style: {
        width: "".concat(100 / w.length, "%")
      }, children: [k.jsxs("div", { className: "calendar-content-day ".concat(d === C.format ? "active" : ""), children: [C.day, "日"] }), k.jsx("div", { className: "calendar-content-day-content", children: C.data && C.data.content && C.data.content })] }, C.day);
    }) }, z);
  }) })] }) })] });
};
export {
  br as Calendar,
  Ve as Icon,
  Ve as IconProps
};
