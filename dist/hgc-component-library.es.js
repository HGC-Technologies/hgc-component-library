import xe, { useEffect as we } from "react";
import { Bar as gr, Pie as br } from "react-chartjs-2";
import { Chart as N, CategoryScale as yr, LinearScale as hr, BarElement as Er, Title as Rr, Tooltip as je, Legend as ke, ArcElement as mr } from "chart.js";
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function _r() {
  if (Se) return I;
  Se = 1;
  var m = xe, E = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(C, c, P) {
    var p, R = {}, T = null, Y = null;
    P !== void 0 && (T = "" + P), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (Y = c.ref);
    for (p in c) b.call(c, p) && !$.hasOwnProperty(p) && (R[p] = c[p]);
    if (C && C.defaultProps) for (p in c = C.defaultProps, c) R[p] === void 0 && (R[p] = c[p]);
    return { $$typeof: E, type: C, key: T, ref: Y, props: R, _owner: y.current };
  }
  return I.Fragment = _, I.jsx = k, I.jsxs = k, I;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Cr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var m = xe, E = Symbol.for("react.element"), _ = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), C = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), re = Symbol.iterator, De = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[De];
      return typeof r == "function" ? r : null;
    }
    var x = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Fe("error", e, t);
      }
    }
    function Fe(e, r, t) {
      {
        var a = x.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, We = !1, $e = !1, Ye = !1, Le = !1, te;
    te = Symbol.for("react.module.reference");
    function Me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === $ || Le || e === y || e === P || e === p || Ye || e === Y || Ie || We || $e || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === R || e.$$typeof === k || e.$$typeof === C || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case _:
          return "Portal";
        case $:
          return "Profiler";
        case y:
          return "StrictMode";
        case P:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return ae(r) + ".Consumer";
          case k:
            var t = e;
            return ae(t._context) + ".Provider";
          case c:
            return Ve(e, e.render, "ForwardRef");
          case R:
            var a = e.displayName || null;
            return a !== null ? a : h(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return h(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, D = 0, ne, oe, ie, ue, se, le, fe;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Ue() {
      {
        if (D === 0) {
          ne = console.log, oe = console.info, ie = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        D++;
      }
    }
    function Be() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ne
            }),
            info: O({}, e, {
              value: oe
            }),
            warn: O({}, e, {
              value: ie
            }),
            error: O({}, e, {
              value: ue
            }),
            group: O({}, e, {
              value: se
            }),
            groupCollapsed: O({}, e, {
              value: le
            }),
            groupEnd: O({}, e, {
              value: fe
            })
          });
        }
        D < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = x.ReactCurrentDispatcher, q;
    function L(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var K = !1, M;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ne();
    }
    function de(e, r) {
      if (!e || K)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      K = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (v) {
              a = v;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (v) {
              a = v;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            a = v;
          }
          e();
        }
      } catch (v) {
        if (v && a && typeof v.stack == "string") {
          for (var n = v.stack.split(`
`), d = a.stack.split(`
`), s = n.length - 1, l = d.length - 1; s >= 1 && l >= 0 && n[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (n[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || n[s] !== d[l]) {
                    var g = `
` + n[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        K = !1, J.current = u, Be(), Error.prepareStackTrace = i;
      }
      var j = e ? e.displayName || e.name : "", S = j ? L(j) : "";
      return typeof e == "function" && M.set(e, S), S;
    }
    function Je(e, r, t) {
      return de(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, qe(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case P:
          return L("Suspense");
        case p:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Je(e.render);
          case R:
            return V(e.type, r, t);
          case T: {
            var a = e, i = a._payload, u = a._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ve = {}, pe = x.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ke(e, r, t, a, i) {
      {
        var u = Function.call.bind(A);
        for (var o in e)
          if (u(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var d = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              n = s;
            }
            n && !(n instanceof Error) && (U(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), U(null)), n instanceof Error && !(n.message in ve) && (ve[n.message] = !0, U(i), f("Failed %s type: %s", t, n.message), U(null));
          }
      }
    }
    var Ge = Array.isArray;
    function G(e) {
      return Ge(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function be(e) {
      if (Xe(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ge(e);
    }
    var F = x.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, he, z;
    z = {};
    function Ze(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      if (typeof e.ref == "string" && F.current && r && F.current.stateNode !== r) {
        var t = h(F.current.type);
        z[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(F.current.type), e.ref), z[t] = !0);
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          he || (he = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, i, u, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: E,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function nr(e, r, t, a, i) {
      {
        var u, o = {}, n = null, d = null;
        t !== void 0 && (be(t), n = "" + t), Qe(r) && (be(r.key), n = "" + r.key), Ze(r) && (d = r.ref, er(r, i));
        for (u in r)
          A.call(r, u) && !He.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (n || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && rr(o, l), d && tr(o, l);
        }
        return ar(e, n, d, i, a, F.current, o);
      }
    }
    var X = x.ReactCurrentOwner, Ee = x.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Re() {
      {
        if (X.current) {
          var e = h(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var me = {};
    function ir(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (me[t])
          return;
        me[t] = !0;
        var a = "";
        e && e._owner && e._owner !== X.current && (a = " It was passed a child from " + h(e._owner.type) + "."), w(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), w(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            Z(a) && _e(a, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Ae(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              Z(o.value) && _e(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = h(r);
          Ke(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = h(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            w(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, a, i, u) {
      {
        var o = Me(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = or();
          d ? n += d : n += Re();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === E ? (s = "<" + (h(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, n);
        }
        var l = nr(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var g = r.children;
          if (g !== void 0)
            if (a)
              if (G(g)) {
                for (var j = 0; j < g.length; j++)
                  Ce(g[j], e);
                Object.freeze && Object.freeze(g);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(g, e);
        }
        if (A.call(r, "key")) {
          var S = h(e), v = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), Q = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[S + Q]) {
            var vr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, S, vr, S), Te[S + Q] = !0;
          }
        }
        return e === b ? sr(l) : ur(l), l;
      }
    }
    function lr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function fr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var cr = fr, dr = lr;
    W.Fragment = b, W.jsx = cr, W.jsxs = dr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = _r() : ee.exports = Cr();
var B = ee.exports;
N.register(
  yr,
  hr,
  Er,
  Rr,
  je,
  ke
);
const Tr = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1
    }
  ]
}, Or = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: !0,
      grid: {
        display: !1
        // This removes the grid lines on the x-axis
      }
    },
    y: {
      grid: {
        display: !1
        // This removes the grid lines on the y-axis
      }
    }
  },
  plugins: {
    legend: {
      display: !0,
      position: "top"
      // Use one of the allowed string literals: 'top', 'right', 'bottom', 'left', 'center', 'chartArea'
    },
    title: {
      display: !0,
      text: "Custom Bar Chart"
      // Example title
    }
  }
}, kr = ({ width: m = "600px", height: E = "400px", data: _ = Tr, options: b = Or }) => (we(() => () => {
  var y;
  (y = N.getChart("chartCanvasId")) == null || y.destroy();
}, []), /* @__PURE__ */ B.jsx("div", { style: { width: m, height: E }, children: /* @__PURE__ */ B.jsx(gr, { data: _, options: b }) }));
N.register(
  mr,
  je,
  ke
);
const Sr = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "My First Dataset",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
}, Pr = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    tooltip: {
      enabled: !0
    }
  }
}, Dr = ({ width: m = "400px", height: E = "600px", data: _ = Sr, options: b = Pr }) => (we(() => () => {
  var y;
  (y = N.getChart("chartCanvasId")) == null || y.destroy();
}, []), /* @__PURE__ */ B.jsxs("div", { style: { width: m, height: E }, children: [
  " ",
  /* @__PURE__ */ B.jsx(br, { data: _, options: b })
] }));
export {
  kr as ReactBarChart,
  Dr as ReactPieChart
};
