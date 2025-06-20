var pr = Object.defineProperty;
var mr = (i, t, e) => t in i ? pr(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var L = (i, t, e) => mr(i, typeof t != "symbol" ? t + "" : t, e);
function br(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Je = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jn;
function _r() {
  if (jn) return me;
  jn = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(n, s, o) {
    var r = null;
    if (o !== void 0 && (r = "" + o), s.key !== void 0 && (r = "" + s.key), "key" in s) {
      o = {};
      for (var a in s)
        a !== "key" && (o[a] = s[a]);
    } else o = s;
    return s = o.ref, {
      $$typeof: i,
      type: n,
      key: r,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return me.Fragment = t, me.jsx = e, me.jsxs = e, me;
}
var be = {}, ti = { exports: {} }, $ = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nn;
function yr() {
  if (Nn) return $;
  Nn = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), e = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), r = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), u = Symbol.iterator;
  function d(g) {
    return g === null || typeof g != "object" ? null : (g = u && g[u] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var p = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, m = Object.assign, b = {};
  function _(g, v, E) {
    this.props = g, this.context = v, this.refs = b, this.updater = E || p;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(g, v) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, v, "setState");
  }, _.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function x() {
  }
  x.prototype = _.prototype;
  function k(g, v, E) {
    this.props = g, this.context = v, this.refs = b, this.updater = E || p;
  }
  var S = k.prototype = new x();
  S.constructor = k, m(S, _.prototype), S.isPureReactComponent = !0;
  var M = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, C = Object.prototype.hasOwnProperty;
  function A(g, v, E, P, F, H) {
    return E = H.ref, {
      $$typeof: i,
      type: g,
      key: v,
      ref: E !== void 0 ? E : null,
      props: H
    };
  }
  function T(g, v) {
    return A(
      g.type,
      v,
      void 0,
      void 0,
      void 0,
      g.props
    );
  }
  function I(g) {
    return typeof g == "object" && g !== null && g.$$typeof === i;
  }
  function N(g) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(E) {
      return v[E];
    });
  }
  var D = /\/+/g;
  function B(g, v) {
    return typeof g == "object" && g !== null && g.key != null ? N("" + g.key) : v.toString(36);
  }
  function it() {
  }
  function st(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(it, it) : (g.status = "pending", g.then(
          function(v) {
            g.status === "pending" && (g.status = "fulfilled", g.value = v);
          },
          function(v) {
            g.status === "pending" && (g.status = "rejected", g.reason = v);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function W(g, v, E, P, F) {
    var H = typeof g;
    (H === "undefined" || H === "boolean") && (g = null);
    var j = !1;
    if (g === null) j = !0;
    else
      switch (H) {
        case "bigint":
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case i:
            case t:
              j = !0;
              break;
            case h:
              return j = g._init, W(
                j(g._payload),
                v,
                E,
                P,
                F
              );
          }
      }
    if (j)
      return F = F(g), j = P === "" ? "." + B(g, 0) : P, M(F) ? (E = "", j != null && (E = j.replace(D, "$&/") + "/"), W(F, v, E, "", function(xt) {
        return xt;
      })) : F != null && (I(F) && (F = T(
        F,
        E + (F.key == null || g && g.key === F.key ? "" : ("" + F.key).replace(
          D,
          "$&/"
        ) + "/") + j
      )), v.push(F)), 1;
    j = 0;
    var mt = P === "" ? "." : P + ":";
    if (M(g))
      for (var V = 0; V < g.length; V++)
        P = g[V], H = mt + B(P, V), j += W(
          P,
          v,
          E,
          H,
          F
        );
    else if (V = d(g), typeof V == "function")
      for (g = V.call(g), V = 0; !(P = g.next()).done; )
        P = P.value, H = mt + B(P, V++), j += W(
          P,
          v,
          E,
          H,
          F
        );
    else if (H === "object") {
      if (typeof g.then == "function")
        return W(
          st(g),
          v,
          E,
          P,
          F
        );
      throw v = String(g), Error(
        "Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return j;
  }
  function q(g, v, E) {
    if (g == null) return g;
    var P = [], F = 0;
    return W(g, P, "", "", function(H) {
      return v.call(E, H, F++);
    }), P;
  }
  function J(g) {
    if (g._status === -1) {
      var v = g._result;
      v = v(), v.then(
        function(E) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = E);
        },
        function(E) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = E);
        }
      ), g._status === -1 && (g._status = 0, g._result = v);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ht = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var v = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(v)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function ot() {
  }
  return $.Children = {
    map: q,
    forEach: function(g, v, E) {
      q(
        g,
        function() {
          v.apply(this, arguments);
        },
        E
      );
    },
    count: function(g) {
      var v = 0;
      return q(g, function() {
        v++;
      }), v;
    },
    toArray: function(g) {
      return q(g, function(v) {
        return v;
      }) || [];
    },
    only: function(g) {
      if (!I(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  }, $.Component = _, $.Fragment = e, $.Profiler = s, $.PureComponent = k, $.StrictMode = n, $.Suspense = l, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return w.H.useMemoCache(g);
    }
  }, $.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, $.cloneElement = function(g, v, E) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var P = m({}, g.props), F = g.key, H = void 0;
    if (v != null)
      for (j in v.ref !== void 0 && (H = void 0), v.key !== void 0 && (F = "" + v.key), v)
        !C.call(v, j) || j === "key" || j === "__self" || j === "__source" || j === "ref" && v.ref === void 0 || (P[j] = v[j]);
    var j = arguments.length - 2;
    if (j === 1) P.children = E;
    else if (1 < j) {
      for (var mt = Array(j), V = 0; V < j; V++)
        mt[V] = arguments[V + 2];
      P.children = mt;
    }
    return A(g.type, F, void 0, void 0, H, P);
  }, $.createContext = function(g) {
    return g = {
      $$typeof: r,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: o,
      _context: g
    }, g;
  }, $.createElement = function(g, v, E) {
    var P, F = {}, H = null;
    if (v != null)
      for (P in v.key !== void 0 && (H = "" + v.key), v)
        C.call(v, P) && P !== "key" && P !== "__self" && P !== "__source" && (F[P] = v[P]);
    var j = arguments.length - 2;
    if (j === 1) F.children = E;
    else if (1 < j) {
      for (var mt = Array(j), V = 0; V < j; V++)
        mt[V] = arguments[V + 2];
      F.children = mt;
    }
    if (g && g.defaultProps)
      for (P in j = g.defaultProps, j)
        F[P] === void 0 && (F[P] = j[P]);
    return A(g, H, void 0, void 0, null, F);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(g) {
    return { $$typeof: a, render: g };
  }, $.isValidElement = I, $.lazy = function(g) {
    return {
      $$typeof: h,
      _payload: { _status: -1, _result: g },
      _init: J
    };
  }, $.memo = function(g, v) {
    return {
      $$typeof: c,
      type: g,
      compare: v === void 0 ? null : v
    };
  }, $.startTransition = function(g) {
    var v = w.T, E = {};
    w.T = E;
    try {
      var P = g(), F = w.S;
      F !== null && F(E, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(ot, ht);
    } catch (H) {
      ht(H);
    } finally {
      w.T = v;
    }
  }, $.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, $.use = function(g) {
    return w.H.use(g);
  }, $.useActionState = function(g, v, E) {
    return w.H.useActionState(g, v, E);
  }, $.useCallback = function(g, v) {
    return w.H.useCallback(g, v);
  }, $.useContext = function(g) {
    return w.H.useContext(g);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(g, v) {
    return w.H.useDeferredValue(g, v);
  }, $.useEffect = function(g, v, E) {
    var P = w.H;
    if (typeof E == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return P.useEffect(g, v);
  }, $.useId = function() {
    return w.H.useId();
  }, $.useImperativeHandle = function(g, v, E) {
    return w.H.useImperativeHandle(g, v, E);
  }, $.useInsertionEffect = function(g, v) {
    return w.H.useInsertionEffect(g, v);
  }, $.useLayoutEffect = function(g, v) {
    return w.H.useLayoutEffect(g, v);
  }, $.useMemo = function(g, v) {
    return w.H.useMemo(g, v);
  }, $.useOptimistic = function(g, v) {
    return w.H.useOptimistic(g, v);
  }, $.useReducer = function(g, v, E) {
    return w.H.useReducer(g, v, E);
  }, $.useRef = function(g) {
    return w.H.useRef(g);
  }, $.useState = function(g) {
    return w.H.useState(g);
  }, $.useSyncExternalStore = function(g, v, E) {
    return w.H.useSyncExternalStore(
      g,
      v,
      E
    );
  }, $.useTransition = function() {
    return w.H.useTransition();
  }, $.version = "19.1.0", $;
}
var Se = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Se.exports;
var Bn;
function xr() {
  return Bn || (Bn = 1, function(i, t) {
    process.env.NODE_ENV !== "production" && function() {
      function e(f, y) {
        Object.defineProperty(o.prototype, f, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              y[0],
              y[1]
            );
          }
        });
      }
      function n(f) {
        return f === null || typeof f != "object" ? null : (f = Xe && f[Xe] || f["@@iterator"], typeof f == "function" ? f : null);
      }
      function s(f, y) {
        f = (f = f.constructor) && (f.displayName || f.name) || "ReactClass";
        var R = f + "." + y;
        Mn[R] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          y,
          f
        ), Mn[R] = !0);
      }
      function o(f, y, R) {
        this.props = f, this.context = y, this.refs = Li, this.updater = R || Rn;
      }
      function r() {
      }
      function a(f, y, R) {
        this.props = f, this.context = y, this.refs = Li, this.updater = R || Rn;
      }
      function l(f) {
        return "" + f;
      }
      function c(f) {
        try {
          l(f);
          var y = !1;
        } catch {
          y = !0;
        }
        if (y) {
          y = console;
          var R = y.error, O = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
          return R.call(
            y,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            O
          ), l(f);
        }
      }
      function h(f) {
        if (f == null) return null;
        if (typeof f == "function")
          return f.$$typeof === hr ? null : f.displayName || f.name || null;
        if (typeof f == "string") return f;
        switch (f) {
          case g:
            return "Fragment";
          case E:
            return "Profiler";
          case v:
            return "StrictMode";
          case j:
            return "Suspense";
          case mt:
            return "SuspenseList";
          case pe:
            return "Activity";
        }
        if (typeof f == "object")
          switch (typeof f.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), f.$$typeof) {
            case ot:
              return "Portal";
            case F:
              return (f.displayName || "Context") + ".Provider";
            case P:
              return (f._context.displayName || "Context") + ".Consumer";
            case H:
              var y = f.render;
              return f = f.displayName, f || (f = y.displayName || y.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
            case V:
              return y = f.displayName || null, y !== null ? y : h(f.type) || "Memo";
            case xt:
              y = f._payload, f = f._init;
              try {
                return h(f(y));
              } catch {
              }
          }
        return null;
      }
      function u(f) {
        if (f === g) return "<>";
        if (typeof f == "object" && f !== null && f.$$typeof === xt)
          return "<...>";
        try {
          var y = h(f);
          return y ? "<" + y + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function d() {
        var f = K.A;
        return f === null ? null : f.getOwner();
      }
      function p() {
        return Error("react-stack-top-frame");
      }
      function m(f) {
        if (Ke.call(f, "key")) {
          var y = Object.getOwnPropertyDescriptor(f, "key").get;
          if (y && y.isReactWarning) return !1;
        }
        return f.key !== void 0;
      }
      function b(f, y) {
        function R() {
          Cn || (Cn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            y
          ));
        }
        R.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: R,
          configurable: !0
        });
      }
      function _() {
        var f = h(this.type);
        return An[f] || (An[f] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), f = this.props.ref, f !== void 0 ? f : null;
      }
      function x(f, y, R, O, z, G, Y, et) {
        return R = G.ref, f = {
          $$typeof: ht,
          type: f,
          key: y,
          props: G,
          _owner: z
        }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(f, "ref", {
          enumerable: !1,
          get: _
        }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(f, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(f, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Y
        }), Object.defineProperty(f, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: et
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      }
      function k(f, y) {
        return y = x(
          f.type,
          y,
          void 0,
          void 0,
          f._owner,
          f.props,
          f._debugStack,
          f._debugTask
        ), f._store && (y._store.validated = f._store.validated), y;
      }
      function S(f) {
        return typeof f == "object" && f !== null && f.$$typeof === ht;
      }
      function M(f) {
        var y = { "=": "=0", ":": "=2" };
        return "$" + f.replace(/[=:]/g, function(R) {
          return y[R];
        });
      }
      function w(f, y) {
        return typeof f == "object" && f !== null && f.key != null ? (c(f.key), M("" + f.key)) : y.toString(36);
      }
      function C() {
      }
      function A(f) {
        switch (f.status) {
          case "fulfilled":
            return f.value;
          case "rejected":
            throw f.reason;
          default:
            switch (typeof f.status == "string" ? f.then(C, C) : (f.status = "pending", f.then(
              function(y) {
                f.status === "pending" && (f.status = "fulfilled", f.value = y);
              },
              function(y) {
                f.status === "pending" && (f.status = "rejected", f.reason = y);
              }
            )), f.status) {
              case "fulfilled":
                return f.value;
              case "rejected":
                throw f.reason;
            }
        }
        throw f;
      }
      function T(f, y, R, O, z) {
        var G = typeof f;
        (G === "undefined" || G === "boolean") && (f = null);
        var Y = !1;
        if (f === null) Y = !0;
        else
          switch (G) {
            case "bigint":
            case "string":
            case "number":
              Y = !0;
              break;
            case "object":
              switch (f.$$typeof) {
                case ht:
                case ot:
                  Y = !0;
                  break;
                case xt:
                  return Y = f._init, T(
                    Y(f._payload),
                    y,
                    R,
                    O,
                    z
                  );
              }
          }
        if (Y) {
          Y = f, z = z(Y);
          var et = O === "" ? "." + w(Y, 0) : O;
          return Tn(z) ? (R = "", et != null && (R = et.replace(Ln, "$&/") + "/"), T(z, y, R, "", function(Nt) {
            return Nt;
          })) : z != null && (S(z) && (z.key != null && (Y && Y.key === z.key || c(z.key)), R = k(
            z,
            R + (z.key == null || Y && Y.key === z.key ? "" : ("" + z.key).replace(
              Ln,
              "$&/"
            ) + "/") + et
          ), O !== "" && Y != null && S(Y) && Y.key == null && Y._store && !Y._store.validated && (R._store.validated = 2), z = R), y.push(z)), 1;
        }
        if (Y = 0, et = O === "" ? "." : O + ":", Tn(f))
          for (var X = 0; X < f.length; X++)
            O = f[X], G = et + w(O, X), Y += T(
              O,
              y,
              R,
              G,
              z
            );
        else if (X = n(f), typeof X == "function")
          for (X === f.entries && (Dn || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Dn = !0), f = X.call(f), X = 0; !(O = f.next()).done; )
            O = O.value, G = et + w(O, X++), Y += T(
              O,
              y,
              R,
              G,
              z
            );
        else if (G === "object") {
          if (typeof f.then == "function")
            return T(
              A(f),
              y,
              R,
              O,
              z
            );
          throw y = String(f), Error(
            "Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Y;
      }
      function I(f, y, R) {
        if (f == null) return f;
        var O = [], z = 0;
        return T(f, O, "", "", function(G) {
          return y.call(R, G, z++);
        }), O;
      }
      function N(f) {
        if (f._status === -1) {
          var y = f._result;
          y = y(), y.then(
            function(R) {
              (f._status === 0 || f._status === -1) && (f._status = 1, f._result = R);
            },
            function(R) {
              (f._status === 0 || f._status === -1) && (f._status = 2, f._result = R);
            }
          ), f._status === -1 && (f._status = 0, f._result = y);
        }
        if (f._status === 1)
          return y = f._result, y === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            y
          ), "default" in y || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            y
          ), y.default;
        throw f._result;
      }
      function D() {
        var f = K.H;
        return f === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), f;
      }
      function B() {
      }
      function it(f) {
        if (Ge === null)
          try {
            var y = ("require" + Math.random()).slice(0, 7);
            Ge = (i && i[y]).call(
              i,
              "timers"
            ).setImmediate;
          } catch {
            Ge = function(O) {
              zn === !1 && (zn = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var z = new MessageChannel();
              z.port1.onmessage = O, z.port2.postMessage(void 0);
            };
          }
        return Ge(f);
      }
      function st(f) {
        return 1 < f.length && typeof AggregateError == "function" ? new AggregateError(f) : f[0];
      }
      function W(f, y) {
        y !== Qe - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Qe = y;
      }
      function q(f, y, R) {
        var O = K.actQueue;
        if (O !== null)
          if (O.length !== 0)
            try {
              J(O), it(function() {
                return q(f, y, R);
              });
              return;
            } catch (z) {
              K.thrownErrors.push(z);
            }
          else K.actQueue = null;
        0 < K.thrownErrors.length ? (O = st(K.thrownErrors), K.thrownErrors.length = 0, R(O)) : y(f);
      }
      function J(f) {
        if (!Ii) {
          Ii = !0;
          var y = 0;
          try {
            for (; y < f.length; y++) {
              var R = f[y];
              do {
                K.didUsePromise = !1;
                var O = R(!1);
                if (O !== null) {
                  if (K.didUsePromise) {
                    f[y] = R, f.splice(0, y);
                    return;
                  }
                  R = O;
                } else break;
              } while (!0);
            }
            f.length = 0;
          } catch (z) {
            f.splice(0, y + 1), K.thrownErrors.push(z);
          } finally {
            Ii = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ht = Symbol.for("react.transitional.element"), ot = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), F = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), xt = Symbol.for("react.lazy"), pe = Symbol.for("react.activity"), Xe = Symbol.iterator, Mn = {}, Rn = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(f) {
          s(f, "forceUpdate");
        },
        enqueueReplaceState: function(f) {
          s(f, "replaceState");
        },
        enqueueSetState: function(f) {
          s(f, "setState");
        }
      }, En = Object.assign, Li = {};
      Object.freeze(Li), o.prototype.isReactComponent = {}, o.prototype.setState = function(f, y) {
        if (typeof f != "object" && typeof f != "function" && f != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, f, y, "setState");
      }, o.prototype.forceUpdate = function(f) {
        this.updater.enqueueForceUpdate(this, f, "forceUpdate");
      };
      var kt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, qe;
      for (qe in kt)
        kt.hasOwnProperty(qe) && e(qe, kt[qe]);
      r.prototype = o.prototype, kt = a.prototype = new r(), kt.constructor = a, En(kt, o.prototype), kt.isPureReactComponent = !0;
      var Tn = Array.isArray, hr = Symbol.for("react.client.reference"), K = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Ke = Object.prototype.hasOwnProperty, On = console.createTask ? console.createTask : function() {
        return null;
      };
      kt = {
        "react-stack-bottom-frame": function(f) {
          return f();
        }
      };
      var Cn, Pn, An = {}, ur = kt["react-stack-bottom-frame"].bind(kt, p)(), fr = On(u(p)), Dn = !1, Ln = /\/+/g, In = typeof reportError == "function" ? reportError : function(f) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var y = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof f == "object" && f !== null && typeof f.message == "string" ? String(f.message) : String(f),
            error: f
          });
          if (!window.dispatchEvent(y)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", f);
          return;
        }
        console.error(f);
      }, zn = !1, Ge = null, Qe = 0, Ze = !1, Ii = !1, Fn = typeof queueMicrotask == "function" ? function(f) {
        queueMicrotask(function() {
          return queueMicrotask(f);
        });
      } : it;
      kt = Object.freeze({
        __proto__: null,
        c: function(f) {
          return D().useMemoCache(f);
        }
      }), t.Children = {
        map: I,
        forEach: function(f, y, R) {
          I(
            f,
            function() {
              y.apply(this, arguments);
            },
            R
          );
        },
        count: function(f) {
          var y = 0;
          return I(f, function() {
            y++;
          }), y;
        },
        toArray: function(f) {
          return I(f, function(y) {
            return y;
          }) || [];
        },
        only: function(f) {
          if (!S(f))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return f;
        }
      }, t.Component = o, t.Fragment = g, t.Profiler = E, t.PureComponent = a, t.StrictMode = v, t.Suspense = j, t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, t.__COMPILER_RUNTIME = kt, t.act = function(f) {
        var y = K.actQueue, R = Qe;
        Qe++;
        var O = K.actQueue = y !== null ? y : [], z = !1;
        try {
          var G = f();
        } catch (X) {
          K.thrownErrors.push(X);
        }
        if (0 < K.thrownErrors.length)
          throw W(y, R), f = st(K.thrownErrors), K.thrownErrors.length = 0, f;
        if (G !== null && typeof G == "object" && typeof G.then == "function") {
          var Y = G;
          return Fn(function() {
            z || Ze || (Ze = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(X, Nt) {
              z = !0, Y.then(
                function(oe) {
                  if (W(y, R), R === 0) {
                    try {
                      J(O), it(function() {
                        return q(
                          oe,
                          X,
                          Nt
                        );
                      });
                    } catch (gr) {
                      K.thrownErrors.push(gr);
                    }
                    if (0 < K.thrownErrors.length) {
                      var dr = st(
                        K.thrownErrors
                      );
                      K.thrownErrors.length = 0, Nt(dr);
                    }
                  } else X(oe);
                },
                function(oe) {
                  W(y, R), 0 < K.thrownErrors.length && (oe = st(
                    K.thrownErrors
                  ), K.thrownErrors.length = 0), Nt(oe);
                }
              );
            }
          };
        }
        var et = G;
        if (W(y, R), R === 0 && (J(O), O.length !== 0 && Fn(function() {
          z || Ze || (Ze = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), K.actQueue = null), 0 < K.thrownErrors.length)
          throw f = st(K.thrownErrors), K.thrownErrors.length = 0, f;
        return {
          then: function(X, Nt) {
            z = !0, R === 0 ? (K.actQueue = O, it(function() {
              return q(
                et,
                X,
                Nt
              );
            })) : X(et);
          }
        };
      }, t.cache = function(f) {
        return function() {
          return f.apply(null, arguments);
        };
      }, t.captureOwnerStack = function() {
        var f = K.getCurrentStack;
        return f === null ? null : f();
      }, t.cloneElement = function(f, y, R) {
        if (f == null)
          throw Error(
            "The argument must be a React element, but you passed " + f + "."
          );
        var O = En({}, f.props), z = f.key, G = f._owner;
        if (y != null) {
          var Y;
          t: {
            if (Ke.call(y, "ref") && (Y = Object.getOwnPropertyDescriptor(
              y,
              "ref"
            ).get) && Y.isReactWarning) {
              Y = !1;
              break t;
            }
            Y = y.ref !== void 0;
          }
          Y && (G = d()), m(y) && (c(y.key), z = "" + y.key);
          for (et in y)
            !Ke.call(y, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && y.ref === void 0 || (O[et] = y[et]);
        }
        var et = arguments.length - 2;
        if (et === 1) O.children = R;
        else if (1 < et) {
          Y = Array(et);
          for (var X = 0; X < et; X++)
            Y[X] = arguments[X + 2];
          O.children = Y;
        }
        for (O = x(
          f.type,
          z,
          void 0,
          void 0,
          G,
          O,
          f._debugStack,
          f._debugTask
        ), z = 2; z < arguments.length; z++)
          G = arguments[z], S(G) && G._store && (G._store.validated = 1);
        return O;
      }, t.createContext = function(f) {
        return f = {
          $$typeof: F,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, f.Provider = f, f.Consumer = {
          $$typeof: P,
          _context: f
        }, f._currentRenderer = null, f._currentRenderer2 = null, f;
      }, t.createElement = function(f, y, R) {
        for (var O = 2; O < arguments.length; O++) {
          var z = arguments[O];
          S(z) && z._store && (z._store.validated = 1);
        }
        if (O = {}, z = null, y != null)
          for (X in Pn || !("__self" in y) || "key" in y || (Pn = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), m(y) && (c(y.key), z = "" + y.key), y)
            Ke.call(y, X) && X !== "key" && X !== "__self" && X !== "__source" && (O[X] = y[X]);
        var G = arguments.length - 2;
        if (G === 1) O.children = R;
        else if (1 < G) {
          for (var Y = Array(G), et = 0; et < G; et++)
            Y[et] = arguments[et + 2];
          Object.freeze && Object.freeze(Y), O.children = Y;
        }
        if (f && f.defaultProps)
          for (X in G = f.defaultProps, G)
            O[X] === void 0 && (O[X] = G[X]);
        z && b(
          O,
          typeof f == "function" ? f.displayName || f.name || "Unknown" : f
        );
        var X = 1e4 > K.recentlyCreatedOwnerStacks++;
        return x(
          f,
          z,
          void 0,
          void 0,
          d(),
          O,
          X ? Error("react-stack-top-frame") : ur,
          X ? On(u(f)) : fr
        );
      }, t.createRef = function() {
        var f = { current: null };
        return Object.seal(f), f;
      }, t.forwardRef = function(f) {
        f != null && f.$$typeof === V ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof f != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          f === null ? "null" : typeof f
        ) : f.length !== 0 && f.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          f.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), f != null && f.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var y = { $$typeof: H, render: f }, R;
        return Object.defineProperty(y, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return R;
          },
          set: function(O) {
            R = O, f.name || f.displayName || (Object.defineProperty(f, "name", { value: O }), f.displayName = O);
          }
        }), y;
      }, t.isValidElement = S, t.lazy = function(f) {
        return {
          $$typeof: xt,
          _payload: { _status: -1, _result: f },
          _init: N
        };
      }, t.memo = function(f, y) {
        f == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          f === null ? "null" : typeof f
        ), y = {
          $$typeof: V,
          type: f,
          compare: y === void 0 ? null : y
        };
        var R;
        return Object.defineProperty(y, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return R;
          },
          set: function(O) {
            R = O, f.name || f.displayName || (Object.defineProperty(f, "name", { value: O }), f.displayName = O);
          }
        }), y;
      }, t.startTransition = function(f) {
        var y = K.T, R = {};
        K.T = R, R._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var O = f(), z = K.S;
          z !== null && z(R, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(B, In);
        } catch (G) {
          In(G);
        } finally {
          y === null && R._updatedFibers && (f = R._updatedFibers.size, R._updatedFibers.clear(), 10 < f && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), K.T = y;
        }
      }, t.unstable_useCacheRefresh = function() {
        return D().useCacheRefresh();
      }, t.use = function(f) {
        return D().use(f);
      }, t.useActionState = function(f, y, R) {
        return D().useActionState(
          f,
          y,
          R
        );
      }, t.useCallback = function(f, y) {
        return D().useCallback(f, y);
      }, t.useContext = function(f) {
        var y = D();
        return f.$$typeof === P && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), y.useContext(f);
      }, t.useDebugValue = function(f, y) {
        return D().useDebugValue(f, y);
      }, t.useDeferredValue = function(f, y) {
        return D().useDeferredValue(f, y);
      }, t.useEffect = function(f, y, R) {
        f == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var O = D();
        if (typeof R == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return O.useEffect(f, y);
      }, t.useId = function() {
        return D().useId();
      }, t.useImperativeHandle = function(f, y, R) {
        return D().useImperativeHandle(f, y, R);
      }, t.useInsertionEffect = function(f, y) {
        return f == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), D().useInsertionEffect(f, y);
      }, t.useLayoutEffect = function(f, y) {
        return f == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), D().useLayoutEffect(f, y);
      }, t.useMemo = function(f, y) {
        return D().useMemo(f, y);
      }, t.useOptimistic = function(f, y) {
        return D().useOptimistic(f, y);
      }, t.useReducer = function(f, y, R) {
        return D().useReducer(f, y, R);
      }, t.useRef = function(f) {
        return D().useRef(f);
      }, t.useState = function(f) {
        return D().useState(f);
      }, t.useSyncExternalStore = function(f, y, R) {
        return D().useSyncExternalStore(
          f,
          y,
          R
        );
      }, t.useTransition = function() {
        return D().useTransition();
      }, t.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Se, Se.exports)), Se.exports;
}
var Wn;
function ro() {
  return Wn || (Wn = 1, process.env.NODE_ENV === "production" ? ti.exports = yr() : ti.exports = xr()), ti.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function vr() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    function i(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === N ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case b:
          return "Fragment";
        case x:
          return "Profiler";
        case _:
          return "StrictMode";
        case w:
          return "Suspense";
        case C:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case m:
            return "Portal";
          case S:
            return (g.displayName || "Context") + ".Provider";
          case k:
            return (g._context.displayName || "Context") + ".Consumer";
          case M:
            var v = g.render;
            return g = g.displayName, g || (g = v.displayName || v.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case A:
            return v = g.displayName || null, v !== null ? v : i(g.type) || "Memo";
          case T:
            v = g._payload, g = g._init;
            try {
              return i(g(v));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function e(g) {
      try {
        t(g);
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var E = v.error, P = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return E.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          P
        ), t(g);
      }
    }
    function n(g) {
      if (g === b) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === T)
        return "<...>";
      try {
        var v = i(g);
        return v ? "<" + v + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var g = D.A;
      return g === null ? null : g.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function r(g) {
      if (B.call(g, "key")) {
        var v = Object.getOwnPropertyDescriptor(g, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function a(g, v) {
      function E() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: E,
        configurable: !0
      });
    }
    function l() {
      var g = i(this.type);
      return q[g] || (q[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function c(g, v, E, P, F, H, j, mt) {
      return E = H.ref, g = {
        $$typeof: p,
        type: g,
        key: v,
        props: H,
        _owner: F
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: mt
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function h(g, v, E, P, F, H, j, mt) {
      var V = v.children;
      if (V !== void 0)
        if (P)
          if (it(V)) {
            for (P = 0; P < V.length; P++)
              u(V[P]);
            Object.freeze && Object.freeze(V);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else u(V);
      if (B.call(v, "key")) {
        V = i(g);
        var xt = Object.keys(v).filter(function(Xe) {
          return Xe !== "key";
        });
        P = 0 < xt.length ? "{key: someKey, " + xt.join(": ..., ") + ": ...}" : "{key: someKey}", ot[V + P] || (xt = 0 < xt.length ? "{" + xt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          P,
          V,
          xt,
          V
        ), ot[V + P] = !0);
      }
      if (V = null, E !== void 0 && (e(E), V = "" + E), r(v) && (e(v.key), V = "" + v.key), "key" in v) {
        E = {};
        for (var pe in v)
          pe !== "key" && (E[pe] = v[pe]);
      } else E = v;
      return V && a(
        E,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), c(
        g,
        V,
        H,
        F,
        s(),
        E,
        j,
        mt
      );
    }
    function u(g) {
      typeof g == "object" && g !== null && g.$$typeof === p && g._store && (g._store.validated = 1);
    }
    var d = ro(), p = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), S = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), D = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, it = Array.isArray, st = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(g) {
        return g();
      }
    };
    var W, q = {}, J = d["react-stack-bottom-frame"].bind(
      d,
      o
    )(), ht = st(n(o)), ot = {};
    be.Fragment = b, be.jsx = function(g, v, E, P, F) {
      var H = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        g,
        v,
        E,
        !1,
        P,
        F,
        H ? Error("react-stack-top-frame") : J,
        H ? st(n(g)) : ht
      );
    }, be.jsxs = function(g, v, E, P, F) {
      var H = 1e4 > D.recentlyCreatedOwnerStacks++;
      return h(
        g,
        v,
        E,
        !0,
        P,
        F,
        H ? Error("react-stack-top-frame") : J,
        H ? st(n(g)) : ht
      );
    };
  }()), be;
}
var $n;
function wr() {
  return $n || ($n = 1, process.env.NODE_ENV === "production" ? Je.exports = _r() : Je.exports = vr()), Je.exports;
}
var je = wr(), vt = ro();
const ao = /* @__PURE__ */ br(vt);
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function Ue(i) {
  return i + 0.5 | 0;
}
const Ht = (i, t, e) => Math.max(Math.min(i, e), t);
function Me(i) {
  return Ht(Ue(i * 2.55), 0, 255);
}
function Yt(i) {
  return Ht(Ue(i * 255), 0, 255);
}
function zt(i) {
  return Ht(Ue(i / 2.55) / 100, 0, 1);
}
function Vn(i) {
  return Ht(Ue(i * 100), 0, 100);
}
const St = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Ki = [..."0123456789ABCDEF"], kr = (i) => Ki[i & 15], Sr = (i) => Ki[(i & 240) >> 4] + Ki[i & 15], ei = (i) => (i & 240) >> 4 === (i & 15), Mr = (i) => ei(i.r) && ei(i.g) && ei(i.b) && ei(i.a);
function Rr(i) {
  var t = i.length, e;
  return i[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & St[i[1]] * 17,
    g: 255 & St[i[2]] * 17,
    b: 255 & St[i[3]] * 17,
    a: t === 5 ? St[i[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: St[i[1]] << 4 | St[i[2]],
    g: St[i[3]] << 4 | St[i[4]],
    b: St[i[5]] << 4 | St[i[6]],
    a: t === 9 ? St[i[7]] << 4 | St[i[8]] : 255
  })), e;
}
const Er = (i, t) => i < 255 ? t(i) : "";
function Tr(i) {
  var t = Mr(i) ? kr : Sr;
  return i ? "#" + t(i.r) + t(i.g) + t(i.b) + Er(i.a, t) : void 0;
}
const Or = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function lo(i, t, e) {
  const n = t * Math.min(e, 1 - e), s = (o, r = (o + i / 30) % 12) => e - n * Math.max(Math.min(r - 3, 9 - r, 1), -1);
  return [s(0), s(8), s(4)];
}
function Cr(i, t, e) {
  const n = (s, o = (s + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [n(5), n(3), n(1)];
}
function Pr(i, t, e) {
  const n = lo(i, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    n[s] *= 1 - t - e, n[s] += t;
  return n;
}
function Ar(i, t, e, n, s) {
  return i === s ? (t - e) / n + (t < e ? 6 : 0) : t === s ? (e - i) / n + 2 : (i - t) / n + 4;
}
function rn(i) {
  const e = i.r / 255, n = i.g / 255, s = i.b / 255, o = Math.max(e, n, s), r = Math.min(e, n, s), a = (o + r) / 2;
  let l, c, h;
  return o !== r && (h = o - r, c = a > 0.5 ? h / (2 - o - r) : h / (o + r), l = Ar(e, n, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, a];
}
function an(i, t, e, n) {
  return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, n)).map(Yt);
}
function ln(i, t, e) {
  return an(lo, i, t, e);
}
function Dr(i, t, e) {
  return an(Pr, i, t, e);
}
function Lr(i, t, e) {
  return an(Cr, i, t, e);
}
function co(i) {
  return (i % 360 + 360) % 360;
}
function Ir(i) {
  const t = Or.exec(i);
  let e = 255, n;
  if (!t)
    return;
  t[5] !== n && (e = t[6] ? Me(+t[5]) : Yt(+t[5]));
  const s = co(+t[2]), o = +t[3] / 100, r = +t[4] / 100;
  return t[1] === "hwb" ? n = Dr(s, o, r) : t[1] === "hsv" ? n = Lr(s, o, r) : n = ln(s, o, r), {
    r: n[0],
    g: n[1],
    b: n[2],
    a: e
  };
}
function zr(i, t) {
  var e = rn(i);
  e[0] = co(e[0] + t), e = ln(e), i.r = e[0], i.g = e[1], i.b = e[2];
}
function Fr(i) {
  if (!i)
    return;
  const t = rn(i), e = t[0], n = Vn(t[1]), s = Vn(t[2]);
  return i.a < 255 ? `hsla(${e}, ${n}%, ${s}%, ${zt(i.a)})` : `hsl(${e}, ${n}%, ${s}%)`;
}
const Yn = {
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
}, Un = {
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
function jr() {
  const i = {}, t = Object.keys(Un), e = Object.keys(Yn);
  let n, s, o, r, a;
  for (n = 0; n < t.length; n++) {
    for (r = a = t[n], s = 0; s < e.length; s++)
      o = e[s], a = a.replace(o, Yn[o]);
    o = parseInt(Un[r], 16), i[a] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return i;
}
let ii;
function Nr(i) {
  ii || (ii = jr(), ii.transparent = [0, 0, 0, 0]);
  const t = ii[i.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const Br = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Wr(i) {
  const t = Br.exec(i);
  let e = 255, n, s, o;
  if (t) {
    if (t[7] !== n) {
      const r = +t[7];
      e = t[8] ? Me(r) : Ht(r * 255, 0, 255);
    }
    return n = +t[1], s = +t[3], o = +t[5], n = 255 & (t[2] ? Me(n) : Ht(n, 0, 255)), s = 255 & (t[4] ? Me(s) : Ht(s, 0, 255)), o = 255 & (t[6] ? Me(o) : Ht(o, 0, 255)), {
      r: n,
      g: s,
      b: o,
      a: e
    };
  }
}
function Hr(i) {
  return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${zt(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`);
}
const zi = (i) => i <= 31308e-7 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055, re = (i) => i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
function $r(i, t, e) {
  const n = re(zt(i.r)), s = re(zt(i.g)), o = re(zt(i.b));
  return {
    r: Yt(zi(n + e * (re(zt(t.r)) - n))),
    g: Yt(zi(s + e * (re(zt(t.g)) - s))),
    b: Yt(zi(o + e * (re(zt(t.b)) - o))),
    a: i.a + e * (t.a - i.a)
  };
}
function ni(i, t, e) {
  if (i) {
    let n = rn(i);
    n[t] = Math.max(0, Math.min(n[t] + n[t] * e, t === 0 ? 360 : 1)), n = ln(n), i.r = n[0], i.g = n[1], i.b = n[2];
  }
}
function ho(i, t) {
  return i && Object.assign(t || {}, i);
}
function Xn(i) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(i) ? i.length >= 3 && (t = { r: i[0], g: i[1], b: i[2], a: 255 }, i.length > 3 && (t.a = Yt(i[3]))) : (t = ho(i, { r: 0, g: 0, b: 0, a: 1 }), t.a = Yt(t.a)), t;
}
function Vr(i) {
  return i.charAt(0) === "r" ? Wr(i) : Ir(i);
}
class Ne {
  constructor(t) {
    if (t instanceof Ne)
      return t;
    const e = typeof t;
    let n;
    e === "object" ? n = Xn(t) : e === "string" && (n = Rr(t) || Nr(t) || Vr(t)), this._rgb = n, this._valid = !!n;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = ho(this._rgb);
    return t && (t.a = zt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Xn(t);
  }
  rgbString() {
    return this._valid ? Hr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Tr(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Fr(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const n = this.rgb, s = t.rgb;
      let o;
      const r = e === o ? 0.5 : e, a = 2 * r - 1, l = n.a - s.a, c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      o = 1 - c, n.r = 255 & c * n.r + o * s.r + 0.5, n.g = 255 & c * n.g + o * s.g + 0.5, n.b = 255 & c * n.b + o * s.b + 0.5, n.a = r * n.a + (1 - r) * s.a, this.rgb = n;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = $r(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ne(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = Yt(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = Ue(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return ni(this._rgb, 2, t), this;
  }
  darken(t) {
    return ni(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ni(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ni(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return zr(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Dt() {
}
const Yr = /* @__PURE__ */ (() => {
  let i = 0;
  return () => i++;
})();
function Q(i) {
  return i == null;
}
function ut(i) {
  if (Array.isArray && Array.isArray(i))
    return !0;
  const t = Object.prototype.toString.call(i);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function Z(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function Rt(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Tt(i, t) {
  return Rt(i) ? i : t;
}
function U(i, t) {
  return typeof i > "u" ? t : i;
}
const Ur = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 : +i / t, uo = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function nt(i, t, e) {
  if (i && typeof i.call == "function")
    return i.apply(e, t);
}
function tt(i, t, e, n) {
  let s, o, r;
  if (ut(i))
    for (o = i.length, s = 0; s < o; s++)
      t.call(e, i[s], s);
  else if (Z(i))
    for (r = Object.keys(i), o = r.length, s = 0; s < o; s++)
      t.call(e, i[r[s]], r[s]);
}
function vi(i, t) {
  let e, n, s, o;
  if (!i || !t || i.length !== t.length)
    return !1;
  for (e = 0, n = i.length; e < n; ++e)
    if (s = i[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function wi(i) {
  if (ut(i))
    return i.map(wi);
  if (Z(i)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(i), n = e.length;
    let s = 0;
    for (; s < n; ++s)
      t[e[s]] = wi(i[e[s]]);
    return t;
  }
  return i;
}
function fo(i) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(i) === -1;
}
function Xr(i, t, e, n) {
  if (!fo(i))
    return;
  const s = t[i], o = e[i];
  Z(s) && Z(o) ? At(s, o, n) : t[i] = wi(o);
}
function At(i, t, e) {
  const n = ut(t) ? t : [
    t
  ], s = n.length;
  if (!Z(i))
    return i;
  e = e || {};
  const o = e.merger || Xr;
  let r;
  for (let a = 0; a < s; ++a) {
    if (r = n[a], !Z(r))
      continue;
    const l = Object.keys(r);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], i, r, e);
  }
  return i;
}
function Ce(i, t) {
  return At(i, t, {
    merger: qr
  });
}
function qr(i, t, e) {
  if (!fo(i))
    return;
  const n = t[i], s = e[i];
  Z(n) && Z(s) ? Ce(n, s) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = wi(s));
}
const qn = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (i) => i,
  // default resolvers
  x: (i) => i.x,
  y: (i) => i.y
};
function Kr(i) {
  const t = i.split("."), e = [];
  let n = "";
  for (const s of t)
    n += s, n.endsWith("\\") ? n = n.slice(0, -1) + "." : (e.push(n), n = "");
  return e;
}
function Gr(i) {
  const t = Kr(i);
  return (e) => {
    for (const n of t) {
      if (n === "")
        break;
      e = e && e[n];
    }
    return e;
  };
}
function ie(i, t) {
  return (qn[t] || (qn[t] = Gr(t)))(i);
}
function cn(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Be = (i) => typeof i < "u", Ut = (i) => typeof i == "function", Kn = (i, t) => {
  if (i.size !== t.size)
    return !1;
  for (const e of i)
    if (!t.has(e))
      return !1;
  return !0;
};
function Qr(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const ct = Math.PI, at = 2 * ct, Zr = at + ct, ki = Number.POSITIVE_INFINITY, Jr = ct / 180, ft = ct / 2, qt = ct / 4, Gn = ct * 2 / 3, go = Math.log10, Pt = Math.sign;
function Pe(i, t, e) {
  return Math.abs(i - t) < e;
}
function Qn(i) {
  const t = Math.round(i);
  i = Pe(i, t, i / 1e3) ? t : i;
  const e = Math.pow(10, Math.floor(go(i))), n = i / e;
  return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * e;
}
function ta(i) {
  const t = [], e = Math.sqrt(i);
  let n;
  for (n = 1; n < e; n++)
    i % n === 0 && (t.push(n), t.push(i / n));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function ea(i) {
  return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i);
}
function We(i) {
  return !ea(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function ia(i, t) {
  const e = Math.round(i);
  return e - t <= i && e + t >= i;
}
function na(i, t, e) {
  let n, s, o;
  for (n = 0, s = i.length; n < s; n++)
    o = i[n][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Ft(i) {
  return i * (ct / 180);
}
function sa(i) {
  return i * (180 / ct);
}
function Zn(i) {
  if (!Rt(i))
    return;
  let t = 1, e = 0;
  for (; Math.round(i * t) / t !== i; )
    t *= 10, e++;
  return e;
}
function po(i, t) {
  const e = t.x - i.x, n = t.y - i.y, s = Math.sqrt(e * e + n * n);
  let o = Math.atan2(n, e);
  return o < -0.5 * ct && (o += at), {
    angle: o,
    distance: s
  };
}
function Gi(i, t) {
  return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2));
}
function oa(i, t) {
  return (i - t + Zr) % at - ct;
}
function Wt(i) {
  return (i % at + at) % at;
}
function He(i, t, e, n) {
  const s = Wt(i), o = Wt(t), r = Wt(e), a = Wt(o - s), l = Wt(r - s), c = Wt(s - o), h = Wt(s - r);
  return s === o || s === r || n && o === r || a > l && c < h;
}
function pt(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ra(i) {
  return pt(i, -32768, 32767);
}
function $t(i, t, e, n = 1e-6) {
  return i >= Math.min(t, e) - n && i <= Math.max(t, e) + n;
}
function hn(i, t, e) {
  e = e || ((r) => i[r] < t);
  let n = i.length - 1, s = 0, o;
  for (; n - s > 1; )
    o = s + n >> 1, e(o) ? s = o : n = o;
  return {
    lo: s,
    hi: n
  };
}
const Jt = (i, t, e, n) => hn(i, e, n ? (s) => {
  const o = i[s][t];
  return o < e || o === e && i[s + 1][t] === e;
} : (s) => i[s][t] < e), aa = (i, t, e) => hn(i, e, (n) => i[n][t] >= e);
function la(i, t, e) {
  let n = 0, s = i.length;
  for (; n < s && i[n] < t; )
    n++;
  for (; s > n && i[s - 1] > e; )
    s--;
  return n > 0 || s < i.length ? i.slice(n, s) : i;
}
const mo = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function ca(i, t) {
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
  }), mo.forEach((e) => {
    const n = "_onData" + cn(e), s = i[e];
    Object.defineProperty(i, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const r = s.apply(this, o);
        return i._chartjs.listeners.forEach((a) => {
          typeof a[n] == "function" && a[n](...o);
        }), r;
      }
    });
  });
}
function Jn(i, t) {
  const e = i._chartjs;
  if (!e)
    return;
  const n = e.listeners, s = n.indexOf(t);
  s !== -1 && n.splice(s, 1), !(n.length > 0) && (mo.forEach((o) => {
    delete i[o];
  }), delete i._chartjs);
}
function bo(i) {
  const t = new Set(i);
  return t.size === i.length ? i : Array.from(t);
}
const _o = function() {
  return typeof window > "u" ? function(i) {
    return i();
  } : window.requestAnimationFrame;
}();
function yo(i, t) {
  let e = [], n = !1;
  return function(...s) {
    e = s, n || (n = !0, _o.call(window, () => {
      n = !1, i.apply(t, e);
    }));
  };
}
function ha(i, t) {
  let e;
  return function(...n) {
    return t ? (clearTimeout(e), e = setTimeout(i, t, n)) : i.apply(this, n), t;
  };
}
const un = (i) => i === "start" ? "left" : i === "end" ? "right" : "center", gt = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2, ua = (i, t, e, n) => i === (n ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function fa(i, t, e) {
  const n = t.length;
  let s = 0, o = n;
  if (i._sorted) {
    const { iScale: r, vScale: a, _parsed: l } = i, c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null, h = r.axis, { min: u, max: d, minDefined: p, maxDefined: m } = r.getUserBounds();
    if (p) {
      if (s = Math.min(
        // @ts-expect-error Need to type _parsed
        Jt(l, h, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? n : Jt(t, h, r.getPixelForValue(u)).lo
      ), c) {
        const b = l.slice(0, s + 1).reverse().findIndex((_) => !Q(_[a.axis]));
        s -= Math.max(0, b);
      }
      s = pt(s, 0, n - 1);
    }
    if (m) {
      let b = Math.max(
        // @ts-expect-error Need to type _parsed
        Jt(l, r.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Jt(t, h, r.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const _ = l.slice(b - 1).findIndex((x) => !Q(x[a.axis]));
        b += Math.max(0, _);
      }
      o = pt(b, s, n) - s;
    } else
      o = n - s;
  }
  return {
    start: s,
    count: o
  };
}
function da(i) {
  const { xScale: t, yScale: e, _scaleRanges: n } = i, s = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!n)
    return i._scaleRanges = s, !0;
  const o = n.xmin !== t.min || n.xmax !== t.max || n.ymin !== e.min || n.ymax !== e.max;
  return Object.assign(n, s), o;
}
const si = (i) => i === 0 || i === 1, ts = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * at / e)), es = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * at / e) + 1, Ae = {
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
  easeInSine: (i) => -Math.cos(i * ft) + 1,
  easeOutSine: (i) => Math.sin(i * ft),
  easeInOutSine: (i) => -0.5 * (Math.cos(ct * i) - 1),
  easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
  easeOutExpo: (i) => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
  easeInOutExpo: (i) => si(i) ? i : i < 0.5 ? 0.5 * Math.pow(2, 10 * (i * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
  easeInCirc: (i) => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
  easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
  easeInOutCirc: (i) => (i /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - i * i) - 1) : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
  easeInElastic: (i) => si(i) ? i : ts(i, 0.075, 0.3),
  easeOutElastic: (i) => si(i) ? i : es(i, 0.075, 0.3),
  easeInOutElastic(i) {
    return si(i) ? i : i < 0.5 ? 0.5 * ts(i * 2, 0.1125, 0.45) : 0.5 + 0.5 * es(i * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (i) => 1 - Ae.easeOutBounce(1 - i),
  easeOutBounce(i) {
    return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
  },
  easeInOutBounce: (i) => i < 0.5 ? Ae.easeInBounce(i * 2) * 0.5 : Ae.easeOutBounce(i * 2 - 1) * 0.5 + 0.5
};
function fn(i) {
  if (i && typeof i == "object") {
    const t = i.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function is(i) {
  return fn(i) ? i : new Ne(i);
}
function Fi(i) {
  return fn(i) ? i : new Ne(i).saturate(0.5).darken(0.1).hexString();
}
const ga = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], pa = [
  "color",
  "borderColor",
  "backgroundColor"
];
function ma(i) {
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
      properties: pa
    },
    numbers: {
      type: "number",
      properties: ga
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
function ba(i) {
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
const ns = /* @__PURE__ */ new Map();
function _a(i, t) {
  t = t || {};
  const e = i + JSON.stringify(t);
  let n = ns.get(e);
  return n || (n = new Intl.NumberFormat(i, t), ns.set(e, n)), n;
}
function dn(i, t, e) {
  return _a(t, e).format(i);
}
const ya = {
  values(i) {
    return ut(i) ? i : "" + i;
  },
  numeric(i, t, e) {
    if (i === 0)
      return "0";
    const n = this.chart.options.locale;
    let s, o = i;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = xa(i, e);
    }
    const r = go(Math.abs(o)), a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0), l = {
      notation: s,
      minimumFractionDigits: a,
      maximumFractionDigits: a
    };
    return Object.assign(l, this.options.ticks.format), dn(i, n, l);
  }
};
function xa(i, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e;
}
var xo = {
  formatters: ya
};
function va(i) {
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
      callback: xo.formatters.values,
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
const ne = /* @__PURE__ */ Object.create(null), Qi = /* @__PURE__ */ Object.create(null);
function De(i, t) {
  if (!t)
    return i;
  const e = t.split(".");
  for (let n = 0, s = e.length; n < s; ++n) {
    const o = e[n];
    i = i[o] || (i[o] = /* @__PURE__ */ Object.create(null));
  }
  return i;
}
function ji(i, t, e) {
  return typeof t == "string" ? At(De(i, t), e) : At(De(i, ""), t);
}
class wa {
  constructor(t, e) {
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
    }, this.hover = {}, this.hoverBackgroundColor = (n, s) => Fi(s.backgroundColor), this.hoverBorderColor = (n, s) => Fi(s.borderColor), this.hoverColor = (n, s) => Fi(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ji(this, t, e);
  }
  get(t) {
    return De(this, t);
  }
  describe(t, e) {
    return ji(Qi, t, e);
  }
  override(t, e) {
    return ji(ne, t, e);
  }
  route(t, e, n, s) {
    const o = De(this, t), r = De(this, n), a = "_" + e;
    Object.defineProperties(o, {
      [a]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[a], c = r[s];
          return Z(l) ? Object.assign({}, c, l) : U(l, c);
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
var lt = /* @__PURE__ */ new wa({
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
  ma,
  ba,
  va
]);
function ka(i) {
  return !i || Q(i.size) || Q(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family;
}
function ss(i, t, e, n, s) {
  let o = t[s];
  return o || (o = t[s] = i.measureText(s).width, e.push(s)), o > n && (n = o), n;
}
function Kt(i, t, e) {
  const n = i.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * n) / n + s;
}
function os(i, t) {
  !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore());
}
function Zi(i, t, e, n) {
  vo(i, t, e, n, null);
}
function vo(i, t, e, n, s) {
  let o, r, a, l, c, h, u, d;
  const p = t.pointStyle, m = t.rotation, b = t.radius;
  let _ = (m || 0) * Jr;
  if (p && typeof p == "object" && (o = p.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    i.save(), i.translate(e, n), i.rotate(_), i.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height), i.restore();
    return;
  }
  if (!(isNaN(b) || b <= 0)) {
    switch (i.beginPath(), p) {
      // Default includes circle
      default:
        s ? i.ellipse(e, n, s / 2, b, 0, 0, at) : i.arc(e, n, b, 0, at), i.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : b, i.moveTo(e + Math.sin(_) * h, n - Math.cos(_) * b), _ += Gn, i.lineTo(e + Math.sin(_) * h, n - Math.cos(_) * b), _ += Gn, i.lineTo(e + Math.sin(_) * h, n - Math.cos(_) * b), i.closePath();
        break;
      case "rectRounded":
        c = b * 0.516, l = b - c, r = Math.cos(_ + qt) * l, u = Math.cos(_ + qt) * (s ? s / 2 - c : l), a = Math.sin(_ + qt) * l, d = Math.sin(_ + qt) * (s ? s / 2 - c : l), i.arc(e - u, n - a, c, _ - ct, _ - ft), i.arc(e + d, n - r, c, _ - ft, _), i.arc(e + u, n + a, c, _, _ + ft), i.arc(e - d, n + r, c, _ + ft, _ + ct), i.closePath();
        break;
      case "rect":
        if (!m) {
          l = Math.SQRT1_2 * b, h = s ? s / 2 : l, i.rect(e - h, n - l, 2 * h, 2 * l);
          break;
        }
        _ += qt;
      /* falls through */
      case "rectRot":
        u = Math.cos(_) * (s ? s / 2 : b), r = Math.cos(_) * b, a = Math.sin(_) * b, d = Math.sin(_) * (s ? s / 2 : b), i.moveTo(e - u, n - a), i.lineTo(e + d, n - r), i.lineTo(e + u, n + a), i.lineTo(e - d, n + r), i.closePath();
        break;
      case "crossRot":
        _ += qt;
      /* falls through */
      case "cross":
        u = Math.cos(_) * (s ? s / 2 : b), r = Math.cos(_) * b, a = Math.sin(_) * b, d = Math.sin(_) * (s ? s / 2 : b), i.moveTo(e - u, n - a), i.lineTo(e + u, n + a), i.moveTo(e + d, n - r), i.lineTo(e - d, n + r);
        break;
      case "star":
        u = Math.cos(_) * (s ? s / 2 : b), r = Math.cos(_) * b, a = Math.sin(_) * b, d = Math.sin(_) * (s ? s / 2 : b), i.moveTo(e - u, n - a), i.lineTo(e + u, n + a), i.moveTo(e + d, n - r), i.lineTo(e - d, n + r), _ += qt, u = Math.cos(_) * (s ? s / 2 : b), r = Math.cos(_) * b, a = Math.sin(_) * b, d = Math.sin(_) * (s ? s / 2 : b), i.moveTo(e - u, n - a), i.lineTo(e + u, n + a), i.moveTo(e + d, n - r), i.lineTo(e - d, n + r);
        break;
      case "line":
        r = s ? s / 2 : Math.cos(_) * b, a = Math.sin(_) * b, i.moveTo(e - r, n - a), i.lineTo(e + r, n + a);
        break;
      case "dash":
        i.moveTo(e, n), i.lineTo(e + Math.cos(_) * (s ? s / 2 : b), n + Math.sin(_) * b);
        break;
      case !1:
        i.closePath();
        break;
    }
    i.fill(), t.borderWidth > 0 && i.stroke();
  }
}
function $e(i, t, e) {
  return e = e || 0.5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e;
}
function gn(i, t) {
  i.save(), i.beginPath(), i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), i.clip();
}
function pn(i) {
  i.restore();
}
function Sa(i, t, e, n, s) {
  if (!t)
    return i.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    i.lineTo(o, t.y), i.lineTo(o, e.y);
  } else s === "after" != !!n ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
  i.lineTo(e.x, e.y);
}
function Ma(i, t, e, n) {
  if (!t)
    return i.lineTo(e.x, e.y);
  i.bezierCurveTo(n ? t.cp1x : t.cp2x, n ? t.cp1y : t.cp2y, n ? e.cp2x : e.cp1x, n ? e.cp2y : e.cp1y, e.x, e.y);
}
function Ra(i, t) {
  t.translation && i.translate(t.translation[0], t.translation[1]), Q(t.rotation) || i.rotate(t.rotation), t.color && (i.fillStyle = t.color), t.textAlign && (i.textAlign = t.textAlign), t.textBaseline && (i.textBaseline = t.textBaseline);
}
function Ea(i, t, e, n, s) {
  if (s.strikethrough || s.underline) {
    const o = i.measureText(n), r = t - o.actualBoundingBoxLeft, a = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    i.strokeStyle = i.fillStyle, i.beginPath(), i.lineWidth = s.decorationWidth || 2, i.moveTo(r, h), i.lineTo(a, h), i.stroke();
  }
}
function Ta(i, t) {
  const e = i.fillStyle;
  i.fillStyle = t.color, i.fillRect(t.left, t.top, t.width, t.height), i.fillStyle = e;
}
function Ve(i, t, e, n, s, o = {}) {
  const r = ut(t) ? t : [
    t
  ], a = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (i.save(), i.font = s.string, Ra(i, o), l = 0; l < r.length; ++l)
    c = r[l], o.backdrop && Ta(i, o.backdrop), a && (o.strokeColor && (i.strokeStyle = o.strokeColor), Q(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, n, o.maxWidth)), i.fillText(c, e, n, o.maxWidth), Ea(i, e, n, c, o), n += Number(s.lineHeight);
  i.restore();
}
function Si(i, t) {
  const { x: e, y: n, w: s, h: o, radius: r } = t;
  i.arc(e + r.topLeft, n + r.topLeft, r.topLeft, 1.5 * ct, ct, !0), i.lineTo(e, n + o - r.bottomLeft), i.arc(e + r.bottomLeft, n + o - r.bottomLeft, r.bottomLeft, ct, ft, !0), i.lineTo(e + s - r.bottomRight, n + o), i.arc(e + s - r.bottomRight, n + o - r.bottomRight, r.bottomRight, ft, 0, !0), i.lineTo(e + s, n + r.topRight), i.arc(e + s - r.topRight, n + r.topRight, r.topRight, 0, -ft, !0), i.lineTo(e + r.topLeft, n);
}
const Oa = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Ca = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Pa(i, t) {
  const e = ("" + i).match(Oa);
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
const Aa = (i) => +i || 0;
function mn(i, t) {
  const e = {}, n = Z(t), s = n ? Object.keys(t) : t, o = Z(i) ? n ? (r) => U(i[r], i[t[r]]) : (r) => i[r] : () => i;
  for (const r of s)
    e[r] = Aa(o(r));
  return e;
}
function wo(i) {
  return mn(i, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ce(i) {
  return mn(i, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function wt(i) {
  const t = wo(i);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function dt(i, t) {
  i = i || {}, t = t || lt.font;
  let e = U(i.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let n = U(i.style, t.style);
  n && !("" + n).match(Ca) && (console.warn('Invalid font style specified: "' + n + '"'), n = void 0);
  const s = {
    family: U(i.family, t.family),
    lineHeight: Pa(U(i.lineHeight, t.lineHeight), e),
    size: e,
    style: n,
    weight: U(i.weight, t.weight),
    string: ""
  };
  return s.string = ka(s), s;
}
function rt(i, t, e, n) {
  let s, o, r;
  for (s = 0, o = i.length; s < o; ++s)
    if (r = i[s], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t)), e !== void 0 && ut(r) && (r = r[e % r.length]), r !== void 0))
      return r;
}
function Da(i, t, e) {
  const { min: n, max: s } = i, o = uo(t, (s - n) / 2), r = (a, l) => e && a === 0 ? 0 : a + l;
  return {
    min: r(n, -Math.abs(o)),
    max: r(s, o)
  };
}
function se(i, t) {
  return Object.assign(Object.create(i), t);
}
function bn(i, t = [
  ""
], e, n, s = () => i[0]) {
  const o = e || i;
  typeof n > "u" && (n = Ro("_fallback", i));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: o,
    _fallback: n,
    _getTarget: s,
    override: (a) => bn([
      a,
      ...i
    ], t, o, n)
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
      return So(a, l, () => Wa(l, t, i, a));
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
      return as(a).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(a) {
      return as(a);
    },
    /**
    * A trap for setting property values.
    */
    set(a, l, c) {
      const h = a._storage || (a._storage = s());
      return a[l] = h[l] = c, delete a._keys, !0;
    }
  });
}
function fe(i, t, e, n) {
  const s = {
    _cacheable: !1,
    _proxy: i,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: ko(i, n),
    setContext: (o) => fe(i, o, e, n),
    override: (o) => fe(i.override(o), t, e, n)
  };
  return new Proxy(s, {
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
      return So(o, r, () => Ia(o, r, a));
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
function ko(i, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: n = t.indexable, _allKeys: s = t.allKeys } = i;
  return {
    allKeys: s,
    scriptable: e,
    indexable: n,
    isScriptable: Ut(e) ? e : () => e,
    isIndexable: Ut(n) ? n : () => n
  };
}
const La = (i, t) => i ? i + cn(t) : t, _n = (i, t) => Z(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function So(i, t, e) {
  if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
    return i[t];
  const n = e();
  return i[t] = n, n;
}
function Ia(i, t, e) {
  const { _proxy: n, _context: s, _subProxy: o, _descriptors: r } = i;
  let a = n[t];
  return Ut(a) && r.isScriptable(t) && (a = za(t, a, i, e)), ut(a) && a.length && (a = Fa(t, a, i, r.isIndexable)), _n(t, a) && (a = fe(a, s, o && o[t], r)), a;
}
function za(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _stack: a } = e;
  if (a.has(i))
    throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + i);
  a.add(i);
  let l = t(o, r || n);
  return a.delete(i), _n(i, l) && (l = yn(s._scopes, s, i, l)), l;
}
function Fa(i, t, e, n) {
  const { _proxy: s, _context: o, _subProxy: r, _descriptors: a } = e;
  if (typeof o.index < "u" && n(i))
    return t[o.index % t.length];
  if (Z(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = yn(c, s, i, h);
      t.push(fe(u, o, r && r[i], a));
    }
  }
  return t;
}
function Mo(i, t, e) {
  return Ut(i) ? i(t, e) : i;
}
const ja = (i, t) => i === !0 ? t : typeof i == "string" ? ie(t, i) : void 0;
function Na(i, t, e, n, s) {
  for (const o of t) {
    const r = ja(e, o);
    if (r) {
      i.add(r);
      const a = Mo(r._fallback, e, s);
      if (typeof a < "u" && a !== e && a !== n)
        return a;
    } else if (r === !1 && typeof n < "u" && e !== n)
      return null;
  }
  return !1;
}
function yn(i, t, e, n) {
  const s = t._rootScopes, o = Mo(t._fallback, e, n), r = [
    ...i,
    ...s
  ], a = /* @__PURE__ */ new Set();
  a.add(n);
  let l = rs(a, r, e, o || e, n);
  return l === null || typeof o < "u" && o !== e && (l = rs(a, r, o, l, n), l === null) ? !1 : bn(Array.from(a), [
    ""
  ], s, o, () => Ba(t, e, n));
}
function rs(i, t, e, n, s) {
  for (; e; )
    e = Na(i, t, e, n, s);
  return e;
}
function Ba(i, t, e) {
  const n = i._getTarget();
  t in n || (n[t] = {});
  const s = n[t];
  return ut(s) && Z(e) ? e : s || {};
}
function Wa(i, t, e, n) {
  let s;
  for (const o of t)
    if (s = Ro(La(o, i), e), typeof s < "u")
      return _n(i, s) ? yn(e, n, i, s) : s;
}
function Ro(i, t) {
  for (const e of t) {
    if (!e)
      continue;
    const n = e[i];
    if (typeof n < "u")
      return n;
  }
}
function as(i) {
  let t = i._keys;
  return t || (t = i._keys = Ha(i._scopes)), t;
}
function Ha(i) {
  const t = /* @__PURE__ */ new Set();
  for (const e of i)
    for (const n of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(n);
  return Array.from(t);
}
const $a = Number.EPSILON || 1e-14, de = (i, t) => t < i.length && !i[t].skip && i[t], Eo = (i) => i === "x" ? "y" : "x";
function Va(i, t, e, n) {
  const s = i.skip ? t : i, o = t, r = e.skip ? t : e, a = Gi(o, s), l = Gi(r, o);
  let c = a / (a + l), h = l / (a + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const u = n * c, d = n * h;
  return {
    previous: {
      x: o.x - u * (r.x - s.x),
      y: o.y - u * (r.y - s.y)
    },
    next: {
      x: o.x + d * (r.x - s.x),
      y: o.y + d * (r.y - s.y)
    }
  };
}
function Ya(i, t, e) {
  const n = i.length;
  let s, o, r, a, l, c = de(i, 0);
  for (let h = 0; h < n - 1; ++h)
    if (l = c, c = de(i, h + 1), !(!l || !c)) {
      if (Pe(t[h], 0, $a)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      s = e[h] / t[h], o = e[h + 1] / t[h], a = Math.pow(s, 2) + Math.pow(o, 2), !(a <= 9) && (r = 3 / Math.sqrt(a), e[h] = s * r * t[h], e[h + 1] = o * r * t[h]);
    }
}
function Ua(i, t, e = "x") {
  const n = Eo(e), s = i.length;
  let o, r, a, l = de(i, 0);
  for (let c = 0; c < s; ++c) {
    if (r = a, a = l, l = de(i, c + 1), !a)
      continue;
    const h = a[e], u = a[n];
    r && (o = (h - r[e]) / 3, a[`cp1${e}`] = h - o, a[`cp1${n}`] = u - o * t[c]), l && (o = (l[e] - h) / 3, a[`cp2${e}`] = h + o, a[`cp2${n}`] = u + o * t[c]);
  }
}
function Xa(i, t = "x") {
  const e = Eo(t), n = i.length, s = Array(n).fill(0), o = Array(n);
  let r, a, l, c = de(i, 0);
  for (r = 0; r < n; ++r)
    if (a = l, l = c, c = de(i, r + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        s[r] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[r] = a ? c ? Pt(s[r - 1]) !== Pt(s[r]) ? 0 : (s[r - 1] + s[r]) / 2 : s[r - 1] : s[r];
    }
  Ya(i, s, o), Ua(i, o, t);
}
function oi(i, t, e) {
  return Math.max(Math.min(i, e), t);
}
function qa(i, t) {
  let e, n, s, o, r, a = $e(i[0], t);
  for (e = 0, n = i.length; e < n; ++e)
    r = o, o = a, a = e < n - 1 && $e(i[e + 1], t), o && (s = i[e], r && (s.cp1x = oi(s.cp1x, t.left, t.right), s.cp1y = oi(s.cp1y, t.top, t.bottom)), a && (s.cp2x = oi(s.cp2x, t.left, t.right), s.cp2y = oi(s.cp2y, t.top, t.bottom)));
}
function Ka(i, t, e, n, s) {
  let o, r, a, l;
  if (t.spanGaps && (i = i.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Xa(i, s);
  else {
    let c = n ? i[i.length - 1] : i[0];
    for (o = 0, r = i.length; o < r; ++o)
      a = i[o], l = Va(c, a, i[Math.min(o + 1, r - (n ? 0 : 1)) % r], t.tension), a.cp1x = l.previous.x, a.cp1y = l.previous.y, a.cp2x = l.next.x, a.cp2y = l.next.y, c = a;
  }
  t.capBezierPoints && qa(i, e);
}
function xn() {
  return typeof window < "u" && typeof document < "u";
}
function vn(i) {
  let t = i.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Mi(i, t, e) {
  let n;
  return typeof i == "string" ? (n = parseInt(i, 10), i.indexOf("%") !== -1 && (n = n / 100 * t.parentNode[e])) : n = i, n;
}
const Pi = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Ga(i, t) {
  return Pi(i).getPropertyValue(t);
}
const Qa = [
  "top",
  "right",
  "bottom",
  "left"
];
function te(i, t, e) {
  const n = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = Qa[s];
    n[o] = parseFloat(i[t + "-" + o + e]) || 0;
  }
  return n.width = n.left + n.right, n.height = n.top + n.bottom, n;
}
const Za = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Ja(i, t) {
  const e = i.touches, n = e && e.length ? e[0] : i, { offsetX: s, offsetY: o } = n;
  let r = !1, a, l;
  if (Za(s, o, i.target))
    a = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    a = n.clientX - c.left, l = n.clientY - c.top, r = !0;
  }
  return {
    x: a,
    y: l,
    box: r
  };
}
function Qt(i, t) {
  if ("native" in i)
    return i;
  const { canvas: e, currentDevicePixelRatio: n } = t, s = Pi(e), o = s.boxSizing === "border-box", r = te(s, "padding"), a = te(s, "border", "width"), { x: l, y: c, box: h } = Ja(i, e), u = r.left + (h && a.left), d = r.top + (h && a.top);
  let { width: p, height: m } = t;
  return o && (p -= r.width + a.width, m -= r.height + a.height), {
    x: Math.round((l - u) / p * e.width / n),
    y: Math.round((c - d) / m * e.height / n)
  };
}
function tl(i, t, e) {
  let n, s;
  if (t === void 0 || e === void 0) {
    const o = i && vn(i);
    if (!o)
      t = i.clientWidth, e = i.clientHeight;
    else {
      const r = o.getBoundingClientRect(), a = Pi(o), l = te(a, "border", "width"), c = te(a, "padding");
      t = r.width - c.width - l.width, e = r.height - c.height - l.height, n = Mi(a.maxWidth, o, "clientWidth"), s = Mi(a.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: n || ki,
    maxHeight: s || ki
  };
}
const ri = (i) => Math.round(i * 10) / 10;
function el(i, t, e, n) {
  const s = Pi(i), o = te(s, "margin"), r = Mi(s.maxWidth, i, "clientWidth") || ki, a = Mi(s.maxHeight, i, "clientHeight") || ki, l = tl(i, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const d = te(s, "border", "width"), p = te(s, "padding");
    c -= p.width + d.width, h -= p.height + d.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, n ? c / n : h - o.height), c = ri(Math.min(c, r, l.maxWidth)), h = ri(Math.min(h, a, l.maxHeight)), c && !h && (h = ri(c / 2)), (t !== void 0 || e !== void 0) && n && l.height && h > l.height && (h = l.height, c = ri(Math.floor(h * n))), {
    width: c,
    height: h
  };
}
function ls(i, t, e) {
  const n = t || 1, s = Math.floor(i.height * n), o = Math.floor(i.width * n);
  i.height = Math.floor(i.height), i.width = Math.floor(i.width);
  const r = i.canvas;
  return r.style && (e || !r.style.height && !r.style.width) && (r.style.height = `${i.height}px`, r.style.width = `${i.width}px`), i.currentDevicePixelRatio !== n || r.height !== s || r.width !== o ? (i.currentDevicePixelRatio = n, r.height = s, r.width = o, i.ctx.setTransform(n, 0, 0, n, 0, 0), !0) : !1;
}
const il = function() {
  let i = !1;
  try {
    const t = {
      get passive() {
        return i = !0, !1;
      }
    };
    xn() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return i;
}();
function cs(i, t) {
  const e = Ga(i, t), n = e && e.match(/^(\d+)(\.\d+)?px$/);
  return n ? +n[1] : void 0;
}
function Zt(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y: i.y + e * (t.y - i.y)
  };
}
function nl(i, t, e, n) {
  return {
    x: i.x + e * (t.x - i.x),
    y: n === "middle" ? e < 0.5 ? i.y : t.y : n === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
  };
}
function sl(i, t, e, n) {
  const s = {
    x: i.cp2x,
    y: i.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, r = Zt(i, s, e), a = Zt(s, o, e), l = Zt(o, t, e), c = Zt(r, a, e), h = Zt(a, l, e);
  return Zt(c, h, e);
}
const ol = function(i, t) {
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
    xPlus(e, n) {
      return e - n;
    },
    leftForLtr(e, n) {
      return e - n;
    }
  };
}, rl = function() {
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
function he(i, t, e) {
  return i ? ol(t, e) : rl();
}
function To(i, t) {
  let e, n;
  (t === "ltr" || t === "rtl") && (e = i.canvas.style, n = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), i.prevTextDirection = n);
}
function Oo(i, t) {
  t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]));
}
function Co(i) {
  return i === "angle" ? {
    between: He,
    compare: oa,
    normalize: Wt
  } : {
    between: $t,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function hs({ start: i, end: t, count: e, loop: n, style: s }) {
  return {
    start: i % e,
    end: t % e,
    loop: n && (t - i + 1) % e === 0,
    style: s
  };
}
function al(i, t, e) {
  const { property: n, start: s, end: o } = e, { between: r, normalize: a } = Co(n), l = t.length;
  let { start: c, end: h, loop: u } = i, d, p;
  if (u) {
    for (c += l, h += l, d = 0, p = l; d < p && r(a(t[c % l][n]), s, o); ++d)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: u,
    style: i.style
  };
}
function ll(i, t, e) {
  if (!e)
    return [
      i
    ];
  const { property: n, start: s, end: o } = e, r = t.length, { compare: a, between: l, normalize: c } = Co(n), { start: h, end: u, loop: d, style: p } = al(i, t, e), m = [];
  let b = !1, _ = null, x, k, S;
  const M = () => l(s, S, x) && a(s, S) !== 0, w = () => a(o, x) === 0 || l(o, S, x), C = () => b || M(), A = () => !b || w();
  for (let T = h, I = h; T <= u; ++T)
    k = t[T % r], !k.skip && (x = c(k[n]), x !== S && (b = l(x, s, o), _ === null && C() && (_ = a(x, s) === 0 ? T : I), _ !== null && A() && (m.push(hs({
      start: _,
      end: T,
      loop: d,
      count: r,
      style: p
    })), _ = null), I = T, S = x));
  return _ !== null && m.push(hs({
    start: _,
    end: u,
    loop: d,
    count: r,
    style: p
  })), m;
}
function cl(i, t) {
  const e = [], n = i.segments;
  for (let s = 0; s < n.length; s++) {
    const o = ll(n[s], i.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function hl(i, t, e, n) {
  let s = 0, o = t - 1;
  if (e && !n)
    for (; s < t && !i[s].skip; )
      s++;
  for (; s < t && i[s].skip; )
    s++;
  for (s %= t, e && (o += s); o > s && i[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function ul(i, t, e, n) {
  const s = i.length, o = [];
  let r = t, a = i[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = i[l % s];
    c.skip || c.stop ? a.skip || (n = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: n
    }), t = r = c.stop ? l : null) : (r = l, a.skip && (t = l)), a = c;
  }
  return r !== null && o.push({
    start: t % s,
    end: r % s,
    loop: n
  }), o;
}
function fl(i, t) {
  const e = i.points, n = i.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!i._loop, { start: r, end: a } = hl(e, s, o, n);
  if (n === !0)
    return us(i, [
      {
        start: r,
        end: a,
        loop: o
      }
    ], e, t);
  const l = a < r ? a + s : a, c = !!i._fullLoop && r === 0 && a === s - 1;
  return us(i, ul(e, r, l, c), e, t);
}
function us(i, t, e, n) {
  return !n || !n.setContext || !e ? t : dl(i, t, e, n);
}
function dl(i, t, e, n) {
  const s = i._chart.getContext(), o = fs(i.options), { _datasetIndex: r, options: { spanGaps: a } } = i, l = e.length, c = [];
  let h = o, u = t[0].start, d = u;
  function p(m, b, _, x) {
    const k = a ? -1 : 1;
    if (m !== b) {
      for (m += l; e[m % l].skip; )
        m -= k;
      for (; e[b % l].skip; )
        b += k;
      m % l !== b % l && (c.push({
        start: m % l,
        end: b % l,
        loop: _,
        style: x
      }), h = x, u = b % l);
    }
  }
  for (const m of t) {
    u = a ? u : m.start;
    let b = e[u % l], _;
    for (d = u + 1; d <= m.end; d++) {
      const x = e[d % l];
      _ = fs(n.setContext(se(s, {
        type: "segment",
        p0: b,
        p1: x,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: r
      }))), gl(_, h) && p(u, d - 1, m.loop, h), b = x, h = _;
    }
    u < d - 1 && p(u, d - 1, m.loop, h);
  }
  return c;
}
function fs(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor
  };
}
function gl(i, t) {
  if (!t)
    return !1;
  const e = [], n = function(s, o) {
    return fn(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(i, n) !== JSON.stringify(t, n);
}
function ai(i, t, e) {
  return i.options.clip ? i[e] : t[e];
}
function pl(i, t) {
  const { xScale: e, yScale: n } = i;
  return e && n ? {
    left: ai(e, t, "left"),
    right: ai(e, t, "right"),
    top: ai(n, t, "top"),
    bottom: ai(n, t, "bottom")
  } : t;
}
function ml(i, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const n = pl(t, i.chartArea);
  return {
    left: e.left === !1 ? 0 : n.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? i.width : n.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : n.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? i.height : n.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.4.9
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class bl {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, n, s) {
    const o = e.listeners[s], r = e.duration;
    o.forEach((a) => a({
      chart: t,
      initial: e.initial,
      numSteps: r,
      currentStep: Math.min(n - e.start, r)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = _o.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((n, s) => {
      if (!n.running || !n.items.length)
        return;
      const o = n.items;
      let r = o.length - 1, a = !1, l;
      for (; r >= 0; --r)
        l = o[r], l._active ? (l._total > n.duration && (n.duration = l._total), l.tick(t), a = !0) : (o[r] = o[o.length - 1], o.pop());
      a && (s.draw(), this._notify(s, n, t, "progress")), o.length || (n.running = !1, this._notify(s, n, t, "complete"), n.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let n = e.get(t);
    return n || (n = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, n)), n;
  }
  listen(t, e, n) {
    this._getAnims(t).listeners[e].push(n);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((n, s) => Math.max(n, s._duration), 0), this._refresh());
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
    const n = e.items;
    let s = n.length - 1;
    for (; s >= 0; --s)
      n[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Lt = /* @__PURE__ */ new bl();
const ds = "transparent", _l = {
  boolean(i, t, e) {
    return e > 0.5 ? t : i;
  },
  color(i, t, e) {
    const n = is(i || ds), s = n.valid && is(t || ds);
    return s && s.valid ? s.mix(n, e).hexString() : t;
  },
  number(i, t, e) {
    return i + (t - i) * e;
  }
};
class yl {
  constructor(t, e, n, s) {
    const o = e[n];
    s = rt([
      t.to,
      s,
      o,
      t.from
    ]);
    const r = rt([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || _l[t.type || typeof r], this._easing = Ae[t.easing] || Ae.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = n, this._from = r, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, n) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = n - this._start, r = this._duration - o;
      this._start = n, this._duration = Math.floor(Math.max(r, t.duration)), this._total += o, this._loop = !!t.loop, this._to = rt([
        t.to,
        e,
        s,
        t.from
      ]), this._from = rt([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, n = this._duration, s = this._prop, o = this._from, r = this._loop, a = this._to;
    let l;
    if (this._active = o !== a && (r || e < n), !this._active) {
      this._target[s] = a, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / n % 2, l = r && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, a, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, n) => {
      t.push({
        res: e,
        rej: n
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", n = this._promises || [];
    for (let s = 0; s < n.length; s++)
      n[s][e]();
  }
}
class Po {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!Z(t))
      return;
    const e = Object.keys(lt.animation), n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!Z(o))
        return;
      const r = {};
      for (const a of e)
        r[a] = o[a];
      (ut(o.properties) && o.properties || [
        s
      ]).forEach((a) => {
        (a === s || !n.has(a)) && n.set(a, r);
      });
    });
  }
  _animateOptions(t, e) {
    const n = e.options, s = vl(t, n);
    if (!s)
      return [];
    const o = this._createAnimations(s, n);
    return n.$shared && xl(t.options.$animations, n).then(() => {
      t.options = n;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const n = this._properties, s = [], o = t.$animations || (t.$animations = {}), r = Object.keys(e), a = Date.now();
    let l;
    for (l = r.length - 1; l >= 0; --l) {
      const c = r[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = o[c];
      const d = n.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, a);
          continue;
        } else
          u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      o[c] = u = new yl(d, t, c, h), s.push(u);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const n = this._createAnimations(t, e);
    if (n.length)
      return Lt.add(this._chart, n), !0;
  }
}
function xl(i, t) {
  const e = [], n = Object.keys(t);
  for (let s = 0; s < n.length; s++) {
    const o = i[n[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function vl(i, t) {
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
function gs(i, t) {
  const e = i && i.options || {}, n = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: n ? o : s,
    end: n ? s : o
  };
}
function wl(i, t, e) {
  if (e === !1)
    return !1;
  const n = gs(i, e), s = gs(t, e);
  return {
    top: s.end,
    right: n.end,
    bottom: s.start,
    left: n.start
  };
}
function kl(i) {
  let t, e, n, s;
  return Z(i) ? (t = i.top, e = i.right, n = i.bottom, s = i.left) : t = e = n = s = i, {
    top: t,
    right: e,
    bottom: n,
    left: s,
    disabled: i === !1
  };
}
function Ao(i, t) {
  const e = [], n = i._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = n.length; s < o; ++s)
    e.push(n[s].index);
  return e;
}
function ps(i, t, e, n = {}) {
  const s = i.keys, o = n.mode === "single";
  let r, a, l, c;
  if (t === null)
    return;
  let h = !1;
  for (r = 0, a = s.length; r < a; ++r) {
    if (l = +s[r], l === e) {
      if (h = !0, n.all)
        continue;
      break;
    }
    c = i.values[l], Rt(c) && (o || t === 0 || Pt(t) === Pt(c)) && (t += c);
  }
  return !h && !n.all ? 0 : t;
}
function Sl(i, t) {
  const { iScale: e, vScale: n } = t, s = e.axis === "x" ? "x" : "y", o = n.axis === "x" ? "x" : "y", r = Object.keys(i), a = new Array(r.length);
  let l, c, h;
  for (l = 0, c = r.length; l < c; ++l)
    h = r[l], a[l] = {
      [s]: h,
      [o]: i[h]
    };
  return a;
}
function Ni(i, t) {
  const e = i && i.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ml(i, t, e) {
  return `${i.id}.${t.id}.${e.stack || e.type}`;
}
function Rl(i) {
  const { min: t, max: e, minDefined: n, maxDefined: s } = i.getUserBounds();
  return {
    min: n ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function El(i, t, e) {
  const n = i[t] || (i[t] = {});
  return n[e] || (n[e] = {});
}
function ms(i, t, e, n) {
  for (const s of t.getMatchingVisibleMetas(n).reverse()) {
    const o = i[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function bs(i, t) {
  const { chart: e, _cachedMeta: n } = i, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: r, index: a } = n, l = o.axis, c = r.axis, h = Ml(o, r, n), u = t.length;
  let d;
  for (let p = 0; p < u; ++p) {
    const m = t[p], { [l]: b, [c]: _ } = m, x = m._stacks || (m._stacks = {});
    d = x[c] = El(s, h, b), d[a] = _, d._top = ms(d, r, !0, n.type), d._bottom = ms(d, r, !1, n.type);
    const k = d._visualValues || (d._visualValues = {});
    k[a] = _;
  }
}
function Bi(i, t) {
  const e = i.scales;
  return Object.keys(e).filter((n) => e[n].axis === t).shift();
}
function Tl(i, t) {
  return se(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Ol(i, t, e) {
  return se(i, {
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
function _e(i, t) {
  const e = i.controller.index, n = i.vScale && i.vScale.axis;
  if (n) {
    t = t || i._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[n] === void 0 || o[n][e] === void 0)
        return;
      delete o[n][e], o[n]._visualValues !== void 0 && o[n]._visualValues[e] !== void 0 && delete o[n]._visualValues[e];
    }
  }
}
const Wi = (i) => i === "reset" || i === "none", _s = (i, t) => t ? i : Object.assign({}, i), Cl = (i, t, e) => i && !t.hidden && t._stacked && {
  keys: Ao(e, !0),
  values: null
};
class ee {
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = Ni(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && _e(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, n = this.getDataset(), s = (u, d, p, m) => u === "x" ? d : u === "r" ? m : p, o = e.xAxisID = U(n.xAxisID, Bi(t, "x")), r = e.yAxisID = U(n.yAxisID, Bi(t, "y")), a = e.rAxisID = U(n.rAxisID, Bi(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, r, a), h = e.vAxisID = s(l, r, o, a);
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
    this._data && Jn(this._data, this), t._stacked && _e(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), n = this._data;
    if (Z(e)) {
      const s = this._cachedMeta;
      this._data = Sl(e, s);
    } else if (n !== e) {
      if (n) {
        Jn(n, this);
        const s = this._cachedMeta;
        _e(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && ca(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, n = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = Ni(e.vScale, e), e.stack !== n.stack && (s = !0, _e(e), e.stack = n.stack), this._resyncElements(t), (s || o !== e._stacked) && (bs(this, e._parsed), e._stacked = Ni(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), n = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(n, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: n, _data: s } = this, { iScale: o, _stacked: r } = n, a = o.axis;
    let l = t === 0 && e === s.length ? !0 : n._sorted, c = t > 0 && n._parsed[t - 1], h, u, d;
    if (this._parsing === !1)
      n._parsed = s, n._sorted = !0, d = s;
    else {
      ut(s[t]) ? d = this.parseArrayData(n, s, t, e) : Z(s[t]) ? d = this.parseObjectData(n, s, t, e) : d = this.parsePrimitiveData(n, s, t, e);
      const p = () => u[a] === null || c && u[a] < c[a];
      for (h = 0; h < e; ++h)
        n._parsed[h + t] = u = d[h], l && (p() && (l = !1), c = u);
      n._sorted = l;
    }
    r && bs(this, d);
  }
  parsePrimitiveData(t, e, n, s) {
    const { iScale: o, vScale: r } = t, a = o.axis, l = r.axis, c = o.getLabels(), h = o === r, u = new Array(s);
    let d, p, m;
    for (d = 0, p = s; d < p; ++d)
      m = d + n, u[d] = {
        [a]: h || o.parse(c[m], m),
        [l]: r.parse(e[m], m)
      };
    return u;
  }
  parseArrayData(t, e, n, s) {
    const { xScale: o, yScale: r } = t, a = new Array(s);
    let l, c, h, u;
    for (l = 0, c = s; l < c; ++l)
      h = l + n, u = e[h], a[l] = {
        x: o.parse(u[0], h),
        y: r.parse(u[1], h)
      };
    return a;
  }
  parseObjectData(t, e, n, s) {
    const { xScale: o, yScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, u, d, p;
    for (h = 0, u = s; h < u; ++h)
      d = h + n, p = e[d], c[h] = {
        x: o.parse(ie(p, a), d),
        y: r.parse(ie(p, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, n) {
    const s = this.chart, o = this._cachedMeta, r = e[t.axis], a = {
      keys: Ao(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return ps(a, r, o.index, {
      mode: n
    });
  }
  updateRangeFromParsed(t, e, n, s) {
    const o = n[e.axis];
    let r = o === null ? NaN : o;
    const a = s && n._stacks[e.axis];
    s && a && (s.values = a, r = ps(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, r), t.max = Math.max(t.max, r);
  }
  getMinMax(t, e) {
    const n = this._cachedMeta, s = n._parsed, o = n._sorted && t === n.iScale, r = s.length, a = this._getOtherScale(t), l = Cl(e, n, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: u } = Rl(a);
    let d, p;
    function m() {
      p = s[d];
      const b = p[a.axis];
      return !Rt(p[t.axis]) || h > b || u < b;
    }
    for (d = 0; d < r && !(!m() && (this.updateRangeFromParsed(c, t, p, l), o)); ++d)
      ;
    if (o) {
      for (d = r - 1; d >= 0; --d)
        if (!m()) {
          this.updateRangeFromParsed(c, t, p, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, n = [];
    let s, o, r;
    for (s = 0, o = e.length; s < o; ++s)
      r = e[s][t.axis], Rt(r) && n.push(r);
    return n;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: n ? "" + n.getLabelForValue(o[n.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = kl(U(this.options.clip, wl(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, n = this._cachedMeta, s = n.data || [], o = e.chartArea, r = [], a = this._drawStart || 0, l = this._drawCount || s.length - a, c = this.options.drawActiveElementsOnTop;
    let h;
    for (n.dataset && n.dataset.draw(t, o, a, l), h = a; h < a + l; ++h) {
      const u = s[h];
      u.hidden || (u.active && c ? r.push(u) : u.draw(t, o));
    }
    for (h = 0; h < r.length; ++h)
      r[h].draw(t, o);
  }
  getStyle(t, e) {
    const n = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(n) : this.resolveDataElementOptions(t || 0, n);
  }
  getContext(t, e, n) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t];
      o = r.$context || (r.$context = Ol(this.getContext(), t, r)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Tl(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = n, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", n) {
    const s = e === "active", o = this._cachedDataOpts, r = t + "-" + e, a = o[r], l = this.enableOptionSharing && Be(n);
    if (a)
      return _s(a, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), u = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), h), p = Object.keys(lt.elements[t]), m = () => this.getContext(n, s, e), b = c.resolveNamedOptions(d, p, m, u);
    return b.$shared && (b.$shared = l, o[r] = Object.freeze(_s(b, l))), b;
  }
  _resolveAnimations(t, e, n) {
    const s = this.chart, o = this._cachedDataOpts, r = `animation-${e}`, a = o[r];
    if (a)
      return a;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, u = h.datasetAnimationScopeKeys(this._type, e), d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, n, e));
    }
    const c = new Po(s, l && l.animations);
    return l && l._cacheable && (o[r] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || Wi(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const n = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(n), r = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, n), {
      sharedOptions: o,
      includeOptions: r
    };
  }
  updateElement(t, e, n, s) {
    Wi(s) ? Object.assign(t, n) : this._resolveAnimations(e, s).update(t, n);
  }
  updateSharedOptions(t, e, n) {
    t && !Wi(e) && this._resolveAnimations(void 0, e).update(t, n);
  }
  _setStyle(t, e, n, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, n, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !1);
  }
  setHoverStyle(t, e, n) {
    this._setStyle(t, n, "active", !0);
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
    const e = this._data, n = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList)
      this[a](l, c);
    this._syncList = [];
    const s = n.length, o = e.length, r = Math.min(o, s);
    r && this.parse(0, r), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, n = !0) {
    const s = this._cachedMeta, o = s.data, r = t + e;
    let a;
    const l = (c) => {
      for (c.length += e, a = c.length - 1; a >= r; a--)
        c[a] = c[a - e];
    };
    for (l(o), a = t; a < r; ++a)
      o[a] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), n && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, n, s) {
  }
  _removeElements(t, e) {
    const n = this._cachedMeta;
    if (this._parsing) {
      const s = n._parsed.splice(t, e);
      n._stacked && _e(n, s);
    }
    n.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, n, s] = t;
      this[e](n, s);
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
    const n = arguments.length - 2;
    n && this._sync([
      "_insertElements",
      t,
      n
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
L(ee, "defaults", {}), L(ee, "datasetElementType", null), L(ee, "dataElementType", null);
function Pl(i, t) {
  if (!i._cache.$bar) {
    const e = i.getMatchingVisibleMetas(t);
    let n = [];
    for (let s = 0, o = e.length; s < o; s++)
      n = n.concat(e[s].controller.getAllParsedValues(i));
    i._cache.$bar = bo(n.sort((s, o) => s - o));
  }
  return i._cache.$bar;
}
function Al(i) {
  const t = i.iScale, e = Pl(t, i.type);
  let n = t._length, s, o, r, a;
  const l = () => {
    r === 32767 || r === -32768 || (Be(a) && (n = Math.min(n, Math.abs(r - a) || n)), a = r);
  };
  for (s = 0, o = e.length; s < o; ++s)
    r = t.getPixelForValue(e[s]), l();
  for (a = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    r = t.getPixelForTick(s), l();
  return n;
}
function Dl(i, t, e, n) {
  const s = e.barThickness;
  let o, r;
  return Q(s) ? (o = t.min * e.categoryPercentage, r = e.barPercentage) : (o = s * n, r = 1), {
    chunk: o / n,
    ratio: r,
    start: t.pixels[i] - o / 2
  };
}
function Ll(i, t, e, n) {
  const s = t.pixels, o = s[i];
  let r = i > 0 ? s[i - 1] : null, a = i < s.length - 1 ? s[i + 1] : null;
  const l = e.categoryPercentage;
  r === null && (r = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - r);
  const c = o - (o - Math.min(r, a)) / 2 * l;
  return {
    chunk: Math.abs(a - r) / 2 * l / n,
    ratio: e.barPercentage,
    start: c
  };
}
function Il(i, t, e, n) {
  const s = e.parse(i[0], n), o = e.parse(i[1], n), r = Math.min(s, o), a = Math.max(s, o);
  let l = r, c = a;
  Math.abs(r) > Math.abs(a) && (l = a, c = r), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: s,
    end: o,
    min: r,
    max: a
  };
}
function Do(i, t, e, n) {
  return ut(i) ? Il(i, t, e, n) : t[e.axis] = e.parse(i, n), t;
}
function ys(i, t, e, n) {
  const s = i.iScale, o = i.vScale, r = s.getLabels(), a = s === o, l = [];
  let c, h, u, d;
  for (c = e, h = e + n; c < h; ++c)
    d = t[c], u = {}, u[s.axis] = a || s.parse(r[c], c), l.push(Do(d, u, o, c));
  return l;
}
function Hi(i) {
  return i && i.barStart !== void 0 && i.barEnd !== void 0;
}
function zl(i, t, e) {
  return i !== 0 ? Pt(i) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Fl(i) {
  let t, e, n, s, o;
  return i.horizontal ? (t = i.base > i.x, e = "left", n = "right") : (t = i.base < i.y, e = "bottom", n = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: n,
    reverse: t,
    top: s,
    bottom: o
  };
}
function jl(i, t, e, n) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    i.borderSkipped = o;
    return;
  }
  if (s === !0) {
    i.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: r, end: a, reverse: l, top: c, bottom: h } = Fl(i);
  s === "middle" && e && (i.enableBorderRadius = !0, (e._top || 0) === n ? s = c : (e._bottom || 0) === n ? s = h : (o[xs(h, r, a, l)] = !0, s = c)), o[xs(s, r, a, l)] = !0, i.borderSkipped = o;
}
function xs(i, t, e, n) {
  return n ? (i = Nl(i, t, e), i = vs(i, e, t)) : i = vs(i, t, e), i;
}
function Nl(i, t, e) {
  return i === t ? e : i === e ? t : i;
}
function vs(i, t, e) {
  return i === "start" ? t : i === "end" ? e : i;
}
function Bl(i, { inflateAmount: t }, e) {
  i.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Le extends ee {
  parsePrimitiveData(t, e, n, s) {
    return ys(t, e, n, s);
  }
  parseArrayData(t, e, n, s) {
    return ys(t, e, n, s);
  }
  parseObjectData(t, e, n, s) {
    const { iScale: o, vScale: r } = t, { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? a : l, h = r.axis === "x" ? a : l, u = [];
    let d, p, m, b;
    for (d = n, p = n + s; d < p; ++d)
      b = e[d], m = {}, m[o.axis] = o.parse(ie(b, c), d), u.push(Do(ie(b, h), m, r, d));
    return u;
  }
  updateRangeFromParsed(t, e, n, s) {
    super.updateRangeFromParsed(t, e, n, s);
    const o = n._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: n, vScale: s } = e, o = this.getParsed(t), r = o._custom, a = Hi(r) ? "[" + r.start + ", " + r.end + "]" : "" + s.getLabelForValue(o[s.axis]);
    return {
      label: "" + n.getLabelForValue(o[n.axis]),
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
  updateElements(t, e, n, s) {
    const o = s === "reset", { index: r, _cachedMeta: { vScale: a } } = this, l = a.getBasePixel(), c = a.isHorizontal(), h = this._getRuler(), { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, s);
    for (let p = e; p < e + n; p++) {
      const m = this.getParsed(p), b = o || Q(m[a.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(p), _ = this._calculateBarIndexPixels(p, h), x = (m._stacks || {})[a.axis], k = {
        horizontal: c,
        base: b.base,
        enableBorderRadius: !x || Hi(m._custom) || r === x._top || r === x._bottom,
        x: c ? b.head : _.center,
        y: c ? _.center : b.head,
        height: c ? _.size : Math.abs(b.size),
        width: c ? Math.abs(b.size) : _.size
      };
      d && (k.options = u || this.resolveDataElementOptions(p, t[p].active ? "active" : s));
      const S = k.options || t[p].options;
      jl(k, S, x, r), Bl(k, S, h.ratio), this.updateElement(t[p], p, k, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: n } = this._cachedMeta, s = n.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = n.options.stacked, r = [], a = this._cachedMeta.controller.getParsed(e), l = a && a[n.axis], c = (h) => {
      const u = h._parsed.find((p) => p[n.axis] === l), d = u && u[h.vScale.axis];
      if (Q(d) || isNaN(d))
        return !0;
    };
    for (const h of s)
      if (!(e !== void 0 && c(h)) && ((o === !1 || r.indexOf(h.stack) === -1 || o === void 0 && h.stack === void 0) && r.push(h.stack), h.index === t))
        break;
    return r.length || r.push(void 0), r;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, e, n) {
    const s = this._getStacks(t, n), o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, n = e.iScale, s = [];
    let o, r;
    for (o = 0, r = e.data.length; o < r; ++o)
      s.push(n.getPixelForValue(this.getParsed(o)[n.axis], o));
    const a = t.barThickness;
    return {
      min: a || Al(e),
      pixels: s,
      start: n._startPixel,
      end: n._endPixel,
      stackCount: this._getStackCount(),
      scale: n,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: n, index: s }, options: { base: o, minBarLength: r } } = this, a = o || 0, l = this.getParsed(t), c = l._custom, h = Hi(c);
    let u = l[e.axis], d = 0, p = n ? this.applyStack(e, l, n) : u, m, b;
    p !== u && (d = p - u, p = u), h && (u = c.barStart, p = c.barEnd - c.barStart, u !== 0 && Pt(u) !== Pt(c.barEnd) && (d = 0), d += u);
    const _ = !Q(o) && !h ? o : d;
    let x = e.getPixelForValue(_);
    if (this.chart.getDataVisibility(t) ? m = e.getPixelForValue(d + p) : m = x, b = m - x, Math.abs(b) < r) {
      b = zl(b, e, a) * r, u === a && (x -= b / 2);
      const k = e.getPixelForDecimal(0), S = e.getPixelForDecimal(1), M = Math.min(k, S), w = Math.max(k, S);
      x = Math.max(Math.min(x, w), M), m = x + b, n && !h && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(m) - e.getValueForPixel(x));
    }
    if (x === e.getPixelForValue(a)) {
      const k = Pt(b) * e.getLineWidthForValue(a) / 2;
      x += k, b -= k;
    }
    return {
      size: b,
      base: x,
      head: m,
      center: m + b / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const n = e.scale, s = this.options, o = s.skipNull, r = U(s.maxBarThickness, 1 / 0);
    let a, l;
    if (e.grouped) {
      const c = o ? this._getStackCount(t) : e.stackCount, h = s.barThickness === "flex" ? Ll(t, e, s, c) : Dl(t, e, s, c), u = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0);
      a = h.start + h.chunk * u + h.chunk / 2, l = Math.min(r, h.chunk * h.ratio);
    } else
      a = n.getPixelForValue(this.getParsed(t)[n.axis], t), l = Math.min(r, e.min * e.ratio);
    return {
      base: a - l / 2,
      head: a + l / 2,
      center: a,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, n = t.data, s = n.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && !n[o].hidden && n[o].draw(this._ctx);
  }
}
L(Le, "id", "bar"), L(Le, "defaults", {
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
}), L(Le, "overrides", {
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
function Wl(i, t, e) {
  let n = 1, s = 1, o = 0, r = 0;
  if (t < at) {
    const a = i, l = a + t, c = Math.cos(a), h = Math.sin(a), u = Math.cos(l), d = Math.sin(l), p = (S, M, w) => He(S, a, l, !0) ? 1 : Math.max(M, M * e, w, w * e), m = (S, M, w) => He(S, a, l, !0) ? -1 : Math.min(M, M * e, w, w * e), b = p(0, c, u), _ = p(ft, h, d), x = m(ct, c, u), k = m(ct + ft, h, d);
    n = (b - x) / 2, s = (_ - k) / 2, o = -(b + x) / 2, r = -(_ + k) / 2;
  }
  return {
    ratioX: n,
    ratioY: s,
    offsetX: o,
    offsetY: r
  };
}
class Re extends ee {
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const n = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = n;
    else {
      let o = (l) => +n[l];
      if (Z(n[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ie(n[c], l);
      }
      let r, a;
      for (r = t, a = t + e; r < a; ++r)
        s._parsed[r] = o(r);
    }
  }
  _getRotation() {
    return Ft(this.options.rotation - 90);
  }
  _getCircumference() {
    return Ft(this.options.circumference);
  }
  _getRotationExtents() {
    let t = at, e = -at;
    for (let n = 0; n < this.chart.data.datasets.length; ++n)
      if (this.chart.isDatasetVisible(n) && this.chart.getDatasetMeta(n).type === this._type) {
        const s = this.chart.getDatasetMeta(n).controller, o = s._getRotation(), r = s._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + r);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: n } = e, s = this._cachedMeta, o = s.data, r = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, a = Math.max((Math.min(n.width, n.height) - r) / 2, 0), l = Math.min(Ur(this.options.cutout, a), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: u } = this._getRotationExtents(), { ratioX: d, ratioY: p, offsetX: m, offsetY: b } = Wl(u, h, l), _ = (n.width - r) / d, x = (n.height - r) / p, k = Math.max(Math.min(_, x) / 2, 0), S = uo(this.options.radius, k), M = Math.max(S * l, 0), w = (S - M) / this._getVisibleDatasetWeightTotal();
    this.offsetX = m * S, this.offsetY = b * S, s.total = this.calculateTotal(), this.outerRadius = S - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const n = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && n.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / at);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset", r = this.chart, a = r.chartArea, c = r.options.animation, h = (a.left + a.right) / 2, u = (a.top + a.bottom) / 2, d = o && c.animateScale, p = d ? 0 : this.innerRadius, m = d ? 0 : this.outerRadius, { sharedOptions: b, includeOptions: _ } = this._getSharedOptions(e, s);
    let x = this._getRotation(), k;
    for (k = 0; k < e; ++k)
      x += this._circumference(k, o);
    for (k = e; k < e + n; ++k) {
      const S = this._circumference(k, o), M = t[k], w = {
        x: h + this.offsetX,
        y: u + this.offsetY,
        startAngle: x,
        endAngle: x + S,
        circumference: S,
        outerRadius: m,
        innerRadius: p
      };
      _ && (w.options = b || this.resolveDataElementOptions(k, M.active ? "active" : s)), x += S, this.updateElement(M, k, w, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let n = 0, s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (n += Math.abs(o));
    }
    return n;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? at * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, n = this.chart, s = n.data.labels || [], o = dn(e._parsed[t], n.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const n = this.chart;
    let s, o, r, a, l;
    if (!t) {
      for (s = 0, o = n.data.datasets.length; s < o; ++s)
        if (n.isDatasetVisible(s)) {
          r = n.getDatasetMeta(s), t = r.data, a = r.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = a.resolveDataElementOptions(s), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let n = 0, s = t.length; n < s; ++n) {
      const o = this.resolveDataElementOptions(n);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let n = 0; n < t; ++n)
      this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(U(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
L(Re, "id", "doughnut"), L(Re, "defaults", {
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
}), L(Re, "descriptors", {
  _scriptable: (t) => t !== "spacing",
  _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
}), L(Re, "overrides", {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(t) {
          const e = t.data;
          if (e.labels.length && e.datasets.length) {
            const { labels: { pointStyle: n, color: s } } = t.legend.options;
            return e.labels.map((o, r) => {
              const l = t.getDatasetMeta(0).controller.getStyle(r);
              return {
                text: o,
                fillStyle: l.backgroundColor,
                strokeStyle: l.borderColor,
                fontColor: s,
                lineWidth: l.borderWidth,
                pointStyle: n,
                hidden: !t.getDataVisibility(r),
                index: r
              };
            });
          }
          return [];
        }
      },
      onClick(t, e, n) {
        n.chart.toggleDataVisibility(e.index), n.chart.update();
      }
    }
  }
});
class _i extends ee {
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: n, data: s = [], _dataset: o } = e, r = this.chart._animationsDisabled;
    let { start: a, count: l } = fa(e, s, r);
    this._drawStart = a, this._drawCount = l, da(e) && (a = 0, l = s.length), n._chart = this.chart, n._datasetIndex = this.index, n._decimated = !!o._decimated, n.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(n, void 0, {
      animated: !r,
      options: c
    }, t), this.updateElements(s, a, l, t);
  }
  updateElements(t, e, n, s) {
    const o = s === "reset", { iScale: r, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s), d = r.axis, p = a.axis, { spanGaps: m, segment: b } = this.options, _ = We(m) ? m : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || s === "none", k = e + n, S = t.length;
    let M = e > 0 && this.getParsed(e - 1);
    for (let w = 0; w < S; ++w) {
      const C = t[w], A = x ? C : {};
      if (w < e || w >= k) {
        A.skip = !0;
        continue;
      }
      const T = this.getParsed(w), I = Q(T[p]), N = A[d] = r.getPixelForValue(T[d], w), D = A[p] = o || I ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, T, l) : T[p], w);
      A.skip = isNaN(N) || isNaN(D) || I, A.stop = w > 0 && Math.abs(T[d] - M[d]) > _, b && (A.parsed = T, A.raw = c.data[w]), u && (A.options = h || this.resolveDataElementOptions(w, C.active ? "active" : s)), x || this.updateElement(C, w, A, s), M = T;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, n = e.options && e.options.borderWidth || 0, s = t.data || [];
    if (!s.length)
      return n;
    const o = s[0].size(this.resolveDataElementOptions(0)), r = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(n, o, r) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
L(_i, "id", "line"), L(_i, "defaults", {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1
}), L(_i, "overrides", {
  scales: {
    _index_: {
      type: "category"
    },
    _value_: {
      type: "linear"
    }
  }
});
class Ji extends Re {
}
L(Ji, "id", "pie"), L(Ji, "defaults", {
  cutout: 0,
  rotation: 0,
  circumference: 360,
  radius: "100%"
});
function Gt() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class wn {
  constructor(t) {
    L(this, "options");
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
    Object.assign(wn.prototype, t);
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return Gt();
  }
  parse() {
    return Gt();
  }
  format() {
    return Gt();
  }
  add() {
    return Gt();
  }
  diff() {
    return Gt();
  }
  startOf() {
    return Gt();
  }
  endOf() {
    return Gt();
  }
}
var Hl = {
  _date: wn
};
function $l(i, t, e, n) {
  const { controller: s, data: o, _sorted: r } = i, a = s._cachedMeta.iScale, l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (a && t === a.axis && t !== "r" && r && o.length) {
    const c = a._reversePixels ? aa : Jt;
    if (n) {
      if (s._sharedOptions) {
        const h = o[0], u = typeof h.getRange == "function" && h.getRange(t);
        if (u) {
          const d = c(o, t, e - u), p = c(o, t, e + u);
          return {
            lo: d.lo,
            hi: p.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: u } = s._cachedMeta, { _parsed: d } = i, p = d.slice(0, h.lo + 1).reverse().findIndex((b) => !Q(b[u.axis]));
        h.lo -= Math.max(0, p);
        const m = d.slice(h.hi).findIndex((b) => !Q(b[u.axis]));
        h.hi += Math.max(0, m);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Ai(i, t, e, n, s) {
  const o = i.getSortedVisibleDatasetMetas(), r = e[t];
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: c, data: h } = o[a], { lo: u, hi: d } = $l(o[a], t, r, s);
    for (let p = u; p <= d; ++p) {
      const m = h[p];
      m.skip || n(m, c, p);
    }
  }
}
function Vl(i) {
  const t = i.indexOf("x") !== -1, e = i.indexOf("y") !== -1;
  return function(n, s) {
    const o = t ? Math.abs(n.x - s.x) : 0, r = e ? Math.abs(n.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2));
  };
}
function $i(i, t, e, n, s) {
  const o = [];
  return !s && !i.isPointInArea(t) || Ai(i, e, t, function(a, l, c) {
    !s && !$e(a, i.chartArea, 0) || a.inRange(t.x, t.y, n) && o.push({
      element: a,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Yl(i, t, e, n) {
  let s = [];
  function o(r, a, l) {
    const { startAngle: c, endAngle: h } = r.getProps([
      "startAngle",
      "endAngle"
    ], n), { angle: u } = po(r, {
      x: t.x,
      y: t.y
    });
    He(u, c, h) && s.push({
      element: r,
      datasetIndex: a,
      index: l
    });
  }
  return Ai(i, e, t, o), s;
}
function Ul(i, t, e, n, s, o) {
  let r = [];
  const a = Vl(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const p = h.inRange(t.x, t.y, s);
    if (n && !p)
      return;
    const m = h.getCenterPoint(s);
    if (!(!!o || i.isPointInArea(m)) && !p)
      return;
    const _ = a(t, m);
    _ < l ? (r = [
      {
        element: h,
        datasetIndex: u,
        index: d
      }
    ], l = _) : _ === l && r.push({
      element: h,
      datasetIndex: u,
      index: d
    });
  }
  return Ai(i, e, t, c), r;
}
function Vi(i, t, e, n, s, o) {
  return !o && !i.isPointInArea(t) ? [] : e === "r" && !n ? Yl(i, t, e, s) : Ul(i, t, e, n, s, o);
}
function ws(i, t, e, n, s) {
  const o = [], r = e === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return Ai(i, e, t, (l, c, h) => {
    l[r] && l[r](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), a = a || l.inRange(t.x, t.y, s));
  }), n && !a ? [] : o;
}
var Xl = {
  modes: {
    index(i, t, e, n) {
      const s = Qt(t, i), o = e.axis || "x", r = e.includeInvisible || !1, a = e.intersect ? $i(i, s, o, n, r) : Vi(i, s, o, !1, n, r), l = [];
      return a.length ? (i.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = a[0].index, u = c.data[h];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(i, t, e, n) {
      const s = Qt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      let a = e.intersect ? $i(i, s, o, n, r) : Vi(i, s, o, !1, n, r);
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
    point(i, t, e, n) {
      const s = Qt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return $i(i, s, o, n, r);
    },
    nearest(i, t, e, n) {
      const s = Qt(t, i), o = e.axis || "xy", r = e.includeInvisible || !1;
      return Vi(i, s, o, e.intersect, n, r);
    },
    x(i, t, e, n) {
      const s = Qt(t, i);
      return ws(i, s, "x", e.intersect, n);
    },
    y(i, t, e, n) {
      const s = Qt(t, i);
      return ws(i, s, "y", e.intersect, n);
    }
  }
};
const Lo = [
  "left",
  "top",
  "right",
  "bottom"
];
function ye(i, t) {
  return i.filter((e) => e.pos === t);
}
function ks(i, t) {
  return i.filter((e) => Lo.indexOf(e.pos) === -1 && e.box.axis === t);
}
function xe(i, t) {
  return i.sort((e, n) => {
    const s = t ? n : e, o = t ? e : n;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function ql(i) {
  const t = [];
  let e, n, s, o, r, a;
  for (e = 0, n = (i || []).length; e < n; ++e)
    s = i[e], { position: o, options: { stack: r, stackWeight: a = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: r && o + r,
      stackWeight: a
    });
  return t;
}
function Kl(i) {
  const t = {};
  for (const e of i) {
    const { stack: n, pos: s, stackWeight: o } = e;
    if (!n || !Lo.includes(s))
      continue;
    const r = t[n] || (t[n] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    r.count++, r.weight += o;
  }
  return t;
}
function Gl(i, t) {
  const e = Kl(i), { vBoxMaxWidth: n, hBoxMaxHeight: s } = t;
  let o, r, a;
  for (o = 0, r = i.length; o < r; ++o) {
    a = i[o];
    const { fullSize: l } = a.box, c = e[a.stack], h = c && a.stackWeight / c.weight;
    a.horizontal ? (a.width = h ? h * n : l && t.availableWidth, a.height = s) : (a.width = n, a.height = h ? h * s : l && t.availableHeight);
  }
  return e;
}
function Ql(i) {
  const t = ql(i), e = xe(t.filter((c) => c.box.fullSize), !0), n = xe(ye(t, "left"), !0), s = xe(ye(t, "right")), o = xe(ye(t, "top"), !0), r = xe(ye(t, "bottom")), a = ks(t, "x"), l = ks(t, "y");
  return {
    fullSize: e,
    leftAndTop: n.concat(o),
    rightAndBottom: s.concat(l).concat(r).concat(a),
    chartArea: ye(t, "chartArea"),
    vertical: n.concat(s).concat(l),
    horizontal: o.concat(r).concat(a)
  };
}
function Ss(i, t, e, n) {
  return Math.max(i[e], t[e]) + Math.max(i[n], t[n]);
}
function Io(i, t) {
  i.top = Math.max(i.top, t.top), i.left = Math.max(i.left, t.left), i.bottom = Math.max(i.bottom, t.bottom), i.right = Math.max(i.right, t.right);
}
function Zl(i, t, e, n) {
  const { pos: s, box: o } = e, r = i.maxPadding;
  if (!Z(s)) {
    e.size && (i[s] -= e.size);
    const u = n[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, i[s] += e.size;
  }
  o.getPadding && Io(r, o.getPadding());
  const a = Math.max(0, t.outerWidth - Ss(r, i, "left", "right")), l = Math.max(0, t.outerHeight - Ss(r, i, "top", "bottom")), c = a !== i.w, h = l !== i.h;
  return i.w = a, i.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function Jl(i) {
  const t = i.maxPadding;
  function e(n) {
    const s = Math.max(t[n] - i[n], 0);
    return i[n] += s, s;
  }
  i.y += e("top"), i.x += e("left"), e("right"), e("bottom");
}
function tc(i, t) {
  const e = t.maxPadding;
  function n(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((r) => {
      o[r] = Math.max(t[r], e[r]);
    }), o;
  }
  return n(i ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Ee(i, t, e, n) {
  const s = [];
  let o, r, a, l, c, h;
  for (o = 0, r = i.length, c = 0; o < r; ++o) {
    a = i[o], l = a.box, l.update(a.width || t.w, a.height || t.h, tc(a.horizontal, t));
    const { same: u, other: d } = Zl(t, e, a, n);
    c |= u && s.length, h = h || d, l.fullSize || s.push(a);
  }
  return c && Ee(s, t, e, n) || h;
}
function li(i, t, e, n, s) {
  i.top = e, i.left = t, i.right = t + n, i.bottom = e + s, i.width = n, i.height = s;
}
function Ms(i, t, e, n) {
  const s = e.padding;
  let { x: o, y: r } = t;
  for (const a of i) {
    const l = a.box, c = n[a.stack] || {
      placed: 0,
      weight: 1
    }, h = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const u = t.w * h, d = c.size || l.height;
      Be(c.start) && (r = c.start), l.fullSize ? li(l, s.left, r, e.outerWidth - s.right - s.left, d) : li(l, t.left + c.placed, r, u, d), c.start = r, c.placed += u, r = l.bottom;
    } else {
      const u = t.h * h, d = c.size || l.width;
      Be(c.start) && (o = c.start), l.fullSize ? li(l, o, s.top, d, e.outerHeight - s.bottom - s.top) : li(l, o, t.top + c.placed, d, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = r;
}
var Mt = {
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
  update(i, t, e, n) {
    if (!i)
      return;
    const s = wt(i.options.layout.padding), o = Math.max(t - s.width, 0), r = Math.max(e - s.height, 0), a = Ql(i.boxes), l = a.vertical, c = a.horizontal;
    tt(i.boxes, (b) => {
      typeof b.beforeLayout == "function" && b.beforeLayout();
    });
    const h = l.reduce((b, _) => _.box.options && _.box.options.display === !1 ? b : b + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: r,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: r / 2
    }), d = Object.assign({}, s);
    Io(d, wt(n));
    const p = Object.assign({
      maxPadding: d,
      w: o,
      h: r,
      x: s.left,
      y: s.top
    }, s), m = Gl(l.concat(c), u);
    Ee(a.fullSize, p, u, m), Ee(l, p, u, m), Ee(c, p, u, m) && Ee(l, p, u, m), Jl(p), Ms(a.leftAndTop, p, u, m), p.x += p.w, p.y += p.h, Ms(a.rightAndBottom, p, u, m), i.chartArea = {
      left: p.left,
      top: p.top,
      right: p.left + p.w,
      bottom: p.top + p.h,
      height: p.h,
      width: p.w
    }, tt(a.chartArea, (b) => {
      const _ = b.box;
      Object.assign(_, i.chartArea), _.update(p.w, p.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class zo {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, n) {
  }
  removeEventListener(t, e, n) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, n, s) {
    return e = Math.max(0, e || t.width), n = n || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : n)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class ec extends zo {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const yi = "$chartjs", ic = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Rs = (i) => i === null || i === "";
function nc(i, t) {
  const e = i.style, n = i.getAttribute("height"), s = i.getAttribute("width");
  if (i[yi] = {
    initial: {
      height: n,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Rs(s)) {
    const o = cs(i, "width");
    o !== void 0 && (i.width = o);
  }
  if (Rs(n))
    if (i.style.height === "")
      i.height = i.width / (t || 2);
    else {
      const o = cs(i, "height");
      o !== void 0 && (i.height = o);
    }
  return i;
}
const Fo = il ? {
  passive: !0
} : !1;
function sc(i, t, e) {
  i && i.addEventListener(t, e, Fo);
}
function oc(i, t, e) {
  i && i.canvas && i.canvas.removeEventListener(t, e, Fo);
}
function rc(i, t) {
  const e = ic[i.type] || i.type, { x: n, y: s } = Qt(i, t);
  return {
    type: e,
    chart: t,
    native: i,
    x: n !== void 0 ? n : null,
    y: s !== void 0 ? s : null
  };
}
function Ri(i, t) {
  for (const e of i)
    if (e === t || e.contains(t))
      return !0;
}
function ac(i, t, e) {
  const n = i.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ri(a.addedNodes, n), r = r && !Ri(a.removedNodes, n);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function lc(i, t, e) {
  const n = i.canvas, s = new MutationObserver((o) => {
    let r = !1;
    for (const a of o)
      r = r || Ri(a.removedNodes, n), r = r && !Ri(a.addedNodes, n);
    r && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const Ye = /* @__PURE__ */ new Map();
let Es = 0;
function jo() {
  const i = window.devicePixelRatio;
  i !== Es && (Es = i, Ye.forEach((t, e) => {
    e.currentDevicePixelRatio !== i && t();
  }));
}
function cc(i, t) {
  Ye.size || window.addEventListener("resize", jo), Ye.set(i, t);
}
function hc(i) {
  Ye.delete(i), Ye.size || window.removeEventListener("resize", jo);
}
function uc(i, t, e) {
  const n = i.canvas, s = n && vn(n);
  if (!s)
    return;
  const o = yo((a, l) => {
    const c = s.clientWidth;
    e(a, l), c < s.clientWidth && e();
  }, window), r = new ResizeObserver((a) => {
    const l = a[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return r.observe(s), cc(i, o), r;
}
function Yi(i, t, e) {
  e && e.disconnect(), t === "resize" && hc(i);
}
function fc(i, t, e) {
  const n = i.canvas, s = yo((o) => {
    i.ctx !== null && e(rc(o, i));
  }, i);
  return sc(n, t, s), s;
}
class dc extends zo {
  acquireContext(t, e) {
    const n = t && t.getContext && t.getContext("2d");
    return n && n.canvas === t ? (nc(t, e), n) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[yi])
      return !1;
    const n = e[yi].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const r = n[o];
      Q(r) ? e.removeAttribute(o) : e.setAttribute(o, r);
    });
    const s = n.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[yi], !0;
  }
  addEventListener(t, e, n) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), r = {
      attach: ac,
      detach: lc,
      resize: uc
    }[e] || fc;
    s[e] = r(t, e, n);
  }
  removeEventListener(t, e) {
    const n = t.$proxies || (t.$proxies = {}), s = n[e];
    if (!s)
      return;
    ({
      attach: Yi,
      detach: Yi,
      resize: Yi
    }[e] || oc)(t, e, s), n[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, n, s) {
    return el(t, e, n, s);
  }
  isAttached(t) {
    const e = t && vn(t);
    return !!(e && e.isConnected);
  }
}
function gc(i) {
  return !xn() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? ec : dc;
}
class Et {
  constructor() {
    L(this, "x");
    L(this, "y");
    L(this, "active", !1);
    L(this, "options");
    L(this, "$animations");
  }
  tooltipPosition(t) {
    const { x: e, y: n } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: n
    };
  }
  hasValue() {
    return We(this.x) && We(this.y);
  }
  getProps(t, e) {
    const n = this.$animations;
    if (!e || !n)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = n[o] && n[o].active() ? n[o]._to : this[o];
    }), s;
  }
}
L(Et, "defaults", {}), L(Et, "defaultRoutes");
function pc(i, t) {
  const e = i.options.ticks, n = mc(i), s = Math.min(e.maxTicksLimit || n, n), o = e.major.enabled ? _c(t) : [], r = o.length, a = o[0], l = o[r - 1], c = [];
  if (r > s)
    return yc(t, c, o, r / s), c;
  const h = bc(o, t, s);
  if (r > 0) {
    let u, d;
    const p = r > 1 ? Math.round((l - a) / (r - 1)) : null;
    for (ci(t, c, h, Q(p) ? 0 : a - p, a), u = 0, d = r - 1; u < d; u++)
      ci(t, c, h, o[u], o[u + 1]);
    return ci(t, c, h, l, Q(p) ? t.length : l + p), c;
  }
  return ci(t, c, h), c;
}
function mc(i) {
  const t = i.options.offset, e = i._tickSize(), n = i._length / e + (t ? 0 : 1), s = i._maxLength / e;
  return Math.floor(Math.min(n, s));
}
function bc(i, t, e) {
  const n = xc(i), s = t.length / e;
  if (!n)
    return Math.max(s, 1);
  const o = ta(n);
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const l = o[r];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function _c(i) {
  const t = [];
  let e, n;
  for (e = 0, n = i.length; e < n; e++)
    i[e].major && t.push(e);
  return t;
}
function yc(i, t, e, n) {
  let s = 0, o = e[0], r;
  for (n = Math.ceil(n), r = 0; r < i.length; r++)
    r === o && (t.push(i[r]), s++, o = e[s * n]);
}
function ci(i, t, e, n, s) {
  const o = U(n, 0), r = Math.min(U(s, i.length), i.length);
  let a = 0, l, c, h;
  for (e = Math.ceil(e), s && (l = s - n, e = l / Math.floor(l / e)), h = o; h < 0; )
    a++, h = Math.round(o + a * e);
  for (c = Math.max(o, 0); c < r; c++)
    c === h && (t.push(i[c]), a++, h = Math.round(o + a * e));
}
function xc(i) {
  const t = i.length;
  let e, n;
  if (t < 2)
    return !1;
  for (n = i[0], e = 1; e < t; ++e)
    if (i[e] - i[e - 1] !== n)
      return !1;
  return n;
}
const vc = (i) => i === "left" ? "right" : i === "right" ? "left" : i, Ts = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e, Os = (i, t) => Math.min(t || i, i);
function Cs(i, t) {
  const e = [], n = i.length / t, s = i.length;
  let o = 0;
  for (; o < s; o += n)
    e.push(i[Math.floor(o)]);
  return e;
}
function wc(i, t, e) {
  const n = i.ticks.length, s = Math.min(t, n - 1), o = i._startPixel, r = i._endPixel, a = 1e-6;
  let l = i.getPixelForTick(s), c;
  if (!(e && (n === 1 ? c = Math.max(l - o, r - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - a || l > r + a)))
    return l;
}
function kc(i, t) {
  tt(i, (e) => {
    const n = e.gc, s = n.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[n[o]];
      n.splice(0, s);
    }
  });
}
function ve(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Ps(i, t) {
  if (!i.display)
    return 0;
  const e = dt(i.font, t), n = wt(i.padding);
  return (ut(i.text) ? i.text.length : 1) * e.lineHeight + n.height;
}
function Sc(i, t) {
  return se(i, {
    scale: t,
    type: "scale"
  });
}
function Mc(i, t, e) {
  return se(i, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Rc(i, t, e) {
  let n = un(i);
  return (e && t !== "right" || !e && t === "right") && (n = vc(n)), n;
}
function Ec(i, t, e, n) {
  const { top: s, left: o, bottom: r, right: a, chart: l } = i, { chartArea: c, scales: h } = l;
  let u = 0, d, p, m;
  const b = r - s, _ = a - o;
  if (i.isHorizontal()) {
    if (p = gt(n, o, a), Z(e)) {
      const x = Object.keys(e)[0], k = e[x];
      m = h[x].getPixelForValue(k) + b - t;
    } else e === "center" ? m = (c.bottom + c.top) / 2 + b - t : m = Ts(i, e, t);
    d = a - o;
  } else {
    if (Z(e)) {
      const x = Object.keys(e)[0], k = e[x];
      p = h[x].getPixelForValue(k) - _ + t;
    } else e === "center" ? p = (c.left + c.right) / 2 - _ + t : p = Ts(i, e, t);
    m = gt(n, r, s), u = e === "left" ? -ft : ft;
  }
  return {
    titleX: p,
    titleY: m,
    maxWidth: d,
    rotation: u
  };
}
class ge extends Et {
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
    let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: s } = this;
    return t = Tt(t, Number.POSITIVE_INFINITY), e = Tt(e, Number.NEGATIVE_INFINITY), n = Tt(n, Number.POSITIVE_INFINITY), s = Tt(s, Number.NEGATIVE_INFINITY), {
      min: Tt(t, n),
      max: Tt(e, s),
      minDefined: Rt(t),
      maxDefined: Rt(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: n, minDefined: s, maxDefined: o } = this.getUserBounds(), r;
    if (s && o)
      return {
        min: e,
        max: n
      };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      r = a[l].controller.getMinMax(this, t), s || (e = Math.min(e, r.min)), o || (n = Math.max(n, r.max));
    return e = o && e > n ? n : e, n = s && e > n ? e : n, {
      min: Tt(e, Tt(n, e)),
      max: Tt(n, Tt(e, n))
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
    nt(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, n) {
    const { beginAtZero: s, grace: o, ticks: r } = this.options, a = r.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = n = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, n), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + n.left + n.right : this.height + n.top + n.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Da(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? Cs(this.ticks, a) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), r.display && (r.autoSkip || r.source === "auto") && (this.ticks = pc(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, n;
    this.isHorizontal() ? (e = this.left, n = this.right) : (e = this.top, n = this.bottom, t = !t), this._startPixel = e, this._endPixel = n, this._reversePixels = t, this._length = n - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    nt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), nt(this.options[t], [
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
    nt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let n, s, o;
    for (n = 0, s = t.length; n < s; n++)
      o = t[n], o.label = nt(e.callback, [
        o.value,
        n,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, n = Os(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let r = s, a, l, c;
    if (!this._isVisible() || !e.display || s >= o || n <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(), u = h.widest.width, d = h.highest.height, p = pt(this.chart.width - u, 0, this.maxWidth);
    a = t.offset ? this.maxWidth / n : p / (n - 1), u + 6 > a && (a = p / (n - (t.offset ? 0.5 : 1)), l = this.maxHeight - ve(t.grid) - e.padding - Ps(t.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), r = sa(Math.min(Math.asin(pt((h.highest.height + 6) / a, -1, 1)), Math.asin(pt(l / c, -1, 1)) - Math.asin(pt(d / c, -1, 1)))), r = Math.max(s, Math.min(o, r))), this.labelRotation = r;
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    nt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: n, title: s, grid: o } } = this, r = this._isVisible(), a = this.isHorizontal();
    if (r) {
      const l = Ps(s, e.options.font);
      if (a ? (t.width = this.maxWidth, t.height = ve(o) + l) : (t.height = this.maxHeight, t.width = ve(o) + l), n.display && this.ticks.length) {
        const { first: c, last: h, widest: u, highest: d } = this._getLabelSizes(), p = n.padding * 2, m = Ft(this.labelRotation), b = Math.cos(m), _ = Math.sin(m);
        if (a) {
          const x = n.mirror ? 0 : _ * u.width + b * d.height;
          t.height = Math.min(this.maxHeight, t.height + x + p);
        } else {
          const x = n.mirror ? 0 : b * u.width + _ * d.height;
          t.width = Math.min(this.maxWidth, t.width + x + p);
        }
        this._calculatePadding(c, h, _, b);
      }
    }
    this._handleMargins(), a ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, n, s) {
    const { ticks: { align: o, padding: r }, position: a } = this.options, l = this.labelRotation !== 0, c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, p = 0;
      l ? c ? (d = s * t.width, p = n * e.height) : (d = n * t.height, p = s * e.width) : o === "start" ? p = e.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, p = e.width / 2), this.paddingLeft = Math.max((d - h + r) * this.width / (this.width - h), 0), this.paddingRight = Math.max((p - u + r) * this.width / (this.width - u), 0);
    } else {
      let h = e.height / 2, u = t.height / 2;
      o === "start" ? (h = 0, u = t.height) : o === "end" && (h = e.height, u = 0), this.paddingTop = h + r, this.paddingBottom = u + r;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    nt(this.options.afterFit, [
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
    let e, n;
    for (e = 0, n = t.length; e < n; e++)
      Q(t[e].label) && (t.splice(e, 1), n--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let n = this.ticks;
      e < n.length && (n = Cs(n, e)), this._labelSizes = t = this._computeLabelSizes(n, n.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, n) {
    const { ctx: s, _longestTextCache: o } = this, r = [], a = [], l = Math.floor(e / Os(e, n));
    let c = 0, h = 0, u, d, p, m, b, _, x, k, S, M, w;
    for (u = 0; u < e; u += l) {
      if (m = t[u].label, b = this._resolveTickFontOptions(u), s.font = _ = b.string, x = o[_] = o[_] || {
        data: {},
        gc: []
      }, k = b.lineHeight, S = M = 0, !Q(m) && !ut(m))
        S = ss(s, x.data, x.gc, S, m), M = k;
      else if (ut(m))
        for (d = 0, p = m.length; d < p; ++d)
          w = m[d], !Q(w) && !ut(w) && (S = ss(s, x.data, x.gc, S, w), M += k);
      r.push(S), a.push(M), c = Math.max(S, c), h = Math.max(M, h);
    }
    kc(o, e);
    const C = r.indexOf(c), A = a.indexOf(h), T = (I) => ({
      width: r[I] || 0,
      height: a[I] || 0
    });
    return {
      first: T(0),
      last: T(e - 1),
      widest: T(C),
      highest: T(A),
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
    return ra(this._alignToPixels ? Kt(this.chart, e, 0) : e);
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
      const n = e[t];
      return n.$context || (n.$context = Mc(this.getContext(), t, n));
    }
    return this.$context || (this.$context = Sc(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Ft(this.labelRotation), n = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), r = t.autoSkipPadding || 0, a = o ? o.widest.width + r : 0, l = o ? o.highest.height + r : 0;
    return this.isHorizontal() ? l * n > a * s ? a / n : l / s : l * s < a * n ? l / n : a / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, n = this.chart, s = this.options, { grid: o, position: r, border: a } = s, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), d = ve(o), p = [], m = a.setContext(this.getContext()), b = m.display ? m.width : 0, _ = b / 2, x = function(q) {
      return Kt(n, q, b);
    };
    let k, S, M, w, C, A, T, I, N, D, B, it;
    if (r === "top")
      k = x(this.bottom), A = this.bottom - d, I = k - _, D = x(t.top) + _, it = t.bottom;
    else if (r === "bottom")
      k = x(this.top), D = t.top, it = x(t.bottom) - _, A = k + _, I = this.top + d;
    else if (r === "left")
      k = x(this.right), C = this.right - d, T = k - _, N = x(t.left) + _, B = t.right;
    else if (r === "right")
      k = x(this.left), N = t.left, B = x(t.right) - _, C = k + _, T = this.left + d;
    else if (e === "x") {
      if (r === "center")
        k = x((t.top + t.bottom) / 2 + 0.5);
      else if (Z(r)) {
        const q = Object.keys(r)[0], J = r[q];
        k = x(this.chart.scales[q].getPixelForValue(J));
      }
      D = t.top, it = t.bottom, A = k + _, I = A + d;
    } else if (e === "y") {
      if (r === "center")
        k = x((t.left + t.right) / 2);
      else if (Z(r)) {
        const q = Object.keys(r)[0], J = r[q];
        k = x(this.chart.scales[q].getPixelForValue(J));
      }
      C = k - _, T = C - d, N = t.left, B = t.right;
    }
    const st = U(s.ticks.maxTicksLimit, u), W = Math.max(1, Math.ceil(u / st));
    for (S = 0; S < u; S += W) {
      const q = this.getContext(S), J = o.setContext(q), ht = a.setContext(q), ot = J.lineWidth, g = J.color, v = ht.dash || [], E = ht.dashOffset, P = J.tickWidth, F = J.tickColor, H = J.tickBorderDash || [], j = J.tickBorderDashOffset;
      M = wc(this, S, l), M !== void 0 && (w = Kt(n, M, ot), c ? C = T = N = B = w : A = I = D = it = w, p.push({
        tx1: C,
        ty1: A,
        tx2: T,
        ty2: I,
        x1: N,
        y1: D,
        x2: B,
        y2: it,
        width: ot,
        color: g,
        borderDash: v,
        borderDashOffset: E,
        tickWidth: P,
        tickColor: F,
        tickBorderDash: H,
        tickBorderDashOffset: j
      }));
    }
    return this._ticksLength = u, this._borderValue = k, p;
  }
  _computeLabelItems(t) {
    const e = this.axis, n = this.options, { position: s, ticks: o } = n, r = this.isHorizontal(), a = this.ticks, { align: l, crossAlign: c, padding: h, mirror: u } = o, d = ve(n.grid), p = d + h, m = u ? -h : p, b = -Ft(this.labelRotation), _ = [];
    let x, k, S, M, w, C, A, T, I, N, D, B, it = "middle";
    if (s === "top")
      C = this.bottom - m, A = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      C = this.top + m, A = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, w = W.x;
    } else if (s === "right") {
      const W = this._getYAxisLabelAlignment(d);
      A = W.textAlign, w = W.x;
    } else if (e === "x") {
      if (s === "center")
        C = (t.top + t.bottom) / 2 + p;
      else if (Z(s)) {
        const W = Object.keys(s)[0], q = s[W];
        C = this.chart.scales[W].getPixelForValue(q) + p;
      }
      A = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        w = (t.left + t.right) / 2 - p;
      else if (Z(s)) {
        const W = Object.keys(s)[0], q = s[W];
        w = this.chart.scales[W].getPixelForValue(q);
      }
      A = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" && (l === "start" ? it = "top" : l === "end" && (it = "bottom"));
    const st = this._getLabelSizes();
    for (x = 0, k = a.length; x < k; ++x) {
      S = a[x], M = S.label;
      const W = o.setContext(this.getContext(x));
      T = this.getPixelForTick(x) + o.labelOffset, I = this._resolveTickFontOptions(x), N = I.lineHeight, D = ut(M) ? M.length : 1;
      const q = D / 2, J = W.color, ht = W.textStrokeColor, ot = W.textStrokeWidth;
      let g = A;
      r ? (w = T, A === "inner" && (x === k - 1 ? g = this.options.reverse ? "left" : "right" : x === 0 ? g = this.options.reverse ? "right" : "left" : g = "center"), s === "top" ? c === "near" || b !== 0 ? B = -D * N + N / 2 : c === "center" ? B = -st.highest.height / 2 - q * N + N : B = -st.highest.height + N / 2 : c === "near" || b !== 0 ? B = N / 2 : c === "center" ? B = st.highest.height / 2 - q * N : B = st.highest.height - D * N, u && (B *= -1), b !== 0 && !W.showLabelBackdrop && (w += N / 2 * Math.sin(b))) : (C = T, B = (1 - D) * N / 2);
      let v;
      if (W.showLabelBackdrop) {
        const E = wt(W.backdropPadding), P = st.heights[x], F = st.widths[x];
        let H = B - E.top, j = 0 - E.left;
        switch (it) {
          case "middle":
            H -= P / 2;
            break;
          case "bottom":
            H -= P;
            break;
        }
        switch (A) {
          case "center":
            j -= F / 2;
            break;
          case "right":
            j -= F;
            break;
          case "inner":
            x === k - 1 ? j -= F : x > 0 && (j -= F / 2);
            break;
        }
        v = {
          left: j,
          top: H,
          width: F + E.width,
          height: P + E.height,
          color: W.backdropColor
        };
      }
      _.push({
        label: M,
        font: I,
        textOffset: B,
        options: {
          rotation: b,
          color: J,
          strokeColor: ht,
          strokeWidth: ot,
          textAlign: g,
          textBaseline: it,
          translation: [
            w,
            C
          ],
          backdrop: v
        }
      });
    }
    return _;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Ft(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: n, mirror: s, padding: o } } = this.options, r = this._getLabelSizes(), a = t + o, l = r.widest.width;
    let c, h;
    return e === "left" ? s ? (h = this.right + o, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - a, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? s ? (h = this.left + o, n === "near" ? c = "right" : n === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + a, n === "near" ? c = "left" : n === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
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
    const { ctx: t, options: { backgroundColor: e }, left: n, top: s, width: o, height: r } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(n, s, o, r), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, n = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, r;
    const a = (l, c, h) => {
      !h.width || !h.color || (n.save(), n.lineWidth = h.width, n.strokeStyle = h.color, n.setLineDash(h.borderDash || []), n.lineDashOffset = h.borderDashOffset, n.beginPath(), n.moveTo(l.x, l.y), n.lineTo(c.x, c.y), n.stroke(), n.restore());
    };
    if (e.display)
      for (o = 0, r = s.length; o < r; ++o) {
        const l = s[o];
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
    const { chart: t, ctx: e, options: { border: n, grid: s } } = this, o = n.setContext(this.getContext()), r = n.display ? o.width : 0;
    if (!r)
      return;
    const a = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal() ? (c = Kt(t, this.left, r) - r / 2, h = Kt(t, this.right, a) + a / 2, u = d = l) : (u = Kt(t, this.top, r) - r / 2, d = Kt(t, this.bottom, a) + a / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(h, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const n = this.ctx, s = this._computeLabelArea();
    s && gn(n, s);
    const o = this.getLabelItems(t);
    for (const r of o) {
      const a = r.options, l = r.font, c = r.label, h = r.textOffset;
      Ve(n, c, 0, h, l, a);
    }
    s && pn(n);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: n, reverse: s } } = this;
    if (!n.display)
      return;
    const o = dt(n.font), r = wt(n.padding), a = n.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || Z(e) ? (l += r.bottom, ut(n.text) && (l += o.lineHeight * (n.text.length - 1))) : l += r.top;
    const { titleX: c, titleY: h, maxWidth: u, rotation: d } = Ec(this, l, e, a);
    Ve(t, n.text, 0, 0, o, {
      color: n.color,
      maxWidth: u,
      rotation: d,
      textAlign: Rc(a, e, s),
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
    const t = this.options, e = t.ticks && t.ticks.z || 0, n = U(t.grid && t.grid.z, -1), s = U(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== ge.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: n,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
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
    const e = this.chart.getSortedVisibleDatasetMetas(), n = this.axis + "AxisID", s = [];
    let o, r;
    for (o = 0, r = e.length; o < r; ++o) {
      const a = e[o];
      a[n] === this.id && (!t || a.type === t) && s.push(a);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return dt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class hi {
  constructor(t, e, n) {
    this.type = t, this.scope = e, this.override = n, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let n;
    Cc(e) && (n = this.register(e));
    const s = this.items, o = t.id, r = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Tc(t, r, n), this.override && lt.override(t.id, t.overrides)), r;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, n = t.id, s = this.scope;
    n in e && delete e[n], s && n in lt[s] && (delete lt[s][n], this.override && delete ne[n]);
  }
}
function Tc(i, t, e) {
  const n = At(/* @__PURE__ */ Object.create(null), [
    e ? lt.get(e) : {},
    lt.get(t),
    i.defaults
  ]);
  lt.set(t, n), i.defaultRoutes && Oc(t, i.defaultRoutes), i.descriptors && lt.describe(t, i.descriptors);
}
function Oc(i, t) {
  Object.keys(t).forEach((e) => {
    const n = e.split("."), s = n.pop(), o = [
      i
    ].concat(n).join("."), r = t[e].split("."), a = r.pop(), l = r.join(".");
    lt.route(o, s, l, a);
  });
}
function Cc(i) {
  return "id" in i && "defaults" in i;
}
class Pc {
  constructor() {
    this.controllers = new hi(ee, "datasets", !0), this.elements = new hi(Et, "elements"), this.plugins = new hi(Object, "plugins"), this.scales = new hi(ge, "scales"), this._typedRegistries = [
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
  _each(t, e, n) {
    [
      ...e
    ].forEach((s) => {
      const o = n || this._getRegistryForType(s);
      n || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : tt(s, (r) => {
        const a = n || this._getRegistryForType(r);
        this._exec(t, a, r);
      });
    });
  }
  _exec(t, e, n) {
    const s = cn(t);
    nt(n["before" + s], [], n), e[t](n), nt(n["after" + s], [], n);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const n = this._typedRegistries[e];
      if (n.isForType(t))
        return n;
    }
    return this.plugins;
  }
  _get(t, e, n) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + n + ".");
    return s;
  }
}
var Ct = /* @__PURE__ */ new Pc();
class Ac {
  constructor() {
    this._init = [];
  }
  notify(t, e, n, s) {
    e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), r = this._notify(o, t, e, n);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), r;
  }
  _notify(t, e, n, s) {
    s = s || {};
    for (const o of t) {
      const r = o.plugin, a = r[n], l = [
        e,
        s,
        o.options
      ];
      if (nt(a, l, r) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    Q(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const n = t && t.config, s = U(n.options && n.options.plugins, {}), o = Dc(n);
    return s === !1 && !e ? [] : Ic(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], n = this._cache, s = (o, r) => o.filter((a) => !r.some((l) => a.plugin.id === l.plugin.id));
    this._notify(s(e, n), t, "stop"), this._notify(s(n, e), t, "start");
  }
}
function Dc(i) {
  const t = {}, e = [], n = Object.keys(Ct.plugins.items);
  for (let o = 0; o < n.length; o++)
    e.push(Ct.getPlugin(n[o]));
  const s = i.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    e.indexOf(r) === -1 && (e.push(r), t[r.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function Lc(i, t) {
  return !t && i === !1 ? null : i === !0 ? {} : i;
}
function Ic(i, { plugins: t, localIds: e }, n, s) {
  const o = [], r = i.getContext();
  for (const a of t) {
    const l = a.id, c = Lc(n[l], s);
    c !== null && o.push({
      plugin: a,
      options: zc(i.config, {
        plugin: a,
        local: e[l]
      }, c, r)
    });
  }
  return o;
}
function zc(i, { plugin: t, local: e }, n, s) {
  const o = i.pluginScopeKeys(t), r = i.getOptionScopes(n, o);
  return e && t.defaults && r.push(t.defaults), i.createResolver(r, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function tn(i, t) {
  const e = lt.datasets[i] || {};
  return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Fc(i, t) {
  let e = i;
  return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function jc(i, t) {
  return i === t ? "_index_" : "_value_";
}
function As(i) {
  if (i === "x" || i === "y" || i === "r")
    return i;
}
function Nc(i) {
  if (i === "top" || i === "bottom")
    return "x";
  if (i === "left" || i === "right")
    return "y";
}
function en(i, ...t) {
  if (As(i))
    return i;
  for (const e of t) {
    const n = e.axis || Nc(e.position) || i.length > 1 && As(i[0].toLowerCase());
    if (n)
      return n;
  }
  throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`);
}
function Ds(i, t, e) {
  if (e[t + "AxisID"] === i)
    return {
      axis: t
    };
}
function Bc(i, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((n) => n.xAxisID === i || n.yAxisID === i);
    if (e.length)
      return Ds(i, "x", e[0]) || Ds(i, "y", e[0]);
  }
  return {};
}
function Wc(i, t) {
  const e = ne[i.type] || {
    scales: {}
  }, n = t.scales || {}, s = tn(i.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach((r) => {
    const a = n[r];
    if (!Z(a))
      return console.error(`Invalid scale configuration for scale: ${r}`);
    if (a._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${r}`);
    const l = en(r, a, Bc(r, i), lt.scales[a.type]), c = jc(l, s), h = e.scales || {};
    o[r] = Ce(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      a,
      h[l],
      h[c]
    ]);
  }), i.data.datasets.forEach((r) => {
    const a = r.type || i.type, l = r.indexAxis || tn(a, t), h = (ne[a] || {}).scales || {};
    Object.keys(h).forEach((u) => {
      const d = Fc(u, l), p = r[d + "AxisID"] || d;
      o[p] = o[p] || /* @__PURE__ */ Object.create(null), Ce(o[p], [
        {
          axis: d
        },
        n[p],
        h[u]
      ]);
    });
  }), Object.keys(o).forEach((r) => {
    const a = o[r];
    Ce(a, [
      lt.scales[a.type],
      lt.scale
    ]);
  }), o;
}
function No(i) {
  const t = i.options || (i.options = {});
  t.plugins = U(t.plugins, {}), t.scales = Wc(i, t);
}
function Bo(i) {
  return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i;
}
function Hc(i) {
  return i = i || {}, i.data = Bo(i.data), No(i), i;
}
const Ls = /* @__PURE__ */ new Map(), Wo = /* @__PURE__ */ new Set();
function ui(i, t) {
  let e = Ls.get(i);
  return e || (e = t(), Ls.set(i, e), Wo.add(e)), e;
}
const we = (i, t, e) => {
  const n = ie(t, e);
  n !== void 0 && i.add(n);
};
class $c {
  constructor(t) {
    this._config = Hc(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = Bo(t);
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
    this.clearCache(), No(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return ui(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return ui(`${t}.transition.${e}`, () => [
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
    return ui(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, n = this.type;
    return ui(`${n}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const n = this._scopeCache;
    let s = n.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), n.set(t, s)), s;
  }
  getOptionScopes(t, e, n) {
    const { options: s, type: o } = this, r = this._cachedScopes(t, n), a = r.get(e);
    if (a)
      return a;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((u) => we(l, t, u))), h.forEach((u) => we(l, s, u)), h.forEach((u) => we(l, ne[o] || {}, u)), h.forEach((u) => we(l, lt, u)), h.forEach((u) => we(l, Qi, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), Wo.has(e) && r.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ne[e] || {},
      lt.datasets[e] || {},
      {
        type: e
      },
      lt,
      Qi
    ];
  }
  resolveNamedOptions(t, e, n, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: r, subPrefixes: a } = Is(this._resolverCache, t, s);
    let l = r;
    if (Yc(r, e)) {
      o.$shared = !1, n = Ut(n) ? n() : n;
      const c = this.createResolver(t, n, a);
      l = fe(r, n, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, n = [
    ""
  ], s) {
    const { resolver: o } = Is(this._resolverCache, t, n);
    return Z(e) ? fe(o, e, void 0, s) : o;
  }
}
function Is(i, t, e) {
  let n = i.get(t);
  n || (n = /* @__PURE__ */ new Map(), i.set(t, n));
  const s = e.join();
  let o = n.get(s);
  return o || (o = {
    resolver: bn(t, e),
    subPrefixes: e.filter((a) => !a.toLowerCase().includes("hover"))
  }, n.set(s, o)), o;
}
const Vc = (i) => Z(i) && Object.getOwnPropertyNames(i).some((t) => Ut(i[t]));
function Yc(i, t) {
  const { isScriptable: e, isIndexable: n } = ko(i);
  for (const s of t) {
    const o = e(s), r = n(s), a = (r || o) && i[s];
    if (o && (Ut(a) || Vc(a)) || r && ut(a))
      return !0;
  }
  return !1;
}
var Uc = "4.4.9";
const Xc = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function zs(i, t) {
  return i === "top" || i === "bottom" || Xc.indexOf(i) === -1 && t === "x";
}
function Fs(i, t) {
  return function(e, n) {
    return e[i] === n[i] ? e[t] - n[t] : e[i] - n[i];
  };
}
function js(i) {
  const t = i.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), nt(e && e.onComplete, [
    i
  ], t);
}
function qc(i) {
  const t = i.chart, e = t.options.animation;
  nt(e && e.onProgress, [
    i
  ], t);
}
function Ho(i) {
  return xn() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i;
}
const xi = {}, Ns = (i) => {
  const t = Ho(i);
  return Object.values(xi).filter((e) => e.canvas === t).pop();
};
function Kc(i, t, e) {
  const n = Object.keys(i);
  for (const s of n) {
    const o = +s;
    if (o >= t) {
      const r = i[s];
      delete i[s], (e > 0 || o > t) && (i[o + e] = r);
    }
  }
}
function Gc(i, t, e, n) {
  return !e || i.type === "mouseout" ? null : n ? t : i;
}
var Bt;
let Xt = (Bt = class {
  static register(...t) {
    Ct.add(...t), Bs();
  }
  static unregister(...t) {
    Ct.remove(...t), Bs();
  }
  constructor(t, e) {
    const n = this.config = new $c(e), s = Ho(t), o = Ns(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const r = n.createResolver(n.chartOptionScopes(), this.getContext());
    this.platform = new (n.platform || gc(s))(), this.platform.updateConfig(n);
    const a = this.platform.acquireContext(s, r.aspectRatio), l = a && a.canvas, c = l && l.height, h = l && l.width;
    if (this.id = Yr(), this.ctx = a, this.canvas = l, this.width = h, this.height = c, this._options = r, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Ac(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ha((u) => this.update(u), r.resizeDelay || 0), this._dataChanges = [], xi[this.id] = this, !a || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Lt.listen(this, "complete", js), Lt.listen(this, "progress", qc), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: n, height: s, _aspectRatio: o } = this;
    return Q(t) ? e && o ? o : s ? n / s : null : t;
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
    return Ct;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : ls(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return os(this.canvas, this.ctx), this;
  }
  stop() {
    return Lt.stop(this), this;
  }
  resize(t, e) {
    Lt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const n = this.options, s = this.canvas, o = n.maintainAspectRatio && this.aspectRatio, r = this.platform.getMaximumSize(s, t, e, o), a = n.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = r.width, this.height = r.height, this._aspectRatio = this.aspectRatio, ls(this, a, !0) && (this.notifyPlugins("resize", {
      size: r
    }), nt(n.onResize, [
      this,
      r
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    tt(e, (n, s) => {
      n.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, n = this.scales, s = Object.keys(n).reduce((r, a) => (r[a] = !1, r), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((r) => {
      const a = e[r], l = en(r, a), c = l === "r", h = l === "x";
      return {
        options: a,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), tt(o, (r) => {
      const a = r.options, l = a.id, c = en(l, a), h = U(a.type, r.dtype);
      (a.position === void 0 || zs(a.position, c) !== zs(r.dposition)) && (a.position = r.dposition), s[l] = !0;
      let u = null;
      if (l in n && n[l].type === h)
        u = n[l];
      else {
        const d = Ct.getScale(h);
        u = new d({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), n[u.id] = u;
      }
      u.init(a, t);
    }), tt(s, (r, a) => {
      r || delete n[a];
    }), tt(n, (r) => {
      Mt.configure(this, r, r.options), Mt.addBox(this, r);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, n = t.length;
    if (t.sort((s, o) => s.index - o.index), n > e) {
      for (let s = e; s < n; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, n - e);
    }
    this._sortedMetasets = t.slice(0).sort(Fs("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((n, s) => {
      e.filter((o) => o === n._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let n, s;
    for (this._removeUnreferencedMetasets(), n = 0, s = e.length; n < s; n++) {
      const o = e[n];
      let r = this.getDatasetMeta(n);
      const a = o.type || this.config.type;
      if (r.type && r.type !== a && (this._destroyDatasetMeta(n), r = this.getDatasetMeta(n)), r.type = a, r.indexAxis = o.indexAxis || tn(a, this.options), r.order = o.order || 0, r.index = n, r.label = "" + o.label, r.visible = this.isDatasetVisible(n), r.controller)
        r.controller.updateIndex(n), r.controller.linkScales();
      else {
        const l = Ct.getController(a), { datasetElementType: c, dataElementType: h } = lt.datasets[a];
        Object.assign(l, {
          dataElementType: Ct.getElement(h),
          datasetElementType: c && Ct.getElement(c)
        }), r.controller = new l(this, n), t.push(r.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    tt(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const n = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !n.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let r = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: u } = this.getDatasetMeta(c), d = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(d), r = Math.max(+u.getMaxOverflow(), r);
    }
    r = this._minPadding = n.layout.autoPadding ? r : 0, this._updateLayout(r), s || tt(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Fs("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render();
  }
  _updateScales() {
    tt(this.scales, (t) => {
      Mt.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), n = new Set(t.events);
    (!Kn(e, n) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: n, start: s, count: o } of e) {
      const r = n === "_removeElements" ? -o : o;
      Kc(t, s, r);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, n = (o) => new Set(t.filter((r) => r[0] === o).map((r, a) => a + "," + r.splice(1).join(","))), s = n(0);
    for (let o = 1; o < e; o++)
      if (!Kn(s, n(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
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
    Mt.update(this, this.width, this.height, t);
    const e = this.chartArea, n = e.width <= 0 || e.height <= 0;
    this._layers = [], tt(this.boxes, (s) => {
      n && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, n = this.data.datasets.length; e < n; ++e)
        this._updateDataset(e, Ut(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const n = this.getDatasetMeta(t), s = {
      meta: n,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (n.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Lt.has(this) ? this.attached && !Lt.running(this) && Lt.start(this) : (this.draw(), js({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: n, height: s } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(n, s);
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
    const e = this._sortedMetasets, n = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const r = e[s];
      (!t || r.visible) && n.push(r);
    }
    return n;
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
    const e = this.ctx, n = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, s = ml(this, t);
    this.notifyPlugins("beforeDatasetDraw", n) !== !1 && (s && gn(e, s), t.controller.draw(), s && pn(e), n.cancelable = !1, this.notifyPlugins("afterDatasetDraw", n));
  }
  isPointInArea(t) {
    return $e(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, n, s) {
    const o = Xl.modes[e];
    return typeof o == "function" ? o(this, t, n, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], n = this._metasets;
    let s = n.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
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
    }, n.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = se(null, {
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
    const n = this.getDatasetMeta(t);
    return typeof n.hidden == "boolean" ? !n.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const n = this.getDatasetMeta(t);
    n.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, n) {
    const s = n ? "show" : "hide", o = this.getDatasetMeta(t), r = o.controller._resolveAnimations(void 0, s);
    Be(e) ? (o.data[e].hidden = !n, this.update()) : (this.setDatasetVisibility(t, n), r.update(o, {
      visible: n
    }), this.update((a) => a.datasetIndex === t ? s : void 0));
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
    for (this.stop(), Lt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), os(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete xi[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, n = (o, r) => {
      e.addEventListener(this, o, r), t[o] = r;
    }, s = (o, r, a) => {
      o.offsetX = r, o.offsetY = a, this._eventHandler(o);
    };
    tt(this.options.events, (o) => n(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, n = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let r;
    const a = () => {
      s("attach", a), this.attached = !0, this.resize(), n("resize", o), n("detach", r);
    };
    r = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), n("attach", a);
    }, e.isAttached(this.canvas) ? a() : r();
  }
  unbindEvents() {
    tt(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, tt(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, n) {
    const s = n ? "set" : "remove";
    let o, r, a, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), a = 0, l = t.length; a < l; ++a) {
      r = t[a];
      const c = r && this.getDatasetMeta(r.datasetIndex).controller;
      c && c[s + "HoverStyle"](r.element, r.datasetIndex, r.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], n = t.map(({ datasetIndex: o, index: r }) => {
      const a = this.getDatasetMeta(o);
      if (!a)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: a.data[r],
        index: r
      };
    });
    !vi(n, e) && (this._active = n, this._lastEvent = null, this._updateHoverStyles(n, e));
  }
  notifyPlugins(t, e, n) {
    return this._plugins.notify(this, t, e, n);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, n) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)), r = o(e, t), a = n ? t : o(t, e);
    r.length && this.updateHoverStyle(r, s.mode, !1), a.length && s.mode && this.updateHoverStyle(a, s.mode, !0);
  }
  _eventHandler(t, e) {
    const n = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (r) => (r.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", n, s) === !1)
      return;
    const o = this._handleEvent(t, e, n.inChartArea);
    return n.cancelable = !1, this.notifyPlugins("afterEvent", n, s), (o || n.changed) && this.render(), this;
  }
  _handleEvent(t, e, n) {
    const { _active: s = [], options: o } = this, r = e, a = this._getActiveElements(t, s, n, r), l = Qr(t), c = Gc(t, this._lastEvent, n, l);
    n && (this._lastEvent = null, nt(o.onHover, [
      t,
      a,
      this
    ], this), l && nt(o.onClick, [
      t,
      a,
      this
    ], this));
    const h = !vi(a, s);
    return (h || e) && (this._active = a, this._updateHoverStyles(a, s, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, n, s) {
    if (t.type === "mouseout")
      return [];
    if (!n)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}, L(Bt, "defaults", lt), L(Bt, "instances", xi), L(Bt, "overrides", ne), L(Bt, "registry", Ct), L(Bt, "version", Uc), L(Bt, "getChart", Ns), Bt);
function Bs() {
  return tt(Xt.instances, (i) => i._plugins.invalidate());
}
function Qc(i, t, e) {
  const { startAngle: n, pixelMargin: s, x: o, y: r, outerRadius: a, innerRadius: l } = t;
  let c = s / a;
  i.beginPath(), i.arc(o, r, a, n - c, e + c), l > s ? (c = s / l, i.arc(o, r, l, e + c, n - c, !0)) : i.arc(o, r, s, e + ft, n - ft), i.closePath(), i.clip();
}
function Zc(i) {
  return mn(i, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function Jc(i, t, e, n) {
  const s = Zc(i.options.borderRadius), o = (e - t) / 2, r = Math.min(o, n * t / 2), a = (l) => {
    const c = (e - Math.min(o, l)) * n / 2;
    return pt(l, 0, Math.min(o, c));
  };
  return {
    outerStart: a(s.outerStart),
    outerEnd: a(s.outerEnd),
    innerStart: pt(s.innerStart, 0, r),
    innerEnd: pt(s.innerEnd, 0, r)
  };
}
function ae(i, t, e, n) {
  return {
    x: e + i * Math.cos(t),
    y: n + i * Math.sin(t)
  };
}
function Ei(i, t, e, n, s, o) {
  const { x: r, y: a, startAngle: l, pixelMargin: c, innerRadius: h } = t, u = Math.max(t.outerRadius + n + e - c, 0), d = h > 0 ? h + n + e + c : 0;
  let p = 0;
  const m = s - l;
  if (n) {
    const W = h > 0 ? h - n : 0, q = u > 0 ? u - n : 0, J = (W + q) / 2, ht = J !== 0 ? m * J / (J + n) : m;
    p = (m - ht) / 2;
  }
  const b = Math.max(1e-3, m * u - e / ct) / u, _ = (m - b) / 2, x = l + _ + p, k = s - _ - p, { outerStart: S, outerEnd: M, innerStart: w, innerEnd: C } = Jc(t, d, u, k - x), A = u - S, T = u - M, I = x + S / A, N = k - M / T, D = d + w, B = d + C, it = x + w / D, st = k - C / B;
  if (i.beginPath(), o) {
    const W = (I + N) / 2;
    if (i.arc(r, a, u, I, W), i.arc(r, a, u, W, N), M > 0) {
      const ot = ae(T, N, r, a);
      i.arc(ot.x, ot.y, M, N, k + ft);
    }
    const q = ae(B, k, r, a);
    if (i.lineTo(q.x, q.y), C > 0) {
      const ot = ae(B, st, r, a);
      i.arc(ot.x, ot.y, C, k + ft, st + Math.PI);
    }
    const J = (k - C / d + (x + w / d)) / 2;
    if (i.arc(r, a, d, k - C / d, J, !0), i.arc(r, a, d, J, x + w / d, !0), w > 0) {
      const ot = ae(D, it, r, a);
      i.arc(ot.x, ot.y, w, it + Math.PI, x - ft);
    }
    const ht = ae(A, x, r, a);
    if (i.lineTo(ht.x, ht.y), S > 0) {
      const ot = ae(A, I, r, a);
      i.arc(ot.x, ot.y, S, x - ft, I);
    }
  } else {
    i.moveTo(r, a);
    const W = Math.cos(I) * u + r, q = Math.sin(I) * u + a;
    i.lineTo(W, q);
    const J = Math.cos(N) * u + r, ht = Math.sin(N) * u + a;
    i.lineTo(J, ht);
  }
  i.closePath();
}
function th(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a } = t;
  let l = t.endAngle;
  if (o) {
    Ei(i, t, e, n, l, s);
    for (let c = 0; c < o; ++c)
      i.fill();
    isNaN(a) || (l = r + (a % at || at));
  }
  return Ei(i, t, e, n, l, s), i.fill(), l;
}
function eh(i, t, e, n, s) {
  const { fullCircles: o, startAngle: r, circumference: a, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: u, borderDashOffset: d } = l, p = l.borderAlign === "inner";
  if (!c)
    return;
  i.setLineDash(u || []), i.lineDashOffset = d, p ? (i.lineWidth = c * 2, i.lineJoin = h || "round") : (i.lineWidth = c, i.lineJoin = h || "bevel");
  let m = t.endAngle;
  if (o) {
    Ei(i, t, e, n, m, s);
    for (let b = 0; b < o; ++b)
      i.stroke();
    isNaN(a) || (m = r + (a % at || at));
  }
  p && Qc(i, t, m), o || (Ei(i, t, e, n, m, s), i.stroke());
}
class le extends Et {
  constructor(e) {
    super();
    L(this, "circumference");
    L(this, "endAngle");
    L(this, "fullCircles");
    L(this, "innerRadius");
    L(this, "outerRadius");
    L(this, "pixelMargin");
    L(this, "startAngle");
    this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, e && Object.assign(this, e);
  }
  inRange(e, n, s) {
    const o = this.getProps([
      "x",
      "y"
    ], s), { angle: r, distance: a } = po(o, {
      x: e,
      y: n
    }), { startAngle: l, endAngle: c, innerRadius: h, outerRadius: u, circumference: d } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], s), p = (this.options.spacing + this.options.borderWidth) / 2, m = U(d, c - l), b = He(r, l, c) && l !== c, _ = m >= at || b, x = $t(a, h + p, u + p);
    return _ && x;
  }
  getCenterPoint(e) {
    const { x: n, y: s, startAngle: o, endAngle: r, innerRadius: a, outerRadius: l } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], e), { offset: c, spacing: h } = this.options, u = (o + r) / 2, d = (a + l + h + c) / 2;
    return {
      x: n + Math.cos(u) * d,
      y: s + Math.sin(u) * d
    };
  }
  tooltipPosition(e) {
    return this.getCenterPoint(e);
  }
  draw(e) {
    const { options: n, circumference: s } = this, o = (n.offset || 0) / 4, r = (n.spacing || 0) / 2, a = n.circular;
    if (this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = s > at ? Math.floor(s / at) : 0, s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    e.save();
    const l = (this.startAngle + this.endAngle) / 2;
    e.translate(Math.cos(l) * o, Math.sin(l) * o);
    const c = 1 - Math.sin(Math.min(ct, s || 0)), h = o * c;
    e.fillStyle = n.backgroundColor, e.strokeStyle = n.borderColor, th(e, this, h, r, a), eh(e, this, h, r, a), e.restore();
  }
}
L(le, "id", "arc"), L(le, "defaults", {
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
}), L(le, "defaultRoutes", {
  backgroundColor: "backgroundColor"
}), L(le, "descriptors", {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash"
});
function $o(i, t, e = t) {
  i.lineCap = U(e.borderCapStyle, t.borderCapStyle), i.setLineDash(U(e.borderDash, t.borderDash)), i.lineDashOffset = U(e.borderDashOffset, t.borderDashOffset), i.lineJoin = U(e.borderJoinStyle, t.borderJoinStyle), i.lineWidth = U(e.borderWidth, t.borderWidth), i.strokeStyle = U(e.borderColor, t.borderColor);
}
function ih(i, t, e) {
  i.lineTo(e.x, e.y);
}
function nh(i) {
  return i.stepped ? Sa : i.tension || i.cubicInterpolationMode === "monotone" ? Ma : ih;
}
function Vo(i, t, e = {}) {
  const n = i.length, { start: s = 0, end: o = n - 1 } = e, { start: r, end: a } = t, l = Math.max(s, r), c = Math.min(o, a), h = s < r && o < r || s > a && o > a;
  return {
    count: n,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? n + c - l : c - l
  };
}
function sh(i, t, e, n) {
  const { points: s, options: o } = t, { count: r, start: a, loop: l, ilen: c } = Vo(s, e, n), h = nh(o);
  let { move: u = !0, reverse: d } = n || {}, p, m, b;
  for (p = 0; p <= c; ++p)
    m = s[(a + (d ? c - p : p)) % r], !m.skip && (u ? (i.moveTo(m.x, m.y), u = !1) : h(i, b, m, d, o.stepped), b = m);
  return l && (m = s[(a + (d ? c : 0)) % r], h(i, b, m, d, o.stepped)), !!l;
}
function oh(i, t, e, n) {
  const s = t.points, { count: o, start: r, ilen: a } = Vo(s, e, n), { move: l = !0, reverse: c } = n || {};
  let h = 0, u = 0, d, p, m, b, _, x;
  const k = (M) => (r + (c ? a - M : M)) % o, S = () => {
    b !== _ && (i.lineTo(h, _), i.lineTo(h, b), i.lineTo(h, x));
  };
  for (l && (p = s[k(0)], i.moveTo(p.x, p.y)), d = 0; d <= a; ++d) {
    if (p = s[k(d)], p.skip)
      continue;
    const M = p.x, w = p.y, C = M | 0;
    C === m ? (w < b ? b = w : w > _ && (_ = w), h = (u * h + M) / ++u) : (S(), i.lineTo(M, w), m = C, u = 0, b = _ = w), x = w;
  }
  S();
}
function nn(i) {
  const t = i.options, e = t.borderDash && t.borderDash.length;
  return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? oh : sh;
}
function rh(i) {
  return i.stepped ? nl : i.tension || i.cubicInterpolationMode === "monotone" ? sl : Zt;
}
function ah(i, t, e, n) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, n) && s.closePath()), $o(i, t.options), i.stroke(s);
}
function lh(i, t, e, n) {
  const { segments: s, options: o } = t, r = nn(t);
  for (const a of s)
    $o(i, o, a.style), i.beginPath(), r(i, t, a, {
      start: e,
      end: e + n - 1
    }) && i.closePath(), i.stroke();
}
const ch = typeof Path2D == "function";
function hh(i, t, e, n) {
  ch && !t.options.segment ? ah(i, t, e, n) : lh(i, t, e, n);
}
class Te extends Et {
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const n = this.options;
    if ((n.tension || n.cubicInterpolationMode === "monotone") && !n.stepped && !this._pointsUpdated) {
      const s = n.spanGaps ? this._loop : this._fullLoop;
      Ka(this._points, n, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = fl(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, n = t.length;
    return n && e[t[n - 1].end];
  }
  interpolate(t, e) {
    const n = this.options, s = t[e], o = this.points, r = cl(this, {
      property: e,
      start: s,
      end: s
    });
    if (!r.length)
      return;
    const a = [], l = rh(n);
    let c, h;
    for (c = 0, h = r.length; c < h; ++c) {
      const { start: u, end: d } = r[c], p = o[u], m = o[d];
      if (p === m) {
        a.push(p);
        continue;
      }
      const b = Math.abs((s - p[e]) / (m[e] - p[e])), _ = l(p, m, b, n.stepped);
      _[e] = t[e], a.push(_);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, e, n) {
    return nn(this)(t, this, e, n);
  }
  path(t, e, n) {
    const s = this.segments, o = nn(this);
    let r = this._loop;
    e = e || 0, n = n || this.points.length - e;
    for (const a of s)
      r &= o(t, this, a, {
        start: e,
        end: e + n - 1
      });
    return !!r;
  }
  draw(t, e, n, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), hh(t, this, n, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
L(Te, "id", "line"), L(Te, "defaults", {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}), L(Te, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
}), L(Te, "descriptors", {
  _scriptable: !0,
  _indexable: (t) => t !== "borderDash" && t !== "fill"
});
function Ws(i, t, e, n) {
  const s = i.options, { [e]: o } = i.getProps([
    e
  ], n);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Ie extends Et {
  constructor(e) {
    super();
    L(this, "parsed");
    L(this, "skip");
    L(this, "stop");
    this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, e && Object.assign(this, e);
  }
  inRange(e, n, s) {
    const o = this.options, { x: r, y: a } = this.getProps([
      "x",
      "y"
    ], s);
    return Math.pow(e - r, 2) + Math.pow(n - a, 2) < Math.pow(o.hitRadius + o.radius, 2);
  }
  inXRange(e, n) {
    return Ws(this, e, "x", n);
  }
  inYRange(e, n) {
    return Ws(this, e, "y", n);
  }
  getCenterPoint(e) {
    const { x: n, y: s } = this.getProps([
      "x",
      "y"
    ], e);
    return {
      x: n,
      y: s
    };
  }
  size(e) {
    e = e || this.options || {};
    let n = e.radius || 0;
    n = Math.max(n, n && e.hoverRadius || 0);
    const s = n && e.borderWidth || 0;
    return (n + s) * 2;
  }
  draw(e, n) {
    const s = this.options;
    this.skip || s.radius < 0.1 || !$e(this, n, this.size(s) / 2) || (e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.fillStyle = s.backgroundColor, Zi(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
L(Ie, "id", "point"), /**
* @type {any}
*/
L(Ie, "defaults", {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0
}), /**
* @type {any}
*/
L(Ie, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
function Yo(i, t) {
  const { x: e, y: n, base: s, width: o, height: r } = i.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let a, l, c, h, u;
  return i.horizontal ? (u = r / 2, a = Math.min(e, s), l = Math.max(e, s), c = n - u, h = n + u) : (u = o / 2, a = e - u, l = e + u, c = Math.min(n, s), h = Math.max(n, s)), {
    left: a,
    top: c,
    right: l,
    bottom: h
  };
}
function Vt(i, t, e, n) {
  return i ? 0 : pt(t, e, n);
}
function uh(i, t, e) {
  const n = i.options.borderWidth, s = i.borderSkipped, o = wo(n);
  return {
    t: Vt(s.top, o.top, 0, e),
    r: Vt(s.right, o.right, 0, t),
    b: Vt(s.bottom, o.bottom, 0, e),
    l: Vt(s.left, o.left, 0, t)
  };
}
function fh(i, t, e) {
  const { enableBorderRadius: n } = i.getProps([
    "enableBorderRadius"
  ]), s = i.options.borderRadius, o = ce(s), r = Math.min(t, e), a = i.borderSkipped, l = n || Z(s);
  return {
    topLeft: Vt(!l || a.top || a.left, o.topLeft, 0, r),
    topRight: Vt(!l || a.top || a.right, o.topRight, 0, r),
    bottomLeft: Vt(!l || a.bottom || a.left, o.bottomLeft, 0, r),
    bottomRight: Vt(!l || a.bottom || a.right, o.bottomRight, 0, r)
  };
}
function dh(i) {
  const t = Yo(i), e = t.right - t.left, n = t.bottom - t.top, s = uh(i, e / 2, n / 2), o = fh(i, e / 2, n / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: n,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: n - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function Ui(i, t, e, n) {
  const s = t === null, o = e === null, a = i && !(s && o) && Yo(i, n);
  return a && (s || $t(t, a.left, a.right)) && (o || $t(e, a.top, a.bottom));
}
function gh(i) {
  return i.topLeft || i.topRight || i.bottomLeft || i.bottomRight;
}
function ph(i, t) {
  i.rect(t.x, t.y, t.w, t.h);
}
function Xi(i, t, e = {}) {
  const n = i.x !== e.x ? -t : 0, s = i.y !== e.y ? -t : 0, o = (i.x + i.w !== e.x + e.w ? t : 0) - n, r = (i.y + i.h !== e.y + e.h ? t : 0) - s;
  return {
    x: i.x + n,
    y: i.y + s,
    w: i.w + o,
    h: i.h + r,
    radius: i.radius
  };
}
class ue extends Et {
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: n, backgroundColor: s } } = this, { inner: o, outer: r } = dh(this), a = gh(r.radius) ? Si : ph;
    t.save(), (r.w !== o.w || r.h !== o.h) && (t.beginPath(), a(t, Xi(r, e, o)), t.clip(), a(t, Xi(o, -e, r)), t.fillStyle = n, t.fill("evenodd")), t.beginPath(), a(t, Xi(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, n) {
    return Ui(this, t, e, n);
  }
  inXRange(t, e) {
    return Ui(this, t, null, e);
  }
  inYRange(t, e) {
    return Ui(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: n, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + s) / 2 : e,
      y: o ? n : (n + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
L(ue, "id", "bar"), L(ue, "defaults", {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0
}), L(ue, "defaultRoutes", {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor"
});
const Hs = (i, t) => {
  let { boxHeight: e = t, boxWidth: n = t } = i;
  return i.usePointStyle && (e = Math.min(e, t), n = i.pointStyleWidth || Math.min(n, t)), {
    boxWidth: n,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, mh = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index;
class $s extends Et {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, n) {
    this.maxWidth = t, this.maxHeight = e, this._margins = n, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = nt(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((n) => t.filter(n, this.chart.data))), t.sort && (e = e.sort((n, s) => t.sort(n, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const n = t.labels, s = dt(n.font), o = s.size, r = this._computeTitleHeight(), { boxWidth: a, itemHeight: l } = Hs(n, o);
    let c, h;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(r, o, a, l) + 10) : (h = this.maxHeight, c = this._fitCols(r, s, a, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, n, s) {
    const { ctx: o, maxWidth: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + a;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, p = -h;
    return this.legendItems.forEach((m, b) => {
      const _ = n + e / 2 + o.measureText(m.text).width;
      (b === 0 || c[c.length - 1] + _ + 2 * a > r) && (u += h, c[c.length - (b > 0 ? 0 : 1)] = 0, p += h, d++), l[b] = {
        left: 0,
        top: p,
        row: d,
        width: _,
        height: s
      }, c[c.length - 1] += _ + a;
    }), u;
  }
  _fitCols(t, e, n, s) {
    const { ctx: o, maxHeight: r, options: { labels: { padding: a } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = r - t;
    let u = a, d = 0, p = 0, m = 0, b = 0;
    return this.legendItems.forEach((_, x) => {
      const { itemWidth: k, itemHeight: S } = bh(n, e, o, _, s);
      x > 0 && p + S + 2 * a > h && (u += d + a, c.push({
        width: d,
        height: p
      }), m += d + a, b++, d = p = 0), l[x] = {
        left: m,
        top: p,
        col: b,
        width: k,
        height: S
      }, d = Math.max(d, k), p += S + a;
    }), u += d, c.push({
      width: d,
      height: p
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: n, labels: { padding: s }, rtl: o } } = this, r = he(o, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0, l = gt(n, this.left + s, this.right - this.lineWidths[a]);
      for (const c of e)
        a !== c.row && (a = c.row, l = gt(n, this.left + s, this.right - this.lineWidths[a])), c.top += this.top + t + s, c.left = r.leftForLtr(r.x(l), c.width), l += c.width + s;
    } else {
      let a = 0, l = gt(n, this.top + t + s, this.bottom - this.columnSizes[a].height);
      for (const c of e)
        c.col !== a && (a = c.col, l = gt(n, this.top + t + s, this.bottom - this.columnSizes[a].height)), c.top = l, c.left += this.left + s, c.left = r.leftForLtr(r.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      gn(t, this), this._draw(), pn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: n, ctx: s } = this, { align: o, labels: r } = t, a = lt.color, l = he(t.rtl, this.left, this.width), c = dt(r.font), { padding: h } = r, u = c.size, d = u / 2;
    let p;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: m, boxHeight: b, itemHeight: _ } = Hs(r, u), x = function(C, A, T) {
      if (isNaN(m) || m <= 0 || isNaN(b) || b < 0)
        return;
      s.save();
      const I = U(T.lineWidth, 1);
      if (s.fillStyle = U(T.fillStyle, a), s.lineCap = U(T.lineCap, "butt"), s.lineDashOffset = U(T.lineDashOffset, 0), s.lineJoin = U(T.lineJoin, "miter"), s.lineWidth = I, s.strokeStyle = U(T.strokeStyle, a), s.setLineDash(U(T.lineDash, [])), r.usePointStyle) {
        const N = {
          radius: b * Math.SQRT2 / 2,
          pointStyle: T.pointStyle,
          rotation: T.rotation,
          borderWidth: I
        }, D = l.xPlus(C, m / 2), B = A + d;
        vo(s, N, D, B, r.pointStyleWidth && m);
      } else {
        const N = A + Math.max((u - b) / 2, 0), D = l.leftForLtr(C, m), B = ce(T.borderRadius);
        s.beginPath(), Object.values(B).some((it) => it !== 0) ? Si(s, {
          x: D,
          y: N,
          w: m,
          h: b,
          radius: B
        }) : s.rect(D, N, m, b), s.fill(), I !== 0 && s.stroke();
      }
      s.restore();
    }, k = function(C, A, T) {
      Ve(s, T.text, C, A + _ / 2, c, {
        strikethrough: T.hidden,
        textAlign: l.textAlign(T.textAlign)
      });
    }, S = this.isHorizontal(), M = this._computeTitleHeight();
    S ? p = {
      x: gt(o, this.left + h, this.right - n[0]),
      y: this.top + h + M,
      line: 0
    } : p = {
      x: this.left + h,
      y: gt(o, this.top + M + h, this.bottom - e[0].height),
      line: 0
    }, To(this.ctx, t.textDirection);
    const w = _ + h;
    this.legendItems.forEach((C, A) => {
      s.strokeStyle = C.fontColor, s.fillStyle = C.fontColor;
      const T = s.measureText(C.text).width, I = l.textAlign(C.textAlign || (C.textAlign = r.textAlign)), N = m + d + T;
      let D = p.x, B = p.y;
      l.setWidth(this.width), S ? A > 0 && D + N + h > this.right && (B = p.y += w, p.line++, D = p.x = gt(o, this.left + h, this.right - n[p.line])) : A > 0 && B + w > this.bottom && (D = p.x = D + e[p.line].width + h, p.line++, B = p.y = gt(o, this.top + M + h, this.bottom - e[p.line].height));
      const it = l.x(D);
      if (x(it, B, C), D = ua(I, D + m + d, S ? D + N : this.right, t.rtl), k(l.x(D), B, C), S)
        p.x += N + h;
      else if (typeof C.text != "string") {
        const st = c.lineHeight;
        p.y += Uo(C, st) + h;
      } else
        p.y += w;
    }), Oo(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, n = dt(e.font), s = wt(e.padding);
    if (!e.display)
      return;
    const o = he(t.rtl, this.left, this.width), r = this.ctx, a = e.position, l = n.size / 2, c = s.top + l;
    let h, u = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), h = this.top + c, u = gt(t.align, u, this.right - d);
    else {
      const m = this.columnSizes.reduce((b, _) => Math.max(b, _.height), 0);
      h = c + gt(t.align, this.top, this.bottom - m - t.labels.padding - this._computeTitleHeight());
    }
    const p = gt(a, u, u + d);
    r.textAlign = o.textAlign(un(a)), r.textBaseline = "middle", r.strokeStyle = e.color, r.fillStyle = e.color, r.font = n.string, Ve(r, e.text, p, h, n);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = dt(t.font), n = wt(t.padding);
    return t.display ? e.lineHeight + n.height : 0;
  }
  _getLegendItemAt(t, e) {
    let n, s, o;
    if ($t(t, this.left, this.right) && $t(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, n = 0; n < o.length; ++n)
        if (s = o[n], $t(t, s.left, s.left + s.width) && $t(e, s.top, s.top + s.height))
          return this.legendItems[n];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!xh(t.type, e))
      return;
    const n = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = mh(s, n);
      s && !o && nt(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = n, n && !o && nt(e.onHover, [
        t,
        n,
        this
      ], this);
    } else n && nt(e.onClick, [
      t,
      n,
      this
    ], this);
  }
}
function bh(i, t, e, n, s) {
  const o = _h(n, i, t, e), r = yh(s, n, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: r
  };
}
function _h(i, t, e, n) {
  let s = i.text;
  return s && typeof s != "string" && (s = s.reduce((o, r) => o.length > r.length ? o : r)), t + e.size / 2 + n.measureText(s).width;
}
function yh(i, t, e) {
  let n = i;
  return typeof t.text != "string" && (n = Uo(t, e)), n;
}
function Uo(i, t) {
  const e = i.text ? i.text.length : 0;
  return t * e;
}
function xh(i, t) {
  return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"));
}
var kn = {
  id: "legend",
  _element: $s,
  start(i, t, e) {
    const n = i.legend = new $s({
      ctx: i.ctx,
      options: e,
      chart: i
    });
    Mt.configure(i, n, e), Mt.addBox(i, n);
  },
  stop(i) {
    Mt.removeBox(i, i.legend), delete i.legend;
  },
  beforeUpdate(i, t, e) {
    const n = i.legend;
    Mt.configure(i, n, e), n.options = e;
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
      const n = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(n) ? (s.hide(n), t.hidden = !0) : (s.show(n), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const t = i.data.datasets, { labels: { usePointStyle: e, pointStyle: n, textAlign: s, color: o, useBorderRadius: r, borderRadius: a } } = i.legend.options;
        return i._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = wt(c.borderWidth);
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
            pointStyle: n || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
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
class Xo extends Et {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const n = this.options;
    if (this.left = 0, this.top = 0, !n.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const s = ut(n.text) ? n.text.length : 1;
    this._padding = wt(n.padding);
    const o = s * dt(n.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: n, bottom: s, right: o, options: r } = this, a = r.align;
    let l = 0, c, h, u;
    return this.isHorizontal() ? (h = gt(a, n, o), u = e + t, c = o - n) : (r.position === "left" ? (h = n + t, u = gt(a, s, e), l = ct * -0.5) : (h = o - t, u = gt(a, e, s), l = ct * 0.5), c = s - e), {
      titleX: h,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const n = dt(e.font), o = n.lineHeight / 2 + this._padding.top, { titleX: r, titleY: a, maxWidth: l, rotation: c } = this._drawArgs(o);
    Ve(t, e.text, 0, 0, n, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: un(e.align),
      textBaseline: "middle",
      translation: [
        r,
        a
      ]
    });
  }
}
function vh(i, t) {
  const e = new Xo({
    ctx: i.ctx,
    options: t,
    chart: i
  });
  Mt.configure(i, e, t), Mt.addBox(i, e), i.titleBlock = e;
}
var qo = {
  id: "title",
  _element: Xo,
  start(i, t, e) {
    vh(i, e);
  },
  stop(i) {
    const t = i.titleBlock;
    Mt.removeBox(i, t), delete i.titleBlock;
  },
  beforeUpdate(i, t, e) {
    const n = i.titleBlock;
    Mt.configure(i, n, e), n.options = e;
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
const Oe = {
  average(i) {
    if (!i.length)
      return !1;
    let t, e, n = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, e = i.length; t < e; ++t) {
      const a = i[t].element;
      if (a && a.hasValue()) {
        const l = a.tooltipPosition();
        n.add(l.x), s += l.y, ++o;
      }
    }
    return o === 0 || n.size === 0 ? !1 : {
      x: [
        ...n
      ].reduce((a, l) => a + l) / n.size,
      y: s / o
    };
  },
  nearest(i, t) {
    if (!i.length)
      return !1;
    let e = t.x, n = t.y, s = Number.POSITIVE_INFINITY, o, r, a;
    for (o = 0, r = i.length; o < r; ++o) {
      const l = i[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = Gi(t, c);
        h < s && (s = h, a = l);
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      e = l.x, n = l.y;
    }
    return {
      x: e,
      y: n
    };
  }
};
function Ot(i, t) {
  return t && (ut(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i;
}
function It(i) {
  return (typeof i == "string" || i instanceof String) && i.indexOf(`
`) > -1 ? i.split(`
`) : i;
}
function wh(i, t) {
  const { element: e, datasetIndex: n, index: s } = t, o = i.getDatasetMeta(n).controller, { label: r, value: a } = o.getLabelAndValue(s);
  return {
    chart: i,
    label: r,
    parsed: o.getParsed(s),
    raw: i.data.datasets[n].data[s],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: n,
    element: e
  };
}
function Vs(i, t) {
  const e = i.chart.ctx, { body: n, footer: s, title: o } = i, { boxWidth: r, boxHeight: a } = t, l = dt(t.bodyFont), c = dt(t.titleFont), h = dt(t.footerFont), u = o.length, d = s.length, p = n.length, m = wt(t.padding);
  let b = m.height, _ = 0, x = n.reduce((M, w) => M + w.before.length + w.lines.length + w.after.length, 0);
  if (x += i.beforeBody.length + i.afterBody.length, u && (b += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), x) {
    const M = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    b += p * M + (x - p) * l.lineHeight + (x - 1) * t.bodySpacing;
  }
  d && (b += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let k = 0;
  const S = function(M) {
    _ = Math.max(_, e.measureText(M).width + k);
  };
  return e.save(), e.font = c.string, tt(i.title, S), e.font = l.string, tt(i.beforeBody.concat(i.afterBody), S), k = t.displayColors ? r + 2 + t.boxPadding : 0, tt(n, (M) => {
    tt(M.before, S), tt(M.lines, S), tt(M.after, S);
  }), k = 0, e.font = h.string, tt(i.footer, S), e.restore(), _ += m.width, {
    width: _,
    height: b
  };
}
function kh(i, t) {
  const { y: e, height: n } = t;
  return e < n / 2 ? "top" : e > i.height - n / 2 ? "bottom" : "center";
}
function Sh(i, t, e, n) {
  const { x: s, width: o } = n, r = e.caretSize + e.caretPadding;
  if (i === "left" && s + o + r > t.width || i === "right" && s - o - r < 0)
    return !0;
}
function Mh(i, t, e, n) {
  const { x: s, width: o } = e, { width: r, chartArea: { left: a, right: l } } = i;
  let c = "center";
  return n === "center" ? c = s <= (a + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= r - o / 2 && (c = "right"), Sh(c, i, t, e) && (c = "center"), c;
}
function Ys(i, t, e) {
  const n = e.yAlign || t.yAlign || kh(i, e);
  return {
    xAlign: e.xAlign || t.xAlign || Mh(i, t, e, n),
    yAlign: n
  };
}
function Rh(i, t) {
  let { x: e, width: n } = i;
  return t === "right" ? e -= n : t === "center" && (e -= n / 2), e;
}
function Eh(i, t, e) {
  let { y: n, height: s } = i;
  return t === "top" ? n += e : t === "bottom" ? n -= s + e : n -= s / 2, n;
}
function Us(i, t, e, n) {
  const { caretSize: s, caretPadding: o, cornerRadius: r } = i, { xAlign: a, yAlign: l } = e, c = s + o, { topLeft: h, topRight: u, bottomLeft: d, bottomRight: p } = ce(r);
  let m = Rh(t, a);
  const b = Eh(t, l, c);
  return l === "center" ? a === "left" ? m += c : a === "right" && (m -= c) : a === "left" ? m -= Math.max(h, d) + s : a === "right" && (m += Math.max(u, p) + s), {
    x: pt(m, 0, n.width - t.width),
    y: pt(b, 0, n.height - t.height)
  };
}
function fi(i, t, e) {
  const n = wt(e.padding);
  return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - n.right : i.x + n.left;
}
function Xs(i) {
  return Ot([], It(i));
}
function Th(i, t, e) {
  return se(i, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function qs(i, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? i.override(e) : i;
}
const Ko = {
  beforeTitle: Dt,
  title(i) {
    if (i.length > 0) {
      const t = i[0], e = t.chart.data.labels, n = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (n > 0 && t.dataIndex < n)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Dt,
  beforeBody: Dt,
  beforeLabel: Dt,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let t = i.dataset.label || "";
    t && (t += ": ");
    const e = i.formattedValue;
    return Q(e) || (t += e), t;
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
  afterLabel: Dt,
  afterBody: Dt,
  beforeFooter: Dt,
  footer: Dt,
  afterFooter: Dt
};
function bt(i, t, e, n) {
  const s = i[t].call(e, n);
  return typeof s > "u" ? Ko[t].call(e, n) : s;
}
class sn extends Et {
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
    const e = this.chart, n = this.options.setContext(this.getContext()), s = n.enabled && e.options.animation && n.animations, o = new Po(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Th(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: n } = e, s = bt(n, "beforeTitle", this, t), o = bt(n, "title", this, t), r = bt(n, "afterTitle", this, t);
    let a = [];
    return a = Ot(a, It(s)), a = Ot(a, It(o)), a = Ot(a, It(r)), a;
  }
  getBeforeBody(t, e) {
    return Xs(bt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: n } = e, s = [];
    return tt(t, (o) => {
      const r = {
        before: [],
        lines: [],
        after: []
      }, a = qs(n, o);
      Ot(r.before, It(bt(a, "beforeLabel", this, o))), Ot(r.lines, bt(a, "label", this, o)), Ot(r.after, It(bt(a, "afterLabel", this, o))), s.push(r);
    }), s;
  }
  getAfterBody(t, e) {
    return Xs(bt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: n } = e, s = bt(n, "beforeFooter", this, t), o = bt(n, "footer", this, t), r = bt(n, "afterFooter", this, t);
    let a = [];
    return a = Ot(a, It(s)), a = Ot(a, It(o)), a = Ot(a, It(r)), a;
  }
  _createItems(t) {
    const e = this._active, n = this.chart.data, s = [], o = [], r = [];
    let a = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      a.push(wh(this.chart, e[l]));
    return t.filter && (a = a.filter((h, u, d) => t.filter(h, u, d, n))), t.itemSort && (a = a.sort((h, u) => t.itemSort(h, u, n))), tt(a, (h) => {
      const u = qs(t.callbacks, h);
      s.push(bt(u, "labelColor", this, h)), o.push(bt(u, "labelPointStyle", this, h)), r.push(bt(u, "labelTextColor", this, h));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = r, this.dataPoints = a, a;
  }
  update(t, e) {
    const n = this.options.setContext(this.getContext()), s = this._active;
    let o, r = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const a = Oe[n.position].call(this, s, this._eventPosition);
      r = this._createItems(n), this.title = this.getTitle(r, n), this.beforeBody = this.getBeforeBody(r, n), this.body = this.getBody(r, n), this.afterBody = this.getAfterBody(r, n), this.footer = this.getFooter(r, n);
      const l = this._size = Vs(this, n), c = Object.assign({}, a, l), h = Ys(this.chart, n, c), u = Us(n, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: a.x,
        caretY: a.y
      };
    }
    this._tooltipItems = r, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && n.external && n.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, n, s) {
    const o = this.getCaretPosition(t, n, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, n) {
    const { xAlign: s, yAlign: o } = this, { caretSize: r, cornerRadius: a } = n, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = ce(a), { x: d, y: p } = t, { width: m, height: b } = e;
    let _, x, k, S, M, w;
    return o === "center" ? (M = p + b / 2, s === "left" ? (_ = d, x = _ - r, S = M + r, w = M - r) : (_ = d + m, x = _ + r, S = M - r, w = M + r), k = _) : (s === "left" ? x = d + Math.max(l, h) + r : s === "right" ? x = d + m - Math.max(c, u) - r : x = this.caretX, o === "top" ? (S = p, M = S - r, _ = x - r, k = x + r) : (S = p + b, M = S + r, _ = x + r, k = x - r), w = S), {
      x1: _,
      x2: x,
      x3: k,
      y1: S,
      y2: M,
      y3: w
    };
  }
  drawTitle(t, e, n) {
    const s = this.title, o = s.length;
    let r, a, l;
    if (o) {
      const c = he(n.rtl, this.x, this.width);
      for (t.x = fi(this, n.titleAlign, n), e.textAlign = c.textAlign(n.titleAlign), e.textBaseline = "middle", r = dt(n.titleFont), a = n.titleSpacing, e.fillStyle = n.titleColor, e.font = r.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + a, l + 1 === o && (t.y += n.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, e, n, s, o) {
    const r = this.labelColors[n], a = this.labelPointStyles[n], { boxHeight: l, boxWidth: c } = o, h = dt(o.bodyFont), u = fi(this, "left", o), d = s.x(u), p = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, m = e.y + p;
    if (o.usePointStyle) {
      const b = {
        radius: Math.min(c, l) / 2,
        pointStyle: a.pointStyle,
        rotation: a.rotation,
        borderWidth: 1
      }, _ = s.leftForLtr(d, c) + c / 2, x = m + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Zi(t, b, _, x), t.strokeStyle = r.borderColor, t.fillStyle = r.backgroundColor, Zi(t, b, _, x);
    } else {
      t.lineWidth = Z(r.borderWidth) ? Math.max(...Object.values(r.borderWidth)) : r.borderWidth || 1, t.strokeStyle = r.borderColor, t.setLineDash(r.borderDash || []), t.lineDashOffset = r.borderDashOffset || 0;
      const b = s.leftForLtr(d, c), _ = s.leftForLtr(s.xPlus(d, 1), c - 2), x = ce(r.borderRadius);
      Object.values(x).some((k) => k !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, Si(t, {
        x: b,
        y: m,
        w: c,
        h: l,
        radius: x
      }), t.fill(), t.stroke(), t.fillStyle = r.backgroundColor, t.beginPath(), Si(t, {
        x: _,
        y: m + 1,
        w: c - 2,
        h: l - 2,
        radius: x
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(b, m, c, l), t.strokeRect(b, m, c, l), t.fillStyle = r.backgroundColor, t.fillRect(_, m + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[n];
  }
  drawBody(t, e, n) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: r, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: h } = n, u = dt(n.bodyFont);
    let d = u.lineHeight, p = 0;
    const m = he(n.rtl, this.x, this.width), b = function(T) {
      e.fillText(T, m.x(t.x + p), t.y + d / 2), t.y += d + o;
    }, _ = m.textAlign(r);
    let x, k, S, M, w, C, A;
    for (e.textAlign = r, e.textBaseline = "middle", e.font = u.string, t.x = fi(this, _, n), e.fillStyle = n.bodyColor, tt(this.beforeBody, b), p = a && _ !== "right" ? r === "center" ? c / 2 + h : c + 2 + h : 0, M = 0, C = s.length; M < C; ++M) {
      for (x = s[M], k = this.labelTextColors[M], e.fillStyle = k, tt(x.before, b), S = x.lines, a && S.length && (this._drawColorBox(e, t, M, m, n), d = Math.max(u.lineHeight, l)), w = 0, A = S.length; w < A; ++w)
        b(S[w]), d = u.lineHeight;
      tt(x.after, b);
    }
    p = 0, d = u.lineHeight, tt(this.afterBody, b), t.y -= o;
  }
  drawFooter(t, e, n) {
    const s = this.footer, o = s.length;
    let r, a;
    if (o) {
      const l = he(n.rtl, this.x, this.width);
      for (t.x = fi(this, n.footerAlign, n), t.y += n.footerMarginTop, e.textAlign = l.textAlign(n.footerAlign), e.textBaseline = "middle", r = dt(n.footerFont), e.fillStyle = n.footerColor, e.font = r.string, a = 0; a < o; ++a)
        e.fillText(s[a], l.x(t.x), t.y + r.lineHeight / 2), t.y += r.lineHeight + n.footerSpacing;
    }
  }
  drawBackground(t, e, n, s) {
    const { xAlign: o, yAlign: r } = this, { x: a, y: l } = t, { width: c, height: h } = n, { topLeft: u, topRight: d, bottomLeft: p, bottomRight: m } = ce(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(a + u, l), r === "top" && this.drawCaret(t, e, n, s), e.lineTo(a + c - d, l), e.quadraticCurveTo(a + c, l, a + c, l + d), r === "center" && o === "right" && this.drawCaret(t, e, n, s), e.lineTo(a + c, l + h - m), e.quadraticCurveTo(a + c, l + h, a + c - m, l + h), r === "bottom" && this.drawCaret(t, e, n, s), e.lineTo(a + p, l + h), e.quadraticCurveTo(a, l + h, a, l + h - p), r === "center" && o === "left" && this.drawCaret(t, e, n, s), e.lineTo(a, l + u), e.quadraticCurveTo(a, l, a + u, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, n = this.$animations, s = n && n.x, o = n && n.y;
    if (s || o) {
      const r = Oe[t.position].call(this, this._active, this._eventPosition);
      if (!r)
        return;
      const a = this._size = Vs(this, t), l = Object.assign({}, r, this._size), c = Ys(e, t, l), h = Us(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = a.width, this.height = a.height, this.caretX = r.x, this.caretY = r.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let n = this.opacity;
    if (!n)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    n = Math.abs(n) < 1e-3 ? 0 : n;
    const r = wt(e.padding), a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && a && (t.save(), t.globalAlpha = n, this.drawBackground(o, t, s, e), To(t, e.textDirection), o.y += r.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Oo(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const n = this._active, s = t.map(({ datasetIndex: a, index: l }) => {
      const c = this.chart.getDatasetMeta(a);
      if (!c)
        throw new Error("Cannot find a dataset at index " + a);
      return {
        datasetIndex: a,
        element: c.data[l],
        index: l
      };
    }), o = !vi(n, s), r = this._positionChanged(s, e);
    (o || r) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, n = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], r = this._getActiveElements(t, o, e, n), a = this._positionChanged(r, t), l = e || !vi(r, o) || a;
    return l && (this._active = r, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, n, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e.filter((a) => this.chart.data.datasets[a.datasetIndex] && this.chart.getDatasetMeta(a.datasetIndex).controller.getParsed(a.index) !== void 0);
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, n);
    return o.reverse && r.reverse(), r;
  }
  _positionChanged(t, e) {
    const { caretX: n, caretY: s, options: o } = this, r = Oe[o.position].call(this, t, e);
    return r !== !1 && (n !== r.x || s !== r.y);
  }
}
L(sn, "positioners", Oe);
var Sn = {
  id: "tooltip",
  _element: sn,
  positioners: Oe,
  afterInit(i, t, e) {
    e && (i.tooltip = new sn({
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
    callbacks: Ko
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
const Oh = (i, t, e, n) => (typeof t == "string" ? (e = i.push(t) - 1, n.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Ch(i, t, e, n) {
  const s = i.indexOf(t);
  if (s === -1)
    return Oh(i, t, e, n);
  const o = i.lastIndexOf(t);
  return s !== o ? e : s;
}
const Ph = (i, t) => i === null ? null : pt(Math.round(i), 0, t);
function Ks(i) {
  const t = this.getLabels();
  return i >= 0 && i < t.length ? t[i] : i;
}
class Ti extends ge {
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const n = this.getLabels();
      for (const { index: s, label: o } of e)
        n[s] === o && n.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (Q(t))
      return null;
    const n = this.getLabels();
    return e = isFinite(e) && n[e] === t ? e : Ch(n, t, U(e, t), this._addedLabels), Ph(e, n.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: n, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (n = 0), e || (s = this.getLabels().length - 1)), this.min = n, this.max = s;
  }
  buildTicks() {
    const t = this.min, e = this.max, n = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (n ? 0 : 1), 1), this._startValue = this.min - (n ? 0.5 : 0);
    for (let r = t; r <= e; r++)
      s.push({
        value: r
      });
    return s;
  }
  getLabelForValue(t) {
    return Ks.call(this, t);
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
L(Ti, "id", "category"), L(Ti, "defaults", {
  ticks: {
    callback: Ks
  }
});
function Ah(i, t) {
  const e = [], { bounds: s, step: o, min: r, max: a, precision: l, count: c, maxTicks: h, maxDigits: u, includeBounds: d } = i, p = o || 1, m = h - 1, { min: b, max: _ } = t, x = !Q(r), k = !Q(a), S = !Q(c), M = (_ - b) / (u + 1);
  let w = Qn((_ - b) / m / p) * p, C, A, T, I;
  if (w < 1e-14 && !x && !k)
    return [
      {
        value: b
      },
      {
        value: _
      }
    ];
  I = Math.ceil(_ / w) - Math.floor(b / w), I > m && (w = Qn(I * w / m / p) * p), Q(l) || (C = Math.pow(10, l), w = Math.ceil(w * C) / C), s === "ticks" ? (A = Math.floor(b / w) * w, T = Math.ceil(_ / w) * w) : (A = b, T = _), x && k && o && ia((a - r) / o, w / 1e3) ? (I = Math.round(Math.min((a - r) / w, h)), w = (a - r) / I, A = r, T = a) : S ? (A = x ? r : A, T = k ? a : T, I = c - 1, w = (T - A) / I) : (I = (T - A) / w, Pe(I, Math.round(I), w / 1e3) ? I = Math.round(I) : I = Math.ceil(I));
  const N = Math.max(Zn(w), Zn(A));
  C = Math.pow(10, Q(l) ? N : l), A = Math.round(A * C) / C, T = Math.round(T * C) / C;
  let D = 0;
  for (x && (d && A !== r ? (e.push({
    value: r
  }), A < r && D++, Pe(Math.round((A + D * w) * C) / C, r, Gs(r, M, i)) && D++) : A < r && D++); D < I; ++D) {
    const B = Math.round((A + D * w) * C) / C;
    if (k && B > a)
      break;
    e.push({
      value: B
    });
  }
  return k && d && T !== a ? e.length && Pe(e[e.length - 1].value, a, Gs(a, M, i)) ? e[e.length - 1].value = a : e.push({
    value: a
  }) : (!k || T === a) && e.push({
    value: T
  }), e;
}
function Gs(i, t, { horizontal: e, minRotation: n }) {
  const s = Ft(n), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, r = 0.75 * t * ("" + i).length;
  return Math.min(t / o, r);
}
class Dh extends ge {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return Q(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: n } = this.getUserBounds();
    let { min: s, max: o } = this;
    const r = (l) => s = e ? s : l, a = (l) => o = n ? o : l;
    if (t) {
      const l = Pt(s), c = Pt(o);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && r(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      a(o + l), t || r(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: n } = t, s;
    return n ? (s = Math.ceil(this.max / n) - Math.floor(this.min / n) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let n = this.getTickLimit();
    n = Math.max(2, n);
    const s = {
      maxTicks: n,
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
    }, o = this._range || this, r = Ah(s, o);
    return t.bounds === "ticks" && na(r, this, "value"), t.reverse ? (r.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), r;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, n = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (n - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, n += s;
    }
    this._startValue = e, this._endValue = n, this._valueRange = n - e;
  }
  getLabelForValue(t) {
    return dn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Oi extends Dh {
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = Rt(t) ? t : 0, this.max = Rt(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, n = Ft(this.options.ticks.minRotation), s = (t ? Math.sin(n) : Math.cos(n)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
L(Oi, "id", "linear"), L(Oi, "defaults", {
  ticks: {
    callback: xo.formatters.numeric
  }
});
const Di = {
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
}, yt = /* @__PURE__ */ Object.keys(Di);
function Qs(i, t) {
  return i - t;
}
function Zs(i, t) {
  if (Q(t))
    return null;
  const e = i._adapter, { parser: n, round: s, isoWeekday: o } = i._parseOpts;
  let r = t;
  return typeof n == "function" && (r = n(r)), Rt(r) || (r = typeof n == "string" ? e.parse(r, n) : e.parse(r)), r === null ? null : (s && (r = s === "week" && (We(o) || o === !0) ? e.startOf(r, "isoWeek", o) : e.startOf(r, s)), +r);
}
function Js(i, t, e, n) {
  const s = yt.length;
  for (let o = yt.indexOf(i); o < s - 1; ++o) {
    const r = Di[yt[o]], a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER;
    if (r.common && Math.ceil((e - t) / (a * r.size)) <= n)
      return yt[o];
  }
  return yt[s - 1];
}
function Lh(i, t, e, n, s) {
  for (let o = yt.length - 1; o >= yt.indexOf(e); o--) {
    const r = yt[o];
    if (Di[r].common && i._adapter.diff(s, n, r) >= t - 1)
      return r;
  }
  return yt[e ? yt.indexOf(e) : 0];
}
function Ih(i) {
  for (let t = yt.indexOf(i) + 1, e = yt.length; t < e; ++t)
    if (Di[yt[t]].common)
      return yt[t];
}
function to(i, t, e) {
  if (!e)
    i[t] = !0;
  else if (e.length) {
    const { lo: n, hi: s } = hn(e, t), o = e[n] >= t ? e[n] : e[s];
    i[o] = !0;
  }
}
function zh(i, t, e, n) {
  const s = i._adapter, o = +s.startOf(t[0].value, n), r = t[t.length - 1].value;
  let a, l;
  for (a = o; a <= r; a = +s.add(a, 1, n))
    l = e[a], l >= 0 && (t[l].major = !0);
  return t;
}
function eo(i, t, e) {
  const n = [], s = {}, o = t.length;
  let r, a;
  for (r = 0; r < o; ++r)
    a = t[r], s[a] = r, n.push({
      value: a,
      major: !1
    });
  return o === 0 || !e ? n : zh(i, n, s, e);
}
class Ci extends ge {
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const n = t.time || (t.time = {}), s = this._adapter = new Hl._date(t.adapters.date);
    s.init(e), Ce(n.displayFormats, s.formats()), this._parseOpts = {
      parser: n.parser,
      round: n.round,
      isoWeekday: n.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Zs(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, n = t.time.unit || "day";
    let { min: s, max: o, minDefined: r, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !r && !isNaN(c.min) && (s = Math.min(s, c.min)), !a && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!r || !a) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = Rt(s) && !isNaN(s) ? s : +e.startOf(Date.now(), n), o = Rt(o) && !isNaN(o) ? o : +e.endOf(Date.now(), n) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], n = t[t.length - 1]), {
      min: e,
      max: n
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, n = t.ticks, s = n.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, r = this.max, a = la(s, o, r);
    return this._unit = e.unit || (n.autoSkip ? Js(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Lh(this, a.length, e.minUnit, this.min, this.max)), this._majorUnit = !n.major.enabled || this._unit === "year" ? void 0 : Ih(this._unit), this.initOffsets(s), t.reverse && a.reverse(), eo(this, a, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, n = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? n = o : n = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const r = t.length < 3 ? 0.5 : 0.25;
    e = pt(e, 0, r), n = pt(n, 0, r), this._offsets = {
      start: e,
      end: n,
      factor: 1 / (e + 1 + n)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, n = this.max, s = this.options, o = s.time, r = o.unit || Js(o.minUnit, e, n, this._getLabelCapacity(e)), a = U(s.ticks.stepSize, 1), l = r === "week" ? o.isoWeekday : !1, c = We(l) || l === !0, h = {};
    let u = e, d, p;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : r), t.diff(n, e, r) > 1e5 * a)
      throw new Error(e + " and " + n + " are too far apart with stepSize of " + a + " " + r);
    const m = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, p = 0; d < n; d = +t.add(d, a, r), p++)
      to(h, d, m);
    return (d === n || s.bounds === "ticks" || p === 1) && to(h, d, m), Object.keys(h).sort(Qs).map((b) => +b);
  }
  getLabelForValue(t) {
    const e = this._adapter, n = this.options.time;
    return n.tooltipFormat ? e.format(t, n.tooltipFormat) : e.format(t, n.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, r = e || s[o];
    return this._adapter.format(t, r);
  }
  _tickFormatFunction(t, e, n, s) {
    const o = this.options, r = o.ticks.callback;
    if (r)
      return nt(r, [
        t,
        e,
        n
      ], this);
    const a = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && a[l], u = c && a[c], d = n[e], p = c && u && d && d.major;
    return this._adapter.format(t, s || (p ? u : h));
  }
  generateTickLabels(t) {
    let e, n, s;
    for (e = 0, n = t.length; e < n; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, n = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + n) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + n * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, n = this.ctx.measureText(t).width, s = Ft(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), r = Math.sin(s), a = this._resolveTickFontOptions(0).size;
    return {
      w: n * o + a * r,
      h: n * r + a * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, n = e.displayFormats, s = n[e.unit] || n.millisecond, o = this._tickFormatFunction(t, 0, eo(this, [
      t
    ], this._majorUnit), s), r = this._getLabelSize(o), a = Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) - 1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, n;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, n = s.length; e < n; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, n;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, n = s.length; e < n; ++e)
      t.push(Zs(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return bo(t.sort(Qs));
  }
}
L(Ci, "id", "time"), L(Ci, "defaults", {
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
function di(i, t, e) {
  let n = 0, s = i.length - 1, o, r, a, l;
  e ? (t >= i[n].pos && t <= i[s].pos && ({ lo: n, hi: s } = Jt(i, "pos", t)), { pos: o, time: a } = i[n], { pos: r, time: l } = i[s]) : (t >= i[n].time && t <= i[s].time && ({ lo: n, hi: s } = Jt(i, "time", t)), { time: o, pos: a } = i[n], { time: r, pos: l } = i[s]);
  const c = r - o;
  return c ? a + (l - a) * (t - o) / c : a;
}
class io extends Ci {
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = di(e, this.min), this._tableRange = di(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: n } = this, s = [], o = [];
    let r, a, l, c, h;
    for (r = 0, a = t.length; r < a; ++r)
      c = t[r], c >= e && c <= n && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: n,
          pos: 1
        }
      ];
    for (r = 0, a = s.length; r < a; ++r)
      h = s[r + 1], l = s[r - 1], c = s[r], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: r / (a - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let n = super.getDataTimestamps();
    return (!n.includes(t) || !n.length) && n.splice(0, 0, t), (!n.includes(e) || n.length === 1) && n.push(e), n.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), n = this.getLabelTimestamps();
    return e.length && n.length ? t = this.normalize(e.concat(n)) : t = e.length ? e : n, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (di(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, n = this.getDecimalForPixel(t) / e.factor - e.end;
    return di(this._table, n * this._tableRange + this._minPos, !0);
  }
}
L(io, "id", "timeseries"), L(io, "defaults", Ci.defaults);
const Go = "label";
function no(i, t) {
  typeof i == "function" ? i(t) : i && (i.current = t);
}
function Fh(i, t) {
  const e = i.options;
  e && t && Object.assign(e, t);
}
function Qo(i, t) {
  i.labels = t;
}
function Zo(i, t) {
  let e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Go;
  const n = [];
  i.datasets = t.map((s) => {
    const o = i.datasets.find((r) => r[e] === s[e]);
    return !o || !s.data || n.includes(o) ? {
      ...s
    } : (n.push(o), Object.assign(o, s), o);
  });
}
function jh(i) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Go;
  const e = {
    labels: [],
    datasets: []
  };
  return Qo(e, i.labels), Zo(e, i.datasets, t), e;
}
function Nh(i, t) {
  const { height: e = 150, width: n = 300, redraw: s = !1, datasetIdKey: o, type: r, data: a, options: l, plugins: c = [], fallbackContent: h, updateMode: u, ...d } = i, p = vt.useRef(null), m = vt.useRef(null), b = () => {
    p.current && (m.current = new Xt(p.current, {
      type: r,
      data: jh(a, o),
      options: l && {
        ...l
      },
      plugins: c
    }), no(t, m.current));
  }, _ = () => {
    no(t, null), m.current && (m.current.destroy(), m.current = null);
  };
  return vt.useEffect(() => {
    !s && m.current && l && Fh(m.current, l);
  }, [
    s,
    l
  ]), vt.useEffect(() => {
    !s && m.current && Qo(m.current.config.data, a.labels);
  }, [
    s,
    a.labels
  ]), vt.useEffect(() => {
    !s && m.current && a.datasets && Zo(m.current.config.data, a.datasets, o);
  }, [
    s,
    a.datasets
  ]), vt.useEffect(() => {
    m.current && (s ? (_(), setTimeout(b)) : m.current.update(u));
  }, [
    s,
    l,
    a.labels,
    a.datasets,
    u
  ]), vt.useEffect(() => {
    m.current && (_(), setTimeout(b));
  }, [
    r
  ]), vt.useEffect(() => (b(), () => _()), []), /* @__PURE__ */ ao.createElement("canvas", {
    ref: p,
    role: "img",
    height: e,
    width: n,
    ...d
  }, h);
}
const Jo = /* @__PURE__ */ vt.forwardRef(Nh);
function tr(i, t) {
  return Xt.register(t), /* @__PURE__ */ vt.forwardRef((e, n) => /* @__PURE__ */ ao.createElement(Jo, {
    ...e,
    ref: n,
    type: i
  }));
}
const Bh = /* @__PURE__ */ tr("bar", Le), Wh = /* @__PURE__ */ tr("pie", Ji);
/*!
 * chartjs-plugin-datalabels v2.2.0
 * https://chartjs-plugin-datalabels.netlify.app
 * (c) 2017-2022 chartjs-plugin-datalabels contributors
 * Released under the MIT license
 */
var so = function() {
  if (typeof window < "u") {
    if (window.devicePixelRatio)
      return window.devicePixelRatio;
    var i = window.screen;
    if (i)
      return (i.deviceXDPI || 1) / (i.logicalXDPI || 1);
  }
  return 1;
}(), ze = {
  // @todo move this in Chart.helpers.toTextLines
  toTextLines: function(i) {
    var t = [], e;
    for (i = [].concat(i); i.length; )
      e = i.pop(), typeof e == "string" ? t.unshift.apply(t, e.split(`
`)) : Array.isArray(e) ? i.push.apply(i, e) : Q(i) || t.unshift("" + e);
    return t;
  },
  // @todo move this in Chart.helpers.canvas.textSize
  // @todo cache calls of measureText if font doesn't change?!
  textSize: function(i, t, e) {
    var n = [].concat(t), s = n.length, o = i.font, r = 0, a;
    for (i.font = e.string, a = 0; a < s; ++a)
      r = Math.max(i.measureText(n[a]).width, r);
    return i.font = o, {
      height: s * e.lineHeight,
      width: r
    };
  },
  /**
   * Returns value bounded by min and max. This is equivalent to max(min, min(value, max)).
   * @todo move this method in Chart.helpers.bound
   * https://doc.qt.io/qt-5/qtglobal.html#qBound
   */
  bound: function(i, t, e) {
    return Math.max(i, Math.min(t, e));
  },
  /**
   * Returns an array of pair [value, state] where state is:
   * * -1: value is only in a0 (removed)
   * *  1: value is only in a1 (added)
   */
  arrayDiff: function(i, t) {
    var e = i.slice(), n = [], s, o, r, a;
    for (s = 0, r = t.length; s < r; ++s)
      a = t[s], o = e.indexOf(a), o === -1 ? n.push([a, 1]) : e.splice(o, 1);
    for (s = 0, r = e.length; s < r; ++s)
      n.push([e[s], -1]);
    return n;
  },
  /**
   * https://github.com/chartjs/chartjs-plugin-datalabels/issues/70
   */
  rasterize: function(i) {
    return Math.round(i * so) / so;
  }
};
function qi(i, t) {
  var e = t.x, n = t.y;
  if (e === null)
    return { x: 0, y: -1 };
  if (n === null)
    return { x: 1, y: 0 };
  var s = i.x - e, o = i.y - n, r = Math.sqrt(s * s + o * o);
  return {
    x: r ? s / r : 0,
    y: r ? o / r : -1
  };
}
function Hh(i, t, e, n, s) {
  switch (s) {
    case "center":
      e = n = 0;
      break;
    case "bottom":
      e = 0, n = 1;
      break;
    case "right":
      e = 1, n = 0;
      break;
    case "left":
      e = -1, n = 0;
      break;
    case "top":
      e = 0, n = -1;
      break;
    case "start":
      e = -e, n = -n;
      break;
    case "end":
      break;
    default:
      s *= Math.PI / 180, e = Math.cos(s), n = Math.sin(s);
      break;
  }
  return {
    x: i,
    y: t,
    vx: e,
    vy: n
  };
}
var $h = 0, er = 1, ir = 2, nr = 4, sr = 8;
function gi(i, t, e) {
  var n = $h;
  return i < e.left ? n |= er : i > e.right && (n |= ir), t < e.top ? n |= sr : t > e.bottom && (n |= nr), n;
}
function Vh(i, t) {
  for (var e = i.x0, n = i.y0, s = i.x1, o = i.y1, r = gi(e, n, t), a = gi(s, o, t), l, c, h; !(!(r | a) || r & a); )
    l = r || a, l & sr ? (c = e + (s - e) * (t.top - n) / (o - n), h = t.top) : l & nr ? (c = e + (s - e) * (t.bottom - n) / (o - n), h = t.bottom) : l & ir ? (h = n + (o - n) * (t.right - e) / (s - e), c = t.right) : l & er && (h = n + (o - n) * (t.left - e) / (s - e), c = t.left), l === r ? (e = c, n = h, r = gi(e, n, t)) : (s = c, o = h, a = gi(s, o, t));
  return {
    x0: e,
    x1: s,
    y0: n,
    y1: o
  };
}
function pi(i, t) {
  var e = t.anchor, n = i, s, o;
  return t.clamp && (n = Vh(n, t.area)), e === "start" ? (s = n.x0, o = n.y0) : e === "end" ? (s = n.x1, o = n.y1) : (s = (n.x0 + n.x1) / 2, o = (n.y0 + n.y1) / 2), Hh(s, o, i.vx, i.vy, t.align);
}
var mi = {
  arc: function(i, t) {
    var e = (i.startAngle + i.endAngle) / 2, n = Math.cos(e), s = Math.sin(e), o = i.innerRadius, r = i.outerRadius;
    return pi({
      x0: i.x + n * o,
      y0: i.y + s * o,
      x1: i.x + n * r,
      y1: i.y + s * r,
      vx: n,
      vy: s
    }, t);
  },
  point: function(i, t) {
    var e = qi(i, t.origin), n = e.x * i.options.radius, s = e.y * i.options.radius;
    return pi({
      x0: i.x - n,
      y0: i.y - s,
      x1: i.x + n,
      y1: i.y + s,
      vx: e.x,
      vy: e.y
    }, t);
  },
  bar: function(i, t) {
    var e = qi(i, t.origin), n = i.x, s = i.y, o = 0, r = 0;
    return i.horizontal ? (n = Math.min(i.x, i.base), o = Math.abs(i.base - i.x)) : (s = Math.min(i.y, i.base), r = Math.abs(i.base - i.y)), pi({
      x0: n,
      y0: s + r,
      x1: n + o,
      y1: s,
      vx: e.x,
      vy: e.y
    }, t);
  },
  fallback: function(i, t) {
    var e = qi(i, t.origin);
    return pi({
      x0: i.x,
      y0: i.y,
      x1: i.x + (i.width || 0),
      y1: i.y + (i.height || 0),
      vx: e.x,
      vy: e.y
    }, t);
  }
}, jt = ze.rasterize;
function Yh(i) {
  var t = i.borderWidth || 0, e = i.padding, n = i.size.height, s = i.size.width, o = -s / 2, r = -n / 2;
  return {
    frame: {
      x: o - e.left - t,
      y: r - e.top - t,
      w: s + e.width + t * 2,
      h: n + e.height + t * 2
    },
    text: {
      x: o,
      y: r,
      w: s,
      h: n
    }
  };
}
function Uh(i, t) {
  var e = t.chart.getDatasetMeta(t.datasetIndex).vScale;
  if (!e)
    return null;
  if (e.xCenter !== void 0 && e.yCenter !== void 0)
    return { x: e.xCenter, y: e.yCenter };
  var n = e.getBasePixel();
  return i.horizontal ? { x: n, y: null } : { x: null, y: n };
}
function Xh(i) {
  return i instanceof le ? mi.arc : i instanceof Ie ? mi.point : i instanceof ue ? mi.bar : mi.fallback;
}
function qh(i, t, e, n, s, o) {
  var r = Math.PI / 2;
  if (o) {
    var a = Math.min(o, s / 2, n / 2), l = t + a, c = e + a, h = t + n - a, u = e + s - a;
    i.moveTo(t, c), l < h && c < u ? (i.arc(l, c, a, -Math.PI, -r), i.arc(h, c, a, -r, 0), i.arc(h, u, a, 0, r), i.arc(l, u, a, r, Math.PI)) : l < h ? (i.moveTo(l, e), i.arc(h, c, a, -r, r), i.arc(l, c, a, r, Math.PI + r)) : c < u ? (i.arc(l, c, a, -Math.PI, 0), i.arc(l, u, a, 0, Math.PI)) : i.arc(l, c, a, -Math.PI, Math.PI), i.closePath(), i.moveTo(t, e);
  } else
    i.rect(t, e, n, s);
}
function Kh(i, t, e) {
  var n = e.backgroundColor, s = e.borderColor, o = e.borderWidth;
  !n && (!s || !o) || (i.beginPath(), qh(
    i,
    jt(t.x) + o / 2,
    jt(t.y) + o / 2,
    jt(t.w) - o,
    jt(t.h) - o,
    e.borderRadius
  ), i.closePath(), n && (i.fillStyle = n, i.fill()), s && o && (i.strokeStyle = s, i.lineWidth = o, i.lineJoin = "miter", i.stroke()));
}
function Gh(i, t, e) {
  var n = e.lineHeight, s = i.w, o = i.x, r = i.y + n / 2;
  return t === "center" ? o += s / 2 : (t === "end" || t === "right") && (o += s), {
    h: n,
    w: s,
    x: o,
    y: r
  };
}
function Qh(i, t, e) {
  var n = i.shadowBlur, s = e.stroked, o = jt(e.x), r = jt(e.y), a = jt(e.w);
  s && i.strokeText(t, o, r, a), e.filled && (n && s && (i.shadowBlur = 0), i.fillText(t, o, r, a), n && s && (i.shadowBlur = n));
}
function Zh(i, t, e, n) {
  var s = n.textAlign, o = n.color, r = !!o, a = n.font, l = t.length, c = n.textStrokeColor, h = n.textStrokeWidth, u = c && h, d;
  if (!(!l || !r && !u))
    for (e = Gh(e, s, a), i.font = a.string, i.textAlign = s, i.textBaseline = "middle", i.shadowBlur = n.textShadowBlur, i.shadowColor = n.textShadowColor, r && (i.fillStyle = o), u && (i.lineJoin = "round", i.lineWidth = h, i.strokeStyle = c), d = 0, l = t.length; d < l; ++d)
      Qh(i, t[d], {
        stroked: u,
        filled: r,
        w: e.w,
        x: e.x,
        y: e.y + e.h * d
      });
}
var or = function(i, t, e, n) {
  var s = this;
  s._config = i, s._index = n, s._model = null, s._rects = null, s._ctx = t, s._el = e;
};
At(or.prototype, {
  /**
   * @private
   */
  _modelize: function(i, t, e, n) {
    var s = this, o = s._index, r = dt(rt([e.font, {}], n, o)), a = rt([e.color, lt.color], n, o);
    return {
      align: rt([e.align, "center"], n, o),
      anchor: rt([e.anchor, "center"], n, o),
      area: n.chart.chartArea,
      backgroundColor: rt([e.backgroundColor, null], n, o),
      borderColor: rt([e.borderColor, null], n, o),
      borderRadius: rt([e.borderRadius, 0], n, o),
      borderWidth: rt([e.borderWidth, 0], n, o),
      clamp: rt([e.clamp, !1], n, o),
      clip: rt([e.clip, !1], n, o),
      color: a,
      display: i,
      font: r,
      lines: t,
      offset: rt([e.offset, 4], n, o),
      opacity: rt([e.opacity, 1], n, o),
      origin: Uh(s._el, n),
      padding: wt(rt([e.padding, 4], n, o)),
      positioner: Xh(s._el),
      rotation: rt([e.rotation, 0], n, o) * (Math.PI / 180),
      size: ze.textSize(s._ctx, t, r),
      textAlign: rt([e.textAlign, "start"], n, o),
      textShadowBlur: rt([e.textShadowBlur, 0], n, o),
      textShadowColor: rt([e.textShadowColor, a], n, o),
      textStrokeColor: rt([e.textStrokeColor, a], n, o),
      textStrokeWidth: rt([e.textStrokeWidth, 0], n, o)
    };
  },
  update: function(i) {
    var t = this, e = null, n = null, s = t._index, o = t._config, r, a, l, c = rt([o.display, !0], i, s);
    c && (r = i.dataset.data[s], a = U(nt(o.formatter, [r, i]), r), l = Q(a) ? [] : ze.toTextLines(a), l.length && (e = t._modelize(c, l, o, i), n = Yh(e))), t._model = e, t._rects = n;
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
  draw: function(i, t) {
    var e = this, n = i.ctx, s = e._model, o = e._rects, r;
    this.visible() && (n.save(), s.clip && (r = s.area, n.beginPath(), n.rect(
      r.left,
      r.top,
      r.right - r.left,
      r.bottom - r.top
    ), n.clip()), n.globalAlpha = ze.bound(0, s.opacity, 1), n.translate(jt(t.x), jt(t.y)), n.rotate(s.rotation), Kh(n, o.frame, s), Zh(n, s.lines, o.text, s), n.restore());
  }
});
var Jh = Number.MIN_SAFE_INTEGER || -9007199254740991, tu = Number.MAX_SAFE_INTEGER || 9007199254740991;
function ke(i, t, e) {
  var n = Math.cos(e), s = Math.sin(e), o = t.x, r = t.y;
  return {
    x: o + n * (i.x - o) - s * (i.y - r),
    y: r + s * (i.x - o) + n * (i.y - r)
  };
}
function oo(i, t) {
  var e = tu, n = Jh, s = t.origin, o, r, a, l, c;
  for (o = 0; o < i.length; ++o)
    r = i[o], a = r.x - s.x, l = r.y - s.y, c = t.vx * a + t.vy * l, e = Math.min(e, c), n = Math.max(n, c);
  return {
    min: e,
    max: n
  };
}
function bi(i, t) {
  var e = t.x - i.x, n = t.y - i.y, s = Math.sqrt(e * e + n * n);
  return {
    vx: (t.x - i.x) / s,
    vy: (t.y - i.y) / s,
    origin: i,
    ln: s
  };
}
var rr = function() {
  this._rotation = 0, this._rect = {
    x: 0,
    y: 0,
    w: 0,
    h: 0
  };
};
At(rr.prototype, {
  center: function() {
    var i = this._rect;
    return {
      x: i.x + i.w / 2,
      y: i.y + i.h / 2
    };
  },
  update: function(i, t, e) {
    this._rotation = e, this._rect = {
      x: t.x + i.x,
      y: t.y + i.y,
      w: t.w,
      h: t.h
    };
  },
  contains: function(i) {
    var t = this, e = 1, n = t._rect;
    return i = ke(i, t.center(), -t._rotation), !(i.x < n.x - e || i.y < n.y - e || i.x > n.x + n.w + e * 2 || i.y > n.y + n.h + e * 2);
  },
  // Separating Axis Theorem
  // https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169
  intersects: function(i) {
    var t = this._points(), e = i._points(), n = [
      bi(t[0], t[1]),
      bi(t[0], t[3])
    ], s, o, r;
    for (this._rotation !== i._rotation && n.push(
      bi(e[0], e[1]),
      bi(e[0], e[3])
    ), s = 0; s < n.length; ++s)
      if (o = oo(t, n[s]), r = oo(e, n[s]), o.max < r.min || r.max < o.min)
        return !1;
    return !0;
  },
  /**
   * @private
   */
  _points: function() {
    var i = this, t = i._rect, e = i._rotation, n = i.center();
    return [
      ke({ x: t.x, y: t.y }, n, e),
      ke({ x: t.x + t.w, y: t.y }, n, e),
      ke({ x: t.x + t.w, y: t.y + t.h }, n, e),
      ke({ x: t.x, y: t.y + t.h }, n, e)
    ];
  }
});
function ar(i, t, e) {
  var n = t.positioner(i, t), s = n.vx, o = n.vy;
  if (!s && !o)
    return { x: n.x, y: n.y };
  var r = e.w, a = e.h, l = t.rotation, c = Math.abs(r / 2 * Math.cos(l)) + Math.abs(a / 2 * Math.sin(l)), h = Math.abs(r / 2 * Math.sin(l)) + Math.abs(a / 2 * Math.cos(l)), u = 1 / Math.max(Math.abs(s), Math.abs(o));
  return c *= s * u, h *= o * u, c += t.offset * s, h += t.offset * o, {
    x: n.x + c,
    y: n.y + h
  };
}
function eu(i, t) {
  var e, n, s, o;
  for (e = i.length - 1; e >= 0; --e)
    for (s = i[e].$layout, n = e - 1; n >= 0 && s._visible; --n)
      o = i[n].$layout, o._visible && s._box.intersects(o._box) && t(s, o);
  return i;
}
function iu(i) {
  var t, e, n, s, o, r, a;
  for (t = 0, e = i.length; t < e; ++t)
    n = i[t], s = n.$layout, s._visible && (a = new Proxy(n._el, { get: (l, c) => l.getProps([c], !0)[c] }), o = n.geometry(), r = ar(a, n.model(), o), s._box.update(r, o, n.rotation()));
  return eu(i, function(l, c) {
    var h = l._hidable, u = c._hidable;
    h && u || u ? c._visible = !1 : h && (l._visible = !1);
  });
}
var Fe = {
  prepare: function(i) {
    var t = [], e, n, s, o, r;
    for (e = 0, s = i.length; e < s; ++e)
      for (n = 0, o = i[e].length; n < o; ++n)
        r = i[e][n], t.push(r), r.$layout = {
          _box: new rr(),
          _hidable: !1,
          _visible: !0,
          _set: e,
          _idx: r._index
        };
    return t.sort(function(a, l) {
      var c = a.$layout, h = l.$layout;
      return c._idx === h._idx ? h._set - c._set : h._idx - c._idx;
    }), this.update(t), t;
  },
  update: function(i) {
    var t = !1, e, n, s, o, r;
    for (e = 0, n = i.length; e < n; ++e)
      s = i[e], o = s.model(), r = s.$layout, r._hidable = o && o.display === "auto", r._visible = s.visible(), t |= r._hidable;
    t && iu(i);
  },
  lookup: function(i, t) {
    var e, n;
    for (e = i.length - 1; e >= 0; --e)
      if (n = i[e].$layout, n && n._visible && n._box.contains(t))
        return i[e];
    return null;
  },
  draw: function(i, t) {
    var e, n, s, o, r, a;
    for (e = 0, n = t.length; e < n; ++e)
      s = t[e], o = s.$layout, o._visible && (r = s.geometry(), a = ar(s._el, s.model(), r), o._box.update(a, r, s.rotation()), s.draw(i, a));
  }
}, nu = function(i) {
  if (Q(i))
    return null;
  var t = i, e, n, s;
  if (Z(i))
    if (!Q(i.label))
      t = i.label;
    else if (!Q(i.r))
      t = i.r;
    else
      for (t = "", e = Object.keys(i), s = 0, n = e.length; s < n; ++s)
        t += (s !== 0 ? ", " : "") + e[s] + ": " + i[e[s]];
  return "" + t;
}, su = {
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
  formatter: nu,
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
}, _t = "$datalabels", lr = "$default";
function ou(i, t) {
  var e = i.datalabels, n = {}, s = [], o, r;
  return e === !1 ? null : (e === !0 && (e = {}), t = At({}, [t, e]), o = t.labels || {}, r = Object.keys(o), delete t.labels, r.length ? r.forEach(function(a) {
    o[a] && s.push(At({}, [
      t,
      o[a],
      { _key: a }
    ]));
  }) : s.push(t), n = s.reduce(function(a, l) {
    return tt(l.listeners || {}, function(c, h) {
      a[h] = a[h] || {}, a[h][l._key || lr] = c;
    }), delete l.listeners, a;
  }, {}), {
    labels: s,
    listeners: n
  });
}
function on(i, t, e, n) {
  if (t) {
    var s = e.$context, o = e.$groups, r;
    t[o._set] && (r = t[o._set][o._key], r && nt(r, [s, n]) === !0 && (i[_t]._dirty = !0, e.update(s)));
  }
}
function ru(i, t, e, n, s) {
  var o, r;
  !e && !n || (e ? n ? e !== n && (r = o = !0) : r = !0 : o = !0, r && on(i, t.leave, e, s), o && on(i, t.enter, n, s));
}
function au(i, t) {
  var e = i[_t], n = e._listeners, s, o;
  if (!(!n.enter && !n.leave)) {
    if (t.type === "mousemove")
      o = Fe.lookup(e._labels, t);
    else if (t.type !== "mouseout")
      return;
    s = e._hovered, e._hovered = o, ru(i, n, s, o, t);
  }
}
function lu(i, t) {
  var e = i[_t], n = e._listeners.click, s = n && Fe.lookup(e._labels, t);
  s && on(i, n, s, t);
}
var cr = {
  id: "datalabels",
  defaults: su,
  beforeInit: function(i) {
    i[_t] = {
      _actives: []
    };
  },
  beforeUpdate: function(i) {
    var t = i[_t];
    t._listened = !1, t._listeners = {}, t._datasets = [], t._labels = [];
  },
  afterDatasetUpdate: function(i, t, e) {
    var n = t.index, s = i[_t], o = s._datasets[n] = [], r = i.isDatasetVisible(n), a = i.data.datasets[n], l = ou(a, e), c = t.meta.data || [], h = i.ctx, u, d, p, m, b, _, x, k;
    for (h.save(), u = 0, p = c.length; u < p; ++u)
      if (x = c[u], x[_t] = [], r && x && i.getDataVisibility(u) && !x.skip)
        for (d = 0, m = l.labels.length; d < m; ++d)
          b = l.labels[d], _ = b._key, k = new or(b, h, x, u), k.$groups = {
            _set: n,
            _key: _ || lr
          }, k.$context = {
            active: !1,
            chart: i,
            dataIndex: u,
            dataset: a,
            datasetIndex: n
          }, k.update(k.$context), x[_t].push(k), o.push(k);
    h.restore(), At(s._listeners, l.listeners, {
      merger: function(S, M, w) {
        M[S] = M[S] || {}, M[S][t.index] = w[S], s._listened = !0;
      }
    });
  },
  afterUpdate: function(i) {
    i[_t]._labels = Fe.prepare(i[_t]._datasets);
  },
  // Draw labels on top of all dataset elements
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/29
  // https://github.com/chartjs/chartjs-plugin-datalabels/issues/32
  afterDatasetsDraw: function(i) {
    Fe.draw(i, i[_t]._labels);
  },
  beforeEvent: function(i, t) {
    if (i[_t]._listened) {
      var e = t.event;
      switch (e.type) {
        case "mousemove":
        case "mouseout":
          au(i, e);
          break;
        case "click":
          lu(i, e);
          break;
      }
    }
  },
  afterEvent: function(i) {
    var t = i[_t], e = t._actives, n = t._actives = i.getActiveElements(), s = ze.arrayDiff(e, n), o, r, a, l, c, h, u;
    for (o = 0, r = s.length; o < r; ++o)
      if (c = s[o], c[1])
        for (u = c[0].element[_t] || [], a = 0, l = u.length; a < l; ++a)
          h = u[a], h.$context.active = c[1] === 1, h.update(h.$context);
    (t._dirty || s.length) && (Fe.update(t._labels), i.render()), delete t._dirty;
  }
};
Xt.register(
  Ti,
  Oi,
  ue,
  qo,
  Sn,
  kn,
  cr
);
const cu = {
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
}, hu = {
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
      formatter: (i) => i.toString()
      // This will show the actual value
    }
  }
}, pu = ({ width: i = "600px", height: t = "400px", data: e = cu, options: n = hu }) => (vt.useEffect(() => () => {
  var s;
  (s = Xt.getChart("chartCanvasId")) == null || s.destroy();
}, []), /* @__PURE__ */ je.jsx("div", { style: { width: i, height: t }, children: /* @__PURE__ */ je.jsx(Bh, { data: e, options: n }) }));
Xt.register(
  le,
  Sn,
  kn
);
const uu = {
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
}, fu = {
  responsive: !0,
  plugins: {
    legend: {
      position: "top"
    },
    tooltip: {
      enabled: !0
    }
  }
}, mu = ({ width: i = "400px", height: t = "600px", data: e = uu, options: n = fu }) => (vt.useEffect(() => () => {
  var s;
  (s = Xt.getChart("chartCanvasId")) == null || s.destroy();
}, []), /* @__PURE__ */ je.jsxs("div", { style: { width: i, height: t }, children: [
  " ",
  /* @__PURE__ */ je.jsx(Wh, { data: e, options: n })
] }));
Xt.register(
  Ti,
  Oi,
  ue,
  Te,
  Ie,
  _i,
  Le,
  cr,
  qo,
  Sn,
  kn
);
function bu({ data: i, options: t }) {
  return /* @__PURE__ */ je.jsx(Jo, { type: "bar", data: i, options: t });
}
export {
  bu as ComboBarLineChart,
  pu as ReactBarChart,
  mu as ReactPieChart
};
