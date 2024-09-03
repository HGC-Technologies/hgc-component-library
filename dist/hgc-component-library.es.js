var lr = Object.defineProperty;
var cr = (i, t, e) => t in i ? lr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var S = (i, t, e) => cr(i, typeof t != "symbol" ? t + "" : t, e);
import pi, { forwardRef as Yn, useRef as Ps, useEffect as Tt } from "react";
var Wi = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cs;
function hr() {
  if (Cs) return de;
  Cs = 1;
  var i = pi, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, n = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function r(a, l, c) {
    var h, d = {}, f = null, u = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (u = l.ref);
    for (h in l) s.call(l, h) && !o.hasOwnProperty(h) && (d[h] = l[h]);
    if (a && a.defaultProps) for (h in l = a.defaultProps, l) d[h] === void 0 && (d[h] = l[h]);
    return { $$typeof: t, type: a, key: f, ref: u, props: d, _owner: n.current };
  }
  return de.Fragment = e, de.jsx = r, de.jsxs = r, de;
}
var fe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function dr() {
  return Os || (Os = 1, process.env.NODE_ENV !== "production" && function() {
    var i = pi, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), r = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), u = Symbol.for("react.offscreen"), p = Symbol.iterator, m = "@@iterator";
    function b(g) {
      if (g === null || typeof g != "object")
        return null;
      var y = p && g[p] || g[m];
      return typeof y == "function" ? y : null;
    }
    var _ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(g) {
      {
        for (var y = arguments.length, w = new Array(y > 1 ? y - 1 : 0), R = 1; R < y; R++)
          w[R - 1] = arguments[R];
        k("error", g, w);
      }
    }
    function k(g, y, w) {
      {
        var R = _.ReactDebugCurrentFrame, W = R.getStackAddendum();
        W !== "" && (y += "%s", w = w.concat([W]));
        var $ = w.map(function(I) {
          return String(I);
        });
        $.unshift("Warning: " + y), Function.prototype.apply.call(console[g], console, $);
      }
    }
    var M = !1, v = !1, P = !1, C = !1, O = !1, A;
    A = Symbol.for("react.module.reference");
    function D(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === s || g === o || O || g === n || g === c || g === h || C || g === u || M || v || P || typeof g == "object" && g !== null && (g.$$typeof === f || g.$$typeof === d || g.$$typeof === r || g.$$typeof === a || g.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === A || g.getModuleId !== void 0));
    }
    function T(g, y, w) {
      var R = g.displayName;
      if (R)
        return R;
      var W = y.displayName || y.name || "";
      return W !== "" ? w + "(" + W + ")" : w;
    }
    function E(g) {
      return g.displayName || "Context";
    }
    function H(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case s:
          return "Fragment";
        case e:
          return "Portal";
        case o:
          return "Profiler";
        case n:
          return "StrictMode";
        case c:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case a:
            var y = g;
            return E(y) + ".Consumer";
          case r:
            var w = g;
            return E(w._context) + ".Provider";
          case l:
            return T(g, g.render, "ForwardRef");
          case d:
            var R = g.displayName || null;
            return R !== null ? R : H(g.type) || "Memo";
          case f: {
            var W = g, $ = W._payload, I = W._init;
            try {
              return H(I($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, F = 0, N, U, at, et, vt, Bt, kt;
    function Rt() {
    }
    Rt.__reactDisabledLog = !0;
    function wt() {
      {
        if (F === 0) {
          N = console.log, U = console.info, at = console.warn, et = console.error, vt = console.group, Bt = console.groupCollapsed, kt = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Rt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        F++;
      }
    }
    function Wt() {
      {
        if (F--, F === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, g, {
              value: N
            }),
            info: Z({}, g, {
              value: U
            }),
            warn: Z({}, g, {
              value: at
            }),
            error: Z({}, g, {
              value: et
            }),
            group: Z({}, g, {
              value: vt
            }),
            groupCollapsed: Z({}, g, {
              value: Bt
            }),
            groupEnd: Z({}, g, {
              value: kt
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var mt = _.ReactCurrentDispatcher, yi;
    function Le(g, y, w) {
      {
        if (yi === void 0)
          try {
            throw Error();
          } catch (W) {
            var R = W.stack.trim().match(/\n( *(at )?)/);
            yi = R && R[1] || "";
          }
        return `
` + yi + g;
      }
    }
    var vi = !1, Fe;
    {
      var zo = typeof WeakMap == "function" ? WeakMap : Map;
      Fe = new zo();
    }
    function fs(g, y) {
      if (!g || vi)
        return "";
      {
        var w = Fe.get(g);
        if (w !== void 0)
          return w;
      }
      var R;
      vi = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = mt.current, mt.current = null, wt();
      try {
        if (y) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (lt) {
              R = lt;
            }
            Reflect.construct(g, [], I);
          } else {
            try {
              I.call();
            } catch (lt) {
              R = lt;
            }
            g.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (lt) {
            R = lt;
          }
          g();
        }
      } catch (lt) {
        if (lt && R && typeof lt.stack == "string") {
          for (var L = lt.stack.split(`
`), rt = R.stack.split(`
`), J = L.length - 1, tt = rt.length - 1; J >= 1 && tt >= 0 && L[J] !== rt[tt]; )
            tt--;
          for (; J >= 1 && tt >= 0; J--, tt--)
            if (L[J] !== rt[tt]) {
              if (J !== 1 || tt !== 1)
                do
                  if (J--, tt--, tt < 0 || L[J] !== rt[tt]) {
                    var ut = `
` + L[J].replace(" at new ", " at ");
                    return g.displayName && ut.includes("<anonymous>") && (ut = ut.replace("<anonymous>", g.displayName)), typeof g == "function" && Fe.set(g, ut), ut;
                  }
                while (J >= 1 && tt >= 0);
              break;
            }
        }
      } finally {
        vi = !1, mt.current = $, Wt(), Error.prepareStackTrace = W;
      }
      var ie = g ? g.displayName || g.name : "", jt = ie ? Le(ie) : "";
      return typeof g == "function" && Fe.set(g, jt), jt;
    }
    function Bo(g, y, w) {
      return fs(g, !1);
    }
    function Wo(g) {
      var y = g.prototype;
      return !!(y && y.isReactComponent);
    }
    function Ie(g, y, w) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return fs(g, Wo(g));
      if (typeof g == "string")
        return Le(g);
      switch (g) {
        case c:
          return Le("Suspense");
        case h:
          return Le("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            return Bo(g.render);
          case d:
            return Ie(g.type, y, w);
          case f: {
            var R = g, W = R._payload, $ = R._init;
            try {
              return Ie($(W), y, w);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, us = {}, gs = _.ReactDebugCurrentFrame;
    function ze(g) {
      if (g) {
        var y = g._owner, w = Ie(g.type, g._source, y ? y.type : null);
        gs.setExtraStackFrame(w);
      } else
        gs.setExtraStackFrame(null);
    }
    function jo(g, y, w, R, W) {
      {
        var $ = Function.call.bind(ce);
        for (var I in g)
          if ($(g, I)) {
            var L = void 0;
            try {
              if (typeof g[I] != "function") {
                var rt = Error((R || "React class") + ": " + w + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw rt.name = "Invariant Violation", rt;
              }
              L = g[I](y, I, R, w, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              L = J;
            }
            L && !(L instanceof Error) && (ze(W), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", w, I, typeof L), ze(null)), L instanceof Error && !(L.message in us) && (us[L.message] = !0, ze(W), x("Failed %s type: %s", w, L.message), ze(null));
          }
      }
    }
    var Ho = Array.isArray;
    function ki(g) {
      return Ho(g);
    }
    function Vo(g) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, w = y && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return w;
      }
    }
    function No(g) {
      try {
        return ps(g), !1;
      } catch {
        return !0;
      }
    }
    function ps(g) {
      return "" + g;
    }
    function ms(g) {
      if (No(g))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vo(g)), ps(g);
    }
    var he = _.ReactCurrentOwner, $o = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, bs, _s, wi;
    wi = {};
    function Yo(g) {
      if (ce.call(g, "ref")) {
        var y = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Uo(g) {
      if (ce.call(g, "key")) {
        var y = Object.getOwnPropertyDescriptor(g, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Xo(g, y) {
      if (typeof g.ref == "string" && he.current && y && he.current.stateNode !== y) {
        var w = H(he.current.type);
        wi[w] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(he.current.type), g.ref), wi[w] = !0);
      }
    }
    function Ko(g, y) {
      {
        var w = function() {
          bs || (bs = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        w.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: w,
          configurable: !0
        });
      }
    }
    function qo(g, y) {
      {
        var w = function() {
          _s || (_s = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        w.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: w,
          configurable: !0
        });
      }
    }
    var Go = function(g, y, w, R, W, $, I) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: y,
        ref: w,
        props: I,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function Zo(g, y, w, R, W) {
      {
        var $, I = {}, L = null, rt = null;
        w !== void 0 && (ms(w), L = "" + w), Uo(y) && (ms(y.key), L = "" + y.key), Yo(y) && (rt = y.ref, Xo(y, W));
        for ($ in y)
          ce.call(y, $) && !$o.hasOwnProperty($) && (I[$] = y[$]);
        if (g && g.defaultProps) {
          var J = g.defaultProps;
          for ($ in J)
            I[$] === void 0 && (I[$] = J[$]);
        }
        if (L || rt) {
          var tt = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          L && Ko(I, tt), rt && qo(I, tt);
        }
        return Go(g, L, rt, W, R, he.current, I);
      }
    }
    var Mi = _.ReactCurrentOwner, xs = _.ReactDebugCurrentFrame;
    function ee(g) {
      if (g) {
        var y = g._owner, w = Ie(g.type, g._source, y ? y.type : null);
        xs.setExtraStackFrame(w);
      } else
        xs.setExtraStackFrame(null);
    }
    var Si;
    Si = !1;
    function Pi(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function ys() {
      {
        if (Mi.current) {
          var g = H(Mi.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Jo(g) {
      return "";
    }
    var vs = {};
    function Qo(g) {
      {
        var y = ys();
        if (!y) {
          var w = typeof g == "string" ? g : g.displayName || g.name;
          w && (y = `

Check the top-level render call using <` + w + ">.");
        }
        return y;
      }
    }
    function ks(g, y) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var w = Qo(y);
        if (vs[w])
          return;
        vs[w] = !0;
        var R = "";
        g && g._owner && g._owner !== Mi.current && (R = " It was passed a child from " + H(g._owner.type) + "."), ee(g), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', w, R), ee(null);
      }
    }
    function ws(g, y) {
      {
        if (typeof g != "object")
          return;
        if (ki(g))
          for (var w = 0; w < g.length; w++) {
            var R = g[w];
            Pi(R) && ks(R, y);
          }
        else if (Pi(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var W = b(g);
          if (typeof W == "function" && W !== g.entries)
            for (var $ = W.call(g), I; !(I = $.next()).done; )
              Pi(I.value) && ks(I.value, y);
        }
      }
    }
    function tr(g) {
      {
        var y = g.type;
        if (y == null || typeof y == "string")
          return;
        var w;
        if (typeof y == "function")
          w = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        y.$$typeof === d))
          w = y.propTypes;
        else
          return;
        if (w) {
          var R = H(y);
          jo(w, g.props, "prop", R, g);
        } else if (y.PropTypes !== void 0 && !Si) {
          Si = !0;
          var W = H(y);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function er(g) {
      {
        for (var y = Object.keys(g.props), w = 0; w < y.length; w++) {
          var R = y[w];
          if (R !== "children" && R !== "key") {
            ee(g), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), ee(null);
            break;
          }
        }
        g.ref !== null && (ee(g), x("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Ms = {};
    function Ss(g, y, w, R, W, $) {
      {
        var I = D(g);
        if (!I) {
          var L = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = Jo();
          rt ? L += rt : L += ys();
          var J;
          g === null ? J = "null" : ki(g) ? J = "array" : g !== void 0 && g.$$typeof === t ? (J = "<" + (H(g.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : J = typeof g, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, L);
        }
        var tt = Zo(g, y, w, W, $);
        if (tt == null)
          return tt;
        if (I) {
          var ut = y.children;
          if (ut !== void 0)
            if (R)
              if (ki(ut)) {
                for (var ie = 0; ie < ut.length; ie++)
                  ws(ut[ie], g);
                Object.freeze && Object.freeze(ut);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ws(ut, g);
        }
        if (ce.call(y, "key")) {
          var jt = H(g), lt = Object.keys(y).filter(function(ar) {
            return ar !== "key";
          }), Ci = lt.length > 0 ? "{key: someKey, " + lt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ms[jt + Ci]) {
            var rr = lt.length > 0 ? "{" + lt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ci, jt, rr, jt), Ms[jt + Ci] = !0;
          }
        }
        return g === s ? er(tt) : tr(tt), tt;
      }
    }
    function ir(g, y, w) {
      return Ss(g, y, w, !0);
    }
    function sr(g, y, w) {
      return Ss(g, y, w, !1);
    }
    var nr = sr, or = ir;
    fe.Fragment = s, fe.jsx = nr, fe.jsxs = or;
  }()), fe;
}
process.env.NODE_ENV === "production" ? Wi.exports = hr() : Wi.exports = dr();
var si = Wi.exports;
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function De(i) {
  return i + 0.5 | 0;
}
const Dt = (i, t, e) => Math.max(Math.min(i, e), t);
function _e(i) {
  return Dt(De(i * 2.55), 0, 255);
}
function Ft(i) {
  return Dt(De(i * 255), 0, 255);
}
function Ct(i) {
  return Dt(De(i / 2.55) / 100, 0, 1);
}
function Rs(i) {
  return Dt(De(i * 100), 0, 100);
}
const gt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, ji = [..."0123456789ABCDEF"], fr = (i) => ji[i & 15], ur = (i) => ji[(i & 240) >> 4] + ji[i & 15], Be = (i) => (i & 240) >> 4 === (i & 15), gr = (i) => Be(i.r) && Be(i.g) && Be(i.b) && Be(i.a);
function pr(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & gt[i[1]] * 17,
    g: 255 & gt[i[2]] * 17,
    b: 255 & gt[i[3]] * 17,
    a: t === 5 ? gt[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: gt[i[1]] << 4 | gt[i[2]],
    g: gt[i[3]] << 4 | gt[i[4]],
    b: gt[i[5]] << 4 | gt[i[6]],
    a: t === 9 ? gt[i[7]] << 4 | gt[i[8]] : 255
  })), e;
}
const mr = (i, t) => i < 255 ? t(i) : "";
function br(i) {
  var t = gr(i) ? fr : ur;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + mr(i.a, t) : void 0;
}
const _r = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Un(i, t, e) {
  const s = t * Math.min(e, 1 - e), n = (o, r = (o + i / 30) % 12) => e - s * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [n(0), n(8), n(4)];
}
function xr(i, t, e) {
  const s = (n, o = (n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [s(5), s(3), s(1)];
}
function yr(i, t, e) {
  const s = Un(i, 1, 0.5);
  let n;
  for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
    s[n] *= 1 - t - e, s[n] += t;
  return s;
}
function vr(i, t, e, s, n) {
  return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4;
}
function Gi(i) {
  const e = i.r / 255, s = i.g / 255, n = i.b / 255, o = Math.max(e, s, n), r = Math.min(e, s, n), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = vr(e, s, n, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function Zi(i, t, e, s) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(Ft);
}
function Ji(i, t, e) {
  return Zi(Un, i, t, e);
}
function kr(i, t, e) {
  return Zi(yr, i, t, e);
}
function wr(i, t, e) {
  return Zi(xr, i, t, e);
}
function Xn(i) {
  return (i % 360 + 360) % 360;
}
function Mr(i) {
  const t = _r.exec(i);
  let e = 255, s;
  if (!t)
    return;
  t[5] !== s && (e = t[6] ? _e(+t[5]) : Ft(+t[5]));
  const n = Xn(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? s = kr(n, o, r) : t[1] === "hsv" ? s = wr(n, o, r) : s = Ji(n, o, r), {
    r: s[0],
    g: s[1],
    b: s[2],
    a: e
  };
}
function Sr(i, t) {
  var e = Gi(i);
  e[0] = Xn(e[0] + t), e = Ji(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Pr(i) {
  if (!i)
    return;
  const t = Gi(i), e = t[0], s = Rs(t[1]), n = Rs(t[2]);
  return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${Ct(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`;
}
const As = {
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
}, Ts = {
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
function Cr() {
  const i = {}, t = Object.keys(Ts), e = Object.keys(As);
  let s, n, o, r, a;
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], n = 0; n < e.length; n++)
      o = e[n], a = a.replace(o, As[o]);
    o = parseInt(Ts[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let We;
function Or(i) {
  We || (We = Cr(), We.transparent = [0, 0, 0, 0]);
  const t = We[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Rr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Ar(i) {
  const t = Rr.exec(i);
  let e = 255, s, n, o;
  if (t) {
    if (t[7] !== s) {
      const r = +t[7];
      e = t[8] ? _e(r) : Dt(r * 255, 0, 255);
    }
    return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? _e(s) : Dt(s, 0, 255)), n = 255 & (t[4] ? _e(n) : Dt(n, 0, 255)), o = 255 & (t[6] ? _e(o) : Dt(o, 0, 255)), {
      r: s,
      g: n,
      b: o,
      a: e
    };
  }
}
function Tr(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Ct(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const Oi = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, se = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function Dr(i, t, e) {
  const s = se(Ct(i.r)), n = se(Ct(i.g)), o = se(Ct(i.b));
  return {
    r: Ft(Oi(s + e * (se(Ct(t.r)) - s))),
    g: Ft(Oi(n + e * (se(Ct(t.g)) - n))),
    b: Ft(Oi(o + e * (se(Ct(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function je(i, t, e) {
  if (i) {
    let s = Gi(i);
    s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)), s = Ji(s), i.r = s[0], i.g = s[1], i.b = s[2];
  }
}
function Kn(i, t) {
  return i && Object.assign(t || {}, i);
}
function Ds(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Ft(i[3]))) : (t = Kn(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Ft(t.a)), t;
}
function Er(i) {
  return i.charAt(0) === "r" ? Ar(i) : Mr(i);
}
class Pe {
  constructor(t) {
    if (t instanceof Pe)
      return t;
    const e = typeof t;
    let s;
    e === "object" ? s = Ds(t) : e === "string" && (s = pr(t) || Or(t) || Er(t)), this._rgb = s, this._valid = !!s;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Kn(this._rgb);
    return t && (t.a = Ct(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Ds(t);
  }
  rgbString() {
    return this._valid ? Tr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? br(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Pr(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const s = this.rgb, n = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = s.a - n.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, s.r = 255 & c * s.r + o * n.r + 0.5, s.g = 255 & c * s.g + o * n.g + 0.5, s.b = 255 & c * s.b + o * n.b + 0.5, s.a = r * s.a + (1 - r) * n.a, this.rgb = s;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = Dr(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Pe(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Ft(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = De(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return je(this._rgb, 2, t), this;
  }
  darken(t) {
    return je(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return je(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return je(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Sr(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
function Mt() {
}
const Lr = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function V(i) {
  return i === null || typeof i > "u";
}
function X(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function z(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function st(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function ft(i, t) {
  return st(i) ? i : t;
}
function B(i, t) {
  return typeof i > "u" ? t : i;
}
const Fr = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, qn = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function Y(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function j(i, t, e, s) {
  let n, o, r;
  if (X(i))
    for (o = i.length, n = 0; n < o; n++)
      t.call(e, i[n], n);
  else if (z(i))
    for (r = Object.keys(i), o = r.length, n = 0; n < o; n++)
      t.call(e, i[r[n]], r[n]);
}
function ni(i, t) {
  let e, s, n, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, s = i.length; e < s; ++e)
    if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
      return !1;
  return !0;
}
function oi(i) {
  if (X(i))
    return i.map(oi);
  if (z(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), s = e.length;
    let n = 0;
    for (; n < s; ++n)
      t[e[n]] = oi(i[e[n]]);
    return t;
  }
  return i;
}
function Gn(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function Ir(i, t, e, s) {
  if (!Gn(i))
    return;
  const n = t[i], o = e[i];
  z(n) && z(o) ? Ce(n, o, s) : t[i] = oi(o);
}
function Ce(i, t, e) {
  const s = X(t) ? t : [
    t
  ], n = s.length;
  if (!z(i))
    return i;
  e = e || {};
  const o = e.merger || Ir;
  let r;
  for (let a = 0; a < n; ++a) {
    if (r = s[a], !z(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function we(i, t) {
  return Ce(i, t, {
    merger: zr
  });
}
function zr(i, t, e) {
  if (!Gn(i))
    return;
  const s = t[i], n = e[i];
  z(s) && z(n) ? we(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = oi(n));
}
const Es = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Br(i) {
  const t = i.split("."), e = [];
  let s = "";
  for (const n of t)
    s += n, s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
  return e;
}
function Wr(i) {
  const t = Br(i);
  return (e) => {
    for (const s of t) {
      if (s === "")
        break;
      e = e && e[s];
    }
    return e;
  };
}
function qt(i, t) {
  return (Es[t] || (Es[t] = Wr(t)))(i);
}
function Qi(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Oe = (i) => typeof i < "u", zt = (i) => typeof i == "function", Ls = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function jr(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const G = Math.PI, K = 2 * G, ri = Number.POSITIVE_INFINITY, Hr = G / 180, Q = G / 2, Ht = G / 4, Fs = G * 2 / 3, Et = Math.log10, It = Math.sign;
function Je(i, t, e) {
  return Math.abs(i - t) < e;
}
function Is(i) {
  const t = Math.round(i);
  i = Je(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(Et(i))), s = i / e;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e;
}
function Vr(i) {
  const t = [], e = Math.sqrt(i);
  let s;
  for (s = 1; s < e; s++)
    i % s === 0 && (t.push(s), t.push(i / s));
  return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t;
}
function ai(i) {
  return !isNaN(parseFloat(i)) && isFinite(i);
}
function Nr(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function Zn(i, t, e) {
  let s, n, o;
  for (s = 0, n = i.length; s < n; s++)
    o = i[s][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function yt(i) {
  return i * (G / 180);
}
function ts(i) {
  return i * (180 / G);
}
function zs(i) {
  if (!st(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function Jn(i, t) {
  const e = t.x - i.x, s = t.y - i.y, n = Math.sqrt(e * e + s * s);
  let o = Math.atan2(s, e);
  return o < -0.5 * G && (o += K), {
    angle: o,
    distance: n
  };
}
function $r(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function xt(i) {
  return (i % K + K) % K;
}
function li(i, t, e, s) {
  const n = xt(i), o = xt(t), r = xt(e), a = xt(o - n), l = xt(r - n), c = xt(n - o), h = xt(n - r);
  return n === o || n === r || s && o === r || a > l && c < h;
}
function dt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Yr(i) {
  return dt(i, -32768, 32767);
}
function Ut(i, t, e, s = 1e-6) {
  return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s;
}
function es(i, t, e) {
  e = e || ((r) => i[r] < t);
  let s = i.length - 1, n = 0, o;
  for (; s - n > 1; )
    o = n + s >> 1, e(o) ? n = o : s = o;
  return {
    lo: n,
    hi: s
  };
}
const Hi = (i, t, e, s) => es(i, e, s ? (n) => {
  const o = i[n][t];
  return o < e || o === e && i[n + 1][t] === e;
} : (n) => i[n][t] < e), Ur = (i, t, e) => es(i, e, (s) => i[s][t] >= e);
function Xr(i, t, e) {
  let s = 0, n = i.length;
  for (; s < n && i[s] < t; )
    s++;
  for (; n > s && i[n - 1] > e; )
    n--;
  return s > 0 || n < i.length ? i.slice(s, n) : i;
}
const Qn = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function Kr(i, t) {
  if (i._chartjs) {
    i._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Qn.forEach((e) => {
    const s = "_onData" + Qi(e), n = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = n.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[s] == "function" && a[s](...o);
        }), r;
      }
    });
  });
}
function Bs(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const s = e.listeners, n = s.indexOf(t);
  n !== -1 && s.splice(n, 1), !(s.length > 0) && (Qn.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function to(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const eo = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function io(i, t) {
  let e = [], s = !1;
  return function(...n) {
    e = n, s || (s = !0, eo.call(window, () => {
      s = !1, i.apply(t, e);
    }));
  };
}
function qr(i, t) {
  let e;
  return function(...s) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t;
  };
}
const is = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", nt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, Gr = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t, He = (i) => i === 0 || i === 1, Ws = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * K / e)), js = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * K / e) + 1, Me = {
  linear: (i) => i,
  easeInQuad: (i) => i * i,
  easeOutQuad: (i) => -i * (i - 2),
  easeInOutQuad: (i) => (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
  easeInCubic: (i) => i * i * i,
  easeOutCubic: (i) => (i -= 1) * i * i + 1,
  easeInOutCubic: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
  easeInQuart: (i) => i * i * i * i,
  easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
  easeInOutQuart: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
  easeInQuint: (i) => i * i * i * i * i,
  easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
  easeInOutQuint: (i) => (i /= 0.5) < 1 ? 0.5 * i * i * i * i * i : 0.5 * ((i -= 2) * i * i * i * i + 2),
  easeInSine: (i) => -Math.cos(i * Q) + 1,
  easeOutSine: (i) => Math.sin(i * Q),
  easeInOutSine: (i) => -0.5 * (Math.cos(G * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => He(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => He(i) ? i : Ws(i, 0.075, 0.3),
  easeOutElastic: (i) => He(i) ? i : js(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return He(i) ? i : i < 0.5 ? 0.5 * Ws(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * js(i * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(i) {
    return i * i * ((1.70158 + 1) * i - 1.70158);
  },
  easeOutBack(i) {
    return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
  },
  easeInOutBack(i) {
    let t = 1.70158;
    return (i /= 0.5) < 1 ? 0.5 * (i * i * (((t *= 1.525) + 1) * i - t)) : 0.5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2);
  },
  easeInBounce: (i) => 1 - Me.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Me.easeInBounce(i * 2) * 0.5 : Me.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function so(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Hs(i) {
  return so(i) ? i : new Pe(i);
}
function Ri(i) {
  return so(i) ? i : new Pe(i).saturate(0.5).darken(0.1).hexString();
}
const Zr = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Jr = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Qr(i) {
  i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), i.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), i.set("animations", {
    colors: {
      type: "color",
      properties: Jr
    },
    numbers: {
      type: "number",
      properties: Zr
    }
  }), i.describe("animations", {
    _fallback: "animation"
  }), i.set("transitions", {
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
          fn: (t) => t | 0
        }
      }
    }
  });
}
function ta(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const Vs = /* @__PURE__ */ new Map();
function ea(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let s = Vs.get(e);
  return s || (s = new Intl.NumberFormat(i, t), Vs.set(e, s)), s;
}
function mi(i, t, e) {
  return ea(t, e).format(i);
}
const no = {
  values(i) {
    return X(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const s = this.chart.options.locale;
    let n, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (n = "scientific"), o = ia(i, e);
    }
    const r = Et(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: n,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), mi(i, s, l);
  },
  logarithmic(i, t, e) {
    if (i === 0)
      return "0";
    const s = e[t].significand || i / Math.pow(10, Math.floor(Et(i)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(s) || t > 0.8 * e.length ? no.numeric.call(this, i, t, e) : "";
  }
};
function ia(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var bi = {
  formatters: no
};
function sa(i) {
  i.set("scale", {
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
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
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
      callback: bi.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), i.route("scale.ticks", "color", "", "color"), i.route("scale.grid", "color", "", "borderColor"), i.route("scale.border", "color", "", "borderColor"), i.route("scale.title", "color", "", "color"), i.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), i.describe("scales", {
    _fallback: "scale"
  }), i.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const Gt = /* @__PURE__ */ Object.create(null), Vi = /* @__PURE__ */ Object.create(null);
function Se(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let s = 0, n = e.length; s < n; ++s) {
    const o = e[s];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function Ai(i, t, e) {
  return typeof t == "string" ? Ce(Se(i, t), e) : Ce(Se(i, ""), t);
}
class na {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
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
    }, this.hover = {}, this.hoverBackgroundColor = (s, n) => Ri(n.backgroundColor), this.hoverBorderColor = (s, n) => Ri(n.borderColor), this.hoverColor = (s, n) => Ri(n.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return Ai(this, t, e);
  }
  get(t) {
    return Se(this, t);
  }
  describe(t, e) {
    return Ai(Vi, t, e);
  }
  override(t, e) {
    return Ai(Gt, t, e);
  }
  route(t, e, s, n) {
    const o = Se(this, t), r = Se(this, s), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[n];
          return z(l) ? Object.assign({}, c, l) : B(l, c);
        },
        set(l) {
          this[a] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var q = /* @__PURE__ */ new na({
  _scriptable: (i) => !i.startsWith("on"),
  _indexable: (i) => i !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Qr,
  ta,
  sa
]);
function oa(i) {
  return !i || V(i.size) || V(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function ci(i, t, e, s, n) {
  let o = t[n];
  return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s;
}
function ra(i, t, e, s) {
  s = s || {};
  let n = s.data = s.data || {}, o = s.garbageCollect = s.garbageCollect || [];
  s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t), i.save(), i.font = t;
  let r = 0;
  const a = e.length;
  let l, c, h, d, f;
  for (l = 0; l < a; l++)
    if (d = e[l], d != null && !X(d))
      r = ci(i, n, o, r, d);
    else if (X(d))
      for (c = 0, h = d.length; c < h; c++)
        f = d[c], f != null && !X(f) && (r = ci(i, n, o, r, f));
  i.restore();
  const u = o.length / 2;
  if (u > e.length) {
    for (l = 0; l < u; l++)
      delete n[o[l]];
    o.splice(0, u);
  }
  return r;
}
function Vt(i, t, e) {
  const s = i.currentDevicePixelRatio, n = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - n) * s) / s + n;
}
function Ns(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function $s(i, t, e, s) {
  oo(i, t, e, s, null);
}
function oo(i, t, e, s, n) {
  let o, r, a, l, c, h, d, f;
  const u = t.pointStyle, p = t.rotation, m = t.radius;
  let b = (p || 0) * Hr;
  if (u && typeof u == "object" && (o = u.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, s), i.rotate(b), i.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height), i.restore();
    return;
  }
  if (!(isNaN(m) || m <= 0)) {
    switch (i.beginPath(), u) {
      default:
        n ? i.ellipse(e, s, n / 2, m, 0, 0, K) : i.arc(e, s, m, 0, K), i.closePath();
        break;
      case "triangle":
        h = n ? n / 2 : m, i.moveTo(e + Math.sin(b) * h, s - Math.cos(b) * m), b += Fs, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * m), b += Fs, i.lineTo(e + Math.sin(b) * h, s - Math.cos(b) * m), i.closePath();
        break;
      case "rectRounded":
        c = m * 0.516, l = m - c, r = Math.cos(b + Ht) * l, d = Math.cos(b + Ht) * (n ? n / 2 - c : l), a = Math.sin(b + Ht) * l, f = Math.sin(b + Ht) * (n ? n / 2 - c : l), i.arc(e - d, s - a, c, b - G, b - Q), i.arc(e + f, s - r, c, b - Q, b), i.arc(e + d, s + a, c, b, b + Q), i.arc(e - f, s + r, c, b + Q, b + G), i.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * m, h = n ? n / 2 : l, i.rect(e - h, s - l, 2 * h, 2 * l);
          break;
        }
        b += Ht;
      case "rectRot":
        d = Math.cos(b) * (n ? n / 2 : m), r = Math.cos(b) * m, a = Math.sin(b) * m, f = Math.sin(b) * (n ? n / 2 : m), i.moveTo(e - d, s - a), i.lineTo(e + f, s - r), i.lineTo(e + d, s + a), i.lineTo(e - f, s + r), i.closePath();
        break;
      case "crossRot":
        b += Ht;
      case "cross":
        d = Math.cos(b) * (n ? n / 2 : m), r = Math.cos(b) * m, a = Math.sin(b) * m, f = Math.sin(b) * (n ? n / 2 : m), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "star":
        d = Math.cos(b) * (n ? n / 2 : m), r = Math.cos(b) * m, a = Math.sin(b) * m, f = Math.sin(b) * (n ? n / 2 : m), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r), b += Ht, d = Math.cos(b) * (n ? n / 2 : m), r = Math.cos(b) * m, a = Math.sin(b) * m, f = Math.sin(b) * (n ? n / 2 : m), i.moveTo(e - d, s - a), i.lineTo(e + d, s + a), i.moveTo(e + f, s - r), i.lineTo(e - f, s + r);
        break;
      case "line":
        r = n ? n / 2 : Math.cos(b) * m, a = Math.sin(b) * m, i.moveTo(e - r, s - a), i.lineTo(e + r, s + a);
        break;
      case "dash":
        i.moveTo(e, s), i.lineTo(e + Math.cos(b) * (n ? n / 2 : m), s + Math.sin(b) * m);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function oe(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function ss(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function ns(i) {
  i.restore();
}
function aa(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), V(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function la(i, t, e, s, n) {
  if (n.strikethrough || n.underline) {
    const o = i.measureText(s), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = n.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = n.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function ca(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function Zt(i, t, e, s, n, o = {}) {
  const r = X(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = n.string, aa(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && ca(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), V(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)), i.fillText(c, e, s, o.maxWidth), la(i, e, s, c, o), s += Number(n.lineHeight);
  i.restore();
}
function Re(i, t) {
  const { x: e, y: s, w: n, h: o, radius: r } = t;
  i.arc(e + r.topLeft, s + r.topLeft, r.topLeft, 1.5 * G, G, !0), i.lineTo(e, s + o - r.bottomLeft), i.arc(e + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, G, Q, !0), i.lineTo(e + n - r.bottomRight, s + o), i.arc(e + n - r.bottomRight, s + o - r.bottomRight, r.bottomRight, Q, 0, !0), i.lineTo(e + n, s + r.topRight), i.arc(e + n - r.topRight, s + r.topRight, r.topRight, 0, -Q, !0), i.lineTo(e + r.topLeft, s);
}
const ha = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, da = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function fa(i, t) {
  const e = ("" + i).match(ha);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (i = +e[2], e[3]) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return t * i;
}
const ua = (i) => +i || 0;
function os(i, t) {
  const e = {}, s = z(t), n = s ? Object.keys(t) : t, o = z(i) ? s ? (r) => B(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of n)
    e[r] = ua(o(r));
  return e;
}
function ro(i) {
  return os(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function Xt(i) {
  return os(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function ot(i) {
  const t = ro(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function it(i, t) {
  i = i || {}, t = t || q.font;
  let e = B(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let s = B(i.style, t.style);
  s && !("" + s).match(da) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
  const n = {
    family: B(i.family, t.family),
    lineHeight: fa(B(i.lineHeight, t.lineHeight), e),
    size: e,
    style: s,
    weight: B(i.weight, t.weight),
    string: ""
  };
  return n.string = oa(n), n;
}
function Ve(i, t, e, s) {
  let n, o, r;
  for (n = 0, o = i.length; n < o; ++n)
    if (r = i[n], r !== void 0 && r !== void 0)
      return r;
}
function ga(i, t, e) {
  const { min: s, max: n } = i, o = qn(t, (n - s) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(s, -Math.abs(o)),
    max: r(n, o)
  };
}
function Jt(i, t) {
  return Object.assign(Object.create(i), t);
}
function rs(i, t = [
  ""
], e, s, n = () => i[0]) {
  const o = e || i;
  typeof s > "u" && (s = ho("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: s,
    _getTarget: n,
    override: (a) => rs([
      a,
      ...i
    ], t, o, s)
  };
  return new Proxy(r, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(a, l) {
      return delete a[l], delete a._keys, delete i[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(a, l) {
      return lo(a, l, () => ka(l, t, i, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(a, l) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(a, l) {
      return Us(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return Us(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = n());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function le(i, t, e, s) {
  const n = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: ao(i, s),
    setContext: (o) => le(i, o, e, s),
    override: (o) => le(i.override(o), t, e, s)
  };
  return new Proxy(n, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, r) {
      return delete o[r], delete i[r], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, r, a) {
      return lo(o, r, () => ma(o, r, a));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys ? Reflect.has(i, r) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(i, r);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    /**
    * A trap for the in operator.
    */
    has(o, r) {
      return Reflect.has(i, r);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    /**
    * A trap for setting property values.
    */
    set(o, r, a) {
      return i[r] = a, delete o[r], !0;
    }
  });
}
function ao(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: s = t.indexable, _allKeys: n = t.allKeys } = i;
  return {
    allKeys: n,
    scriptable: e,
    indexable: s,
    isScriptable: zt(e) ? e : () => e,
    isIndexable: zt(s) ? s : () => s
  };
}
const pa = (i, t) => i ? i + Qi(t) : t, as = (i, t) => z(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function lo(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const s = e();
  return i[t] = s, s;
}
function ma(i, t, e) {
  const { _proxy: s, _context: n, _subProxy: o, _descriptors: r } = i;
  let a = s[t];
  return zt(a) && r.isScriptable(t) && (a = ba(t, a, i, e)), X(a) && a.length && (a = _a(t, a, i, r.isIndexable)), as(t, a) && (a = le(a, n, o && o[t], r)), a;
}
function ba(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || s);
  return a.delete(i), as(i, l) && (l = ls(n._scopes, n, i, l)), l;
}
function _a(i, t, e, s) {
  const { _proxy: n, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && s(i))
    return t[o.index % t.length];
  if (z(t[0])) {
    const l = t, c = n._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const d = ls(c, n, i, h);
      t.push(le(d, o, r && r[i], a));
    }
  }
  return t;
}
function co(i, t, e) {
  return zt(i) ? i(t, e) : i;
}
const xa = (i, t) => i === !0 ? t : typeof i == "string" ? qt(t, i) : void 0;
function ya(i, t, e, s, n) {
  for (const o of t) {
    const r = xa(e, o);
    if (r) {
      i.add(r);
      const a = co(r._fallback, e, n);
      if (typeof a < "u" && a !== e && a !== s)
        return a;
    } else if (r === !1 && typeof s < "u" && e !== s)
      return null;
  }
  return !1;
}
function ls(i, t, e, s) {
  const n = t._rootScopes, o = co(t._fallback, e, s), r = [
    ...i,
    ...n
  ], a = /* @__PURE__ */ new Set();
  a.add(s);
  let l = Ys(a, r, e, o || e, s);
  return l === null || typeof o < "u" && o !== e && (l = Ys(a, r, o, l, s), l === null) ? !1 : rs(Array.from(a), [
    ""
  ], n, o, () => va(t, e, s));
}
function Ys(i, t, e, s, n) {
  for (; e; )
    e = ya(i, t, e, s, n);
  return e;
}
function va(i, t, e) {
  const s = i._getTarget();
  t in s || (s[t] = {});
  const n = s[t];
  return X(n) && z(e) ? e : n || {};
}
function ka(i, t, e, s) {
  let n;
  for (const o of t)
    if (n = ho(pa(o, i), e), typeof n < "u")
      return as(i, n) ? ls(e, s, i, n) : n;
}
function ho(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const s = e[i];
    if (typeof s < "u")
      return s;
  }
}
function Us(i) {
  let t = i._keys;
  return t || (t = i._keys = wa(i._scopes)), t;
}
function wa(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const s of Object.keys(e).filter((n) => !n.startsWith("_")))
      t.add(s);
  return Array.from(t);
}
function cs() {
  return typeof window < "u" && typeof document < "u";
}
function hs(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function hi(i, t, e) {
  let s;
  return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s;
}
const _i = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Ma(i, t) {
  return _i(i).getPropertyValue(t);
}
const Sa = [
  "top",
  "right",
  "bottom",
  "left"
];
function Kt(i, t, e) {
  const s = {};
  e = e ? "-" + e : "";
  for (let n = 0; n < 4; n++) {
    const o = Sa[n];
    s[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return s.width = s.left + s.right, s.height = s.top + s.bottom, s;
}
const Pa = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ca(i, t) {
  const e = i.touches, s = e && e.length ? e[0] : i, { offsetX: n, offsetY: o } = s;
  let r = !1, a, l;
  if (Pa(n, o, i.target))
    a = n, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = s.clientX - c.left, l = s.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Yt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: s } = t, n = _i(e), o = n.boxSizing === "border-box", r = Kt(n, "padding"), a = Kt(n, "border", "width"), { x: l, y: c, box: h } = Ca(i, e), d = r.left + (h && a.left), f = r.top + (h && a.top);
  let { width: u, height: p } = t;
  return o && (u -= r.width + a.width, p -= r.height + a.height), {
    x: Math.round((l - d) / u * e.width / s),
    y: Math.round((c - f) / p * e.height / s)
  };
}
function Oa(i, t, e) {
  let s, n;
  if (t === void 0 || e === void 0) {
    const o = i && hs(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = _i(o), l = Kt(a, "border", "width"), c = Kt(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, s = hi(a.maxWidth, o, "clientWidth"), n = hi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: s || ri,
    maxHeight: n || ri
  };
}
const Ne = (i) => Math.round(i * 10) / 10;
function Ra(i, t, e, s) {
  const n = _i(i), o = Kt(n, "margin"), r = hi(n.maxWidth, i, "clientWidth") || ri, a = hi(n.maxHeight, i, "clientHeight") || ri, l = Oa(i, t, e);
  let { width: c, height: h } = l;
  if (n.boxSizing === "content-box") {
    const f = Kt(n, "border", "width"), u = Kt(n, "padding");
    c -= u.width + f.width, h -= u.height + f.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = Ne(Math.min(c, r, l.maxWidth)), h = Ne(Math.min(h, a, l.maxHeight)), c && !h && (h = Ne(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = Ne(Math.floor(h * s))), {
    width: c,
    height: h
  };
}
function Xs(i, t, e) {
  const s = t || 1, n = Math.floor(i.height * s), o = Math.floor(i.width * s);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || r.height !== n || r.width !== o ? (i.currentDevicePixelRatio = s, r.height = n, r.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1;
}
const Aa = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    cs() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function Ks(i, t) {
  const e = Ma(i, t), s = e && e.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
const Ta = function(i, t) {
  return {
    x(e) {
      return i + i + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, s) {
      return e - s;
    },
    leftForLtr(e, s) {
      return e - s;
    }
  };
}, Da = function() {
  return {
    x(i) {
      return i;
    },
    setWidth(i) {
    },
    textAlign(i) {
      return i;
    },
    xPlus(i, t) {
      return i + t;
    },
    leftForLtr(i, t) {
      return i;
    }
  };
};
function re(i, t, e) {
  return i ? Ta(t, e) : Da();
}
function fo(i, t) {
  let e, s;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = s);
}
function uo(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
/*!
 * Chart.js v4.4.4
 * https://www.chartjs.org
 * (c) 2024 Chart.js Contributors
 * Released under the MIT License
 */
class Ea {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, s, n) {
    const o = e.listeners[n], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(s - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = eo.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((s, n) => {
      if (!s.running || !s.items.length)
        return;
      const o = s.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (n.draw(), this._notify(n, s, t, "progress")), o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let s = e.get(t);
    return s || (s = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, s)), s;
  }
  listen(t, e, s) {
    this._getAnims(t).listeners[e].push(s);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const s = e.items;
    let n = s.length - 1;
    for (; n >= 0; --n)
      s[n].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var St = /* @__PURE__ */ new Ea();
const qs = "transparent", La = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const s = Hs(i || qs), n = s.valid && Hs(t || qs);
    return n && n.valid ? n.mix(s, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class Fa {
  constructor(t, e, s, n) {
    const o = e[s];
    n = Ve([
      t.to,
      n,
      o,
      t.from
    ]);
    const r = Ve([
      t.from,
      o,
      n
    ]);
    this._active = !0, this._fn = t.fn || La[t.type || typeof r], this._easing = Me[t.easing] || Me.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = s, this._from = r, this._to = n, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, s) {
    if (this._active) {
      this._notify(!1);
      const n = this._target[this._prop], o = s - this._start, r = this._duration - o;
      this._start = s, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Ve([
        t.to,
        e,
        n,
        t.from
      ]), this._from = Ve([
        t.from,
        n,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, s = this._duration, n = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < s), !this._active) {
      this._target[n] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[n] = o;
      return;
    }
    l = e / s % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[n] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, s) => {
      t.push({
        res: e,
        rej: s
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", s = this._promises || [];
    for (let n = 0; n < s.length; n++)
      s[n][e]();
  }
}
class go {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!z(t))
      return;
    const e = Object.keys(q.animation), s = this._properties;
    Object.getOwnPropertyNames(t).forEach((n) => {
      const o = t[n];
      if (!z(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (X(o.properties) && o.properties || [
        n
      ]).forEach((a) => {
        (a === n || !s.has(a)) && s.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const s = e.options, n = za(t, s);
    if (!n)
      return [];
    const o = this._createAnimations(n, s);
    return s.$shared && Ia(t.options.$animations, s).then(() => {
      t.options = s;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const s = this._properties, n = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        n.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let d = o[c];
      const f = s.get(c);
      if (d)
        if (f && d.active()) {
          d.update(f, h, a);
          continue;
        } else
          d.cancel();
      if (!f || !f.duration) {
        t[c] = h;
        continue;
      }
      o[c] = d = new Fa(f, t, c, h), n.push(d);
    }
    return n;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const s = this._createAnimations(t, e);
    if (s.length)
      return St.add(this._chart, s), !0;
  }
}
function Ia(i, t) {
  const e = [], s = Object.keys(t);
  for (let n = 0; n < s.length; n++) {
    const o = i[s[n]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function za(i, t) {
  if (!t)
    return;
  let e = i.options;
  if (!e) {
    i.options = t;
    return;
  }
  return e.$shared && (i.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Gs(i, t) {
  const e = i && i.options || {}, s = e.reverse, n = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: s ? o : n,
    end: s ? n : o
  };
}
function Ba(i, t, e) {
  if (e === !1)
    return !1;
  const s = Gs(i, e), n = Gs(t, e);
  return {
    top: n.end,
    right: s.end,
    bottom: n.start,
    left: s.start
  };
}
function Wa(i) {
  let t, e, s, n;
  return z(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
    top: t,
    right: e,
    bottom: s,
    left: n,
    disabled: i === !1
  };
}
function po(i, t) {
  const e = [], s = i._getSortedDatasetMetas(t);
  let n, o;
  for (n = 0, o = s.length; n < o; ++n)
    e.push(s[n].index);
  return e;
}
function Zs(i, t, e, s = {}) {
  const n = i.keys, o = s.mode === "single";
  let r, a, l, c;
  if (t !== null) {
    for (r = 0, a = n.length; r < a; ++r) {
      if (l = +n[r], l === e) {
        if (s.all)
          continue;
        break;
      }
      c = i.values[l], st(c) && (o || t === 0 || It(t) === It(c)) && (t += c);
    }
    return t;
  }
}
function ja(i, t) {
  const { iScale: e, vScale: s } = t, n = e.axis === "x" ? "x" : "y", o = s.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [n]: h,
      [o]: i[h]
    };
  return a;
}
function Js(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ha(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Va(i) {
  const { min: t, max: e, minDefined: s, maxDefined: n } = i.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: n ? e : Number.POSITIVE_INFINITY
  };
}
function Na(i, t, e) {
  const s = i[t] || (i[t] = {});
  return s[e] || (s[e] = {});
}
function Qs(i, t, e, s) {
  for (const n of t.getMatchingVisibleMetas(s).reverse()) {
    const o = i[n.index];
    if (e && o > 0 || !e && o < 0)
      return n.index;
  }
  return null;
}
function tn(i, t) {
  const { chart: e, _cachedMeta: s } = i, n = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = s, l = o.axis, c = r.axis, h = Ha(o, r, s), d = t.length;
  let f;
  for (let u = 0; u < d; ++u) {
    const p = t[u], { [l]: m, [c]: b } = p, _ = p._stacks || (p._stacks = {});
    f = _[c] = Na(n, h, m), f[a] = b, f._top = Qs(f, r, !0, s.type), f._bottom = Qs(f, r, !1, s.type);
    const x = f._visualValues || (f._visualValues = {});
    x[a] = b;
  }
}
function Ti(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((s) => e[s].axis === t).shift();
}
function $a(i, t) {
  return Jt(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Ya(i, t, e) {
  return Jt(i, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function ue(i, t) {
  const e = i.controller.index, s = i.vScale && i.vScale.axis;
  if (s) {
    t = t || i._parsed;
    for (const n of t) {
      const o = n._stacks;
      if (!o || o[s] === void 0 || o[s][e] === void 0)
        return;
      delete o[s][e], o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e];
    }
  }
}
const Di = (i) => i === "reset" || i === "none", en = (i, t) => t ? i : Object.assign({}, i), Ua = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: po(e, !0),
  values: null
};
class ae {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Js(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && ue(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, s = this.getDataset(), n = (d, f, u, p) => d === "x" ? f : d === "r" ? p : u, o = e.xAxisID = B(s.xAxisID, Ti(t, "x")), r = e.yAxisID = B(s.yAxisID, Ti(t, "y")), a = e.rAxisID = B(s.rAxisID, Ti(t, "r")), l = e.indexAxis, c = e.iAxisID = n(l, o, r, a), h = e.vAxisID = n(l, r, o, a);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(r), e.rScale = this.getScaleForId(a), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Bs(this._data, this), t._stacked && ue(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), s = this._data;
    if (z(e)) {
      const n = this._cachedMeta;
      this._data = ja(e, n);
    } else if (s !== e) {
      if (s) {
        Bs(s, this);
        const n = this._cachedMeta;
        ue(n), n._parsed = [];
      }
      e && Object.isExtensible(e) && Kr(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, s = this.getDataset();
    let n = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = Js(e.vScale, e), e.stack !== s.stack && (n = !0, ue(e), e.stack = s.stack), this._resyncElements(t), (n || o !== e._stacked) && tn(this, e._parsed);
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), s = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(s, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: s, _data: n } = this, { iScale: o, _stacked: r } = s, a = o.axis;
    let l = t === 0 && e === n.length ? !0 : s._sorted, c = t > 0 && s._parsed[t - 1], h, d, f;
    if (this._parsing === !1)
      s._parsed = n, s._sorted = !0, f = n;
    else {
      X(n[t]) ? f = this.parseArrayData(s, n, t, e) : z(n[t]) ? f = this.parseObjectData(s, n, t, e) : f = this.parsePrimitiveData(s, n, t, e);
      const u = () => d[a] === null || c && d[a] < c[a];
      for (h = 0; h < e; ++h)
        s._parsed[h + t] = d = f[h], l && (u() && (l = !1), c = d);
      s._sorted = l;
    }
    r && tn(this, f);
  }
  parsePrimitiveData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, d = new Array(n);
    let f, u, p;
    for (f = 0, u = n; f < u; ++f)
      p = f + s, d[f] = {
        [a]: h || o.parse(c[p], p),
        [l]: r.parse(e[p], p)
      };
    return d;
  }
  parseArrayData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, a = new Array(n);
    let l, c, h, d;
    for (l = 0, c = n; l < c; ++l)
      h = l + s, d = e[h], a[l] = {
        x: o.parse(d[0], h),
        y: r.parse(d[1], h)
      };
    return a;
  }
  parseObjectData(t, e, s, n) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(n);
    let h, d, f, u;
    for (h = 0, d = n; h < d; ++h)
      f = h + s, u = e[f], c[h] = {
        x: o.parse(qt(u, a), f),
        y: r.parse(qt(u, l), f)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, s) {
    const n = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: po(n, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Zs(a, r, o.index, {
      mode: s
    });
  }
  updateRangeFromParsed(t, e, s, n) {
    const o = s[e.axis];
    let r = o === null ? NaN : o;
    const a = n && s._stacks[e.axis];
    n && a && (n.values = a, r = Zs(n, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const s = this._cachedMeta, n = s._parsed, o = s._sorted && t === s.iScale, r = n.length, a = this._getOtherScale(t), l = Ua(e, s, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: d } = Va(a);
    let f, u;
    function p() {
      u = n[f];
      const m = u[a.axis];
      return !st(u[t.axis]) || h > m || d < m;
    }
    for (f = 0; f < r && !(!p() && (this.updateRangeFromParsed(c, t, u, l), o)); ++f)
      ;
    if (o) {
      for (f = r - 1; f >= 0; --f)
        if (!p()) {
          this.updateRangeFromParsed(c, t, u, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, s = [];
    let n, o, r;
    for (n = 0, o = e.length; n < o; ++n)
      r = e[n][t.axis], st(r) && s.push(r);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = e.iScale, n = e.vScale, o = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
      value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Wa(B(this.options.clip, Ba(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, s = this._cachedMeta, n = s.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || n.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (s.dataset && s.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const d = n[h];
      d.hidden || (d.active && c ? r.push(d) : d.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const s = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, e, s) {
    const n = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Ya(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = n.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = $a(this.chart.getContext(), this.index)), o.dataset = n, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = s, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", s) {
    const n = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Oe(s);
    if (a)
      return en(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), d = n ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], f = c.getOptionScopes(this.getDataset(), h), u = Object.keys(q.elements[t]), p = () => this.getContext(s, n, e), m = c.resolveNamedOptions(f, u, p, d);
    return m.$shared && (m.$shared = l, o[r] = Object.freeze(en(m, l))), m;
  }
  _resolveAnimations(t, e, s) {
    const n = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (n.options.animation !== !1) {
      const h = this.chart.config, d = h.datasetAnimationScopeKeys(this._type, e), f = h.getOptionScopes(this.getDataset(), d);
      l = h.createResolver(f, this.getContext(t, s, e));
    }
    const c = new go(n, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Di(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const s = this.resolveDataElementOptions(t, e), n = this._sharedOptions, o = this.getSharedOptions(s), r = this.includeOptions(e, o) || o !== n;
    return this.updateSharedOptions(o, e, s), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, s, n) {
    Di(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s);
  }
  updateSharedOptions(t, e, s) {
    t && !Di(e) && this._resolveAnimations(void 0, e).update(t, s);
  }
  _setStyle(t, e, s, n) {
    t.active = n;
    const o = this.getStyle(e, n);
    this._resolveAnimations(e, s, n).update(t, {
      options: !n && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, e, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const n = s.length, o = e.length, r = Math.min(o, n);
    r && this.parse(0, r), o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o);
  }
  _insertElements(t, e, s = !0) {
    const n = this._cachedMeta, o = n.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(n._parsed), this.parse(t, e), s && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, s, n) {
  }
  _removeElements(t, e) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const n = s._parsed.splice(t, e);
      s._stacked && ue(s, n);
    }
    s.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, s, n] = t;
      this[e](s, n);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const s = arguments.length - 2;
    s && this._sync([
      "_insertElements",
      t,
      s
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
S(ae, "defaults", {}), S(ae, "datasetElementType", null), S(ae, "dataElementType", null);
function Xa(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let s = [];
    for (let n = 0, o = e.length; n < o; n++)
      s = s.concat(e[n].controller.getAllParsedValues(i));
    i._cache.$bar = to(s.sort((n, o) => n - o));
  }
  return i._cache.$bar;
}
function Ka(i) {
  const t = i.iScale, e = Xa(t, i.type);
  let s = t._length, n, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Oe(a) && (s = Math.min(s, Math.abs(r - a) || s)), a = r);
  };
  for (n = 0, o = e.length; n < o; ++n)
    r = t.getPixelForValue(e[n]), l();
  for (a = void 0, n = 0, o = t.ticks.length; n < o; ++n)
    r = t.getPixelForTick(n), l();
  return s;
}
function qa(i, t, e, s) {
  const n = e.barThickness;
  let o, r;
  return V(n) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = n * s, r = 1), {
    chunk: o / s,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function Ga(i, t, e, s) {
  const n = t.pixels, o = n[i];
  let r = i > 0 ? n[i - 1] : null, a = i < n.length - 1 ? n[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / s,
    ratio: e.barPercentage,
    start: c
  };
}
function Za(i, t, e, s) {
  const n = e.parse(i[0], s), o = e.parse(i[1], s), r = Math.min(n, o), a = Math.max(n, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: n,
    end: o,
    min: r,
    max: a
  };
}
function mo(i, t, e, s) {
  return X(i) ? Za(i, t, e, s) : t[e.axis] = e.parse(i, s), t;
}
function sn(i, t, e, s) {
  const n = i.iScale, o = i.vScale, r = n.getLabels(), a = n === o, l = [];
  let c, h, d, f;
  for (c = e, h = e + s; c < h; ++c)
    f = t[c], d = {}, d[n.axis] = a || n.parse(r[c], c), l.push(mo(f, d, o, c));
  return l;
}
function Ei(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function Ja(i, t, e) {
  return i !== 0 ? It(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Qa(i) {
  let t, e, s, n, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", s = "right") : (t = i.base < i.y, e = "bottom", s = "top"), t ? (n = "end", o = "start") : (n = "start", o = "end"), {
    start: e,
    end: s,
    reverse: t,
    top: n,
    bottom: o
  };
}
function tl(i, t, e, s) {
  let n = t.borderSkipped;
  const o = {};
  if (!n) {
    i.borderSkipped = o;
    return;
  }
  if (n === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: h } = Qa(i);
  n === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === s ? n = c : (e._bottom || 0) === s ? n = h : (o[nn(h, r, a, l)] = !0, n = c)), o[nn(n, r, a, l)] = !0, i.borderSkipped = o;
}
function nn(i, t, e, s) {
  return s ? (i = el(i, t, e), i = on(i, e, t)) : i = on(i, t, e), i;
}
function el(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function on(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function il(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Qe extends ae {
  parsePrimitiveData(t, e, s, n) {
    return sn(t, e, s, n);
  }
  parseArrayData(t, e, s, n) {
    return sn(t, e, s, n);
  }
  parseObjectData(t, e, s, n) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, d = [];
    let f, u, p, m;
    for (f = s, u = s + n; f < u; ++f)
      m = e[f], p = {}, p[o.axis] = o.parse(qt(m, c), f), d.push(mo(qt(m, h), p, r, f));
    return d;
  }
  updateRangeFromParsed(t, e, s, n) {
    super.updateRangeFromParsed(t, e, s, n);
    const o = s._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: s, vScale: n } = e, o = this.getParsed(t), r = o._custom, a = Ei(r) ? "[" + r.start + ", " + r.end + "]" : "" + n.getLabelForValue(o[n.axis]);
    return {
      label: "" + s.getLabelForValue(o[s.axis]),
      value: a
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: d, includeOptions: f } = this._getSharedOptions(e, n);
    for (let u = e; u < e + s; u++) {
      const p = this.getParsed(u), m = o || V(p[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(u), b = this._calculateBarIndexPixels(u, h), _ = (p._stacks || {})[a.axis], x = {
        horizontal: c,
        base: m.base,
        enableBorderRadius: !_ || Ei(p._custom) || r === _._top || r === _._bottom,
        x: c ? m.head : b.center,
        y: c ? b.center : m.head,
        height: c ? b.size : Math.abs(m.size),
        width: c ? Math.abs(m.size) : b.size
      };
      f && (x.options = d || this.resolveDataElementOptions(u, t[u].active ? "active" : n));
      const k = x.options || t[u].options;
      tl(x, k, _, r), il(x, k, h.ratio), this.updateElement(t[u], u, x, n);
    }
  }
  _getStacks(t, e) {
    const { iScale: s } = this._cachedMeta, n = s.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = s.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[s.axis], c = (h) => {
      const d = h._parsed.find((u) => u[s.axis] === l), f = d && d[h.vScale.axis];
      if (V(f) || isNaN(f))
        return !0;
    };
    for (const h of n)
      if (!(e !== void 0 && c(h)) && ((o === !1 || r.indexOf(h.stack) === -1 || o === void 0 && h.stack === void 0) && r.push(h.stack), h.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, s) {
    const n = this._getStacks(t, s), o = e !== void 0 ? n.indexOf(e) : -1;
    return o === -1 ? n.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, s = e.iScale, n = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      n.push(s.getPixelForValue(this.getParsed(o)[s.axis], o));
    const a = t.barThickness;
    return {
      min: a || Ka(e),
      pixels: n,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: s, index: n }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, h = Ei(c);
    let d = l[e.axis], f = 0, u = s ? this.applyStack(e, l, s) : d, p, m;
    u !== d && (f = u - d, u = d), h && (d = c.barStart, u = c.barEnd - c.barStart, d !== 0 && It(d) !== It(c.barEnd) && (f = 0), f += d);
    const b = !V(o) && !h ? o : f;
    let _ = e.getPixelForValue(b);
    if (this.chart.getDataVisibility(t) ? p = e.getPixelForValue(f + u) : p = _, m = p - _, Math.abs(m) < r) {
      m = Ja(m, e, a) * r, d === a && (_ -= m / 2);
      const x = e.getPixelForDecimal(0), k = e.getPixelForDecimal(1), M = Math.min(x, k), v = Math.max(x, k);
      _ = Math.max(Math.min(_, v), M), p = _ + m, s && !h && (l._stacks[e.axis]._visualValues[n] = e.getValueForPixel(p) - e.getValueForPixel(_));
    }
    if (_ === e.getPixelForValue(a)) {
      const x = It(m) * e.getLineWidthForValue(a) / 2;
      _ += x, m -= x;
    }
    return {
      size: m,
      base: _,
      head: p,
      center: p + m / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const s = e.scale, n = this.options, o = n.skipNull, r = B(n.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, h = n.barThickness === "flex" ? Ga(t, e, n, c) : qa(t, e, n, c), d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = h.start + h.chunk * d + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
    } else
      a = s.getPixelForValue(this.getParsed(t)[s.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, s = t.data, n = s.length;
    let o = 0;
    for (; o < n; ++o)
      this.getParsed(o)[e.axis] !== null && !s[o].hidden && s[o].draw(this._ctx);
  }
}
S(Qe, "id", "bar"), S(Qe, "defaults", {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "base",
        "width",
        "height"
      ]
    }
  }
}), S(Qe, "overrides", {
  scales: {
    _index_: {
      type: "category",
      offset: !0,
      grid: {
        offset: !0
      }
    },
    _value_: {
      type: "linear",
      beginAtZero: !0
    }
  }
});
function sl(i, t, e) {
  let s = 1, n = 1, o = 0, r = 0;
  if (t < K) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), d = Math.cos(l), f = Math.sin(l), u = (k, M, v) => li(k, a, l, !0) ? 1 : Math.max(M, M * e, v, v * e), p = (k, M, v) => li(k, a, l, !0) ? -1 : Math.min(M, M * e, v, v * e), m = u(0, c, d), b = u(Q, h, f), _ = p(G, c, d), x = p(G + Q, h, f);
    s = (m - _) / 2, n = (b - x) / 2, o = -(m + _) / 2, r = -(b + x) / 2;
  }
  return {
    ratioX: s,
    ratioY: n,
    offsetX: o,
    offsetY: r
  };
}
class xe extends ae {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const s = this.getDataset().data, n = this._cachedMeta;
    if (this._parsing === !1)
      n._parsed = s;
    else {
      let o = (l) => +s[l];
      if (z(s[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +qt(s[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        n._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return yt(this.options.rotation - 90);
  }
  _getCircumference() {
    return yt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = K, e = -K;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s) && this.chart.getDatasetMeta(s).type === this._type) {
        const n = this.chart.getDatasetMeta(s).controller, o = n._getRotation(), r = n._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: s } = e, n = this._cachedMeta, o = n.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(s.width, s.height) - r) / 2, 0), l = Math.min(Fr(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: d } = this._getRotationExtents(), { ratioX: f, ratioY: u, offsetX: p, offsetY: m } = sl(d, h, l), b = (s.width - r) / f, _ = (s.height - r) / u, x = Math.max(Math.min(b, _) / 2, 0), k = qn(this.options.radius, x), M = Math.max(k * l, 0), v = (k - M) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * k, this.offsetY = m * k, n.total = this.calculateTotal(), this.outerRadius = k - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const s = this.options, n = this._cachedMeta, o = this._getCircumference();
    return e && s.animation.animateRotate || !this.chart.getDataVisibility(t) || n._parsed[t] === null || n.data[t].hidden ? 0 : this.calculateCircumference(n._parsed[t] * o / K);
  }
  updateElements(t, e, s, n) {
    const o = n === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, d = (a.top + a.bottom) / 2, f = o && c.animateScale, u = f ? 0 : this.innerRadius, p = f ? 0 : this.outerRadius, { sharedOptions: m, includeOptions: b } = this._getSharedOptions(e, n);
    let _ = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      _ += this._circumference(x, o);
    for (x = e; x < e + s; ++x) {
      const k = this._circumference(x, o), M = t[x], v = {
        x: h + this.offsetX,
        y: d + this.offsetY,
        startAngle: _,
        endAngle: _ + k,
        circumference: k,
        outerRadius: p,
        innerRadius: u
      };
      b && (v.options = m || this.resolveDataElementOptions(x, M.active ? "active" : n)), _ += k, this.updateElement(M, x, v, n);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let s = 0, n;
    for (n = 0; n < e.length; n++) {
      const o = t._parsed[n];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(n) && !e[n].hidden && (s += Math.abs(o));
    }
    return s;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? K * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, s = this.chart, n = s.data.labels || [], o = mi(e._parsed[t], s.options.locale);
    return {
      label: n[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const s = this.chart;
    let n, o, r, a, l;
    if (!t) {
      for (n = 0, o = s.data.datasets.length; n < o; ++n)
        if (s.isDatasetVisible(n)) {
          r = s.getDatasetMeta(n), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (n = 0, o = t.length; n < o; ++n)
      l = a.resolveDataElementOptions(n), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let s = 0, n = t.length; s < n; ++s) {
      const o = this.resolveDataElementOptions(s);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (e += this._getRingWeight(s));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(B(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
S(xe, "id", "doughnut"), S(xe, "defaults", {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: {
    animateRotate: !0,
    animateScale: !1
  },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing"
      ]
    }
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r"
}), S(xe, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), S(xe, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: s, color: n } } = t.legend.options;
            return e.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: n,
                lineWidth: l.borderWidth,
                pointStyle: s,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, s) {
        s.chart.toggleDataVisibility(e.index), s.chart.update();
      }
    }
  }
});
class Ni extends xe {
}
S(Ni, "id", "pie"), S(Ni, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
function Nt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class ds {
  constructor(t) {
    S(this, "options");
    this.options = t || {};
  }
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(ds.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Nt();
  }
  parse() {
    return Nt();
  }
  format() {
    return Nt();
  }
  add() {
    return Nt();
  }
  diff() {
    return Nt();
  }
  startOf() {
    return Nt();
  }
  endOf() {
    return Nt();
  }
}
var nl = {
  _date: ds
};
function ol(i, t, e, s) {
  const { controller: n, data: o, _sorted: r } = i, a = n._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const l = a._reversePixels ? Ur : Hi;
    if (s) {
      if (n._sharedOptions) {
        const c = o[0], h = typeof c.getRange == "function" && c.getRange(t);
        if (h) {
          const d = l(o, t, e - h), f = l(o, t, e + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else return l(o, t, e);
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ee(i, t, e, s, n) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: d, hi: f } = ol(o[a], t, r, n);
    for (let u = d; u <= f; ++u) {
      const p = h[u];
      p.skip || s(p, c, u);
    }
  }
}
function rl(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(s, n) {
    const o = t ? Math.abs(s.x - n.x) : 0, r = e ? Math.abs(s.y - n.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function Li(i, t, e, s, n) {
  const o = [];
  return !n && !i.isPointInArea(t) || Ee(i, e, t, function(a, l, c) {
    !n && !oe(a, i.chartArea, 0) || a.inRange(t.x, t.y, s) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function al(i, t, e, s) {
  let n = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], s), { angle: d } = Jn(r, {
      x: t.x,
      y: t.y
    });
    li(d, c, h) && n.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Ee(i, e, t, o), n;
}
function ll(i, t, e, s, n, o) {
  let r = [];
  const a = rl(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, d, f) {
    const u = h.inRange(t.x, t.y, n);
    if (s && !u)
      return;
    const p = h.getCenterPoint(n);
    if (!(!!o || i.isPointInArea(p)) && !u)
      return;
    const b = a(t, p);
    b < l ? (r = [
      {
        element: h,
        datasetIndex: d,
        index: f
      }
    ], l = b) : b === l && r.push({
      element: h,
      datasetIndex: d,
      index: f
    });
  }
  return Ee(i, e, t, c), r;
}
function Fi(i, t, e, s, n, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? al(i, t, e, n) : ll(i, t, e, s, n, o);
}
function rn(i, t, e, s, n) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Ee(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], n) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, n));
  }), s && !a ? [] : o;
}
var cl = {
  evaluateInteractionItems: Ee,
  modes: {
    index(i, t, e, s) {
      const n = Yt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? Li(i, n, o, s, r) : Fi(i, n, o, !1, s, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, d = c.data[h];
        d && !d.skip && l.push({
          element: d,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, s) {
      const n = Yt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? Li(i, n, o, s, r) : Fi(i, n, o, !1, s, r);
      if (a.length > 0) {
        const l = a[0].datasetIndex, c = i.getDatasetMeta(l).data;
        a = [];
        for (let h = 0; h < c.length; ++h)
          a.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return a;
    },
    point(i, t, e, s) {
      const n = Yt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return Li(i, n, o, s, r);
    },
    nearest(i, t, e, s) {
      const n = Yt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return Fi(i, n, o, e.intersect, s, r);
    },
    x(i, t, e, s) {
      const n = Yt(t, i);
      return rn(i, n, "x", e.intersect, s);
    },
    y(i, t, e, s) {
      const n = Yt(t, i);
      return rn(i, n, "y", e.intersect, s);
    }
  }
};
const bo = [
  "left",
  "top",
  "right",
  "bottom"
];
function ge(i, t) {
  return i.filter((e) => e.pos === t);
}
function an(i, t) {
  return i.filter((e) => bo.indexOf(e.pos) === -1 && e.box.axis === t);
}
function pe(i, t) {
  return i.sort((e, s) => {
    const n = t ? s : e, o = t ? e : s;
    return n.weight === o.weight ? n.index - o.index : n.weight - o.weight;
  });
}
function hl(i) {
  const t = [];
  let e, s, n, o, r, a;
  for (e = 0, s = (i || []).length; e < s; ++e)
    n = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = n, t.push({
      index: e,
      box: n,
      pos: o,
      horizontal: n.isHorizontal(),
      weight: n.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function dl(i) {
  const t = {};
  for (const e of i) {
    const { stack: s, pos: n, stackWeight: o } = e;
    if (!s || !bo.includes(n))
      continue;
    const r = t[s] || (t[s] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function fl(i, t) {
  const e = dl(i), { vBoxMaxWidth: s, hBoxMaxHeight: n } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * s : l && t.availableWidth, a.height = n) : (a.width = s, a.height = h ? h * n : l && t.availableHeight);
  }
  return e;
}
function ul(i) {
  const t = hl(i), e = pe(t.filter((c) => c.box.fullSize), !0), s = pe(ge(t, "left"), !0), n = pe(ge(t, "right")), o = pe(ge(t, "top"), !0), r = pe(ge(t, "bottom")), a = an(t, "x"), l = an(t, "y");
  return {
    fullSize: e,
    leftAndTop: s.concat(o),
    rightAndBottom: n.concat(l).concat(r).concat(a),
    chartArea: ge(t, "chartArea"),
    vertical: s.concat(n).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function ln(i, t, e, s) {
  return Math.max(i[e], t[e]) + Math.max(i[s], t[s]);
}
function _o(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function gl(i, t, e, s) {
  const { pos: n, box: o } = e, r = i.maxPadding;
  if (!z(n)) {
    e.size && (i[n] -= e.size);
    const d = s[e.stack] || {
      size: 0,
      count: 1
    };
    d.size = Math.max(d.size, e.horizontal ? o.height : o.width), e.size = d.size / d.count, i[n] += e.size;
  }
  o.getPadding && _o(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - ln(r, i, "left", "right")), l = Math.max(0, t.outerHeight - ln(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function pl(i) {
  const t = i.maxPadding;
  function e(s) {
    const n = Math.max(t[s] - i[s], 0);
    return i[s] += n, n;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function ml(i, t) {
  const e = t.maxPadding;
  function s(n) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return n.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return s(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function ye(i, t, e, s) {
  const n = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, ml(a.horizontal, t));
    const { same: d, other: f } = gl(t, e, a, s);
    c |= d && n.length, h = h || f, l.fullSize || n.push(a);
  }
  return c && ye(n, t, e, s) || h;
}
function $e(i, t, e, s, n) {
  i.top = e, i.left = t, i.right = t + s, i.bottom = e + n, i.width = s, i.height = n;
}
function cn(i, t, e, s) {
  const n = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = s[a.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const d = t.w * h, f = c.size || l.height;
      Oe(c.start) && (r = c.start), l.fullSize ? $e(l, n.left, r, e.outerWidth - n.right - n.left, f) : $e(l, t.left + c.placed, r, d, f), c.start = r, c.placed += d, r = l.bottom;
    } else {
      const d = t.h * h, f = c.size || l.width;
      Oe(c.start) && (o = c.start), l.fullSize ? $e(l, o, n.top, f, e.outerHeight - n.bottom - n.top) : $e(l, o, t.top + c.placed, f, d), c.start = o, c.placed += d, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var pt = {
  addBox(i, t) {
    i.boxes || (i.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, i.boxes.push(t);
  },
  removeBox(i, t) {
    const e = i.boxes ? i.boxes.indexOf(t) : -1;
    e !== -1 && i.boxes.splice(e, 1);
  },
  configure(i, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(i, t, e, s) {
    if (!i)
      return;
    const n = ot(i.options.layout.padding), o = Math.max(t - n.width, 0), r = Math.max(e - n.height, 0), a = ul(i.boxes), l = a.vertical, c = a.horizontal;
    j(i.boxes, (m) => {
      typeof m.beforeLayout == "function" && m.beforeLayout();
    });
    const h = l.reduce((m, b) => b.box.options && b.box.options.display === !1 ? m : m + 1, 0) || 1, d = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: n,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), f = Object.assign({}, n);
    _o(f, ot(s));
    const u = Object.assign({
      maxPadding: f,
      w: o,
      h: r,
      x: n.left,
      y: n.top
    }, n), p = fl(l.concat(c), d);
    ye(a.fullSize, u, d, p), ye(l, u, d, p), ye(c, u, d, p) && ye(l, u, d, p), pl(u), cn(a.leftAndTop, u, d, p), u.x += u.w, u.y += u.h, cn(a.rightAndBottom, u, d, p), i.chartArea = {
      left: u.left,
      top: u.top,
      right: u.left + u.w,
      bottom: u.top + u.h,
      height: u.h,
      width: u.w
    }, j(a.chartArea, (m) => {
      const b = m.box;
      Object.assign(b, i.chartArea), b.update(u.w, u.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class xo {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, s) {
  }
  removeEventListener(t, e, s) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, s, n) {
    return e = Math.max(0, e || t.width), s = s || t.height, {
      width: e,
      height: Math.max(0, n ? Math.floor(e / n) : s)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class bl extends xo {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const ti = "$chartjs", _l = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, hn = (i) => i === null || i === "";
function xl(i, t) {
  const e = i.style, s = i.getAttribute("height"), n = i.getAttribute("width");
  if (i[ti] = {
    initial: {
      height: s,
      width: n,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", hn(n)) {
    const o = Ks(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (hn(s))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = Ks(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const yo = Aa ? {
  passive: !0
} : !1;
function yl(i, t, e) {
  i && i.addEventListener(t, e, yo);
}
function vl(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, yo);
}
function kl(i, t) {
  const e = _l[i.type] || i.type, { x: s, y: n } = Yt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: s !== void 0 ? s : null,
    y: n !== void 0 ? n : null
  };
}
function di(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function wl(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || di(a.addedNodes, s), r = r && !di(a.removedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
function Ml(i, t, e) {
  const s = i.canvas, n = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || di(a.removedNodes, s), r = r && !di(a.addedNodes, s);
    r && e();
  });
  return n.observe(document, {
    childList: !0,
    subtree: !0
  }), n;
}
const Ae = /* @__PURE__ */ new Map();
let dn = 0;
function vo() {
  const i = window.devicePixelRatio;
  i !== dn && (dn = i, Ae.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function Sl(i, t) {
  Ae.size || window.addEventListener("resize", vo), Ae.set(i, t);
}
function Pl(i) {
  Ae.delete(i), Ae.size || window.removeEventListener("resize", vo);
}
function Cl(i, t, e) {
  const s = i.canvas, n = s && hs(s);
  if (!n)
    return;
  const o = io((a, l) => {
    const c = n.clientWidth;
    e(a, l), c < n.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(n), Sl(i, o), r;
}
function Ii(i, t, e) {
  e && e.disconnect(), t === "resize" && Pl(i);
}
function Ol(i, t, e) {
  const s = i.canvas, n = io((o) => {
    i.ctx !== null && e(kl(o, i));
  }, i);
  return yl(s, t, n), n;
}
class Rl extends xo {
  acquireContext(t, e) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (xl(t, e), s) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[ti])
      return !1;
    const s = e[ti].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = s[o];
      V(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const n = s.style || {};
    return Object.keys(n).forEach((o) => {
      e.style[o] = n[o];
    }), e.width = e.width, delete e[ti], !0;
  }
  addEventListener(t, e, s) {
    this.removeEventListener(t, e);
    const n = t.$proxies || (t.$proxies = {}), r = {
      attach: wl,
      detach: Ml,
      resize: Cl
    }[e] || Ol;
    n[e] = r(t, e, s);
  }
  removeEventListener(t, e) {
    const s = t.$proxies || (t.$proxies = {}), n = s[e];
    if (!n)
      return;
    ({
      attach: Ii,
      detach: Ii,
      resize: Ii
    }[e] || vl)(t, e, n), s[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, s, n) {
    return Ra(t, e, s, n);
  }
  isAttached(t) {
    const e = t && hs(t);
    return !!(e && e.isConnected);
  }
}
function Al(i) {
  return !cs() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? bl : Rl;
}
class Ot {
  constructor() {
    S(this, "x");
    S(this, "y");
    S(this, "active", !1);
    S(this, "options");
    S(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: s } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: s
    };
  }
  hasValue() {
    return ai(this.x) && ai(this.y);
  }
  getProps(t, e) {
    const s = this.$animations;
    if (!e || !s)
      return this;
    const n = {};
    return t.forEach((o) => {
      n[o] = s[o] && s[o].active() ? s[o]._to : this[o];
    }), n;
  }
}
S(Ot, "defaults", {}), S(Ot, "defaultRoutes");
function Tl(i, t) {
  const e = i.options.ticks, s = Dl(i), n = Math.min(e.maxTicksLimit || s, s), o = e.major.enabled ? Ll(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > n)
    return Fl(t, c, o, r / n), c;
  const h = El(o, t, n);
  if (r > 0) {
    let d, f;
    const u = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (Ye(t, c, h, V(u) ? 0 : a - u, a), d = 0, f = r - 1; d < f; d++)
      Ye(t, c, h, o[d], o[d + 1]);
    return Ye(t, c, h, l, V(u) ? t.length : l + u), c;
  }
  return Ye(t, c, h), c;
}
function Dl(i) {
  const t = i.options.offset, e = i._tickSize(), s = i._length / e + (t ? 0 : 1), n = i._maxLength / e;
  return Math.floor(Math.min(s, n));
}
function El(i, t, e) {
  const s = Il(i), n = t.length / e;
  if (!s)
    return Math.max(n, 1);
  const o = Vr(s);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > n)
      return l;
  }
  return Math.max(n, 1);
}
function Ll(i) {
  const t = [];
  let e, s;
  for (e = 0, s = i.length; e < s; e++)
    i[e].major && t.push(e);
  return t;
}
function Fl(i, t, e, s) {
  let n = 0, o = e[0], r;
  for (s = Math.ceil(s), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), n++, o = e[n * s]);
}
function Ye(i, t, e, s, n) {
  const o = B(s, 0), r = Math.min(B(n, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function Il(i) {
  const t = i.length;
  let e, s;
  if (t < 2)
    return !1;
  for (s = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== s)
      return !1;
  return s;
}
const zl = (i) => i === "left" ? "right" : i === "right" ? "left" : i, fn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, un = (i, t) => Math.min(t || i, i);
function gn(i, t) {
  const e = [], s = i.length / t, n = i.length;
  let o = 0;
  for (; o < n; o += s)
    e.push(i[Math.floor(o)]);
  return e;
}
function Bl(i, t, e) {
  const s = i.ticks.length, n = Math.min(t, s - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(n), c;
  if (!(e && (s === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function Wl(i, t) {
  j(i, (e) => {
    const s = e.gc, n = s.length / 2;
    let o;
    if (n > t) {
      for (o = 0; o < n; ++o)
        delete e.data[s[o]];
      s.splice(0, n);
    }
  });
}
function me(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function pn(i, t) {
  if (!i.display)
    return 0;
  const e = it(i.font, t), s = ot(i.padding);
  return (X(i.text) ? i.text.length : 1) * e.lineHeight + s.height;
}
function jl(i, t) {
  return Jt(i, {
    scale: t,
    type: "scale"
  });
}
function Hl(i, t, e) {
  return Jt(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Vl(i, t, e) {
  let s = is(i);
  return (e && t !== "right" || !e && t === "right") && (s = zl(s)), s;
}
function Nl(i, t, e, s) {
  const { top: n, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let d = 0, f, u, p;
  const m = r - n, b = a - o;
  if (i.isHorizontal()) {
    if (u = nt(s, o, a), z(e)) {
      const _ = Object.keys(e)[0], x = e[_];
      p = h[_].getPixelForValue(x) + m - t;
    } else e === "center" ? p = (c.bottom + c.top) / 2 + m - t : p = fn(i, e, t);
    f = a - o;
  } else {
    if (z(e)) {
      const _ = Object.keys(e)[0], x = e[_];
      u = h[_].getPixelForValue(x) - b + t;
    } else e === "center" ? u = (c.left + c.right) / 2 - b + t : u = fn(i, e, t);
    p = nt(s, r, n), d = e === "left" ? -Q : Q;
  }
  return {
    titleX: u,
    titleY: p,
    maxWidth: f,
    rotation: d
  };
}
class Qt extends Ot {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n } = this;
    return t = ft(t, Number.POSITIVE_INFINITY), e = ft(e, Number.NEGATIVE_INFINITY), s = ft(s, Number.POSITIVE_INFINITY), n = ft(n, Number.NEGATIVE_INFINITY), {
      min: ft(t, s),
      max: ft(e, n),
      minDefined: st(t),
      maxDefined: st(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: s, minDefined: n, maxDefined: o } = this.getUserBounds(), r;
    if (n && o)
      return {
        min: e,
        max: s
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), n || (e = Math.min(e, r.min)), o || (s = Math.max(s, r.max));
    return e = o && e > s ? s : e, s = n && e > s ? e : s, {
      min: ft(e, ft(s, e)),
      max: ft(s, ft(e, s))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    Y(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, s) {
    const { beginAtZero: n, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = s = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, s), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = ga(this, o, n), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? gn(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = Tl(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, s;
    this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t), this._startPixel = e, this._endPixel = s, this._reversePixels = t, this._length = s - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    Y(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    Y(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    Y(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Y(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Y(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let s, n, o;
    for (s = 0, n = t.length; s < n; s++)
      o = t[s], o.label = Y(e.callback, [
        o.value,
        s,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    Y(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    Y(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, s = un(this.ticks.length, t.ticks.maxTicksLimit), n = e.minRotation || 0, o = e.maxRotation;
    let r = n, a, l, c;
    if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
      this.labelRotation = n;
      return;
    }
    const h = this._getLabelSizes(), d = h.widest.width, f = h.highest.height, u = dt(this.chart.width - d, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / s : u / (s - 1), d + 6 > a && (a = u / (s - (t.offset ? 0.5 : 1)), l = this.maxHeight - me(t.grid) - e.padding - pn(t.title, this.chart.options.font), c = Math.sqrt(d * d + f * f), r = ts(Math.min(Math.asin(dt((h.highest.height + 6) / a, -1, 1)), Math.asin(dt(l / c, -1, 1)) - Math.asin(dt(f / c, -1, 1)))), r = Math.max(n, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    Y(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    Y(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: s, title: n, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = pn(n, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = me(o) + l) : (t.height = this.maxHeight, t.width = me(o) + l), s.display && this.ticks.length) {
        const { first: c, last: h, widest: d, highest: f } = this._getLabelSizes(), u = s.padding * 2, p = yt(this.labelRotation), m = Math.cos(p), b = Math.sin(p);
        if (a) {
          const _ = s.mirror ? 0 : b * d.width + m * f.height;
          t.height = Math.min(this.maxHeight, t.height + _ + u);
        } else {
          const _ = s.mirror ? 0 : m * d.width + b * f.height;
          t.width = Math.min(this.maxWidth, t.width + _ + u);
        }
        this._calculatePadding(c, h, b, m);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, s, n) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, d = this.right - this.getPixelForTick(this.ticks.length - 1);
      let f = 0, u = 0;
      l ? c ? (f = n * t.width, u = s * e.height) : (f = s * t.height, u = n * e.width) : o === "start" ? u = e.width : o === "end" ? f = t.width : o !== "inner" && (f = t.width / 2, u = e.width / 2), this.paddingLeft = Math.max((f - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((u - d + r) * this.width / (this.width - d), 0);
    } else {
      let h = e.height / 2, d = t.height / 2;
      o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0), this.paddingTop = h + r, this.paddingBottom = d + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    Y(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, s;
    for (e = 0, s = t.length; e < s; e++)
      V(t[e].label) && (t.splice(e, 1), s--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let s = this.ticks;
      e < s.length && (s = gn(s, e)), this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, s) {
    const { ctx: n, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / un(e, s));
    let c = 0, h = 0, d, f, u, p, m, b, _, x, k, M, v;
    for (d = 0; d < e; d += l) {
      if (p = t[d].label, m = this._resolveTickFontOptions(d), n.font = b = m.string, _ = o[b] = o[b] || {
        data: {},
        gc: []
      }, x = m.lineHeight, k = M = 0, !V(p) && !X(p))
        k = ci(n, _.data, _.gc, k, p), M = x;
      else if (X(p))
        for (f = 0, u = p.length; f < u; ++f)
          v = p[f], !V(v) && !X(v) && (k = ci(n, _.data, _.gc, k, v), M += x);
      r.push(k), a.push(M), c = Math.max(k, c), h = Math.max(M, h);
    }
    Wl(o, e);
    const P = r.indexOf(c), C = a.indexOf(h), O = (A) => ({
      width: r[A] || 0,
      height: a[A] || 0
    });
    return {
      first: O(0),
      last: O(e - 1),
      widest: O(P),
      highest: O(C),
      widths: r,
      heights: a
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return Yr(this._alignToPixels ? Vt(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return s.$context || (s.$context = Hl(this.getContext(), t, s));
    }
    return this.$context || (this.$context = jl(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = yt(this.labelRotation), s = Math.abs(Math.cos(e)), n = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * s > a * n ? a / s : l / n : l * n < a * s ? l / s : a / n;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, s = this.chart, n = this.options, { grid: o, position: r, border: a } = n, l = o.offset, c = this.isHorizontal(), d = this.ticks.length + (l ? 1 : 0), f = me(o), u = [], p = a.setContext(this.getContext()), m = p.display ? p.width : 0, b = m / 2, _ = function(N) {
      return Vt(s, N, m);
    };
    let x, k, M, v, P, C, O, A, D, T, E, H;
    if (r === "top")
      x = _(this.bottom), C = this.bottom - f, A = x - b, T = _(t.top) + b, H = t.bottom;
    else if (r === "bottom")
      x = _(this.top), T = t.top, H = _(t.bottom) - b, C = x + b, A = this.top + f;
    else if (r === "left")
      x = _(this.right), P = this.right - f, O = x - b, D = _(t.left) + b, E = t.right;
    else if (r === "right")
      x = _(this.left), D = t.left, E = _(t.right) - b, P = x + b, O = this.left + f;
    else if (e === "x") {
      if (r === "center")
        x = _((t.top + t.bottom) / 2 + 0.5);
      else if (z(r)) {
        const N = Object.keys(r)[0], U = r[N];
        x = _(this.chart.scales[N].getPixelForValue(U));
      }
      T = t.top, H = t.bottom, C = x + b, A = C + f;
    } else if (e === "y") {
      if (r === "center")
        x = _((t.left + t.right) / 2);
      else if (z(r)) {
        const N = Object.keys(r)[0], U = r[N];
        x = _(this.chart.scales[N].getPixelForValue(U));
      }
      P = x - b, O = P - f, D = t.left, E = t.right;
    }
    const Z = B(n.ticks.maxTicksLimit, d), F = Math.max(1, Math.ceil(d / Z));
    for (k = 0; k < d; k += F) {
      const N = this.getContext(k), U = o.setContext(N), at = a.setContext(N), et = U.lineWidth, vt = U.color, Bt = at.dash || [], kt = at.dashOffset, Rt = U.tickWidth, wt = U.tickColor, Wt = U.tickBorderDash || [], mt = U.tickBorderDashOffset;
      M = Bl(this, k, l), M !== void 0 && (v = Vt(s, M, et), c ? P = O = D = E = v : C = A = T = H = v, u.push({
        tx1: P,
        ty1: C,
        tx2: O,
        ty2: A,
        x1: D,
        y1: T,
        x2: E,
        y2: H,
        width: et,
        color: vt,
        borderDash: Bt,
        borderDashOffset: kt,
        tickWidth: Rt,
        tickColor: wt,
        tickBorderDash: Wt,
        tickBorderDashOffset: mt
      }));
    }
    return this._ticksLength = d, this._borderValue = x, u;
  }
  _computeLabelItems(t) {
    const e = this.axis, s = this.options, { position: n, ticks: o } = s, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: d } = o, f = me(s.grid), u = f + h, p = d ? -h : u, m = -yt(this.labelRotation), b = [];
    let _, x, k, M, v, P, C, O, A, D, T, E, H = "middle";
    if (n === "top")
      P = this.bottom - p, C = this._getXAxisLabelAlignment();
    else if (n === "bottom")
      P = this.top + p, C = this._getXAxisLabelAlignment();
    else if (n === "left") {
      const F = this._getYAxisLabelAlignment(f);
      C = F.textAlign, v = F.x;
    } else if (n === "right") {
      const F = this._getYAxisLabelAlignment(f);
      C = F.textAlign, v = F.x;
    } else if (e === "x") {
      if (n === "center")
        P = (t.top + t.bottom) / 2 + u;
      else if (z(n)) {
        const F = Object.keys(n)[0], N = n[F];
        P = this.chart.scales[F].getPixelForValue(N) + u;
      }
      C = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (n === "center")
        v = (t.left + t.right) / 2 - u;
      else if (z(n)) {
        const F = Object.keys(n)[0], N = n[F];
        v = this.chart.scales[F].getPixelForValue(N);
      }
      C = this._getYAxisLabelAlignment(f).textAlign;
    }
    e === "y" && (l === "start" ? H = "top" : l === "end" && (H = "bottom"));
    const Z = this._getLabelSizes();
    for (_ = 0, x = a.length; _ < x; ++_) {
      k = a[_], M = k.label;
      const F = o.setContext(this.getContext(_));
      O = this.getPixelForTick(_) + o.labelOffset, A = this._resolveTickFontOptions(_), D = A.lineHeight, T = X(M) ? M.length : 1;
      const N = T / 2, U = F.color, at = F.textStrokeColor, et = F.textStrokeWidth;
      let vt = C;
      r ? (v = O, C === "inner" && (_ === x - 1 ? vt = this.options.reverse ? "left" : "right" : _ === 0 ? vt = this.options.reverse ? "right" : "left" : vt = "center"), n === "top" ? c === "near" || m !== 0 ? E = -T * D + D / 2 : c === "center" ? E = -Z.highest.height / 2 - N * D + D : E = -Z.highest.height + D / 2 : c === "near" || m !== 0 ? E = D / 2 : c === "center" ? E = Z.highest.height / 2 - N * D : E = Z.highest.height - T * D, d && (E *= -1), m !== 0 && !F.showLabelBackdrop && (v += D / 2 * Math.sin(m))) : (P = O, E = (1 - T) * D / 2);
      let Bt;
      if (F.showLabelBackdrop) {
        const kt = ot(F.backdropPadding), Rt = Z.heights[_], wt = Z.widths[_];
        let Wt = E - kt.top, mt = 0 - kt.left;
        switch (H) {
          case "middle":
            Wt -= Rt / 2;
            break;
          case "bottom":
            Wt -= Rt;
            break;
        }
        switch (C) {
          case "center":
            mt -= wt / 2;
            break;
          case "right":
            mt -= wt;
            break;
          case "inner":
            _ === x - 1 ? mt -= wt : _ > 0 && (mt -= wt / 2);
            break;
        }
        Bt = {
          left: mt,
          top: Wt,
          width: wt + kt.width,
          height: Rt + kt.height,
          color: F.backdropColor
        };
      }
      b.push({
        label: M,
        font: A,
        textOffset: E,
        options: {
          rotation: m,
          color: U,
          strokeColor: at,
          strokeWidth: et,
          textAlign: vt,
          textBaseline: H,
          translation: [
            v,
            P
          ],
          backdrop: Bt
        }
      });
    }
    return b;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-yt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let n = "center";
    return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: s, mirror: n, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: s, top: n, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const n = this.ticks.findIndex((o) => o.value === t);
    return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, s = this.ctx, n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore());
    };
    if (e.display)
      for (o = 0, r = n.length; o < r; ++o) {
        const l = n[o];
        e.drawOnChartArea && a({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && a({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: s, grid: n } } = this, o = s.setContext(this.getContext()), r = s.display ? o.width : 0;
    if (!r)
      return;
    const a = n.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, d, f;
    this.isHorizontal() ? (c = Vt(t, this.left, r) - r / 2, h = Vt(t, this.right, a) + a / 2, d = f = l) : (d = Vt(t, this.top, r) - r / 2, f = Vt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, d), e.lineTo(h, f), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const s = this.ctx, n = this._computeLabelArea();
    n && ss(s, n);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      Zt(s, c, 0, h, l, a);
    }
    n && ns(s);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: s, reverse: n } } = this;
    if (!s.display)
      return;
    const o = it(s.font), r = ot(s.padding), a = s.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || z(e) ? (l += r.bottom, X(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: d, rotation: f } = Nl(this, l, e, a);
    Zt(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: d,
      rotation: f,
      textAlign: Vl(a, e, n),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, s = B(t.grid && t.grid.z, -1), n = B(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Qt.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: s,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: n,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), s = this.axis + "AxisID", n = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[s] === this.id && (!t || a.type === t) && n.push(a);
    }
    return n;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return it(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Ue {
  constructor(t, e, s) {
    this.type = t, this.scope = e, this.override = s, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let s;
    Ul(e) && (s = this.register(e));
    const n = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in n || (n[o] = t, $l(t, r, s), this.override && q.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, s = t.id, n = this.scope;
    s in e && delete e[s], n && s in q[n] && (delete q[n][s], this.override && delete Gt[s]);
  }
}
function $l(i, t, e) {
  const s = Ce(/* @__PURE__ */ Object.create(null), [
    e ? q.get(e) : {},
    q.get(t),
    i.defaults
  ]);
  q.set(t, s), i.defaultRoutes && Yl(t, i.defaultRoutes), i.descriptors && q.describe(t, i.descriptors);
}
function Yl(i, t) {
  Object.keys(t).forEach((e) => {
    const s = e.split("."), n = s.pop(), o = [
      i
    ].concat(s).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    q.route(o, n, l, a);
  });
}
function Ul(i) {
  return "id" in i && "defaults" in i;
}
class Xl {
  constructor() {
    this.controllers = new Ue(ae, "datasets", !0), this.elements = new Ue(Ot, "elements"), this.plugins = new Ue(Object, "plugins"), this.scales = new Ue(Qt, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, s) {
    [
      ...e
    ].forEach((n) => {
      const o = s || this._getRegistryForType(n);
      s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : j(n, (r) => {
        const a = s || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, s) {
    const n = Qi(t);
    Y(s["before" + n], [], s), e[t](s), Y(s["after" + n], [], s);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const s = this._typedRegistries[e];
      if (s.isForType(t))
        return s;
    }
    return this.plugins;
  }
  _get(t, e, s) {
    const n = e.get(t);
    if (n === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return n;
  }
}
var _t = /* @__PURE__ */ new Xl();
class Kl {
  constructor() {
    this._init = [];
  }
  notify(t, e, s, n) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = n ? this._descriptors(t).filter(n) : this._descriptors(t), r = this._notify(o, t, e, s);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, s, n) {
    n = n || {};
    for (const o of t) {
      const r = o.plugin, a = r[s], l = [
        e,
        n,
        o.options
      ];
      if (Y(a, l, r) === !1 && n.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    V(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const s = t && t.config, n = B(s.options && s.options.plugins, {}), o = ql(s);
    return n === !1 && !e ? [] : Zl(t, o, n, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], s = this._cache, n = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(n(e, s), t, "stop"), this._notify(n(s, e), t, "start");
  }
}
function ql(i) {
  const t = {}, e = [], s = Object.keys(_t.plugins.items);
  for (let o = 0; o < s.length; o++)
    e.push(_t.getPlugin(s[o]));
  const n = i.plugins || [];
  for (let o = 0; o < n.length; o++) {
    const r = n[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function Gl(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Zl(i, { plugins: t, localIds: e }, s, n) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = Gl(s[l], n);
    c !== null && o.push({
      plugin: a,
      options: Jl(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function Jl(i, { plugin: t, local: e }, s, n) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(s, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, n, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function $i(i, t) {
  const e = q.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Ql(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function tc(i, t) {
  return i === t ? "_index_" : "_value_";
}
function mn(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function ec(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function Yi(i, ...t) {
  if (mn(i))
    return i;
  for (const e of t) {
    const s = e.axis || ec(e.position) || i.length > 1 && mn(i[0].toLowerCase());
    if (s)
      return s;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function bn(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function ic(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (e.length)
      return bn(i, "x", e[0]) || bn(i, "y", e[0]);
  }
  return {};
}
function sc(i, t) {
  const e = Gt[i.type] || {
    scales: {}
  }, s = t.scales || {}, n = $i(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(s).forEach((r) => {
    const a = s[r];
    if (!z(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = Yi(r, a, ic(r, i), q.scales[a.type]), c = tc(l, n), h = e.scales || {};
    o[r] = we(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || $i(a, t), h = (Gt[a] || {}).scales || {};
    Object.keys(h).forEach((d) => {
      const f = Ql(d, l), u = r[f + "AxisID"] || f;
      o[u] = o[u] || /* @__PURE__ */ Object.create(null), we(o[u], [
        {
          axis: f
        },
        s[u],
        h[d]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    we(a, [
      q.scales[a.type],
      q.scale
    ]);
  }), o;
}
function ko(i) {
  const t = i.options || (i.options = {});
  t.plugins = B(t.plugins, {}), t.scales = sc(i, t);
}
function wo(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function nc(i) {
  return i = i || {}, i.data = wo(i.data), ko(i), i;
}
const _n = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Set();
function Xe(i, t) {
  let e = _n.get(i);
  return e || (e = t(), _n.set(i, e), Mo.add(e)), e;
}
const be = (i, t, e) => {
  const s = qt(t, e);
  s !== void 0 && i.add(s);
};
class oc {
  constructor(t) {
    this._config = nc(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = wo(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), ko(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Xe(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Xe(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Xe(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, s = this.type;
    return Xe(`${s}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const s = this._scopeCache;
    let n = s.get(t);
    return (!n || e) && (n = /* @__PURE__ */ new Map(), s.set(t, n)), n;
  }
  getOptionScopes(t, e, s) {
    const { options: n, type: o } = this, r = this._cachedScopes(t, s), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((d) => be(l, t, d))), h.forEach((d) => be(l, n, d)), h.forEach((d) => be(l, Gt[o] || {}, d)), h.forEach((d) => be(l, q, d)), h.forEach((d) => be(l, Vi, d));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Mo.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      Gt[e] || {},
      q.datasets[e] || {},
      {
        type: e
      },
      q,
      Vi
    ];
  }
  resolveNamedOptions(t, e, s, n = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = xn(this._resolverCache, t, n);
    let l = r;
    if (ac(r, e)) {
      o.$shared = !1, s = zt(s) ? s() : s;
      const c = this.createResolver(t, s, a);
      l = le(r, s, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, s = [
    ""
  ], n) {
    const { resolver: o } = xn(this._resolverCache, t, s);
    return z(e) ? le(o, e, void 0, n) : o;
  }
}
function xn(i, t, e) {
  let s = i.get(t);
  s || (s = /* @__PURE__ */ new Map(), i.set(t, s));
  const n = e.join();
  let o = s.get(n);
  return o || (o = {
    resolver: rs(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, s.set(n, o)), o;
}
const rc = (i) => z(i) && Object.getOwnPropertyNames(i).some((t) => zt(i[t]));
function ac(i, t) {
  const { isScriptable: e, isIndexable: s } = ao(i);
  for (const n of t) {
    const o = e(n), r = s(n), a = (r || o) && i[n];
    if (o && (zt(a) || rc(a)) || r && X(a))
      return !0;
  }
  return !1;
}
var lc = "4.4.4";
const cc = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function yn(i, t) {
  return i === "top" || i === "bottom" || cc.indexOf(i) === -1 && t === "x";
}
function vn(i, t) {
  return function(e, s) {
    return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i];
  };
}
function kn(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), Y(e && e.onComplete, [
    i
  ], t);
}
function hc(i) {
  const t = i.chart, e = t.options.animation;
  Y(e && e.onProgress, [
    i
  ], t);
}
function So(i) {
  return cs() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const ei = {}, wn = (i) => {
  const t = So(i);
  return Object.values(ei).filter((e) => e.canvas === t).pop();
};
function dc(i, t, e) {
  const s = Object.keys(i);
  for (const n of s) {
    const o = +n;
    if (o >= t) {
      const r = i[n];
      delete i[n], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function fc(i, t, e, s) {
  return !e || i.type === "mouseout" ? null : s ? t : i;
}
function Ke(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function uc(i, t) {
  const { xScale: e, yScale: s } = i;
  return e && s ? {
    left: Ke(e, t, "left"),
    right: Ke(e, t, "right"),
    top: Ke(s, t, "top"),
    bottom: Ke(s, t, "bottom")
  } : t;
}
var At;
let te = (At = class {
  static register(...t) {
    _t.add(...t), Mn();
  }
  static unregister(...t) {
    _t.remove(...t), Mn();
  }
  constructor(t, e) {
    const s = this.config = new oc(e), n = So(t), o = wn(n);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = s.createResolver(s.chartOptionScopes(), this.getContext());
    this.platform = new (s.platform || Al(n))(), this.platform.updateConfig(s);
    const a = this.platform.acquireContext(n, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Lr(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Kl(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = qr((d) => this.update(d), r.resizeDelay || 0), this._dataChanges = [], ei[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    St.listen(this, "complete", kn), St.listen(this, "progress", hc), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: s, height: n, _aspectRatio: o } = this;
    return V(t) ? e && o ? o : n ? s / n : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return _t;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Xs(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return Ns(this.canvas, this.ctx), this;
  }
  stop() {
    return St.stop(this), this;
  }
  resize(t, e) {
    St.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const s = this.options, n = this.canvas, o = s.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(n, t, e, o), a = s.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, Xs(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), Y(s.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    j(e, (s, n) => {
      s.id = n;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, s = this.scales, n = Object.keys(s).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = Yi(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), j(o, (r) => {
      const a = r.options, l = a.id, c = Yi(l, a), h = B(a.type, r.dtype);
      (a.position === void 0 || yn(a.position, c) !== yn(r.dposition)) && (a.position = r.dposition), n[l] = !0;
      let d = null;
      if (l in s && s[l].type === h)
        d = s[l];
      else {
        const f = _t.getScale(h);
        d = new f({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), s[d.id] = d;
      }
      d.init(a, t);
    }), j(n, (r, a) => {
      r || delete s[a];
    }), j(s, (r) => {
      pt.configure(this, r, r.options), pt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, s = t.length;
    if (t.sort((n, o) => n.index - o.index), s > e) {
      for (let n = e; n < s; ++n)
        this._destroyDatasetMeta(n);
      t.splice(e, s - e);
    }
    this._sortedMetasets = t.slice(0).sort(vn("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((s, n) => {
      e.filter((o) => o === s._dataset).length === 0 && this._destroyDatasetMeta(n);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let s, n;
    for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
      const o = e[s];
      let r = this.getDatasetMeta(s);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(s), r = this.getDatasetMeta(s)), r.type = a, r.indexAxis = o.indexAxis || $i(a, this.options), r.order = o.order || 0, r.index = s, r.label = "" + o.label, r.visible = this.isDatasetVisible(s), r.controller)
        r.controller.updateIndex(s), r.controller.linkScales();
      else {
        const l = _t.getController(a), { datasetElementType: c, dataElementType: h } = q.datasets[a];
        Object.assign(l, {
          dataElementType: _t.getElement(h),
          datasetElementType: c && _t.getElement(c)
        }), r.controller = new l(this, s), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    j(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), n = this._animationsDisabled = !s.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: d } = this.getDatasetMeta(c), f = !n && o.indexOf(d) === -1;
      d.buildOrUpdateElements(f), r = Math.max(+d.getMaxOverflow(), r);
    }
    r = this._minPadding = s.layout.autoPadding ? r : 0, this._updateLayout(r), n || j(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(vn("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    j(this.scales, (t) => {
      pt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), s = new Set(t.events);
    (!Ls(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: s, start: n, count: o } of e) {
      const r = s === "_removeElements" ? -o : o;
      dc(t, n, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, s = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), n = s(0);
    for (let o = 1; o < e; o++)
      if (!Ls(n, s(o)))
        return;
    return Array.from(n).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    pt.update(this, this.width, this.height, t);
    const e = this.chartArea, s = e.width <= 0 || e.height <= 0;
    this._layers = [], j(this.boxes, (n) => {
      s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()));
    }, this), this._layers.forEach((n, o) => {
      n._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, s = this.data.datasets.length; e < s; ++e)
        this._updateDataset(e, zt(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const s = this.getDatasetMeta(t), n = {
      meta: s,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (St.has(this) ? this.attached && !St.running(this) && St.start(this) : (this.draw(), kn({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: n } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(s, n);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, s = [];
    let n, o;
    for (n = 0, o = e.length; n < o; ++n) {
      const r = e[n];
      (!t || r.visible) && s.push(r);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, s = t._clip, n = !s.disabled, o = uc(t, this.chartArea), r = {
      meta: t,
      index: t.index,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetDraw", r) !== !1 && (n && ss(e, {
      left: s.left === !1 ? 0 : o.left - s.left,
      right: s.right === !1 ? this.width : o.right + s.right,
      top: s.top === !1 ? 0 : o.top - s.top,
      bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
    }), t.controller.draw(), n && ns(e), r.cancelable = !1, this.notifyPlugins("afterDatasetDraw", r));
  }
  isPointInArea(t) {
    return oe(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, s, n) {
    const o = cl.modes[e];
    return typeof o == "function" ? o(this, t, s, n) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], s = this._metasets;
    let n = s.filter((o) => o && o._dataset === e).pop();
    return n || (n = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, s.push(n)), n;
  }
  getContext() {
    return this.$context || (this.$context = Jt(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const s = this.getDatasetMeta(t);
    s.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, s) {
    const n = s ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, n);
    Oe(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), r.update(o, {
      visible: s
    }), this.update((a) => a.datasetIndex === t ? n : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), St.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), Ns(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete ei[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, s = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, n = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    j(this.options.events, (o) => s(o, n));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, s = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, n = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      n("attach", a), this.attached = !0, this.resize(), s("resize", o), s("detach", r);
    };
    r = () => {
      this.attached = !1, n("resize", o), this._stop(), this._resize(0, 0), s("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    j(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, j(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, s) {
    const n = s ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[n + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], s = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !ni(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e));
  }
  notifyPlugins(t, e, s) {
    return this._plugins.notify(this, t, e, s);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, s) {
    const n = this.options.hover, o = (l, c) => l.filter((h) => !c.some((d) => h.datasetIndex === d.datasetIndex && h.index === d.index)), r = o(e, t), a = s ? t : o(t, e);
    r.length && this.updateHoverStyle(r, n.mode, !1), a.length && n.mode && this.updateHoverStyle(a, n.mode, !0);
  }
  _eventHandler(t, e) {
    const s = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, n = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, n) === !1)
      return;
    const o = this._handleEvent(t, e, s.inChartArea);
    return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this;
  }
  _handleEvent(t, e, s) {
    const { _active: n = [], options: o } = this, r = e, a = this._getActiveElements(t, n, s, r), l = jr(t), c = fc(t, this._lastEvent, s, l);
    s && (this._lastEvent = null, Y(o.onHover, [
      t,
      a,
      this
    ], this), l && Y(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !ni(a, n);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, n, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, s, n) {
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, n);
  }
}, S(At, "defaults", q), S(At, "instances", ei), S(At, "overrides", Gt), S(At, "registry", _t), S(At, "version", lc), S(At, "getChart", wn), At);
function Mn() {
  return j(te.instances, (i) => i._plugins.invalidate());
}
function gc(i, t, e) {
  const { startAngle: s, pixelMargin: n, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = n / a;
  i.beginPath(), i.arc(o, r, a, s - c, e + c), l > n ? (c = n / l, i.arc(o, r, l, e + c, s - c, !0)) : i.arc(o, r, n, e + Q, s - Q), i.closePath(), i.clip();
}
function pc(i) {
  return os(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function mc(i, t, e, s) {
  const n = pc(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, s * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * s / 2;
    return dt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(n.outerStart),
    outerEnd: a(n.outerEnd),
    innerStart: dt(n.innerStart, 0, r),
    innerEnd: dt(n.innerEnd, 0, r)
  };
}
function ne(i, t, e, s) {
  return {
    x: e + i * Math.cos(t),
    y: s + i * Math.sin(t)
  };
}
function fi(i, t, e, s, n, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, d = Math.max(t.outerRadius + s + e - c, 0), f = h > 0 ? h + s + e + c : 0;
  let u = 0;
  const p = n - l;
  if (s) {
    const F = h > 0 ? h - s : 0, N = d > 0 ? d - s : 0, U = (F + N) / 2, at = U !== 0 ? p * U / (U + s) : p;
    u = (p - at) / 2;
  }
  const m = Math.max(1e-3, p * d - e / G) / d, b = (p - m) / 2, _ = l + b + u, x = n - b - u, { outerStart: k, outerEnd: M, innerStart: v, innerEnd: P } = mc(t, f, d, x - _), C = d - k, O = d - M, A = _ + k / C, D = x - M / O, T = f + v, E = f + P, H = _ + v / T, Z = x - P / E;
  if (i.beginPath(), o) {
    const F = (A + D) / 2;
    if (i.arc(r, a, d, A, F), i.arc(r, a, d, F, D), M > 0) {
      const et = ne(O, D, r, a);
      i.arc(et.x, et.y, M, D, x + Q);
    }
    const N = ne(E, x, r, a);
    if (i.lineTo(N.x, N.y), P > 0) {
      const et = ne(E, Z, r, a);
      i.arc(et.x, et.y, P, x + Q, Z + Math.PI);
    }
    const U = (x - P / f + (_ + v / f)) / 2;
    if (i.arc(r, a, f, x - P / f, U, !0), i.arc(r, a, f, U, _ + v / f, !0), v > 0) {
      const et = ne(T, H, r, a);
      i.arc(et.x, et.y, v, H + Math.PI, _ - Q);
    }
    const at = ne(C, _, r, a);
    if (i.lineTo(at.x, at.y), k > 0) {
      const et = ne(C, A, r, a);
      i.arc(et.x, et.y, k, _ - Q, A);
    }
  } else {
    i.moveTo(r, a);
    const F = Math.cos(A) * d + r, N = Math.sin(A) * d + a;
    i.lineTo(F, N);
    const U = Math.cos(D) * d + r, at = Math.sin(D) * d + a;
    i.lineTo(U, at);
  }
  i.closePath();
}
function bc(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    fi(i, t, e, s, l, n);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % K || K));
  }
  return fi(i, t, e, s, l, n), i.fill(), l;
}
function _c(i, t, e, s, n) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: d, borderDashOffset: f } = l, u = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(d || []), i.lineDashOffset = f, u ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    fi(i, t, e, s, p, n);
    for (let m = 0; m < o; ++m)
      i.stroke();
    isNaN(a) || (p = r + (a % K || K));
  }
  u && gc(i, t, p), o || (fi(i, t, e, s, p, n), i.stroke());
}
class ve extends Ot {
  constructor(e) {
    super();
    S(this, "circumference");
    S(this, "endAngle");
    S(this, "fullCircles");
    S(this, "innerRadius");
    S(this, "outerRadius");
    S(this, "pixelMargin");
    S(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, s, n) {
    const o = this.getProps([
      "x",
      "y"
    ], n), { angle: r, distance: a } = Jn(o, {
      x: e,
      y: s
    }), { startAngle: l, endAngle: c, innerRadius: h, outerRadius: d, circumference: f } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], n), u = (this.options.spacing + this.options.borderWidth) / 2, p = B(f, c - l), m = li(r, l, c) && l !== c, b = p >= K || m, _ = Ut(a, h + u, d + u);
    return b && _;
  }
  getCenterPoint(e) {
    const { x: s, y: n, startAngle: o, endAngle: r, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: c, spacing: h } = this.options, d = (o + r) / 2, f = (a + l + h + c) / 2;
    return {
      x: s + Math.cos(d) * f,
      y: n + Math.sin(d) * f
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: s, circumference: n } = this, o = (s.offset || 0) / 4, r = (s.spacing || 0) / 2, a = s.circular;
    if (this.pixelMargin = s.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = n > K ? Math.floor(n / K) : 0, n === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(G, n || 0)), h = o * c;
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, bc(e, this, h, r, a), _c(e, this, h, r, a), e.restore();
  }
}
S(ve, "id", "arc"), S(ve, "defaults", {
  borderAlign: "center",
  borderColor: "#fff",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0
}), S(ve, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), S(ve, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
function Po(i, t) {
  const { x: e, y: s, base: n, width: o, height: r } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, h, d;
  return i.horizontal ? (d = r / 2, a = Math.min(e, n), l = Math.max(e, n), c = s - d, h = s + d) : (d = o / 2, a = e - d, l = e + d, c = Math.min(s, n), h = Math.max(s, n)), {
    left: a,
    top: c,
    right: l,
    bottom: h
  };
}
function Lt(i, t, e, s) {
  return i ? 0 : dt(t, e, s);
}
function xc(i, t, e) {
  const s = i.options.borderWidth, n = i.borderSkipped, o = ro(s);
  return {
    t: Lt(n.top, o.top, 0, e),
    r: Lt(n.right, o.right, 0, t),
    b: Lt(n.bottom, o.bottom, 0, e),
    l: Lt(n.left, o.left, 0, t)
  };
}
function yc(i, t, e) {
  const { enableBorderRadius: s } = i.getProps([
    "enableBorderRadius"
  ]), n = i.options.borderRadius, o = Xt(n), r = Math.min(t, e), a = i.borderSkipped, l = s || z(n);
  return {
    topLeft: Lt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Lt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Lt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Lt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function vc(i) {
  const t = Po(i), e = t.right - t.left, s = t.bottom - t.top, n = xc(i, e / 2, s / 2), o = yc(i, e / 2, s / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: s,
      radius: o
    },
    inner: {
      x: t.left + n.l,
      y: t.top + n.t,
      w: e - n.l - n.r,
      h: s - n.t - n.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
        topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(n.b, n.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(n.b, n.r))
      }
    }
  };
}
function zi(i, t, e, s) {
  const n = t === null, o = e === null, a = i && !(n && o) && Po(i, s);
  return a && (n || Ut(t, a.left, a.right)) && (o || Ut(e, a.top, a.bottom));
}
function kc(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function wc(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Bi(i, t, e = {}) {
  const s = i.x !== e.x ? -t : 0, n = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - s, r = (i.y + i.h !== e.y + e.h ? t : 0) - n;
  return {
    x: i.x + s,
    y: i.y + n,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class ii extends Ot {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: s, backgroundColor: n } } = this, { inner: o, outer: r } = vc(this), a = kc(r.radius) ? Re : wc;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Bi(r, e, o)), t.clip(), a(t, Bi(o, -e, r)), t.fillStyle = s, t.fill("evenodd")), t.beginPath(), a(t, Bi(o, e)), t.fillStyle = n, t.fill(), t.restore();
  }
  inRange(t, e, s) {
    return zi(this, t, e, s);
  }
  inXRange(t, e) {
    return zi(this, t, null, e);
  }
  inYRange(t, e) {
    return zi(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: s, base: n, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + n) / 2 : e,
      y: o ? s : (s + n) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
S(ii, "id", "bar"), S(ii, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), S(ii, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
const Sn = (i, t) => {
  let { boxHeight: e = t, boxWidth: s = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
    boxWidth: s,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Mc = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class Pn extends Ot {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, s) {
    this.maxWidth = t, this.maxHeight = e, this._margins = s, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = Y(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((s) => t.filter(s, this.chart.data))), t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels, n = it(s.font), o = n.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Sn(s, o);
    let c, h;
    e.font = n.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, n, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, s, n) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = n + a;
    let d = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let f = -1, u = -h;
    return this.legendItems.forEach((p, m) => {
      const b = s + e / 2 + o.measureText(p.text).width;
      (m === 0 || c[c.length - 1] + b + 2 * a > r) && (d += h, c[c.length - (m > 0 ? 0 : 1)] = 0, u += h, f++), l[m] = {
        left: 0,
        top: u,
        row: f,
        width: b,
        height: n
      }, c[c.length - 1] += b + a;
    }), d;
  }
  _fitCols(t, e, s, n) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let d = a, f = 0, u = 0, p = 0, m = 0;
    return this.legendItems.forEach((b, _) => {
      const { itemWidth: x, itemHeight: k } = Sc(s, e, o, b, n);
      _ > 0 && u + k + 2 * a > h && (d += f + a, c.push({
        width: f,
        height: u
      }), p += f + a, m++, f = u = 0), l[_] = {
        left: p,
        top: u,
        col: m,
        width: x,
        height: k
      }, f = Math.max(f, x), u += k + a;
    }), d += f, c.push({
      width: f,
      height: u
    }), d;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: s, labels: { padding: n }, rtl: o } } = this, r = re(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = nt(s, this.left + n, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = nt(s, this.left + n, this.right - this.lineWidths[a])), c.top += this.top + t + n, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + n;
    } else {
      let a = 0, l = nt(s, this.top + t + n, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = nt(s, this.top + t + n, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + n, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + n;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ss(t, this), this._draw(), ns(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: s, ctx: n } = this, { align: o, labels: r } = t, a = q.color, l = re(t.rtl, this.left, this.width), c = it(r.font), { padding: h } = r, d = c.size, f = d / 2;
    let u;
    this.drawTitle(), n.textAlign = l.textAlign("left"), n.textBaseline = "middle", n.lineWidth = 0.5, n.font = c.string;
    const { boxWidth: p, boxHeight: m, itemHeight: b } = Sn(r, d), _ = function(P, C, O) {
      if (isNaN(p) || p <= 0 || isNaN(m) || m < 0)
        return;
      n.save();
      const A = B(O.lineWidth, 1);
      if (n.fillStyle = B(O.fillStyle, a), n.lineCap = B(O.lineCap, "butt"), n.lineDashOffset = B(O.lineDashOffset, 0), n.lineJoin = B(O.lineJoin, "miter"), n.lineWidth = A, n.strokeStyle = B(O.strokeStyle, a), n.setLineDash(B(O.lineDash, [])), r.usePointStyle) {
        const D = {
          radius: m * Math.SQRT2 / 2,
          pointStyle: O.pointStyle,
          rotation: O.rotation,
          borderWidth: A
        }, T = l.xPlus(P, p / 2), E = C + f;
        oo(n, D, T, E, r.pointStyleWidth && p);
      } else {
        const D = C + Math.max((d - m) / 2, 0), T = l.leftForLtr(P, p), E = Xt(O.borderRadius);
        n.beginPath(), Object.values(E).some((H) => H !== 0) ? Re(n, {
          x: T,
          y: D,
          w: p,
          h: m,
          radius: E
        }) : n.rect(T, D, p, m), n.fill(), A !== 0 && n.stroke();
      }
      n.restore();
    }, x = function(P, C, O) {
      Zt(n, O.text, P, C + b / 2, c, {
        strikethrough: O.hidden,
        textAlign: l.textAlign(O.textAlign)
      });
    }, k = this.isHorizontal(), M = this._computeTitleHeight();
    k ? u = {
      x: nt(o, this.left + h, this.right - s[0]),
      y: this.top + h + M,
      line: 0
    } : u = {
      x: this.left + h,
      y: nt(o, this.top + M + h, this.bottom - e[0].height),
      line: 0
    }, fo(this.ctx, t.textDirection);
    const v = b + h;
    this.legendItems.forEach((P, C) => {
      n.strokeStyle = P.fontColor, n.fillStyle = P.fontColor;
      const O = n.measureText(P.text).width, A = l.textAlign(P.textAlign || (P.textAlign = r.textAlign)), D = p + f + O;
      let T = u.x, E = u.y;
      l.setWidth(this.width), k ? C > 0 && T + D + h > this.right && (E = u.y += v, u.line++, T = u.x = nt(o, this.left + h, this.right - s[u.line])) : C > 0 && E + v > this.bottom && (T = u.x = T + e[u.line].width + h, u.line++, E = u.y = nt(o, this.top + M + h, this.bottom - e[u.line].height));
      const H = l.x(T);
      if (_(H, E, P), T = Gr(A, T + p + f, k ? T + D : this.right, t.rtl), x(l.x(T), E, P), k)
        u.x += D + h;
      else if (typeof P.text != "string") {
        const Z = c.lineHeight;
        u.y += Co(P, Z) + h;
      } else
        u.y += v;
    }), uo(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, s = it(e.font), n = ot(e.padding);
    if (!e.display)
      return;
    const o = re(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = s.size / 2, c = n.top + l;
    let h, d = this.left, f = this.width;
    if (this.isHorizontal())
      f = Math.max(...this.lineWidths), h = this.top + c, d = nt(t.align, d, this.right - f);
    else {
      const p = this.columnSizes.reduce((m, b) => Math.max(m, b.height), 0);
      h = c + nt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const u = nt(a, d, d + f);
    r.textAlign = o.textAlign(is(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = s.string, Zt(r, e.text, u, h, s);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = it(t.font), s = ot(t.padding);
    return t.display ? e.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, e) {
    let s, n, o;
    if (Ut(t, this.left, this.right) && Ut(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (n = o[s], Ut(t, n.left, n.left + n.width) && Ut(e, n.top, n.top + n.height))
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!Oc(t.type, e))
      return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const n = this._hoveredItem, o = Mc(n, s);
      n && !o && Y(e.onLeave, [
        t,
        n,
        this
      ], this), this._hoveredItem = s, s && !o && Y(e.onHover, [
        t,
        s,
        this
      ], this);
    } else s && Y(e.onClick, [
      t,
      s,
      this
    ], this);
  }
}
function Sc(i, t, e, s, n) {
  const o = Pc(s, i, t, e), r = Cc(n, s, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function Pc(i, t, e, s) {
  let n = i.text;
  return n && typeof n != "string" && (n = n.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + s.measureText(n).width;
}
function Cc(i, t, e) {
  let s = i;
  return typeof t.text != "string" && (s = Co(t, e)), s;
}
function Co(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function Oc(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var Oo = {
  id: "legend",
  _element: Pn,
  start(i, t, e) {
    const s = i.legend = new Pn({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    pt.configure(i, s, e), pt.addBox(i, s);
  },
  stop(i) {
    pt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const s = i.legend;
    pt.configure(i, s, e), s.options = e;
  },
  afterUpdate(i) {
    const t = i.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(i, t) {
    t.replay || i.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, t, e) {
      const s = t.datasetIndex, n = e.chart;
      n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = ot(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: s || c.pointStyle,
            rotation: c.rotation,
            textAlign: n || c.textAlign,
            borderRadius: r && (a || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(i)
    }
  }
};
class Ro extends Ot {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const s = this.options;
    if (this.left = 0, this.top = 0, !s.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const n = X(s.text) ? s.text.length : 1;
    this._padding = ot(s.padding);
    const o = n * it(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: s, bottom: n, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, d;
    return this.isHorizontal() ? (h = nt(a, s, o), d = e + t, c = o - s) : (r.position === "left" ? (h = s + t, d = nt(a, n, e), l = G * -0.5) : (h = o - t, d = nt(a, e, n), l = G * 0.5), c = n - e), {
      titleX: h,
      titleY: d,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const s = it(e.font), o = s.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Zt(t, e.text, 0, 0, s, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: is(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function Rc(i, t) {
  const e = new Ro({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  pt.configure(i, e, t), pt.addBox(i, e), i.titleBlock = e;
}
var Ac = {
  id: "title",
  _element: Ro,
  start(i, t, e) {
    Rc(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    pt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const s = i.titleBlock;
    pt.configure(i, s, e), s.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const ke = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, s = /* @__PURE__ */ new Set(), n = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        s.add(l.x), n += l.y, ++o;
      }
    }
    return o === 0 || s.size === 0 ? !1 : {
      x: [
        ...s
      ].reduce((a, l) => a + l) / s.size,
      y: n / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, s = t.y, n = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = $r(t, c);
        h < n && (n = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, s = l.y;
    }
    return {
      x: e,
      y: s
    };
  }
};
function bt(i, t) {
  return t && (X(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function Pt(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function Tc(i, t) {
  const { element: e, datasetIndex: s, index: n } = t, o = i.getDatasetMeta(s).controller, { label: r, value: a } = o.getLabelAndValue(n);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(n),
    raw: i.data.datasets[s].data[n],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: n,
    datasetIndex: s,
    element: e
  };
}
function Cn(i, t) {
  const e = i.chart.ctx, { body: s, footer: n, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = it(t.bodyFont), c = it(t.titleFont), h = it(t.footerFont), d = o.length, f = n.length, u = s.length, p = ot(t.padding);
  let m = p.height, b = 0, _ = s.reduce((M, v) => M + v.before.length + v.lines.length + v.after.length, 0);
  if (_ += i.beforeBody.length + i.afterBody.length, d && (m += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), _) {
    const M = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    m += u * M + (_ - u) * l.lineHeight + (_ - 1) * t.bodySpacing;
  }
  f && (m += t.footerMarginTop + f * h.lineHeight + (f - 1) * t.footerSpacing);
  let x = 0;
  const k = function(M) {
    b = Math.max(b, e.measureText(M).width + x);
  };
  return e.save(), e.font = c.string, j(i.title, k), e.font = l.string, j(i.beforeBody.concat(i.afterBody), k), x = t.displayColors ? r + 2 + t.boxPadding : 0, j(s, (M) => {
    j(M.before, k), j(M.lines, k), j(M.after, k);
  }), x = 0, e.font = h.string, j(i.footer, k), e.restore(), b += p.width, {
    width: b,
    height: m
  };
}
function Dc(i, t) {
  const { y: e, height: s } = t;
  return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center";
}
function Ec(i, t, e, s) {
  const { x: n, width: o } = s, r = e.caretSize + e.caretPadding;
  if (i === "left" && n + o + r > t.width || i === "right" && n - o - r < 0)
    return !0;
}
function Lc(i, t, e, s) {
  const { x: n, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return s === "center" ? c = n <= (a + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= r - o / 2 && (c = "right"), Ec(c, i, t, e) && (c = "center"), c;
}
function On(i, t, e) {
  const s = e.yAlign || t.yAlign || Dc(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Lc(i, t, e, s),
    yAlign: s
  };
}
function Fc(i, t) {
  let { x: e, width: s } = i;
  return t === "right" ? e -= s : t === "center" && (e -= s / 2), e;
}
function Ic(i, t, e) {
  let { y: s, height: n } = i;
  return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s;
}
function Rn(i, t, e, s) {
  const { caretSize: n, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = n + o, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: u } = Xt(r);
  let p = Fc(t, a);
  const m = Ic(t, l, c);
  return l === "center" ? a === "left" ? p += c : a === "right" && (p -= c) : a === "left" ? p -= Math.max(h, f) + n : a === "right" && (p += Math.max(d, u) + n), {
    x: dt(p, 0, s.width - t.width),
    y: dt(m, 0, s.height - t.height)
  };
}
function qe(i, t, e) {
  const s = ot(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left;
}
function An(i) {
  return bt([], Pt(i));
}
function zc(i, t, e) {
  return Jt(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function Tn(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Ao = {
  beforeTitle: Mt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, s = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (s > 0 && t.dataIndex < s)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Mt,
  beforeBody: Mt,
  beforeLabel: Mt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return V(e) || (t += e), t;
  },
  labelColor(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Mt,
  afterBody: Mt,
  beforeFooter: Mt,
  footer: Mt,
  afterFooter: Mt
};
function ct(i, t, e, s) {
  const n = i[t].call(e, s);
  return typeof n > "u" ? Ao[t].call(e, s) : n;
}
class Ui extends Ot {
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, s = this.options.setContext(this.getContext()), n = s.enabled && e.options.animation && s.animations, o = new go(this.chart, n);
    return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = zc(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: s } = e, n = ct(s, "beforeTitle", this, t), o = ct(s, "title", this, t), r = ct(s, "afterTitle", this, t);
    let a = [];
    return a = bt(a, Pt(n)), a = bt(a, Pt(o)), a = bt(a, Pt(r)), a;
  }
  getBeforeBody(t, e) {
    return An(ct(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: s } = e, n = [];
    return j(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = Tn(s, o);
      bt(r.before, Pt(ct(a, "beforeLabel", this, o))), bt(r.lines, ct(a, "label", this, o)), bt(r.after, Pt(ct(a, "afterLabel", this, o))), n.push(r);
    }), n;
  }
  getAfterBody(t, e) {
    return An(ct(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: s } = e, n = ct(s, "beforeFooter", this, t), o = ct(s, "footer", this, t), r = ct(s, "afterFooter", this, t);
    let a = [];
    return a = bt(a, Pt(n)), a = bt(a, Pt(o)), a = bt(a, Pt(r)), a;
  }
  _createItems(t) {
    const e = this._active, s = this.chart.data, n = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(Tc(this.chart, e[l]));
    return t.filter && (a = a.filter((h, d, f) => t.filter(h, d, f, s))), t.itemSort && (a = a.sort((h, d) => t.itemSort(h, d, s))), j(a, (h) => {
      const d = Tn(t.callbacks, h);
      n.push(ct(d, "labelColor", this, h)), o.push(ct(d, "labelPointStyle", this, h)), r.push(ct(d, "labelTextColor", this, h));
    }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const s = this.options.setContext(this.getContext()), n = this._active;
    let o, r = [];
    if (!n.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = ke[s.position].call(this, n, this._eventPosition);
      r = this._createItems(s), this.title = this.getTitle(r, s), this.beforeBody = this.getBeforeBody(r, s), this.body = this.getBody(r, s), this.afterBody = this.getAfterBody(r, s), this.footer = this.getFooter(r, s);
      const l = this._size = Cn(this, s), c = Object.assign({}, a, l), h = On(this.chart, s, c), d = Rn(s, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: d.x,
        y: d.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && s.external && s.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, s, n) {
    const o = this.getCaretPosition(t, s, n);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, s) {
    const { xAlign: n, yAlign: o } = this, { caretSize: r, cornerRadius: a } = s, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: d } = Xt(a), { x: f, y: u } = t, { width: p, height: m } = e;
    let b, _, x, k, M, v;
    return o === "center" ? (M = u + m / 2, n === "left" ? (b = f, _ = b - r, k = M + r, v = M - r) : (b = f + p, _ = b + r, k = M - r, v = M + r), x = b) : (n === "left" ? _ = f + Math.max(l, h) + r : n === "right" ? _ = f + p - Math.max(c, d) - r : _ = this.caretX, o === "top" ? (k = u, M = k - r, b = _ - r, x = _ + r) : (k = u + m, M = k + r, b = _ + r, x = _ - r), v = k), {
      x1: b,
      x2: _,
      x3: x,
      y1: k,
      y2: M,
      y3: v
    };
  }
  drawTitle(t, e, s) {
    const n = this.title, o = n.length;
    let r, a, l;
    if (o) {
      const c = re(s.rtl, this.x, this.width);
      for (t.x = qe(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", r = it(s.titleFont), a = s.titleSpacing, e.fillStyle = s.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(n[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, s, n, o) {
    const r = this.labelColors[s], a = this.labelPointStyles[s], { boxHeight: l, boxWidth: c } = o, h = it(o.bodyFont), d = qe(this, "left", o), f = n.x(d), u = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, p = e.y + u;
    if (o.usePointStyle) {
      const m = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, b = n.leftForLtr(f, c) + c / 2, _ = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, $s(t, m, b, _), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, $s(t, m, b, _);
    } else {
      t.lineWidth = z(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const m = n.leftForLtr(f, c), b = n.leftForLtr(n.xPlus(f, 1), c - 2), _ = Xt(r.borderRadius);
      Object.values(_).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Re(t, {
        x: m,
        y: p,
        w: c,
        h: l,
        radius: _
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Re(t, {
        x: b,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: _
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(m, p, c, l), t.strokeRect(m, p, c, l), t.fillStyle = r.backgroundColor, t.fillRect(b, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, e, s) {
    const { body: n } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = s, d = it(s.bodyFont);
    let f = d.lineHeight, u = 0;
    const p = re(s.rtl, this.x, this.width), m = function(O) {
      e.fillText(O, p.x(t.x + u), t.y + f / 2), t.y += f + o;
    }, b = p.textAlign(r);
    let _, x, k, M, v, P, C;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = d.string, t.x = qe(this, b, s), e.fillStyle = s.bodyColor, j(this.beforeBody, m), u = a && b !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, M = 0, P = n.length; M < P; ++M) {
      for (_ = n[M], x = this.labelTextColors[M], e.fillStyle = x, j(_.before, m), k = _.lines, a && k.length && (this._drawColorBox(e, t, M, p, s), f = Math.max(d.lineHeight, l)), v = 0, C = k.length; v < C; ++v)
        m(k[v]), f = d.lineHeight;
      j(_.after, m);
    }
    u = 0, f = d.lineHeight, j(this.afterBody, m), t.y -= o;
  }
  drawFooter(t, e, s) {
    const n = this.footer, o = n.length;
    let r, a;
    if (o) {
      const l = re(s.rtl, this.x, this.width);
      for (t.x = qe(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", r = it(s.footerFont), e.fillStyle = s.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(n[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + s.footerSpacing;
    }
  }
  drawBackground(t, e, s, n) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = s, { topLeft: d, topRight: f, bottomLeft: u, bottomRight: p } = Xt(n.cornerRadius);
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, e.lineWidth = n.borderWidth, e.beginPath(), e.moveTo(a + d, l), r === "top" && this.drawCaret(t, e, s, n), e.lineTo(a + c - f, l), e.quadraticCurveTo(a + c, l, a + c, l + f), r === "center" && o === "right" && this.drawCaret(t, e, s, n), e.lineTo(a + c, l + h - p), e.quadraticCurveTo(a + c, l + h, a + c - p, l + h), r === "bottom" && this.drawCaret(t, e, s, n), e.lineTo(a + u, l + h), e.quadraticCurveTo(a, l + h, a, l + h - u), r === "center" && o === "left" && this.drawCaret(t, e, s, n), e.lineTo(a, l + d), e.quadraticCurveTo(a, l, a + d, l), e.closePath(), e.fill(), n.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, s = this.$animations, n = s && s.x, o = s && s.y;
    if (n || o) {
      const r = ke[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Cn(this, t), l = Object.assign({}, r, this._size), c = On(e, t, l), h = Rn(t, l, c, e);
      (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s)
      return;
    this._updateAnimationTarget(e);
    const n = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    s = Math.abs(s) < 1e-3 ? 0 : s;
    const r = ot(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), fo(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), uo(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const s = this._active, n = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !ni(s, n), r = this._positionChanged(n, e);
    (o || r) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, s = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const n = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, s), a = this._positionChanged(r, t), l = e || !ni(r, o) || a;
    return l && (this._active = r, (n.enabled || n.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, s, n) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: s, caretY: n, options: o } = this, r = ke[o.position].call(this, t, e);
    return r !== !1 && (s !== r.x || n !== r.y);
  }
}
S(Ui, "positioners", ke);
var To = {
  id: "tooltip",
  _element: Ui,
  positioners: ke,
  afterInit(i, t, e) {
    e && (i.tooltip = new Ui({
      chart: i,
      options: e
    }));
  },
  beforeUpdate(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  reset(i, t, e) {
    i.tooltip && i.tooltip.initialize(e);
  },
  afterDraw(i) {
    const t = i.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (i.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(i, t) {
    if (i.tooltip) {
      const e = t.replay;
      i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, t) => t.bodyFont.size,
    boxWidth: (i, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: Ao
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
};
const Bc = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Wc(i, t, e, s) {
  const n = i.indexOf(t);
  if (n === -1)
    return Bc(i, t, e, s);
  const o = i.lastIndexOf(t);
  return n !== o ? e : n;
}
const jc = (i, t) => i === null ? null : dt(Math.round(i), 0, t);
function Dn(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Xi extends Qt {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const s = this.getLabels();
      for (const { index: n, label: o } of e)
        s[n] === o && s.splice(n, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (V(t))
      return null;
    const s = this.getLabels();
    return e = isFinite(e) && s[e] === t ? e : Wc(s, t, B(e, t), this._addedLabels), jc(e, s.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: s, max: n } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.min, e = this.max, s = this.options.offset, n = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (s ? 0 : 1), 1), this._startValue = this.min - (s ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      n.push({
        value: r
      });
    return n;
  }
  getLabelForValue(t) {
    return Dn.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
S(Xi, "id", "category"), S(Xi, "defaults", {
  ticks: {
    callback: Dn
  }
});
function Hc(i, t) {
  const e = [], { bounds: n, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: f } = i, u = o || 1, p = h - 1, { min: m, max: b } = t, _ = !V(r), x = !V(a), k = !V(c), M = (b - m) / (d + 1);
  let v = Is((b - m) / p / u) * u, P, C, O, A;
  if (v < 1e-14 && !_ && !x)
    return [
      {
        value: m
      },
      {
        value: b
      }
    ];
  A = Math.ceil(b / v) - Math.floor(m / v), A > p && (v = Is(A * v / p / u) * u), V(l) || (P = Math.pow(10, l), v = Math.ceil(v * P) / P), n === "ticks" ? (C = Math.floor(m / v) * v, O = Math.ceil(b / v) * v) : (C = m, O = b), _ && x && o && Nr((a - r) / o, v / 1e3) ? (A = Math.round(Math.min((a - r) / v, h)), v = (a - r) / A, C = r, O = a) : k ? (C = _ ? r : C, O = x ? a : O, A = c - 1, v = (O - C) / A) : (A = (O - C) / v, Je(A, Math.round(A), v / 1e3) ? A = Math.round(A) : A = Math.ceil(A));
  const D = Math.max(zs(v), zs(C));
  P = Math.pow(10, V(l) ? D : l), C = Math.round(C * P) / P, O = Math.round(O * P) / P;
  let T = 0;
  for (_ && (f && C !== r ? (e.push({
    value: r
  }), C < r && T++, Je(Math.round((C + T * v) * P) / P, r, En(r, M, i)) && T++) : C < r && T++); T < A; ++T) {
    const E = Math.round((C + T * v) * P) / P;
    if (x && E > a)
      break;
    e.push({
      value: E
    });
  }
  return x && f && O !== a ? e.length && Je(e[e.length - 1].value, a, En(a, M, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!x || O === a) && e.push({
    value: O
  }), e;
}
function En(i, t, { horizontal: e, minRotation: s }) {
  const n = yt(s), o = (e ? Math.sin(n) : Math.cos(n)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class ui extends Qt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return V(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: s } = this.getUserBounds();
    let { min: n, max: o } = this;
    const r = (l) => n = e ? n : l, a = (l) => o = s ? o : l;
    if (t) {
      const l = It(n), c = It(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (n === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(n - l);
    }
    this.min = n, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: s } = t, n;
    return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const n = {
      maxTicks: s,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, r = Hc(n, o);
    return t.bounds === "ticks" && Zn(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, s = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const n = (s - e) / Math.max(t.length - 1, 1) / 2;
      e -= n, s += n;
    }
    this._startValue = e, this._endValue = s, this._valueRange = s - e;
  }
  getLabelForValue(t) {
    return mi(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Ki extends ui {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = st(t) ? t : 0, this.max = st(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, s = yt(this.options.ticks.minRotation), n = (t ? Math.sin(s) : Math.cos(s)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / n));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
S(Ki, "id", "linear"), S(Ki, "defaults", {
  ticks: {
    callback: bi.formatters.numeric
  }
});
const Te = (i) => Math.floor(Et(i)), $t = (i, t) => Math.pow(10, Te(i) + t);
function Ln(i) {
  return i / Math.pow(10, Te(i)) === 1;
}
function Fn(i, t, e) {
  const s = Math.pow(10, e), n = Math.floor(i / s);
  return Math.ceil(t / s) - n;
}
function Vc(i, t) {
  const e = t - i;
  let s = Te(e);
  for (; Fn(i, t, s) > 10; )
    s++;
  for (; Fn(i, t, s) < 10; )
    s--;
  return Math.min(s, Te(i));
}
function Nc(i, { min: t, max: e }) {
  t = ft(i.min, t);
  const s = [], n = Te(t);
  let o = Vc(t, e), r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const a = Math.pow(10, o), l = n > o ? Math.pow(10, n) : 0, c = Math.round((t - l) * r) / r, h = Math.floor((t - l) / a / 10) * a * 10;
  let d = Math.floor((c - h) / Math.pow(10, o)), f = ft(i.min, Math.round((l + h + d * Math.pow(10, o)) * r) / r);
  for (; f < e; )
    s.push({
      value: f,
      major: Ln(f),
      significand: d
    }), d >= 10 ? d = d < 15 ? 15 : 20 : d++, d >= 20 && (o++, d = 2, r = o >= 0 ? 1 : r), f = Math.round((l + h + d * Math.pow(10, o)) * r) / r;
  const u = ft(i.max, f);
  return s.push({
    value: u,
    major: Ln(u),
    significand: d
  }), s;
}
class In extends Qt {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const s = ui.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return st(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = st(t) ? Math.max(0, t) : null, this.max = st(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !st(this._userMin) && (this.min = t === $t(this.min, 0) ? $t(this.min, -1) : $t(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let s = this.min, n = this.max;
    const o = (a) => s = t ? s : a, r = (a) => n = e ? n : a;
    s === n && (s <= 0 ? (o(1), r(10)) : (o($t(s, -1)), r($t(n, 1)))), s <= 0 && o($t(n, -1)), n <= 0 && r($t(s, 1)), this.min = s, this.max = n;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, s = Nc(e, this);
    return t.bounds === "ticks" && Zn(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : mi(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = Et(t), this._valueRange = Et(this.max) - Et(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Et(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
S(In, "id", "logarithmic"), S(In, "defaults", {
  ticks: {
    callback: bi.formatters.logarithmic,
    major: {
      enabled: !0
    }
  }
});
function qi(i) {
  const t = i.ticks;
  if (t.display && i.display) {
    const e = ot(t.backdropPadding);
    return B(t.font && t.font.size, q.font.size) + e.height;
  }
  return 0;
}
function $c(i, t, e) {
  return e = X(e) ? e : [
    e
  ], {
    w: ra(i, t.string, e),
    h: e.length * t.lineHeight
  };
}
function zn(i, t, e, s, n) {
  return i === s || i === n ? {
    start: t - e / 2,
    end: t + e / 2
  } : i < s || i > n ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function Yc(i) {
  const t = {
    l: i.left + i._padding.left,
    r: i.right - i._padding.right,
    t: i.top + i._padding.top,
    b: i.bottom - i._padding.bottom
  }, e = Object.assign({}, t), s = [], n = [], o = i._pointLabels.length, r = i.options.pointLabels, a = r.centerPointLabels ? G / o : 0;
  for (let l = 0; l < o; l++) {
    const c = r.setContext(i.getPointLabelContext(l));
    n[l] = c.padding;
    const h = i.getPointPosition(l, i.drawingArea + n[l], a), d = it(c.font), f = $c(i.ctx, d, i._pointLabels[l]);
    s[l] = f;
    const u = xt(i.getIndexAngle(l) + a), p = Math.round(ts(u)), m = zn(p, h.x, f.w, 0, 180), b = zn(p, h.y, f.h, 90, 270);
    Uc(e, t, u, m, b);
  }
  i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), i._pointLabelItems = qc(i, s, n);
}
function Uc(i, t, e, s, n) {
  const o = Math.abs(Math.sin(e)), r = Math.abs(Math.cos(e));
  let a = 0, l = 0;
  s.start < t.l ? (a = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - a)) : s.end > t.r && (a = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + a)), n.start < t.t ? (l = (t.t - n.start) / r, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / r, i.b = Math.max(i.b, t.b + l));
}
function Xc(i, t, e) {
  const s = i.drawingArea, { extra: n, additionalAngle: o, padding: r, size: a } = e, l = i.getPointPosition(t, s + n + r, o), c = Math.round(ts(xt(l.angle + Q))), h = Jc(l.y, a.h, c), d = Gc(c), f = Zc(l.x, a.w, d);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: d,
    left: f,
    top: h,
    right: f + a.w,
    bottom: h + a.h
  };
}
function Kc(i, t) {
  if (!t)
    return !0;
  const { left: e, top: s, right: n, bottom: o } = i;
  return !(oe({
    x: e,
    y: s
  }, t) || oe({
    x: e,
    y: o
  }, t) || oe({
    x: n,
    y: s
  }, t) || oe({
    x: n,
    y: o
  }, t));
}
function qc(i, t, e) {
  const s = [], n = i._pointLabels.length, o = i.options, { centerPointLabels: r, display: a } = o.pointLabels, l = {
    extra: qi(o) / 2,
    additionalAngle: r ? G / n : 0
  };
  let c;
  for (let h = 0; h < n; h++) {
    l.padding = e[h], l.size = t[h];
    const d = Xc(i, h, l);
    s.push(d), a === "auto" && (d.visible = Kc(d, c), d.visible && (c = d));
  }
  return s;
}
function Gc(i) {
  return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right";
}
function Zc(i, t, e) {
  return e === "right" ? i -= t : e === "center" && (i -= t / 2), i;
}
function Jc(i, t, e) {
  return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i;
}
function Qc(i, t, e) {
  const { left: s, top: n, right: o, bottom: r } = e, { backdropColor: a } = t;
  if (!V(a)) {
    const l = Xt(t.borderRadius), c = ot(t.backdropPadding);
    i.fillStyle = a;
    const h = s - c.left, d = n - c.top, f = o - s + c.width, u = r - n + c.height;
    Object.values(l).some((p) => p !== 0) ? (i.beginPath(), Re(i, {
      x: h,
      y: d,
      w: f,
      h: u,
      radius: l
    }), i.fill()) : i.fillRect(h, d, f, u);
  }
}
function th(i, t) {
  const { ctx: e, options: { pointLabels: s } } = i;
  for (let n = t - 1; n >= 0; n--) {
    const o = i._pointLabelItems[n];
    if (!o.visible)
      continue;
    const r = s.setContext(i.getPointLabelContext(n));
    Qc(e, r, o);
    const a = it(r.font), { x: l, y: c, textAlign: h } = o;
    Zt(e, i._pointLabels[n], l, c + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function Do(i, t, e, s) {
  const { ctx: n } = i;
  if (e)
    n.arc(i.xCenter, i.yCenter, t, 0, K);
  else {
    let o = i.getPointPosition(0, t);
    n.moveTo(o.x, o.y);
    for (let r = 1; r < s; r++)
      o = i.getPointPosition(r, t), n.lineTo(o.x, o.y);
  }
}
function eh(i, t, e, s, n) {
  const o = i.ctx, r = t.circular, { color: a, lineWidth: l } = t;
  !r && !s || !a || !l || e < 0 || (o.save(), o.strokeStyle = a, o.lineWidth = l, o.setLineDash(n.dash), o.lineDashOffset = n.dashOffset, o.beginPath(), Do(i, e, r, s), o.closePath(), o.stroke(), o.restore());
}
function ih(i, t, e) {
  return Jt(i, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Ge extends ui {
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = ot(qi(this.options) / 2), e = this.width = this.maxWidth - t.width, s = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + s / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, s) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = st(t) && !isNaN(t) ? t : 0, this.max = st(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / qi(this.options));
  }
  generateTickLabels(t) {
    ui.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, s) => {
      const n = Y(this.options.pointLabels.callback, [
        e,
        s
      ], this);
      return n || n === 0 ? n : "";
    }).filter((e, s) => this.chart.getDataVisibility(s));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Yc(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, s, n) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((s - n) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n));
  }
  getIndexAngle(t) {
    const e = K / (this._pointLabels.length || 1), s = this.options.startAngle || 0;
    return xt(t * e + yt(s));
  }
  getDistanceFromCenterForValue(t) {
    if (V(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (V(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const s = e[t];
      return ih(this.getContext(), t, s);
    }
  }
  getPointPosition(t, e, s = 0) {
    const n = this.getIndexAngle(t) - Q + s;
    return {
      x: Math.cos(n) * e + this.xCenter,
      y: Math.sin(n) * e + this.yCenter,
      angle: n
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: s, right: n, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: s,
      right: n,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(), s.beginPath(), Do(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), s.closePath(), s.fillStyle = t, s.fill(), s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: s, grid: n, border: o } = e, r = this._pointLabels.length;
    let a, l, c;
    if (e.pointLabels.display && th(this, r), n.display && this.ticks.forEach((h, d) => {
      if (d !== 0 || d === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const f = this.getContext(d), u = n.setContext(f), p = o.setContext(f);
        eh(this, u, l, r, p);
      }
    }), s.display) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const h = s.setContext(this.getPointLabelContext(a)), { color: d, lineWidth: f } = h;
        !f || !d || (t.lineWidth = f, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(a, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, s = e.ticks;
    if (!s.display)
      return;
    const n = this.getIndexAngle(0);
    let o, r;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(n), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((a, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = s.setContext(this.getContext(l)), h = it(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, r = t.measureText(a.label).width, t.fillStyle = c.backdropColor;
        const d = ot(c.backdropPadding);
        t.fillRect(-r / 2 - d.left, -o - h.size / 2 - d.top, r + d.width, h.size + d.height);
      }
      Zt(t, a.label, 0, -o, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
S(Ge, "id", "radialLinear"), S(Ge, "defaults", {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0
  },
  grid: {
    circular: !1
  },
  startAngle: 0,
  ticks: {
    showLabelBackdrop: !0,
    callback: bi.formatters.numeric
  },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: {
      size: 10
    },
    callback(t) {
      return t;
    },
    padding: 5,
    centerPointLabels: !1
  }
}), S(Ge, "defaultRoutes", {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color"
}), S(Ge, "descriptors", {
  angleLines: {
    _fallback: "grid"
  }
});
const xi = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, ht = /* @__PURE__ */ Object.keys(xi);
function Bn(i, t) {
  return i - t;
}
function Wn(i, t) {
  if (V(t))
    return null;
  const e = i._adapter, { parser: s, round: n, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof s == "function" && (r = s(r)), st(r) || (r = typeof s == "string" ? e.parse(r, s) : e.parse(r)), r === null ? null : (n && (r = n === "week" && (ai(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, n)), +r);
}
function jn(i, t, e, s) {
  const n = ht.length;
  for (let o = ht.indexOf(i); o < n - 1; ++o) {
    const r = xi[ht[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= s)
      return ht[o];
  }
  return ht[n - 1];
}
function sh(i, t, e, s, n) {
  for (let o = ht.length - 1; o >= ht.indexOf(e); o--) {
    const r = ht[o];
    if (xi[r].common && i._adapter.diff(n, s, r) >= t - 1)
      return r;
  }
  return ht[e ? ht.indexOf(e) : 0];
}
function nh(i) {
  for (let t = ht.indexOf(i) + 1, e = ht.length; t < e; ++t)
    if (xi[ht[t]].common)
      return ht[t];
}
function Hn(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: s, hi: n } = es(e, t), o = e[s] >= t ? e[s] : e[n];
    i[o] = !0;
  }
}
function oh(i, t, e, s) {
  const n = i._adapter, o = +n.startOf(t[0].value, s), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +n.add(a, 1, s))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function Vn(i, t, e) {
  const s = [], n = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], n[a] = r, s.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? s : oh(i, s, n, e);
}
class gi extends Qt {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const s = t.time || (t.time = {}), n = this._adapter = new nl._date(t.adapters.date);
    n.init(e), we(s.displayFormats, n.formats()), this._parseOpts = {
      parser: s.parser,
      round: s.round,
      isoWeekday: s.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Wn(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, s = t.time.unit || "day";
    let { min: n, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (n = Math.min(n, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), n = st(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s), o = st(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1, this.min = Math.min(n, o - 1), this.max = Math.max(n + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, s = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], s = t[t.length - 1]), {
      min: e,
      max: s
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, s = t.ticks, n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
    const o = this.min, r = this.max, a = Xr(n, o, r);
    return this._unit = e.unit || (s.autoSkip ? jn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : sh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : nh(this._unit), this.initOffsets(n), t.reverse && a.reverse(), Vn(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, s = 0, n, o;
    this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = dt(e, 0, r), s = dt(s, 0, r), this._offsets = {
      start: e,
      end: s,
      factor: 1 / (e + 1 + s)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, s = this.max, n = this.options, o = n.time, r = o.unit || jn(o.minUnit, e, s, this._getLabelCapacity(e)), a = B(n.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = ai(l) || l === !0, h = {};
    let d = e, f, u;
    if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : r), t.diff(s, e, r) > 1e5 * a)
      throw new Error(e + " and " + s + " are too far apart with stepSize of " + a + " " + r);
    const p = n.ticks.source === "data" && this.getDataTimestamps();
    for (f = d, u = 0; f < s; f = +t.add(f, a, r), u++)
      Hn(h, f, p);
    return (f === s || n.bounds === "ticks" || u === 1) && Hn(h, f, p), Object.keys(h).sort(Bn).map((m) => +m);
  }
  getLabelForValue(t) {
    const e = this._adapter, s = this.options.time;
    return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime);
  }
  format(t, e) {
    const n = this.options.time.displayFormats, o = this._unit, r = e || n[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, s, n) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return Y(r, [
        t,
        e,
        s
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], d = c && a[c], f = s[e], u = c && d && f && f.major;
    return this._adapter.format(t, n || (u ? d : h));
  }
  generateTickLabels(t) {
    let e, s, n;
    for (e = 0, s = t.length; e < s; ++e)
      n = t[e], n.label = this._tickFormatFunction(n.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + s) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, s = this.ctx.measureText(t).width, n = yt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(n), r = Math.sin(n), a = this._resolveTickFontOptions(0).size;
    return {
      w: s * o + a * r,
      h: s * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, s = e.displayFormats, n = s[e.unit] || s.millisecond, o = this._tickFormatFunction(t, 0, Vn(this, [
      t
    ], this._majorUnit), n), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, s;
    if (t.length)
      return t;
    const n = this.getMatchingVisibleMetas();
    if (this._normalized && n.length)
      return this._cache.data = n[0].controller.getAllParsedValues(this);
    for (e = 0, s = n.length; e < s; ++e)
      t = t.concat(n[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, s;
    if (t.length)
      return t;
    const n = this.getLabels();
    for (e = 0, s = n.length; e < s; ++e)
      t.push(Wn(this, n[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return to(t.sort(Bn));
  }
}
S(gi, "id", "time"), S(gi, "defaults", {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {}
  },
  ticks: {
    source: "auto",
    callback: !1,
    major: {
      enabled: !1
    }
  }
});
function Ze(i, t, e) {
  let s = 0, n = i.length - 1, o, r, a, l;
  e ? (t >= i[s].pos && t <= i[n].pos && ({ lo: s, hi: n } = Hi(i, "pos", t)), { pos: o, time: a } = i[s], { pos: r, time: l } = i[n]) : (t >= i[s].time && t <= i[n].time && ({ lo: s, hi: n } = Hi(i, "time", t)), { time: o, pos: a } = i[s], { time: r, pos: l } = i[n]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class Nn extends gi {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Ze(e, this.min), this._tableRange = Ze(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: s } = this, n = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= s && n.push(c);
    if (n.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: s,
          pos: 1
        }
      ];
    for (r = 0, a = n.length; r < a; ++r)
      h = n[r + 1], l = n[r - 1], c = n[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let s = super.getDataTimestamps();
    return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), s = this.getLabelTimestamps();
    return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Ze(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, s = this.getDecimalForPixel(t) / e.factor - e.end;
    return Ze(this._table, s * this._tableRange + this._minPos, !0);
  }
}
S(Nn, "id", "timeseries"), S(Nn, "defaults", gi.defaults);
const Eo = "label";
function $n(i, t) {
  typeof i == "function" ? i(t) : i && (i.current = t);
}
function rh(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Lo(i, t) {
  i.labels = t;
}
function Fo(i, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Eo;
  const s = [];
  i.datasets = t.map((n) => {
    const o = i.datasets.find((r) => r[e] === n[e]);
    return !o || !n.data || s.includes(o) ? {
      ...n
    } : (s.push(o), Object.assign(o, n), o);
  });
}
function ah(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Eo;
  const e = {
    labels: [],
    datasets: []
  };
  return Lo(e, i.labels), Fo(e, i.datasets, t), e;
}
function lh(i, t) {
  const { height: e = 150, width: s = 300, redraw: n = !1, datasetIdKey: o, type: r, data: a, options: l, plugins: c = [], fallbackContent: h, updateMode: d, ...f } = i, u = Ps(null), p = Ps(), m = () => {
    u.current && (p.current = new te(u.current, {
      type: r,
      data: ah(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), $n(t, p.current));
  }, b = () => {
    $n(t, null), p.current && (p.current.destroy(), p.current = null);
  };
  return Tt(() => {
    !n && p.current && l && rh(p.current, l);
  }, [
    n,
    l
  ]), Tt(() => {
    !n && p.current && Lo(p.current.config.data, a.labels);
  }, [
    n,
    a.labels
  ]), Tt(() => {
    !n && p.current && a.datasets && Fo(p.current.config.data, a.datasets, o);
  }, [
    n,
    a.datasets
  ]), Tt(() => {
    p.current && (n ? (b(), setTimeout(m)) : p.current.update(d));
  }, [
    n,
    l,
    a.labels,
    a.datasets,
    d
  ]), Tt(() => {
    p.current && (b(), setTimeout(m));
  }, [
    r
  ]), Tt(() => (m(), () => b()), []), /* @__PURE__ */ pi.createElement("canvas", Object.assign({
    ref: u,
    role: "img",
    height: e,
    width: s
  }, f), h);
}
const ch = /* @__PURE__ */ Yn(lh);
function Io(i, t) {
  return te.register(t), /* @__PURE__ */ Yn((e, s) => /* @__PURE__ */ pi.createElement(ch, Object.assign({}, e, {
    ref: s,
    type: i
  })));
}
const hh = /* @__PURE__ */ Io("bar", Qe), dh = /* @__PURE__ */ Io("pie", Ni);
te.register(
  Xi,
  Ki,
  ii,
  Ac,
  To,
  Oo
);
const fh = {
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
}, uh = {
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
}, xh = ({ width: i = "600px", height: t = "400px", data: e = fh, options: s = uh }) => (Tt(() => () => {
  var n;
  (n = te.getChart("chartCanvasId")) == null || n.destroy();
}, []), /* @__PURE__ */ si.jsx("div", { style: { width: i, height: t }, children: /* @__PURE__ */ si.jsx(hh, { data: e, options: s }) }));
te.register(
  ve,
  To,
  Oo
);
const gh = {
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
}, ph = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    tooltip: {
      enabled: !0
    }
  }
}, yh = ({ width: i = "400px", height: t = "600px", data: e = gh, options: s = ph }) => (Tt(() => () => {
  var n;
  (n = te.getChart("chartCanvasId")) == null || n.destroy();
}, []), /* @__PURE__ */ si.jsxs("div", { style: { width: i, height: t }, children: [
  " ",
  /* @__PURE__ */ si.jsx(dh, { data: e, options: s })
] }));
export {
  xh as ReactBarChart,
  yh as ReactPieChart
};
