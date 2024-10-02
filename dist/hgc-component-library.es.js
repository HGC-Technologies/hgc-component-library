import Rr, { useEffect as kr } from "react";
import { Bar as xt, Pie as wt } from "react-chartjs-2";
import { defaults as Et, ArcElement as Sr, PointElement as Rt, BarElement as Or, Chart as we, CategoryScale as kt, LinearScale as St, Title as Ot, Tooltip as Cr, Legend as Pr } from "chart.js";
var Ie = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Ct() {
  if (vr) return Q;
  vr = 1;
  var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, c) {
    var h, b = {}, R = null, W = null;
    c !== void 0 && (R = "" + c), u.key !== void 0 && (R = "" + u.key), u.ref !== void 0 && (W = u.ref);
    for (h in u) n.call(u, h) && !o.hasOwnProperty(h) && (b[h] = u[h]);
    if (l && l.defaultProps) for (h in u = l.defaultProps, u) b[h] === void 0 && (b[h] = u[h]);
    return { $$typeof: r, type: l, key: R, ref: W, props: b, _owner: a.current };
  }
  return Q.Fragment = t, Q.jsx = s, Q.jsxs = s, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var br;
function Pt() {
  return br || (br = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), V = Symbol.iterator, Z = "@@iterator";
    function le(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = V && i[V] || i[Z];
      return typeof f == "function" ? f : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(i) {
      {
        for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          d[v - 1] = arguments[v];
        U("error", i, d);
      }
    }
    function U(i, f, d) {
      {
        var v = C.ReactDebugCurrentFrame, p = v.getStackAddendum();
        p !== "" && (f += "%s", d = d.concat([p]));
        var m = d.map(function(y) {
          return String(y);
        });
        m.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, m);
      }
    }
    var q = !1, Ee = !1, Ur = !1, Xr = !1, Hr = !1, Xe;
    Xe = Symbol.for("react.module.reference");
    function zr(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || Hr || i === a || i === c || i === h || Xr || i === W || q || Ee || Ur || typeof i == "object" && i !== null && (i.$$typeof === R || i.$$typeof === b || i.$$typeof === s || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Xe || i.getModuleId !== void 0));
    }
    function Vr(i, f, d) {
      var v = i.displayName;
      if (v)
        return v;
      var p = f.displayName || f.name || "";
      return p !== "" ? d + "(" + p + ")" : d;
    }
    function He(i) {
      return i.displayName || "Context";
    }
    function M(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case o:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case l:
            var f = i;
            return He(f) + ".Consumer";
          case s:
            var d = i;
            return He(d._context) + ".Provider";
          case u:
            return Vr(i, i.render, "ForwardRef");
          case b:
            var v = i.displayName || null;
            return v !== null ? v : M(i.type) || "Memo";
          case R: {
            var p = i, m = p._payload, y = p._init;
            try {
              return M(y(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, G = 0, ze, Ve, Ze, qe, Ge, Ke, Je;
    function Qe() {
    }
    Qe.__reactDisabledLog = !0;
    function Zr() {
      {
        if (G === 0) {
          ze = console.log, Ve = console.info, Ze = console.warn, qe = console.error, Ge = console.group, Ke = console.groupCollapsed, Je = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: Qe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        G++;
      }
    }
    function qr() {
      {
        if (G--, G === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, i, {
              value: ze
            }),
            info: L({}, i, {
              value: Ve
            }),
            warn: L({}, i, {
              value: Ze
            }),
            error: L({}, i, {
              value: qe
            }),
            group: L({}, i, {
              value: Ge
            }),
            groupCollapsed: L({}, i, {
              value: Ke
            }),
            groupEnd: L({}, i, {
              value: Je
            })
          });
        }
        G < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Re = C.ReactCurrentDispatcher, ke;
    function fe(i, f, d) {
      {
        if (ke === void 0)
          try {
            throw Error();
          } catch (p) {
            var v = p.stack.trim().match(/\n( *(at )?)/);
            ke = v && v[1] || "";
          }
        return `
` + ke + i;
      }
    }
    var Se = !1, ue;
    {
      var Gr = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new Gr();
    }
    function er(i, f) {
      if (!i || Se)
        return "";
      {
        var d = ue.get(i);
        if (d !== void 0)
          return d;
      }
      var v;
      Se = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = Re.current, Re.current = null, Zr();
      try {
        if (f) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (S) {
              v = S;
            }
            Reflect.construct(i, [], y);
          } else {
            try {
              y.call();
            } catch (S) {
              v = S;
            }
            i.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            v = S;
          }
          i();
        }
      } catch (S) {
        if (S && v && typeof S.stack == "string") {
          for (var g = S.stack.split(`
`), k = v.stack.split(`
`), x = g.length - 1, w = k.length - 1; x >= 1 && w >= 0 && g[x] !== k[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (g[x] !== k[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || g[x] !== k[w]) {
                    var P = `
` + g[x].replace(" at new ", " at ");
                    return i.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", i.displayName)), typeof i == "function" && ue.set(i, P), P;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Re.current = m, qr(), Error.prepareStackTrace = p;
      }
      var H = i ? i.displayName || i.name : "", N = H ? fe(H) : "";
      return typeof i == "function" && ue.set(i, N), N;
    }
    function Kr(i, f, d) {
      return er(i, !1);
    }
    function Jr(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function ce(i, f, d) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return er(i, Jr(i));
      if (typeof i == "string")
        return fe(i);
      switch (i) {
        case c:
          return fe("Suspense");
        case h:
          return fe("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return Kr(i.render);
          case b:
            return ce(i.type, f, d);
          case R: {
            var v = i, p = v._payload, m = v._init;
            try {
              return ce(m(p), f, d);
            } catch {
            }
          }
        }
      return "";
    }
    var K = Object.prototype.hasOwnProperty, rr = {}, tr = C.ReactDebugCurrentFrame;
    function de(i) {
      if (i) {
        var f = i._owner, d = ce(i.type, i._source, f ? f.type : null);
        tr.setExtraStackFrame(d);
      } else
        tr.setExtraStackFrame(null);
    }
    function Qr(i, f, d, v, p) {
      {
        var m = Function.call.bind(K);
        for (var y in i)
          if (m(i, y)) {
            var g = void 0;
            try {
              if (typeof i[y] != "function") {
                var k = Error((v || "React class") + ": " + d + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              g = i[y](f, y, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              g = x;
            }
            g && !(g instanceof Error) && (de(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, y, typeof g), de(null)), g instanceof Error && !(g.message in rr) && (rr[g.message] = !0, de(p), _("Failed %s type: %s", d, g.message), de(null));
          }
      }
    }
    var et = Array.isArray;
    function Oe(i) {
      return et(i);
    }
    function rt(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, d = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return d;
      }
    }
    function tt(i) {
      try {
        return nr(i), !1;
      } catch {
        return !0;
      }
    }
    function nr(i) {
      return "" + i;
    }
    function ar(i) {
      if (tt(i))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rt(i)), nr(i);
    }
    var J = C.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ir, or, Ce;
    Ce = {};
    function at(i) {
      if (K.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function it(i) {
      if (K.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ot(i, f) {
      if (typeof i.ref == "string" && J.current && f && J.current.stateNode !== f) {
        var d = M(J.current.type);
        Ce[d] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(J.current.type), i.ref), Ce[d] = !0);
      }
    }
    function st(i, f) {
      {
        var d = function() {
          ir || (ir = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function lt(i, f) {
      {
        var d = function() {
          or || (or = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var ft = function(i, f, d, v, p, m, y) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: f,
        ref: d,
        props: y,
        // Record the component responsible for creating this element.
        _owner: m
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function ut(i, f, d, v, p) {
      {
        var m, y = {}, g = null, k = null;
        d !== void 0 && (ar(d), g = "" + d), it(f) && (ar(f.key), g = "" + f.key), at(f) && (k = f.ref, ot(f, p));
        for (m in f)
          K.call(f, m) && !nt.hasOwnProperty(m) && (y[m] = f[m]);
        if (i && i.defaultProps) {
          var x = i.defaultProps;
          for (m in x)
            y[m] === void 0 && (y[m] = x[m]);
        }
        if (g || k) {
          var w = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          g && st(y, w), k && lt(y, w);
        }
        return ft(i, g, k, p, v, J.current, y);
      }
    }
    var Pe = C.ReactCurrentOwner, sr = C.ReactDebugCurrentFrame;
    function X(i) {
      if (i) {
        var f = i._owner, d = ce(i.type, i._source, f ? f.type : null);
        sr.setExtraStackFrame(d);
      } else
        sr.setExtraStackFrame(null);
    }
    var Te;
    Te = !1;
    function Me(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function lr() {
      {
        if (Pe.current) {
          var i = M(Pe.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function ct(i) {
      return "";
    }
    var fr = {};
    function dt(i) {
      {
        var f = lr();
        if (!f) {
          var d = typeof i == "string" ? i : i.displayName || i.name;
          d && (f = `

Check the top-level render call using <` + d + ">.");
        }
        return f;
      }
    }
    function ur(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var d = dt(f);
        if (fr[d])
          return;
        fr[d] = !0;
        var v = "";
        i && i._owner && i._owner !== Pe.current && (v = " It was passed a child from " + M(i._owner.type) + "."), X(i), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), X(null);
      }
    }
    function cr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Oe(i))
          for (var d = 0; d < i.length; d++) {
            var v = i[d];
            Me(v) && ur(v, f);
          }
        else if (Me(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var p = le(i);
          if (typeof p == "function" && p !== i.entries)
            for (var m = p.call(i), y; !(y = m.next()).done; )
              Me(y.value) && ur(y.value, f);
        }
      }
    }
    function ht(i) {
      {
        var f = i.type;
        if (f == null || typeof f == "string")
          return;
        var d;
        if (typeof f == "function")
          d = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === b))
          d = f.propTypes;
        else
          return;
        if (d) {
          var v = M(f);
          Qr(d, i.props, "prop", v, i);
        } else if (f.PropTypes !== void 0 && !Te) {
          Te = !0;
          var p = M(f);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vt(i) {
      {
        for (var f = Object.keys(i.props), d = 0; d < f.length; d++) {
          var v = f[d];
          if (v !== "children" && v !== "key") {
            X(i), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), X(null);
            break;
          }
        }
        i.ref !== null && (X(i), _("Invalid attribute `ref` supplied to `React.Fragment`."), X(null));
      }
    }
    var dr = {};
    function hr(i, f, d, v, p, m) {
      {
        var y = zr(i);
        if (!y) {
          var g = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = ct();
          k ? g += k : g += lr();
          var x;
          i === null ? x = "null" : Oe(i) ? x = "array" : i !== void 0 && i.$$typeof === r ? (x = "<" + (M(i.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : x = typeof i, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, g);
        }
        var w = ut(i, f, d, p, m);
        if (w == null)
          return w;
        if (y) {
          var P = f.children;
          if (P !== void 0)
            if (v)
              if (Oe(P)) {
                for (var H = 0; H < P.length; H++)
                  cr(P[H], i);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              cr(P, i);
        }
        if (K.call(f, "key")) {
          var N = M(i), S = Object.keys(f).filter(function(_t) {
            return _t !== "key";
          }), je = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!dr[N + je]) {
            var mt = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, N, mt, N), dr[N + je] = !0;
          }
        }
        return i === n ? vt(w) : ht(w), w;
      }
    }
    function bt(i, f, d) {
      return hr(i, f, d, !0);
    }
    function gt(i, f, d) {
      return hr(i, f, d, !1);
    }
    var yt = gt, pt = bt;
    ee.Fragment = n, ee.jsx = yt, ee.jsxs = pt;
  }()), ee;
}
process.env.NODE_ENV === "production" ? Ie.exports = Ct() : Ie.exports = Pt();
var _e = Ie.exports;
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function oe(e) {
  return e + 0.5 | 0;
}
const $ = (e, r, t) => Math.max(Math.min(e, t), r);
function te(e) {
  return $(oe(e * 2.55), 0, 255);
}
function I(e) {
  return $(oe(e * 255), 0, 255);
}
function F(e) {
  return $(oe(e / 2.55) / 100, 0, 1);
}
function gr(e) {
  return $(oe(e * 100), 0, 100);
}
const T = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ye = [..."0123456789ABCDEF"], Tt = (e) => Ye[e & 15], Mt = (e) => Ye[(e & 240) >> 4] + Ye[e & 15], he = (e) => (e & 240) >> 4 === (e & 15), jt = (e) => he(e.r) && he(e.g) && he(e.b) && he(e.a);
function Ft(e) {
  var r = e.length, t;
  return e[0] === "#" && (r === 4 || r === 5 ? t = {
    r: 255 & T[e[1]] * 17,
    g: 255 & T[e[2]] * 17,
    b: 255 & T[e[3]] * 17,
    a: r === 5 ? T[e[4]] * 17 : 255
  } : (r === 7 || r === 9) && (t = {
    r: T[e[1]] << 4 | T[e[2]],
    g: T[e[3]] << 4 | T[e[4]],
    b: T[e[5]] << 4 | T[e[6]],
    a: r === 9 ? T[e[7]] << 4 | T[e[8]] : 255
  })), t;
}
const At = (e, r) => e < 255 ? r(e) : "";
function Dt(e) {
  var r = jt(e) ? Tt : Mt;
  return e ? "#" + r(e.r) + r(e.g) + r(e.b) + At(e.a, r) : void 0;
}
const $t = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Tr(e, r, t) {
  const n = r * Math.min(t, 1 - t), a = (o, s = (o + e / 30) % 12) => t - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [a(0), a(8), a(4)];
}
function It(e, r, t) {
  const n = (a, o = (a + e / 60) % 6) => t - t * r * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Yt(e, r, t) {
  const n = Tr(e, 1, 0.5);
  let a;
  for (r + t > 1 && (a = 1 / (r + t), r *= a, t *= a), a = 0; a < 3; a++)
    n[a] *= 1 - r - t, n[a] += r;
  return n;
}
function Wt(e, r, t, n, a) {
  return e === a ? (r - t) / n + (r < t ? 6 : 0) : r === a ? (t - e) / n + 2 : (e - r) / n + 4;
}
function Ne(e) {
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.max(t, n, a), s = Math.min(t, n, a), l = (o + s) / 2;
  let u, c, h;
  return o !== s && (h = o - s, c = l > 0.5 ? h / (2 - o - s) : h / (o + s), u = Wt(t, n, a, h, o), u = u * 60 + 0.5), [u | 0, c || 0, l];
}
function Be(e, r, t, n) {
  return (Array.isArray(r) ? e(r[0], r[1], r[2]) : e(r, t, n)).map(I);
}
function Ue(e, r, t) {
  return Be(Tr, e, r, t);
}
function Lt(e, r, t) {
  return Be(Yt, e, r, t);
}
function Nt(e, r, t) {
  return Be(It, e, r, t);
}
function Mr(e) {
  return (e % 360 + 360) % 360;
}
function Bt(e) {
  const r = $t.exec(e);
  let t = 255, n;
  if (!r)
    return;
  r[5] !== n && (t = r[6] ? te(+r[5]) : I(+r[5]));
  const a = Mr(+r[2]), o = +r[3] / 100, s = +r[4] / 100;
  return r[1] === "hwb" ? n = Lt(a, o, s) : r[1] === "hsv" ? n = Nt(a, o, s) : n = Ue(a, o, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: t
  };
}
function Ut(e, r) {
  var t = Ne(e);
  t[0] = Mr(t[0] + r), t = Ue(t), e.r = t[0], e.g = t[1], e.b = t[2];
}
function Xt(e) {
  if (!e)
    return;
  const r = Ne(e), t = r[0], n = gr(r[1]), a = gr(r[2]);
  return e.a < 255 ? `hsla(${t}, ${n}%, ${a}%, ${F(e.a)})` : `hsl(${t}, ${n}%, ${a}%)`;
}
const yr = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, pr = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Ht() {
  const e = {}, r = Object.keys(pr), t = Object.keys(yr);
  let n, a, o, s, l;
  for (n = 0; n < r.length; n++) {
    for (s = l = r[n], a = 0; a < t.length; a++)
      o = t[a], l = l.replace(o, yr[o]);
    o = parseInt(pr[s], 16), e[l] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let ve;
function zt(e) {
  ve || (ve = Ht(), ve.transparent = [0, 0, 0, 0]);
  const r = ve[e.toLowerCase()];
  return r && {
    r: r[0],
    g: r[1],
    b: r[2],
    a: r.length === 4 ? r[3] : 255
  };
}
const Vt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Zt(e) {
  const r = Vt.exec(e);
  let t = 255, n, a, o;
  if (r) {
    if (r[7] !== n) {
      const s = +r[7];
      t = r[8] ? te(s) : $(s * 255, 0, 255);
    }
    return n = +r[1], a = +r[3], o = +r[5], n = 255 & (r[2] ? te(n) : $(n, 0, 255)), a = 255 & (r[4] ? te(a) : $(a, 0, 255)), o = 255 & (r[6] ? te(o) : $(o, 0, 255)), {
      r: n,
      g: a,
      b: o,
      a: t
    };
  }
}
function qt(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${F(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Fe = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, z = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Gt(e, r, t) {
  const n = z(F(e.r)), a = z(F(e.g)), o = z(F(e.b));
  return {
    r: I(Fe(n + t * (z(F(r.r)) - n))),
    g: I(Fe(a + t * (z(F(r.g)) - a))),
    b: I(Fe(o + t * (z(F(r.b)) - o))),
    a: e.a + t * (r.a - e.a)
  };
}
function be(e, r, t) {
  if (e) {
    let n = Ne(e);
    n[r] = Math.max(0, Math.min(n[r] + n[r] * t, r === 0 ? 360 : 1)), n = Ue(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function jr(e, r) {
  return e && Object.assign(r || {}, e);
}
function mr(e) {
  var r = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (r = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (r.a = I(e[3]))) : (r = jr(e, { r: 0, g: 0, b: 0, a: 1 }), r.a = I(r.a)), r;
}
function Kt(e) {
  return e.charAt(0) === "r" ? Zt(e) : Bt(e);
}
class xe {
  constructor(r) {
    if (r instanceof xe)
      return r;
    const t = typeof r;
    let n;
    t === "object" ? n = mr(r) : t === "string" && (n = Ft(r) || zt(r) || Kt(r)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var r = jr(this._rgb);
    return r && (r.a = F(r.a)), r;
  }
  set rgb(r) {
    this._rgb = mr(r);
  }
  rgbString() {
    return this._valid ? qt(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Dt(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Xt(this._rgb) : void 0;
  }
  mix(r, t) {
    if (r) {
      const n = this.rgb, a = r.rgb;
      let o;
      const s = t === o ? 0.5 : t, l = 2 * s - 1, u = n.a - a.a, c = ((l * u === -1 ? l : (l + u) / (1 + l * u)) + 1) / 2;
      o = 1 - c, n.r = 255 & c * n.r + o * a.r + 0.5, n.g = 255 & c * n.g + o * a.g + 0.5, n.b = 255 & c * n.b + o * a.b + 0.5, n.a = s * n.a + (1 - s) * a.a, this.rgb = n;
    }
    return this;
  }
  interpolate(r, t) {
    return r && (this._rgb = Gt(this._rgb, r._rgb, t)), this;
  }
  clone() {
    return new xe(this.rgb);
  }
  alpha(r) {
    return this._rgb.a = I(r), this;
  }
  clearer(r) {
    const t = this._rgb;
    return t.a *= 1 - r, this;
  }
  greyscale() {
    const r = this._rgb, t = oe(r.r * 0.3 + r.g * 0.59 + r.b * 0.11);
    return r.r = r.g = r.b = t, this;
  }
  opaquer(r) {
    const t = this._rgb;
    return t.a *= 1 + r, this;
  }
  negate() {
    const r = this._rgb;
    return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, this;
  }
  lighten(r) {
    return be(this._rgb, 2, r), this;
  }
  darken(r) {
    return be(this._rgb, 2, -r), this;
  }
  saturate(r) {
    return be(this._rgb, 1, r), this;
  }
  desaturate(r) {
    return be(this._rgb, 1, -r), this;
  }
  rotate(r) {
    return Ut(this._rgb, r), this;
  }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function B(e) {
  return e === null || typeof e > "u";
}
function se(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const r = Object.prototype.toString.call(e);
  return r.slice(0, 7) === "[object" && r.slice(-6) === "Array]";
}
function j(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function D(e, r) {
  return typeof e > "u" ? r : e;
}
function Fr(e, r, t) {
  if (e && typeof e.call == "function")
    return e.apply(t, r);
}
function Jt(e, r, t, n) {
  let a, o, s;
  if (se(e))
    for (o = e.length, a = 0; a < o; a++)
      r.call(t, e[a], a);
  else if (j(e))
    for (s = Object.keys(e), o = s.length, a = 0; a < o; a++)
      r.call(t, e[s[a]], s[a]);
}
function We(e) {
  if (se(e))
    return e.map(We);
  if (j(e)) {
    const r = /* @__PURE__ */ Object.create(null), t = Object.keys(e), n = t.length;
    let a = 0;
    for (; a < n; ++a)
      r[t[a]] = We(e[t[a]]);
    return r;
  }
  return e;
}
function Qt(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function en(e, r, t, n) {
  if (!Qt(e))
    return;
  const a = r[e], o = t[e];
  j(a) && j(o) ? Y(a, o, n) : r[e] = We(o);
}
function Y(e, r, t) {
  const n = se(r) ? r : [
    r
  ], a = n.length;
  if (!j(e))
    return e;
  t = t || {};
  const o = t.merger || en;
  let s;
  for (let l = 0; l < a; ++l) {
    if (s = n[l], !j(s))
      continue;
    const u = Object.keys(s);
    for (let c = 0, h = u.length; c < h; ++c)
      o(u[c], e, s, t);
  }
  return e;
}
const _r = Math.log10;
function rn(e) {
  if (e && typeof e == "object") {
    const r = e.toString();
    return r === "[object CanvasPattern]" || r === "[object CanvasGradient]";
  }
  return !1;
}
function Ae(e) {
  return rn(e) ? e : new xe(e).saturate(0.5).darken(0.1).hexString();
}
const tn = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], nn = [
  "color",
  "borderColor",
  "backgroundColor"
];
function an(e) {
  e.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), e.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (r) => r !== "onProgress" && r !== "onComplete" && r !== "fn"
  }), e.set("animations", {
    colors: {
      type: "color",
      properties: nn
    },
    numbers: {
      type: "number",
      properties: tn
    }
  }), e.describe("animations", {
    _fallback: "animation"
  }), e.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (r) => r | 0
        }
      }
    }
  });
}
function on(e) {
  e.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const xr = /* @__PURE__ */ new Map();
function sn(e, r) {
  r = r || {};
  const t = e + JSON.stringify(r);
  let n = xr.get(t);
  return n || (n = new Intl.NumberFormat(e, r), xr.set(t, n)), n;
}
function ln(e, r, t) {
  return sn(r, t).format(e);
}
const Ar = {
  values(e) {
    return se(e) ? e : "" + e;
  },
  numeric(e, r, t) {
    if (e === 0)
      return "0";
    const n = this.chart.options.locale;
    let a, o = e;
    if (t.length > 1) {
      const c = Math.max(Math.abs(t[0].value), Math.abs(t[t.length - 1].value));
      (c < 1e-4 || c > 1e15) && (a = "scientific"), o = fn(e, t);
    }
    const s = _r(Math.abs(o)), l = isNaN(s) ? 1 : Math.max(Math.min(-1 * Math.floor(s), 20), 0), u = {
      notation: a,
      minimumFractionDigits: l,
      maximumFractionDigits: l
    };
    return Object.assign(u, this.options.ticks.format), ln(e, n, u);
  },
  logarithmic(e, r, t) {
    if (e === 0)
      return "0";
    const n = t[r].significand || e / Math.pow(10, Math.floor(_r(e)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(n) || r > 0.8 * t.length ? Ar.numeric.call(this, e, r, t) : "";
  }
};
function fn(e, r) {
  let t = r.length > 3 ? r[2].value - r[1].value : r[1].value - r[0].value;
  return Math.abs(t) >= 1 && e !== Math.floor(e) && (t = e - Math.floor(e)), t;
}
var un = {
  formatters: Ar
};
function cn(e) {
  e.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (r, t) => t.lineWidth,
      tickColor: (r, t) => t.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: un.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), e.route("scale.ticks", "color", "", "color"), e.route("scale.grid", "color", "", "borderColor"), e.route("scale.border", "color", "", "borderColor"), e.route("scale.title", "color", "", "color"), e.describe("scale", {
    _fallback: !1,
    _scriptable: (r) => !r.startsWith("before") && !r.startsWith("after") && r !== "callback" && r !== "parser",
    _indexable: (r) => r !== "borderDash" && r !== "tickBorderDash" && r !== "dash"
  }), e.describe("scales", {
    _fallback: "scale"
  }), e.describe("scale.ticks", {
    _scriptable: (r) => r !== "backdropPadding" && r !== "callback",
    _indexable: (r) => r !== "backdropPadding"
  });
}
const dn = /* @__PURE__ */ Object.create(null), hn = /* @__PURE__ */ Object.create(null);
function ne(e, r) {
  if (!r)
    return e;
  const t = r.split(".");
  for (let n = 0, a = t.length; n < a; ++n) {
    const o = t[n];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function De(e, r, t) {
  return typeof r == "string" ? Y(ne(e, r), t) : Y(ne(e, ""), r);
}
class vn {
  constructor(r, t) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (n, a) => Ae(a.backgroundColor), this.hoverBorderColor = (n, a) => Ae(a.borderColor), this.hoverColor = (n, a) => Ae(a.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(r), this.apply(t);
  }
  set(r, t) {
    return De(this, r, t);
  }
  get(r) {
    return ne(this, r);
  }
  describe(r, t) {
    return De(hn, r, t);
  }
  override(r, t) {
    return De(dn, r, t);
  }
  route(r, t, n, a) {
    const o = ne(this, r), s = ne(this, n), l = "_" + t;
    Object.defineProperties(o, {
      [l]: {
        value: o[t],
        writable: !0
      },
      [t]: {
        enumerable: !0,
        get() {
          const u = this[l], c = s[a];
          return j(u) ? Object.assign({}, c, u) : D(u, c);
        },
        set(u) {
          this[l] = u;
        }
      }
    });
  }
  apply(r) {
    r.forEach((t) => t(this));
  }
}
var bn = /* @__PURE__ */ new vn({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  an,
  on,
  cn
]);
function gn(e) {
  return !e || B(e.size) || B(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
const yn = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, pn = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function mn(e, r) {
  const t = ("" + e).match(yn);
  if (!t || t[1] === "normal")
    return r * 1.2;
  switch (e = +t[2], t[3]) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return r * e;
}
const _n = (e) => +e || 0;
function xn(e, r) {
  const t = {}, n = j(r), a = n ? Object.keys(r) : r, o = j(e) ? n ? (s) => D(e[s], e[r[s]]) : (s) => e[s] : () => e;
  for (const s of a)
    t[s] = _n(o(s));
  return t;
}
function wn(e) {
  return xn(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function En(e) {
  const r = wn(e);
  return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
}
function Rn(e, r) {
  e = e || {}, r = r || bn.font;
  let t = D(e.size, r.size);
  typeof t == "string" && (t = parseInt(t, 10));
  let n = D(e.style, r.style);
  n && !("" + n).match(pn) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const a = {
    family: D(e.family, r.family),
    lineHeight: mn(D(e.lineHeight, r.lineHeight), t),
    size: t,
    style: n,
    weight: D(e.weight, r.weight),
    string: ""
  };
  return a.string = gn(a), a;
}
function E(e, r, t, n) {
  let a, o, s;
  for (a = 0, o = e.length; a < o; ++a)
    if (s = e[a], s !== void 0 && (r !== void 0 && typeof s == "function" && (s = s(r)), t !== void 0 && se(s) && (s = s[t % s.length]), s !== void 0))
      return s;
}
function kn() {
  return typeof window < "u" && typeof document < "u";
}
(function() {
  let e = !1;
  try {
    const r = {
      get passive() {
        return e = !0, !1;
      }
    };
    kn() && (window.addEventListener("test", null, r), window.removeEventListener("test", null, r));
  } catch {
  }
  return e;
})();
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */
var wr = function() {
  if (typeof window < "u") {
    if (window.devicePixelRatio)
      return window.devicePixelRatio;
    var e = window.screen;
    if (e)
      return (e.deviceXDPI || 1) / (e.logicalXDPI || 1);
  }
  return 1;
}(), ae = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function(e) {
    var r = [], t;
    for (e = [].concat(e); e.length; )
      t = e.pop(), typeof t == "string" ? r.unshift.apply(r, t.split(`
`)) : Array.isArray(t) ? e.push.apply(e, t) : B(e) || r.unshift("" + t);
    return r;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function(e, r, t) {
    var n = [].concat(r), a = n.length, o = e.font, s = 0, l;
    for (e.font = t.string, l = 0; l < a; ++l)
      s = Math.max(e.measureText(n[l]).width, s);
    return e.font = o, {
      height: a * t.lineHeight,
      width: s
    };
  },
  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function(e, r, t) {
    return Math.max(e, Math.min(r, t));
  },
  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function(e, r) {
    var t = e.slice(), n = [], a, o, s, l;
    for (a = 0, s = r.length; a < s; ++a)
      l = r[a], o = t.indexOf(l), o === -1 ? n.push([l, 1]) : t.splice(o, 1);
    for (a = 0, s = t.length; a < s; ++a)
      n.push([t[a], -1]);
    return n;
  },
  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function(e) {
    return Math.round(e * wr) / wr;
  }
};
function $e(e, r) {
  var t = r.x, n = r.y;
  if (t === null)
    return { x: 0, y: -1 };
  if (n === null)
    return { x: 1, y: 0 };
  var a = e.x - t, o = e.y - n, s = Math.sqrt(a * a + o * o);
  return {
    x: s ? a / s : 0,
    y: s ? o / s : -1
  };
}
function Sn(e, r, t, n, a) {
  switch (a) {
    case "center":
      t = n = 0;
      break;
    case "bottom":
      t = 0, n = 1;
      break;
    case "right":
      t = 1, n = 0;
      break;
    case "left":
      t = -1, n = 0;
      break;
    case "top":
      t = 0, n = -1;
      break;
    case "start":
      t = -t, n = -n;
      break;
    case "end":
      break;
    default:
      a *= Math.PI / 180, t = Math.cos(a), n = Math.sin(a);
      break;
  }
  return {
    x: e,
    y: r,
    vx: t,
    vy: n
  };
}
var On = 0, Dr = 1, $r = 2, Ir = 4, Yr = 8;
function ge(e, r, t) {
  var n = On;
  return e < t.left ? n |= Dr : e > t.right && (n |= $r), r < t.top ? n |= Yr : r > t.bottom && (n |= Ir), n;
}
function Cn(e, r) {
  for (var t = e.x0, n = e.y0, a = e.x1, o = e.y1, s = ge(t, n, r), l = ge(a, o, r), u, c, h; !(!(s | l) || s & l); )
    u = s || l, u & Yr ? (c = t + (a - t) * (r.top - n) / (o - n), h = r.top) : u & Ir ? (c = t + (a - t) * (r.bottom - n) / (o - n), h = r.bottom) : u & $r ? (h = n + (o - n) * (r.right - t) / (a - t), c = r.right) : u & Dr && (h = n + (o - n) * (r.left - t) / (a - t), c = r.left), u === s ? (t = c, n = h, s = ge(t, n, r)) : (a = c, o = h, l = ge(a, o, r));
  return {
    x0: t,
    x1: a,
    y0: n,
    y1: o
  };
}
function ye(e, r) {
  var t = r.anchor, n = e, a, o;
  return r.clamp && (n = Cn(n, r.area)), t === "start" ? (a = n.x0, o = n.y0) : t === "end" ? (a = n.x1, o = n.y1) : (a = (n.x0 + n.x1) / 2, o = (n.y0 + n.y1) / 2), Sn(a, o, e.vx, e.vy, r.align);
}
var pe = {
  arc: function(e, r) {
    var t = (e.startAngle + e.endAngle) / 2, n = Math.cos(t), a = Math.sin(t), o = e.innerRadius, s = e.outerRadius;
    return ye({
      x0: e.x + n * o,
      y0: e.y + a * o,
      x1: e.x + n * s,
      y1: e.y + a * s,
      vx: n,
      vy: a
    }, r);
  },
  point: function(e, r) {
    var t = $e(e, r.origin), n = t.x * e.options.radius, a = t.y * e.options.radius;
    return ye({
      x0: e.x - n,
      y0: e.y - a,
      x1: e.x + n,
      y1: e.y + a,
      vx: t.x,
      vy: t.y
    }, r);
  },
  bar: function(e, r) {
    var t = $e(e, r.origin), n = e.x, a = e.y, o = 0, s = 0;
    return e.horizontal ? (n = Math.min(e.x, e.base), o = Math.abs(e.base - e.x)) : (a = Math.min(e.y, e.base), s = Math.abs(e.base - e.y)), ye({
      x0: n,
      y0: a + s,
      x1: n + o,
      y1: a,
      vx: t.x,
      vy: t.y
    }, r);
  },
  fallback: function(e, r) {
    var t = $e(e, r.origin);
    return ye({
      x0: e.x,
      y0: e.y,
      x1: e.x + (e.width || 0),
      y1: e.y + (e.height || 0),
      vx: t.x,
      vy: t.y
    }, r);
  }
}, A = ae.rasterize;
function Pn(e) {
  var r = e.borderWidth || 0, t = e.padding, n = e.size.height, a = e.size.width, o = -a / 2, s = -n / 2;
  return {
    frame: {
      x: o - t.left - r,
      y: s - t.top - r,
      w: a + t.width + r * 2,
      h: n + t.height + r * 2
    },
    text: {
      x: o,
      y: s,
      w: a,
      h: n
    }
  };
}
function Tn(e, r) {
  var t = r.chart.getDatasetMeta(r.datasetIndex).vScale;
  if (!t)
    return null;
  if (t.xCenter !== void 0 && t.yCenter !== void 0)
    return { x: t.xCenter, y: t.yCenter };
  var n = t.getBasePixel();
  return e.horizontal ? { x: n, y: null } : { x: null, y: n };
}
function Mn(e) {
  return e instanceof Sr ? pe.arc : e instanceof Rt ? pe.point : e instanceof Or ? pe.bar : pe.fallback;
}
function jn(e, r, t, n, a, o) {
  var s = Math.PI / 2;
  if (o) {
    var l = Math.min(o, a / 2, n / 2), u = r + l, c = t + l, h = r + n - l, b = t + a - l;
    e.moveTo(r, c), u < h && c < b ? (e.arc(u, c, l, -Math.PI, -s), e.arc(h, c, l, -s, 0), e.arc(h, b, l, 0, s), e.arc(u, b, l, s, Math.PI)) : u < h ? (e.moveTo(u, t), e.arc(h, c, l, -s, s), e.arc(u, c, l, s, Math.PI + s)) : c < b ? (e.arc(u, c, l, -Math.PI, 0), e.arc(u, b, l, 0, Math.PI)) : e.arc(u, c, l, -Math.PI, Math.PI), e.closePath(), e.moveTo(r, t);
  } else
    e.rect(r, t, n, a);
}
function Fn(e, r, t) {
  var n = t.backgroundColor, a = t.borderColor, o = t.borderWidth;
  !n && (!a || !o) || (e.beginPath(), jn(
    e,
    A(r.x) + o / 2,
    A(r.y) + o / 2,
    A(r.w) - o,
    A(r.h) - o,
    t.borderRadius
  ), e.closePath(), n && (e.fillStyle = n, e.fill()), a && o && (e.strokeStyle = a, e.lineWidth = o, e.lineJoin = "miter", e.stroke()));
}
function An(e, r, t) {
  var n = t.lineHeight, a = e.w, o = e.x, s = e.y + n / 2;
  return r === "center" ? o += a / 2 : (r === "end" || r === "right") && (o += a), {
    h: n,
    w: a,
    x: o,
    y: s
  };
}
function Dn(e, r, t) {
  var n = e.shadowBlur, a = t.stroked, o = A(t.x), s = A(t.y), l = A(t.w);
  a && e.strokeText(r, o, s, l), t.filled && (n && a && (e.shadowBlur = 0), e.fillText(r, o, s, l), n && a && (e.shadowBlur = n));
}
function $n(e, r, t, n) {
  var a = n.textAlign, o = n.color, s = !!o, l = n.font, u = r.length, c = n.textStrokeColor, h = n.textStrokeWidth, b = c && h, R;
  if (!(!u || !s && !b))
    for (t = An(t, a, l), e.font = l.string, e.textAlign = a, e.textBaseline = "middle", e.shadowBlur = n.textShadowBlur, e.shadowColor = n.textShadowColor, s && (e.fillStyle = o), b && (e.lineJoin = "round", e.lineWidth = h, e.strokeStyle = c), R = 0, u = r.length; R < u; ++R)
      Dn(e, r[R], {
        stroked: b,
        filled: s,
        w: t.w,
        x: t.x,
        y: t.y + t.h * R
      });
}
var Wr = function(e, r, t, n) {
  var a = this;
  a._config = e, a._index = n, a._model = null, a._rects = null, a._ctx = r, a._el = t;
};
Y(Wr.prototype, {
  /**
   * @private
   */
  _modelize: function(e, r, t, n) {
    var a = this, o = a._index, s = Rn(E([t.font, {}], n, o)), l = E([t.color, Et.color], n, o);
    return {
      align: E([t.align, "center"], n, o),
      anchor: E([t.anchor, "center"], n, o),
      area: n.chart.chartArea,
      backgroundColor: E([t.backgroundColor, null], n, o),
      borderColor: E([t.borderColor, null], n, o),
      borderRadius: E([t.borderRadius, 0], n, o),
      borderWidth: E([t.borderWidth, 0], n, o),
      clamp: E([t.clamp, !1], n, o),
      clip: E([t.clip, !1], n, o),
      color: l,
      display: e,
      font: s,
      lines: r,
      offset: E([t.offset, 4], n, o),
      opacity: E([t.opacity, 1], n, o),
      origin: Tn(a._el, n),
      padding: En(E([t.padding, 4], n, o)),
      positioner: Mn(a._el),
      rotation: E([t.rotation, 0], n, o) * (Math.PI / 180),
      size: ae.textSize(a._ctx, r, s),
      textAlign: E([t.textAlign, "start"], n, o),
      textShadowBlur: E([t.textShadowBlur, 0], n, o),
      textShadowColor: E([t.textShadowColor, l], n, o),
      textStrokeColor: E([t.textStrokeColor, l], n, o),
      textStrokeWidth: E([t.textStrokeWidth, 0], n, o)
    };
  },
  update: function(e) {
    var r = this, t = null, n = null, a = r._index, o = r._config, s, l, u, c = E([o.display, !0], e, a);
    c && (s = e.dataset.data[a], l = D(Fr(o.formatter, [s, e]), s), u = B(l) ? [] : ae.toTextLines(l), u.length && (t = r._modelize(c, u, o, e), n = Pn(t))), r._model = t, r._rects = n;
  },
  geometry: function() {
    return this._rects ? this._rects.frame : {};
  },
  rotation: function() {
    return this._model ? this._model.rotation : 0;
  },
  visible: function() {
    return this._model && this._model.opacity;
  },
  model: function() {
    return this._model;
  },
  draw: function(e, r) {
    var t = this, n = e.ctx, a = t._model, o = t._rects, s;
    this.visible() && (n.save(), a.clip && (s = a.area, n.beginPath(), n.rect(
      s.left,
      s.top,
      s.right - s.left,
      s.bottom - s.top
    ), n.clip()), n.globalAlpha = ae.bound(0, a.opacity, 1), n.translate(A(r.x), A(r.y)), n.rotate(a.rotation), Fn(n, o.frame, a), $n(n, a.lines, o.text, a), n.restore());
  }
});
var In = Number.MIN_SAFE_INTEGER || -9007199254740991, Yn = Number.MAX_SAFE_INTEGER || 9007199254740991;
function re(e, r, t) {
  var n = Math.cos(t), a = Math.sin(t), o = r.x, s = r.y;
  return {
    x: o + n * (e.x - o) - a * (e.y - s),
    y: s + a * (e.x - o) + n * (e.y - s)
  };
}
function Er(e, r) {
  var t = Yn, n = In, a = r.origin, o, s, l, u, c;
  for (o = 0; o < e.length; ++o)
    s = e[o], l = s.x - a.x, u = s.y - a.y, c = r.vx * l + r.vy * u, t = Math.min(t, c), n = Math.max(n, c);
  return {
    min: t,
    max: n
  };
}
function me(e, r) {
  var t = r.x - e.x, n = r.y - e.y, a = Math.sqrt(t * t + n * n);
  return {
    vx: (r.x - e.x) / a,
    vy: (r.y - e.y) / a,
    origin: e,
    ln: a
  };
}
var Lr = function() {
  this._rotation = 0, this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
Y(Lr.prototype, {
  center: function() {
    var e = this._rect;
    return {
      x: e.x + e.w / 2,
      y: e.y + e.h / 2
    };
  },
  update: function(e, r, t) {
    this._rotation = t, this._rect = {
      x: r.x + e.x,
      y: r.y + e.y,
      w: r.w,
      h: r.h
    };
  },
  contains: function(e) {
    var r = this, t = 1, n = r._rect;
    return e = re(e, r.center(), -r._rotation), !(e.x < n.x - t || e.y < n.y - t || e.x > n.x + n.w + t * 2 || e.y > n.y + n.h + t * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function(e) {
    var r = this._points(), t = e._points(), n = [
      me(r[0], r[1]),
      me(r[0], r[3])
    ], a, o, s;
    for (this._rotation !== e._rotation && n.push(
      me(t[0], t[1]),
      me(t[0], t[3])
    ), a = 0; a < n.length; ++a)
      if (o = Er(r, n[a]), s = Er(t, n[a]), o.max < s.min || s.max < o.min)
        return !1;
    return !0;
  },
  /**
   * @private
   */
  _points: function() {
    var e = this, r = e._rect, t = e._rotation, n = e.center();
    return [
      re({ x: r.x, y: r.y }, n, t),
      re({ x: r.x + r.w, y: r.y }, n, t),
      re({ x: r.x + r.w, y: r.y + r.h }, n, t),
      re({ x: r.x, y: r.y + r.h }, n, t)
    ];
  }
});
function Nr(e, r, t) {
  var n = r.positioner(e, r), a = n.vx, o = n.vy;
  if (!a && !o)
    return { x: n.x, y: n.y };
  var s = t.w, l = t.h, u = r.rotation, c = Math.abs(s / 2 * Math.cos(u)) + Math.abs(l / 2 * Math.sin(u)), h = Math.abs(s / 2 * Math.sin(u)) + Math.abs(l / 2 * Math.cos(u)), b = 1 / Math.max(Math.abs(a), Math.abs(o));
  return c *= a * b, h *= o * b, c += r.offset * a, h += r.offset * o, {
    x: n.x + c,
    y: n.y + h
  };
}
function Wn(e, r) {
  var t, n, a, o;
  for (t = e.length - 1; t >= 0; --t)
    for (a = e[t].$layout, n = t - 1; n >= 0 && a._visible; --n)
      o = e[n].$layout, o._visible && a._box.intersects(o._box) && r(a, o);
  return e;
}
function Ln(e) {
  var r, t, n, a, o, s, l;
  for (r = 0, t = e.length; r < t; ++r)
    n = e[r], a = n.$layout, a._visible && (l = new Proxy(n._el, { get: (u, c) => u.getProps([c], !0)[c] }), o = n.geometry(), s = Nr(l, n.model(), o), a._box.update(s, o, n.rotation()));
  return Wn(e, function(u, c) {
    var h = u._hidable, b = c._hidable;
    h && b || b ? c._visible = !1 : h && (u._visible = !1);
  });
}
var ie = {
  prepare: function(e) {
    var r = [], t, n, a, o, s;
    for (t = 0, a = e.length; t < a; ++t)
      for (n = 0, o = e[t].length; n < o; ++n)
        s = e[t][n], r.push(s), s.$layout = {
          _box: new Lr(),
          _hidable: !1,
          _visible: !0,
          _set: t,
          _idx: s._index
        };
    return r.sort(function(l, u) {
      var c = l.$layout, h = u.$layout;
      return c._idx === h._idx ? h._set - c._set : h._idx - c._idx;
    }), this.update(r), r;
  },
  update: function(e) {
    var r = !1, t, n, a, o, s;
    for (t = 0, n = e.length; t < n; ++t)
      a = e[t], o = a.model(), s = a.$layout, s._hidable = o && o.display === "auto", s._visible = a.visible(), r |= s._hidable;
    r && Ln(e);
  },
  lookup: function(e, r) {
    var t, n;
    for (t = e.length - 1; t >= 0; --t)
      if (n = e[t].$layout, n && n._visible && n._box.contains(r))
        return e[t];
    return null;
  },
  draw: function(e, r) {
    var t, n, a, o, s, l;
    for (t = 0, n = r.length; t < n; ++t)
      a = r[t], o = a.$layout, o._visible && (s = a.geometry(), l = Nr(a._el, a.model(), s), o._box.update(l, s, a.rotation()), a.draw(e, l));
  }
}, Nn = function(e) {
  if (B(e))
    return null;
  var r = e, t, n, a;
  if (j(e))
    if (!B(e.label))
      r = e.label;
    else if (!B(e.r))
      r = e.r;
    else
      for (r = "", t = Object.keys(e), a = 0, n = t.length; a < n; ++a)
        r += (a !== 0 ? ", " : "") + t[a] + ": " + e[t[a]];
  return "" + r;
}, Bn = {
  align: "center",
  anchor: "center",
  backgroundColor: null,
  borderColor: null,
  borderRadius: 0,
  borderWidth: 0,
  clamp: !1,
  clip: !1,
  color: void 0,
  display: !0,
  font: {
    family: void 0,
    lineHeight: 1.2,
    size: void 0,
    style: void 0,
    weight: null
  },
  formatter: Nn,
  labels: void 0,
  listeners: {},
  offset: 4,
  opacity: 1,
  padding: {
    top: 4,
    right: 4,
    bottom: 4,
    left: 4
  },
  rotation: 0,
  textAlign: "start",
  textStrokeColor: void 0,
  textStrokeWidth: 0,
  textShadowBlur: 0,
  textShadowColor: void 0
}, O = "$datalabels", Br = "$default";
function Un(e, r) {
  var t = e.datalabels, n = {}, a = [], o, s;
  return t === !1 ? null : (t === !0 && (t = {}), r = Y({}, [r, t]), o = r.labels || {}, s = Object.keys(o), delete r.labels, s.length ? s.forEach(function(l) {
    o[l] && a.push(Y({}, [
      r,
      o[l],
      { _key: l }
    ]));
  }) : a.push(r), n = a.reduce(function(l, u) {
    return Jt(u.listeners || {}, function(c, h) {
      l[h] = l[h] || {}, l[h][u._key || Br] = c;
    }), delete u.listeners, l;
  }, {}), {
    labels: a,
    listeners: n
  });
}
function Le(e, r, t, n) {
  if (r) {
    var a = t.$context, o = t.$groups, s;
    r[o._set] && (s = r[o._set][o._key], s && Fr(s, [a, n]) === !0 && (e[O]._dirty = !0, t.update(a)));
  }
}
function Xn(e, r, t, n, a) {
  var o, s;
  !t && !n || (t ? n ? t !== n && (s = o = !0) : s = !0 : o = !0, s && Le(e, r.leave, t, a), o && Le(e, r.enter, n, a));
}
function Hn(e, r) {
  var t = e[O], n = t._listeners, a, o;
  if (!(!n.enter && !n.leave)) {
    if (r.type === "mousemove")
      o = ie.lookup(t._labels, r);
    else if (r.type !== "mouseout")
      return;
    a = t._hovered, t._hovered = o, Xn(e, n, a, o, r);
  }
}
function zn(e, r) {
  var t = e[O], n = t._listeners.click, a = n && ie.lookup(t._labels, r);
  a && Le(e, n, a, r);
}
var Vn = {
  id: "datalabels",
  defaults: Bn,
  beforeInit: function(e) {
    e[O] = {
      _actives: []
    };
  },
  beforeUpdate: function(e) {
    var r = e[O];
    r._listened = !1, r._listeners = {}, r._datasets = [], r._labels = [];
  },
  afterDatasetUpdate: function(e, r, t) {
    var n = r.index, a = e[O], o = a._datasets[n] = [], s = e.isDatasetVisible(n), l = e.data.datasets[n], u = Un(l, t), c = r.meta.data || [], h = e.ctx, b, R, W, V, Z, le, C, _;
    for (h.save(), b = 0, W = c.length; b < W; ++b)
      if (C = c[b], C[O] = [], s && C && e.getDataVisibility(b) && !C.skip)
        for (R = 0, V = u.labels.length; R < V; ++R)
          Z = u.labels[R], le = Z._key, _ = new Wr(Z, h, C, b), _.$groups = {
            _set: n,
            _key: le || Br
          }, _.$context = {
            active: !1,
            chart: e,
            dataIndex: b,
            dataset: l,
            datasetIndex: n
          }, _.update(_.$context), C[O].push(_), o.push(_);
    h.restore(), Y(a._listeners, u.listeners, {
      merger: function(U, q, Ee) {
        q[U] = q[U] || {}, q[U][r.index] = Ee[U], a._listened = !0;
      }
    });
  },
  afterUpdate: function(e) {
    e[O]._labels = ie.prepare(e[O]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function(e) {
    ie.draw(e, e[O]._labels);
  },
  beforeEvent: function(e, r) {
    if (e[O]._listened) {
      var t = r.event;
      switch (t.type) {
        case "mousemove":
        case "mouseout":
          Hn(e, t);
          break;
        case "click":
          zn(e, t);
          break;
      }
    }
  },
  afterEvent: function(e) {
    var r = e[O], t = r._actives, n = r._actives = e.getActiveElements(), a = ae.arrayDiff(t, n), o, s, l, u, c, h, b;
    for (o = 0, s = a.length; o < s; ++o)
      if (c = a[o], c[1])
        for (b = c[0].element[O] || [], l = 0, u = b.length; l < u; ++l)
          h = b[l], h.$context.active = c[1] === 1, h.update(h.$context);
    (r._dirty || a.length) && (ie.update(r._labels), e.render()), delete r._dirty;
  }
};
we.register(
  kt,
  St,
  Or,
  Ot,
  Cr,
  Pr,
  Vn
);
const Zn = {
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
}, qn = {
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
    },
    datalabels: {
      // Configuration for data labels
      anchor: "end",
      align: "end",
      color: "#000",
      formatter: (e) => e.toString()
      // This will show the actual value
    }
  }
}, ra = ({ width: e = "600px", height: r = "400px", data: t = Zn, options: n = qn }) => (kr(() => () => {
  var a;
  (a = we.getChart("chartCanvasId")) == null || a.destroy();
}, []), /* @__PURE__ */ _e.jsx("div", { style: { width: e, height: r }, children: /* @__PURE__ */ _e.jsx(xt, { data: t, options: n }) }));
we.register(
  Sr,
  Cr,
  Pr
);
const Gn = {
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
}, Kn = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    tooltip: {
      enabled: !0
    }
  }
}, ta = ({ width: e = "400px", height: r = "600px", data: t = Gn, options: n = Kn }) => (kr(() => () => {
  var a;
  (a = we.getChart("chartCanvasId")) == null || a.destroy();
}, []), /* @__PURE__ */ _e.jsxs("div", { style: { width: e, height: r }, children: [
  " ",
  /* @__PURE__ */ _e.jsx(wt, { data: t, options: n })
] }));
export {
  ra as ReactBarChart,
  ta as ReactPieChart
};
