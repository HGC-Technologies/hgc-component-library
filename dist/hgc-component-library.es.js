import Rr, { useEffect as Sr } from "react";
import { Bar as kt, Pie as Et, Chart as Rt } from "react-chartjs-2";
import { defaults as St, ArcElement as Cr, PointElement as Or, BarElement as We, Chart as oe, CategoryScale as Pr, LinearScale as Tr, Title as jr, Tooltip as Le, Legend as Be, LineElement as Ct, LineController as Ot, BarController as Pt } from "chart.js";
var ve = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function Tt() {
  if (gr) return K;
  gr = 1;
  var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, u, c) {
    var h, b = {}, E = null, W = null;
    c !== void 0 && (E = "" + c), u.key !== void 0 && (E = "" + u.key), u.ref !== void 0 && (W = u.ref);
    for (h in u) n.call(u, h) && !o.hasOwnProperty(h) && (b[h] = u[h]);
    if (l && l.defaultProps) for (h in u = l.defaultProps, u) b[h] === void 0 && (b[h] = u[h]);
    return { $$typeof: r, type: l, key: E, ref: W, props: b, _owner: a.current };
  }
  return K.Fragment = t, K.jsx = s, K.jsxs = s, K;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function jt() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Rr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), z = Symbol.iterator, q = "@@iterator";
    function fe(i) {
      if (i === null || typeof i != "object")
        return null;
      var f = z && i[z] || i[q];
      return typeof f == "function" ? f : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(i) {
      {
        for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
          d[v - 1] = arguments[v];
        U("error", i, d);
      }
    }
    function U(i, f, d) {
      {
        var v = O.ReactDebugCurrentFrame, p = v.getStackAddendum();
        p !== "" && (f += "%s", d = d.concat([p]));
        var m = d.map(function(y) {
          return String(y);
        });
        m.unshift("Warning: " + f), Function.prototype.apply.call(console[i], console, m);
      }
    }
    var Z = !1, ke = !1, Xr = !1, Hr = !1, zr = !1, Xe;
    Xe = Symbol.for("react.module.reference");
    function qr(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === o || zr || i === a || i === c || i === h || Hr || i === W || Z || ke || Xr || typeof i == "object" && i !== null && (i.$$typeof === E || i.$$typeof === b || i.$$typeof === s || i.$$typeof === l || i.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Xe || i.getModuleId !== void 0));
    }
    function Zr(i, f, d) {
      var v = i.displayName;
      if (v)
        return v;
      var p = f.displayName || f.name || "";
      return p !== "" ? d + "(" + p + ")" : d;
    }
    function He(i) {
      return i.displayName || "Context";
    }
    function A(i) {
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
            return Zr(i, i.render, "ForwardRef");
          case b:
            var v = i.displayName || null;
            return v !== null ? v : A(i.type) || "Memo";
          case E: {
            var p = i, m = p._payload, y = p._init;
            try {
              return A(y(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, G = 0, ze, qe, Ze, Ge, Je, Ke, Qe;
    function er() {
    }
    er.__reactDisabledLog = !0;
    function Gr() {
      {
        if (G === 0) {
          ze = console.log, qe = console.info, Ze = console.warn, Ge = console.error, Je = console.group, Ke = console.groupCollapsed, Qe = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: er,
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
    function Jr() {
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
              value: qe
            }),
            warn: L({}, i, {
              value: Ze
            }),
            error: L({}, i, {
              value: Ge
            }),
            group: L({}, i, {
              value: Je
            }),
            groupCollapsed: L({}, i, {
              value: Ke
            }),
            groupEnd: L({}, i, {
              value: Qe
            })
          });
        }
        G < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ee = O.ReactCurrentDispatcher, Re;
    function ue(i, f, d) {
      {
        if (Re === void 0)
          try {
            throw Error();
          } catch (p) {
            var v = p.stack.trim().match(/\n( *(at )?)/);
            Re = v && v[1] || "";
          }
        return `
` + Re + i;
      }
    }
    var Se = !1, ce;
    {
      var Kr = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Kr();
    }
    function rr(i, f) {
      if (!i || Se)
        return "";
      {
        var d = ce.get(i);
        if (d !== void 0)
          return d;
      }
      var v;
      Se = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = Ee.current, Ee.current = null, Gr();
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
`), R = v.stack.split(`
`), x = g.length - 1, w = R.length - 1; x >= 1 && w >= 0 && g[x] !== R[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (g[x] !== R[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || g[x] !== R[w]) {
                    var P = `
` + g[x].replace(" at new ", " at ");
                    return i.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", i.displayName)), typeof i == "function" && ce.set(i, P), P;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Ee.current = m, Jr(), Error.prepareStackTrace = p;
      }
      var X = i ? i.displayName || i.name : "", B = X ? ue(X) : "";
      return typeof i == "function" && ce.set(i, B), B;
    }
    function Qr(i, f, d) {
      return rr(i, !1);
    }
    function et(i) {
      var f = i.prototype;
      return !!(f && f.isReactComponent);
    }
    function de(i, f, d) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return rr(i, et(i));
      if (typeof i == "string")
        return ue(i);
      switch (i) {
        case c:
          return ue("Suspense");
        case h:
          return ue("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case u:
            return Qr(i.render);
          case b:
            return de(i.type, f, d);
          case E: {
            var v = i, p = v._payload, m = v._init;
            try {
              return de(m(p), f, d);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, tr = {}, nr = O.ReactDebugCurrentFrame;
    function he(i) {
      if (i) {
        var f = i._owner, d = de(i.type, i._source, f ? f.type : null);
        nr.setExtraStackFrame(d);
      } else
        nr.setExtraStackFrame(null);
    }
    function rt(i, f, d, v, p) {
      {
        var m = Function.call.bind(J);
        for (var y in i)
          if (m(i, y)) {
            var g = void 0;
            try {
              if (typeof i[y] != "function") {
                var R = Error((v || "React class") + ": " + d + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              g = i[y](f, y, v, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              g = x;
            }
            g && !(g instanceof Error) && (he(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", d, y, typeof g), he(null)), g instanceof Error && !(g.message in tr) && (tr[g.message] = !0, he(p), _("Failed %s type: %s", d, g.message), he(null));
          }
      }
    }
    var tt = Array.isArray;
    function Ce(i) {
      return tt(i);
    }
    function nt(i) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, d = f && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return d;
      }
    }
    function at(i) {
      try {
        return ar(i), !1;
      } catch {
        return !0;
      }
    }
    function ar(i) {
      return "" + i;
    }
    function ir(i) {
      if (at(i))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nt(i)), ar(i);
    }
    var or = O.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, lr;
    function ot(i) {
      if (J.call(i, "ref")) {
        var f = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function st(i) {
      if (J.call(i, "key")) {
        var f = Object.getOwnPropertyDescriptor(i, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function lt(i, f) {
      typeof i.ref == "string" && or.current;
    }
    function ft(i, f) {
      {
        var d = function() {
          sr || (sr = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: d,
          configurable: !0
        });
      }
    }
    function ut(i, f) {
      {
        var d = function() {
          lr || (lr = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        d.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: d,
          configurable: !0
        });
      }
    }
    var ct = function(i, f, d, v, p, m, y) {
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
    function dt(i, f, d, v, p) {
      {
        var m, y = {}, g = null, R = null;
        d !== void 0 && (ir(d), g = "" + d), st(f) && (ir(f.key), g = "" + f.key), ot(f) && (R = f.ref, lt(f, p));
        for (m in f)
          J.call(f, m) && !it.hasOwnProperty(m) && (y[m] = f[m]);
        if (i && i.defaultProps) {
          var x = i.defaultProps;
          for (m in x)
            y[m] === void 0 && (y[m] = x[m]);
        }
        if (g || R) {
          var w = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          g && ft(y, w), R && ut(y, w);
        }
        return ct(i, g, R, p, v, or.current, y);
      }
    }
    var Oe = O.ReactCurrentOwner, fr = O.ReactDebugCurrentFrame;
    function V(i) {
      if (i) {
        var f = i._owner, d = de(i.type, i._source, f ? f.type : null);
        fr.setExtraStackFrame(d);
      } else
        fr.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Te(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function ur() {
      {
        if (Oe.current) {
          var i = A(Oe.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function ht(i) {
      return "";
    }
    var cr = {};
    function vt(i) {
      {
        var f = ur();
        if (!f) {
          var d = typeof i == "string" ? i : i.displayName || i.name;
          d && (f = `

Check the top-level render call using <` + d + ">.");
        }
        return f;
      }
    }
    function dr(i, f) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var d = vt(f);
        if (cr[d])
          return;
        cr[d] = !0;
        var v = "";
        i && i._owner && i._owner !== Oe.current && (v = " It was passed a child from " + A(i._owner.type) + "."), V(i), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, v), V(null);
      }
    }
    function hr(i, f) {
      {
        if (typeof i != "object")
          return;
        if (Ce(i))
          for (var d = 0; d < i.length; d++) {
            var v = i[d];
            Te(v) && dr(v, f);
          }
        else if (Te(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var p = fe(i);
          if (typeof p == "function" && p !== i.entries)
            for (var m = p.call(i), y; !(y = m.next()).done; )
              Te(y.value) && dr(y.value, f);
        }
      }
    }
    function bt(i) {
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
          var v = A(f);
          rt(d, i.props, "prop", v, i);
        } else if (f.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var p = A(f);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function gt(i) {
      {
        for (var f = Object.keys(i.props), d = 0; d < f.length; d++) {
          var v = f[d];
          if (v !== "children" && v !== "key") {
            V(i), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), V(null);
            break;
          }
        }
        i.ref !== null && (V(i), _("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    var vr = {};
    function br(i, f, d, v, p, m) {
      {
        var y = qr(i);
        if (!y) {
          var g = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ht();
          R ? g += R : g += ur();
          var x;
          i === null ? x = "null" : Ce(i) ? x = "array" : i !== void 0 && i.$$typeof === r ? (x = "<" + (A(i.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : x = typeof i, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, g);
        }
        var w = dt(i, f, d, p, m);
        if (w == null)
          return w;
        if (y) {
          var P = f.children;
          if (P !== void 0)
            if (v)
              if (Ce(P)) {
                for (var X = 0; X < P.length; X++)
                  hr(P[X], i);
                Object.freeze && Object.freeze(P);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(P, i);
        }
        if (J.call(f, "key")) {
          var B = A(i), S = Object.keys(f).filter(function(wt) {
            return wt !== "key";
          }), je = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vr[B + je]) {
            var xt = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, B, xt, B), vr[B + je] = !0;
          }
        }
        return i === n ? gt(w) : bt(w), w;
      }
    }
    function yt(i, f, d) {
      return br(i, f, d, !0);
    }
    function pt(i, f, d) {
      return br(i, f, d, !1);
    }
    var mt = pt, _t = yt;
    Q.Fragment = n, Q.jsx = mt, Q.jsxs = _t;
  }()), Q;
}
var pr;
function Mt() {
  return pr || (pr = 1, process.env.NODE_ENV === "production" ? ve.exports = Tt() : ve.exports = jt()), ve.exports;
}
var ie = Mt();
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function se(e) {
  return e + 0.5 | 0;
}
const D = (e, r, t) => Math.max(Math.min(e, t), r);
function re(e) {
  return D(se(e * 2.55), 0, 255);
}
function I(e) {
  return D(se(e * 255), 0, 255);
}
function M(e) {
  return D(se(e / 2.55) / 100, 0, 1);
}
function mr(e) {
  return D(se(e * 100), 0, 100);
}
const T = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, De = [..."0123456789ABCDEF"], Ft = (e) => De[e & 15], At = (e) => De[(e & 240) >> 4] + De[e & 15], be = (e) => (e & 240) >> 4 === (e & 15), $t = (e) => be(e.r) && be(e.g) && be(e.b) && be(e.a);
function Dt(e) {
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
const It = (e, r) => e < 255 ? r(e) : "";
function Yt(e) {
  var r = $t(e) ? Ft : At;
  return e ? "#" + r(e.r) + r(e.g) + r(e.b) + It(e.a, r) : void 0;
}
const Wt = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Mr(e, r, t) {
  const n = r * Math.min(t, 1 - t), a = (o, s = (o + e / 30) % 12) => t - n * Math.max(Math.min(s - 3, 9 - s, 1), -1);
  return [a(0), a(8), a(4)];
}
function Lt(e, r, t) {
  const n = (a, o = (a + e / 60) % 6) => t - t * r * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Bt(e, r, t) {
  const n = Mr(e, 1, 0.5);
  let a;
  for (r + t > 1 && (a = 1 / (r + t), r *= a, t *= a), a = 0; a < 3; a++)
    n[a] *= 1 - r - t, n[a] += r;
  return n;
}
function Nt(e, r, t, n, a) {
  return e === a ? (r - t) / n + (r < t ? 6 : 0) : r === a ? (t - e) / n + 2 : (e - r) / n + 4;
}
function Ne(e) {
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.max(t, n, a), s = Math.min(t, n, a), l = (o + s) / 2;
  let u, c, h;
  return o !== s && (h = o - s, c = l > 0.5 ? h / (2 - o - s) : h / (o + s), u = Nt(t, n, a, h, o), u = u * 60 + 0.5), [u | 0, c || 0, l];
}
function Ue(e, r, t, n) {
  return (Array.isArray(r) ? e(r[0], r[1], r[2]) : e(r, t, n)).map(I);
}
function Ve(e, r, t) {
  return Ue(Mr, e, r, t);
}
function Ut(e, r, t) {
  return Ue(Bt, e, r, t);
}
function Vt(e, r, t) {
  return Ue(Lt, e, r, t);
}
function Fr(e) {
  return (e % 360 + 360) % 360;
}
function Xt(e) {
  const r = Wt.exec(e);
  let t = 255, n;
  if (!r)
    return;
  r[5] !== n && (t = r[6] ? re(+r[5]) : I(+r[5]));
  const a = Fr(+r[2]), o = +r[3] / 100, s = +r[4] / 100;
  return r[1] === "hwb" ? n = Ut(a, o, s) : r[1] === "hsv" ? n = Vt(a, o, s) : n = Ve(a, o, s), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: t
  };
}
function Ht(e, r) {
  var t = Ne(e);
  t[0] = Fr(t[0] + r), t = Ve(t), e.r = t[0], e.g = t[1], e.b = t[2];
}
function zt(e) {
  if (!e)
    return;
  const r = Ne(e), t = r[0], n = mr(r[1]), a = mr(r[2]);
  return e.a < 255 ? `hsla(${t}, ${n}%, ${a}%, ${M(e.a)})` : `hsl(${t}, ${n}%, ${a}%)`;
}
const _r = {
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
}, xr = {
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
function qt() {
  const e = {}, r = Object.keys(xr), t = Object.keys(_r);
  let n, a, o, s, l;
  for (n = 0; n < r.length; n++) {
    for (s = l = r[n], a = 0; a < t.length; a++)
      o = t[a], l = l.replace(o, _r[o]);
    o = parseInt(xr[s], 16), e[l] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return e;
}
let ge;
function Zt(e) {
  ge || (ge = qt(), ge.transparent = [0, 0, 0, 0]);
  const r = ge[e.toLowerCase()];
  return r && {
    r: r[0],
    g: r[1],
    b: r[2],
    a: r.length === 4 ? r[3] : 255
  };
}
const Gt = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Jt(e) {
  const r = Gt.exec(e);
  let t = 255, n, a, o;
  if (r) {
    if (r[7] !== n) {
      const s = +r[7];
      t = r[8] ? re(s) : D(s * 255, 0, 255);
    }
    return n = +r[1], a = +r[3], o = +r[5], n = 255 & (r[2] ? re(n) : D(n, 0, 255)), a = 255 & (r[4] ? re(a) : D(a, 0, 255)), o = 255 & (r[6] ? re(o) : D(o, 0, 255)), {
      r: n,
      g: a,
      b: o,
      a: t
    };
  }
}
function Kt(e) {
  return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${M(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`);
}
const Me = (e) => e <= 31308e-7 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055, H = (e) => e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
function Qt(e, r, t) {
  const n = H(M(e.r)), a = H(M(e.g)), o = H(M(e.b));
  return {
    r: I(Me(n + t * (H(M(r.r)) - n))),
    g: I(Me(a + t * (H(M(r.g)) - a))),
    b: I(Me(o + t * (H(M(r.b)) - o))),
    a: e.a + t * (r.a - e.a)
  };
}
function ye(e, r, t) {
  if (e) {
    let n = Ne(e);
    n[r] = Math.max(0, Math.min(n[r] + n[r] * t, r === 0 ? 360 : 1)), n = Ve(n), e.r = n[0], e.g = n[1], e.b = n[2];
  }
}
function Ar(e, r) {
  return e && Object.assign(r || {}, e);
}
function wr(e) {
  var r = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(e) ? e.length >= 3 && (r = { r: e[0], g: e[1], b: e[2], a: 255 }, e.length > 3 && (r.a = I(e[3]))) : (r = Ar(e, { r: 0, g: 0, b: 0, a: 1 }), r.a = I(r.a)), r;
}
function en(e) {
  return e.charAt(0) === "r" ? Jt(e) : Xt(e);
}
class we {
  constructor(r) {
    if (r instanceof we)
      return r;
    const t = typeof r;
    let n;
    t === "object" ? n = wr(r) : t === "string" && (n = Dt(r) || Zt(r) || en(r)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var r = Ar(this._rgb);
    return r && (r.a = M(r.a)), r;
  }
  set rgb(r) {
    this._rgb = wr(r);
  }
  rgbString() {
    return this._valid ? Kt(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Yt(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? zt(this._rgb) : void 0;
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
    return r && (this._rgb = Qt(this._rgb, r._rgb, t)), this;
  }
  clone() {
    return new we(this.rgb);
  }
  alpha(r) {
    return this._rgb.a = I(r), this;
  }
  clearer(r) {
    const t = this._rgb;
    return t.a *= 1 - r, this;
  }
  greyscale() {
    const r = this._rgb, t = se(r.r * 0.3 + r.g * 0.59 + r.b * 0.11);
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
    return ye(this._rgb, 2, r), this;
  }
  darken(r) {
    return ye(this._rgb, 2, -r), this;
  }
  saturate(r) {
    return ye(this._rgb, 1, r), this;
  }
  desaturate(r) {
    return ye(this._rgb, 1, -r), this;
  }
  rotate(r) {
    return Ht(this._rgb, r), this;
  }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function N(e) {
  return e === null || typeof e > "u";
}
function le(e) {
  if (Array.isArray && Array.isArray(e))
    return !0;
  const r = Object.prototype.toString.call(e);
  return r.slice(0, 7) === "[object" && r.slice(-6) === "Array]";
}
function j(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
function $(e, r) {
  return typeof e > "u" ? r : e;
}
function $r(e, r, t) {
  if (e && typeof e.call == "function")
    return e.apply(t, r);
}
function rn(e, r, t, n) {
  let a, o, s;
  if (le(e))
    for (o = e.length, a = 0; a < o; a++)
      r.call(t, e[a], a);
  else if (j(e))
    for (s = Object.keys(e), o = s.length, a = 0; a < o; a++)
      r.call(t, e[s[a]], s[a]);
}
function Ie(e) {
  if (le(e))
    return e.map(Ie);
  if (j(e)) {
    const r = /* @__PURE__ */ Object.create(null), t = Object.keys(e), n = t.length;
    let a = 0;
    for (; a < n; ++a)
      r[t[a]] = Ie(e[t[a]]);
    return r;
  }
  return e;
}
function tn(e) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(e) === -1;
}
function nn(e, r, t, n) {
  if (!tn(e))
    return;
  const a = r[e], o = t[e];
  j(a) && j(o) ? Y(a, o, n) : r[e] = Ie(o);
}
function Y(e, r, t) {
  const n = le(r) ? r : [
    r
  ], a = n.length;
  if (!j(e))
    return e;
  t = t || {};
  const o = t.merger || nn;
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
function an(e) {
  if (e && typeof e == "object") {
    const r = e.toString();
    return r === "[object CanvasPattern]" || r === "[object CanvasGradient]";
  }
  return !1;
}
function Fe(e) {
  return an(e) ? e : new we(e).saturate(0.5).darken(0.1).hexString();
}
const on = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], sn = [
  "color",
  "borderColor",
  "backgroundColor"
];
function ln(e) {
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
      properties: sn
    },
    numbers: {
      type: "number",
      properties: on
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
function fn(e) {
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
const un = {
  values(e) {
    return le(e) ? e : "" + e;
  }
};
var cn = {
  formatters: un
};
function dn(e) {
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
      callback: cn.formatters.values,
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
const hn = /* @__PURE__ */ Object.create(null), vn = /* @__PURE__ */ Object.create(null);
function te(e, r) {
  if (!r)
    return e;
  const t = r.split(".");
  for (let n = 0, a = t.length; n < a; ++n) {
    const o = t[n];
    e = e[o] || (e[o] = /* @__PURE__ */ Object.create(null));
  }
  return e;
}
function Ae(e, r, t) {
  return typeof r == "string" ? Y(te(e, r), t) : Y(te(e, ""), r);
}
class bn {
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
    }, this.hover = {}, this.hoverBackgroundColor = (n, a) => Fe(a.backgroundColor), this.hoverBorderColor = (n, a) => Fe(a.borderColor), this.hoverColor = (n, a) => Fe(a.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(r), this.apply(t);
  }
  set(r, t) {
    return Ae(this, r, t);
  }
  get(r) {
    return te(this, r);
  }
  describe(r, t) {
    return Ae(vn, r, t);
  }
  override(r, t) {
    return Ae(hn, r, t);
  }
  route(r, t, n, a) {
    const o = te(this, r), s = te(this, n), l = "_" + t;
    Object.defineProperties(o, {
      [l]: {
        value: o[t],
        writable: !0
      },
      [t]: {
        enumerable: !0,
        get() {
          const u = this[l], c = s[a];
          return j(u) ? Object.assign({}, c, u) : $(u, c);
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
var gn = /* @__PURE__ */ new bn({
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
  ln,
  fn,
  dn
]);
function yn(e) {
  return !e || N(e.size) || N(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family;
}
const pn = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, mn = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function _n(e, r) {
  const t = ("" + e).match(pn);
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
const xn = (e) => +e || 0;
function wn(e, r) {
  const t = {}, n = j(r), a = n ? Object.keys(r) : r, o = j(e) ? n ? (s) => $(e[s], e[r[s]]) : (s) => e[s] : () => e;
  for (const s of a)
    t[s] = xn(o(s));
  return t;
}
function kn(e) {
  return wn(e, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function En(e) {
  const r = kn(e);
  return r.width = r.left + r.right, r.height = r.top + r.bottom, r;
}
function Rn(e, r) {
  e = e || {}, r = r || gn.font;
  let t = $(e.size, r.size);
  typeof t == "string" && (t = parseInt(t, 10));
  let n = $(e.style, r.style);
  n && !("" + n).match(mn) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const a = {
    family: $(e.family, r.family),
    lineHeight: _n($(e.lineHeight, r.lineHeight), t),
    size: t,
    style: n,
    weight: $(e.weight, r.weight),
    string: ""
  };
  return a.string = yn(a), a;
}
function k(e, r, t, n) {
  let a, o, s;
  for (a = 0, o = e.length; a < o; ++a)
    if (s = e[a], s !== void 0 && (r !== void 0 && typeof s == "function" && (s = s(r)), t !== void 0 && le(s) && (s = s[t % s.length]), s !== void 0))
      return s;
}
function Sn() {
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
    Sn() && (window.addEventListener("test", null, r), window.removeEventListener("test", null, r));
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
var kr = function() {
  if (typeof window < "u") {
    if (window.devicePixelRatio)
      return window.devicePixelRatio;
    var e = window.screen;
    if (e)
      return (e.deviceXDPI || 1) / (e.logicalXDPI || 1);
  }
  return 1;
}(), ne = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function(e) {
    var r = [], t;
    for (e = [].concat(e); e.length; )
      t = e.pop(), typeof t == "string" ? r.unshift.apply(r, t.split(`
`)) : Array.isArray(t) ? e.push.apply(e, t) : N(e) || r.unshift("" + t);
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
    return Math.round(e * kr) / kr;
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
function Cn(e, r, t, n, a) {
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
var On = 0, Dr = 1, Ir = 2, Yr = 4, Wr = 8;
function pe(e, r, t) {
  var n = On;
  return e < t.left ? n |= Dr : e > t.right && (n |= Ir), r < t.top ? n |= Wr : r > t.bottom && (n |= Yr), n;
}
function Pn(e, r) {
  for (var t = e.x0, n = e.y0, a = e.x1, o = e.y1, s = pe(t, n, r), l = pe(a, o, r), u, c, h; !(!(s | l) || s & l); )
    u = s || l, u & Wr ? (c = t + (a - t) * (r.top - n) / (o - n), h = r.top) : u & Yr ? (c = t + (a - t) * (r.bottom - n) / (o - n), h = r.bottom) : u & Ir ? (h = n + (o - n) * (r.right - t) / (a - t), c = r.right) : u & Dr && (h = n + (o - n) * (r.left - t) / (a - t), c = r.left), u === s ? (t = c, n = h, s = pe(t, n, r)) : (a = c, o = h, l = pe(a, o, r));
  return {
    x0: t,
    x1: a,
    y0: n,
    y1: o
  };
}
function me(e, r) {
  var t = r.anchor, n = e, a, o;
  return r.clamp && (n = Pn(n, r.area)), t === "start" ? (a = n.x0, o = n.y0) : t === "end" ? (a = n.x1, o = n.y1) : (a = (n.x0 + n.x1) / 2, o = (n.y0 + n.y1) / 2), Cn(a, o, e.vx, e.vy, r.align);
}
var _e = {
  arc: function(e, r) {
    var t = (e.startAngle + e.endAngle) / 2, n = Math.cos(t), a = Math.sin(t), o = e.innerRadius, s = e.outerRadius;
    return me({
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
    return me({
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
    return e.horizontal ? (n = Math.min(e.x, e.base), o = Math.abs(e.base - e.x)) : (a = Math.min(e.y, e.base), s = Math.abs(e.base - e.y)), me({
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
    return me({
      x0: e.x,
      y0: e.y,
      x1: e.x + (e.width || 0),
      y1: e.y + (e.height || 0),
      vx: t.x,
      vy: t.y
    }, r);
  }
}, F = ne.rasterize;
function Tn(e) {
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
function jn(e, r) {
  var t = r.chart.getDatasetMeta(r.datasetIndex).vScale;
  if (!t)
    return null;
  if (t.xCenter !== void 0 && t.yCenter !== void 0)
    return { x: t.xCenter, y: t.yCenter };
  var n = t.getBasePixel();
  return e.horizontal ? { x: n, y: null } : { x: null, y: n };
}
function Mn(e) {
  return e instanceof Cr ? _e.arc : e instanceof Or ? _e.point : e instanceof We ? _e.bar : _e.fallback;
}
function Fn(e, r, t, n, a, o) {
  var s = Math.PI / 2;
  if (o) {
    var l = Math.min(o, a / 2, n / 2), u = r + l, c = t + l, h = r + n - l, b = t + a - l;
    e.moveTo(r, c), u < h && c < b ? (e.arc(u, c, l, -Math.PI, -s), e.arc(h, c, l, -s, 0), e.arc(h, b, l, 0, s), e.arc(u, b, l, s, Math.PI)) : u < h ? (e.moveTo(u, t), e.arc(h, c, l, -s, s), e.arc(u, c, l, s, Math.PI + s)) : c < b ? (e.arc(u, c, l, -Math.PI, 0), e.arc(u, b, l, 0, Math.PI)) : e.arc(u, c, l, -Math.PI, Math.PI), e.closePath(), e.moveTo(r, t);
  } else
    e.rect(r, t, n, a);
}
function An(e, r, t) {
  var n = t.backgroundColor, a = t.borderColor, o = t.borderWidth;
  !n && (!a || !o) || (e.beginPath(), Fn(
    e,
    F(r.x) + o / 2,
    F(r.y) + o / 2,
    F(r.w) - o,
    F(r.h) - o,
    t.borderRadius
  ), e.closePath(), n && (e.fillStyle = n, e.fill()), a && o && (e.strokeStyle = a, e.lineWidth = o, e.lineJoin = "miter", e.stroke()));
}
function $n(e, r, t) {
  var n = t.lineHeight, a = e.w, o = e.x, s = e.y + n / 2;
  return r === "center" ? o += a / 2 : (r === "end" || r === "right") && (o += a), {
    h: n,
    w: a,
    x: o,
    y: s
  };
}
function Dn(e, r, t) {
  var n = e.shadowBlur, a = t.stroked, o = F(t.x), s = F(t.y), l = F(t.w);
  a && e.strokeText(r, o, s, l), t.filled && (n && a && (e.shadowBlur = 0), e.fillText(r, o, s, l), n && a && (e.shadowBlur = n));
}
function In(e, r, t, n) {
  var a = n.textAlign, o = n.color, s = !!o, l = n.font, u = r.length, c = n.textStrokeColor, h = n.textStrokeWidth, b = c && h, E;
  if (!(!u || !s && !b))
    for (t = $n(t, a, l), e.font = l.string, e.textAlign = a, e.textBaseline = "middle", e.shadowBlur = n.textShadowBlur, e.shadowColor = n.textShadowColor, s && (e.fillStyle = o), b && (e.lineJoin = "round", e.lineWidth = h, e.strokeStyle = c), E = 0, u = r.length; E < u; ++E)
      Dn(e, r[E], {
        stroked: b,
        filled: s,
        w: t.w,
        x: t.x,
        y: t.y + t.h * E
      });
}
var Lr = function(e, r, t, n) {
  var a = this;
  a._config = e, a._index = n, a._model = null, a._rects = null, a._ctx = r, a._el = t;
};
Y(Lr.prototype, {
  /**
   * @private
   */
  _modelize: function(e, r, t, n) {
    var a = this, o = a._index, s = Rn(k([t.font, {}], n, o)), l = k([t.color, St.color], n, o);
    return {
      align: k([t.align, "center"], n, o),
      anchor: k([t.anchor, "center"], n, o),
      area: n.chart.chartArea,
      backgroundColor: k([t.backgroundColor, null], n, o),
      borderColor: k([t.borderColor, null], n, o),
      borderRadius: k([t.borderRadius, 0], n, o),
      borderWidth: k([t.borderWidth, 0], n, o),
      clamp: k([t.clamp, !1], n, o),
      clip: k([t.clip, !1], n, o),
      color: l,
      display: e,
      font: s,
      lines: r,
      offset: k([t.offset, 4], n, o),
      opacity: k([t.opacity, 1], n, o),
      origin: jn(a._el, n),
      padding: En(k([t.padding, 4], n, o)),
      positioner: Mn(a._el),
      rotation: k([t.rotation, 0], n, o) * (Math.PI / 180),
      size: ne.textSize(a._ctx, r, s),
      textAlign: k([t.textAlign, "start"], n, o),
      textShadowBlur: k([t.textShadowBlur, 0], n, o),
      textShadowColor: k([t.textShadowColor, l], n, o),
      textStrokeColor: k([t.textStrokeColor, l], n, o),
      textStrokeWidth: k([t.textStrokeWidth, 0], n, o)
    };
  },
  update: function(e) {
    var r = this, t = null, n = null, a = r._index, o = r._config, s, l, u, c = k([o.display, !0], e, a);
    c && (s = e.dataset.data[a], l = $($r(o.formatter, [s, e]), s), u = N(l) ? [] : ne.toTextLines(l), u.length && (t = r._modelize(c, u, o, e), n = Tn(t))), r._model = t, r._rects = n;
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
    ), n.clip()), n.globalAlpha = ne.bound(0, a.opacity, 1), n.translate(F(r.x), F(r.y)), n.rotate(a.rotation), An(n, o.frame, a), In(n, a.lines, o.text, a), n.restore());
  }
});
var Yn = Number.MIN_SAFE_INTEGER || -9007199254740991, Wn = Number.MAX_SAFE_INTEGER || 9007199254740991;
function ee(e, r, t) {
  var n = Math.cos(t), a = Math.sin(t), o = r.x, s = r.y;
  return {
    x: o + n * (e.x - o) - a * (e.y - s),
    y: s + a * (e.x - o) + n * (e.y - s)
  };
}
function Er(e, r) {
  var t = Wn, n = Yn, a = r.origin, o, s, l, u, c;
  for (o = 0; o < e.length; ++o)
    s = e[o], l = s.x - a.x, u = s.y - a.y, c = r.vx * l + r.vy * u, t = Math.min(t, c), n = Math.max(n, c);
  return {
    min: t,
    max: n
  };
}
function xe(e, r) {
  var t = r.x - e.x, n = r.y - e.y, a = Math.sqrt(t * t + n * n);
  return {
    vx: (r.x - e.x) / a,
    vy: (r.y - e.y) / a,
    origin: e,
    ln: a
  };
}
var Br = function() {
  this._rotation = 0, this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
Y(Br.prototype, {
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
    return e = ee(e, r.center(), -r._rotation), !(e.x < n.x - t || e.y < n.y - t || e.x > n.x + n.w + t * 2 || e.y > n.y + n.h + t * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function(e) {
    var r = this._points(), t = e._points(), n = [
      xe(r[0], r[1]),
      xe(r[0], r[3])
    ], a, o, s;
    for (this._rotation !== e._rotation && n.push(
      xe(t[0], t[1]),
      xe(t[0], t[3])
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
      ee({ x: r.x, y: r.y }, n, t),
      ee({ x: r.x + r.w, y: r.y }, n, t),
      ee({ x: r.x + r.w, y: r.y + r.h }, n, t),
      ee({ x: r.x, y: r.y + r.h }, n, t)
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
function Ln(e, r) {
  var t, n, a, o;
  for (t = e.length - 1; t >= 0; --t)
    for (a = e[t].$layout, n = t - 1; n >= 0 && a._visible; --n)
      o = e[n].$layout, o._visible && a._box.intersects(o._box) && r(a, o);
  return e;
}
function Bn(e) {
  var r, t, n, a, o, s, l;
  for (r = 0, t = e.length; r < t; ++r)
    n = e[r], a = n.$layout, a._visible && (l = new Proxy(n._el, { get: (u, c) => u.getProps([c], !0)[c] }), o = n.geometry(), s = Nr(l, n.model(), o), a._box.update(s, o, n.rotation()));
  return Ln(e, function(u, c) {
    var h = u._hidable, b = c._hidable;
    h && b || b ? c._visible = !1 : h && (u._visible = !1);
  });
}
var ae = {
  prepare: function(e) {
    var r = [], t, n, a, o, s;
    for (t = 0, a = e.length; t < a; ++t)
      for (n = 0, o = e[t].length; n < o; ++n)
        s = e[t][n], r.push(s), s.$layout = {
          _box: new Br(),
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
    r && Bn(e);
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
  if (N(e))
    return null;
  var r = e, t, n, a;
  if (j(e))
    if (!N(e.label))
      r = e.label;
    else if (!N(e.r))
      r = e.r;
    else
      for (r = "", t = Object.keys(e), a = 0, n = t.length; a < n; ++a)
        r += (a !== 0 ? ", " : "") + t[a] + ": " + e[t[a]];
  return "" + r;
}, Un = {
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
}, C = "$datalabels", Ur = "$default";
function Vn(e, r) {
  var t = e.datalabels, n = {}, a = [], o, s;
  return t === !1 ? null : (t === !0 && (t = {}), r = Y({}, [r, t]), o = r.labels || {}, s = Object.keys(o), delete r.labels, s.length ? s.forEach(function(l) {
    o[l] && a.push(Y({}, [
      r,
      o[l],
      { _key: l }
    ]));
  }) : a.push(r), n = a.reduce(function(l, u) {
    return rn(u.listeners || {}, function(c, h) {
      l[h] = l[h] || {}, l[h][u._key || Ur] = c;
    }), delete u.listeners, l;
  }, {}), {
    labels: a,
    listeners: n
  });
}
function Ye(e, r, t, n) {
  if (r) {
    var a = t.$context, o = t.$groups, s;
    r[o._set] && (s = r[o._set][o._key], s && $r(s, [a, n]) === !0 && (e[C]._dirty = !0, t.update(a)));
  }
}
function Xn(e, r, t, n, a) {
  var o, s;
  !t && !n || (t ? n ? t !== n && (s = o = !0) : s = !0 : o = !0, s && Ye(e, r.leave, t, a), o && Ye(e, r.enter, n, a));
}
function Hn(e, r) {
  var t = e[C], n = t._listeners, a, o;
  if (!(!n.enter && !n.leave)) {
    if (r.type === "mousemove")
      o = ae.lookup(t._labels, r);
    else if (r.type !== "mouseout")
      return;
    a = t._hovered, t._hovered = o, Xn(e, n, a, o, r);
  }
}
function zn(e, r) {
  var t = e[C], n = t._listeners.click, a = n && ae.lookup(t._labels, r);
  a && Ye(e, n, a, r);
}
var Vr = {
  id: "datalabels",
  defaults: Un,
  beforeInit: function(e) {
    e[C] = {
      _actives: []
    };
  },
  beforeUpdate: function(e) {
    var r = e[C];
    r._listened = !1, r._listeners = {}, r._datasets = [], r._labels = [];
  },
  afterDatasetUpdate: function(e, r, t) {
    var n = r.index, a = e[C], o = a._datasets[n] = [], s = e.isDatasetVisible(n), l = e.data.datasets[n], u = Vn(l, t), c = r.meta.data || [], h = e.ctx, b, E, W, z, q, fe, O, _;
    for (h.save(), b = 0, W = c.length; b < W; ++b)
      if (O = c[b], O[C] = [], s && O && e.getDataVisibility(b) && !O.skip)
        for (E = 0, z = u.labels.length; E < z; ++E)
          q = u.labels[E], fe = q._key, _ = new Lr(q, h, O, b), _.$groups = {
            _set: n,
            _key: fe || Ur
          }, _.$context = {
            active: !1,
            chart: e,
            dataIndex: b,
            dataset: l,
            datasetIndex: n
          }, _.update(_.$context), O[C].push(_), o.push(_);
    h.restore(), Y(a._listeners, u.listeners, {
      merger: function(U, Z, ke) {
        Z[U] = Z[U] || {}, Z[U][r.index] = ke[U], a._listened = !0;
      }
    });
  },
  afterUpdate: function(e) {
    e[C]._labels = ae.prepare(e[C]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function(e) {
    ae.draw(e, e[C]._labels);
  },
  beforeEvent: function(e, r) {
    if (e[C]._listened) {
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
    var r = e[C], t = r._actives, n = r._actives = e.getActiveElements(), a = ne.arrayDiff(t, n), o, s, l, u, c, h, b;
    for (o = 0, s = a.length; o < s; ++o)
      if (c = a[o], c[1])
        for (b = c[0].element[C] || [], l = 0, u = b.length; l < u; ++l)
          h = b[l], h.$context.active = c[1] === 1, h.update(h.$context);
    (r._dirty || a.length) && (ae.update(r._labels), e.render()), delete r._dirty;
  }
};
oe.register(
  Pr,
  Tr,
  We,
  jr,
  Le,
  Be,
  Vr
);
const qn = {
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
}, Zn = {
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
}, ra = ({ width: e = "600px", height: r = "400px", data: t = qn, options: n = Zn }) => (Sr(() => () => {
  var a;
  (a = oe.getChart("chartCanvasId")) == null || a.destroy();
}, []), /* @__PURE__ */ ie.jsx("div", { style: { width: e, height: r }, children: /* @__PURE__ */ ie.jsx(kt, { data: t, options: n }) }));
oe.register(
  Cr,
  Le,
  Be
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
}, Jn = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    tooltip: {
      enabled: !0
    }
  }
}, ta = ({ width: e = "400px", height: r = "600px", data: t = Gn, options: n = Jn }) => (Sr(() => () => {
  var a;
  (a = oe.getChart("chartCanvasId")) == null || a.destroy();
}, []), /* @__PURE__ */ ie.jsxs("div", { style: { width: e, height: r }, children: [
  " ",
  /* @__PURE__ */ ie.jsx(Et, { data: t, options: n })
] }));
oe.register(
  Pr,
  Tr,
  We,
  Ct,
  Or,
  Ot,
  Pt,
  Vr,
  jr,
  Le,
  Be
);
function na({ data: e, options: r }) {
  return /* @__PURE__ */ ie.jsx(Rt, { type: "bar", data: e, options: r });
}
export {
  na as ComboBarLineChart,
  ra as ReactBarChart,
  ta as ReactPieChart
};
