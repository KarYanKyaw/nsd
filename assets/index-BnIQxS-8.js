function Q4(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function Pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var v2 = { exports: {} },
  oc = {},
  y2 = { exports: {} },
  xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $a = Symbol.for("react.element"),
  J4 = Symbol.for("react.portal"),
  ey = Symbol.for("react.fragment"),
  ty = Symbol.for("react.strict_mode"),
  ny = Symbol.for("react.profiler"),
  ry = Symbol.for("react.provider"),
  oy = Symbol.for("react.context"),
  iy = Symbol.for("react.forward_ref"),
  ay = Symbol.for("react.suspense"),
  ly = Symbol.for("react.memo"),
  sy = Symbol.for("react.lazy"),
  Mp = Symbol.iterator;
function cy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mp && e[Mp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var w2 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  x2 = Object.assign,
  S2 = {};
function hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = S2),
    (this.updater = n || w2);
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
hi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function E2() {}
E2.prototype = hi.prototype;
function Of(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = S2),
    (this.updater = n || w2);
}
var Rf = (Of.prototype = new E2());
Rf.constructor = Of;
x2(Rf, hi.prototype);
Rf.isPureReactComponent = !0;
var kp = Array.isArray,
  b2 = Object.prototype.hasOwnProperty,
  Tf = { current: null },
  C2 = { key: !0, ref: !0, __self: !0, __source: !0 };
function j2(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      b2.call(t, r) && !C2.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: $a,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: Tf.current,
  };
}
function uy(e, t) {
  return {
    $$typeof: $a,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function If(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $a;
}
function dy(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Lp = /\/+/g;
function zu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dy("" + e.key)
    : t.toString(36);
}
function as(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $a:
          case J4:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (o = o(a)),
      (e = r === "" ? "." + zu(a, 0) : r),
      kp(o)
        ? ((n = ""),
          e != null && (n = e.replace(Lp, "$&/") + "/"),
          as(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (If(o) &&
            (o = uy(
              o,
              n +
                (!o.key || (a && a.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Lp, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), kp(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var c = r + zu(i, l);
      a += as(i, t, n, c, o);
    }
  else if (((c = cy(e)), typeof c == "function"))
    for (e = c.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (c = r + zu(i, l++)), (a += as(i, t, n, c, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Dl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    as(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function fy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Rt = { current: null },
  ls = { transition: null },
  py = {
    ReactCurrentDispatcher: Rt,
    ReactCurrentBatchConfig: ls,
    ReactCurrentOwner: Tf,
  };
function A2() {
  throw Error("act(...) is not supported in production builds of React.");
}
xe.Children = {
  map: Dl,
  forEach: function (e, t, n) {
    Dl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Dl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Dl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!If(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
xe.Component = hi;
xe.Fragment = ey;
xe.Profiler = ny;
xe.PureComponent = Of;
xe.StrictMode = ty;
xe.Suspense = ay;
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = py;
xe.act = A2;
xe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = x2({}, e.props),
    o = e.key,
    i = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (a = Tf.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      b2.call(t, c) &&
        !C2.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: $a, type: e.type, key: o, ref: i, props: r, _owner: a };
};
xe.createContext = function (e) {
  return (
    (e = {
      $$typeof: oy,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ry, _context: e }),
    (e.Consumer = e)
  );
};
xe.createElement = j2;
xe.createFactory = function (e) {
  var t = j2.bind(null, e);
  return (t.type = e), t;
};
xe.createRef = function () {
  return { current: null };
};
xe.forwardRef = function (e) {
  return { $$typeof: iy, render: e };
};
xe.isValidElement = If;
xe.lazy = function (e) {
  return { $$typeof: sy, _payload: { _status: -1, _result: e }, _init: fy };
};
xe.memo = function (e, t) {
  return { $$typeof: ly, type: e, compare: t === void 0 ? null : t };
};
xe.startTransition = function (e) {
  var t = ls.transition;
  ls.transition = {};
  try {
    e();
  } finally {
    ls.transition = t;
  }
};
xe.unstable_act = A2;
xe.useCallback = function (e, t) {
  return Rt.current.useCallback(e, t);
};
xe.useContext = function (e) {
  return Rt.current.useContext(e);
};
xe.useDebugValue = function () {};
xe.useDeferredValue = function (e) {
  return Rt.current.useDeferredValue(e);
};
xe.useEffect = function (e, t) {
  return Rt.current.useEffect(e, t);
};
xe.useId = function () {
  return Rt.current.useId();
};
xe.useImperativeHandle = function (e, t, n) {
  return Rt.current.useImperativeHandle(e, t, n);
};
xe.useInsertionEffect = function (e, t) {
  return Rt.current.useInsertionEffect(e, t);
};
xe.useLayoutEffect = function (e, t) {
  return Rt.current.useLayoutEffect(e, t);
};
xe.useMemo = function (e, t) {
  return Rt.current.useMemo(e, t);
};
xe.useReducer = function (e, t, n) {
  return Rt.current.useReducer(e, t, n);
};
xe.useRef = function (e) {
  return Rt.current.useRef(e);
};
xe.useState = function (e) {
  return Rt.current.useState(e);
};
xe.useSyncExternalStore = function (e, t, n) {
  return Rt.current.useSyncExternalStore(e, t, n);
};
xe.useTransition = function () {
  return Rt.current.useTransition();
};
xe.version = "18.3.1";
y2.exports = xe;
var w = y2.exports;
const S = Pf(w),
  M2 = Q4({ __proto__: null, default: S }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy = w,
  my = Symbol.for("react.element"),
  gy = Symbol.for("react.fragment"),
  vy = Object.prototype.hasOwnProperty,
  yy = hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wy = { key: !0, ref: !0, __self: !0, __source: !0 };
function k2(e, t, n) {
  var r,
    o = {},
    i = null,
    a = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) vy.call(t, r) && !wy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: my,
    type: e,
    key: i,
    ref: a,
    props: o,
    _owner: yy.current,
  };
}
oc.Fragment = gy;
oc.jsx = k2;
oc.jsxs = k2;
v2.exports = oc;
var p = v2.exports,
  Sd = {},
  L2 = { exports: {} },
  Jt = {},
  N2 = { exports: {} },
  P2 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(V, _) {
    var z = V.length;
    V.push(_);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        ne = V[W];
      if (0 < o(ne, _)) (V[W] = _), (V[z] = ne), (z = W);
      else break e;
    }
  }
  function n(V) {
    return V.length === 0 ? null : V[0];
  }
  function r(V) {
    if (V.length === 0) return null;
    var _ = V[0],
      z = V.pop();
    if (z !== _) {
      V[0] = z;
      e: for (var W = 0, ne = V.length, ye = ne >>> 1; W < ye; ) {
        var he = 2 * (W + 1) - 1,
          Se = V[he],
          fe = he + 1,
          be = V[fe];
        if (0 > o(Se, z))
          fe < ne && 0 > o(be, Se)
            ? ((V[W] = be), (V[fe] = z), (W = fe))
            : ((V[W] = Se), (V[he] = z), (W = he));
        else if (fe < ne && 0 > o(be, z)) (V[W] = be), (V[fe] = z), (W = fe);
        else break e;
      }
    }
    return _;
  }
  function o(V, _) {
    var z = V.sortIndex - _.sortIndex;
    return z !== 0 ? z : V.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var a = Date,
      l = a.now();
    e.unstable_now = function () {
      return a.now() - l;
    };
  }
  var c = [],
    u = [],
    h = 1,
    f = null,
    g = 3,
    C = !1,
    E = !1,
    y = !1,
    M = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    v = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(V) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= V)
        r(u), (_.sortIndex = _.expirationTime), t(c, _);
      else break;
      _ = n(u);
    }
  }
  function j(V) {
    if (((y = !1), b(V), !E))
      if (n(c) !== null) (E = !0), ve(N);
      else {
        var _ = n(u);
        _ !== null && re(j, _.startTime - V);
      }
  }
  function N(V, _) {
    (E = !1), y && ((y = !1), m(R), (R = -1)), (C = !0);
    var z = g;
    try {
      for (
        b(_), f = n(c);
        f !== null && (!(f.expirationTime > _) || (V && !K()));

      ) {
        var W = f.callback;
        if (typeof W == "function") {
          (f.callback = null), (g = f.priorityLevel);
          var ne = W(f.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof ne == "function" ? (f.callback = ne) : f === n(c) && r(c),
            b(_);
        } else r(c);
        f = n(c);
      }
      if (f !== null) var ye = !0;
      else {
        var he = n(u);
        he !== null && re(j, he.startTime - _), (ye = !1);
      }
      return ye;
    } finally {
      (f = null), (g = z), (C = !1);
    }
  }
  var O = !1,
    P = null,
    R = -1,
    F = 5,
    H = -1;
  function K() {
    return !(e.unstable_now() - H < F);
  }
  function G() {
    if (P !== null) {
      var V = e.unstable_now();
      H = V;
      var _ = !0;
      try {
        _ = P(!0, V);
      } finally {
        _ ? ue() : ((O = !1), (P = null));
      }
    } else O = !1;
  }
  var ue;
  if (typeof v == "function")
    ue = function () {
      v(G);
    };
  else if (typeof MessageChannel < "u") {
    var ie = new MessageChannel(),
      pe = ie.port2;
    (ie.port1.onmessage = G),
      (ue = function () {
        pe.postMessage(null);
      });
  } else
    ue = function () {
      M(G, 0);
    };
  function ve(V) {
    (P = V), O || ((O = !0), ue());
  }
  function re(V, _) {
    R = M(function () {
      V(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (V) {
      V.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      E || C || ((E = !0), ve(N));
    }),
    (e.unstable_forceFrameRate = function (V) {
      0 > V || 125 < V
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < V ? Math.floor(1e3 / V) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (V) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = g;
      }
      var z = g;
      g = _;
      try {
        return V();
      } finally {
        g = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (V, _) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var z = g;
      g = V;
      try {
        return _();
      } finally {
        g = z;
      }
    }),
    (e.unstable_scheduleCallback = function (V, _, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        V)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = z + ne),
        (V = {
          id: h++,
          callback: _,
          priorityLevel: V,
          startTime: z,
          expirationTime: ne,
          sortIndex: -1,
        }),
        z > W
          ? ((V.sortIndex = z),
            t(u, V),
            n(c) === null &&
              V === n(u) &&
              (y ? (m(R), (R = -1)) : (y = !0), re(j, z - W)))
          : ((V.sortIndex = ne), t(c, V), E || C || ((E = !0), ve(N))),
        V
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (V) {
      var _ = g;
      return function () {
        var z = g;
        g = _;
        try {
          return V.apply(this, arguments);
        } finally {
          g = z;
        }
      };
    });
})(P2);
N2.exports = P2;
var xy = N2.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sy = w,
  Qt = xy;
function $(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var O2 = new Set(),
  ya = {};
function go(e, t) {
  oi(e, t), oi(e + "Capture", t);
}
function oi(e, t) {
  for (ya[e] = t, e = 0; e < t.length; e++) O2.add(t[e]);
}
var Yn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ed = Object.prototype.hasOwnProperty,
  Ey =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Np = {},
  Pp = {};
function by(e) {
  return Ed.call(Pp, e)
    ? !0
    : Ed.call(Np, e)
    ? !1
    : Ey.test(e)
    ? (Pp[e] = !0)
    : ((Np[e] = !0), !1);
}
function Cy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function jy(e, t, n, r) {
  if (t === null || typeof t > "u" || Cy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Tt(e, t, n, r, o, i, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = a);
}
var St = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Tt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  St[t] = new Tt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  St[e] = new Tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  St[e] = new Tt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    St[e] = new Tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  St[e] = new Tt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  St[e] = new Tt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  St[e] = new Tt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  St[e] = new Tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Df = /[\-:]([a-z])/g;
function Hf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Df, Hf);
    St[t] = new Tt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Df, Hf);
    St[t] = new Tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Df, Hf);
  St[t] = new Tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  St[e] = new Tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
St.xlinkHref = new Tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  St[e] = new Tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _f(e, t, n, r) {
  var o = St.hasOwnProperty(t) ? St[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (jy(t, n, o, r) && (n = null),
    r || o === null
      ? by(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var er = Sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hl = Symbol.for("react.element"),
  Ho = Symbol.for("react.portal"),
  _o = Symbol.for("react.fragment"),
  Vf = Symbol.for("react.strict_mode"),
  bd = Symbol.for("react.profiler"),
  R2 = Symbol.for("react.provider"),
  T2 = Symbol.for("react.context"),
  zf = Symbol.for("react.forward_ref"),
  Cd = Symbol.for("react.suspense"),
  jd = Symbol.for("react.suspense_list"),
  Zf = Symbol.for("react.memo"),
  pr = Symbol.for("react.lazy"),
  I2 = Symbol.for("react.offscreen"),
  Op = Symbol.iterator;
function Gi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Op && e[Op]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ke = Object.assign,
  Zu;
function ra(e) {
  if (Zu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Zu = (t && t[1]) || "";
    }
  return (
    `
` +
    Zu +
    e
  );
}
var $u = !1;
function Uu(e, t) {
  if (!e || $u) return "";
  $u = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          a = o.length - 1,
          l = i.length - 1;
        1 <= a && 0 <= l && o[a] !== i[l];

      )
        l--;
      for (; 1 <= a && 0 <= l; a--, l--)
        if (o[a] !== i[l]) {
          if (a !== 1 || l !== 1)
            do
              if ((a--, l--, 0 > l || o[a] !== i[l])) {
                var c =
                  `
` + o[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= l);
          break;
        }
    }
  } finally {
    ($u = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ra(e) : "";
}
function Ay(e) {
  switch (e.tag) {
    case 5:
      return ra(e.type);
    case 16:
      return ra("Lazy");
    case 13:
      return ra("Suspense");
    case 19:
      return ra("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Uu(e.type, !1)), e;
    case 11:
      return (e = Uu(e.type.render, !1)), e;
    case 1:
      return (e = Uu(e.type, !0)), e;
    default:
      return "";
  }
}
function Ad(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case _o:
      return "Fragment";
    case Ho:
      return "Portal";
    case bd:
      return "Profiler";
    case Vf:
      return "StrictMode";
    case Cd:
      return "Suspense";
    case jd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case T2:
        return (e.displayName || "Context") + ".Consumer";
      case R2:
        return (e._context.displayName || "Context") + ".Provider";
      case zf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Zf:
        return (
          (t = e.displayName || null), t !== null ? t : Ad(e.type) || "Memo"
        );
      case pr:
        (t = e._payload), (e = e._init);
        try {
          return Ad(e(t));
        } catch {}
    }
  return null;
}
function My(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ad(t);
    case 8:
      return t === Vf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Lr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function D2(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function ky(e) {
  var t = D2(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (a) {
          (r = "" + a), i.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function _l(e) {
  e._valueTracker || (e._valueTracker = ky(e));
}
function H2(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = D2(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Es(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Md(e, t) {
  var n = t.checked;
  return Ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Rp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Lr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _2(e, t) {
  (t = t.checked), t != null && _f(e, "checked", t, !1);
}
function kd(e, t) {
  _2(e, t);
  var n = Lr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ld(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ld(e, t.type, Lr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Tp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ld(e, t, n) {
  (t !== "number" || Es(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oa = Array.isArray;
function Ko(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Lr(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Nd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error($(91));
  return Ke({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ip(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error($(92));
      if (oa(n)) {
        if (1 < n.length) throw Error($(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Lr(n) };
}
function V2(e, t) {
  var n = Lr(t.value),
    r = Lr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Dp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function z2(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Pd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? z2(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Vl,
  Z2 = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vl = Vl || document.createElement("div"),
          Vl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wa(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var la = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ly = ["Webkit", "ms", "Moz", "O"];
Object.keys(la).forEach(function (e) {
  Ly.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (la[t] = la[e]);
  });
});
function $2(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (la.hasOwnProperty(e) && la[e])
    ? ("" + t).trim()
    : t + "px";
}
function U2(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = $2(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ny = Ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Od(e, t) {
  if (t) {
    if (Ny[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error($(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error($(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error($(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error($(62));
  }
}
function Rd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Td = null;
function $f(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Id = null,
  qo = null,
  Xo = null;
function Hp(e) {
  if ((e = Fa(e))) {
    if (typeof Id != "function") throw Error($(280));
    var t = e.stateNode;
    t && ((t = cc(t)), Id(e.stateNode, e.type, t));
  }
}
function B2(e) {
  qo ? (Xo ? Xo.push(e) : (Xo = [e])) : (qo = e);
}
function F2() {
  if (qo) {
    var e = qo,
      t = Xo;
    if (((Xo = qo = null), Hp(e), t)) for (e = 0; e < t.length; e++) Hp(t[e]);
  }
}
function W2(e, t) {
  return e(t);
}
function G2() {}
var Bu = !1;
function Y2(e, t, n) {
  if (Bu) return e(t, n);
  Bu = !0;
  try {
    return W2(e, t, n);
  } finally {
    (Bu = !1), (qo !== null || Xo !== null) && (G2(), F2());
  }
}
function xa(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = cc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error($(231, t, typeof n));
  return n;
}
var Dd = !1;
if (Yn)
  try {
    var Yi = {};
    Object.defineProperty(Yi, "passive", {
      get: function () {
        Dd = !0;
      },
    }),
      window.addEventListener("test", Yi, Yi),
      window.removeEventListener("test", Yi, Yi);
  } catch {
    Dd = !1;
  }
function Py(e, t, n, r, o, i, a, l, c) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var sa = !1,
  bs = null,
  Cs = !1,
  Hd = null,
  Oy = {
    onError: function (e) {
      (sa = !0), (bs = e);
    },
  };
function Ry(e, t, n, r, o, i, a, l, c) {
  (sa = !1), (bs = null), Py.apply(Oy, arguments);
}
function Ty(e, t, n, r, o, i, a, l, c) {
  if ((Ry.apply(this, arguments), sa)) {
    if (sa) {
      var u = bs;
      (sa = !1), (bs = null);
    } else throw Error($(198));
    Cs || ((Cs = !0), (Hd = u));
  }
}
function vo(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function K2(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function _p(e) {
  if (vo(e) !== e) throw Error($(188));
}
function Iy(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vo(e)), t === null)) throw Error($(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return _p(o), e;
        if (i === r) return _p(o), t;
        i = i.sibling;
      }
      throw Error($(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var a = !1, l = o.child; l; ) {
        if (l === n) {
          (a = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (a = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!a) {
        for (l = i.child; l; ) {
          if (l === n) {
            (a = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (a = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!a) throw Error($(189));
      }
    }
    if (n.alternate !== r) throw Error($(190));
  }
  if (n.tag !== 3) throw Error($(188));
  return n.stateNode.current === n ? e : t;
}
function q2(e) {
  return (e = Iy(e)), e !== null ? X2(e) : null;
}
function X2(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = X2(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Q2 = Qt.unstable_scheduleCallback,
  Vp = Qt.unstable_cancelCallback,
  Dy = Qt.unstable_shouldYield,
  Hy = Qt.unstable_requestPaint,
  tt = Qt.unstable_now,
  _y = Qt.unstable_getCurrentPriorityLevel,
  Uf = Qt.unstable_ImmediatePriority,
  J2 = Qt.unstable_UserBlockingPriority,
  js = Qt.unstable_NormalPriority,
  Vy = Qt.unstable_LowPriority,
  eg = Qt.unstable_IdlePriority,
  ic = null,
  Nn = null;
function zy(e) {
  if (Nn && typeof Nn.onCommitFiberRoot == "function")
    try {
      Nn.onCommitFiberRoot(ic, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gn = Math.clz32 ? Math.clz32 : Uy,
  Zy = Math.log,
  $y = Math.LN2;
function Uy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zy(e) / $y) | 0)) | 0;
}
var zl = 64,
  Zl = 4194304;
function ia(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function As(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var l = a & ~o;
    l !== 0 ? (r = ia(l)) : ((i &= a), i !== 0 && (r = ia(i)));
  } else (a = n & ~o), a !== 0 ? (r = ia(a)) : i !== 0 && (r = ia(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - gn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function By(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fy(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var a = 31 - gn(i),
      l = 1 << a,
      c = o[a];
    c === -1
      ? (!(l & n) || l & r) && (o[a] = By(l, t))
      : c <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function _d(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tg() {
  var e = zl;
  return (zl <<= 1), !(zl & 4194240) && (zl = 64), e;
}
function Fu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ua(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gn(t)),
    (e[t] = n);
}
function Wy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - gn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Bf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var Me = 0;
function ng(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rg,
  Ff,
  og,
  ig,
  ag,
  Vd = !1,
  $l = [],
  xr = null,
  Sr = null,
  Er = null,
  Sa = new Map(),
  Ea = new Map(),
  mr = [],
  Gy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function zp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xr = null;
      break;
    case "dragenter":
    case "dragleave":
      Sr = null;
      break;
    case "mouseover":
    case "mouseout":
      Er = null;
      break;
    case "pointerover":
    case "pointerout":
      Sa.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ea.delete(t.pointerId);
  }
}
function Ki(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Fa(t)), t !== null && Ff(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Yy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (xr = Ki(xr, e, t, n, r, o)), !0;
    case "dragenter":
      return (Sr = Ki(Sr, e, t, n, r, o)), !0;
    case "mouseover":
      return (Er = Ki(Er, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Sa.set(i, Ki(Sa.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Ea.set(i, Ki(Ea.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function lg(e) {
  var t = eo(e.target);
  if (t !== null) {
    var n = vo(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = K2(n)), t !== null)) {
          (e.blockedOn = t),
            ag(e.priority, function () {
              og(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ss(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = zd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Td = r), n.target.dispatchEvent(r), (Td = null);
    } else return (t = Fa(n)), t !== null && Ff(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zp(e, t, n) {
  ss(e) && n.delete(t);
}
function Ky() {
  (Vd = !1),
    xr !== null && ss(xr) && (xr = null),
    Sr !== null && ss(Sr) && (Sr = null),
    Er !== null && ss(Er) && (Er = null),
    Sa.forEach(Zp),
    Ea.forEach(Zp);
}
function qi(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Vd ||
      ((Vd = !0),
      Qt.unstable_scheduleCallback(Qt.unstable_NormalPriority, Ky)));
}
function ba(e) {
  function t(o) {
    return qi(o, e);
  }
  if (0 < $l.length) {
    qi($l[0], e);
    for (var n = 1; n < $l.length; n++) {
      var r = $l[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xr !== null && qi(xr, e),
      Sr !== null && qi(Sr, e),
      Er !== null && qi(Er, e),
      Sa.forEach(t),
      Ea.forEach(t),
      n = 0;
    n < mr.length;
    n++
  )
    (r = mr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < mr.length && ((n = mr[0]), n.blockedOn === null); )
    lg(n), n.blockedOn === null && mr.shift();
}
var Qo = er.ReactCurrentBatchConfig,
  Ms = !0;
function qy(e, t, n, r) {
  var o = Me,
    i = Qo.transition;
  Qo.transition = null;
  try {
    (Me = 1), Wf(e, t, n, r);
  } finally {
    (Me = o), (Qo.transition = i);
  }
}
function Xy(e, t, n, r) {
  var o = Me,
    i = Qo.transition;
  Qo.transition = null;
  try {
    (Me = 4), Wf(e, t, n, r);
  } finally {
    (Me = o), (Qo.transition = i);
  }
}
function Wf(e, t, n, r) {
  if (Ms) {
    var o = zd(e, t, n, r);
    if (o === null) td(e, t, r, ks, n), zp(e, r);
    else if (Yy(o, e, t, n, r)) r.stopPropagation();
    else if ((zp(e, r), t & 4 && -1 < Gy.indexOf(e))) {
      for (; o !== null; ) {
        var i = Fa(o);
        if (
          (i !== null && rg(i),
          (i = zd(e, t, n, r)),
          i === null && td(e, t, r, ks, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else td(e, t, r, null, n);
  }
}
var ks = null;
function zd(e, t, n, r) {
  if (((ks = null), (e = $f(r)), (e = eo(e)), e !== null))
    if (((t = vo(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = K2(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ks = e), null;
}
function sg(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (_y()) {
        case Uf:
          return 1;
        case J2:
          return 4;
        case js:
        case Vy:
          return 16;
        case eg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var vr = null,
  Gf = null,
  cs = null;
function cg() {
  if (cs) return cs;
  var e,
    t = Gf,
    n = t.length,
    r,
    o = "value" in vr ? vr.value : vr.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === o[i - r]; r++);
  return (cs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function us(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ul() {
  return !0;
}
function $p() {
  return !1;
}
function en(e) {
  function t(n, r, o, i, a) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = a),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ul
        : $p),
      (this.isPropagationStopped = $p),
      this
    );
  }
  return (
    Ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ul));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ul));
      },
      persist: function () {},
      isPersistent: Ul,
    }),
    t
  );
}
var mi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yf = en(mi),
  Ba = Ke({}, mi, { view: 0, detail: 0 }),
  Qy = en(Ba),
  Wu,
  Gu,
  Xi,
  ac = Ke({}, Ba, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Kf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Xi &&
            (Xi && e.type === "mousemove"
              ? ((Wu = e.screenX - Xi.screenX), (Gu = e.screenY - Xi.screenY))
              : (Gu = Wu = 0),
            (Xi = e)),
          Wu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Gu;
    },
  }),
  Up = en(ac),
  Jy = Ke({}, ac, { dataTransfer: 0 }),
  ew = en(Jy),
  tw = Ke({}, Ba, { relatedTarget: 0 }),
  Yu = en(tw),
  nw = Ke({}, mi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rw = en(nw),
  ow = Ke({}, mi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  iw = en(ow),
  aw = Ke({}, mi, { data: 0 }),
  Bp = en(aw),
  lw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function uw(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cw[e]) ? !!t[e] : !1;
}
function Kf() {
  return uw;
}
var dw = Ke({}, Ba, {
    key: function (e) {
      if (e.key) {
        var t = lw[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = us(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sw[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Kf,
    charCode: function (e) {
      return e.type === "keypress" ? us(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? us(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  fw = en(dw),
  pw = Ke({}, ac, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Fp = en(pw),
  hw = Ke({}, Ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kf,
  }),
  mw = en(hw),
  gw = Ke({}, mi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vw = en(gw),
  yw = Ke({}, ac, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ww = en(yw),
  xw = [9, 13, 27, 32],
  qf = Yn && "CompositionEvent" in window,
  ca = null;
Yn && "documentMode" in document && (ca = document.documentMode);
var Sw = Yn && "TextEvent" in window && !ca,
  ug = Yn && (!qf || (ca && 8 < ca && 11 >= ca)),
  Wp = " ",
  Gp = !1;
function dg(e, t) {
  switch (e) {
    case "keyup":
      return xw.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Vo = !1;
function Ew(e, t) {
  switch (e) {
    case "compositionend":
      return fg(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gp = !0), Wp);
    case "textInput":
      return (e = t.data), e === Wp && Gp ? null : e;
    default:
      return null;
  }
}
function bw(e, t) {
  if (Vo)
    return e === "compositionend" || (!qf && dg(e, t))
      ? ((e = cg()), (cs = Gf = vr = null), (Vo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ug && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cw = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cw[e.type] : t === "textarea";
}
function pg(e, t, n, r) {
  B2(r),
    (t = Ls(t, "onChange")),
    0 < t.length &&
      ((n = new Yf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ua = null,
  Ca = null;
function jw(e) {
  Cg(e, 0);
}
function lc(e) {
  var t = $o(e);
  if (H2(t)) return e;
}
function Aw(e, t) {
  if (e === "change") return t;
}
var hg = !1;
if (Yn) {
  var Ku;
  if (Yn) {
    var qu = "oninput" in document;
    if (!qu) {
      var Kp = document.createElement("div");
      Kp.setAttribute("oninput", "return;"),
        (qu = typeof Kp.oninput == "function");
    }
    Ku = qu;
  } else Ku = !1;
  hg = Ku && (!document.documentMode || 9 < document.documentMode);
}
function qp() {
  ua && (ua.detachEvent("onpropertychange", mg), (Ca = ua = null));
}
function mg(e) {
  if (e.propertyName === "value" && lc(Ca)) {
    var t = [];
    pg(t, Ca, e, $f(e)), Y2(jw, t);
  }
}
function Mw(e, t, n) {
  e === "focusin"
    ? (qp(), (ua = t), (Ca = n), ua.attachEvent("onpropertychange", mg))
    : e === "focusout" && qp();
}
function kw(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return lc(Ca);
}
function Lw(e, t) {
  if (e === "click") return lc(t);
}
function Nw(e, t) {
  if (e === "input" || e === "change") return lc(t);
}
function Pw(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var wn = typeof Object.is == "function" ? Object.is : Pw;
function ja(e, t) {
  if (wn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Ed.call(t, o) || !wn(e[o], t[o])) return !1;
  }
  return !0;
}
function Xp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qp(e, t) {
  var n = Xp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xp(n);
  }
}
function gg(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gg(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vg() {
  for (var e = window, t = Es(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Es(e.document);
  }
  return t;
}
function Xf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ow(e) {
  var t = vg(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gg(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xf(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Qp(n, i));
        var a = Qp(n, r);
        o &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rw = Yn && "documentMode" in document && 11 >= document.documentMode,
  zo = null,
  Zd = null,
  da = null,
  $d = !1;
function Jp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $d ||
    zo == null ||
    zo !== Es(r) ||
    ((r = zo),
    "selectionStart" in r && Xf(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (da && ja(da, r)) ||
      ((da = r),
      (r = Ls(Zd, "onSelect")),
      0 < r.length &&
        ((t = new Yf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zo))));
}
function Bl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Zo = {
    animationend: Bl("Animation", "AnimationEnd"),
    animationiteration: Bl("Animation", "AnimationIteration"),
    animationstart: Bl("Animation", "AnimationStart"),
    transitionend: Bl("Transition", "TransitionEnd"),
  },
  Xu = {},
  yg = {};
Yn &&
  ((yg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Zo.animationend.animation,
    delete Zo.animationiteration.animation,
    delete Zo.animationstart.animation),
  "TransitionEvent" in window || delete Zo.transitionend.transition);
function sc(e) {
  if (Xu[e]) return Xu[e];
  if (!Zo[e]) return e;
  var t = Zo[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in yg) return (Xu[e] = t[n]);
  return e;
}
var wg = sc("animationend"),
  xg = sc("animationiteration"),
  Sg = sc("animationstart"),
  Eg = sc("transitionend"),
  bg = new Map(),
  eh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Ir(e, t) {
  bg.set(e, t), go(t, [e]);
}
for (var Qu = 0; Qu < eh.length; Qu++) {
  var Ju = eh[Qu],
    Tw = Ju.toLowerCase(),
    Iw = Ju[0].toUpperCase() + Ju.slice(1);
  Ir(Tw, "on" + Iw);
}
Ir(wg, "onAnimationEnd");
Ir(xg, "onAnimationIteration");
Ir(Sg, "onAnimationStart");
Ir("dblclick", "onDoubleClick");
Ir("focusin", "onFocus");
Ir("focusout", "onBlur");
Ir(Eg, "onTransitionEnd");
oi("onMouseEnter", ["mouseout", "mouseover"]);
oi("onMouseLeave", ["mouseout", "mouseover"]);
oi("onPointerEnter", ["pointerout", "pointerover"]);
oi("onPointerLeave", ["pointerout", "pointerover"]);
go(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
go(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
go("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
go(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
go(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
go(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var aa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Dw = new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));
function th(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ty(r, t, void 0, e), (e.currentTarget = null);
}
function Cg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var l = r[a],
            c = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), c !== i && o.isPropagationStopped())) break e;
          th(o, l, u), (i = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((l = r[a]),
            (c = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            c !== i && o.isPropagationStopped())
          )
            break e;
          th(o, l, u), (i = c);
        }
    }
  }
  if (Cs) throw ((e = Hd), (Cs = !1), (Hd = null), e);
}
function Ve(e, t) {
  var n = t[Gd];
  n === void 0 && (n = t[Gd] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jg(t, e, 2, !1), n.add(r));
}
function ed(e, t, n) {
  var r = 0;
  t && (r |= 4), jg(n, e, r, t);
}
var Fl = "_reactListening" + Math.random().toString(36).slice(2);
function Aa(e) {
  if (!e[Fl]) {
    (e[Fl] = !0),
      O2.forEach(function (n) {
        n !== "selectionchange" && (Dw.has(n) || ed(n, !1, e), ed(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fl] || ((t[Fl] = !0), ed("selectionchange", !1, t));
  }
}
function jg(e, t, n, r) {
  switch (sg(t)) {
    case 1:
      var o = qy;
      break;
    case 4:
      o = Xy;
      break;
    default:
      o = Wf;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Dd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function td(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            a = a.return;
          }
        for (; l !== null; ) {
          if (((a = eo(l)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = i = a;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Y2(function () {
    var u = i,
      h = $f(n),
      f = [];
    e: {
      var g = bg.get(e);
      if (g !== void 0) {
        var C = Yf,
          E = e;
        switch (e) {
          case "keypress":
            if (us(n) === 0) break e;
          case "keydown":
          case "keyup":
            C = fw;
            break;
          case "focusin":
            (E = "focus"), (C = Yu);
            break;
          case "focusout":
            (E = "blur"), (C = Yu);
            break;
          case "beforeblur":
          case "afterblur":
            C = Yu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            C = Up;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            C = ew;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            C = mw;
            break;
          case wg:
          case xg:
          case Sg:
            C = rw;
            break;
          case Eg:
            C = vw;
            break;
          case "scroll":
            C = Qy;
            break;
          case "wheel":
            C = ww;
            break;
          case "copy":
          case "cut":
          case "paste":
            C = iw;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            C = Fp;
        }
        var y = (t & 4) !== 0,
          M = !y && e === "scroll",
          m = y ? (g !== null ? g + "Capture" : null) : g;
        y = [];
        for (var v = u, b; v !== null; ) {
          b = v;
          var j = b.stateNode;
          if (
            (b.tag === 5 &&
              j !== null &&
              ((b = j),
              m !== null && ((j = xa(v, m)), j != null && y.push(Ma(v, j, b)))),
            M)
          )
            break;
          v = v.return;
        }
        0 < y.length &&
          ((g = new C(g, E, null, n, h)), f.push({ event: g, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (C = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Td &&
            (E = n.relatedTarget || n.fromElement) &&
            (eo(E) || E[Kn]))
        )
          break e;
        if (
          (C || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          C
            ? ((E = n.relatedTarget || n.toElement),
              (C = u),
              (E = E ? eo(E) : null),
              E !== null &&
                ((M = vo(E)), E !== M || (E.tag !== 5 && E.tag !== 6)) &&
                (E = null))
            : ((C = null), (E = u)),
          C !== E)
        ) {
          if (
            ((y = Up),
            (j = "onMouseLeave"),
            (m = "onMouseEnter"),
            (v = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = Fp),
              (j = "onPointerLeave"),
              (m = "onPointerEnter"),
              (v = "pointer")),
            (M = C == null ? g : $o(C)),
            (b = E == null ? g : $o(E)),
            (g = new y(j, v + "leave", C, n, h)),
            (g.target = M),
            (g.relatedTarget = b),
            (j = null),
            eo(h) === u &&
              ((y = new y(m, v + "enter", E, n, h)),
              (y.target = b),
              (y.relatedTarget = M),
              (j = y)),
            (M = j),
            C && E)
          )
            t: {
              for (y = C, m = E, v = 0, b = y; b; b = Oo(b)) v++;
              for (b = 0, j = m; j; j = Oo(j)) b++;
              for (; 0 < v - b; ) (y = Oo(y)), v--;
              for (; 0 < b - v; ) (m = Oo(m)), b--;
              for (; v--; ) {
                if (y === m || (m !== null && y === m.alternate)) break t;
                (y = Oo(y)), (m = Oo(m));
              }
              y = null;
            }
          else y = null;
          C !== null && nh(f, g, C, y, !1),
            E !== null && M !== null && nh(f, M, E, y, !0);
        }
      }
      e: {
        if (
          ((g = u ? $o(u) : window),
          (C = g.nodeName && g.nodeName.toLowerCase()),
          C === "select" || (C === "input" && g.type === "file"))
        )
          var N = Aw;
        else if (Yp(g))
          if (hg) N = Nw;
          else {
            N = kw;
            var O = Mw;
          }
        else
          (C = g.nodeName) &&
            C.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (N = Lw);
        if (N && (N = N(e, u))) {
          pg(f, N, n, h);
          break e;
        }
        O && O(e, g, u),
          e === "focusout" &&
            (O = g._wrapperState) &&
            O.controlled &&
            g.type === "number" &&
            Ld(g, "number", g.value);
      }
      switch (((O = u ? $o(u) : window), e)) {
        case "focusin":
          (Yp(O) || O.contentEditable === "true") &&
            ((zo = O), (Zd = u), (da = null));
          break;
        case "focusout":
          da = Zd = zo = null;
          break;
        case "mousedown":
          $d = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($d = !1), Jp(f, n, h);
          break;
        case "selectionchange":
          if (Rw) break;
        case "keydown":
        case "keyup":
          Jp(f, n, h);
      }
      var P;
      if (qf)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Vo
          ? dg(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (ug &&
          n.locale !== "ko" &&
          (Vo || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Vo && (P = cg())
            : ((vr = h),
              (Gf = "value" in vr ? vr.value : vr.textContent),
              (Vo = !0))),
        (O = Ls(u, R)),
        0 < O.length &&
          ((R = new Bp(R, e, null, n, h)),
          f.push({ event: R, listeners: O }),
          P ? (R.data = P) : ((P = fg(n)), P !== null && (R.data = P)))),
        (P = Sw ? Ew(e, n) : bw(e, n)) &&
          ((u = Ls(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new Bp("onBeforeInput", "beforeinput", null, n, h)),
            f.push({ event: h, listeners: u }),
            (h.data = P)));
    }
    Cg(f, t);
  });
}
function Ma(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ls(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = xa(e, n)),
      i != null && r.unshift(Ma(e, i, o)),
      (i = xa(e, t)),
      i != null && r.push(Ma(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Oo(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function nh(e, t, n, r, o) {
  for (var i = t._reactName, a = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      u = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((c = xa(n, i)), c != null && a.unshift(Ma(n, c, l)))
        : o || ((c = xa(n, i)), c != null && a.push(Ma(n, c, l)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Hw = /\r\n?/g,
  _w = /\u0000|\uFFFD/g;
function rh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Hw,
      `
`
    )
    .replace(_w, "");
}
function Wl(e, t, n) {
  if (((t = rh(t)), rh(e) !== t && n)) throw Error($(425));
}
function Ns() {}
var Ud = null,
  Bd = null;
function Fd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wd = typeof setTimeout == "function" ? setTimeout : void 0,
  Vw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oh = typeof Promise == "function" ? Promise : void 0,
  zw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oh < "u"
      ? function (e) {
          return oh.resolve(null).then(e).catch(Zw);
        }
      : Wd;
function Zw(e) {
  setTimeout(function () {
    throw e;
  });
}
function nd(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), ba(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  ba(t);
}
function br(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ih(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gi = Math.random().toString(36).slice(2),
  Mn = "__reactFiber$" + gi,
  ka = "__reactProps$" + gi,
  Kn = "__reactContainer$" + gi,
  Gd = "__reactEvents$" + gi,
  $w = "__reactListeners$" + gi,
  Uw = "__reactHandles$" + gi;
function eo(e) {
  var t = e[Mn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kn] || n[Mn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ih(e); e !== null; ) {
          if ((n = e[Mn])) return n;
          e = ih(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Fa(e) {
  return (
    (e = e[Mn] || e[Kn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function $o(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error($(33));
}
function cc(e) {
  return e[ka] || null;
}
var Yd = [],
  Uo = -1;
function Dr(e) {
  return { current: e };
}
function ze(e) {
  0 > Uo || ((e.current = Yd[Uo]), (Yd[Uo] = null), Uo--);
}
function Ie(e, t) {
  Uo++, (Yd[Uo] = e.current), (e.current = t);
}
var Nr = {},
  kt = Dr(Nr),
  Zt = Dr(!1),
  ao = Nr;
function ii(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function $t(e) {
  return (e = e.childContextTypes), e != null;
}
function Ps() {
  ze(Zt), ze(kt);
}
function ah(e, t, n) {
  if (kt.current !== Nr) throw Error($(168));
  Ie(kt, t), Ie(Zt, n);
}
function Ag(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error($(108, My(e) || "Unknown", o));
  return Ke({}, n, r);
}
function Os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nr),
    (ao = kt.current),
    Ie(kt, e),
    Ie(Zt, Zt.current),
    !0
  );
}
function lh(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error($(169));
  n
    ? ((e = Ag(e, t, ao)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ze(Zt),
      ze(kt),
      Ie(kt, e))
    : ze(Zt),
    Ie(Zt, n);
}
var Bn = null,
  uc = !1,
  rd = !1;
function Mg(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function Bw(e) {
  (uc = !0), Mg(e);
}
function Hr() {
  if (!rd && Bn !== null) {
    rd = !0;
    var e = 0,
      t = Me;
    try {
      var n = Bn;
      for (Me = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bn = null), (uc = !1);
    } catch (o) {
      throw (Bn !== null && (Bn = Bn.slice(e + 1)), Q2(Uf, Hr), o);
    } finally {
      (Me = t), (rd = !1);
    }
  }
  return null;
}
var Bo = [],
  Fo = 0,
  Rs = null,
  Ts = 0,
  on = [],
  an = 0,
  lo = null,
  Fn = 1,
  Wn = "";
function Qr(e, t) {
  (Bo[Fo++] = Ts), (Bo[Fo++] = Rs), (Rs = e), (Ts = t);
}
function kg(e, t, n) {
  (on[an++] = Fn), (on[an++] = Wn), (on[an++] = lo), (lo = e);
  var r = Fn;
  e = Wn;
  var o = 32 - gn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - gn(t) + o;
  if (30 < i) {
    var a = o - (o % 5);
    (i = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (o -= a),
      (Fn = (1 << (32 - gn(t) + o)) | (n << o) | r),
      (Wn = i + e);
  } else (Fn = (1 << i) | (n << o) | r), (Wn = e);
}
function Qf(e) {
  e.return !== null && (Qr(e, 1), kg(e, 1, 0));
}
function Jf(e) {
  for (; e === Rs; )
    (Rs = Bo[--Fo]), (Bo[Fo] = null), (Ts = Bo[--Fo]), (Bo[Fo] = null);
  for (; e === lo; )
    (lo = on[--an]),
      (on[an] = null),
      (Wn = on[--an]),
      (on[an] = null),
      (Fn = on[--an]),
      (on[an] = null);
}
var qt = null,
  Kt = null,
  Ue = !1,
  mn = null;
function Lg(e, t) {
  var n = ln(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function sh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qt = e), (Kt = br(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qt = e), (Kt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = lo !== null ? { id: Fn, overflow: Wn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ln(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qt = e),
            (Kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Kd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qd(e) {
  if (Ue) {
    var t = Kt;
    if (t) {
      var n = t;
      if (!sh(e, t)) {
        if (Kd(e)) throw Error($(418));
        t = br(n.nextSibling);
        var r = qt;
        t && sh(e, t)
          ? Lg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ue = !1), (qt = e));
      }
    } else {
      if (Kd(e)) throw Error($(418));
      (e.flags = (e.flags & -4097) | 2), (Ue = !1), (qt = e);
    }
  }
}
function ch(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qt = e;
}
function Gl(e) {
  if (e !== qt) return !1;
  if (!Ue) return ch(e), (Ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Fd(e.type, e.memoizedProps))),
    t && (t = Kt))
  ) {
    if (Kd(e)) throw (Ng(), Error($(418)));
    for (; t; ) Lg(e, t), (t = br(t.nextSibling));
  }
  if ((ch(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error($(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Kt = br(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Kt = null;
    }
  } else Kt = qt ? br(e.stateNode.nextSibling) : null;
  return !0;
}
function Ng() {
  for (var e = Kt; e; ) e = br(e.nextSibling);
}
function ai() {
  (Kt = qt = null), (Ue = !1);
}
function e0(e) {
  mn === null ? (mn = [e]) : mn.push(e);
}
var Fw = er.ReactCurrentBatchConfig;
function Qi(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error($(309));
        var r = n.stateNode;
      }
      if (!r) throw Error($(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (a) {
            var l = o.refs;
            a === null ? delete l[i] : (l[i] = a);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error($(284));
    if (!n._owner) throw Error($(290, e));
  }
  return e;
}
function Yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      $(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function uh(e) {
  var t = e._init;
  return t(e._payload);
}
function Pg(e) {
  function t(m, v) {
    if (e) {
      var b = m.deletions;
      b === null ? ((m.deletions = [v]), (m.flags |= 16)) : b.push(v);
    }
  }
  function n(m, v) {
    if (!e) return null;
    for (; v !== null; ) t(m, v), (v = v.sibling);
    return null;
  }
  function r(m, v) {
    for (m = new Map(); v !== null; )
      v.key !== null ? m.set(v.key, v) : m.set(v.index, v), (v = v.sibling);
    return m;
  }
  function o(m, v) {
    return (m = Mr(m, v)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, v, b) {
    return (
      (m.index = b),
      e
        ? ((b = m.alternate),
          b !== null
            ? ((b = b.index), b < v ? ((m.flags |= 2), v) : b)
            : ((m.flags |= 2), v))
        : ((m.flags |= 1048576), v)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, v, b, j) {
    return v === null || v.tag !== 6
      ? ((v = ud(b, m.mode, j)), (v.return = m), v)
      : ((v = o(v, b)), (v.return = m), v);
  }
  function c(m, v, b, j) {
    var N = b.type;
    return N === _o
      ? h(m, v, b.props.children, j, b.key)
      : v !== null &&
        (v.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === pr &&
            uh(N) === v.type))
      ? ((j = o(v, b.props)), (j.ref = Qi(m, v, b)), (j.return = m), j)
      : ((j = vs(b.type, b.key, b.props, null, m.mode, j)),
        (j.ref = Qi(m, v, b)),
        (j.return = m),
        j);
  }
  function u(m, v, b, j) {
    return v === null ||
      v.tag !== 4 ||
      v.stateNode.containerInfo !== b.containerInfo ||
      v.stateNode.implementation !== b.implementation
      ? ((v = dd(b, m.mode, j)), (v.return = m), v)
      : ((v = o(v, b.children || [])), (v.return = m), v);
  }
  function h(m, v, b, j, N) {
    return v === null || v.tag !== 7
      ? ((v = io(b, m.mode, j, N)), (v.return = m), v)
      : ((v = o(v, b)), (v.return = m), v);
  }
  function f(m, v, b) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (v = ud("" + v, m.mode, b)), (v.return = m), v;
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Hl:
          return (
            (b = vs(v.type, v.key, v.props, null, m.mode, b)),
            (b.ref = Qi(m, null, v)),
            (b.return = m),
            b
          );
        case Ho:
          return (v = dd(v, m.mode, b)), (v.return = m), v;
        case pr:
          var j = v._init;
          return f(m, j(v._payload), b);
      }
      if (oa(v) || Gi(v))
        return (v = io(v, m.mode, b, null)), (v.return = m), v;
      Yl(m, v);
    }
    return null;
  }
  function g(m, v, b, j) {
    var N = v !== null ? v.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return N !== null ? null : l(m, v, "" + b, j);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case Hl:
          return b.key === N ? c(m, v, b, j) : null;
        case Ho:
          return b.key === N ? u(m, v, b, j) : null;
        case pr:
          return (N = b._init), g(m, v, N(b._payload), j);
      }
      if (oa(b) || Gi(b)) return N !== null ? null : h(m, v, b, j, null);
      Yl(m, b);
    }
    return null;
  }
  function C(m, v, b, j, N) {
    if ((typeof j == "string" && j !== "") || typeof j == "number")
      return (m = m.get(b) || null), l(v, m, "" + j, N);
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case Hl:
          return (m = m.get(j.key === null ? b : j.key) || null), c(v, m, j, N);
        case Ho:
          return (m = m.get(j.key === null ? b : j.key) || null), u(v, m, j, N);
        case pr:
          var O = j._init;
          return C(m, v, b, O(j._payload), N);
      }
      if (oa(j) || Gi(j)) return (m = m.get(b) || null), h(v, m, j, N, null);
      Yl(v, j);
    }
    return null;
  }
  function E(m, v, b, j) {
    for (
      var N = null, O = null, P = v, R = (v = 0), F = null;
      P !== null && R < b.length;
      R++
    ) {
      P.index > R ? ((F = P), (P = null)) : (F = P.sibling);
      var H = g(m, P, b[R], j);
      if (H === null) {
        P === null && (P = F);
        break;
      }
      e && P && H.alternate === null && t(m, P),
        (v = i(H, v, R)),
        O === null ? (N = H) : (O.sibling = H),
        (O = H),
        (P = F);
    }
    if (R === b.length) return n(m, P), Ue && Qr(m, R), N;
    if (P === null) {
      for (; R < b.length; R++)
        (P = f(m, b[R], j)),
          P !== null &&
            ((v = i(P, v, R)), O === null ? (N = P) : (O.sibling = P), (O = P));
      return Ue && Qr(m, R), N;
    }
    for (P = r(m, P); R < b.length; R++)
      (F = C(P, m, R, b[R], j)),
        F !== null &&
          (e && F.alternate !== null && P.delete(F.key === null ? R : F.key),
          (v = i(F, v, R)),
          O === null ? (N = F) : (O.sibling = F),
          (O = F));
    return (
      e &&
        P.forEach(function (K) {
          return t(m, K);
        }),
      Ue && Qr(m, R),
      N
    );
  }
  function y(m, v, b, j) {
    var N = Gi(b);
    if (typeof N != "function") throw Error($(150));
    if (((b = N.call(b)), b == null)) throw Error($(151));
    for (
      var O = (N = null), P = v, R = (v = 0), F = null, H = b.next();
      P !== null && !H.done;
      R++, H = b.next()
    ) {
      P.index > R ? ((F = P), (P = null)) : (F = P.sibling);
      var K = g(m, P, H.value, j);
      if (K === null) {
        P === null && (P = F);
        break;
      }
      e && P && K.alternate === null && t(m, P),
        (v = i(K, v, R)),
        O === null ? (N = K) : (O.sibling = K),
        (O = K),
        (P = F);
    }
    if (H.done) return n(m, P), Ue && Qr(m, R), N;
    if (P === null) {
      for (; !H.done; R++, H = b.next())
        (H = f(m, H.value, j)),
          H !== null &&
            ((v = i(H, v, R)), O === null ? (N = H) : (O.sibling = H), (O = H));
      return Ue && Qr(m, R), N;
    }
    for (P = r(m, P); !H.done; R++, H = b.next())
      (H = C(P, m, R, H.value, j)),
        H !== null &&
          (e && H.alternate !== null && P.delete(H.key === null ? R : H.key),
          (v = i(H, v, R)),
          O === null ? (N = H) : (O.sibling = H),
          (O = H));
    return (
      e &&
        P.forEach(function (G) {
          return t(m, G);
        }),
      Ue && Qr(m, R),
      N
    );
  }
  function M(m, v, b, j) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === _o &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case Hl:
          e: {
            for (var N = b.key, O = v; O !== null; ) {
              if (O.key === N) {
                if (((N = b.type), N === _o)) {
                  if (O.tag === 7) {
                    n(m, O.sibling),
                      (v = o(O, b.props.children)),
                      (v.return = m),
                      (m = v);
                    break e;
                  }
                } else if (
                  O.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === pr &&
                    uh(N) === O.type)
                ) {
                  n(m, O.sibling),
                    (v = o(O, b.props)),
                    (v.ref = Qi(m, O, b)),
                    (v.return = m),
                    (m = v);
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            b.type === _o
              ? ((v = io(b.props.children, m.mode, j, b.key)),
                (v.return = m),
                (m = v))
              : ((j = vs(b.type, b.key, b.props, null, m.mode, j)),
                (j.ref = Qi(m, v, b)),
                (j.return = m),
                (m = j));
          }
          return a(m);
        case Ho:
          e: {
            for (O = b.key; v !== null; ) {
              if (v.key === O)
                if (
                  v.tag === 4 &&
                  v.stateNode.containerInfo === b.containerInfo &&
                  v.stateNode.implementation === b.implementation
                ) {
                  n(m, v.sibling),
                    (v = o(v, b.children || [])),
                    (v.return = m),
                    (m = v);
                  break e;
                } else {
                  n(m, v);
                  break;
                }
              else t(m, v);
              v = v.sibling;
            }
            (v = dd(b, m.mode, j)), (v.return = m), (m = v);
          }
          return a(m);
        case pr:
          return (O = b._init), M(m, v, O(b._payload), j);
      }
      if (oa(b)) return E(m, v, b, j);
      if (Gi(b)) return y(m, v, b, j);
      Yl(m, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        v !== null && v.tag === 6
          ? (n(m, v.sibling), (v = o(v, b)), (v.return = m), (m = v))
          : (n(m, v), (v = ud(b, m.mode, j)), (v.return = m), (m = v)),
        a(m))
      : n(m, v);
  }
  return M;
}
var li = Pg(!0),
  Og = Pg(!1),
  Is = Dr(null),
  Ds = null,
  Wo = null,
  t0 = null;
function n0() {
  t0 = Wo = Ds = null;
}
function r0(e) {
  var t = Is.current;
  ze(Is), (e._currentValue = t);
}
function Xd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Jo(e, t) {
  (Ds = e),
    (t0 = Wo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Vt = !0), (e.firstContext = null));
}
function cn(e) {
  var t = e._currentValue;
  if (t0 !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Wo === null)) {
      if (Ds === null) throw Error($(308));
      (Wo = e), (Ds.dependencies = { lanes: 0, firstContext: e });
    } else Wo = Wo.next = e;
  return t;
}
var to = null;
function o0(e) {
  to === null ? (to = [e]) : to.push(e);
}
function Rg(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), o0(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    qn(e, r)
  );
}
function qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var hr = !1;
function i0(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Tg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Gn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Cr(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Ce & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      qn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), o0(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    qn(e, n)
  );
}
function ds(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
function dh(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = a) : (i = i.next = a), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Hs(e, t, n, r) {
  var o = e.updateQueue;
  hr = !1;
  var i = o.firstBaseUpdate,
    a = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      u = c.next;
    (c.next = null), a === null ? (i = u) : (a.next = u), (a = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (l = h.lastBaseUpdate),
      l !== a &&
        (l === null ? (h.firstBaseUpdate = u) : (l.next = u),
        (h.lastBaseUpdate = c)));
  }
  if (i !== null) {
    var f = o.baseState;
    (a = 0), (h = u = c = null), (l = i);
    do {
      var g = l.lane,
        C = l.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: C,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var E = e,
            y = l;
          switch (((g = t), (C = n), y.tag)) {
            case 1:
              if (((E = y.payload), typeof E == "function")) {
                f = E.call(C, f, g);
                break e;
              }
              f = E;
              break e;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = y.payload),
                (g = typeof E == "function" ? E.call(C, f, g) : E),
                g == null)
              )
                break e;
              f = Ke({}, f, g);
              break e;
            case 2:
              hr = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        (C = {
          eventTime: C,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          h === null ? ((u = h = C), (c = f)) : (h = h.next = C),
          (a |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = f),
      (o.baseState = c),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = h),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (a |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (co |= a), (e.lanes = a), (e.memoizedState = f);
  }
}
function fh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error($(191, o));
        o.call(r);
      }
    }
}
var Wa = {},
  Pn = Dr(Wa),
  La = Dr(Wa),
  Na = Dr(Wa);
function no(e) {
  if (e === Wa) throw Error($(174));
  return e;
}
function a0(e, t) {
  switch ((Ie(Na, t), Ie(La, e), Ie(Pn, Wa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Pd(t, e));
  }
  ze(Pn), Ie(Pn, t);
}
function si() {
  ze(Pn), ze(La), ze(Na);
}
function Ig(e) {
  no(Na.current);
  var t = no(Pn.current),
    n = Pd(t, e.type);
  t !== n && (Ie(La, e), Ie(Pn, n));
}
function l0(e) {
  La.current === e && (ze(Pn), ze(La));
}
var We = Dr(0);
function _s(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var od = [];
function s0() {
  for (var e = 0; e < od.length; e++)
    od[e]._workInProgressVersionPrimary = null;
  od.length = 0;
}
var fs = er.ReactCurrentDispatcher,
  id = er.ReactCurrentBatchConfig,
  so = 0,
  Ye = null,
  ct = null,
  gt = null,
  Vs = !1,
  fa = !1,
  Pa = 0,
  Ww = 0;
function jt() {
  throw Error($(321));
}
function c0(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!wn(e[n], t[n])) return !1;
  return !0;
}
function u0(e, t, n, r, o, i) {
  if (
    ((so = i),
    (Ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (fs.current = e === null || e.memoizedState === null ? qw : Xw),
    (e = n(r, o)),
    fa)
  ) {
    i = 0;
    do {
      if (((fa = !1), (Pa = 0), 25 <= i)) throw Error($(301));
      (i += 1),
        (gt = ct = null),
        (t.updateQueue = null),
        (fs.current = Qw),
        (e = n(r, o));
    } while (fa);
  }
  if (
    ((fs.current = zs),
    (t = ct !== null && ct.next !== null),
    (so = 0),
    (gt = ct = Ye = null),
    (Vs = !1),
    t)
  )
    throw Error($(300));
  return e;
}
function d0() {
  var e = Pa !== 0;
  return (Pa = 0), e;
}
function An() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e), gt;
}
function un() {
  if (ct === null) {
    var e = Ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ct.next;
  var t = gt === null ? Ye.memoizedState : gt.next;
  if (t !== null) (gt = t), (ct = e);
  else {
    if (e === null) throw Error($(310));
    (ct = e),
      (e = {
        memoizedState: ct.memoizedState,
        baseState: ct.baseState,
        baseQueue: ct.baseQueue,
        queue: ct.queue,
        next: null,
      }),
      gt === null ? (Ye.memoizedState = gt = e) : (gt = gt.next = e);
  }
  return gt;
}
function Oa(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ad(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = ct,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var a = o.next;
      (o.next = i.next), (i.next = a);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (a = null),
      c = null,
      u = i;
    do {
      var h = u.lane;
      if ((so & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        c === null ? ((l = c = f), (a = r)) : (c = c.next = f),
          (Ye.lanes |= h),
          (co |= h);
      }
      u = u.next;
    } while (u !== null && u !== i);
    c === null ? (a = r) : (c.next = l),
      wn(r, t.memoizedState) || (Vt = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Ye.lanes |= i), (co |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ld(e) {
  var t = un(),
    n = t.queue;
  if (n === null) throw Error($(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var a = (o = o.next);
    do (i = e(i, a.action)), (a = a.next);
    while (a !== o);
    wn(i, t.memoizedState) || (Vt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Dg() {}
function Hg(e, t) {
  var n = Ye,
    r = un(),
    o = t(),
    i = !wn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Vt = !0)),
    (r = r.queue),
    f0(zg.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (gt !== null && gt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ra(9, Vg.bind(null, n, r, o, t), void 0, null),
      vt === null)
    )
      throw Error($(349));
    so & 30 || _g(n, t, o);
  }
  return o;
}
function _g(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Vg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Zg(t) && $g(e);
}
function zg(e, t, n) {
  return n(function () {
    Zg(t) && $g(e);
  });
}
function Zg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !wn(e, n);
  } catch {
    return !0;
  }
}
function $g(e) {
  var t = qn(e, 1);
  t !== null && vn(t, e, 1, -1);
}
function ph(e) {
  var t = An();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Oa,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Kw.bind(null, Ye, e)),
    [t.memoizedState, e]
  );
}
function Ra(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ug() {
  return un().memoizedState;
}
function ps(e, t, n, r) {
  var o = An();
  (Ye.flags |= e),
    (o.memoizedState = Ra(1 | t, n, void 0, r === void 0 ? null : r));
}
function dc(e, t, n, r) {
  var o = un();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ct !== null) {
    var a = ct.memoizedState;
    if (((i = a.destroy), r !== null && c0(r, a.deps))) {
      o.memoizedState = Ra(t, n, i, r);
      return;
    }
  }
  (Ye.flags |= e), (o.memoizedState = Ra(1 | t, n, i, r));
}
function hh(e, t) {
  return ps(8390656, 8, e, t);
}
function f0(e, t) {
  return dc(2048, 8, e, t);
}
function Bg(e, t) {
  return dc(4, 2, e, t);
}
function Fg(e, t) {
  return dc(4, 4, e, t);
}
function Wg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), dc(4, 4, Wg.bind(null, t, e), n)
  );
}
function p0() {}
function Yg(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && c0(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Kg(e, t) {
  var n = un();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && c0(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qg(e, t, n) {
  return so & 21
    ? (wn(n, t) || ((n = tg()), (Ye.lanes |= n), (co |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Vt = !0)), (e.memoizedState = n));
}
function Gw(e, t) {
  var n = Me;
  (Me = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = id.transition;
  id.transition = {};
  try {
    e(!1), t();
  } finally {
    (Me = n), (id.transition = r);
  }
}
function Xg() {
  return un().memoizedState;
}
function Yw(e, t, n) {
  var r = Ar(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qg(e))
  )
    Jg(t, n);
  else if (((n = Rg(e, t, n, r)), n !== null)) {
    var o = Ot();
    vn(n, e, r, o), ev(n, t, r);
  }
}
function Kw(e, t, n) {
  var r = Ar(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qg(e)) Jg(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var a = t.lastRenderedState,
          l = i(a, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), wn(l, a))) {
          var c = t.interleaved;
          c === null
            ? ((o.next = o), o0(t))
            : ((o.next = c.next), (c.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rg(e, t, o, r)),
      n !== null && ((o = Ot()), vn(n, e, r, o), ev(n, t, r));
  }
}
function Qg(e) {
  var t = e.alternate;
  return e === Ye || (t !== null && t === Ye);
}
function Jg(e, t) {
  fa = Vs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ev(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bf(e, n);
  }
}
var zs = {
    readContext: cn,
    useCallback: jt,
    useContext: jt,
    useEffect: jt,
    useImperativeHandle: jt,
    useInsertionEffect: jt,
    useLayoutEffect: jt,
    useMemo: jt,
    useReducer: jt,
    useRef: jt,
    useState: jt,
    useDebugValue: jt,
    useDeferredValue: jt,
    useTransition: jt,
    useMutableSource: jt,
    useSyncExternalStore: jt,
    useId: jt,
    unstable_isNewReconciler: !1,
  },
  qw = {
    readContext: cn,
    useCallback: function (e, t) {
      return (An().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: cn,
    useEffect: hh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ps(4194308, 4, Wg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ps(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = An();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = An();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Yw.bind(null, Ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = An();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ph,
    useDebugValue: p0,
    useDeferredValue: function (e) {
      return (An().memoizedState = e);
    },
    useTransition: function () {
      var e = ph(!1),
        t = e[0];
      return (e = Gw.bind(null, e[1])), (An().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ye,
        o = An();
      if (Ue) {
        if (n === void 0) throw Error($(407));
        n = n();
      } else {
        if (((n = t()), vt === null)) throw Error($(349));
        so & 30 || _g(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        hh(zg.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ra(9, Vg.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = An(),
        t = vt.identifierPrefix;
      if (Ue) {
        var n = Wn,
          r = Fn;
        (n = (r & ~(1 << (32 - gn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Pa++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Ww++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Xw = {
    readContext: cn,
    useCallback: Yg,
    useContext: cn,
    useEffect: f0,
    useImperativeHandle: Gg,
    useInsertionEffect: Bg,
    useLayoutEffect: Fg,
    useMemo: Kg,
    useReducer: ad,
    useRef: Ug,
    useState: function () {
      return ad(Oa);
    },
    useDebugValue: p0,
    useDeferredValue: function (e) {
      var t = un();
      return qg(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = ad(Oa)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: Dg,
    useSyncExternalStore: Hg,
    useId: Xg,
    unstable_isNewReconciler: !1,
  },
  Qw = {
    readContext: cn,
    useCallback: Yg,
    useContext: cn,
    useEffect: f0,
    useImperativeHandle: Gg,
    useInsertionEffect: Bg,
    useLayoutEffect: Fg,
    useMemo: Kg,
    useReducer: ld,
    useRef: Ug,
    useState: function () {
      return ld(Oa);
    },
    useDebugValue: p0,
    useDeferredValue: function (e) {
      var t = un();
      return ct === null ? (t.memoizedState = e) : qg(t, ct.memoizedState, e);
    },
    useTransition: function () {
      var e = ld(Oa)[0],
        t = un().memoizedState;
      return [e, t];
    },
    useMutableSource: Dg,
    useSyncExternalStore: Hg,
    useId: Xg,
    unstable_isNewReconciler: !1,
  };
function pn(e, t) {
  if (e && e.defaultProps) {
    (t = Ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Qd(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vo(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      o = Ar(e),
      i = Gn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Cr(e, i, o)),
      t !== null && (vn(t, e, o, r), ds(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ot(),
      o = Ar(e),
      i = Gn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Cr(e, i, o)),
      t !== null && (vn(t, e, o, r), ds(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ot(),
      r = Ar(e),
      o = Gn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Cr(e, o, r)),
      t !== null && (vn(t, e, r, n), ds(t, e, r));
  },
};
function mh(e, t, n, r, o, i, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ja(n, r) || !ja(o, i)
      : !0
  );
}
function tv(e, t, n) {
  var r = !1,
    o = Nr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = cn(i))
      : ((o = $t(t) ? ao : kt.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ii(e, o) : Nr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function gh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fc.enqueueReplaceState(t, t.state, null);
}
function Jd(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), i0(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = cn(i))
    : ((i = $t(t) ? ao : kt.current), (o.context = ii(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Qd(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && fc.enqueueReplaceState(o, o.state, null),
      Hs(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function ci(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ay(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function sd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ef(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Jw = typeof WeakMap == "function" ? WeakMap : Map;
function nv(e, t, n) {
  (n = Gn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $s || (($s = !0), (df = r)), ef(e, t);
    }),
    n
  );
}
function rv(e, t, n) {
  (n = Gn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ef(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        ef(e, t),
          typeof r != "function" &&
            (jr === null ? (jr = new Set([this])) : jr.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function vh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Jw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = p3.bind(null, e, t, n)), t.then(e, e));
}
function yh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function wh(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Gn(-1, 1)), (t.tag = 2), Cr(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var e3 = er.ReactCurrentOwner,
  Vt = !1;
function Pt(e, t, n, r) {
  t.child = e === null ? Og(t, null, n, r) : li(t, e.child, n, r);
}
function xh(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Jo(t, o),
    (r = u0(e, t, n, r, i, o)),
    (n = d0()),
    e !== null && !Vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xn(e, t, o))
      : (Ue && n && Qf(t), (t.flags |= 1), Pt(e, t, r, o), t.child)
  );
}
function Sh(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !S0(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ov(e, t, i, r, o))
      : ((e = vs(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var a = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ja), n(a, r) && e.ref === t.ref)
    )
      return Xn(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Mr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ov(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ja(i, r) && e.ref === t.ref)
      if (((Vt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Vt = !0);
      else return (t.lanes = e.lanes), Xn(e, t, o);
  }
  return tf(e, t, n, r, o);
}
function iv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ie(Yo, Gt),
        (Gt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ie(Yo, Gt),
          (Gt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Ie(Yo, Gt),
        (Gt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Ie(Yo, Gt),
      (Gt |= r);
  return Pt(e, t, o, n), t.child;
}
function av(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function tf(e, t, n, r, o) {
  var i = $t(n) ? ao : kt.current;
  return (
    (i = ii(t, i)),
    Jo(t, o),
    (n = u0(e, t, n, r, i, o)),
    (r = d0()),
    e !== null && !Vt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Xn(e, t, o))
      : (Ue && r && Qf(t), (t.flags |= 1), Pt(e, t, n, o), t.child)
  );
}
function Eh(e, t, n, r, o) {
  if ($t(n)) {
    var i = !0;
    Os(t);
  } else i = !1;
  if ((Jo(t, o), t.stateNode === null))
    hs(e, t), tv(t, n, r), Jd(t, n, r, o), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      l = t.memoizedProps;
    a.props = l;
    var c = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = cn(u))
      : ((u = $t(n) ? ao : kt.current), (u = ii(t, u)));
    var h = n.getDerivedStateFromProps,
      f =
        typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== r || c !== u) && gh(t, a, r, u)),
      (hr = !1);
    var g = t.memoizedState;
    (a.state = g),
      Hs(t, r, a, o),
      (c = t.memoizedState),
      l !== r || g !== c || Zt.current || hr
        ? (typeof h == "function" && (Qd(t, n, h, r), (c = t.memoizedState)),
          (l = hr || mh(t, n, l, r, g, c, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = u),
          (r = l))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Tg(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : pn(t.type, l)),
      (a.props = u),
      (f = t.pendingProps),
      (g = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = cn(c))
        : ((c = $t(n) ? ao : kt.current), (c = ii(t, c)));
    var C = n.getDerivedStateFromProps;
    (h =
      typeof C == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((l !== f || g !== c) && gh(t, a, r, c)),
      (hr = !1),
      (g = t.memoizedState),
      (a.state = g),
      Hs(t, r, a, o);
    var E = t.memoizedState;
    l !== f || g !== E || Zt.current || hr
      ? (typeof C == "function" && (Qd(t, n, C, r), (E = t.memoizedState)),
        (u = hr || mh(t, n, u, r, g, E, c) || !1)
          ? (h ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, E, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, E, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = E)),
        (a.props = r),
        (a.state = E),
        (a.context = c),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return nf(e, t, n, r, i, o);
}
function nf(e, t, n, r, o, i) {
  av(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return o && lh(t, n, !1), Xn(e, t, i);
  (r = t.stateNode), (e3.current = t);
  var l =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = li(t, e.child, null, i)), (t.child = li(t, null, l, i)))
      : Pt(e, t, l, i),
    (t.memoizedState = r.state),
    o && lh(t, n, !0),
    t.child
  );
}
function lv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ah(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ah(e, t.context, !1),
    a0(e, t.containerInfo);
}
function bh(e, t, n, r, o) {
  return ai(), e0(o), (t.flags |= 256), Pt(e, t, n, r), t.child;
}
var rf = { dehydrated: null, treeContext: null, retryLane: 0 };
function of(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sv(e, t, n) {
  var r = t.pendingProps,
    o = We.current,
    i = !1,
    a = (t.flags & 128) !== 0,
    l;
  if (
    ((l = a) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Ie(We, o & 1),
    e === null)
  )
    return (
      qd(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = a))
                : (i = mc(a, r, 0, null)),
              (e = io(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = of(n)),
              (t.memoizedState = rf),
              e)
            : h0(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return t3(e, t, a, r, l, o, n);
  if (i) {
    (i = r.fallback), (a = t.mode), (o = e.child), (l = o.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = Mr(o, c)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Mr(l, i)) : ((i = io(i, a, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? of(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (i.memoizedState = a),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = rf),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Mr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function h0(e, t) {
  return (
    (t = mc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Kl(e, t, n, r) {
  return (
    r !== null && e0(r),
    li(t, e.child, null, n),
    (e = h0(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function t3(e, t, n, r, o, i, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = sd(Error($(422)))), Kl(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = mc({ mode: "visible", children: r.children }, o, 0, null)),
        (i = io(i, o, a, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && li(t, e.child, null, a),
        (t.child.memoizedState = of(a)),
        (t.memoizedState = rf),
        i);
  if (!(t.mode & 1)) return Kl(e, t, a, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error($(419))), (r = sd(i, r, void 0)), Kl(e, t, a, r);
  }
  if (((l = (a & e.childLanes) !== 0), Vt || l)) {
    if (((r = vt), r !== null)) {
      switch (a & -a) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | a) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), qn(e, o), vn(r, e, o, -1));
    }
    return x0(), (r = sd(Error($(421)))), Kl(e, t, a, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = h3.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Kt = br(o.nextSibling)),
      (qt = t),
      (Ue = !0),
      (mn = null),
      e !== null &&
        ((on[an++] = Fn),
        (on[an++] = Wn),
        (on[an++] = lo),
        (Fn = e.id),
        (Wn = e.overflow),
        (lo = t)),
      (t = h0(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ch(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Xd(e.return, t, n);
}
function cd(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function cv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Pt(e, t, r.children, n), (r = We.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ch(e, n, t);
        else if (e.tag === 19) Ch(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Ie(We, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && _s(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          cd(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && _s(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cd(t, !0, n, null, i);
        break;
      case "together":
        cd(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function hs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (co |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error($(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Mr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Mr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function n3(e, t, n) {
  switch (t.tag) {
    case 3:
      lv(t), ai();
      break;
    case 5:
      Ig(t);
      break;
    case 1:
      $t(t.type) && Os(t);
      break;
    case 4:
      a0(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Ie(Is, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ie(We, We.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sv(e, t, n)
          : (Ie(We, We.current & 1),
            (e = Xn(e, t, n)),
            e !== null ? e.sibling : null);
      Ie(We, We.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return cv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Ie(We, We.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), iv(e, t, n);
  }
  return Xn(e, t, n);
}
var uv, af, dv, fv;
uv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
af = function () {};
dv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), no(Pn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Md(e, o)), (r = Md(e, r)), (i = []);
        break;
      case "select":
        (o = Ke({}, o, { value: void 0 })),
          (r = Ke({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Nd(e, o)), (r = Nd(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ns);
    }
    Od(n, r);
    var a;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (a in l) l.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ya.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var c = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && c !== l && (c != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (a in l)
              !l.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                l[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (i || (i = []), i.push(u, n)), (n = c);
        else
          u === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (i = i || []).push(u, c))
            : u === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (i = i || []).push(u, "" + c)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ya.hasOwnProperty(u)
                ? (c != null && u === "onScroll" && Ve("scroll", e),
                  i || l === c || (i = []))
                : (i = i || []).push(u, c));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
fv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ji(e, t) {
  if (!Ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function At(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function r3(e, t, n) {
  var r = t.pendingProps;
  switch ((Jf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return At(t), null;
    case 1:
      return $t(t.type) && Ps(), At(t), null;
    case 3:
      return (
        (r = t.stateNode),
        si(),
        ze(Zt),
        ze(kt),
        s0(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), mn !== null && (hf(mn), (mn = null)))),
        af(e, t),
        At(t),
        null
      );
    case 5:
      l0(t);
      var o = no(Na.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error($(166));
          return At(t), null;
        }
        if (((e = no(Pn.current)), Gl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Mn] = t), (r[ka] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ve("cancel", r), Ve("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ve("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < aa.length; o++) Ve(aa[o], r);
              break;
            case "source":
              Ve("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ve("error", r), Ve("load", r);
              break;
            case "details":
              Ve("toggle", r);
              break;
            case "input":
              Rp(r, i), Ve("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                Ve("invalid", r);
              break;
            case "textarea":
              Ip(r, i), Ve("invalid", r);
          }
          Od(n, i), (o = null);
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              a === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      Wl(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ya.hasOwnProperty(a) &&
                  l != null &&
                  a === "onScroll" &&
                  Ve("scroll", r);
            }
          switch (n) {
            case "input":
              _l(r), Tp(r, i, !0);
              break;
            case "textarea":
              _l(r), Dp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ns);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = z2(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Mn] = t),
            (e[ka] = r),
            uv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = Rd(n, r)), n)) {
              case "dialog":
                Ve("cancel", e), Ve("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ve("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < aa.length; o++) Ve(aa[o], e);
                o = r;
                break;
              case "source":
                Ve("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                Ve("error", e), Ve("load", e), (o = r);
                break;
              case "details":
                Ve("toggle", e), (o = r);
                break;
              case "input":
                Rp(e, r), (o = Md(e, r)), Ve("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Ke({}, r, { value: void 0 })),
                  Ve("invalid", e);
                break;
              case "textarea":
                Ip(e, r), (o = Nd(e, r)), Ve("invalid", e);
                break;
              default:
                o = r;
            }
            Od(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var c = l[i];
                i === "style"
                  ? U2(e, c)
                  : i === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && Z2(e, c))
                  : i === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && wa(e, c)
                    : typeof c == "number" && wa(e, "" + c)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ya.hasOwnProperty(i)
                      ? c != null && i === "onScroll" && Ve("scroll", e)
                      : c != null && _f(e, i, c, a));
              }
            switch (n) {
              case "input":
                _l(e), Tp(e, r, !1);
                break;
              case "textarea":
                _l(e), Dp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Lr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Ko(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Ko(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Ns);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return At(t), null;
    case 6:
      if (e && t.stateNode != null) fv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error($(166));
        if (((n = no(Na.current)), no(Pn.current), Gl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Mn] = t),
            (i = r.nodeValue !== n) && ((e = qt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Mn] = t),
            (t.stateNode = r);
      }
      return At(t), null;
    case 13:
      if (
        (ze(We),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ue && Kt !== null && t.mode & 1 && !(t.flags & 128))
          Ng(), ai(), (t.flags |= 98560), (i = !1);
        else if (((i = Gl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error($(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error($(317));
            i[Mn] = t;
          } else
            ai(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          At(t), (i = !1);
        } else mn !== null && (hf(mn), (mn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || We.current & 1 ? ut === 0 && (ut = 3) : x0())),
          t.updateQueue !== null && (t.flags |= 4),
          At(t),
          null);
    case 4:
      return (
        si(), af(e, t), e === null && Aa(t.stateNode.containerInfo), At(t), null
      );
    case 10:
      return r0(t.type._context), At(t), null;
    case 17:
      return $t(t.type) && Ps(), At(t), null;
    case 19:
      if ((ze(We), (i = t.memoizedState), i === null)) return At(t), null;
      if (((r = (t.flags & 128) !== 0), (a = i.rendering), a === null))
        if (r) Ji(i, !1);
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = _s(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Ji(i, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (a = i.alternate),
                    a === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = a.childLanes),
                        (i.lanes = a.lanes),
                        (i.child = a.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = a.memoizedProps),
                        (i.memoizedState = a.memoizedState),
                        (i.updateQueue = a.updateQueue),
                        (i.type = a.type),
                        (e = a.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ie(We, (We.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            tt() > ui &&
            ((t.flags |= 128), (r = !0), Ji(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _s(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ji(i, !0),
              i.tail === null && i.tailMode === "hidden" && !a.alternate && !Ue)
            )
              return At(t), null;
          } else
            2 * tt() - i.renderingStartTime > ui &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ji(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = i.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (i.last = a));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = tt()),
          (t.sibling = null),
          (n = We.current),
          Ie(We, r ? (n & 1) | 2 : n & 1),
          t)
        : (At(t), null);
    case 22:
    case 23:
      return (
        w0(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Gt & 1073741824 && (At(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : At(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error($(156, t.tag));
}
function o3(e, t) {
  switch ((Jf(t), t.tag)) {
    case 1:
      return (
        $t(t.type) && Ps(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        si(),
        ze(Zt),
        ze(kt),
        s0(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return l0(t), null;
    case 13:
      if (
        (ze(We), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error($(340));
        ai();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ze(We), null;
    case 4:
      return si(), null;
    case 10:
      return r0(t.type._context), null;
    case 22:
    case 23:
      return w0(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ql = !1,
  Mt = !1,
  i3 = typeof WeakSet == "function" ? WeakSet : Set,
  ee = null;
function Go(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Xe(e, t, r);
      }
    else n.current = null;
}
function lf(e, t, n) {
  try {
    n();
  } catch (r) {
    Xe(e, t, r);
  }
}
var jh = !1;
function a3(e, t) {
  if (((Ud = Ms), (e = vg()), Xf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            l = -1,
            c = -1,
            u = 0,
            h = 0,
            f = e,
            g = null;
          t: for (;;) {
            for (
              var C;
              f !== n || (o !== 0 && f.nodeType !== 3) || (l = a + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (c = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (C = f.firstChild) !== null;

            )
              (g = f), (f = C);
            for (;;) {
              if (f === e) break t;
              if (
                (g === n && ++u === o && (l = a),
                g === i && ++h === r && (c = a),
                (C = f.nextSibling) !== null)
              )
                break;
              (f = g), (g = f.parentNode);
            }
            f = C;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Bd = { focusedElem: e, selectionRange: n }, Ms = !1, ee = t;
    ee !== null;

  )
    if (((t = ee), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (ee = e);
    else
      for (; ee !== null; ) {
        t = ee;
        try {
          var E = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (E !== null) {
                  var y = E.memoizedProps,
                    M = E.memoizedState,
                    m = t.stateNode,
                    v = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : pn(t.type, y),
                      M
                    );
                  m.__reactInternalSnapshotBeforeUpdate = v;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error($(163));
            }
        } catch (j) {
          Xe(t, t.return, j);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (ee = e);
          break;
        }
        ee = t.return;
      }
  return (E = jh), (jh = !1), E;
}
function pa(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && lf(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function pc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function sf(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Mn], delete t[ka], delete t[Gd], delete t[$w], delete t[Uw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ah(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ns));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cf(e, t, n), e = e.sibling; e !== null; ) cf(e, t, n), (e = e.sibling);
}
function uf(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (uf(e, t, n), e = e.sibling; e !== null; ) uf(e, t, n), (e = e.sibling);
}
var wt = null,
  hn = !1;
function cr(e, t, n) {
  for (n = n.child; n !== null; ) mv(e, t, n), (n = n.sibling);
}
function mv(e, t, n) {
  if (Nn && typeof Nn.onCommitFiberUnmount == "function")
    try {
      Nn.onCommitFiberUnmount(ic, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Mt || Go(n, t);
    case 6:
      var r = wt,
        o = hn;
      (wt = null),
        cr(e, t, n),
        (wt = r),
        (hn = o),
        wt !== null &&
          (hn
            ? ((e = wt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : wt.removeChild(n.stateNode));
      break;
    case 18:
      wt !== null &&
        (hn
          ? ((e = wt),
            (n = n.stateNode),
            e.nodeType === 8
              ? nd(e.parentNode, n)
              : e.nodeType === 1 && nd(e, n),
            ba(e))
          : nd(wt, n.stateNode));
      break;
    case 4:
      (r = wt),
        (o = hn),
        (wt = n.stateNode.containerInfo),
        (hn = !0),
        cr(e, t, n),
        (wt = r),
        (hn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Mt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            a = i.destroy;
          (i = i.tag),
            a !== void 0 && (i & 2 || i & 4) && lf(n, t, a),
            (o = o.next);
        } while (o !== r);
      }
      cr(e, t, n);
      break;
    case 1:
      if (
        !Mt &&
        (Go(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Xe(n, t, l);
        }
      cr(e, t, n);
      break;
    case 21:
      cr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Mt = (r = Mt) || n.memoizedState !== null), cr(e, t, n), (Mt = r))
        : cr(e, t, n);
      break;
    default:
      cr(e, t, n);
  }
}
function Mh(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new i3()),
      t.forEach(function (r) {
        var o = m3.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function fn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          a = t,
          l = a;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (wt = l.stateNode), (hn = !1);
              break e;
            case 3:
              (wt = l.stateNode.containerInfo), (hn = !0);
              break e;
            case 4:
              (wt = l.stateNode.containerInfo), (hn = !0);
              break e;
          }
          l = l.return;
        }
        if (wt === null) throw Error($(160));
        mv(i, a, o), (wt = null), (hn = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (u) {
        Xe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gv(t, e), (t = t.sibling);
}
function gv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((fn(t, e), jn(e), r & 4)) {
        try {
          pa(3, e, e.return), pc(3, e);
        } catch (y) {
          Xe(e, e.return, y);
        }
        try {
          pa(5, e, e.return);
        } catch (y) {
          Xe(e, e.return, y);
        }
      }
      break;
    case 1:
      fn(t, e), jn(e), r & 512 && n !== null && Go(n, n.return);
      break;
    case 5:
      if (
        (fn(t, e),
        jn(e),
        r & 512 && n !== null && Go(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          wa(o, "");
        } catch (y) {
          Xe(e, e.return, y);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          a = n !== null ? n.memoizedProps : i,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && _2(o, i),
              Rd(l, a);
            var u = Rd(l, i);
            for (a = 0; a < c.length; a += 2) {
              var h = c[a],
                f = c[a + 1];
              h === "style"
                ? U2(o, f)
                : h === "dangerouslySetInnerHTML"
                ? Z2(o, f)
                : h === "children"
                ? wa(o, f)
                : _f(o, h, f, u);
            }
            switch (l) {
              case "input":
                kd(o, i);
                break;
              case "textarea":
                V2(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var C = i.value;
                C != null
                  ? Ko(o, !!i.multiple, C, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Ko(o, !!i.multiple, i.defaultValue, !0)
                      : Ko(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[ka] = i;
          } catch (y) {
            Xe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((fn(t, e), jn(e), r & 4)) {
        if (e.stateNode === null) throw Error($(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (y) {
          Xe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (fn(t, e), jn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ba(t.containerInfo);
        } catch (y) {
          Xe(e, e.return, y);
        }
      break;
    case 4:
      fn(t, e), jn(e);
      break;
    case 13:
      fn(t, e),
        jn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (v0 = tt())),
        r & 4 && Mh(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Mt = (u = Mt) || h), fn(t, e), (Mt = u)) : fn(t, e),
        jn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (ee = e, h = e.child; h !== null; ) {
            for (f = ee = h; ee !== null; ) {
              switch (((g = ee), (C = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pa(4, g, g.return);
                  break;
                case 1:
                  Go(g, g.return);
                  var E = g.stateNode;
                  if (typeof E.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (E.props = t.memoizedProps),
                        (E.state = t.memoizedState),
                        E.componentWillUnmount();
                    } catch (y) {
                      Xe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Go(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Lh(f);
                    continue;
                  }
              }
              C !== null ? ((C.return = g), (ee = C)) : Lh(f);
            }
            h = h.sibling;
          }
        e: for (h = null, f = e; ; ) {
          if (f.tag === 5) {
            if (h === null) {
              h = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (c = f.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (l.style.display = $2("display", a)));
              } catch (y) {
                Xe(e, e.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (h === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (y) {
                Xe(e, e.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            h === f && (h = null), (f = f.return);
          }
          h === f && (h = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      fn(t, e), jn(e), r & 4 && Mh(e);
      break;
    case 21:
      break;
    default:
      fn(t, e), jn(e);
  }
}
function jn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error($(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (wa(o, ""), (r.flags &= -33));
          var i = Ah(e);
          uf(e, i, o);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            l = Ah(e);
          cf(e, l, a);
          break;
        default:
          throw Error($(161));
      }
    } catch (c) {
      Xe(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function l3(e, t, n) {
  (ee = e), vv(e);
}
function vv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; ee !== null; ) {
    var o = ee,
      i = o.child;
    if (o.tag === 22 && r) {
      var a = o.memoizedState !== null || ql;
      if (!a) {
        var l = o.alternate,
          c = (l !== null && l.memoizedState !== null) || Mt;
        l = ql;
        var u = Mt;
        if (((ql = a), (Mt = c) && !u))
          for (ee = o; ee !== null; )
            (a = ee),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? Nh(o)
                : c !== null
                ? ((c.return = a), (ee = c))
                : Nh(o);
        for (; i !== null; ) (ee = i), vv(i), (i = i.sibling);
        (ee = o), (ql = l), (Mt = u);
      }
      kh(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (ee = i)) : kh(e);
  }
}
function kh(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Mt || pc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Mt)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : pn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && fh(t, i, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                fh(t, a, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var f = h.dehydrated;
                    f !== null && ba(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error($(163));
          }
        Mt || (t.flags & 512 && sf(t));
      } catch (g) {
        Xe(t, t.return, g);
      }
    }
    if (t === e) {
      ee = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function Lh(e) {
  for (; ee !== null; ) {
    var t = ee;
    if (t === e) {
      ee = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (ee = n);
      break;
    }
    ee = t.return;
  }
}
function Nh(e) {
  for (; ee !== null; ) {
    var t = ee;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pc(4, t);
          } catch (c) {
            Xe(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              Xe(t, o, c);
            }
          }
          var i = t.return;
          try {
            sf(t);
          } catch (c) {
            Xe(t, i, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            sf(t);
          } catch (c) {
            Xe(t, a, c);
          }
      }
    } catch (c) {
      Xe(t, t.return, c);
    }
    if (t === e) {
      ee = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (ee = l);
      break;
    }
    ee = t.return;
  }
}
var s3 = Math.ceil,
  Zs = er.ReactCurrentDispatcher,
  m0 = er.ReactCurrentOwner,
  sn = er.ReactCurrentBatchConfig,
  Ce = 0,
  vt = null,
  ot = null,
  xt = 0,
  Gt = 0,
  Yo = Dr(0),
  ut = 0,
  Ta = null,
  co = 0,
  hc = 0,
  g0 = 0,
  ha = null,
  _t = null,
  v0 = 0,
  ui = 1 / 0,
  Un = null,
  $s = !1,
  df = null,
  jr = null,
  Xl = !1,
  yr = null,
  Us = 0,
  ma = 0,
  ff = null,
  ms = -1,
  gs = 0;
function Ot() {
  return Ce & 6 ? tt() : ms !== -1 ? ms : (ms = tt());
}
function Ar(e) {
  return e.mode & 1
    ? Ce & 2 && xt !== 0
      ? xt & -xt
      : Fw.transition !== null
      ? (gs === 0 && (gs = tg()), gs)
      : ((e = Me),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sg(e.type))),
        e)
    : 1;
}
function vn(e, t, n, r) {
  if (50 < ma) throw ((ma = 0), (ff = null), Error($(185)));
  Ua(e, n, r),
    (!(Ce & 2) || e !== vt) &&
      (e === vt && (!(Ce & 2) && (hc |= n), ut === 4 && gr(e, xt)),
      Ut(e, r),
      n === 1 && Ce === 0 && !(t.mode & 1) && ((ui = tt() + 500), uc && Hr()));
}
function Ut(e, t) {
  var n = e.callbackNode;
  Fy(e, t);
  var r = As(e, e === vt ? xt : 0);
  if (r === 0)
    n !== null && Vp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Vp(n), t === 1))
      e.tag === 0 ? Bw(Ph.bind(null, e)) : Mg(Ph.bind(null, e)),
        zw(function () {
          !(Ce & 6) && Hr();
        }),
        (n = null);
    else {
      switch (ng(r)) {
        case 1:
          n = Uf;
          break;
        case 4:
          n = J2;
          break;
        case 16:
          n = js;
          break;
        case 536870912:
          n = eg;
          break;
        default:
          n = js;
      }
      n = jv(n, yv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yv(e, t) {
  if (((ms = -1), (gs = 0), Ce & 6)) throw Error($(327));
  var n = e.callbackNode;
  if (ei() && e.callbackNode !== n) return null;
  var r = As(e, e === vt ? xt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Bs(e, r);
  else {
    t = r;
    var o = Ce;
    Ce |= 2;
    var i = xv();
    (vt !== e || xt !== t) && ((Un = null), (ui = tt() + 500), oo(e, t));
    do
      try {
        d3();
        break;
      } catch (l) {
        wv(e, l);
      }
    while (!0);
    n0(),
      (Zs.current = i),
      (Ce = o),
      ot !== null ? (t = 0) : ((vt = null), (xt = 0), (t = ut));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = _d(e)), o !== 0 && ((r = o), (t = pf(e, o)))), t === 1)
    )
      throw ((n = Ta), oo(e, 0), gr(e, r), Ut(e, tt()), n);
    if (t === 6) gr(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !c3(o) &&
          ((t = Bs(e, r)),
          t === 2 && ((i = _d(e)), i !== 0 && ((r = i), (t = pf(e, i)))),
          t === 1))
      )
        throw ((n = Ta), oo(e, 0), gr(e, r), Ut(e, tt()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error($(345));
        case 2:
          Jr(e, _t, Un);
          break;
        case 3:
          if (
            (gr(e, r), (r & 130023424) === r && ((t = v0 + 500 - tt()), 10 < t))
          ) {
            if (As(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ot(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Wd(Jr.bind(null, e, _t, Un), t);
            break;
          }
          Jr(e, _t, Un);
          break;
        case 4:
          if ((gr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var a = 31 - gn(r);
            (i = 1 << a), (a = t[a]), a > o && (o = a), (r &= ~i);
          }
          if (
            ((r = o),
            (r = tt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * s3(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wd(Jr.bind(null, e, _t, Un), r);
            break;
          }
          Jr(e, _t, Un);
          break;
        case 5:
          Jr(e, _t, Un);
          break;
        default:
          throw Error($(329));
      }
    }
  }
  return Ut(e, tt()), e.callbackNode === n ? yv.bind(null, e) : null;
}
function pf(e, t) {
  var n = ha;
  return (
    e.current.memoizedState.isDehydrated && (oo(e, t).flags |= 256),
    (e = Bs(e, t)),
    e !== 2 && ((t = _t), (_t = n), t !== null && hf(t)),
    e
  );
}
function hf(e) {
  _t === null ? (_t = e) : _t.push.apply(_t, e);
}
function c3(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!wn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gr(e, t) {
  for (
    t &= ~g0,
      t &= ~hc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - gn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ph(e) {
  if (Ce & 6) throw Error($(327));
  ei();
  var t = As(e, 0);
  if (!(t & 1)) return Ut(e, tt()), null;
  var n = Bs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _d(e);
    r !== 0 && ((t = r), (n = pf(e, r)));
  }
  if (n === 1) throw ((n = Ta), oo(e, 0), gr(e, t), Ut(e, tt()), n);
  if (n === 6) throw Error($(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jr(e, _t, Un),
    Ut(e, tt()),
    null
  );
}
function y0(e, t) {
  var n = Ce;
  Ce |= 1;
  try {
    return e(t);
  } finally {
    (Ce = n), Ce === 0 && ((ui = tt() + 500), uc && Hr());
  }
}
function uo(e) {
  yr !== null && yr.tag === 0 && !(Ce & 6) && ei();
  var t = Ce;
  Ce |= 1;
  var n = sn.transition,
    r = Me;
  try {
    if (((sn.transition = null), (Me = 1), e)) return e();
  } finally {
    (Me = r), (sn.transition = n), (Ce = t), !(Ce & 6) && Hr();
  }
}
function w0() {
  (Gt = Yo.current), ze(Yo);
}
function oo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vw(n)), ot !== null))
    for (n = ot.return; n !== null; ) {
      var r = n;
      switch ((Jf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ps();
          break;
        case 3:
          si(), ze(Zt), ze(kt), s0();
          break;
        case 5:
          l0(r);
          break;
        case 4:
          si();
          break;
        case 13:
          ze(We);
          break;
        case 19:
          ze(We);
          break;
        case 10:
          r0(r.type._context);
          break;
        case 22:
        case 23:
          w0();
      }
      n = n.return;
    }
  if (
    ((vt = e),
    (ot = e = Mr(e.current, null)),
    (xt = Gt = t),
    (ut = 0),
    (Ta = null),
    (g0 = hc = co = 0),
    (_t = ha = null),
    to !== null)
  ) {
    for (t = 0; t < to.length; t++)
      if (((n = to[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var a = i.next;
          (i.next = o), (r.next = a);
        }
        n.pending = r;
      }
    to = null;
  }
  return e;
}
function wv(e, t) {
  do {
    var n = ot;
    try {
      if ((n0(), (fs.current = zs), Vs)) {
        for (var r = Ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Vs = !1;
      }
      if (
        ((so = 0),
        (gt = ct = Ye = null),
        (fa = !1),
        (Pa = 0),
        (m0.current = null),
        n === null || n.return === null)
      ) {
        (ut = 1), (Ta = t), (ot = null);
        break;
      }
      e: {
        var i = e,
          a = n.return,
          l = n,
          c = t;
        if (
          ((t = xt),
          (l.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var u = c,
            h = l,
            f = h.tag;
          if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var C = yh(a);
          if (C !== null) {
            (C.flags &= -257),
              wh(C, a, l, i, t),
              C.mode & 1 && vh(i, u, t),
              (t = C),
              (c = u);
            var E = t.updateQueue;
            if (E === null) {
              var y = new Set();
              y.add(c), (t.updateQueue = y);
            } else E.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              vh(i, u, t), x0();
              break e;
            }
            c = Error($(426));
          }
        } else if (Ue && l.mode & 1) {
          var M = yh(a);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256),
              wh(M, a, l, i, t),
              e0(ci(c, l));
            break e;
          }
        }
        (i = c = ci(c, l)),
          ut !== 4 && (ut = 2),
          ha === null ? (ha = [i]) : ha.push(i),
          (i = a);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = nv(i, c, t);
              dh(i, m);
              break e;
            case 1:
              l = c;
              var v = i.type,
                b = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof v.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (jr === null || !jr.has(b))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var j = rv(i, l, t);
                dh(i, j);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ev(n);
    } catch (N) {
      (t = N), ot === n && n !== null && (ot = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xv() {
  var e = Zs.current;
  return (Zs.current = zs), e === null ? zs : e;
}
function x0() {
  (ut === 0 || ut === 3 || ut === 2) && (ut = 4),
    vt === null || (!(co & 268435455) && !(hc & 268435455)) || gr(vt, xt);
}
function Bs(e, t) {
  var n = Ce;
  Ce |= 2;
  var r = xv();
  (vt !== e || xt !== t) && ((Un = null), oo(e, t));
  do
    try {
      u3();
      break;
    } catch (o) {
      wv(e, o);
    }
  while (!0);
  if ((n0(), (Ce = n), (Zs.current = r), ot !== null)) throw Error($(261));
  return (vt = null), (xt = 0), ut;
}
function u3() {
  for (; ot !== null; ) Sv(ot);
}
function d3() {
  for (; ot !== null && !Dy(); ) Sv(ot);
}
function Sv(e) {
  var t = Cv(e.alternate, e, Gt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ev(e) : (ot = t),
    (m0.current = null);
}
function Ev(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o3(n, t)), n !== null)) {
        (n.flags &= 32767), (ot = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ut = 6), (ot = null);
        return;
      }
    } else if (((n = r3(n, t, Gt)), n !== null)) {
      ot = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  ut === 0 && (ut = 5);
}
function Jr(e, t, n) {
  var r = Me,
    o = sn.transition;
  try {
    (sn.transition = null), (Me = 1), f3(e, t, n, r);
  } finally {
    (sn.transition = o), (Me = r);
  }
  return null;
}
function f3(e, t, n, r) {
  do ei();
  while (yr !== null);
  if (Ce & 6) throw Error($(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error($(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Wy(e, i),
    e === vt && ((ot = vt = null), (xt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Xl ||
      ((Xl = !0),
      jv(js, function () {
        return ei(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = sn.transition), (sn.transition = null);
    var a = Me;
    Me = 1;
    var l = Ce;
    (Ce |= 4),
      (m0.current = null),
      a3(e, n),
      gv(n, e),
      Ow(Bd),
      (Ms = !!Ud),
      (Bd = Ud = null),
      (e.current = n),
      l3(n),
      Hy(),
      (Ce = l),
      (Me = a),
      (sn.transition = i);
  } else e.current = n;
  if (
    (Xl && ((Xl = !1), (yr = e), (Us = o)),
    (i = e.pendingLanes),
    i === 0 && (jr = null),
    zy(n.stateNode),
    Ut(e, tt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if ($s) throw (($s = !1), (e = df), (df = null), e);
  return (
    Us & 1 && e.tag !== 0 && ei(),
    (i = e.pendingLanes),
    i & 1 ? (e === ff ? ma++ : ((ma = 0), (ff = e))) : (ma = 0),
    Hr(),
    null
  );
}
function ei() {
  if (yr !== null) {
    var e = ng(Us),
      t = sn.transition,
      n = Me;
    try {
      if (((sn.transition = null), (Me = 16 > e ? 16 : e), yr === null))
        var r = !1;
      else {
        if (((e = yr), (yr = null), (Us = 0), Ce & 6)) throw Error($(331));
        var o = Ce;
        for (Ce |= 4, ee = e.current; ee !== null; ) {
          var i = ee,
            a = i.child;
          if (ee.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var u = l[c];
                for (ee = u; ee !== null; ) {
                  var h = ee;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pa(8, h, i);
                  }
                  var f = h.child;
                  if (f !== null) (f.return = h), (ee = f);
                  else
                    for (; ee !== null; ) {
                      h = ee;
                      var g = h.sibling,
                        C = h.return;
                      if ((pv(h), h === u)) {
                        ee = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = C), (ee = g);
                        break;
                      }
                      ee = C;
                    }
                }
              }
              var E = i.alternate;
              if (E !== null) {
                var y = E.child;
                if (y !== null) {
                  E.child = null;
                  do {
                    var M = y.sibling;
                    (y.sibling = null), (y = M);
                  } while (y !== null);
                }
              }
              ee = i;
            }
          }
          if (i.subtreeFlags & 2064 && a !== null) (a.return = i), (ee = a);
          else
            e: for (; ee !== null; ) {
              if (((i = ee), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    pa(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (ee = m);
                break e;
              }
              ee = i.return;
            }
        }
        var v = e.current;
        for (ee = v; ee !== null; ) {
          a = ee;
          var b = a.child;
          if (a.subtreeFlags & 2064 && b !== null) (b.return = a), (ee = b);
          else
            e: for (a = v; ee !== null; ) {
              if (((l = ee), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pc(9, l);
                  }
                } catch (N) {
                  Xe(l, l.return, N);
                }
              if (l === a) {
                ee = null;
                break e;
              }
              var j = l.sibling;
              if (j !== null) {
                (j.return = l.return), (ee = j);
                break e;
              }
              ee = l.return;
            }
        }
        if (
          ((Ce = o), Hr(), Nn && typeof Nn.onPostCommitFiberRoot == "function")
        )
          try {
            Nn.onPostCommitFiberRoot(ic, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Me = n), (sn.transition = t);
    }
  }
  return !1;
}
function Oh(e, t, n) {
  (t = ci(n, t)),
    (t = nv(e, t, 1)),
    (e = Cr(e, t, 1)),
    (t = Ot()),
    e !== null && (Ua(e, 1, t), Ut(e, t));
}
function Xe(e, t, n) {
  if (e.tag === 3) Oh(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Oh(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (jr === null || !jr.has(r)))
        ) {
          (e = ci(n, e)),
            (e = rv(t, e, 1)),
            (t = Cr(t, e, 1)),
            (e = Ot()),
            t !== null && (Ua(t, 1, e), Ut(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function p3(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ot()),
    (e.pingedLanes |= e.suspendedLanes & n),
    vt === e &&
      (xt & n) === n &&
      (ut === 4 || (ut === 3 && (xt & 130023424) === xt && 500 > tt() - v0)
        ? oo(e, 0)
        : (g0 |= n)),
    Ut(e, t);
}
function bv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Zl), (Zl <<= 1), !(Zl & 130023424) && (Zl = 4194304))
      : (t = 1));
  var n = Ot();
  (e = qn(e, t)), e !== null && (Ua(e, t, n), Ut(e, n));
}
function h3(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bv(e, n);
}
function m3(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error($(314));
  }
  r !== null && r.delete(t), bv(e, n);
}
var Cv;
Cv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Zt.current) Vt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Vt = !1), n3(e, t, n);
      Vt = !!(e.flags & 131072);
    }
  else (Vt = !1), Ue && t.flags & 1048576 && kg(t, Ts, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      hs(e, t), (e = t.pendingProps);
      var o = ii(t, kt.current);
      Jo(t, n), (o = u0(null, t, r, e, o, n));
      var i = d0();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $t(r) ? ((i = !0), Os(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            i0(t),
            (o.updater = fc),
            (t.stateNode = o),
            (o._reactInternals = t),
            Jd(t, r, e, n),
            (t = nf(null, t, r, !0, i, n)))
          : ((t.tag = 0), Ue && i && Qf(t), Pt(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (hs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = v3(r)),
          (e = pn(r, e)),
          o)
        ) {
          case 0:
            t = tf(null, t, r, e, n);
            break e;
          case 1:
            t = Eh(null, t, r, e, n);
            break e;
          case 11:
            t = xh(null, t, r, e, n);
            break e;
          case 14:
            t = Sh(null, t, r, pn(r.type, e), n);
            break e;
        }
        throw Error($(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pn(r, o)),
        tf(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pn(r, o)),
        Eh(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((lv(t), e === null)) throw Error($(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Tg(e, t),
          Hs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = ci(Error($(423)), t)), (t = bh(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = ci(Error($(424)), t)), (t = bh(e, t, r, n, o));
            break e;
          } else
            for (
              Kt = br(t.stateNode.containerInfo.firstChild),
                qt = t,
                Ue = !0,
                mn = null,
                n = Og(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ai(), r === o)) {
            t = Xn(e, t, n);
            break e;
          }
          Pt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ig(t),
        e === null && qd(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (a = o.children),
        Fd(r, o) ? (a = null) : i !== null && Fd(r, i) && (t.flags |= 32),
        av(e, t),
        Pt(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && qd(t), null;
    case 13:
      return sv(e, t, n);
    case 4:
      return (
        a0(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = li(t, null, r, n)) : Pt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pn(r, o)),
        xh(e, t, r, o, n)
      );
    case 7:
      return Pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (a = o.value),
          Ie(Is, r._currentValue),
          (r._currentValue = a),
          i !== null)
        )
          if (wn(i.value, a)) {
            if (i.children === o.children && !Zt.current) {
              t = Xn(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                a = i.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (i.tag === 1) {
                      (c = Gn(-1, n & -n)), (c.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (u.pending = c);
                      }
                    }
                    (i.lanes |= n),
                      (c = i.alternate),
                      c !== null && (c.lanes |= n),
                      Xd(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (i.tag === 10) a = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((a = i.return), a === null)) throw Error($(341));
                (a.lanes |= n),
                  (l = a.alternate),
                  l !== null && (l.lanes |= n),
                  Xd(a, n, t),
                  (a = i.sibling);
              } else a = i.child;
              if (a !== null) a.return = i;
              else
                for (a = i; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((i = a.sibling), i !== null)) {
                    (i.return = a.return), (a = i);
                    break;
                  }
                  a = a.return;
                }
              i = a;
            }
        Pt(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Jo(t, n),
        (o = cn(o)),
        (r = r(o)),
        (t.flags |= 1),
        Pt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = pn(r, t.pendingProps)),
        (o = pn(r.type, o)),
        Sh(e, t, r, o, n)
      );
    case 15:
      return ov(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : pn(r, o)),
        hs(e, t),
        (t.tag = 1),
        $t(r) ? ((e = !0), Os(t)) : (e = !1),
        Jo(t, n),
        tv(t, r, o),
        Jd(t, r, o, n),
        nf(null, t, r, !0, e, n)
      );
    case 19:
      return cv(e, t, n);
    case 22:
      return iv(e, t, n);
  }
  throw Error($(156, t.tag));
};
function jv(e, t) {
  return Q2(e, t);
}
function g3(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ln(e, t, n, r) {
  return new g3(e, t, n, r);
}
function S0(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v3(e) {
  if (typeof e == "function") return S0(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === zf)) return 11;
    if (e === Zf) return 14;
  }
  return 2;
}
function Mr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ln(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function vs(e, t, n, r, o, i) {
  var a = 2;
  if (((r = e), typeof e == "function")) S0(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case _o:
        return io(n.children, o, i, t);
      case Vf:
        (a = 8), (o |= 8);
        break;
      case bd:
        return (
          (e = ln(12, n, t, o | 2)), (e.elementType = bd), (e.lanes = i), e
        );
      case Cd:
        return (e = ln(13, n, t, o)), (e.elementType = Cd), (e.lanes = i), e;
      case jd:
        return (e = ln(19, n, t, o)), (e.elementType = jd), (e.lanes = i), e;
      case I2:
        return mc(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case R2:
              a = 10;
              break e;
            case T2:
              a = 9;
              break e;
            case zf:
              a = 11;
              break e;
            case Zf:
              a = 14;
              break e;
            case pr:
              (a = 16), (r = null);
              break e;
          }
        throw Error($(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ln(a, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function io(e, t, n, r) {
  return (e = ln(7, e, r, t)), (e.lanes = n), e;
}
function mc(e, t, n, r) {
  return (
    (e = ln(22, e, r, t)),
    (e.elementType = I2),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ud(e, t, n) {
  return (e = ln(6, e, null, t)), (e.lanes = n), e;
}
function dd(e, t, n) {
  return (
    (t = ln(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function y3(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Fu(0)),
    (this.expirationTimes = Fu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fu(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function E0(e, t, n, r, o, i, a, l, c) {
  return (
    (e = new y3(e, t, n, l, c)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = ln(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    i0(i),
    e
  );
}
function w3(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ho,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Av(e) {
  if (!e) return Nr;
  e = e._reactInternals;
  e: {
    if (vo(e) !== e || e.tag !== 1) throw Error($(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($t(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error($(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($t(n)) return Ag(e, n, t);
  }
  return t;
}
function Mv(e, t, n, r, o, i, a, l, c) {
  return (
    (e = E0(n, r, !0, e, o, i, a, l, c)),
    (e.context = Av(null)),
    (n = e.current),
    (r = Ot()),
    (o = Ar(n)),
    (i = Gn(r, o)),
    (i.callback = t ?? null),
    Cr(n, i, o),
    (e.current.lanes = o),
    Ua(e, o, r),
    Ut(e, r),
    e
  );
}
function gc(e, t, n, r) {
  var o = t.current,
    i = Ot(),
    a = Ar(o);
  return (
    (n = Av(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Gn(i, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Cr(o, t, a)),
    e !== null && (vn(e, o, a, i), ds(e, o, a)),
    a
  );
}
function Fs(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Rh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function b0(e, t) {
  Rh(e, t), (e = e.alternate) && Rh(e, t);
}
function x3() {
  return null;
}
var kv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function C0(e) {
  this._internalRoot = e;
}
vc.prototype.render = C0.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error($(409));
  gc(e, t, null, null);
};
vc.prototype.unmount = C0.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    uo(function () {
      gc(null, e, null, null);
    }),
      (t[Kn] = null);
  }
};
function vc(e) {
  this._internalRoot = e;
}
vc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ig();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < mr.length && t !== 0 && t < mr[n].priority; n++);
    mr.splice(n, 0, e), n === 0 && lg(e);
  }
};
function j0(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Th() {}
function S3(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Fs(a);
        i.call(u);
      };
    }
    var a = Mv(t, r, e, 0, null, !1, !1, "", Th);
    return (
      (e._reactRootContainer = a),
      (e[Kn] = a.current),
      Aa(e.nodeType === 8 ? e.parentNode : e),
      uo(),
      a
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Fs(c);
      l.call(u);
    };
  }
  var c = E0(e, 0, !1, null, null, !1, !1, "", Th);
  return (
    (e._reactRootContainer = c),
    (e[Kn] = c.current),
    Aa(e.nodeType === 8 ? e.parentNode : e),
    uo(function () {
      gc(t, c, n, r);
    }),
    c
  );
}
function wc(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var a = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var c = Fs(a);
        l.call(c);
      };
    }
    gc(t, a, e, o);
  } else a = S3(n, t, e, o, r);
  return Fs(a);
}
rg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ia(t.pendingLanes);
        n !== 0 &&
          (Bf(t, n | 1), Ut(t, tt()), !(Ce & 6) && ((ui = tt() + 500), Hr()));
      }
      break;
    case 13:
      uo(function () {
        var r = qn(e, 1);
        if (r !== null) {
          var o = Ot();
          vn(r, e, 1, o);
        }
      }),
        b0(e, 1);
  }
};
Ff = function (e) {
  if (e.tag === 13) {
    var t = qn(e, 134217728);
    if (t !== null) {
      var n = Ot();
      vn(t, e, 134217728, n);
    }
    b0(e, 134217728);
  }
};
og = function (e) {
  if (e.tag === 13) {
    var t = Ar(e),
      n = qn(e, t);
    if (n !== null) {
      var r = Ot();
      vn(n, e, t, r);
    }
    b0(e, t);
  }
};
ig = function () {
  return Me;
};
ag = function (e, t) {
  var n = Me;
  try {
    return (Me = e), t();
  } finally {
    Me = n;
  }
};
Id = function (e, t, n) {
  switch (t) {
    case "input":
      if ((kd(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = cc(r);
            if (!o) throw Error($(90));
            H2(r), kd(r, o);
          }
        }
      }
      break;
    case "textarea":
      V2(e, n);
      break;
    case "select":
      (t = n.value), t != null && Ko(e, !!n.multiple, t, !1);
  }
};
W2 = y0;
G2 = uo;
var E3 = { usingClientEntryPoint: !1, Events: [Fa, $o, cc, B2, F2, y0] },
  ea = {
    findFiberByHostInstance: eo,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  b3 = {
    bundleType: ea.bundleType,
    version: ea.version,
    rendererPackageName: ea.rendererPackageName,
    rendererConfig: ea.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: er.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = q2(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ea.findFiberByHostInstance || x3,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      (ic = Ql.inject(b3)), (Nn = Ql);
    } catch {}
}
Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E3;
Jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!j0(t)) throw Error($(200));
  return w3(e, t, null, n);
};
Jt.createRoot = function (e, t) {
  if (!j0(e)) throw Error($(299));
  var n = !1,
    r = "",
    o = kv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = E0(e, 1, !1, null, null, n, !1, r, o)),
    (e[Kn] = t.current),
    Aa(e.nodeType === 8 ? e.parentNode : e),
    new C0(t)
  );
};
Jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error($(188))
      : ((e = Object.keys(e).join(",")), Error($(268, e)));
  return (e = q2(t)), (e = e === null ? null : e.stateNode), e;
};
Jt.flushSync = function (e) {
  return uo(e);
};
Jt.hydrate = function (e, t, n) {
  if (!yc(t)) throw Error($(200));
  return wc(null, e, t, !0, n);
};
Jt.hydrateRoot = function (e, t, n) {
  if (!j0(e)) throw Error($(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    a = kv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Mv(t, null, e, 1, n ?? null, o, !1, i, a)),
    (e[Kn] = t.current),
    Aa(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new vc(t);
};
Jt.render = function (e, t, n) {
  if (!yc(t)) throw Error($(200));
  return wc(null, e, t, !1, n);
};
Jt.unmountComponentAtNode = function (e) {
  if (!yc(e)) throw Error($(40));
  return e._reactRootContainer
    ? (uo(function () {
        wc(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Kn] = null);
        });
      }),
      !0)
    : !1;
};
Jt.unstable_batchedUpdates = y0;
Jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yc(n)) throw Error($(200));
  if (e == null || e._reactInternals === void 0) throw Error($(38));
  return wc(e, t, n, !1, r);
};
Jt.version = "18.3.1-next-f1338f8080-20240426";
function Lv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lv);
    } catch (e) {
      console.error(e);
    }
}
Lv(), (L2.exports = Jt);
var Ga = L2.exports;
const C3 = Pf(Ga);
var Ih = Ga;
(Sd.createRoot = Ih.createRoot), (Sd.hydrateRoot = Ih.hydrateRoot);
var Nv = { exports: {} };
/*!
 * @fullpage/react-fullpage 0.1.42
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */ (function (e) {
  (() => {
    var t = {
        271: (i, a, l) => {
          l.d(a, { Z: () => c });
          const c = (u, h) =>
            u
              ? function () {
                  for (
                    var f = arguments.length, g = new Array(f), C = 0;
                    C < f;
                    C++
                  )
                    g[C] = arguments[C];
                  return console.log(`<${h}/> Debug Log: `, ...g);
                }
              : () => {};
        },
        88: (i, a, l) => {
          l.d(a, { Z: () => V });
          var c = l(497),
            u = l.n(c),
            h = l(379),
            f = l.n(h),
            g = l(795),
            C = l.n(g),
            E = l(569),
            y = l.n(E),
            M = l(565),
            m = l.n(M),
            v = l(216),
            b = l.n(v),
            j = l(589),
            N = l.n(j),
            O = l(563),
            P = {};
          (P.styleTagTransform = N()),
            (P.setAttributes = m()),
            (P.insert = y().bind(null, "head")),
            (P.domAPI = C()),
            (P.insertStyleElement = b()),
            f()(O.Z, P),
            O.Z && O.Z.locals && O.Z.locals;
          var R = l(271),
            F = l(542);
          function H(_, z) {
            var W = Object.keys(_);
            if (Object.getOwnPropertySymbols) {
              var ne = Object.getOwnPropertySymbols(_);
              z &&
                (ne = ne.filter(function (ye) {
                  return Object.getOwnPropertyDescriptor(_, ye).enumerable;
                })),
                W.push.apply(W, ne);
            }
            return W;
          }
          function K(_) {
            for (var z = 1; z < arguments.length; z++) {
              var W = arguments[z] != null ? arguments[z] : {};
              z % 2
                ? H(Object(W), !0).forEach(function (ne) {
                    G(_, ne, W[ne]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    _,
                    Object.getOwnPropertyDescriptors(W)
                  )
                : H(Object(W)).forEach(function (ne) {
                    Object.defineProperty(
                      _,
                      ne,
                      Object.getOwnPropertyDescriptor(W, ne)
                    );
                  });
            }
            return _;
          }
          function G(_, z, W) {
            return (
              z in _
                ? Object.defineProperty(_, z, {
                    value: W,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (_[z] = W),
              _
            );
          }
          let ue;
          const ie = (_) => typeof _ == "function",
            pe = (_, z) =>
              _.length !== z.length
                ? !1
                : _.find((W) => !z.includes(W)) == null,
            ve = [
              "afterLoad",
              "afterRender",
              "afterResize",
              "afterResponsive",
              "afterSlideLoad",
              "onLeave",
              "onSlideLeave",
            ];
          class re extends u().Component {
            constructor(z) {
              super(z);
              const { render: W, pluginWrapper: ne } = this.props;
              if (!ie(W))
                throw new Error(
                  "must provide render prop to <ReactFullpage />"
                );
              (this.log = (0, R.Z)(this.props.debug, "ReactFullpage")),
                this.log("Building component"),
                this.log("Importing vendor files"),
                this.importVendors(),
                ne && (this.log("Calling plugin wrapper"), ne()),
                this.log("Requiring fullpage.js"),
                (ue = l(933)),
                (this.state = {
                  initialized: !1,
                  sectionCount: 0,
                  slideCount: 0,
                });
            }
            componentDidMount() {
              const z = this.buildOptions();
              this.log("React Lifecycle: componentDidMount()"),
                ue && (this.init(z), this.markInitialized());
            }
            isReRenderNecessary(z) {
              const W = this.getSectionCount(),
                ne = this.getSlideCount(),
                { sectionCount: ye, slideCount: he } = this.state;
              let Se = ye !== W || he !== ne;
              return (
                [
                  "sectionsColor",
                  "navigationTooltips",
                  "navigationPosition",
                  "navigation",
                  "scrollBar",
                ].forEach((be) => {
                  typeof z[be] < "u" &&
                    (Array.isArray(z[be])
                      ? (Se = Se || !pe(z[be], this.props[be]))
                      : (Se = Se || z[be] !== this.props[be]));
                }),
                Se
              );
            }
            componentDidUpdate(z) {
              if (
                (this.log("React Lifecycle: componentDidUpdate()"),
                this.isReRenderNecessary(z))
              ) {
                this.log(
                  "rebuilding due to a change in fullpage.js props or num sections/slides"
                ),
                  this.reRender();
                return;
              }
            }
            componentWillUnmount() {
              this.destroy();
            }
            getSectionCount() {
              const { sectionSelector: z = F.uS } = this.props,
                { length: W } = document.querySelectorAll(z);
              return W;
            }
            getSlideCount() {
              const { slideSelector: z = F.xH } = this.props,
                { length: W } = document.querySelectorAll(z);
              return W;
            }
            importVendors() {
              const { easing: z, css3: W } = this.props;
              z && !W && l(239);
            }
            init(z) {
              this.log("Reinitializing fullpage with options", z);
              const W = z.animateAnchor;
              (z.animateAnchor = !1),
                new ue(F.Km, z),
                (this.fullpageApi = window.fullpage_api),
                (this.fpUtils = window.fp_utils),
                (this.fpEasings = window.fp_easings),
                (window.fullpage_api.getFullpageData().options.animateAnchor =
                  W);
            }
            destroy() {
              this.log("Destroying fullpage instance"),
                this.fullpageApi.destroy("all");
            }
            reRender() {
              const z = this.props.slideSelector || ".slide",
                W = this.props.sectionSelector || ".section",
                ne = document.querySelector(W + ".active"),
                ye = ne
                  ? this.fpUtils.index(ne)
                  : this.state.destination
                  ? this.state.destination.index - 1
                  : 0,
                he = document.querySelector(W + ".active " + z + ".active"),
                Se = he ? this.fpUtils.index(he) : -1;
              this.destroy(),
                ye > -1 &&
                  this.fpUtils.addClass(
                    document.querySelectorAll(W)[ye],
                    "active"
                  ),
                Se > -1 && this.fpUtils.addClass(he, "active"),
                this.init(this.buildOptions());
            }
            markInitialized() {
              this.log("Marking initialized"),
                this.setState({
                  initialized: !0,
                  sectionCount: this.getSectionCount(),
                  slideCount: this.getSlideCount(),
                });
            }
            buildOptions() {
              var z = this;
              let W = null;
              if (!this.state.initialized) {
                const ye = (Se) =>
                  !!Object.keys(this.props).find((fe) => fe === Se);
                W = ve.filter(ye).reduce(
                  (Se, fe) =>
                    K(
                      K({}, Se),
                      {},
                      {
                        [fe]: function () {
                          for (
                            var be = arguments.length,
                              ke = new Array(be),
                              Je = 0;
                            Je < be;
                            Je++
                          )
                            ke[Je] = arguments[Je];
                          return z.update(fe, ...ke);
                        },
                      }
                    ),
                  {}
                );
              }
              const ne = K(K({}, this.props), W);
              return this.log("Building fullpage.js options: ", ne), ne;
            }
            update(z) {
              for (
                var W = arguments.length,
                  ne = new Array(W > 1 ? W - 1 : 0),
                  ye = 1;
                ye < W;
                ye++
              )
                ne[ye - 1] = arguments[ye];
              this.log("Event trigger: ", z);
              let he = K(
                K({}, this.state),
                {},
                {
                  sectionCount: this.getSectionCount(),
                  slideCount: this.getSlideCount(),
                }
              );
              const Se = (ke) => K(K(K({}, he), ke), {}, { lastEvent: z }),
                fe = (ke) =>
                  ke.reduce((Je, it, je) => {
                    const J = ne[je];
                    return (Je[it] = J), Je;
                  }, {});
              switch (z) {
                case "afterLoad":
                  he = Se(fe(["origin", "destination", "direction"]));
                  break;
                case "afterResize":
                  he = Se(fe([""]));
                  break;
                case "afterResponsive":
                  he = Se(fe(["isResponsive"]));
                  break;
                case "afterSlideLoad":
                  he = Se(
                    fe(["section", "origin", "destination", "direction"])
                  );
                  break;
                case "onLeave":
                  he = Se(fe(["origin", "destination", "direction"]));
                  break;
                case "onSlideLeave":
                  he = Se(
                    fe([
                      "section",
                      "origin",
                      "slideIndex",
                      "destination",
                      "direction",
                    ])
                  );
                  break;
              }
              const be = this.props[z](...ne);
              return (
                this.log("Called callback: Returning => ", be),
                this.log("Updating State => ", he),
                this.setState(he),
                be
              );
            }
            render() {
              return (
                this.log("<== Rendering ==>"),
                u().createElement("div", { id: F.W1 }, this.props.render(this))
              );
            }
          }
          re.defaultProps = { sectionsColor: [] };
          const V = re;
        },
        882: (i, a, l) => {
          l.d(a, { Z: () => C });
          var c = l(497),
            u = l.n(c),
            h = l(271),
            f = l(542);
          class g extends u().Component {
            constructor(y) {
              super(y),
                (this.state = {}),
                (this.log = (0, h.Z)(this.props.debug, "ReactFullpageShell")),
                this.log("Building component");
            }
            render() {
              return u().createElement(
                "div",
                { id: f.W1 },
                this.props.render(this)
              );
            }
          }
          const C = g;
        },
        542: (i, a, l) => {
          l.d(a, { W1: () => c, Km: () => u, uS: () => h, xH: () => f });
          const c = "fullpage",
            u = `#${c}`,
            h = ".section",
            f = ".SLIDE";
        },
        563: (i, a, l) => {
          l.d(a, { Z: () => f });
          var c = l(645),
            u = l.n(c),
            h = u()(function (g) {
              return g[1];
            });
          h.push([
            i.id,
            `/*!\r
 * fullPage 4.0.22\r
 * https://github.com/alvarotrigo/fullPage.js\r
 *\r
 * @license GPLv3 for open source use only\r
 * or Fullpage Commercial License for commercial use\r
 * http://alvarotrigo.com/fullPage/pricing/\r
 *\r
 * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r
 */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-is-overflow.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide,.fp-scrollable.fp-responsive .fp-is-overflow.fp-section{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]),.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]){min-height:100vh;min-height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start;max-height:100vh}.fp-scrollable .fp-auto-height .fp-overflow{max-height:none}.fp-is-overflow .fp-overflow.fp-auto-height,.fp-is-overflow .fp-overflow.fp-auto-height-responsive,.fp-is-overflow>.fp-overflow{overflow-y:auto}.fp-overflow{outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important;min-height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}.fp-noscroll .fp-overflow{overflow:hidden}\r
`,
            "",
          ]);
          const f = h;
        },
        645: (i) => {
          i.exports = function (a) {
            var l = [];
            return (
              (l.toString = function () {
                return this.map(function (u) {
                  var h = a(u);
                  return u[2] ? "@media ".concat(u[2], " {").concat(h, "}") : h;
                }).join("");
              }),
              (l.i = function (c, u, h) {
                typeof c == "string" && (c = [[null, c, ""]]);
                var f = {};
                if (h)
                  for (var g = 0; g < this.length; g++) {
                    var C = this[g][0];
                    C != null && (f[C] = !0);
                  }
                for (var E = 0; E < c.length; E++) {
                  var y = [].concat(c[E]);
                  (h && f[y[0]]) ||
                    (u &&
                      (y[2]
                        ? (y[2] = "".concat(u, " and ").concat(y[2]))
                        : (y[2] = u)),
                    l.push(y));
                }
              }),
              l
            );
          };
        },
        933: function (i) {
          /*!
           * fullPage 4.0.22
           * https://github.com/alvarotrigo/fullPage.js
           *
           * @license GPLv3 for open source use only
           * or Fullpage Commercial License for commercial use
           * http://alvarotrigo.com/fullPage/pricing/
           *
           * Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
           */ (function (a, l) {
            i.exports = l();
          })(this, function () {
            var a,
              l,
              c,
              u,
              h = Object.freeze({
                __proto__: null,
                get showError() {
                  return Ft;
                },
                get isVisible() {
                  return lu;
                },
                get getVisible() {
                  return Ii;
                },
                get $() {
                  return Z;
                },
                get deepExtend() {
                  return Kr;
                },
                get hasClass() {
                  return Ne;
                },
                get getWindowHeight() {
                  return pt;
                },
                get t() {
                  return Di;
                },
                get css() {
                  return Re;
                },
                get prev() {
                  return gl;
                },
                get next() {
                  return Hi;
                },
                get last() {
                  return Z1;
                },
                get index() {
                  return Dn;
                },
                get getList() {
                  return ir;
                },
                get hide() {
                  return vl;
                },
                get show() {
                  return su;
                },
                get isArrayOrList() {
                  return bo;
                },
                get addClass() {
                  return ge;
                },
                get removeClass() {
                  return qe;
                },
                get appendTo() {
                  return Co;
                },
                get wrap() {
                  return cu;
                },
                get wrapAll() {
                  return yl;
                },
                get wrapInner() {
                  return uu;
                },
                get unwrap() {
                  return wl;
                },
                get closest() {
                  return Pe;
                },
                get after() {
                  return _i;
                },
                get before() {
                  return xl;
                },
                get insertBefore() {
                  return Sl;
                },
                get getScrollTop() {
                  return ar;
                },
                get siblings() {
                  return jo;
                },
                get preventDefault() {
                  return lt;
                },
                get i() {
                  return et;
                },
                get o() {
                  return qr;
                },
                get u() {
                  return Hn;
                },
                get l() {
                  return _n;
                },
                get v() {
                  return Ao;
                },
                get isFunction() {
                  return nt;
                },
                get trigger() {
                  return Ct;
                },
                get matches() {
                  return rt;
                },
                get toggle() {
                  return El;
                },
                get createElementFromHTML() {
                  return lr;
                },
                get remove() {
                  return Xr;
                },
                get filter() {
                  return $1;
                },
                get untilAll() {
                  return bl;
                },
                get nextAll() {
                  return du;
                },
                get prevAll() {
                  return fu;
                },
                get toArray() {
                  return U1;
                },
                get p() {
                  return Cn;
                },
                get h() {
                  return Vi;
                },
                get g() {
                  return Cl;
                },
                get S() {
                  return B1;
                },
                get M() {
                  return pu;
                },
              });
            Array.prototype.find ||
              Object.defineProperty(Array.prototype, "find", {
                value: function (s) {
                  if (this == null)
                    throw new TypeError('"this" is null or not defined');
                  var d = Object(this),
                    x = d.length >>> 0;
                  if (typeof s != "function")
                    throw new TypeError("predicate must be a function");
                  for (var A = arguments[1], L = 0; L < x; ) {
                    var I = d[L];
                    if (s.call(A, I, L, d)) return I;
                    L++;
                  }
                },
              }),
              Array.from ||
                (Array.from =
                  ((a = Object.prototype.toString),
                  (l = function (s) {
                    return (
                      typeof s == "function" ||
                      a.call(s) === "[object Function]"
                    );
                  }),
                  (c = Math.pow(2, 53) - 1),
                  (u = function (s) {
                    var d = (function (x) {
                      var A = Number(x);
                      return isNaN(A)
                        ? 0
                        : A !== 0 && isFinite(A)
                        ? (A > 0 ? 1 : -1) * Math.floor(Math.abs(A))
                        : A;
                    })(s);
                    return Math.min(Math.max(d, 0), c);
                  }),
                  function (s) {
                    var d = this,
                      x = Object(s);
                    if (s == null)
                      throw new TypeError(
                        "Array.from requires an array-like object - not null or undefined"
                      );
                    var A,
                      L = arguments.length > 1 ? arguments[1] : void 0;
                    if (L !== void 0) {
                      if (!l(L))
                        throw new TypeError(
                          "Array.from: when provided, the second argument must be a function"
                        );
                      arguments.length > 2 && (A = arguments[2]);
                    }
                    for (
                      var I,
                        T = u(x.length),
                        Q = l(d) ? Object(new d(T)) : new Array(T),
                        Y = 0;
                      Y < T;

                    )
                      (I = x[Y]),
                        (Q[Y] = L
                          ? A === void 0
                            ? L(I, Y)
                            : L.call(A, I, Y)
                          : I),
                        (Y += 1);
                    return (Q.length = T), Q;
                  }));
            var f = window,
              g = document,
              C =
                navigator.userAgent.match(
                  /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                ) ||
                (navigator.userAgent.includes("Mac") &&
                  "ontouchend" in document),
              E = /(Mac|iPhone|iPod|iPad)/i.test(f.navigator.userAgent),
              y =
                "ontouchstart" in f ||
                navigator.msMaxTouchPoints > 0 ||
                navigator.maxTouchPoints,
              M = !!window.MSInputMethodContext && !!document.documentMode,
              m = { test: {}, shared: {} };
            f.NodeList &&
              !NodeList.prototype.forEach &&
              (NodeList.prototype.forEach = function (s, d) {
                d = d || window;
                for (var x = 0; x < this.length; x++)
                  s.call(d, this[x], x, this);
              }),
              typeof Object.assign != "function" &&
                Object.defineProperty(Object, "assign", {
                  value: function (s, d) {
                    if (s == null)
                      throw new TypeError(
                        "Cannot convert undefined or null to object"
                      );
                    for (var x = Object(s), A = 1; A < arguments.length; A++) {
                      var L = arguments[A];
                      if (L != null)
                        for (var I in L)
                          Object.prototype.hasOwnProperty.call(L, I) &&
                            (x[I] = L[I]);
                    }
                    return x;
                  },
                  writable: !0,
                  T: !0,
                });
            var v = "fullpage-wrapper",
              b = "." + v,
              j = "fp-responsive",
              N = "fp-notransition",
              O = "fp-destroyed",
              P = "fp-enabled",
              R = "active",
              F = ".active",
              H = "fp-completely",
              K = "fp-section",
              G = "." + K,
              ue = ".fp-tableCell",
              ie = "#fp-nav",
              pe = "fp-slide",
              ve = "." + pe,
              re = ".fp-slide.active",
              V = "fp-slides",
              _ = ".fp-slides",
              z = "fp-slidesContainer",
              W = "." + z,
              ne = "fp-table",
              ye = "fp-overflow",
              he = "." + ye,
              Se = "fp-is-overflow",
              fe = ".fp-slidesNav",
              be = ".fp-slidesNav a",
              ke = "fp-controlArrow",
              Je = "." + ke,
              it = "fp-prev",
              je = ".fp-controlArrow.fp-prev",
              J = ".fp-controlArrow.fp-next",
              me = {
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                licenseKey: "",
                credits: {
                  enabled: !0,
                  label: "Made with fullPage.js",
                  position: "right",
                },
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                A: 600,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !0,
                scrollOverflowReset: !1,
                touchSensitivity: 5,
                touchWrapper: null,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                allowCorrectDirection: !1,
                scrollOverflowMacStyle: !0,
                controlArrows: !0,
                controlArrowsHTML: [
                  '<div class="fp-arrow"></div>',
                  '<div class="fp-arrow"></div>',
                ],
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                  type: "reveal",
                  percentage: 62,
                  property: "translate",
                },
                cards: !1,
                cardsOptions: {
                  perspective: 100,
                  fadeContent: !0,
                  fadeBackground: !0,
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                beforeLeave: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                onScrollOverflow: null,
                lazyLoading: !0,
                observer: !0,
              },
              Le = null,
              De = !1,
              at = Kr({}, me),
              bt = null;
            function te(s) {
              return Le;
            }
            function k() {
              return bt || me;
            }
            function In() {
              return at;
            }
            function $r(s, d, x) {
              (bt[s] = d), x !== "internal" && (at[s] = d);
            }
            function tl() {
              if (!k().anchors.length) {
                var s = Z(
                  k().sectionSelector.split(",").join("[data-anchor],") +
                    "[data-anchor]",
                  Le
                );
                s.length &&
                  s.length === Z(k().sectionSelector, Le).length &&
                  ((De = !0),
                  s.forEach(function (x) {
                    k().anchors.push(et(x, "data-anchor").toString());
                  }));
              }
              if (!k().navigationTooltips.length) {
                var d = Z(
                  k().sectionSelector.split(",").join("[data-tooltip],") +
                    "[data-tooltip]",
                  Le
                );
                d.length &&
                  d.forEach(function (x) {
                    k().navigationTooltips.push(
                      et(x, "data-tooltip").toString()
                    );
                  });
              }
            }
            var D = {
              O: 0,
              R: 0,
              slides: [],
              j: [],
              L: null,
              D: null,
              N: !1,
              P: !1,
              H: !1,
              C: !1,
              I: !1,
              W: void 0,
              F: void 0,
              V: !1,
              canScroll: !0,
              Z: "none",
              B: "none",
              G: !1,
              Y: !1,
              U: !0,
              X: 0,
              _: pt(),
              J: !1,
              K: {},
            };
            function X(s) {
              Object.assign(D, s);
            }
            function U() {
              return D;
            }
            function Ci(s) {
              return window["fp_" + s + "Extension"] !== void 0;
            }
            function Te(s) {
              var d = k();
              return d[s] !== null &&
                Object.prototype.toString.call(d[s]) === "[object Array]"
                ? d[s].length && m[s]
                : d[s] && m[s];
            }
            function ae(s, d, x) {
              if (Te(s)) return nt(m[s][d]) ? m[s][d](x) : m[s][d];
            }
            function Ur() {
              return ae("dragAndMove", "isAnimating");
            }
            function nl() {
              return ae("dragAndMove", "isGrabbing");
            }
            function ji(s) {
              if (k().offsetSections && m.offsetSections) {
                var d = ae("offsetSections", "getWindowHeight", s);
                return d !== "" ? Math.round(d) + "px" : d;
              }
              return pt() + "px";
            }
            function rl(s, d) {
              s.insertBefore(d, s.firstChild);
            }
            function dt(s) {
              var d =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              function x(L) {
                var I,
                  T,
                  Q,
                  Y,
                  ce,
                  we,
                  se = "",
                  Ae = 0;
                for (L = L.replace(/[^A-Za-z0-9+/=]/g, ""); Ae < L.length; )
                  (I =
                    (d.indexOf(L.charAt(Ae++)) << 2) |
                    ((Y = d.indexOf(L.charAt(Ae++))) >> 4)),
                    (T =
                      ((15 & Y) << 4) |
                      ((ce = d.indexOf(L.charAt(Ae++))) >> 2)),
                    (Q = ((3 & ce) << 6) | (we = d.indexOf(L.charAt(Ae++)))),
                    (se += String.fromCharCode(I)),
                    ce != 64 && (se += String.fromCharCode(T)),
                    we != 64 && (se += String.fromCharCode(Q));
                return (
                  (se = (function (Oe) {
                    for (
                      var ht, st = "", Ze = 0, $e = 0, Ee = 0;
                      Ze < Oe.length;

                    )
                      ($e = Oe.charCodeAt(Ze)) < 128
                        ? ((st += String.fromCharCode($e)), Ze++)
                        : $e > 191 && $e < 224
                        ? ((Ee = Oe.charCodeAt(Ze + 1)),
                          (st += String.fromCharCode(
                            ((31 & $e) << 6) | (63 & Ee)
                          )),
                          (Ze += 2))
                        : ((Ee = Oe.charCodeAt(Ze + 1)),
                          (ht = Oe.charCodeAt(Ze + 2)),
                          (st += String.fromCharCode(
                            ((15 & $e) << 12) | ((63 & Ee) << 6) | (63 & ht)
                          )),
                          (Ze += 3));
                    return st;
                  })(se)),
                  se
                );
              }
              function A(L) {
                return L.slice(3).slice(0, -3);
              }
              return (function (L) {
                var I = L.split("_");
                if (I.length > 1) {
                  var T = I[1];
                  return (
                    x(
                      L.replace(A(I[1]), "").split("_")[0].slice(2).slice(0, -2)
                    ) +
                    "_" +
                    x(T.slice(3).slice(0, -3))
                  );
                }
                return A(L);
              })(x(s));
            }
            (f.state = D),
              (f.fp_utils = f.fp_utils || {}),
              Object.assign(f.fp_utils, {
                prependTo: rl,
                toggleClass: function (s, d, x) {
                  if (s.classList && x == null) s.classList.toggle(d);
                  else {
                    var A = Ne(s, d);
                    (A && x == null) || !x
                      ? qe(s, d)
                      : ((!A && x == null) || x) && ge(s, d);
                  }
                },
              });
            var ol = function (s) {
                (this.anchor = s.anchor),
                  (this.item = s.item),
                  (this.index = s.index()),
                  (this.isLast =
                    this.index ===
                    s.item.parentElement.querySelectorAll(s.selector).length -
                      1),
                  (this.isFirst = !this.index),
                  (this.isActive = s.isActive);
              },
              Lt = function (s, d) {
                (this.parent = this.parent || null),
                  (this.selector = d),
                  (this.anchor =
                    et(s, "data-anchor") ||
                    k().anchors[Dn(s, k().sectionSelector)]),
                  (this.item = s),
                  (this.isVisible = lu(s)),
                  (this.isActive = Ne(s, R)),
                  (this.q = Ne(s, ye) || Z(he, s)[0] != null),
                  (this.nn = d === k().sectionSelector),
                  (this.container = Pe(s, W) || Pe(s, b)),
                  (this.index = function () {
                    return this.siblings().indexOf(this);
                  });
              };
            function yo(s) {
              return s.map(function (d) {
                return d.item;
              });
            }
            function Ai(s, d) {
              return s.find(function (x) {
                return x.item === d;
              });
            }
            (Lt.prototype.siblings = function () {
              return this.nn
                ? this.isVisible
                  ? D.j
                  : D.tn
                : this.parent
                ? this.parent.slides
                : 0;
            }),
              (Lt.prototype.prev = function () {
                var s = this.siblings(),
                  d =
                    (this.nn
                      ? s.indexOf(this)
                      : this.parent.slides.indexOf(this)) - 1;
                return d >= 0 ? s[d] : null;
              }),
              (Lt.prototype.next = function () {
                var s = this.siblings(),
                  d =
                    (this.nn
                      ? s.indexOf(this)
                      : this.parent.slides.indexOf(this)) + 1;
                return d < s.length ? s[d] : null;
              }),
              (Lt.prototype.prevPanel = function () {
                return this === this.prev()
                  ? this.parent
                    ? this.parent.prev()
                    : null
                  : this.prev() || (this.parent ? this.parent.prev() : null);
              }),
              (Lt.prototype.nextPanel = function () {
                return this === this.next()
                  ? this.parent
                    ? this.parent.next()
                    : null
                  : this.next() || (this.parent ? this.parent.next() : null);
              }),
              (Lt.prototype.en = function () {
                return this.nn ? D.j : D.rn;
              });
            var Mi,
              l1 = function (s) {
                ol.call(this, s);
              },
              x4 = function (s) {
                ol.call(this, s);
              };
            function Br(s) {
              var d = Z(re, s);
              return d.length && (s = d[0]), s;
            }
            function s1(s) {
              return s ? (s.activeSlide ? s.activeSlide : s) : null;
            }
            function wo(s) {
              var d,
                x,
                A = k();
              return (
                A.autoScrolling && !A.scrollBar
                  ? ((d = -s), (x = Z(b)[0]))
                  : ((d = s), (x = window)),
                { options: d, element: x }
              );
            }
            function c1(s, d) {
              !k().autoScrolling ||
              k().scrollBar ||
              (s.self != window && Ne(s, V))
                ? s.self != window && Ne(s, V)
                  ? (s.scrollLeft = d)
                  : s.scrollTo(0, d)
                : (s.style.top = d + "px");
            }
            function Oc(s) {
              var d =
                "transform " + k().scrollingSpeed + "ms " + k().easingcss3;
              return (
                qe(s, N), Re(s, { "-webkit-transition": d, transition: d })
              );
            }
            function Rc(s, d) {
              var x = s.index(),
                A = Dn(d, G);
              return x == A ? "none" : x > A ? "up" : "down";
            }
            function il(s) {
              return ge(s, N);
            }
            function Tc(s) {
              return {
                "-webkit-transform": s,
                "-moz-transform": s,
                "-ms-transform": s,
                transform: s,
              };
            }
            function u1(s, d) {
              d ? Oc(te()) : il(te()),
                clearTimeout(Mi),
                Re(te(), Tc(s)),
                (m.test.on = s),
                (Mi = setTimeout(function () {
                  qe(te(), N);
                }, 10));
            }
            function Fr(s) {
              var d = Math.round(s);
              if (k().css3 && k().autoScrolling && !k().scrollBar)
                u1("translate3d(0px, -" + d + "px, 0px)", !1);
              else if (k().autoScrolling && !k().scrollBar)
                Re(te(), { top: -d + "px" }), (m.test.top = -d + "px");
              else {
                var x = wo(d);
                c1(x.element, x.options);
              }
            }
            function ki(s, d) {
              d !== "internal" && ae("fadingEffect", "update", s),
                ae("cards", "update_", s),
                $r("scrollingSpeed", s, d);
            }
            m.setScrollingSpeed = ki;
            var Li,
              He = null,
              Ni = null,
              al = null;
            function ll(s, d, x, A) {
              var L,
                I = (function (ce) {
                  return ce.self != f && Ne(ce, V)
                    ? ce.scrollLeft
                    : !k().autoScrolling || k().scrollBar
                    ? ar()
                    : ce.offsetTop;
                })(s),
                T = d - I,
                Q = !1,
                Y = D.V;
              X({ V: !0 }),
                Li && window.cancelAnimationFrame(Li),
                (Li = function (ce) {
                  L || (L = ce);
                  var we = Math.floor(ce - L);
                  if (D.V) {
                    var se = d;
                    x && (se = f.fp_easings[k().easing](we, I, T, x)),
                      we <= x && c1(s, se),
                      we < x
                        ? window.requestAnimationFrame(Li)
                        : A === void 0 || Q || (A(), X({ V: !1 }), (Q = !0));
                  } else Q || Y || (A(), X({ V: !1 }), (Q = !0));
                }),
                window.requestAnimationFrame(Li);
            }
            function sl(s) {
              var d = Br(s);
              Z("video, audio", d).forEach(function (x) {
                x.hasAttribute("data-autoplay") &&
                  typeof x.play == "function" &&
                  x.play();
              }),
                Z('iframe[src*="youtube.com/embed/"]', d).forEach(function (x) {
                  x.hasAttribute("data-autoplay") && d1(x),
                    (x.onload = function () {
                      x.hasAttribute("data-autoplay") && d1(x);
                    });
                });
            }
            function d1(s) {
              s.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*"
              );
            }
            function Ic(s) {
              var d = Br(s);
              Z("video, audio", d).forEach(function (x) {
                x.hasAttribute("data-keepplaying") ||
                  typeof x.pause != "function" ||
                  x.pause();
              }),
                Z('iframe[src*="youtube.com/embed/"]', d).forEach(function (x) {
                  /youtube\.com\/embed\//.test(et(x, "src")) &&
                    !x.hasAttribute("data-keepplaying") &&
                    x.contentWindow.postMessage(
                      '{"event":"command","func":"pauseVideo","args":""}',
                      "*"
                    );
                });
            }
            function xo(s) {
              k().lazyLoading &&
                Z(
                  "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
                  Br(s)
                ).forEach(function (d) {
                  if (
                    (["src", "srcset"].forEach(function (A) {
                      var L = et(d, "data-" + A);
                      L != null &&
                        L &&
                        (Cl(d, A), d.addEventListener("load", function () {}));
                    }),
                    rt(d, "source"))
                  ) {
                    var x = Pe(d, "video, audio");
                    x && (x.load(), (x.onloadeddata = function () {}));
                  }
                });
            }
            function f1() {
              var s = U().L.item,
                d = U().L.activeSlide,
                x = p1(s),
                A = String(x);
              d && (A = A + "-" + p1(d.item)),
                (A = A.replace("/", "-").replace("#", ""));
              var L = new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g");
              (He.className = He.className.replace(L, "")),
                ge(He, "fp-viewing-" + A);
            }
            function p1(s) {
              if (!s) return null;
              var d = et(s, "data-anchor"),
                x = Dn(s);
              return d == null && (d = x), d;
            }
            function Dc(s, d, x) {
              var A = "";
              k().anchors.length &&
                !k().lockAnchors &&
                (s
                  ? (x != null && (A = x),
                    d == null && (d = s),
                    X({ F: d }),
                    Hc(A + "/" + d))
                  : (s != null && X({ F: d }), Hc(x))),
                f1();
            }
            function Hc(s) {
              if (k().recordHistory) location.hash = s;
              else if (C || y) f.history.replaceState(void 0, void 0, "#" + s);
              else {
                var d = f.location.href.split("#")[0];
                f.location.replace(d + "#" + s);
              }
            }
            function Pi(s) {
              return (
                (Pi =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (d) {
                        return typeof d;
                      }
                    : function (d) {
                        return d &&
                          typeof Symbol == "function" &&
                          d.constructor === Symbol &&
                          d !== Symbol.prototype
                          ? "symbol"
                          : typeof d;
                      }),
                Pi(s)
              );
            }
            var q = {
              an: {},
              un: function (s, d) {
                var x = this;
                return (
                  Pi(this.an[s]) !== "object" && (this.an[s] = []),
                  this.an[s].push(d),
                  function () {
                    return x.removeListener(s, d);
                  }
                );
              },
              removeListener: function (s, d) {
                if (Pi(this.an[s]) === "object") {
                  var x = this.an[s].indexOf(d);
                  x > -1 && this.an[s].splice(x, 1);
                }
              },
              ln: function (s) {
                for (
                  var d = this,
                    x = arguments.length,
                    A = new Array(x > 1 ? x - 1 : 0),
                    L = 1;
                  L < x;
                  L++
                )
                  A[L - 1] = arguments[L];
                Pi(this.an[s]) === "object" &&
                  this.an[s].forEach(function (I) {
                    return I.apply(d, A);
                  });
              },
              once: function (s, d) {
                var x = this,
                  A = this.un(s, function () {
                    A();
                    for (
                      var L = arguments.length, I = new Array(L), T = 0;
                      T < L;
                      T++
                    )
                      I[T] = arguments[T];
                    d.apply(x, I);
                  });
              },
            };
            function h1(s, d, x) {
              var A = d === "Section" ? k().anchors[s] : et(x, "data-anchor");
              return encodeURI(
                k().navigationTooltips[s] || A || d + " " + (s + 1)
              );
            }
            var _c = "onAfterRenderNoAnchor",
              cl = "onClickOrTouch",
              Vc = "moveSlideLeft",
              zc = "moveSlideRight",
              m1 = "onInitialise",
              Nt = "bindEvents",
              dn = "onDestroy",
              g1 = "contentChanged",
              v1 = "onScrollOverflowScrolled",
              Zc = "onScrollPageAndSlide",
              y1 = "onKeyDown",
              w1 = "onMenuClick",
              x1 = "scrollPage",
              S1 = "landscapeScroll",
              E1 = "scrollBeyondFullpage",
              b1 = "onPerformMovement",
              C1 = "onSlideLeave",
              j1 = "onLeave",
              $c = "afterSectionLoads",
              Uc = "afterSlideLoads";
            function S4(s) {
              s.cancelable && lt(s), X({ D: "horizontalNav" });
              var d = Pe(this, G),
                x = Z(_, Pe(this, G))[0],
                A = Ai(U().j, d).slides[Dn(Pe(this, "li"))];
              q.ln(S1, { slides: x, destination: A.item });
            }
            function A1(s, d) {
              k().slidesNavigation &&
                s != null &&
                (qe(Z(F, s), R), ge(Z("a", Z("li", s)[d]), R));
            }
            var ul,
              Wr = {};
            function dl(s, d, x) {
              d !== "all"
                ? (Wr[x][d] = s)
                : Object.keys(Wr[x]).forEach(function (A) {
                    Wr[x][A] = s;
                  });
            }
            function ft() {
              return Wr;
            }
            function E4() {
              var s = Pe(this, G);
              Ne(this, it)
                ? ft().m.left &&
                  (X({ D: "slideArrow" }), q.ln(Vc, { section: s }))
                : ft().m.right &&
                  (X({ D: "slideArrow" }), q.ln(zc, { section: s }));
            }
            function M1(s) {
              !k().loopHorizontal &&
                k().controlArrows &&
                (El(Z(je, s.section), s.slideIndex !== 0),
                El(Z(J, s.section), Hi(s.destiny) != null));
            }
            function b4() {
              clearTimeout(ul), X({ H: !1 });
            }
            function Gr(s, d, x) {
              var A = Pe(s, G),
                L = U().j.filter(function (Q) {
                  return Q.item == A;
                })[0],
                I = L.slides.filter(function (Q) {
                  return Q.item == d;
                })[0],
                T = {
                  slides: s,
                  destiny: d,
                  direction: x,
                  destinyPos: { left: d.offsetLeft },
                  slideIndex: I.index(),
                  section: A,
                  sectionIndex: L.index(),
                  anchorLink: L.anchor,
                  slidesNav: Z(fe, A)[0],
                  slideAnchor: I.anchor,
                  prevSlide: L.activeSlide.item,
                  prevSlideIndex: L.activeSlide.index(),
                  items: { section: L, origin: L.activeSlide, destination: I },
                  localIsResizing: D.C,
                };
              (T.xMovement = L1(T.prevSlideIndex, T.slideIndex)),
                (T.direction = T.direction ? T.direction : T.xMovement),
                T.localIsResizing || X({ canScroll: !1 }),
                ae("parallax", "applyHorizontal", T),
                ae("cards", "apply", T),
                ae("dropEffect", "apply", T),
                ae("waterEffect", "apply", T),
                k().onSlideLeave &&
                !T.localIsResizing &&
                T.xMovement !== "none" &&
                nt(k().onSlideLeave) &&
                bn("onSlideLeave", T) === !1
                  ? X({ H: !1 })
                  : ((Te("dropEffect") && k().dropEffect) ||
                      (ge(d, R), qe(jo(d), R)),
                    En(),
                    T.localIsResizing || (Ic(T.prevSlide), xo(d)),
                    M1(T),
                    L.isActive &&
                      !T.localIsResizing &&
                      Dc(T.slideIndex, T.slideAnchor, T.anchorLink),
                    ae("continuousHorizontal", "apply", T),
                    q.ln(C1, T),
                    nl() ? Bc(T) : k1(s, T, !0),
                    k().interlockedSlides &&
                      m.interlockedSlides &&
                      ((Te("continuousHorizontal") &&
                        x !== void 0 &&
                        x !== T.xMovement) ||
                        ae("interlockedSlides", "apply", T)));
            }
            function k1(s, d, x) {
              var A = d.destinyPos;
              if (
                (A1(d.slidesNav, d.slideIndex),
                X({ scrollX: Math.round(A.left) }),
                k().css3)
              ) {
                var L = "translate3d(-" + Math.round(A.left) + "px, 0px, 0px)";
                (m.test.cn[d.sectionIndex] = L),
                  (Te("dragAndMove") && d.sn !== void 0) || Oc(Z(W, s)),
                  Re(Z(W, s), Tc(L)),
                  Te("interlockedSlides") || clearTimeout(ul),
                  (ul = setTimeout(function () {
                    x && Bc(d);
                  }, k().scrollingSpeed));
              } else
                (m.test.left[d.sectionIndex] = Math.round(A.left)),
                  ll(s, Math.round(A.left), k().scrollingSpeed, function () {
                    x && Bc(d);
                  });
            }
            function L1(s, d) {
              return s == d ? "none" : s > d ? "left" : "right";
            }
            function C4() {
              clearTimeout(ul);
            }
            function Bc(s) {
              ae("continuousHorizontal", "afterSlideLoads", s),
                ae("dragAndMove", "afterSlideLoads", s),
                s.localIsResizing ||
                  (ae("parallax", "afterSlideLoads"),
                  ae("scrollOverflowReset", "setPrevious", s.prevSlide),
                  ae("scrollOverflowReset", "reset"),
                  nt(k().afterSlideLoad) && bn("afterSlideLoad", s),
                  X({ canScroll: !0 }),
                  sl(s.destiny),
                  q.ln(Uc, s)),
                X({ H: !1 }),
                ae("interlockedSlides", "interlockedSlides", s);
            }
            function Oi(s, d) {
              ki(0, "internal"),
                d !== void 0 && X({ C: !0 }),
                Gr(Pe(s, _), s),
                d !== void 0 && X({ C: !1 }),
                ki(In().scrollingSpeed, "internal");
            }
            (Wr.m = { up: !0, down: !0, left: !0, right: !0 }),
              (Wr.k = Kr({}, Wr.m)),
              q.un(cl, function (s) {
                var d = s.target;
                (rt(d, Je) || Pe(d, Je)) && E4.call(d, s);
              }),
              (m.landscapeScroll = Gr),
              q.un(Nt, function () {
                q.un(b1, b4);
              });
            var Fc = null,
              Wc = null;
            function En() {
              (D.L = null),
                D.j.map(function (s) {
                  var d = Ne(s.item, R);
                  (s.isActive = d),
                    (s.q = le.q(s.item)),
                    d && (D.L = s),
                    s.slides.length &&
                      ((s.activeSlide = null),
                      s.slides.map(function (x) {
                        var A = Ne(x.item, R);
                        (x.q = le.q(s.item)),
                          (x.isActive = A),
                          A && (s.activeSlide = x);
                      }));
                }),
                (function () {
                  var s = D.L,
                    d = !!D.L && D.L.slides.length,
                    x = D.L ? D.L.activeSlide : null;
                  if (!s && D.j.length && !U().N) {
                    if (Fc) {
                      var A = P1(Fc, D.j);
                      A && ((D.L = A), (D.L.isActive = !0), ge(D.L.item, R)),
                        D.L && Fr(D.L.item.offsetTop);
                    }
                    if (d && !x && Wc) {
                      var L = P1(Wc, D.L.slides);
                      L &&
                        ((D.L.activeSlide = L),
                        (D.L.activeSlide.isActive = !0),
                        ge(D.L.activeSlide.item, R)),
                        D.L.activeSlide && Oi(D.L.activeSlide.item, "internal");
                    }
                  }
                })(),
                Ct(te(), "onUpdateStateDone");
            }
            function fl() {
              var s = Z(k().sectionSelector + ", " + G, te()),
                d = Ii(s),
                x = Array.from(s).map(function (I) {
                  return new Yr(I);
                }),
                A = x.filter(function (I) {
                  return I.isVisible;
                }),
                L = A.reduce(function (I, T) {
                  return I.concat(T.slides);
                }, []);
              (Fc = N1(D.L)),
                (Wc = N1(D.L ? D.L.activeSlide : null)),
                (D.O = d.length),
                (D.R = A.reduce(function (I, T) {
                  return I + T.slides.length;
                }, 0)),
                (D.j = A),
                (D.tn = x),
                (D.slides = L),
                (D.rn = D.j.concat(D.slides));
            }
            function N1(s) {
              if (!s) return null;
              var d = s ? s.item : null,
                x = s.nn ? D.tn : D.L.dn;
              if (d) {
                var A = Ai(x, d);
                return A ? A.index() : null;
              }
              return null;
            }
            function P1(s, d) {
              var x,
                A = s - 1,
                L = s;
              do {
                if ((x = d[A] || d[L])) break;
                (A -= 1), (L += 1);
              } while (A >= 0 || L < d.length);
              return x;
            }
            var Yr = function (s) {
              var d = this;
              [].push.call(arguments, k().sectionSelector),
                Lt.apply(this, arguments),
                (this.vn = Z(k().slideSelector, s)),
                (this.dn = Array.from(this.vn).map(function (x) {
                  return new pl(x, d);
                })),
                (this.slides = this.dn.filter(function (x) {
                  return x.isVisible;
                })),
                (this.activeSlide = this.slides.length
                  ? this.slides.filter(function (x) {
                      return x.isActive;
                    })[0] || this.slides[0]
                  : null);
            };
            (Yr.prototype = Lt.prototype), (Yr.prototype.constructor = Yr);
            var pl = function (s, d) {
              (this.parent = d), Lt.call(this, s, k().slideSelector);
            };
            function or(s) {
              return s && !s.item ? new l1(new Yr(s)) : s ? new l1(s) : null;
            }
            function Gc(s) {
              return s ? new x4(s) : null;
            }
            function bn(s, d) {
              var x = (function (A, L) {
                var I = {
                  afterRender: function () {
                    return { section: or(U().L), pn: Gc(U().L.activeSlide) };
                  },
                  onLeave: function () {
                    return {
                      origin: or(L.items.origin),
                      destination: or(L.items.destination),
                      direction: L.direction,
                      trigger: U().D,
                    };
                  },
                  afterLoad: function () {
                    return I.onLeave();
                  },
                  afterSlideLoad: function () {
                    return {
                      section: or(L.items.section),
                      origin: or(L.items.origin),
                      destination: or(L.items.destination),
                      direction: L.direction,
                      trigger: U().D,
                    };
                  },
                  onSlideLeave: function () {
                    return I.afterSlideLoad();
                  },
                  beforeLeave: function () {
                    return I.onLeave();
                  },
                  onScrollOverflow: function () {
                    return {
                      section: or(U().L),
                      pn: Gc(U().L.activeSlide),
                      position: L.position,
                      direction: L.direction,
                    };
                  },
                };
                return I[A]();
              })(s, d);
              return (
                Ct(te(), s, x), k()[s].apply(x[Object.keys(x)[0]], U1(x)) !== !1
              );
            }
            function Yc(s, d) {
              $r("recordHistory", s, d);
            }
            function So(s, d) {
              s || Fr(0), $r("autoScrolling", s, d);
              var x = U().L.item;
              if (k().autoScrolling && !k().scrollBar)
                Re(al, { overflow: "hidden", height: "100%" }),
                  qe(He, "fp-scrollable"),
                  Yc(In().recordHistory, "internal"),
                  Re(te(), {
                    "-ms-touch-action": "none",
                    "touch-action": "none",
                  }),
                  x != null && Fr(x.offsetTop);
              else if (
                (Re(al, { overflow: "visible", height: "initial" }),
                ge(He, "fp-scrollable"),
                Yc(!!k().autoScrolling && In().recordHistory, "internal"),
                Re(te(), { "-ms-touch-action": "", "touch-action": "" }),
                il(te()),
                x != null)
              ) {
                var A = wo(x.offsetTop);
                A.element.scrollTo(0, A.options);
              }
              Ct(te(), "setAutoScrolling", s);
            }
            function Kc() {
              for (var s = Z(re), d = 0; d < s.length; d++)
                Oi(s[d], "internal");
            }
            function O1() {
              var s =
                Z(".fp-auto-height")[0] ||
                (ru() && Z(".fp-auto-height-responsive")[0]);
              k().lazyLoading &&
                s &&
                Z(".fp-section:not(.active)").forEach(function (d) {
                  var x, A, L, I, T;
                  (A = (x = d.getBoundingClientRect()).top),
                    (L = x.bottom),
                    (I = A + 2 < D._ && A > 0),
                    (T = L > 2 && L < D._),
                    (I || T) && xo(d);
                });
            }
            function j4() {
              Ct(gl(this), "click");
            }
            function R1() {
              Xr(Z(ie));
              var s = g.createElement("div");
              s.setAttribute("id", "fp-nav");
              var d = g.createElement("ul");
              s.appendChild(d), Co(s, He);
              var x = Z(ie)[0];
              ge(x, "fp-" + k().navigationPosition),
                k().showActiveTooltip && ge(x, "fp-show-active");
              for (var A = "", L = 0; L < U().j.length; L++) {
                var I = U().j[L],
                  T = "";
                k().anchors.length && (T = I.anchor),
                  (A +=
                    '<li><a href="#' +
                    encodeURI(T) +
                    '"><span class="fp-sr-only">' +
                    h1(I.index(), "Section") +
                    "</span><span></span></a>");
                var Q = k().navigationTooltips[I.index()];
                Q !== void 0 &&
                  Q !== "" &&
                  (A +=
                    '<div class="fp-tooltip fp-' +
                    k().navigationPosition +
                    '">' +
                    Q +
                    "</div>"),
                  (A += "</li>");
              }
              Z("ul", x)[0].innerHTML = A;
              var Y = Z("li", Z(ie)[0])[U().L.index()];
              ge(Z("a", Y), R);
            }
            function A4(s) {
              s.preventDefault && lt(s), X({ D: "verticalNav" });
              var d = Dn(Pe(this, "#fp-nav li"));
              q.ln(x1, { destination: U().j[d] });
            }
            function qc(s, d) {
              var x;
              (x = s),
                k().menu &&
                  k().menu.length &&
                  Z(k().menu).forEach(function (A) {
                    A != null &&
                      (qe(Z(F, A), R),
                      ge(Z('[data-menuanchor="' + x + '"]', A), R));
                  }),
                (function (A, L) {
                  var I = Z(ie)[0];
                  k().navigation &&
                    I != null &&
                    I.style.display !== "none" &&
                    (qe(Z(F, I), R),
                    ge(
                      A ? Z('a[href="#' + A + '"]', I) : Z("a", Z("li", I)[L]),
                      R
                    ));
                })(s, d);
            }
            (pl.prototype = Lt.prototype),
              (pl.prototype.constructor = Yr),
              (m.setRecordHistory = Yc),
              (m.setAutoScrolling = So),
              (m.test.setAutoScrolling = So),
              new Date().getTime();
            var Xc,
              Qc,
              Jc,
              eu,
              Ri,
              tu,
              M4 =
                ((Qc = !0),
                (Jc = new Date().getTime()),
                (eu = !f.fullpage_api),
                function (s, d) {
                  var x = new Date().getTime(),
                    A = s === "wheel" ? k().scrollingSpeed : 100;
                  return (
                    (Qc = eu || x - Jc >= A),
                    (eu = !f.fullpage_api),
                    Qc && ((Xc = d()), (Jc = x)),
                    Xc === void 0 || Xc
                  );
                });
            function T1(s, d) {
              if (nt(k().beforeLeave))
                return M4(U().D, function () {
                  return bn(s, d);
                });
            }
            function Eo(s, d, x) {
              var A = s.item;
              if (A != null) {
                var L,
                  I,
                  T = {
                    element: A,
                    callback: d,
                    isMovementUp: x,
                    dtop: I1(A),
                    yMovement: Rc(U().L, A),
                    anchorLink: s.anchor,
                    sectionIndex: s.index(),
                    activeSlide: s.activeSlide ? s.activeSlide.item : null,
                    leavingSection: U().L.index() + 1,
                    localIsResizing: D.C,
                    items: { origin: U().L, destination: s },
                    direction: null,
                  };
                if (
                  !(
                    (U().L.item == A && !D.C) ||
                    (k().scrollBar &&
                      ar() === T.dtop &&
                      !Ne(A, "fp-auto-height"))
                  )
                ) {
                  if (
                    (T.activeSlide != null &&
                      ((L = et(T.activeSlide, "data-anchor")),
                      (I = Dn(T.activeSlide, null))),
                    !T.localIsResizing)
                  ) {
                    var Q = T.yMovement;
                    if (
                      (x !== void 0 && (Q = x ? "up" : "down"),
                      (T.direction = Q),
                      Ci("dropEffect") && m.dropEffect.onLeave_(T),
                      Ci("waterEffect") && m.waterEffect.onLeave_(T),
                      (nt(k().beforeLeave) && T1("beforeLeave", T) === !1) ||
                        (nt(k().onLeave) && !bn("onLeave", T)))
                    )
                      return;
                  }
                  ae("parallax", "apply", T),
                    ae("cards", "apply", T),
                    ae("dropEffect", "apply", T),
                    ae("waterEffect", "apply", T),
                    k().autoScrolling &&
                      k().continuousVertical &&
                      T.isMovementUp !== void 0 &&
                      ((!T.isMovementUp && T.yMovement == "up") ||
                        (T.isMovementUp && T.yMovement == "down")) &&
                      (T = (function (Y) {
                        X({ J: !0 });
                        var ce = U().L.item;
                        return (
                          Y.isMovementUp
                            ? xl(ce, du(ce, G))
                            : _i(ce, fu(ce, G).reverse()),
                          Fr(U().L.item.offsetTop),
                          Kc(),
                          (Y.hn = ce),
                          (Y.dtop = Y.element.offsetTop),
                          (Y.yMovement = Rc(U().L, Y.element)),
                          (Y.leavingSection = Y.items.origin.index() + 1),
                          (Y.sectionIndex = Y.items.destination.index()),
                          Ct(te(), "onContinuousVertical", Y),
                          Y
                        );
                      })(T)),
                    ae("scrollOverflowReset", "setPrevious", U().L.item),
                    T.localIsResizing || Ic(U().L.item),
                    (Te("dropEffect") && k().dropEffect) ||
                      (ge(A, R), qe(jo(A), R)),
                    En(),
                    xo(A),
                    X({ canScroll: m.test.gn }),
                    Dc(I, L, T.anchorLink),
                    q.ln(j1, T),
                    (function (Y) {
                      var ce = k().scrollingSpeed < 700,
                        we = ce ? 700 : k().scrollingSpeed;
                      if (
                        (X({ Z: "none", scrollY: Math.round(Y.dtop) }),
                        q.ln(b1),
                        k().css3 && k().autoScrolling && !k().scrollBar)
                      )
                        u1(
                          "translate3d(0px, -" +
                            Math.round(Y.dtop) +
                            "px, 0px)",
                          !0
                        ),
                          Te("waterEffect") && Kc(),
                          k().scrollingSpeed
                            ? (clearTimeout(Ri),
                              (Ri = setTimeout(function () {
                                hl(Y), X({ canScroll: !ce || m.test.gn });
                              }, k().scrollingSpeed)))
                            : hl(Y);
                      else {
                        var se = wo(Y.dtop);
                        (m.test.top = -Y.dtop + "px"),
                          clearTimeout(Ri),
                          ll(
                            se.element,
                            se.options,
                            k().scrollingSpeed,
                            function () {
                              k().scrollBar
                                ? (Ri = setTimeout(function () {
                                    hl(Y);
                                  }, 30))
                                : (hl(Y), X({ canScroll: !ce || m.test.gn }));
                            }
                          );
                      }
                      ce &&
                        (clearTimeout(tu),
                        (tu = setTimeout(function () {
                          X({ canScroll: !0 });
                        }, we)));
                    })(T),
                    X({ W: T.anchorLink }),
                    qc(
                      T.anchorLink,
                      (function (Y) {
                        return Y.hn != null
                          ? Y.isMovementUp
                            ? D.O - 1
                            : 0
                          : Y.sectionIndex;
                      })(T)
                    );
                }
              }
            }
            function I1(s) {
              var d = s.offsetHeight,
                x = s.offsetTop,
                A = x,
                L =
                  Te("dragAndMove") && ae("dragAndMove", "isGrabbing")
                    ? ae("dragAndMove", "isScrollingDown")
                    : x > D.X,
                I = A - pt() + d,
                T = k().bigSectionsDestination;
              return (
                d > pt()
                  ? ((L || T) && T !== "bottom") || (A = I)
                  : (L || (D.C && Hi(s) == null)) && (A = I),
                Te("offsetSections") &&
                  (A = m.offsetSections.getSectionPosition_(L, A, s)),
                X({ X: A }),
                A
              );
            }
            function hl(s) {
              X({ N: !1 }),
                (function (d) {
                  d.hn != null &&
                    (d.isMovementUp
                      ? xl(Z(G)[0], d.hn)
                      : _i(Z(G)[U().j.length - 1], d.hn),
                    Fr(U().L.item.offsetTop),
                    (function () {
                      for (var x = Z(re), A = 0; A < x.length; A++)
                        Oi(x[A], "internal");
                    })(),
                    (d.sectionIndex = d.items.destination.index()),
                    (d.leavingSection = d.items.origin.index() + 1),
                    X({ J: !1 }));
                })(s),
                nt(k().afterLoad) && !s.localIsResizing && bn("afterLoad", s),
                ae("parallax", "afterLoad"),
                ae("waterEffect", "afterLoad"),
                ae("dropEffect", "afterLoad"),
                ae("scrollOverflowReset", "reset"),
                ae("resetSliders", "apply", s),
                En(),
                s.localIsResizing || sl(s.element),
                ge(s.element, H),
                qe(jo(s.element), H),
                O1(),
                X({ canScroll: !0 }),
                q.ln($c, s),
                nt(s.callback) && s.callback();
            }
            function nu(s, d) {
              $r("fitToSection", s, d);
            }
            function D1() {
              D.canScroll && (X({ C: !0 }), Eo(D.L), X({ C: !1 }));
            }
            function H1() {
              var s = k().responsive || k().responsiveWidth,
                d = k().responsiveHeight,
                x = s && f.innerWidth < s,
                A = d && f.innerHeight < d;
              s && d ? ml(x || A) : s ? ml(x) : d && ml(A);
            }
            function ml(s) {
              var d = ru();
              s
                ? d ||
                  (So(!1, "internal"),
                  nu(!1, "internal"),
                  vl(Z(ie)),
                  ge(He, j),
                  nt(k().afterResponsive) && k().afterResponsive.call(te(), s),
                  ae("responsiveSlides", "toSections"),
                  Ct(te(), "afterResponsive", s))
                : d &&
                  (So(In().autoScrolling, "internal"),
                  nu(In().autoScrolling, "internal"),
                  su(Z(ie)),
                  qe(He, j),
                  nt(k().afterResponsive) && k().afterResponsive.call(te(), s),
                  ae("responsiveSlides", "toSlides"),
                  Ct(te(), "afterResponsive", s));
            }
            function ru() {
              return Ne(He, j);
            }
            function _1(s) {
              k().verticalCentered &&
                ((!k().scrollOverflow && le.mn(s.item)) ||
                  le.wn(s) ||
                  Ne(s.item, ne) ||
                  ge(s.item, ne));
            }
            (m.moveTo = moveTo),
              (m.getScrollY = function () {
                return D.scrollY;
              }),
              q.un(dn, function () {
                clearTimeout(Ri), clearTimeout(tu);
              }),
              (m.setFitToSection = nu),
              (m.fitToSection = D1),
              (m.setResponsive = ml);
            var ou,
              V1 = null;
            function iu(s) {
              var d = s.item,
                x = s.vn.length,
                A = s.index();
              !U().L && s.isVisible && (ge(d, R), En(), (V1 = U().L.item)),
                Te("offsetSections") && Re(d, { height: ji(d) }),
                k().paddingTop && Re(d, { "padding-top": k().paddingTop }),
                k().paddingBottom &&
                  Re(d, { "padding-bottom": k().paddingBottom }),
                k().sectionsColor[A] !== void 0 &&
                  Re(d, { "background-color": k().sectionsColor[A] }),
                k().anchors[A] !== void 0 &&
                  d.setAttribute("data-anchor", s.anchor),
                x || _1(s);
            }
            function z1() {
              k().scrollOverflow && !k().scrollBar && (le.bn(), le.Sn());
            }
            function k4() {
              q.removeListener(_c, z1), _n("keyup", le.yn);
            }
            (m.getActiveSection = function () {
              return U().L;
            }),
              q.un(Nt, function () {
                q.un(_c, z1),
                  q.un(j1, le.onLeave),
                  q.un(C1, le.onLeave),
                  q.un(Uc, le.afterLoad),
                  q.un($c, le.afterLoad),
                  q.un(dn, k4),
                  qr("keyup", le.yn);
              });
            var au,
              Ti,
              le = {
                Mn: null,
                Tn: !0,
                An: !0,
                xn: null,
                On: null,
                kn: function (s) {
                  if (!D.canScroll) return lt(s), !1;
                },
                En: function (s) {
                  if (
                    !pu() &&
                    k().keyboardScrolling &&
                    [38, 33, 32, 40, 34, 36, 35].indexOf(s.keyCode) > -1 &&
                    !le.An
                  )
                    return lt(s), !1;
                },
                yn: function () {
                  le.Tn = D.canScroll;
                },
                onLeave: function () {
                  clearTimeout(ou), (le.An = !1);
                },
                afterLoad: function () {
                  (le.An = !1),
                    clearTimeout(ou),
                    (ou = setTimeout(function () {
                      le.Tn = D.canScroll;
                    }, 200));
                },
                Rn: function () {
                  g.activeElement === this.Mn && (this.Mn.blur(), (le.An = !1));
                },
                Sn: function () {
                  if (k().scrollOverflow && le.Tn) {
                    le.Rn();
                    var s = le.jn(U().L.item);
                    !s ||
                      C ||
                      y ||
                      ((this.Mn = s),
                      requestAnimationFrame(function () {
                        s.focus(), (le.An = !0);
                      })),
                      (le.Tn = !1);
                  }
                },
                bn: function () {
                  k().scrollOverflowMacStyle && !E && ge(He, "fp-scroll-mac"),
                    U().rn.forEach(function (s) {
                      if (
                        !(
                          (s.slides && s.slides.length) ||
                          (Ne(s.item, "fp-auto-height-responsive") && ru())
                        )
                      ) {
                        var d,
                          x = Br(s.item),
                          A = le.mn(s.item),
                          L = (d = s).nn ? d : d.parent;
                        if (M) {
                          var I = A ? "addClass" : "removeClass";
                          h[I](L.item, Se), h[I](s.item, Se);
                        } else ge(L.item, Se), ge(s.item, Se);
                        s.q || (le.Ln(x), le.zn(x)), (s.q = !0);
                      }
                    });
                },
                zn: function (s) {
                  le.jn(s).addEventListener("scroll", le.Dn),
                    s.addEventListener("wheel", le.kn, { passive: !1 }),
                    s.addEventListener("keydown", le.En, { passive: !1 });
                },
                Ln: function (s) {
                  var d = document.createElement("div");
                  (d.className = ye),
                    uu(s, d),
                    d.setAttribute("tabindex", "-1");
                },
                Nn: function (s) {
                  var d = Z(he, s)[0];
                  d && (wl(d), s.removeAttribute("tabindex"));
                },
                jn: function (s) {
                  var d = Br(s);
                  return Z(he, d)[0] || d;
                },
                q: function (s) {
                  return Ne(s, ye) || Z(he, s)[0] != null;
                },
                wn: function (s) {
                  return s.nn && s.activeSlide ? s.activeSlide.q : s.q;
                },
                mn: function (s) {
                  return le.jn(s).scrollHeight > f.innerHeight;
                },
                isScrolled: function (s, d) {
                  if (!D.canScroll) return !1;
                  if (k().scrollBar) return !0;
                  var x = le.jn(d);
                  if (
                    !k().scrollOverflow ||
                    !Ne(x, ye) ||
                    Ne(d, "fp-noscroll") ||
                    Ne(Br(d), "fp-noscroll")
                  )
                    return !0;
                  var A = M ? 1 : 0,
                    L = x.scrollTop,
                    I = s === "up" && L <= 0,
                    T =
                      s === "down" &&
                      x.scrollHeight <= Math.ceil(x.offsetHeight + L) + A,
                    Q = I || T;
                  return Q || (this.xn = new Date().getTime()), Q;
                },
                Pn: function () {
                  this.On = new Date().getTime();
                  var s = this.On - le.xn,
                    d = (C || y) && D.G,
                    x = D.Y && s > 600;
                  return (d && s > 400) || x;
                },
                Dn:
                  ((au = 0),
                  function (s) {
                    var d = s.target.scrollTop,
                      x = D.Z !== "none" ? D.Z : au < d ? "down" : "up";
                    (au = d),
                      nt(k().onScrollOverflow) &&
                        bn("onScrollOverflow", { position: d, direction: x }),
                      Ne(s.target, ye) &&
                        D.canScroll &&
                        le.isScrolled(x, s.target) &&
                        le.Pn() &&
                        le.mn(U().L.item) &&
                        q.ln(v1, { direction: x });
                  }),
              };
            function Ft(s, d) {
              f.console && f.console[s] && f.console[s]("fullPage: " + d);
            }
            function lu(s) {
              return f.getComputedStyle(s).display !== "none";
            }
            function Ii(s) {
              return Array.from(s).filter(function (d) {
                return lu(d);
              });
            }
            function Z(s, d) {
              return (d = arguments.length > 1 ? d : document)
                ? d.querySelectorAll(s)
                : null;
            }
            function Kr(s) {
              s = s || {};
              for (var d = 1, x = arguments.length; d < x; ++d) {
                var A = arguments[d];
                if (A)
                  for (var L in A)
                    A.hasOwnProperty(L) &&
                      L != "__proto__" &&
                      L != "constructor" &&
                      (Object.prototype.toString.call(A[L]) !==
                      "[object Object]"
                        ? (s[L] = A[L])
                        : (s[L] = Kr(s[L], A[L])));
              }
              return s;
            }
            function Ne(s, d) {
              return s != null && s.classList.contains(d);
            }
            function pt() {
              return "innerHeight" in f
                ? f.innerHeight
                : g.documentElement.offsetHeight;
            }
            function Di() {
              return f.innerWidth;
            }
            function Re(s, d) {
              var x;
              for (x in ((s = ir(s)), d))
                if (d.hasOwnProperty(x) && x !== null)
                  for (var A = 0; A < s.length; A++) s[A].style[x] = d[x];
              return s;
            }
            function gl(s, d) {
              if (!s) return null;
              if (d == null) return s.previousElementSibling;
              var x = gl(s);
              return x && rt(x, d) ? x : null;
            }
            function Hi(s, d) {
              if (!s) return null;
              if (d == null) return s.nextElementSibling;
              var x = Hi(s);
              return x && rt(x, d) ? x : null;
            }
            function Z1(s) {
              return s[s.length - 1];
            }
            function Dn(s, d) {
              s = bo(s) ? s[0] : s;
              for (
                var x =
                    d != null ? Z(d, s.parentNode) : s.parentNode.childNodes,
                  A = 0,
                  L = 0;
                L < x.length;
                L++
              ) {
                if (x[L] == s) return A;
                x[L].nodeType == 1 && A++;
              }
              return -1;
            }
            function ir(s) {
              return bo(s) ? s : [s];
            }
            function vl(s) {
              s = ir(s);
              for (var d = 0; d < s.length; d++) s[d].style.display = "none";
              return s;
            }
            function su(s) {
              s = ir(s);
              for (var d = 0; d < s.length; d++) s[d].style.display = "block";
              return s;
            }
            function bo(s) {
              return (
                Object.prototype.toString.call(s) === "[object Array]" ||
                Object.prototype.toString.call(s) === "[object NodeList]"
              );
            }
            function ge(s, d) {
              s = ir(s);
              for (var x = 0; x < s.length; x++) s[x].classList.add(d);
              return s;
            }
            function qe(s, d) {
              s = ir(s);
              for (var x = d.split(" "), A = 0; A < x.length; A++) {
                d = x[A];
                for (var L = 0; L < s.length; L++) s[L].classList.remove(d);
              }
              return s;
            }
            function Co(s, d) {
              d.appendChild(s);
            }
            function cu(s, d, x) {
              var A;
              d = d || g.createElement("div");
              for (var L = 0; L < s.length; L++) {
                var I = s[L];
                ((x && !L) || !x) &&
                  ((A = d.cloneNode(!0)), I.parentNode.insertBefore(A, I)),
                  A.appendChild(I);
              }
              return s;
            }
            function yl(s, d) {
              cu(s, d, !0);
            }
            function uu(s, d) {
              for (
                typeof d == "string" && (d = lr(d)), s.appendChild(d);
                s.firstChild !== d;

              )
                d.appendChild(s.firstChild);
            }
            function wl(s) {
              for (var d = g.createDocumentFragment(); s.firstChild; )
                d.appendChild(s.firstChild);
              s.parentNode.replaceChild(d, s);
            }
            function Pe(s, d) {
              return s && s.nodeType === 1
                ? rt(s, d)
                  ? s
                  : Pe(s.parentNode, d)
                : null;
            }
            function _i(s, d) {
              Sl(s, s.nextSibling, d);
            }
            function xl(s, d) {
              Sl(s, s, d);
            }
            function Sl(s, d, x) {
              bo(x) || (typeof x == "string" && (x = lr(x)), (x = [x]));
              for (var A = 0; A < x.length; A++)
                s.parentNode.insertBefore(x[A], d);
            }
            function ar() {
              var s = g.documentElement;
              return (f.pageYOffset || s.scrollTop) - (s.clientTop || 0);
            }
            function jo(s) {
              return Array.prototype.filter.call(
                s.parentNode.children,
                function (d) {
                  return d !== s;
                }
              );
            }
            function lt(s) {
              s.preventDefault();
            }
            function et(s, d) {
              return s.getAttribute(d);
            }
            function qr(s, d, x) {
              g.addEventListener(s, d, x === "undefined" ? null : x);
            }
            function Hn(s, d, x) {
              f.addEventListener(s, d, x === "undefined" ? null : x);
            }
            function _n(s, d, x) {
              g.removeEventListener(s, d, x === "undefined" ? null : x);
            }
            function Ao(s, d, x) {
              f.removeEventListener(s, d, x === "undefined" ? null : x);
            }
            function nt(s) {
              if (typeof s == "function") return !0;
              var d = Object.prototype.toString.call(s);
              return (
                d === "[object Function]" || d === "[object GeneratorFunction]"
              );
            }
            function Ct(s, d, x) {
              var A;
              (x = x === void 0 ? {} : x),
                typeof f.CustomEvent == "function"
                  ? (A = new CustomEvent(d, { detail: x }))
                  : (A = g.createEvent("CustomEvent")).initCustomEvent(
                      d,
                      !0,
                      !0,
                      x
                    ),
                s.dispatchEvent(A);
            }
            function rt(s, d) {
              return (
                s.matches ||
                s.Hn ||
                s.msMatchesSelector ||
                s.mozMatchesSelector ||
                s.webkitMatchesSelector ||
                s.oMatchesSelector
              ).call(s, d);
            }
            function El(s, d) {
              if (typeof d == "boolean")
                for (var x = 0; x < s.length; x++)
                  s[x].style.display = d ? "block" : "none";
              return s;
            }
            function lr(s) {
              var d = g.createElement("div");
              return (d.innerHTML = s.trim()), d.firstChild;
            }
            function Xr(s) {
              s = ir(s);
              for (var d = 0; d < s.length; d++) {
                var x = s[d];
                x && x.parentElement && x.parentNode.removeChild(x);
              }
            }
            function $1(s, d) {
              Array.prototype.filter.call(s, d);
            }
            function bl(s, d, x) {
              for (var A = s[x], L = []; A; )
                (rt(A, d) || d == null) && L.push(A), (A = A[x]);
              return L;
            }
            function du(s, d) {
              return bl(s, d, "nextElementSibling");
            }
            function fu(s, d) {
              return bl(s, d, "previousElementSibling");
            }
            function U1(s) {
              return Object.keys(s).map(function (d) {
                return s[d];
              });
            }
            function Cn(s) {
              return s[s.length - 1];
            }
            function Vi(s, d) {
              for (
                var x = 0, A = s.slice(Math.max(s.length - d, 1)), L = 0;
                L < A.length;
                L++
              )
                x += A[L];
              return Math.ceil(x / d);
            }
            function Cl(s, d) {
              s.setAttribute(d, et(s, "data-" + d)),
                s.removeAttribute("data-" + d);
            }
            function B1(s, d) {
              var x = [s];
              do (s = s.parentNode), x.push(s);
              while (!rt(s, d));
              return x;
            }
            function pu() {
              var s = g.activeElement;
              return (
                rt(s, "textarea") ||
                rt(s, "input") ||
                rt(s, "select") ||
                et(s, "contentEditable") == "true" ||
                et(s, "contentEditable") == ""
              );
            }
            function F1(s) {
              q.ln(cl, { e: s, target: s.target });
            }
            function L4() {
              ["click", "touchstart"].forEach(function (s) {
                _n(s, F1, { passive: !1 });
              });
            }
            function N4() {
              X({ U: !0 });
            }
            function W1() {
              ge(Z(k().sectionSelector, te()), K),
                ge(Z(k().slideSelector, te()), pe);
            }
            function hu(s) {
              var d = s.slides.length,
                x = s.vn,
                A = s.slides,
                L = 100 * d,
                I = 100 / d;
              if (!Z(_, s.item)[0]) {
                var T = g.createElement("div");
                (T.className = V), yl(x, T);
                var Q = g.createElement("div");
                (Q.className = z), yl(x, Q);
              }
              Re(Z(W, s.item), { width: L + "%" }),
                d > 1 &&
                  (k().controlArrows &&
                    (function (ce) {
                      var we = ce.item,
                        se = [
                          lr(k().controlArrowsHTML[0]),
                          lr(k().controlArrowsHTML[1]),
                        ];
                      _i(Z(_, we)[0], se),
                        ge(se, ke),
                        ge(se[0], it),
                        ge(se[1], "fp-next"),
                        k().controlArrowColor !== "#fff" &&
                          (Re(Z(J, we), {
                            "border-color":
                              "transparent transparent transparent " +
                              k().controlArrowColor,
                          }),
                          Re(Z(je, we), {
                            "border-color":
                              "transparent " +
                              k().controlArrowColor +
                              " transparent transparent",
                          })),
                        k().loopHorizontal || vl(Z(je, we));
                    })(s),
                  k().slidesNavigation &&
                    (function (ce) {
                      var we = ce.item,
                        se = ce.slides.length;
                      Co(lr('<div class="fp-slidesNav"><ul></ul></div>'), we);
                      var Ae = Z(fe, we)[0];
                      ge(Ae, "fp-" + k().slidesNavPosition);
                      for (var Oe = 0; Oe < se; Oe++)
                        Co(
                          lr(
                            '<li><a href="#"><span class="fp-sr-only">' +
                              h1(Oe, "Slide", Z(ve, we)[Oe]) +
                              "</span><span></span></a></li>"
                          ),
                          Z("ul", Ae)[0]
                        );
                      Re(Ae, { "margin-left": "-" + Ae.innerWidth / 2 + "px" });
                      var ht = ce.activeSlide ? ce.activeSlide.index() : 0;
                      ge(Z("a", Z("li", Ae)[ht]), R);
                    })(s)),
                A.forEach(function (ce) {
                  Re(ce.item, { width: I + "%" }),
                    k().verticalCentered && _1(ce);
                });
              var Y = Te("responsiveSlides") ? null : s.activeSlide || null;
              Y != null &&
              D.L &&
              (D.L.index() !== 0 || (D.L.index() === 0 && Y.index() !== 0))
                ? (Oi(Y.item, "internal"), ge(Y.item, "fp-initial"))
                : ge(x[0], R);
            }
            (window.fp_utils = Object.assign(f.fp_utils || {}, {
              $: Z,
              deepExtend: Kr,
              hasClass: Ne,
              getWindowHeight: pt,
              css: Re,
              prev: gl,
              next: Hi,
              last: Z1,
              index: Dn,
              getList: ir,
              hide: vl,
              show: su,
              isArrayOrList: bo,
              addClass: ge,
              removeClass: qe,
              appendTo: Co,
              wrap: cu,
              wrapAll: yl,
              wrapInner: uu,
              unwrap: wl,
              closest: Pe,
              after: _i,
              before: xl,
              insertBefore: Sl,
              getScrollTop: ar,
              siblings: jo,
              preventDefault: lt,
              isFunction: nt,
              trigger: Ct,
              matches: rt,
              toggle: El,
              createElementFromHTML: lr,
              remove: Xr,
              filter: $1,
              untilAll: bl,
              nextAll: du,
              prevAll: fu,
              showError: Ft,
              scrollOverflowHandler: le,
            })),
              q.un(Nt, function () {
                ["click", "touchstart"].forEach(function (s) {
                  qr(s, F1, { passive: !1 });
                }),
                  Hn("focus", N4),
                  q.un(dn, L4);
              });
            var G1 = {
              attributes: !1,
              subtree: !0,
              childList: !0,
              characterData: !0,
            };
            function Y1() {
              return (
                ae("responsiveSlides", "isResponsiveSlidesChanging") ||
                Ii(Z(k().slideSelector, te())).length !== U().R
              );
            }
            function mu(s) {
              var d = Y1();
              (Y1() ||
                ae("responsiveSlides", "isResponsiveSlidesChanging") ||
                Ii(Z(k().sectionSelector, te())).length !== U().O) &&
                !D.J &&
                (k().observer && Ti && Ti.disconnect(),
                fl(),
                En(),
                (k().anchors = []),
                Xr(Z(ie)),
                ae("responsiveSlides", "isResponsiveSlidesChanging") || W1(),
                tl(),
                k().navigation && R1(),
                d && (Xr(Z(fe)), Xr(Z(Je))),
                U().j.forEach(function (x) {
                  x.slides.length ? d && hu(x) : iu(x);
                })),
                k().observer && Ti && Z(b)[0] && Ti.observe(Z(b)[0], G1);
            }
            q.un(Nt, function () {
              var s, d, x;
              k().observer &&
                "MutationObserver" in window &&
                Z(b)[0] &&
                ((s = Z(b)[0]),
                (d = G1),
                (x = new MutationObserver(mu)).observe(s, d),
                (Ti = x)),
                q.un(g1, mu);
            }),
              (m.render = mu);
            var P4 = (function () {
              var s = !1;
              try {
                var d = Object.defineProperty({}, "passive", {
                  get: function () {
                    s = !0;
                  },
                });
                Hn("testPassive", null, d), Ao("testPassive", null, d);
              } catch {}
              return function () {
                return s;
              };
            })();
            function K1() {
              return !!P4() && { passive: !1 };
            }
            var q1,
              X1,
              gu,
              sr,
              jl =
                ((gu = new Date().getTime()),
                (sr = []),
                {
                  Cn: function (s) {
                    var d =
                        (s = s || f.event).wheelDelta || -s.deltaY || -s.detail,
                      x = Math.max(-1, Math.min(1, d)),
                      A = s.wheelDeltaX !== void 0 || s.deltaX !== void 0;
                    q1 =
                      Math.abs(s.wheelDeltaX) < Math.abs(s.wheelDelta) ||
                      Math.abs(s.deltaX) < Math.abs(s.deltaY) ||
                      !A;
                    var L = new Date().getTime();
                    (X1 = x < 0 ? "down" : "up"),
                      sr.length > 149 && sr.shift(),
                      sr.push(Math.abs(d));
                    var I = L - gu;
                    (gu = L), I > 200 && (sr = []);
                  },
                  In: function () {
                    var s = Vi(sr, 10) >= Vi(sr, 70);
                    return !!sr.length && s && q1;
                  },
                  Wn: function () {
                    return X1;
                  },
                });
            function O4() {
              var s = k().css3
                  ? ar() + pt()
                  : Cn(U().j).item.offsetTop + Cn(U().j).item.offsetHeight,
                d = wo(s);
              (m.test.top = -s + "px"),
                X({ canScroll: !1 }),
                ll(d.element, d.options, k().scrollingSpeed, function () {
                  setTimeout(function () {
                    X({ N: !0 }), X({ canScroll: !0 });
                  }, 30);
                });
            }
            function R4() {
              te().getBoundingClientRect().bottom >= 0 && Q1();
            }
            function Q1() {
              var s = wo(Cn(U().j).item.offsetTop);
              X({ canScroll: !1 }),
                ll(s.element, s.options, k().scrollingSpeed, function () {
                  X({ canScroll: !0 }), X({ N: !1 }), X({ Fn: !1 });
                });
            }
            var vu,
              yu,
              wu,
              J1 =
                ((vu = !1),
                (yu = {}),
                (wu = {}),
                function (s, d, x) {
                  switch (s) {
                    case "set":
                      (yu[d] = new Date().getTime()), (wu[d] = x);
                      break;
                    case "isNewKeyframe":
                      var A = new Date().getTime();
                      vu = A - yu[d] > wu[d];
                  }
                  return vu;
                });
            function zi() {
              var s = U().L.next();
              s ||
                (!k().loopBottom && !k().continuousVertical) ||
                (s = U().j[0]),
                s != null
                  ? Eo(s, null, !1)
                  : te().scrollHeight < He.scrollHeight &&
                    k().scrollBar &&
                    k().Vn &&
                    q.ln(E1);
            }
            function Mo() {
              var s = U().L.prev();
              s || (!k().loopTop && !k().continuousVertical) || (s = Cn(U().j)),
                s != null && Eo(s, null, !0);
            }
            (m.moveSectionDown = zi), (m.moveSectionUp = Mo);
            var Al = 0;
            function ep(s) {
              k().autoScrolling &&
                (D.canScroll &&
                  (s.pageY < Al && ft().m.up
                    ? Mo()
                    : s.pageY > Al && ft().m.down && zi()),
                (Al = s.pageY));
            }
            function tp(s) {
              if (ft().m[s]) {
                var d = s === "down" ? zi : Mo;
                Te("scrollHorizontally") &&
                  (d = ae("scrollHorizontally", "getScrollSection", {
                    type: s,
                    scrollSection: d,
                  })),
                  k().scrollOverflow && le.wn(U().L)
                    ? le.isScrolled(s, U().L.item) && le.Pn() && d()
                    : d();
              }
            }
            var Ml,
              xu,
              ko,
              kl = 0,
              Zi = 0,
              Ll = 0,
              $i = 0,
              Nl = rp(),
              nn = {
                Zn: "ontouchmove" in window ? "touchmove" : Nl ? Nl.move : null,
                Bn:
                  "ontouchstart" in window ? "touchstart" : Nl ? Nl.down : null,
              };
            function Ui(s) {
              var d = Pe(s.target, G) || U().L.item,
                x = le.wn(U().L);
              if (Bi(s)) {
                X({ G: !0, Y: !1 }),
                  k().autoScrolling &&
                    ((x && !D.canScroll) || k().scrollBar) &&
                    lt(s);
                var A = Su(s);
                (Ll = A.y), ($i = A.x);
                var L =
                    Math.abs(kl - Ll) >
                    (f.innerHeight / 100) * k().touchSensitivity,
                  I = Math.abs(Zi - $i) > (Di() / 100) * k().touchSensitivity,
                  T = Z(_, d).length && Math.abs(Zi - $i) > Math.abs(kl - Ll),
                  Q = kl > Ll ? "down" : "up";
                X({ Z: T ? (Zi > $i ? "right" : "left") : Q }),
                  T
                    ? !D.H &&
                      I &&
                      (Zi > $i
                        ? ft().m.right && q.ln(zc, { section: d })
                        : ft().m.left && q.ln(Vc, { section: d }))
                    : k().autoScrolling && D.canScroll && L && tp(Q);
              }
            }
            function Bi(s) {
              return s.pointerType === void 0 || s.pointerType != "mouse";
            }
            function Pl(s) {
              if ((k().fitToSection && X({ V: !1 }), Bi(s))) {
                var d = Su(s);
                (kl = d.y), (Zi = d.x);
              }
              Hn("touchend", np);
            }
            function np() {
              Ao("touchend", np), X({ G: !1 });
            }
            function Su(s) {
              var d = {};
              return (
                (d.y =
                  s.pageY !== void 0 && (s.pageY || s.pageX)
                    ? s.pageY
                    : s.touches[0].pageY),
                (d.x =
                  s.pageX !== void 0 && (s.pageY || s.pageX)
                    ? s.pageX
                    : s.touches[0].pageX),
                y &&
                  Bi(s) &&
                  k().scrollBar &&
                  s.touches !== void 0 &&
                  ((d.y = s.touches[0].pageY), (d.x = s.touches[0].pageX)),
                d
              );
            }
            function rp() {
              var s;
              return (
                f.PointerEvent &&
                  (s = { down: "pointerdown", move: "pointermove" }),
                s
              );
            }
            function Eu(s) {
              k().autoScrolling && Bi(s) && ft().m.up && (D.canScroll || lt(s));
            }
            function op(s, d) {
              var x = d ?? U().L.item,
                A = Ai(D.j, x),
                L = Z(_, x)[0];
              if (!(L == null || Ur() || D.H || A.slides.length < 2)) {
                var I = A.activeSlide,
                  T = s === "left" ? I.prev() : I.next();
                if (!T) {
                  if (!k().loopHorizontal) return;
                  T = s === "left" ? Cn(A.slides) : A.slides[0];
                }
                X({ H: !m.test.gn }), Gr(L, T.item, s);
              }
            }
            function bu(s) {
              op("left", s);
            }
            function Cu(s) {
              op("right", s);
            }
            function ju(s) {
              var d = U().j.filter(function (A) {
                return A.anchor === s;
              })[0];
              if (!d) {
                var x = s !== void 0 ? s - 1 : 0;
                d = U().j[x];
              }
              return d;
            }
            function ip(s) {
              s != null && Gr(Pe(s, _), s);
            }
            function Au(s, d) {
              var x = ju(s);
              if (x != null) {
                var A = (function (L, I) {
                  var T = I.slides.filter(function (Q) {
                    return Q.anchor === L;
                  })[0];
                  return (
                    T == null &&
                      ((L = L !== void 0 ? L : 0), (T = I.slides[L])),
                    T ? T.item : null
                  );
                })(d, x);
                (x.anchor && x.anchor === D.W) || Ne(x.item, R)
                  ? ip(A)
                  : Eo(x, function () {
                      ip(A);
                    });
              }
            }
            function Fi(s, d) {
              var x = ju(s);
              d !== void 0 ? Au(s, d) : x != null && Eo(x);
            }
            function T4() {
              clearTimeout(xu), _n("keydown", ap), _n("keyup", lp);
            }
            function ap(s) {
              clearTimeout(xu);
              var d = s.keyCode,
                x = [37, 39].indexOf(d) > -1,
                A = k().autoScrolling || k().fitToSection || x;
              d === 9
                ? (function (L) {
                    var I = L.shiftKey,
                      T = g.activeElement,
                      Q = Mu(Br(U().L.item));
                    function Y(st) {
                      return lt(st), Q[0] ? Q[0].focus() : null;
                    }
                    if (D.canScroll) {
                      if (
                        !(function (st) {
                          var Ze = Mu(g),
                            $e = Ze.indexOf(g.activeElement),
                            Ee = Ze[st.shiftKey ? $e - 1 : $e + 1],
                            mt = Pe(Ee, ve),
                            yt = Pe(Ee, G);
                          return !mt && !yt;
                        })(L)
                      ) {
                        T
                          ? Pe(
                              T,
                              ".fp-section.active,.fp-section.active .fp-slide.active"
                            ) == null && (T = Y(L))
                          : Y(L);
                        var ce = T == Q[0],
                          we = T == Q[Q.length - 1],
                          se = I && ce;
                        if (se || (!I && we)) {
                          lt(L);
                          var Ae = (function (st) {
                              var Ze,
                                $e = st ? "prevPanel" : "nextPanel",
                                Ee = [],
                                mt = s1(
                                  (D.L && D.L.activeSlide
                                    ? D.L.activeSlide
                                    : D.L)[$e]()
                                );
                              do
                                (Ee = Mu(mt.item)).length &&
                                  (Ze = {
                                    Gn: mt,
                                    Yn: Ee[st ? Ee.length - 1 : 0],
                                  }),
                                  (mt = s1(mt[$e]()));
                              while (mt && Ee.length === 0);
                              return Ze;
                            })(se),
                            Oe = Ae ? Ae.Gn : null;
                          if (Oe) {
                            var ht = Oe.nn ? Oe : Oe.parent;
                            q.ln(Zc, {
                              Un: ht.index() + 1,
                              slideAnchor: Oe.nn ? 0 : Oe.index(),
                            }),
                              (ko = Ae.Yn),
                              lt(L);
                          }
                        }
                      }
                    } else lt(L);
                  })(s)
                : !pu() &&
                  k().keyboardScrolling &&
                  A &&
                  ((Ml = s.ctrlKey),
                  (xu = setTimeout(function () {
                    (function (L) {
                      var I = L.shiftKey,
                        T = g.activeElement,
                        Q = rt(T, "video") || rt(T, "audio"),
                        Y = le.isScrolled("up", U().L.item),
                        ce = le.isScrolled("down", U().L.item),
                        we = [37, 39].indexOf(L.keyCode) > -1;
                      if (
                        ((function (se) {
                          (function (Ae) {
                            return (
                              [40, 38, 32, 33, 34].indexOf(Ae.keyCode) > -1 &&
                              !D.N
                            );
                          })(se) &&
                            !Pe(se.target, he) &&
                            se.preventDefault();
                        })(L),
                        D.canScroll || we)
                      )
                        switch ((X({ D: "keydown" }), L.keyCode)) {
                          case 38:
                          case 33:
                            ft().k.up && Y
                              ? D.N
                                ? q.ln(y1, { e: L })
                                : Mo()
                              : le.Sn();
                            break;
                          case 32:
                            if (I && ft().k.up && !Q && Y) {
                              Mo();
                              break;
                            }
                          case 40:
                          case 34:
                            if (ft().k.down && ce) {
                              if (D.N) return;
                              (L.keyCode === 32 && Q) || zi();
                            } else le.Sn();
                            break;
                          case 36:
                            ft().k.up && Fi(1);
                            break;
                          case 35:
                            ft().k.down && Fi(U().j.length);
                            break;
                          case 37:
                            ft().k.left && bu();
                            break;
                          case 39:
                            ft().k.right && Cu();
                        }
                    })(s);
                  }, 0)));
            }
            function lp(s) {
              D.U && (Ml = s.ctrlKey);
            }
            function I4() {
              X({ U: !1 }), (Ml = !1);
            }
            function D4(s) {
              sp();
            }
            function H4(s) {
              (Pe(ko, ve) && !Pe(ko, re)) || sp();
            }
            function sp() {
              ko && (ko.focus(), (ko = null));
            }
            function Mu(s) {
              return [].slice
                .call(
                  Z(
                    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], summary:not([disabled]), [contenteditable]',
                    s
                  )
                )
                .filter(function (d) {
                  return et(d, "tabindex") !== "-1" && d.offsetParent !== null;
                });
            }
            (m.moveSlideLeft = bu),
              (m.moveSlideRight = Cu),
              (m.moveTo = Fi),
              q.un(Nt, function () {
                Hn("blur", I4),
                  qr("keydown", ap),
                  qr("keyup", lp),
                  q.un(dn, T4),
                  q.un(Uc, D4),
                  q.un($c, H4);
              });
            var cp = new Date().getTime(),
              Lo = [];
            function ku(s) {
              s
                ? ((function () {
                    var d,
                      x = "";
                    f.addEventListener
                      ? (d = "addEventListener")
                      : ((d = "attachEvent"), (x = "on"));
                    var A =
                        "onwheel" in g.createElement("div")
                          ? "wheel"
                          : g.onmousewheel !== void 0
                          ? "mousewheel"
                          : "DOMMouseScroll",
                      L = K1();
                    A == "DOMMouseScroll"
                      ? g[d](x + "MozMousePixelScroll", No, L)
                      : g[d](x + A, No, L);
                  })(),
                  te().addEventListener("mousedown", up),
                  te().addEventListener("mouseup", dp))
                : (g.addEventListener
                    ? (_n("mousewheel", No, !1),
                      _n("wheel", No, !1),
                      _n("MozMousePixelScroll", No, !1))
                    : g.detachEvent("onmousewheel", No),
                  te().removeEventListener("mousedown", up),
                  te().removeEventListener("mouseup", dp));
            }
            function No(s) {
              var d = new Date().getTime(),
                x = Ne(Z(".fp-completely")[0], "fp-normal-scroll"),
                A = (function (we, se) {
                  new Date().getTime();
                  var Ae =
                      U().N &&
                      we.getBoundingClientRect().bottom >= 0 &&
                      jl.Wn() === "up",
                    Oe = U().Fn;
                  if (Oe) return lt(se), !1;
                  if (U().N) {
                    if (Ae) {
                      var ht;
                      if (
                        !(
                          Oe ||
                          (J1("isNewKeyframe", "beyondFullpage") && jl.In())
                        )
                      )
                        return (
                          (ht = wo(
                            Cn(U().j).item.offsetTop +
                              Cn(U().j).item.offsetHeight
                          )).element.scrollTo(0, ht.options),
                          X({ Fn: !1 }),
                          lt(se),
                          !1
                        );
                      if (jl.In())
                        return (
                          (Ae = !1),
                          X({ Fn: !0 }),
                          X({ D: "wheel" }),
                          Q1(),
                          lt(se),
                          !1
                        );
                    } else J1("set", "beyondFullpage", 1e3);
                    if (!Oe && !Ae) return !0;
                  }
                })(te(), s);
              if (
                (D.Y || X({ G: !1, Y: !0, Z: "none" }),
                !ft().m.down && !ft().m.up)
              )
                return lt(s), !1;
              if (A) return !0;
              if (A === !1) return lt(s), !1;
              if (k().autoScrolling && !Ml && !x) {
                var L = (s = s || f.event).wheelDelta || -s.deltaY || -s.detail,
                  I = Math.max(-1, Math.min(1, L)),
                  T = s.wheelDeltaX !== void 0 || s.deltaX !== void 0,
                  Q =
                    Math.abs(s.wheelDeltaX) < Math.abs(s.wheelDelta) ||
                    Math.abs(s.deltaX) < Math.abs(s.deltaY) ||
                    !T,
                  Y = I < 0 ? "down" : I > 0 ? "up" : "none";
                Lo.length > 149 && Lo.shift(),
                  Lo.push(Math.abs(L)),
                  k().scrollBar && lt(s);
                var ce = d - cp;
                return (
                  (cp = d),
                  ce > 200 && (Lo = []),
                  X({ B: Y }),
                  D.canScroll &&
                    !Ur() &&
                    Vi(Lo, 10) >= Vi(Lo, 70) &&
                    Q &&
                    (X({ D: "wheel" }), tp(I < 0 ? "down" : "up")),
                  !1
                );
              }
              k().fitToSection && X({ V: !1 });
            }
            function up(s) {
              var d;
              s.which == 2 &&
                ((d = s.pageY),
                (Al = d),
                te().addEventListener("mousemove", ep));
            }
            function dp(s) {
              s.which == 2 && te().removeEventListener("mousemove", ep);
            }
            function Wi(s) {
              s
                ? (ku(!0),
                  (function () {
                    if (
                      nn.Zn &&
                      (C || y) &&
                      (!Te("dragAndMove") || k().dragAndMove === "mouseonly")
                    ) {
                      k().autoScrolling &&
                        (He.removeEventListener(nn.Zn, Eu, { passive: !1 }),
                        He.addEventListener(nn.Zn, Eu, { passive: !1 }));
                      var d = k().touchWrapper;
                      d.removeEventListener(nn.Bn, Pl),
                        d.removeEventListener(nn.Zn, Ui, { passive: !1 }),
                        d.addEventListener(nn.Bn, Pl),
                        d.addEventListener(nn.Zn, Ui, { passive: !1 });
                    }
                  })())
                : (ku(!1),
                  (function () {
                    if (nn.Zn && (C || y)) {
                      k().autoScrolling &&
                        (He.removeEventListener(nn.Zn, Ui, { passive: !1 }),
                        He.removeEventListener(nn.Zn, Eu, { passive: !1 }));
                      var d = k().touchWrapper;
                      d.removeEventListener(nn.Bn, Pl),
                        d.removeEventListener(nn.Zn, Ui, { passive: !1 });
                    }
                  })());
            }
            m.setMouseWheelScrolling = ku;
            var Lu = !0;
            function _4() {
              ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(
                function (s) {
                  _n(s, pp, !0);
                }
              );
            }
            function fp(s, d) {
              (document["fp_" + s] = d), qr(s, pp, !0);
            }
            function pp(s) {
              var d = s.type,
                x = !1,
                A =
                  d === "mouseleave"
                    ? s.toElement || s.relatedTarget
                    : s.target;
              A != document && A
                ? (d === "touchend" &&
                    ((Lu = !1),
                    setTimeout(function () {
                      Lu = !0;
                    }, 800)),
                  (d !== "mouseenter" || Lu) &&
                    (k()
                      .normalScrollElements.split(",")
                      .forEach(function (L) {
                        if (!x) {
                          var I = rt(A, L),
                            T = Pe(A, L);
                          (I || T) &&
                            (m.shared.Xn || Wi(!1),
                            (m.shared.Xn = !0),
                            (x = !0));
                        }
                      }),
                    !x && m.shared.Xn && (Wi(!0), (m.shared.Xn = !1))))
                : Wi(!0);
            }
            function Ol(s, d) {
              ki(0, "internal"), Fi(s, d), ki(In().scrollingSpeed, "internal");
            }
            q.un(Nt, function () {
              k().normalScrollElements &&
                (["mouseenter", "touchstart"].forEach(function (s) {
                  fp(s, !1);
                }),
                ["mouseleave", "touchend"].forEach(function (s) {
                  fp(s, !0);
                })),
                q.un(dn, _4);
            }),
              (m.silentMoveTo = Ol);
            var Nu,
              hp,
              Pu = pt(),
              mp = Di(),
              Ou = !1;
            function V4() {
              clearTimeout(Nu), clearTimeout(hp), Ao("resize", Ru);
            }
            function Ru() {
              Ou ||
                (((k().autoScrolling && !k().scrollBar) || !k().fitToSection) &&
                  gp(pt())),
                (function () {
                  if (C)
                    for (var s = 0; s < 4; s++)
                      hp = setTimeout(function () {
                        window.requestAnimationFrame(function () {
                          k().autoScrolling &&
                            !k().scrollBar &&
                            (X({ C: !0 }), Ol(D.L.index() + 1), X({ C: !1 }));
                        });
                      }, 200 * s);
                })(),
                (Ou = !0),
                clearTimeout(Nu),
                (Nu = setTimeout(function () {
                  (function () {
                    if (
                      (X({ C: !0 }),
                      gp(""),
                      Ct(te(), "onResize"),
                      k().autoScrolling ||
                        D.N ||
                        (function () {
                          if (!k().autoScrolling || k().scrollBar) {
                            var L = 0.01 * f.innerHeight;
                            g.documentElement.style.setProperty(
                              "--vh",
                              "".concat(L, "px")
                            );
                          }
                        })(),
                      q.ln(g1),
                      En(),
                      H1(),
                      C)
                    ) {
                      var s = g.activeElement;
                      if (
                        !rt(s, "textarea") &&
                        !rt(s, "input") &&
                        !rt(s, "select")
                      ) {
                        var d = pt();
                        Math.abs(d - Pu) > (20 * Math.max(Pu, d)) / 100 &&
                          (Tu(!0), (Pu = d));
                      }
                    } else
                      (x = pt()),
                        (A = Di()),
                        (D._ === x && mp === A) ||
                          (X({ _: x }), (mp = A), Tu(!0));
                    var x, A;
                    Ct(te(), "onResizeEnds"), X({ C: !1 });
                  })(),
                    (Ou = !1);
                }, 400));
            }
            function Tu(s) {
              if (!Ne(te(), O)) {
                X({ C: !0, _: pt(), _n: Di() });
                for (var d = U().j, x = 0; x < d.length; ++x) {
                  var A = d[x],
                    L = Z(_, A.item)[0],
                    I = A.slides;
                  Te("offsetSections") && Re(A.item, { height: ji(A.item) }),
                    I.length > 1 && Gr(L, A.activeSlide.item);
                }
                k().scrollOverflow && le.bn();
                var T = U().L.index();
                D.N ||
                  !T ||
                  Te("fadingEffect") ||
                  Te("dropEffect") ||
                  Te("waterEffect") ||
                  Ol(T + 1),
                  X({ C: !1 }),
                  nt(k().afterResize) &&
                    s &&
                    k().afterResize.call(te(), f.innerWidth, f.innerHeight),
                  nt(k().afterReBuild) && !s && k().afterReBuild.call(te()),
                  Ct(te(), "afterRebuild");
              }
            }
            function gp(s) {
              U().j.forEach(function (d) {
                var x = s !== "" || Te("offsetSections") ? ji(d.item) : "";
                Re(d.item, { height: x });
              });
            }
            function Iu() {
              var s,
                d,
                x = f.location.hash;
              if (x.length) {
                var A = x.replace("#", "").split("/"),
                  L = x.indexOf("#/") > -1;
                s = L ? "/" + A[1] : decodeURIComponent(A[0]);
                var I = L ? A[2] : A[1];
                I && I.length && (d = decodeURIComponent(I));
              }
              return { section: s, pn: d };
            }
            function z4() {
              Ao("hashchange", vp);
            }
            function vp() {
              if (!D.I && !k().lockAnchors) {
                var s = Iu(),
                  d = s.section,
                  x = s.pn,
                  A = D.W === void 0,
                  L = D.W === void 0 && x === void 0 && !D.H;
                d &&
                  d.length &&
                  ((d && d !== D.W && !A) ||
                    (L && !Ur()) ||
                    (!D.H && D.F != x && !Ur())) &&
                  q.ln(Zc, { Un: d, slideAnchor: x });
              }
            }
            function Z4(s) {
              var d = s.target;
              Pe(d, k().menu + " [data-menuanchor]") && $4.call(d, s);
            }
            function $4(s) {
              X({ D: "menu" }),
                !Z(k().menu)[0] ||
                  (!k().lockAnchors && k().anchors.length) ||
                  (lt(s), q.ln(w1, { anchor: et(this, "data-menuanchor") }));
            }
            function U4(s) {
              var d = s.target;
              d && Pe(d, "#fp-nav a")
                ? A4.call(d, s.e)
                : rt(d, ".fp-tooltip")
                ? j4.call(d)
                : (rt(d, be) || Pe(d, be) != null) && S4.call(d, s.e);
            }
            (m.reBuild = Tu),
              q.un(Nt, function () {
                Ru(), Hn("resize", Ru), q.un(dn, V4);
              }),
              (m.setLockAnchors = function (s) {
                k().lockAnchors = s;
              }),
              q.un(Nt, function () {
                Hn("hashchange", vp), q.un(dn, z4);
              }),
              q.un(Nt, function () {
                qr("wheel", jl.Cn, K1()), q.un(E1, O4), q.un(y1, R4);
              }),
              q.un(Nt, function () {
                q.un(cl, Z4);
              }),
              q.un(Nt, function () {
                q.un(cl, U4);
              });
            var Du,
              Hu,
              yp = 0;
            function Rl(s) {
              var d, x, A, L, I;
              if (
                (Ct(te(), "onScroll"),
                !D.C &&
                  U().L &&
                  (Cn(U().j),
                  !U().N &&
                    !U().Fn &&
                    (!k().autoScrolling ||
                      k().scrollBar ||
                      Te("dragAndMove")) &&
                    !nl()))
              ) {
                var T = Te("dragAndMove")
                    ? Math.abs(ae("dragAndMove", "getCurrentScroll"))
                    : ar(),
                  Q = (function (Dt) {
                    var rn = Dt > yp ? "down" : "up";
                    return (yp = Dt), X({ X: Dt }), rn;
                  })(T),
                  Y = 0,
                  ce = T + pt() / 2,
                  we =
                    (Te("dragAndMove")
                      ? ae("dragAndMove", "getDocumentHeight")
                      : He.scrollHeight - pt()) === T,
                  se = U().j;
                if ((X({ scrollY: T }), we)) Y = se.length - 1;
                else if (T)
                  for (var Ae = 0; Ae < se.length; ++Ae)
                    (Pe(se[Ae].item, G) || se[Ae].item).offsetTop <= ce &&
                      (Y = Ae);
                else Y = 0;
                if (
                  ((A = Q),
                  (L = U().L.item.offsetTop),
                  (I = L + pt()),
                  (A == "up" ? I >= ar() + pt() : L <= ar()) &&
                    (Ne(U().L.item, H) ||
                      (ge(U().L.item, H), qe(jo(U().L.item), H))),
                  (x = (d = se[Y]).item),
                  !d.isActive)
                ) {
                  X({ I: !0 });
                  var Oe,
                    ht,
                    st = U().L.item,
                    Ze = U().L.index() + 1,
                    $e = Rc(U().L, x),
                    Ee = d.anchor,
                    mt = d.index() + 1,
                    yt = d.activeSlide,
                    zn = {
                      L: st,
                      sectionIndex: mt - 1,
                      anchorLink: Ee,
                      element: x,
                      leavingSection: Ze,
                      direction: $e,
                      items: { origin: U().L, destination: d },
                    };
                  yt && ((ht = yt.anchor), (Oe = yt.index())),
                    D.canScroll &&
                      (qe(
                        se
                          .filter(function (Dt) {
                            return Dt.index() !== d.index();
                          })
                          .map(function (Dt) {
                            return Dt.item;
                          }),
                        R
                      ),
                      ge(x, R),
                      ae("parallax", "afterLoad"),
                      nt(k().beforeLeave) && T1("beforeLeave", zn),
                      nt(k().onLeave) && bn("onLeave", zn),
                      nt(k().afterLoad) && bn("afterLoad", zn),
                      ae("resetSliders", "apply", {
                        localIsResizing: D.C,
                        leavingSection: Ze,
                      }),
                      Ic(st),
                      xo(x),
                      sl(x),
                      qc(Ee, mt - 1),
                      k().anchors.length && X({ W: Ee }),
                      En(),
                      Dc(Oe, ht, Ee)),
                    clearTimeout(Du),
                    (Du = setTimeout(function () {
                      X({ I: !1 });
                    }, 100));
                }
                k().fitToSection &&
                  D.canScroll &&
                  (clearTimeout(Hu),
                  (Hu = setTimeout(function () {
                    D.j.filter(function (Dt) {
                      var rn = Dt.item.getBoundingClientRect();
                      return (
                        Math.round(rn.bottom) === Math.round(pt()) ||
                        Math.round(rn.top) === 0
                      );
                    }).length || D1();
                  }, k().A)));
              }
            }
            function wp(s, d) {
              d !== void 0
                ? (d = d.replace(/ /g, "").split(",")).forEach(function (x) {
                    dl(s, x, "k");
                  })
                : (dl(s, "all", "k"), (k().keyboardScrolling = s));
            }
            function B4(s) {
              var d = s.index();
              k().anchors[d] !== void 0 && s.isActive && qc(k().anchors[d], d),
                k().menu &&
                  k().css3 &&
                  Pe(Z(k().menu)[0], b) != null &&
                  Z(k().menu).forEach(function (x) {
                    He.appendChild(x);
                  });
            }
            function xp() {
              var s,
                d,
                x = U().L,
                A = U().L.item;
              ge(A, H),
                xo(A),
                O1(),
                sl(A),
                (d = ju((s = Iu()).section)),
                (s.section && d && (d === void 0 || d.index() !== Dn(V1))) ||
                  !nt(k().afterLoad) ||
                  bn("afterLoad", {
                    L: A,
                    element: A,
                    direction: null,
                    anchorLink: x.anchor,
                    sectionIndex: x.index(),
                    items: { origin: U().L, destination: U().L },
                  }),
                nt(k().afterRender) && bn("afterRender"),
                Ct(te(), "afterRender");
            }
            function _u(s, d) {
              d !== void 0
                ? (d = d.replace(/ /g, "").split(",")).forEach(function (x) {
                    dl(s, x, "m");
                  })
                : dl(s, "all", "m"),
                Ct(te(), "setAllowScrolling", { value: s, Qn: d });
            }
            function Sp() {
              var s = Iu(),
                d = s.section,
                x = s.pn;
              d ? (k().animateAnchor ? Au(d, x) : Ol(d, x)) : q.ln(_c, null);
            }
            q.un(dn, function () {
              clearTimeout(Du), clearTimeout(Hu);
            }),
              q.un(Nt, function () {
                Hn("scroll", Rl),
                  g.body.addEventListener("scroll", Rl),
                  q.un(Zc, function (s) {
                    Au(s.Un, s.slideAnchor);
                  }),
                  q.un(w1, function (s) {
                    Fi(s.anchor, void 0);
                  }),
                  q.un(v1, function (s) {
                    (s.direction === "down" ? zi : Mo)();
                  }),
                  q.un(x1, function (s) {
                    Eo(s.destination);
                  });
              }),
              q.un(dn, function () {
                Ao("scroll", Rl);
              }),
              (m.getActiveSlide = function () {
                return Gc(U().L.activeSlide);
              }),
              (m.getScrollX = function () {
                return D.scrollX;
              }),
              q.un(Nt, function () {
                q.un(dn, C4),
                  q.un(S1, function (s) {
                    Gr(s.slides, s.destination);
                  }),
                  q.un(zc, function (s) {
                    Cu(s.section);
                  }),
                  q.un(Vc, function (s) {
                    bu(s.section);
                  });
              }),
              q.un(Nt, function () {
                var s = k().credits.position,
                  d =
                    ["left", "right"].indexOf(s) > -1
                      ? "".concat(s, ": 0;")
                      : "",
                  x = `
        <div class="fp-watermark" style="`
                    .concat(
                      d,
                      `">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `
                    )
                    .concat(
                      k().credits.label,
                      `
            </a>
        </div>
    `
                    ),
                  A = Cn(D.j),
                  L = !D.Jn || k().credits.enabled;
                A && A.item && L && A.item.insertAdjacentHTML("beforeend", x);
              }),
              (function () {
                q.un(m1, function () {
                  var Q, Y, ce;
                  X({
                    Jn:
                      (k().licenseKey,
                      (Q = k().licenseKey),
                      (Y = (function (we) {
                        var se = parseInt("514").toString(16);
                        if (
                          !we ||
                          we.length < 29 ||
                          we.split(s[0]).length === 4
                        )
                          return null;
                        var Ae = ["Each", "for"][L()]().join(""),
                          Oe = we[["split"]]("-"),
                          ht = [];
                        Oe[Ae](function ($e, Ee) {
                          if (Ee < 4) {
                            var mt = (function (Dt) {
                              var rn = Dt[Dt.length - 1],
                                q4 = ["NaN", "is"][L()]().join("");
                              return window[q4](rn)
                                ? I(rn)
                                : (function (X4) {
                                    return X4 - R.length;
                                  })(rn);
                            })($e);
                            ht.push(mt);
                            var yt = I($e[mt]);
                            if (Ee === 1) {
                              var zn = ["pa", "dS", "t", "art"].join("");
                              yt = yt.toString()[zn](2, "0");
                            }
                            (se += yt), (Ee !== 0 && Ee !== 1) || (se += "-");
                          }
                        });
                        var st = 0,
                          Ze = "";
                        return (
                          we.split("-").forEach(function ($e, Ee) {
                            if (Ee < 4) {
                              for (var mt = 0, yt = 0; yt < 4; yt++)
                                yt !== ht[Ee] &&
                                  ((mt += Math.abs(I($e[yt]))),
                                  isNaN($e[yt]) || st++);
                              var zn = T(mt);
                              Ze += zn;
                            }
                          }),
                          (Ze += T(st)),
                          {
                            Kn: new Date(se + "T00:00"),
                            qn: se.split("-")[2] === 8 * (R.length - 2) + "",
                            $n: Ze,
                          }
                        );
                      })(Q)),
                      (ce = (function (we) {
                        var se = A[L()]().join("");
                        return (
                          we && se.indexOf(we) === 0 && we.length === se.length
                        );
                      })(Q)),
                      ((Y || ce) &&
                        ((Y && x <= Y.Kn && Y.$n === Q.split(s[0])[4]) ||
                          ce ||
                          Y.qn)) ||
                        !1),
                  });
                });
                var s = ["-"],
                  d = "2024-0-31".split("-"),
                  x = new Date(d[0], d[1], d[2]),
                  A = ["se", "licen", "-", "v3", "l", "gp"];
                function L() {
                  return [["re", "verse"].join("")][0];
                }
                function I(Q) {
                  return Q ? (isNaN(Q) ? Q.charCodeAt(0) - 72 : Q) : "";
                }
                function T(Q) {
                  var Y = 72 + Q;
                  return (
                    Y > 90 && Y < 97 && (Y += 15),
                    String.fromCharCode(Y).toUpperCase()
                  );
                }
              })(),
              (m.setKeyboardScrolling = wp),
              (m.shared.nt = xp),
              (m.setAllowScrolling = _u);
            var F4 = {};
            function Po() {
              return F4;
            }
            var Tl,
              Vn,
              Ep,
              Vu,
              Il = !Ne(He, dt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));
            function bp(s) {
              if (
                ((Vn = g.createElement("div")),
                (Tl = dt(
                  "MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="
                )),
                Il ||
                  (Tl = Tl.replace("extensions/", "").replace("Extension", "")),
                (Vn.innerHTML = Tl),
                (Vn = Vn.firstChild),
                "MutationObserver" in window &&
                  new MutationObserver(W4).observe(g.body, {
                    childList: !0,
                    subtree: !1,
                  }),
                (!Il || (Te(s) && m[s])) &&
                  (!(function (x) {
                    var A = Po()[x] !== void 0 && Po()[x].length,
                      L = [],
                      I = !1;
                    return (
                      bo(Po()[x]) ? (L = Po()[x]) : L.push(Po()[x]),
                      L.forEach(function (T) {
                        var Q = (function () {
                            if (g.domain.length) {
                              for (
                                var rn = g.domain
                                  .replace(/^(www\.)/, "")
                                  .split(".");
                                rn.length > 2;

                              )
                                rn.shift();
                              return rn.join(".").replace(/(^\.*)|(\.*$)/g, "");
                            }
                            return "";
                          })(),
                          Y = [
                            "MTM0bG9jYWxob3N0MjM0",
                            "MTM0MC4xMjM0",
                            "MTM0anNoZWxsLm5ldDIzNA==",
                            "UDdDQU5ZNlNN",
                            "NTY3YnVuZGxlNzg5",
                            "NTU1S2V5Nzc3",
                            "NDU2dGVzdDQ1Ng==",
                          ],
                          ce = dt(Y[0]),
                          we = dt(Y[1]),
                          se = dt(Y[2]),
                          Ae = dt(Y[6]),
                          Oe = dt(Y[3]),
                          ht = dt(Y[4]),
                          st = dt(Y[5]),
                          Ze = k()[ht + st] !== void 0;
                        A = A || Ze;
                        var $e =
                          [ce, we, se, Ae].indexOf(Q) < 0 && Q.length !== 0;
                        if (!A && !Ze && $e) return !1;
                        var Ee = A ? dt(T) : "",
                          mt =
                            (Ee = Ee.split("_")).length > 1 &&
                            Ee[1].indexOf(x, Ee[1].length - x.length) > -1,
                          yt =
                            Ee.length > 1 &&
                            Ee[1].toLowerCase().indexOf(ht) > -1,
                          zn = Ee[0].indexOf(Q, Ee[0].length - Q.length) < 0,
                          Dt = mt || yt;
                        I = I || (!(zn && $e && Oe != Ee[0]) && Dt) || !$e;
                      }),
                      I
                    );
                  })(s) ||
                    !Il))
              ) {
                Cp();
                var d = dt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                window[d](Cp, 2e3);
              }
            }
            function Cp() {
              Vn &&
                (Vu ||
                  (Math.random() < 0.5 ? rl(He, Vn) : Co(Vn, He), (Vu = !0)),
                Vn.setAttribute(
                  "style",
                  dt(
                    "MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz"
                  ).replace(/;/g, dt("MTIzICFpbXBvcnRhbnQ7MzQ1"))
                ));
            }
            function W4(s) {
              s.forEach(function (d) {
                if (d.removedNodes[0] && d.removedNodes[0].isEqualNode(Vn)) {
                  clearTimeout(Ep);
                  var x = dt("bDIwc2V0VGltZW91dDAzbA==");
                  Ep = window[x](G4, 900);
                }
              });
            }
            function G4() {
              Vu = !1;
            }
            function Y4() {
              fl(),
                En(),
                (k().scrollBar = k().scrollBar || k().hybrid),
                tl(),
                (function () {
                  Re(B1(te(), "body"), {
                    height: "100%",
                    position: "relative",
                  }),
                    ge(te(), v),
                    ge(Ni, P),
                    X({ _: pt() }),
                    qe(te(), O),
                    W1(),
                    ae("parallax", "init");
                  for (var s = U().tn, d = 0; d < s.length; d++) {
                    var x = s[d],
                      A = x.vn,
                      L = et(x.item, "style");
                    L && x.item.setAttribute("data-fp-styles", L),
                      iu(x),
                      B4(x),
                      A.length > 0 && hu(x);
                  }
                  k().fixedElements &&
                    k().css3 &&
                    Z(k().fixedElements).forEach(function (I) {
                      He.appendChild(I);
                    }),
                    k().navigation && R1(),
                    Z('iframe[src*="youtube.com/embed/"]', te()).forEach(
                      function (I) {
                        var T, Q;
                        (Q = et((T = I), "src")),
                          T.setAttribute(
                            "src",
                            Q + (/\?/.test(Q) ? "&" : "?") + "enablejsapi=1"
                          );
                      }
                    ),
                    ae("fadingEffect", "apply"),
                    ae("waterEffect", "init"),
                    ae("dropEffect", "init"),
                    ae("cards", "init"),
                    k().scrollOverflow && le.bn();
                })(),
                _u(!0),
                Wi(!0),
                So(k().autoScrolling, "internal"),
                H1(),
                f1(),
                g.readyState === "complete" && Sp(),
                Hn("load", Sp),
                xp(),
                Il || bp("l"),
                fl(),
                En();
            }
            function jp() {
              var s = k().licenseKey;
              k().licenseKey.trim() === ""
                ? (Ft(
                    "error",
                    "Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"
                  ),
                  Ft(
                    "error",
                    "https://github.com/alvarotrigo/fullPage.js#options"
                  ))
                : (k() && D.Jn) || g.domain.indexOf("alvarotrigo.com") > -1
                ? s && s.length
                : (Ft(
                    "error",
                    "Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"
                  ),
                  Ft("error", "https://alvarotrigo.com/fullPage/pricing")),
                Ne(Ni, P)
                  ? Ft(
                      "error",
                      "Fullpage.js can only be initialized once and you are doing it multiple times!"
                    )
                  : (k().continuousVertical &&
                      (k().loopTop || k().loopBottom) &&
                      ((k().continuousVertical = !1),
                      Ft(
                        "warn",
                        "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                      )),
                    !k().scrollOverflow ||
                      (!k().scrollBar && k().autoScrolling) ||
                      Ft(
                        "warn",
                        "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                      ),
                    !k().continuousVertical ||
                      (!k().scrollBar && k().autoScrolling) ||
                      ((k().continuousVertical = !1),
                      Ft(
                        "warn",
                        "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                      )),
                    k().anchors.forEach(function (d) {
                      var x = [].slice.call(Z("[name]")).filter(function (I) {
                          return (
                            et(I, "name") &&
                            et(I, "name").toLowerCase() == d.toLowerCase()
                          );
                        }),
                        A = [].slice.call(Z("[id]")).filter(function (I) {
                          return (
                            et(I, "id") &&
                            et(I, "id").toLowerCase() == d.toLowerCase()
                          );
                        });
                      if (A.length || x.length) {
                        Ft(
                          "error",
                          "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                        );
                        var L = A.length ? "id" : "name";
                        (A.length || x.length) &&
                          Ft(
                            "error",
                            '"' +
                              d +
                              '" is is being used by another element `' +
                              L +
                              "` property"
                          );
                      }
                    }));
            }
            function K4() {
              return {
                options: k(),
                internals: {
                  container: te(),
                  canScroll: D.canScroll,
                  isScrollAllowed: ft(),
                  getDestinationPosition: I1,
                  isTouch: y,
                  c: bp,
                  getXmovement: L1,
                  removeAnimation: il,
                  getTransforms: Tc,
                  lazyLoad: xo,
                  addAnimation: Oc,
                  performHorizontalMove: k1,
                  landscapeScroll: Gr,
                  silentLandscapeScroll: Oi,
                  keepSlidesPosition: Kc,
                  silentScroll: Fr,
                  styleSlides: hu,
                  styleSection: iu,
                  scrollHandler: Rl,
                  getEventsPage: Su,
                  getMSPointer: rp,
                  isReallyTouch: Bi,
                  usingExtension: Te,
                  toggleControlArrows: M1,
                  touchStartHandler: Pl,
                  touchMoveHandler: Ui,
                  nullOrSection: or,
                  items: { SectionPanel: Yr, SlidePanel: pl, Item: Lt },
                  getVisible: Ii,
                  getState: U,
                  updateState: En,
                  updateStructuralState: fl,
                  activeSlidesNavigation: A1,
                  getPanels: function () {
                    return D.rn;
                  },
                  getSections: function () {
                    return D.j;
                  },
                  setActiveSection: function (s) {
                    D.L = s;
                  },
                },
              };
            }
            function Wt(s) {
              var d = ["NTY3YnVuZGxlNzg5", "NTU1S2V5Nzc3"],
                x = dt(d[0]),
                A = dt(d[1]),
                L = k()[x + A] !== void 0,
                I = "fp_" + s + "Extension";
              (Po()[s] = L ? k()[x + A] : k()[s + A]),
                (m[s] = window[I] !== void 0 ? new window[I]() : null),
                m[s] && m[s].c(s);
            }
            function Ap(s, d) {
              var x;
              if (
                ((He = Z("body")[0]),
                (Ni = Z("html")[0]),
                (al = Z("html, body")),
                !Ne(Ni, P))
              )
                return (
                  (x = typeof s == "string" ? Z(s)[0] : s),
                  (me.touchWrapper = x),
                  (function (A) {
                    (bt = Kr({}, me, A)), (at = Object.assign({}, bt));
                  })(d),
                  (function (A) {
                    Le = A;
                  })(typeof s == "string" ? Z(s)[0] : s),
                  q.ln(m1),
                  jp(),
                  (m.getFullpageData = K4),
                  (m.version = "4.0.22"),
                  (m.test = Object.assign(m.test, {
                    top: "0px",
                    on: "translate3d(0px, 0px, 0px)",
                    cn: (function () {
                      for (
                        var A = [], L = 0;
                        L < Z(k().sectionSelector, te()).length;
                        L++
                      )
                        A.push("translate3d(0px, 0px, 0px)");
                      return A;
                    })(),
                    left: (function () {
                      for (
                        var A = [], L = 0;
                        L < Z(k().sectionSelector, te()).length;
                        L++
                      )
                        A.push(0);
                      return A;
                    })(),
                    options: k(),
                    setAutoScrolling: null,
                  })),
                  (m.shared = Object.assign(m.shared, { nt: null, Xn: !1 })),
                  (f.fullpage_api = m),
                  (f.fullpage_extensions = !0),
                  te() &&
                    (q.ln("beforeInit"),
                    Wt("continuousHorizontal"),
                    Wt("scrollHorizontally"),
                    Wt("resetSliders"),
                    Wt("interlockedSlides"),
                    Wt("responsiveSlides"),
                    Wt("fadingEffect"),
                    Wt("dragAndMove"),
                    Wt("offsetSections"),
                    Wt("scrollOverflowReset"),
                    Wt("parallax"),
                    Wt("cards"),
                    Wt("dropEffect"),
                    Wt("waterEffect"),
                    ae("dragAndMove", "init"),
                    ae("responsiveSlides", "init"),
                    Y4(),
                    q.ln(Nt),
                    ae("dragAndMove", "turnOffTouch")),
                  f.fullpage_api
                );
              jp();
            }
            return (
              (m.destroy = function (s) {
                Ct(te(), "destroy", s),
                  So(!1, "internal"),
                  _u(!0),
                  Wi(!1),
                  wp(!1),
                  ge(te(), O),
                  q.ln(dn),
                  ae("dragAndMove", "destroy"),
                  s &&
                    (Fr(0),
                    Z(
                      "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                      te()
                    ).forEach(function (d) {
                      Cl(d, "src");
                    }),
                    Z("img[data-srcset]").forEach(function (d) {
                      Cl(d, "srcset");
                    }),
                    Xr(Z("#fp-nav, .fp-slidesNav, .fp-controlArrow")),
                    Re(yo(U().j), {
                      height: "",
                      "background-color": "",
                      padding: "",
                    }),
                    Re(yo(U().slides), { width: "" }),
                    Re(te(), {
                      height: "",
                      position: "",
                      "-ms-touch-action": "",
                      "touch-action": "",
                    }),
                    Re(al, { overflow: "", height: "" }),
                    qe(Ni, P),
                    qe(He, j + " fp-scrollable"),
                    He.className.split(/\s+/).forEach(function (d) {
                      d.indexOf("fp-viewing") === 0 && qe(He, d);
                    }),
                    yo(U().rn).forEach(function (d) {
                      k().scrollOverflow && le.Nn(d),
                        qe(d, "fp-table active fp-completely " + Se);
                      var x = et(d, "data-fp-styles");
                      x && d.setAttribute("style", x),
                        Ne(d, K) && !De && d.removeAttribute("data-anchor");
                    }),
                    il(te()),
                    [ue, W, _].forEach(function (d) {
                      Z(d, te()).forEach(function (x) {
                        wl(x);
                      });
                    }),
                    Re(te(), {
                      "-webkit-transition": "none",
                      transition: "none",
                    }),
                    qe(te(), v),
                    f.scrollTo(0, 0),
                    [K, pe, z].forEach(function (d) {
                      qe(Z("." + d), d);
                    }));
              }),
              (f.fp_easings = Kr(f.fp_easings, {
                easeInOutCubic: function (s, d, x, A) {
                  return (s /= A / 2) < 1
                    ? (x / 2) * s * s * s + d
                    : (x / 2) * ((s -= 2) * s * s + 2) + d;
                },
              })),
              f.jQuery &&
                (function (s, d) {
                  s && d
                    ? (s.fn.fullpage = function (x) {
                        (x = s.extend({}, x, { $: s })),
                          new d(this[0], x),
                          Object.keys(m).forEach(function (A) {
                            k().$.fn.fullpage[A] = m[A];
                          });
                      })
                    : Ft(
                        "error",
                        "jQuery is required to use the jQuery fullpage adapter!"
                      );
                })(f.jQuery, Ap),
              Ap
            );
          });
        },
        239: () => {
          window.fp_easings = {
            def: "easeOutQuad",
            linear: function (i, a, l, c) {
              return (l * i) / c + a;
            },
            swing: function (i, a, l, c) {
              return window.fp_easings[window.fp_easings.def](i, a, l, c);
            },
            easeInQuad: function (i, a, l, c) {
              return l * (i /= c) * i + a;
            },
            easeOutQuad: function (i, a, l, c) {
              return -l * (i /= c) * (i - 2) + a;
            },
            easeInOutQuad: function (i, a, l, c) {
              return (i /= c / 2) < 1
                ? (l / 2) * i * i + a
                : (-l / 2) * (--i * (i - 2) - 1) + a;
            },
            easeInCubic: function (i, a, l, c) {
              return l * (i /= c) * i * i + a;
            },
            easeOutCubic: function (i, a, l, c) {
              return l * ((i = i / c - 1) * i * i + 1) + a;
            },
            easeInOutCubic: function (i, a, l, c) {
              return (i /= c / 2) < 1
                ? (l / 2) * i * i * i + a
                : (l / 2) * ((i -= 2) * i * i + 2) + a;
            },
            easeInQuart: function (i, a, l, c) {
              return l * (i /= c) * i * i * i + a;
            },
            easeOutQuart: function (i, a, l, c) {
              return -l * ((i = i / c - 1) * i * i * i - 1) + a;
            },
            easeInOutQuart: function (i, a, l, c) {
              return (i /= c / 2) < 1
                ? (l / 2) * i * i * i * i + a
                : (-l / 2) * ((i -= 2) * i * i * i - 2) + a;
            },
            easeInQuint: function (i, a, l, c) {
              return l * (i /= c) * i * i * i * i + a;
            },
            easeOutQuint: function (i, a, l, c) {
              return l * ((i = i / c - 1) * i * i * i * i + 1) + a;
            },
            easeInOutQuint: function (i, a, l, c) {
              return (i /= c / 2) < 1
                ? (l / 2) * i * i * i * i * i + a
                : (l / 2) * ((i -= 2) * i * i * i * i + 2) + a;
            },
            easeInSine: function (i, a, l, c) {
              return -l * Math.cos((i / c) * (Math.PI / 2)) + l + a;
            },
            easeOutSine: function (i, a, l, c) {
              return l * Math.sin((i / c) * (Math.PI / 2)) + a;
            },
            easeInOutSine: function (i, a, l, c) {
              return (-l / 2) * (Math.cos((Math.PI * i) / c) - 1) + a;
            },
            easeInExpo: function (i, a, l, c) {
              return i == 0 ? a : l * Math.pow(2, 10 * (i / c - 1)) + a;
            },
            easeOutExpo: function (i, a, l, c) {
              return i == c ? a + l : l * (1 - Math.pow(2, (-10 * i) / c)) + a;
            },
            easeInOutExpo: function (i, a, l, c) {
              return i == 0
                ? a
                : i == c
                ? a + l
                : (i /= c / 2) < 1
                ? (l / 2) * Math.pow(2, 10 * (i - 1)) + a
                : (l / 2) * (2 - Math.pow(2, -10 * --i)) + a;
            },
            easeInCirc: function (i, a, l, c) {
              return -l * (Math.sqrt(1 - (i /= c) * i) - 1) + a;
            },
            easeOutCirc: function (i, a, l, c) {
              return l * Math.sqrt(1 - (i = i / c - 1) * i) + a;
            },
            easeInOutCirc: function (i, a, l, c) {
              return (i /= c / 2) < 1
                ? (-l / 2) * (Math.sqrt(1 - i * i) - 1) + a
                : (l / 2) * (Math.sqrt(1 - (i -= 2) * i) + 1) + a;
            },
            easeInElastic: function (i, a, l, c) {
              var u = 1.70158,
                h = 0,
                f = l;
              return i == 0
                ? a
                : (i /= c) == 1
                ? a + l
                : (h || (h = 0.3 * c),
                  f < Math.abs(l)
                    ? ((f = l), (u = h / 4))
                    : (u = (h / (2 * Math.PI)) * Math.asin(l / f)),
                  -f *
                    Math.pow(2, 10 * (i -= 1)) *
                    Math.sin(((i * c - u) * (2 * Math.PI)) / h) +
                    a);
            },
            easeOutElastic: function (i, a, l, c) {
              var u = 1.70158,
                h = 0,
                f = l;
              return i == 0
                ? a
                : (i /= c) == 1
                ? a + l
                : (h || (h = 0.3 * c),
                  f < Math.abs(l)
                    ? ((f = l), (u = h / 4))
                    : (u = (h / (2 * Math.PI)) * Math.asin(l / f)),
                  f *
                    Math.pow(2, -10 * i) *
                    Math.sin(((i * c - u) * (2 * Math.PI)) / h) +
                    l +
                    a);
            },
            easeInOutElastic: function (i, a, l, c) {
              var u = 1.70158,
                h = 0,
                f = l;
              return i == 0
                ? a
                : (i /= c / 2) == 2
                ? a + l
                : (h || (h = c * 0.44999999999999996),
                  f < Math.abs(l)
                    ? ((f = l), (u = h / 4))
                    : (u = (h / (2 * Math.PI)) * Math.asin(l / f)),
                  i < 1
                    ? f *
                        Math.pow(2, 10 * (i -= 1)) *
                        Math.sin(((i * c - u) * (2 * Math.PI)) / h) *
                        -0.5 +
                      a
                    : f *
                        Math.pow(2, -10 * (i -= 1)) *
                        Math.sin(((i * c - u) * (2 * Math.PI)) / h) *
                        0.5 +
                      l +
                      a);
            },
            easeInBack: function (i, a, l, c, u) {
              return (
                u == null && (u = 1.70158),
                l * (i /= c) * i * ((u + 1) * i - u) + a
              );
            },
            easeOutBack: function (i, a, l, c, u) {
              return (
                u == null && (u = 1.70158),
                l * ((i = i / c - 1) * i * ((u + 1) * i + u) + 1) + a
              );
            },
            easeInOutBack: function (i, a, l, c, u) {
              return (
                u == null && (u = 1.70158),
                (i /= c / 2) < 1
                  ? (l / 2) * (i * i * ((1 + (u *= 1.525)) * i - u)) + a
                  : (l / 2) *
                      ((i -= 2) * i * ((1 + (u *= 1.525)) * i + u) + 2) +
                    a
              );
            },
            easeInBounce: function (i, a, l, c) {
              return l - window.fp_easings.easeOutBounce(c - i, 0, l, c) + a;
            },
            easeOutBounce: function (i, a, l, c) {
              return (i /= c) < 0.36363636363636365
                ? l * (7.5625 * i * i) + a
                : i < 0.7272727272727273
                ? l * (7.5625 * (i -= 0.5454545454545454) * i + 0.75) + a
                : i < 0.9090909090909091
                ? l * (7.5625 * (i -= 0.8181818181818182) * i + 0.9375) + a
                : l * (7.5625 * (i -= 0.9545454545454546) * i + 0.984375) + a;
            },
            easeInOutBounce: function (i, a, l, c) {
              return i < c / 2
                ? 0.5 * window.fp_easings.easeInBounce(2 * i, 0, l, c) + a
                : 0.5 * window.fp_easings.easeOutBounce(2 * i - c, 0, l, c) +
                    0.5 * l +
                    a;
            },
          };
        },
        379: (i) => {
          var a = [];
          function l(h) {
            for (var f = -1, g = 0; g < a.length; g++)
              if (a[g].identifier === h) {
                f = g;
                break;
              }
            return f;
          }
          function c(h, f) {
            for (var g = {}, C = [], E = 0; E < h.length; E++) {
              var y = h[E],
                M = f.base ? y[0] + f.base : y[0],
                m = g[M] || 0,
                v = "".concat(M, " ").concat(m);
              g[M] = m + 1;
              var b = l(v),
                j = { css: y[1], media: y[2], sourceMap: y[3] };
              b !== -1
                ? (a[b].references++, a[b].updater(j))
                : a.push({ identifier: v, updater: u(j, f), references: 1 }),
                C.push(v);
            }
            return C;
          }
          function u(h, f) {
            var g = f.domAPI(f);
            return (
              g.update(h),
              function (E) {
                if (E) {
                  if (
                    E.css === h.css &&
                    E.media === h.media &&
                    E.sourceMap === h.sourceMap
                  )
                    return;
                  g.update((h = E));
                } else g.remove();
              }
            );
          }
          i.exports = function (h, f) {
            (f = f || {}), (h = h || []);
            var g = c(h, f);
            return function (E) {
              E = E || [];
              for (var y = 0; y < g.length; y++) {
                var M = g[y],
                  m = l(M);
                a[m].references--;
              }
              for (var v = c(E, f), b = 0; b < g.length; b++) {
                var j = g[b],
                  N = l(j);
                a[N].references === 0 && (a[N].updater(), a.splice(N, 1));
              }
              g = v;
            };
          };
        },
        569: (i) => {
          var a = {};
          function l(u) {
            if (typeof a[u] > "u") {
              var h = document.querySelector(u);
              if (
                window.HTMLIFrameElement &&
                h instanceof window.HTMLIFrameElement
              )
                try {
                  h = h.contentDocument.head;
                } catch {
                  h = null;
                }
              a[u] = h;
            }
            return a[u];
          }
          function c(u, h) {
            var f = l(u);
            if (!f)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            f.appendChild(h);
          }
          i.exports = c;
        },
        216: (i) => {
          function a(l) {
            var c = document.createElement("style");
            return l.setAttributes(c, l.attributes), l.insert(c), c;
          }
          i.exports = a;
        },
        565: (i, a, l) => {
          function c(u) {
            var h = l.nc;
            h && u.setAttribute("nonce", h);
          }
          i.exports = c;
        },
        795: (i) => {
          function a(u, h, f) {
            var g = f.css,
              C = f.media,
              E = f.sourceMap;
            C ? u.setAttribute("media", C) : u.removeAttribute("media"),
              E &&
                typeof btoa < "u" &&
                (g += `
/*# sourceMappingURL=data:application/json;base64,`.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(E)))),
                  " */"
                )),
              h.styleTagTransform(g, u);
          }
          function l(u) {
            if (u.parentNode === null) return !1;
            u.parentNode.removeChild(u);
          }
          function c(u) {
            var h = u.insertStyleElement(u);
            return {
              update: function (g) {
                a(h, u, g);
              },
              remove: function () {
                l(h);
              },
            };
          }
          i.exports = c;
        },
        589: (i) => {
          function a(l, c) {
            if (c.styleSheet) c.styleSheet.cssText = l;
            else {
              for (; c.firstChild; ) c.removeChild(c.firstChild);
              c.appendChild(document.createTextNode(l));
            }
          }
          i.exports = a;
        },
        497: (i) => {
          i.exports = w;
        },
      },
      n = {};
    function r(i) {
      var a = n[i];
      if (a !== void 0) return a.exports;
      var l = (n[i] = { id: i, exports: {} });
      return t[i].call(l.exports, l, l.exports, r), l.exports;
    }
    (r.n = (i) => {
      var a = i && i.__esModule ? () => i.default : () => i;
      return r.d(a, { a }), a;
    }),
      (r.d = (i, a) => {
        for (var l in a)
          r.o(a, l) &&
            !r.o(i, l) &&
            Object.defineProperty(i, l, { enumerable: !0, get: a[l] });
      }),
      (r.o = (i, a) => Object.prototype.hasOwnProperty.call(i, a)),
      (r.r = (i) => {
        typeof Symbol < "u" &&
          Symbol.toStringTag &&
          Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(i, "__esModule", { value: !0 });
      });
    var o = {};
    (() => {
      r.r(o), r.d(o, { default: () => h });
      var i = r(497),
        a = r.n(i);
      const c = (f) => {
          let { children: g } = f;
          return a().createElement(i.Fragment, null, g);
        },
        u = () => {
          if (typeof window > "u") return !1;
          try {
            return !"production".toLowerCase().match(/test/);
          } catch {
            return !0;
          }
        },
        h = (() => {
          let f;
          return u() ? (f = r(88).Z) : (f = r(882).Z), (f.Wrapper = c), f;
        })();
    })(),
      (e.exports = o);
  })();
})(Nv);
var j3 = Nv.exports;
const Dh = Pf(j3),
  _r = ({ children: e }) =>
    p.jsx("div", { className: " w-[90%] mx-auto h-full", children: e }),
  A3 = "/assets/logo-Biie5kjb.png",
  M3 = () =>
    p.jsxs("div", {
      className: " flex items-center ",
      children: [
        p.jsx("img", {
          src: A3,
          alt: "logo",
          className: " lg:w-[80px] w-[50px] h-[50px] lg:h-[80px]",
        }),
        p.jsxs("div", {
          className: " text-xs lg:text-sm font-medium text-primary",
          children: [
            p.jsx("p", { children: "National Shipping" }),
            p.jsx("p", { children: "Development Co., Ltd" }),
          ],
        }),
      ],
    }),
  Hh = ({ activeSection: e, ham: t }) => {
    const n = [
      { id: 1, name: "home" },
      { id: 2, name: "about" },
      { id: 8, name: "service" },
      { id: 3, name: "process" },
      { id: 4, name: "specializations" },
      { id: 5, name: "core" },
      { id: 6, name: "reviews" },
      { id: 7, name: "contact" },
    ];
    return p.jsx("div", {
      className:
        " lg:flex text-start lg:space-y-0 space-y-3 items-center justify-center gap-7",
      children: n.map(({ id: r, name: o }) =>
        p.jsx(
          "p",
          {
            onClick: () => {
              window.fullpage_api.moveTo(`${o}`), t.current.click();
            },
            className: ` ${
              e == o && "active"
            } capitalize select-none cursor-pointer`,
            children: o,
          },
          r
        )
      ),
    });
  },
  k3 = () =>
    p.jsxs("div", {
      className: " flex items-center gap-3 justify-start",
      children: [
        p.jsx("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "56",
          height: "56",
          fill: "#2563eb",
          viewBox: "0 0 256 256",
          children: p.jsx("path", {
            d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
          }),
        }),
        p.jsxs("div", {
          className: " text-sm text-primary",
          children: [
            p.jsx("a", {
              className: " block",
              href: "tel:959457499259",
              children: "+959457499259",
            }),
            p.jsx("a", {
              className: " block",
              href: "mailto:Info@NSD.com",
              children: "Info@NSD.com",
            }),
          ],
        }),
      ],
    });
function L3(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pv(...e) {
  return (t) => e.forEach((n) => L3(n, t));
}
function tn(...e) {
  return w.useCallback(Pv(...e), e);
}
var Ya = w.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = w.Children.toArray(n),
    i = o.find(N3);
  if (i) {
    const a = i.props.children,
      l = o.map((c) =>
        c === i
          ? w.Children.count(a) > 1
            ? w.Children.only(null)
            : w.isValidElement(a)
            ? a.props.children
            : null
          : c
      );
    return p.jsx(mf, {
      ...r,
      ref: t,
      children: w.isValidElement(a) ? w.cloneElement(a, void 0, l) : null,
    });
  }
  return p.jsx(mf, { ...r, ref: t, children: n });
});
Ya.displayName = "Slot";
var mf = w.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (w.isValidElement(n)) {
    const o = O3(n);
    return w.cloneElement(n, { ...P3(r, n.props), ref: t ? Pv(t, o) : o });
  }
  return w.Children.count(n) > 1 ? w.Children.only(null) : null;
});
mf.displayName = "SlotClone";
var Ov = ({ children: e }) => p.jsx(p.Fragment, { children: e });
function N3(e) {
  return w.isValidElement(e) && e.type === Ov;
}
function P3(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            i(...l), o(...l);
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function O3(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function Rv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Rv(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function R3() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Rv(e)) && (r && (r += " "), (r += t));
  return r;
}
const _h = (e) => (typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e),
  Vh = R3,
  A0 = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Vh(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      a = Object.keys(o).map((u) => {
        const h = n == null ? void 0 : n[u],
          f = i == null ? void 0 : i[u];
        if (h === null) return null;
        const g = _h(h) || _h(f);
        return o[u][g];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, h) => {
          let [f, g] = h;
          return g === void 0 || (u[f] = g), u;
        }, {}),
      c =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, h) => {
              let { class: f, className: g, ...C } = h;
              return Object.entries(C).every((E) => {
                let [y, M] = E;
                return Array.isArray(M)
                  ? M.includes({ ...i, ...l }[y])
                  : { ...i, ...l }[y] === M;
              })
                ? [...u, f, g]
                : u;
            }, []);
    return Vh(
      e,
      a,
      c,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
function Tv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Tv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function T3() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Tv(e)) && (r && (r += " "), (r += t));
  return r;
}
const M0 = "-";
function I3(e) {
  const t = H3(e),
    { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
  function o(a) {
    const l = a.split(M0);
    return l[0] === "" && l.length !== 1 && l.shift(), Iv(l, t) || D3(a);
  }
  function i(a, l) {
    const c = n[a] || [];
    return l && r[a] ? [...c, ...r[a]] : c;
  }
  return { getClassGroupId: o, getConflictingClassGroupIds: i };
}
function Iv(e, t) {
  var a;
  if (e.length === 0) return t.classGroupId;
  const n = e[0],
    r = t.nextPart.get(n),
    o = r ? Iv(e.slice(1), r) : void 0;
  if (o) return o;
  if (t.validators.length === 0) return;
  const i = e.join(M0);
  return (a = t.validators.find(({ validator: l }) => l(i))) == null
    ? void 0
    : a.classGroupId;
}
const zh = /^\[(.+)\]$/;
function D3(e) {
  if (zh.test(e)) {
    const t = zh.exec(e)[1],
      n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function H3(e) {
  const { theme: t, prefix: n } = e,
    r = { nextPart: new Map(), validators: [] };
  return (
    V3(Object.entries(e.classGroups), n).forEach(([i, a]) => {
      gf(a, r, i, t);
    }),
    r
  );
}
function gf(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : Zh(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (_3(o)) {
        gf(o(r), t, n, r);
        return;
      }
      t.validators.push({ validator: o, classGroupId: n });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      gf(a, Zh(t, i), n, r);
    });
  });
}
function Zh(e, t) {
  let n = e;
  return (
    t.split(M0).forEach((r) => {
      n.nextPart.has(r) ||
        n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
        (n = n.nextPart.get(r));
    }),
    n
  );
}
function _3(e) {
  return e.isThemeGetter;
}
function V3(e, t) {
  return t
    ? e.map(([n, r]) => {
        const o = r.map((i) =>
          typeof i == "string"
            ? t + i
            : typeof i == "object"
            ? Object.fromEntries(Object.entries(i).map(([a, l]) => [t + a, l]))
            : i
        );
        return [n, o];
      })
    : e;
}
function z3(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let t = 0,
    n = new Map(),
    r = new Map();
  function o(i, a) {
    n.set(i, a), t++, t > e && ((t = 0), (r = n), (n = new Map()));
  }
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0) return a;
      if ((a = r.get(i)) !== void 0) return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    },
  };
}
const Dv = "!";
function Z3(e) {
  const t = e.separator,
    n = t.length === 1,
    r = t[0],
    o = t.length;
  return function (a) {
    const l = [];
    let c = 0,
      u = 0,
      h;
    for (let y = 0; y < a.length; y++) {
      let M = a[y];
      if (c === 0) {
        if (M === r && (n || a.slice(y, y + o) === t)) {
          l.push(a.slice(u, y)), (u = y + o);
          continue;
        }
        if (M === "/") {
          h = y;
          continue;
        }
      }
      M === "[" ? c++ : M === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(u),
      g = f.startsWith(Dv),
      C = g ? f.substring(1) : f,
      E = h && h > u ? h - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: C,
      maybePostfixModifierPosition: E,
    };
  };
}
function $3(e) {
  if (e.length <= 1) return e;
  const t = [];
  let n = [];
  return (
    e.forEach((r) => {
      r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
    }),
    t.push(...n.sort()),
    t
  );
}
function U3(e) {
  return { cache: z3(e.cacheSize), splitModifiers: Z3(e), ...I3(e) };
}
const B3 = /\s+/;
function F3(e, t) {
  const {
      splitModifiers: n,
      getClassGroupId: r,
      getConflictingClassGroupIds: o,
    } = t,
    i = new Set();
  return e
    .trim()
    .split(B3)
    .map((a) => {
      const {
        modifiers: l,
        hasImportantModifier: c,
        baseClassName: u,
        maybePostfixModifierPosition: h,
      } = n(a);
      let f = r(h ? u.substring(0, h) : u),
        g = !!h;
      if (!f) {
        if (!h) return { isTailwindClass: !1, originalClassName: a };
        if (((f = r(u)), !f))
          return { isTailwindClass: !1, originalClassName: a };
        g = !1;
      }
      const C = $3(l).join(":");
      return {
        isTailwindClass: !0,
        modifierId: c ? C + Dv : C,
        classGroupId: f,
        originalClassName: a,
        hasPostfixModifier: g,
      };
    })
    .reverse()
    .filter((a) => {
      if (!a.isTailwindClass) return !0;
      const { modifierId: l, classGroupId: c, hasPostfixModifier: u } = a,
        h = l + c;
      return i.has(h)
        ? !1
        : (i.add(h), o(c, u).forEach((f) => i.add(l + f)), !0);
    })
    .reverse()
    .map((a) => a.originalClassName)
    .join(" ");
}
function W3() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Hv(t)) && (r && (r += " "), (r += n));
  return r;
}
function Hv(e) {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Hv(e[r])) && (n && (n += " "), (n += t));
  return n;
}
function G3(e, ...t) {
  let n,
    r,
    o,
    i = a;
  function a(c) {
    const u = t.reduce((h, f) => f(h), e());
    return (n = U3(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(c);
  }
  function l(c) {
    const u = r(c);
    if (u) return u;
    const h = F3(c, n);
    return o(c, h), h;
  }
  return function () {
    return i(W3.apply(null, arguments));
  };
}
function _e(e) {
  const t = (n) => n[e] || [];
  return (t.isThemeGetter = !0), t;
}
const _v = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Y3 = /^\d+\/\d+$/,
  K3 = new Set(["px", "full", "screen"]),
  q3 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  X3 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Q3 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  J3 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  ex =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Zn(e) {
  return ro(e) || K3.has(e) || Y3.test(e);
}
function ur(e) {
  return vi(e, "length", sx);
}
function ro(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Jl(e) {
  return vi(e, "number", ro);
}
function ta(e) {
  return !!e && Number.isInteger(Number(e));
}
function tx(e) {
  return e.endsWith("%") && ro(e.slice(0, -1));
}
function de(e) {
  return _v.test(e);
}
function dr(e) {
  return q3.test(e);
}
const nx = new Set(["length", "size", "percentage"]);
function rx(e) {
  return vi(e, nx, Vv);
}
function ox(e) {
  return vi(e, "position", Vv);
}
const ix = new Set(["image", "url"]);
function ax(e) {
  return vi(e, ix, ux);
}
function lx(e) {
  return vi(e, "", cx);
}
function na() {
  return !0;
}
function vi(e, t, n) {
  const r = _v.exec(e);
  return r
    ? r[1]
      ? typeof t == "string"
        ? r[1] === t
        : t.has(r[1])
      : n(r[2])
    : !1;
}
function sx(e) {
  return X3.test(e) && !Q3.test(e);
}
function Vv() {
  return !1;
}
function cx(e) {
  return J3.test(e);
}
function ux(e) {
  return ex.test(e);
}
function dx() {
  const e = _e("colors"),
    t = _e("spacing"),
    n = _e("blur"),
    r = _e("brightness"),
    o = _e("borderColor"),
    i = _e("borderRadius"),
    a = _e("borderSpacing"),
    l = _e("borderWidth"),
    c = _e("contrast"),
    u = _e("grayscale"),
    h = _e("hueRotate"),
    f = _e("invert"),
    g = _e("gap"),
    C = _e("gradientColorStops"),
    E = _e("gradientColorStopPositions"),
    y = _e("inset"),
    M = _e("margin"),
    m = _e("opacity"),
    v = _e("padding"),
    b = _e("saturate"),
    j = _e("scale"),
    N = _e("sepia"),
    O = _e("skew"),
    P = _e("space"),
    R = _e("translate"),
    F = () => ["auto", "contain", "none"],
    H = () => ["auto", "hidden", "clip", "visible", "scroll"],
    K = () => ["auto", de, t],
    G = () => [de, t],
    ue = () => ["", Zn, ur],
    ie = () => ["auto", ro, de],
    pe = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    ve = () => ["solid", "dashed", "dotted", "double", "none"],
    re = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    V = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    _ = () => ["", "0", de],
    z = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    W = () => [ro, Jl],
    ne = () => [ro, de];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [na],
      spacing: [Zn, ur],
      blur: ["none", "", dr, de],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", dr, de],
      borderSpacing: G(),
      borderWidth: ue(),
      contrast: W(),
      grayscale: _(),
      hueRotate: ne(),
      invert: _(),
      gap: G(),
      gradientColorStops: [e],
      gradientColorStopPositions: [tx, ur],
      inset: K(),
      margin: K(),
      opacity: W(),
      padding: G(),
      saturate: W(),
      scale: W(),
      sepia: _(),
      skew: ne(),
      space: G(),
      translate: G(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", de] }],
      container: ["container"],
      columns: [{ columns: [dr] }],
      "break-after": [{ "break-after": z() }],
      "break-before": [{ "break-before": z() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...pe(), de] }],
      overflow: [{ overflow: H() }],
      "overflow-x": [{ "overflow-x": H() }],
      "overflow-y": [{ "overflow-y": H() }],
      overscroll: [{ overscroll: F() }],
      "overscroll-x": [{ "overscroll-x": F() }],
      "overscroll-y": [{ "overscroll-y": F() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [y] }],
      "inset-x": [{ "inset-x": [y] }],
      "inset-y": [{ "inset-y": [y] }],
      start: [{ start: [y] }],
      end: [{ end: [y] }],
      top: [{ top: [y] }],
      right: [{ right: [y] }],
      bottom: [{ bottom: [y] }],
      left: [{ left: [y] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", ta, de] }],
      basis: [{ basis: K() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", de] }],
      grow: [{ grow: _() }],
      shrink: [{ shrink: _() }],
      order: [{ order: ["first", "last", "none", ta, de] }],
      "grid-cols": [{ "grid-cols": [na] }],
      "col-start-end": [{ col: ["auto", { span: ["full", ta, de] }, de] }],
      "col-start": [{ "col-start": ie() }],
      "col-end": [{ "col-end": ie() }],
      "grid-rows": [{ "grid-rows": [na] }],
      "row-start-end": [{ row: ["auto", { span: [ta, de] }, de] }],
      "row-start": [{ "row-start": ie() }],
      "row-end": [{ "row-end": ie() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", de] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", de] }],
      gap: [{ gap: [g] }],
      "gap-x": [{ "gap-x": [g] }],
      "gap-y": [{ "gap-y": [g] }],
      "justify-content": [{ justify: ["normal", ...V()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...V(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...V(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [v] }],
      px: [{ px: [v] }],
      py: [{ py: [v] }],
      ps: [{ ps: [v] }],
      pe: [{ pe: [v] }],
      pt: [{ pt: [v] }],
      pr: [{ pr: [v] }],
      pb: [{ pb: [v] }],
      pl: [{ pl: [v] }],
      m: [{ m: [M] }],
      mx: [{ mx: [M] }],
      my: [{ my: [M] }],
      ms: [{ ms: [M] }],
      me: [{ me: [M] }],
      mt: [{ mt: [M] }],
      mr: [{ mr: [M] }],
      mb: [{ mb: [M] }],
      ml: [{ ml: [M] }],
      "space-x": [{ "space-x": [P] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [P] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", de, t] }],
      "min-w": [{ "min-w": [de, t, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            de,
            t,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [dr] },
            dr,
          ],
        },
      ],
      h: [{ h: [de, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [de, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [de, t, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", dr, ur] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            Jl,
          ],
        },
      ],
      "font-family": [{ font: [na] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            de,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", ro, Jl] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            Zn,
            de,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", de] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", de] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [m] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [m] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...ve(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", Zn, ur] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", Zn, de] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: G() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            de,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", de] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [m] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...pe(), ox] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", rx] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            ax,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [E] }],
      "gradient-via-pos": [{ via: [E] }],
      "gradient-to-pos": [{ to: [E] }],
      "gradient-from": [{ from: [C] }],
      "gradient-via": [{ via: [C] }],
      "gradient-to": [{ to: [C] }],
      rounded: [{ rounded: [i] }],
      "rounded-s": [{ "rounded-s": [i] }],
      "rounded-e": [{ "rounded-e": [i] }],
      "rounded-t": [{ "rounded-t": [i] }],
      "rounded-r": [{ "rounded-r": [i] }],
      "rounded-b": [{ "rounded-b": [i] }],
      "rounded-l": [{ "rounded-l": [i] }],
      "rounded-ss": [{ "rounded-ss": [i] }],
      "rounded-se": [{ "rounded-se": [i] }],
      "rounded-ee": [{ "rounded-ee": [i] }],
      "rounded-es": [{ "rounded-es": [i] }],
      "rounded-tl": [{ "rounded-tl": [i] }],
      "rounded-tr": [{ "rounded-tr": [i] }],
      "rounded-br": [{ "rounded-br": [i] }],
      "rounded-bl": [{ "rounded-bl": [i] }],
      "border-w": [{ border: [l] }],
      "border-w-x": [{ "border-x": [l] }],
      "border-w-y": [{ "border-y": [l] }],
      "border-w-s": [{ "border-s": [l] }],
      "border-w-e": [{ "border-e": [l] }],
      "border-w-t": [{ "border-t": [l] }],
      "border-w-r": [{ "border-r": [l] }],
      "border-w-b": [{ "border-b": [l] }],
      "border-w-l": [{ "border-l": [l] }],
      "border-opacity": [{ "border-opacity": [m] }],
      "border-style": [{ border: [...ve(), "hidden"] }],
      "divide-x": [{ "divide-x": [l] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [l] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [m] }],
      "divide-style": [{ divide: ve() }],
      "border-color": [{ border: [o] }],
      "border-color-x": [{ "border-x": [o] }],
      "border-color-y": [{ "border-y": [o] }],
      "border-color-t": [{ "border-t": [o] }],
      "border-color-r": [{ "border-r": [o] }],
      "border-color-b": [{ "border-b": [o] }],
      "border-color-l": [{ "border-l": [o] }],
      "divide-color": [{ divide: [o] }],
      "outline-style": [{ outline: ["", ...ve()] }],
      "outline-offset": [{ "outline-offset": [Zn, de] }],
      "outline-w": [{ outline: [Zn, ur] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: ue() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [m] }],
      "ring-offset-w": [{ "ring-offset": [Zn, ur] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", dr, lx] }],
      "shadow-color": [{ shadow: [na] }],
      opacity: [{ opacity: [m] }],
      "mix-blend": [{ "mix-blend": [...re(), "plus-lighter", "plus-darker"] }],
      "bg-blend": [{ "bg-blend": re() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [n] }],
      brightness: [{ brightness: [r] }],
      contrast: [{ contrast: [c] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", dr, de] }],
      grayscale: [{ grayscale: [u] }],
      "hue-rotate": [{ "hue-rotate": [h] }],
      invert: [{ invert: [f] }],
      saturate: [{ saturate: [b] }],
      sepia: [{ sepia: [N] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [n] }],
      "backdrop-brightness": [{ "backdrop-brightness": [r] }],
      "backdrop-contrast": [{ "backdrop-contrast": [c] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
      "backdrop-invert": [{ "backdrop-invert": [f] }],
      "backdrop-opacity": [{ "backdrop-opacity": [m] }],
      "backdrop-saturate": [{ "backdrop-saturate": [b] }],
      "backdrop-sepia": [{ "backdrop-sepia": [N] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            de,
          ],
        },
      ],
      duration: [{ duration: ne() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", de] }],
      delay: [{ delay: ne() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", de] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [j] }],
      "scale-x": [{ "scale-x": [j] }],
      "scale-y": [{ "scale-y": [j] }],
      rotate: [{ rotate: [ta, de] }],
      "translate-x": [{ "translate-x": [R] }],
      "translate-y": [{ "translate-y": [R] }],
      "skew-x": [{ "skew-x": [O] }],
      "skew-y": [{ "skew-y": [O] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            de,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            de,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": G() }],
      "scroll-mx": [{ "scroll-mx": G() }],
      "scroll-my": [{ "scroll-my": G() }],
      "scroll-ms": [{ "scroll-ms": G() }],
      "scroll-me": [{ "scroll-me": G() }],
      "scroll-mt": [{ "scroll-mt": G() }],
      "scroll-mr": [{ "scroll-mr": G() }],
      "scroll-mb": [{ "scroll-mb": G() }],
      "scroll-ml": [{ "scroll-ml": G() }],
      "scroll-p": [{ "scroll-p": G() }],
      "scroll-px": [{ "scroll-px": G() }],
      "scroll-py": [{ "scroll-py": G() }],
      "scroll-ps": [{ "scroll-ps": G() }],
      "scroll-pe": [{ "scroll-pe": G() }],
      "scroll-pt": [{ "scroll-pt": G() }],
      "scroll-pr": [{ "scroll-pr": G() }],
      "scroll-pb": [{ "scroll-pb": G() }],
      "scroll-pl": [{ "scroll-pl": G() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", de] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [Zn, ur, Jl] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
const fx = G3(dx);
function Fe(...e) {
  return fx(T3(e));
}
const k0 = A0(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
      variants: {
        variant: {
          default:
            "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline:
            "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2",
          sm: "h-8 rounded-md px-3 text-xs",
          lg: "h-10 rounded-md px-8",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  Be = w.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const a = r ? Ya : "button";
      return p.jsx(a, {
        className: Fe(k0({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
Be.displayName = "Button";
function Ka(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var px = ["color"],
  hx = w.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ka(e, px);
    return w.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      w.createElement("path", {
        d: "M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  mx = ["color"],
  gx = w.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ka(e, mx);
    return w.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      w.createElement("path", {
        d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  vx = ["color"],
  yx = w.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ka(e, vx);
    return w.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      w.createElement("path", {
        d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  wx = ["color"],
  xx = w.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ka(e, wx);
    return w.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      w.createElement("path", {
        d: "M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  }),
  Sx = ["color"],
  $h = w.forwardRef(function (e, t) {
    var n = e.color,
      r = n === void 0 ? "currentColor" : n,
      o = Ka(e, Sx);
    return w.createElement(
      "svg",
      Object.assign(
        {
          width: "15",
          height: "15",
          viewBox: "0 0 15 15",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        o,
        { ref: t }
      ),
      w.createElement("path", {
        d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
        fill: r,
        fillRule: "evenodd",
        clipRule: "evenodd",
      })
    );
  });
function Bt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function Ex(e, t) {
  const n = w.createContext(t);
  function r(i) {
    const { children: a, ...l } = i,
      c = w.useMemo(() => l, Object.values(l));
    return p.jsx(n.Provider, { value: c, children: a });
  }
  function o(i) {
    const a = w.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return (r.displayName = e + "Provider"), [r, o];
}
function xc(e, t = []) {
  let n = [];
  function r(i, a) {
    const l = w.createContext(a),
      c = n.length;
    n = [...n, a];
    function u(f) {
      const { scope: g, children: C, ...E } = f,
        y = (g == null ? void 0 : g[e][c]) || l,
        M = w.useMemo(() => E, Object.values(E));
      return p.jsx(y.Provider, { value: M, children: C });
    }
    function h(f, g) {
      const C = (g == null ? void 0 : g[e][c]) || l,
        E = w.useContext(C);
      if (E) return E;
      if (a !== void 0) return a;
      throw new Error(`\`${f}\` must be used within \`${i}\``);
    }
    return (u.displayName = i + "Provider"), [u, h];
  }
  const o = () => {
    const i = n.map((a) => w.createContext(a));
    return function (l) {
      const c = (l == null ? void 0 : l[e]) || i;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: c } }), [l, c]);
    };
  };
  return (o.scopeName = e), [r, bx(o, ...t)];
}
function bx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const a = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(i)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
var fo =
    globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  Cx = M2.useId || (() => {}),
  jx = 0;
function ys(e) {
  const [t, n] = w.useState(Cx());
  return (
    fo(() => {
      e || n((r) => r ?? String(jx++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function Pr(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function zv({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = Ax({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    a = i ? e : r,
    l = Pr(n),
    c = w.useCallback(
      (u) => {
        if (i) {
          const f = typeof u == "function" ? u(e) : u;
          f !== e && l(f);
        } else o(u);
      },
      [i, e, o, l]
    );
  return [a, c];
}
function Ax({ defaultProp: e, onChange: t }) {
  const n = w.useState(e),
    [r] = n,
    o = w.useRef(r),
    i = Pr(t);
  return (
    w.useEffect(() => {
      o.current !== r && (i(r), (o.current = r));
    }, [r, o, i]),
    n
  );
}
var Mx = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  It = Mx.reduce((e, t) => {
    const n = w.forwardRef((r, o) => {
      const { asChild: i, ...a } = r,
        l = i ? Ya : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        p.jsx(l, { ...a, ref: o })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function kx(e, t) {
  e && Ga.flushSync(() => e.dispatchEvent(t));
}
function Lx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pr(e);
  w.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Nx = "DismissableLayer",
  vf = "dismissableLayer.update",
  Px = "dismissableLayer.pointerDownOutside",
  Ox = "dismissableLayer.focusOutside",
  Uh,
  Zv = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  L0 = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: a,
        onDismiss: l,
        ...c
      } = e,
      u = w.useContext(Zv),
      [h, f] = w.useState(null),
      g =
        (h == null ? void 0 : h.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, C] = w.useState({}),
      E = tn(t, (P) => f(P)),
      y = Array.from(u.layers),
      [M] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = y.indexOf(M),
      v = h ? y.indexOf(h) : -1,
      b = u.layersWithOutsidePointerEventsDisabled.size > 0,
      j = v >= m,
      N = Ix((P) => {
        const R = P.target,
          F = [...u.branches].some((H) => H.contains(R));
        !j ||
          F ||
          (o == null || o(P),
          a == null || a(P),
          P.defaultPrevented || l == null || l());
      }, g),
      O = Dx((P) => {
        const R = P.target;
        [...u.branches].some((H) => H.contains(R)) ||
          (i == null || i(P),
          a == null || a(P),
          P.defaultPrevented || l == null || l());
      }, g);
    return (
      Lx((P) => {
        v === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && l && (P.preventDefault(), l()));
      }, g),
      w.useEffect(() => {
        if (h)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Uh = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(h)),
            u.layers.add(h),
            Bh(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = Uh);
            }
          );
      }, [h, g, n, u]),
      w.useEffect(
        () => () => {
          h &&
            (u.layers.delete(h),
            u.layersWithOutsidePointerEventsDisabled.delete(h),
            Bh());
        },
        [h, u]
      ),
      w.useEffect(() => {
        const P = () => C({});
        return (
          document.addEventListener(vf, P),
          () => document.removeEventListener(vf, P)
        );
      }, []),
      p.jsx(It.div, {
        ...c,
        ref: E,
        style: {
          pointerEvents: b ? (j ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Bt(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: Bt(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: Bt(
          e.onPointerDownCapture,
          N.onPointerDownCapture
        ),
      })
    );
  });
L0.displayName = Nx;
var Rx = "DismissableLayerBranch",
  Tx = w.forwardRef((e, t) => {
    const n = w.useContext(Zv),
      r = w.useRef(null),
      o = tn(t, r);
    return (
      w.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      p.jsx(It.div, { ...e, ref: o })
    );
  });
Tx.displayName = Rx;
function Ix(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pr(e),
    r = w.useRef(!1),
    o = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let c = function () {
              $v(Px, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = c),
                t.addEventListener("click", o.current, { once: !0 }))
              : c();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Dx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Pr(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          $v(Ox, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Bh() {
  const e = new CustomEvent(vf);
  document.dispatchEvent(e);
}
function $v(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? kx(o, i) : o.dispatchEvent(i);
}
var fd = "focusScope.autoFocusOnMount",
  pd = "focusScope.autoFocusOnUnmount",
  Fh = { bubbles: !1, cancelable: !0 },
  Hx = "FocusScope",
  N0 = w.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...a
      } = e,
      [l, c] = w.useState(null),
      u = Pr(o),
      h = Pr(i),
      f = w.useRef(null),
      g = tn(t, (y) => c(y)),
      C = w.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    w.useEffect(() => {
      if (r) {
        let y = function (b) {
            if (C.paused || !l) return;
            const j = b.target;
            l.contains(j) ? (f.current = j) : fr(f.current, { select: !0 });
          },
          M = function (b) {
            if (C.paused || !l) return;
            const j = b.relatedTarget;
            j !== null && (l.contains(j) || fr(f.current, { select: !0 }));
          },
          m = function (b) {
            if (document.activeElement === document.body)
              for (const N of b) N.removedNodes.length > 0 && fr(l);
          };
        document.addEventListener("focusin", y),
          document.addEventListener("focusout", M);
        const v = new MutationObserver(m);
        return (
          l && v.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", y),
              document.removeEventListener("focusout", M),
              v.disconnect();
          }
        );
      }
    }, [r, l, C.paused]),
      w.useEffect(() => {
        if (l) {
          Gh.add(C);
          const y = document.activeElement;
          if (!l.contains(y)) {
            const m = new CustomEvent(fd, Fh);
            l.addEventListener(fd, u),
              l.dispatchEvent(m),
              m.defaultPrevented ||
                (_x(Ux(Uv(l)), { select: !0 }),
                document.activeElement === y && fr(l));
          }
          return () => {
            l.removeEventListener(fd, u),
              setTimeout(() => {
                const m = new CustomEvent(pd, Fh);
                l.addEventListener(pd, h),
                  l.dispatchEvent(m),
                  m.defaultPrevented || fr(y ?? document.body, { select: !0 }),
                  l.removeEventListener(pd, h),
                  Gh.remove(C);
              }, 0);
          };
        }
      }, [l, u, h, C]);
    const E = w.useCallback(
      (y) => {
        if ((!n && !r) || C.paused) return;
        const M = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey,
          m = document.activeElement;
        if (M && m) {
          const v = y.currentTarget,
            [b, j] = Vx(v);
          b && j
            ? !y.shiftKey && m === j
              ? (y.preventDefault(), n && fr(b, { select: !0 }))
              : y.shiftKey &&
                m === b &&
                (y.preventDefault(), n && fr(j, { select: !0 }))
            : m === v && y.preventDefault();
        }
      },
      [n, r, C.paused]
    );
    return p.jsx(It.div, { tabIndex: -1, ...a, ref: g, onKeyDown: E });
  });
N0.displayName = Hx;
function _x(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((fr(r, { select: t }), document.activeElement !== n)) return;
}
function Vx(e) {
  const t = Uv(e),
    n = Wh(t, e),
    r = Wh(t.reverse(), e);
  return [n, r];
}
function Uv(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Wh(e, t) {
  for (const n of e) if (!zx(n, { upTo: t })) return n;
}
function zx(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Zx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Zx(e) && t && e.select();
  }
}
var Gh = $x();
function $x() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Yh(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Yh(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Yh(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ux(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Bx = "Portal",
  P0 = w.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = w.useState(!1);
    fo(() => i(!0), []);
    const a =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return a ? C3.createPortal(p.jsx(It.div, { ...r, ref: t }), a) : null;
  });
P0.displayName = Bx;
function Fx(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var yi = (e) => {
  const { present: t, children: n } = e,
    r = Wx(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    i = tn(r.ref, Gx(o));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(o, { ref: i })
    : null;
};
yi.displayName = "Presence";
function Wx(e) {
  const [t, n] = w.useState(),
    r = w.useRef({}),
    o = w.useRef(e),
    i = w.useRef("none"),
    a = e ? "mounted" : "unmounted",
    [l, c] = Fx(a, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = es(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    fo(() => {
      const u = r.current,
        h = o.current;
      if (h !== e) {
        const g = i.current,
          C = es(u);
        e
          ? c("MOUNT")
          : C === "none" || (u == null ? void 0 : u.display) === "none"
          ? c("UNMOUNT")
          : c(h && g !== C ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, c]),
    fo(() => {
      if (t) {
        const u = (f) => {
            const C = es(r.current).includes(f.animationName);
            f.target === t && C && Ga.flushSync(() => c("ANIMATION_END"));
          },
          h = (f) => {
            f.target === t && (i.current = es(r.current));
          };
        return (
          t.addEventListener("animationstart", h),
          t.addEventListener("animationcancel", u),
          t.addEventListener("animationend", u),
          () => {
            t.removeEventListener("animationstart", h),
              t.removeEventListener("animationcancel", u),
              t.removeEventListener("animationend", u);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: w.useCallback((u) => {
        u && (r.current = getComputedStyle(u)), n(u);
      }, []),
    }
  );
}
function es(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Gx(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var hd = 0;
function Bv() {
  w.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Kh()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Kh()),
      hd++,
      () => {
        hd === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          hd--;
      }
    );
  }, []);
}
function Kh() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var kn = function () {
  return (
    (kn =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    kn.apply(this, arguments)
  );
};
function Fv(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function Yx(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var ws = "right-scroll-bar-position",
  xs = "width-before-scroll-bar",
  Kx = "with-scroll-bars-hidden",
  qx = "--removed-body-scroll-bar-size";
function md(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Xx(e, t) {
  var n = w.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var Qx = typeof window < "u" ? w.useLayoutEffect : w.useEffect,
  qh = new WeakMap();
function Jx(e, t) {
  var n = Xx(null, function (r) {
    return e.forEach(function (o) {
      return md(o, r);
    });
  });
  return (
    Qx(
      function () {
        var r = qh.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            a = n.current;
          o.forEach(function (l) {
            i.has(l) || md(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || md(l, a);
            });
        }
        qh.set(n, e);
      },
      [e]
    ),
    n
  );
}
function e5(e) {
  return e;
}
function t5(e, t) {
  t === void 0 && (t = e5);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var a = t(i, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (l) {
              return l !== a;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var a = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (a = n);
        }
        var c = function () {
            var h = a;
            (a = []), h.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(c);
          };
        u(),
          (n = {
            push: function (h) {
              a.push(h), u();
            },
            filter: function (h) {
              return (a = a.filter(h)), n;
            },
          });
      },
    };
  return o;
}
function n5(e) {
  e === void 0 && (e = {});
  var t = t5(null);
  return (t.options = kn({ async: !0, ssr: !1 }, e)), t;
}
var Wv = function (e) {
  var t = e.sideCar,
    n = Fv(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return w.createElement(r, kn({}, n));
};
Wv.isSideCarExport = !0;
function r5(e, t) {
  return e.useMedium(t), Wv;
}
var Gv = n5(),
  gd = function () {},
  Sc = w.forwardRef(function (e, t) {
    var n = w.useRef(null),
      r = w.useState({
        onScrollCapture: gd,
        onWheelCapture: gd,
        onTouchMoveCapture: gd,
      }),
      o = r[0],
      i = r[1],
      a = e.forwardProps,
      l = e.children,
      c = e.className,
      u = e.removeScrollBar,
      h = e.enabled,
      f = e.shards,
      g = e.sideCar,
      C = e.noIsolation,
      E = e.inert,
      y = e.allowPinchZoom,
      M = e.as,
      m = M === void 0 ? "div" : M,
      v = e.gapMode,
      b = Fv(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      j = g,
      N = Jx([n, t]),
      O = kn(kn({}, b), o);
    return w.createElement(
      w.Fragment,
      null,
      h &&
        w.createElement(j, {
          sideCar: Gv,
          removeScrollBar: u,
          shards: f,
          noIsolation: C,
          inert: E,
          setCallbacks: i,
          allowPinchZoom: !!y,
          lockRef: n,
          gapMode: v,
        }),
      a
        ? w.cloneElement(w.Children.only(l), kn(kn({}, O), { ref: N }))
        : w.createElement(m, kn({}, O, { className: c, ref: N }), l)
    );
  });
Sc.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Sc.classNames = { fullWidth: xs, zeroRight: ws };
var o5 = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function i5() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = o5();
  return t && e.setAttribute("nonce", t), e;
}
function a5(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function l5(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var s5 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = i5()) && (a5(t, n), l5(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  c5 = function () {
    var e = s5();
    return function (t, n) {
      w.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Yv = function () {
    var e = c5(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  u5 = { left: 0, top: 0, right: 0, gap: 0 },
  vd = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  d5 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [vd(n), vd(r), vd(o)];
  },
  f5 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return u5;
    var t = d5(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  p5 = Yv(),
  ti = "data-scroll-locked",
  h5 = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      a = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Kx,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ti,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          ws,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          xs,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(ws, " .")
        .concat(
          ws,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(xs, " .")
        .concat(
          xs,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ti,
          `] {
    `
        )
        .concat(qx, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Xh = function () {
    var e = parseInt(document.body.getAttribute(ti) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  m5 = function () {
    w.useEffect(function () {
      return (
        document.body.setAttribute(ti, (Xh() + 1).toString()),
        function () {
          var e = Xh() - 1;
          e <= 0
            ? document.body.removeAttribute(ti)
            : document.body.setAttribute(ti, e.toString());
        }
      );
    }, []);
  },
  g5 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    m5();
    var i = w.useMemo(
      function () {
        return f5(o);
      },
      [o]
    );
    return w.createElement(p5, { styles: h5(i, !t, o, n ? "" : "!important") });
  },
  yf = !1;
if (typeof window < "u")
  try {
    var ts = Object.defineProperty({}, "passive", {
      get: function () {
        return (yf = !0), !0;
      },
    });
    window.addEventListener("test", ts, ts),
      window.removeEventListener("test", ts, ts);
  } catch {
    yf = !1;
  }
var Ro = yf ? { passive: !1 } : !1,
  v5 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Kv = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !v5(e) && n[t] === "visible")
    );
  },
  y5 = function (e) {
    return Kv(e, "overflowY");
  },
  w5 = function (e) {
    return Kv(e, "overflowX");
  },
  Qh = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = qv(e, r);
      if (o) {
        var i = Xv(e, r),
          a = i[1],
          l = i[2];
        if (a > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  x5 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  S5 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  qv = function (e, t) {
    return e === "v" ? y5(t) : w5(t);
  },
  Xv = function (e, t) {
    return e === "v" ? x5(t) : S5(t);
  },
  E5 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  b5 = function (e, t, n, r, o) {
    var i = E5(e, window.getComputedStyle(t).direction),
      a = i * r,
      l = n.target,
      c = t.contains(l),
      u = !1,
      h = a > 0,
      f = 0,
      g = 0;
    do {
      var C = Xv(e, l),
        E = C[0],
        y = C[1],
        M = C[2],
        m = y - M - i * E;
      (E || m) && qv(e, l) && ((f += m), (g += E)),
        l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
    } while ((!c && l !== document.body) || (c && (t.contains(l) || t === l)));
    return (
      ((h && (Math.abs(f) < 1 || !o)) || (!h && (Math.abs(g) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  ns = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Jh = function (e) {
    return [e.deltaX, e.deltaY];
  },
  em = function (e) {
    return e && "current" in e ? e.current : e;
  },
  C5 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  j5 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  A5 = 0,
  To = [];
function M5(e) {
  var t = w.useRef([]),
    n = w.useRef([0, 0]),
    r = w.useRef(),
    o = w.useState(A5++)[0],
    i = w.useState(Yv)[0],
    a = w.useRef(e);
  w.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    w.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var y = Yx([e.lockRef.current], (e.shards || []).map(em), !0).filter(
            Boolean
          );
          return (
            y.forEach(function (M) {
              return M.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                y.forEach(function (M) {
                  return M.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = w.useCallback(function (y, M) {
      if ("touches" in y && y.touches.length === 2)
        return !a.current.allowPinchZoom;
      var m = ns(y),
        v = n.current,
        b = "deltaX" in y ? y.deltaX : v[0] - m[0],
        j = "deltaY" in y ? y.deltaY : v[1] - m[1],
        N,
        O = y.target,
        P = Math.abs(b) > Math.abs(j) ? "h" : "v";
      if ("touches" in y && P === "h" && O.type === "range") return !1;
      var R = Qh(P, O);
      if (!R) return !0;
      if ((R ? (N = P) : ((N = P === "v" ? "h" : "v"), (R = Qh(P, O))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in y && (b || j) && (r.current = N), !N)
      )
        return !0;
      var F = r.current || N;
      return b5(F, M, y, F === "h" ? b : j, !0);
    }, []),
    c = w.useCallback(function (y) {
      var M = y;
      if (!(!To.length || To[To.length - 1] !== i)) {
        var m = "deltaY" in M ? Jh(M) : ns(M),
          v = t.current.filter(function (N) {
            return (
              N.name === M.type &&
              (N.target === M.target || M.target === N.shadowParent) &&
              C5(N.delta, m)
            );
          })[0];
        if (v && v.should) {
          M.cancelable && M.preventDefault();
          return;
        }
        if (!v) {
          var b = (a.current.shards || [])
              .map(em)
              .filter(Boolean)
              .filter(function (N) {
                return N.contains(M.target);
              }),
            j = b.length > 0 ? l(M, b[0]) : !a.current.noIsolation;
          j && M.cancelable && M.preventDefault();
        }
      }
    }, []),
    u = w.useCallback(function (y, M, m, v) {
      var b = { name: y, delta: M, target: m, should: v, shadowParent: k5(m) };
      t.current.push(b),
        setTimeout(function () {
          t.current = t.current.filter(function (j) {
            return j !== b;
          });
        }, 1);
    }, []),
    h = w.useCallback(function (y) {
      (n.current = ns(y)), (r.current = void 0);
    }, []),
    f = w.useCallback(function (y) {
      u(y.type, Jh(y), y.target, l(y, e.lockRef.current));
    }, []),
    g = w.useCallback(function (y) {
      u(y.type, ns(y), y.target, l(y, e.lockRef.current));
    }, []);
  w.useEffect(function () {
    return (
      To.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", c, Ro),
      document.addEventListener("touchmove", c, Ro),
      document.addEventListener("touchstart", h, Ro),
      function () {
        (To = To.filter(function (y) {
          return y !== i;
        })),
          document.removeEventListener("wheel", c, Ro),
          document.removeEventListener("touchmove", c, Ro),
          document.removeEventListener("touchstart", h, Ro);
      }
    );
  }, []);
  var C = e.removeScrollBar,
    E = e.inert;
  return w.createElement(
    w.Fragment,
    null,
    E ? w.createElement(i, { styles: j5(o) }) : null,
    C ? w.createElement(g5, { gapMode: e.gapMode }) : null
  );
}
function k5(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const L5 = r5(Gv, M5);
var O0 = w.forwardRef(function (e, t) {
  return w.createElement(Sc, kn({}, e, { ref: t, sideCar: L5 }));
});
O0.classNames = Sc.classNames;
var N5 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Io = new WeakMap(),
  rs = new WeakMap(),
  os = {},
  yd = 0,
  Qv = function (e) {
    return e && (e.host || Qv(e.parentNode));
  },
  P5 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Qv(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  O5 = function (e, t, n, r) {
    var o = P5(t, Array.isArray(e) ? e : [e]);
    os[n] || (os[n] = new WeakMap());
    var i = os[n],
      a = [],
      l = new Set(),
      c = new Set(o),
      u = function (f) {
        !f || l.has(f) || (l.add(f), u(f.parentNode));
      };
    o.forEach(u);
    var h = function (f) {
      !f ||
        c.has(f) ||
        Array.prototype.forEach.call(f.children, function (g) {
          if (l.has(g)) h(g);
          else
            try {
              var C = g.getAttribute(r),
                E = C !== null && C !== "false",
                y = (Io.get(g) || 0) + 1,
                M = (i.get(g) || 0) + 1;
              Io.set(g, y),
                i.set(g, M),
                a.push(g),
                y === 1 && E && rs.set(g, !0),
                M === 1 && g.setAttribute(n, "true"),
                E || g.setAttribute(r, "true");
            } catch (m) {
              console.error("aria-hidden: cannot operate on ", g, m);
            }
        });
    };
    return (
      h(t),
      l.clear(),
      yd++,
      function () {
        a.forEach(function (f) {
          var g = Io.get(f) - 1,
            C = i.get(f) - 1;
          Io.set(f, g),
            i.set(f, C),
            g || (rs.has(f) || f.removeAttribute(r), rs.delete(f)),
            C || f.removeAttribute(n);
        }),
          yd--,
          yd ||
            ((Io = new WeakMap()),
            (Io = new WeakMap()),
            (rs = new WeakMap()),
            (os = {}));
      }
    );
  },
  Jv = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = N5(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        O5(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  R0 = "Dialog",
  [e8, t8] = xc(R0),
  [R5, Sn] = e8(R0),
  n8 = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !0,
      } = e,
      l = w.useRef(null),
      c = w.useRef(null),
      [u = !1, h] = zv({ prop: r, defaultProp: o, onChange: i });
    return p.jsx(R5, {
      scope: t,
      triggerRef: l,
      contentRef: c,
      contentId: ys(),
      titleId: ys(),
      descriptionId: ys(),
      open: u,
      onOpenChange: h,
      onOpenToggle: w.useCallback(() => h((f) => !f), [h]),
      modal: a,
      children: n,
    });
  };
n8.displayName = R0;
var r8 = "DialogTrigger",
  o8 = w.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Sn(r8, n),
      i = tn(t, o.triggerRef);
    return p.jsx(It.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": D0(o.open),
      ...r,
      ref: i,
      onClick: Bt(e.onClick, o.onOpenToggle),
    });
  });
o8.displayName = r8;
var T0 = "DialogPortal",
  [T5, i8] = e8(T0, { forceMount: void 0 }),
  a8 = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Sn(T0, t);
    return p.jsx(T5, {
      scope: t,
      forceMount: n,
      children: w.Children.map(r, (a) =>
        p.jsx(yi, {
          present: n || i.open,
          children: p.jsx(P0, { asChild: !0, container: o, children: a }),
        })
      ),
    });
  };
a8.displayName = T0;
var Ws = "DialogOverlay",
  l8 = w.forwardRef((e, t) => {
    const n = i8(Ws, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Sn(Ws, e.__scopeDialog);
    return i.modal
      ? p.jsx(yi, {
          present: r || i.open,
          children: p.jsx(I5, { ...o, ref: t }),
        })
      : null;
  });
l8.displayName = Ws;
var I5 = w.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Sn(Ws, n);
    return p.jsx(O0, {
      as: Ya,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: p.jsx(It.div, {
        "data-state": D0(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  po = "DialogContent",
  s8 = w.forwardRef((e, t) => {
    const n = i8(po, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Sn(po, e.__scopeDialog);
    return p.jsx(yi, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(D5, { ...o, ref: t })
        : p.jsx(H5, { ...o, ref: t }),
    });
  });
s8.displayName = po;
var D5 = w.forwardRef((e, t) => {
    const n = Sn(po, e.__scopeDialog),
      r = w.useRef(null),
      o = tn(t, n.contentRef, r);
    return (
      w.useEffect(() => {
        const i = r.current;
        if (i) return Jv(i);
      }, []),
      p.jsx(c8, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Bt(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Bt(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent,
            l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: Bt(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  H5 = w.forwardRef((e, t) => {
    const n = Sn(po, e.__scopeDialog),
      r = w.useRef(!1),
      o = w.useRef(!1);
    return p.jsx(c8, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var a, l;
        (a = e.onCloseAutoFocus) == null || a.call(e, i),
          i.defaultPrevented ||
            (r.current || (l = n.triggerRef.current) == null || l.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const a = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  c8 = w.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...a
      } = e,
      l = Sn(po, n),
      c = w.useRef(null),
      u = tn(t, c);
    return (
      Bv(),
      p.jsxs(p.Fragment, {
        children: [
          p.jsx(N0, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: p.jsx(L0, {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": D0(l.open),
              ...a,
              ref: u,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
          p.jsxs(p.Fragment, {
            children: [
              p.jsx(V5, { titleId: l.titleId }),
              p.jsx(Z5, { contentRef: c, descriptionId: l.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  I0 = "DialogTitle",
  u8 = w.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Sn(I0, n);
    return p.jsx(It.h2, { id: o.titleId, ...r, ref: t });
  });
u8.displayName = I0;
var d8 = "DialogDescription",
  f8 = w.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Sn(d8, n);
    return p.jsx(It.p, { id: o.descriptionId, ...r, ref: t });
  });
f8.displayName = d8;
var p8 = "DialogClose",
  h8 = w.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Sn(p8, n);
    return p.jsx(It.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Bt(e.onClick, () => o.onOpenChange(!1)),
    });
  });
h8.displayName = p8;
function D0(e) {
  return e ? "open" : "closed";
}
var m8 = "DialogTitleWarning",
  [_5, g8] = Ex(m8, { contentName: po, titleName: I0, docsSlug: "dialog" }),
  V5 = ({ titleId: e }) => {
    const t = g8(m8),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      w.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  z5 = "DialogDescriptionWarning",
  Z5 = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      g8(z5).contentName
    }}.`;
    return (
      w.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  v8 = n8,
  y8 = o8,
  w8 = a8,
  H0 = l8,
  _0 = s8,
  V0 = u8,
  z0 = f8,
  Ec = h8;
const x8 = v8,
  S8 = y8,
  tm = Ec,
  $5 = w8,
  E8 = w.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(H0, {
      className: Fe(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
E8.displayName = H0.displayName;
const U5 = A0(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  Z0 = w.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, o) =>
      p.jsxs($5, {
        children: [
          p.jsx(E8, {}),
          p.jsxs(_0, {
            ref: o,
            className: Fe(U5({ side: e }), t),
            ...r,
            children: [
              p.jsxs(Ec, {
                className:
                  "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  p.jsx(yx, { className: "h-4 w-4" }),
                  p.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
Z0.displayName = _0.displayName;
const b8 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: Fe("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
b8.displayName = "SheetHeader";
const C8 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: Fe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
C8.displayName = "SheetFooter";
const j8 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(V0, {
    ref: n,
    className: Fe("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
j8.displayName = V0.displayName;
const A8 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(z0, { ref: n, className: Fe("text-sm text-muted-foreground", e), ...t })
);
A8.displayName = z0.displayName;
const B5 = ({ activeSection: e }) => {
  const t = w.useRef(null);
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx("div", {
        className: " fixed top-0 lg:h-20 h-12 lg:py-2 z-50 bg-white w-full",
        children: p.jsx(_r, {
          children: p.jsxs("div", {
            className: " flex justify-between h-full items-center",
            children: [
              p.jsx(M3, {}),
              p.jsx("div", {
                className: " hidden lg:block",
                children: p.jsx(Hh, { activeSection: e }),
              }),
              p.jsx("div", {
                className: " hidden lg:block",
                children: p.jsx(k3, {}),
              }),
              p.jsx("div", {
                className: " block lg:hidden",
                children: p.jsx(Be, {
                  onClick: () => t.current.click(),
                  variant: "link",
                  children: p.jsx(xx, { color: "blue", height: 21, width: 21 }),
                }),
              }),
            ],
          }),
        }),
      }),
      p.jsx("div", {
        className: " lg:hidden",
        children: p.jsxs(x8, {
          className: " !z-[1005]",
          children: [
            p.jsx(S8, { ref: t }),
            p.jsx(Z0, { children: p.jsx(Hh, { ham: t, activeSection: e }) }),
          ],
        }),
      }),
    ],
  });
};
function oe(e, t, n, r) {
  function o(i) {
    return i instanceof n
      ? i
      : new n(function (a) {
          a(i);
        });
  }
  return new (n || (n = Promise))(function (i, a) {
    function l(h) {
      try {
        u(r.next(h));
      } catch (f) {
        a(f);
      }
    }
    function c(h) {
      try {
        u(r.throw(h));
      } catch (f) {
        a(f);
      }
    }
    function u(h) {
      h.done ? i(h.value) : o(h.value).then(l, c);
    }
    u((r = r.apply(e, [])).next());
  });
}
let Ht = class M8 {
  constructor(t) {
    this.client = t;
  }
  static flatten(t, n = "") {
    let r = {};
    for (const [o, i] of Object.entries(t)) {
      let a = n ? n + "[" + o + "]" : o;
      Array.isArray(i)
        ? (r = Object.assign(Object.assign({}, r), M8.flatten(i, a)))
        : (r[a] = i);
    }
    return r;
  }
};
Ht.CHUNK_SIZE = 5 * 1024 * 1024;
class B extends Error {
  constructor(t, n = 0, r = "", o = "") {
    super(t),
      (this.name = "AppwriteException"),
      (this.message = t),
      (this.code = n),
      (this.type = r),
      (this.response = o);
  }
}
class Tn {
  constructor() {
    (this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
    }),
      (this.headers = {
        "x-sdk-name": "Web",
        "x-sdk-platform": "client",
        "x-sdk-language": "web",
        "x-sdk-version": "15.0.0",
        "X-Appwrite-Response-Format": "1.5.0",
      }),
      (this.realtime = {
        socket: void 0,
        timeout: void 0,
        url: "",
        channels: new Set(),
        subscriptions: new Map(),
        subscriptionsCounter: 0,
        reconnect: !0,
        reconnectAttempts: 0,
        lastMessage: void 0,
        connect: () => {
          clearTimeout(this.realtime.timeout),
            (this.realtime.timeout =
              window == null
                ? void 0
                : window.setTimeout(() => {
                    this.realtime.createSocket();
                  }, 50));
        },
        getTimeout: () => {
          switch (!0) {
            case this.realtime.reconnectAttempts < 5:
              return 1e3;
            case this.realtime.reconnectAttempts < 15:
              return 5e3;
            case this.realtime.reconnectAttempts < 100:
              return 1e4;
            default:
              return 6e4;
          }
        },
        createSocket: () => {
          var t, n, r;
          if (this.realtime.channels.size < 1) {
            (this.realtime.reconnect = !1),
              (t = this.realtime.socket) === null || t === void 0 || t.close();
            return;
          }
          const o = new URLSearchParams();
          o.set("project", this.config.project),
            this.realtime.channels.forEach((a) => {
              o.append("channels[]", a);
            });
          const i = this.config.endpointRealtime + "/realtime?" + o.toString();
          (i !== this.realtime.url ||
            !this.realtime.socket ||
            ((n = this.realtime.socket) === null || n === void 0
              ? void 0
              : n.readyState) > WebSocket.OPEN) &&
            (this.realtime.socket &&
              ((r = this.realtime.socket) === null || r === void 0
                ? void 0
                : r.readyState) < WebSocket.CLOSING &&
              ((this.realtime.reconnect = !1), this.realtime.socket.close()),
            (this.realtime.url = i),
            (this.realtime.socket = new WebSocket(i)),
            this.realtime.socket.addEventListener(
              "message",
              this.realtime.onMessage
            ),
            this.realtime.socket.addEventListener("open", (a) => {
              this.realtime.reconnectAttempts = 0;
            }),
            this.realtime.socket.addEventListener("close", (a) => {
              var l, c, u;
              if (
                !this.realtime.reconnect ||
                (((c =
                  (l = this.realtime) === null || l === void 0
                    ? void 0
                    : l.lastMessage) === null || c === void 0
                  ? void 0
                  : c.type) === "error" &&
                  ((u = this.realtime) === null || u === void 0
                    ? void 0
                    : u.lastMessage.data
                  ).code === 1008)
              ) {
                this.realtime.reconnect = !0;
                return;
              }
              const h = this.realtime.getTimeout();
              console.error(
                `Realtime got disconnected. Reconnect will be attempted in ${
                  h / 1e3
                } seconds.`,
                a.reason
              ),
                setTimeout(() => {
                  this.realtime.reconnectAttempts++,
                    this.realtime.createSocket();
                }, h);
            }));
        },
        onMessage: (t) => {
          var n, r;
          try {
            const o = JSON.parse(t.data);
            switch (((this.realtime.lastMessage = o), o.type)) {
              case "connected":
                const i = JSON.parse(
                    (n = window.localStorage.getItem("cookieFallback")) !==
                      null && n !== void 0
                      ? n
                      : "{}"
                  ),
                  a =
                    i == null ? void 0 : i[`a_session_${this.config.project}`],
                  l = o.data;
                a &&
                  !l.user &&
                  ((r = this.realtime.socket) === null ||
                    r === void 0 ||
                    r.send(
                      JSON.stringify({
                        type: "authentication",
                        data: { session: a },
                      })
                    ));
                break;
              case "event":
                let c = o.data;
                if (c != null && c.channels) {
                  if (!c.channels.some((h) => this.realtime.channels.has(h)))
                    return;
                  this.realtime.subscriptions.forEach((h) => {
                    c.channels.some((f) => h.channels.includes(f)) &&
                      setTimeout(() => h.callback(c));
                  });
                }
                break;
              case "error":
                throw o.data;
              default:
                break;
            }
          } catch (o) {
            console.error(o);
          }
        },
        cleanUp: (t) => {
          this.realtime.channels.forEach((n) => {
            t.includes(n) &&
              (Array.from(this.realtime.subscriptions).some(([o, i]) =>
                i.channels.includes(n)
              ) ||
                this.realtime.channels.delete(n));
          });
        },
      });
  }
  setEndpoint(t) {
    return (
      (this.config.endpoint = t),
      (this.config.endpointRealtime =
        this.config.endpointRealtime ||
        this.config.endpoint
          .replace("https://", "wss://")
          .replace("http://", "ws://")),
      this
    );
  }
  setEndpointRealtime(t) {
    return (this.config.endpointRealtime = t), this;
  }
  setProject(t) {
    return (
      (this.headers["X-Appwrite-Project"] = t), (this.config.project = t), this
    );
  }
  setJWT(t) {
    return (this.headers["X-Appwrite-JWT"] = t), (this.config.jwt = t), this;
  }
  setLocale(t) {
    return (
      (this.headers["X-Appwrite-Locale"] = t), (this.config.locale = t), this
    );
  }
  setSession(t) {
    return (
      (this.headers["X-Appwrite-Session"] = t), (this.config.session = t), this
    );
  }
  subscribe(t, n) {
    let r = typeof t == "string" ? [t] : t;
    r.forEach((i) => this.realtime.channels.add(i));
    const o = this.realtime.subscriptionsCounter++;
    return (
      this.realtime.subscriptions.set(o, { channels: r, callback: n }),
      this.realtime.connect(),
      () => {
        this.realtime.subscriptions.delete(o),
          this.realtime.cleanUp(r),
          this.realtime.connect();
      }
    );
  }
  call(t, n, r = {}, o = {}) {
    var i;
    return oe(this, void 0, void 0, function* () {
      (t = t.toUpperCase()), (r = Object.assign({}, this.headers, r));
      let a = { method: t, headers: r, credentials: "include" };
      if (typeof window < "u" && window.localStorage) {
        const l = window.localStorage.getItem("cookieFallback");
        l && (r["X-Fallback-Cookies"] = l);
      }
      if (t === "GET")
        for (const [l, c] of Object.entries(Ht.flatten(o)))
          n.searchParams.append(l, c);
      else
        switch (r["content-type"]) {
          case "application/json":
            a.body = JSON.stringify(o);
            break;
          case "multipart/form-data":
            let l = new FormData();
            for (const c in o)
              Array.isArray(o[c])
                ? o[c].forEach((u) => {
                    l.append(c + "[]", u);
                  })
                : l.append(c, o[c]);
            (a.body = l), delete r["content-type"];
            break;
        }
      try {
        let l = null;
        const c = yield fetch(n.toString(), a);
        if (
          (!((i = c.headers.get("content-type")) === null || i === void 0) &&
          i.includes("application/json")
            ? (l = yield c.json())
            : (l = { message: yield c.text() }),
          400 <= c.status)
        )
          throw new B(
            l == null ? void 0 : l.message,
            c.status,
            l == null ? void 0 : l.type,
            l
          );
        const u = c.headers.get("X-Fallback-Cookies");
        return (
          typeof window < "u" &&
            window.localStorage &&
            u &&
            (window.console.warn(
              "Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint."
            ),
            window.localStorage.setItem("cookieFallback", u)),
          l
        );
      } catch (l) {
        throw l instanceof B ? l : new B(l.message);
      }
    });
  }
}
class F5 extends Ht {
  constructor(t) {
    super(t);
  }
  get() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  create(t, n, r, o) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "email"');
      if (typeof r > "u") throw new B('Missing required parameter: "password"');
      const i = "/account",
        a = {};
      typeof t < "u" && (a.userId = t),
        typeof n < "u" && (a.email = n),
        typeof r < "u" && (a.password = r),
        typeof o < "u" && (a.name = o);
      const l = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "post",
        l,
        { "content-type": "application/json" },
        a
      );
    });
  }
  updateEmail(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "email"');
      if (typeof n > "u") throw new B('Missing required parameter: "password"');
      const r = "/account/email",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  listIdentities(t) {
    return oe(this, void 0, void 0, function* () {
      const n = "/account/identities",
        r = {};
      typeof t < "u" && (r.queries = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  deleteIdentity(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "identityId"');
      const n = "/account/identities/{identityId}".replace("{identityId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createJWT() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/jwt",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  listLogs(t) {
    return oe(this, void 0, void 0, function* () {
      const n = "/account/logs",
        r = {};
      typeof t < "u" && (r.queries = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMFA(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "mfa"');
      const n = "/account/mfa",
        r = {};
      typeof t < "u" && (r.mfa = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createMfaAuthenticator(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "type"');
      const n = "/account/mfa/authenticators/{type}".replace("{type}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMfaAuthenticator(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "type"');
      if (typeof n > "u") throw new B('Missing required parameter: "otp"');
      const r = "/account/mfa/authenticators/{type}".replace("{type}", t),
        o = {};
      typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  deleteMfaAuthenticator(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "type"');
      if (typeof n > "u") throw new B('Missing required parameter: "otp"');
      const r = "/account/mfa/authenticators/{type}".replace("{type}", t),
        o = {};
      typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "delete",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createMfaChallenge(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "factor"');
      const n = "/account/mfa/challenge",
        r = {};
      typeof t < "u" && (r.factor = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateMfaChallenge(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "challengeId"');
      if (typeof n > "u") throw new B('Missing required parameter: "otp"');
      const r = "/account/mfa/challenge",
        o = {};
      typeof t < "u" && (o.challengeId = t), typeof n < "u" && (o.otp = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  listMfaFactors() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/mfa/factors",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  getMfaRecoveryCodes() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createMfaRecoveryCodes() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updateMfaRecoveryCodes() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/mfa/recovery-codes",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "patch",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updateName(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "name"');
      const n = "/account/name",
        r = {};
      typeof t < "u" && (r.name = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updatePassword(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "password"');
      const r = "/account/password",
        o = {};
      typeof t < "u" && (o.password = t), typeof n < "u" && (o.oldPassword = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updatePhone(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "phone"');
      if (typeof n > "u") throw new B('Missing required parameter: "password"');
      const r = "/account/phone",
        o = {};
      typeof t < "u" && (o.phone = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "patch",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  getPrefs() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/prefs",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updatePrefs(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "prefs"');
      const n = "/account/prefs",
        r = {};
      typeof t < "u" && (r.prefs = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createRecovery(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "email"');
      if (typeof n > "u") throw new B('Missing required parameter: "url"');
      const r = "/account/recovery",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.url = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updateRecovery(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      if (typeof r > "u") throw new B('Missing required parameter: "password"');
      const o = "/account/recovery",
        i = {};
      typeof t < "u" && (i.userId = t),
        typeof n < "u" && (i.secret = n),
        typeof r < "u" && (i.password = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "put",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  listSessions() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/sessions",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "get",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  deleteSessions() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/sessions",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "delete",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createAnonymousSession() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/sessions/anonymous",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createEmailPasswordSession(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "email"');
      if (typeof n > "u") throw new B('Missing required parameter: "password"');
      const r = "/account/sessions/email",
        o = {};
      typeof t < "u" && (o.email = t), typeof n < "u" && (o.password = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updateMagicURLSession(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      const r = "/account/sessions/magic-url",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createOAuth2Session(t, n, r, o) {
    if (typeof t > "u") throw new B('Missing required parameter: "provider"');
    const i = "/account/sessions/oauth2/{provider}".replace("{provider}", t),
      a = {};
    typeof n < "u" && (a.success = n),
      typeof r < "u" && (a.failure = r),
      typeof o < "u" && (a.scopes = o);
    const l = new URL(this.client.config.endpoint + i);
    a.project = this.client.config.project;
    for (const [c, u] of Object.entries(Ht.flatten(a)))
      l.searchParams.append(c, u);
    if (typeof window < "u" && window != null && window.location)
      window.location.href = l.toString();
    else return l;
  }
  updatePhoneSession(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      const r = "/account/sessions/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createSession(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      const r = "/account/sessions/token",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  getSession(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "get",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateSession(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "patch",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  deleteSession(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "sessionId"');
      const n = "/account/sessions/{sessionId}".replace("{sessionId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateStatus() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/status",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "patch",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  createPushTarget(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "targetId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "identifier"');
      const o = "/account/targets/push",
        i = {};
      typeof t < "u" && (i.targetId = t),
        typeof n < "u" && (i.identifier = n),
        typeof r < "u" && (i.providerId = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "post",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  updatePushTarget(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "targetId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "identifier"');
      const r = "/account/targets/{targetId}/push".replace("{targetId}", t),
        o = {};
      typeof n < "u" && (o.identifier = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  deletePushTarget(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "targetId"');
      const n = "/account/targets/{targetId}/push".replace("{targetId}", t),
        r = {},
        o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "delete",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  createEmailToken(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "email"');
      const o = "/account/tokens/email",
        i = {};
      typeof t < "u" && (i.userId = t),
        typeof n < "u" && (i.email = n),
        typeof r < "u" && (i.phrase = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "post",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  createMagicURLToken(t, n, r, o) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "email"');
      const i = "/account/tokens/magic-url",
        a = {};
      typeof t < "u" && (a.userId = t),
        typeof n < "u" && (a.email = n),
        typeof r < "u" && (a.url = r),
        typeof o < "u" && (a.phrase = o);
      const l = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "post",
        l,
        { "content-type": "application/json" },
        a
      );
    });
  }
  createOAuth2Token(t, n, r, o) {
    if (typeof t > "u") throw new B('Missing required parameter: "provider"');
    const i = "/account/tokens/oauth2/{provider}".replace("{provider}", t),
      a = {};
    typeof n < "u" && (a.success = n),
      typeof r < "u" && (a.failure = r),
      typeof o < "u" && (a.scopes = o);
    const l = new URL(this.client.config.endpoint + i);
    a.project = this.client.config.project;
    for (const [c, u] of Object.entries(Ht.flatten(a)))
      l.searchParams.append(c, u);
    if (typeof window < "u" && window != null && window.location)
      window.location.href = l.toString();
    else return l;
  }
  createPhoneToken(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "phone"');
      const r = "/account/tokens/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.phone = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "post",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createVerification(t) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "url"');
      const n = "/account/verification",
        r = {};
      typeof t < "u" && (r.url = t);
      const o = new URL(this.client.config.endpoint + n);
      return yield this.client.call(
        "post",
        o,
        { "content-type": "application/json" },
        r
      );
    });
  }
  updateVerification(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      const r = "/account/verification",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  createPhoneVerification() {
    return oe(this, void 0, void 0, function* () {
      const t = "/account/verification/phone",
        n = {},
        r = new URL(this.client.config.endpoint + t);
      return yield this.client.call(
        "post",
        r,
        { "content-type": "application/json" },
        n
      );
    });
  }
  updatePhoneVerification(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "userId"');
      if (typeof n > "u") throw new B('Missing required parameter: "secret"');
      const r = "/account/verification/phone",
        o = {};
      typeof t < "u" && (o.userId = t), typeof n < "u" && (o.secret = n);
      const i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "put",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
}
class tr extends Ht {
  constructor(t) {
    super(t);
  }
  listDocuments(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "collectionId"');
      const o = "/databases/{databaseId}/collections/{collectionId}/documents"
          .replace("{databaseId}", t)
          .replace("{collectionId}", n),
        i = {};
      typeof r < "u" && (i.queries = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "get",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  createDocument(t, n, r, o, i) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new B('Missing required parameter: "documentId"');
      if (typeof o > "u") throw new B('Missing required parameter: "data"');
      const a = "/databases/{databaseId}/collections/{collectionId}/documents"
          .replace("{databaseId}", t)
          .replace("{collectionId}", n),
        l = {};
      typeof r < "u" && (l.documentId = r),
        typeof o < "u" && (l.data = o),
        typeof i < "u" && (l.permissions = i);
      const c = new URL(this.client.config.endpoint + a);
      return yield this.client.call(
        "post",
        c,
        { "content-type": "application/json" },
        l
      );
    });
  }
  getDocument(t, n, r, o) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new B('Missing required parameter: "documentId"');
      const i =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        a = {};
      typeof o < "u" && (a.queries = o);
      const l = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "get",
        l,
        { "content-type": "application/json" },
        a
      );
    });
  }
  updateDocument(t, n, r, o, i) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new B('Missing required parameter: "documentId"');
      const a =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        l = {};
      typeof o < "u" && (l.data = o), typeof i < "u" && (l.permissions = i);
      const c = new URL(this.client.config.endpoint + a);
      return yield this.client.call(
        "patch",
        c,
        { "content-type": "application/json" },
        l
      );
    });
  }
  deleteDocument(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u")
        throw new B('Missing required parameter: "databaseId"');
      if (typeof n > "u")
        throw new B('Missing required parameter: "collectionId"');
      if (typeof r > "u")
        throw new B('Missing required parameter: "documentId"');
      const o =
          "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}"
            .replace("{databaseId}", t)
            .replace("{collectionId}", n)
            .replace("{documentId}", r),
        i = {},
        a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "delete",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
}
class $0 extends Ht {
  constructor(t) {
    super(t);
  }
  listFiles(t, n, r) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
      const o = "/storage/buckets/{bucketId}/files".replace("{bucketId}", t),
        i = {};
      typeof n < "u" && (i.queries = n), typeof r < "u" && (i.search = r);
      const a = new URL(this.client.config.endpoint + o);
      return yield this.client.call(
        "get",
        a,
        { "content-type": "application/json" },
        i
      );
    });
  }
  createFile(t, n, r, o, i = (a) => {}) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
      if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
      if (typeof r > "u") throw new B('Missing required parameter: "file"');
      const a = "/storage/buckets/{bucketId}/files".replace("{bucketId}", t),
        l = {};
      typeof n < "u" && (l.fileId = n),
        typeof r < "u" && (l.file = r),
        typeof o < "u" && (l.permissions = o);
      const c = new URL(this.client.config.endpoint + a);
      if (!(r instanceof File))
        throw new B('Parameter "file" has to be a File.');
      const u = r.size;
      if (u <= Ht.CHUNK_SIZE)
        return yield this.client.call(
          "post",
          c,
          { "content-type": "multipart/form-data" },
          l
        );
      const h = { "content-type": "multipart/form-data" };
      let f = 0,
        g;
      if (n != "unique()")
        try {
          (g = yield this.client.call(
            "GET",
            new URL(this.client.config.endpoint + a + "/" + n),
            h
          )),
            (f = g.chunksUploaded * Ht.CHUNK_SIZE);
        } catch {}
      for (; f < u; ) {
        let C = Math.min(f + Ht.CHUNK_SIZE - 1, u - 1);
        (h["content-range"] = "bytes " + f + "-" + C + "/" + u),
          g && g.$id && (h["x-appwrite-id"] = g.$id);
        const E = r.slice(f, C + 1);
        (l.file = new File([E], r.name)),
          (g = yield this.client.call("post", c, h, l)),
          i &&
            i({
              $id: g.$id,
              progress: (f / u) * 100,
              sizeUploaded: f,
              chunksTotal: g.chunksTotal,
              chunksUploaded: g.chunksUploaded,
            }),
          (f += Ht.CHUNK_SIZE);
      }
      return g;
    });
  }
  getFile(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
      if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
      const r = "/storage/buckets/{bucketId}/files/{fileId}"
          .replace("{bucketId}", t)
          .replace("{fileId}", n),
        o = {},
        i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "get",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  updateFile(t, n, r, o) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
      if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
      const i = "/storage/buckets/{bucketId}/files/{fileId}"
          .replace("{bucketId}", t)
          .replace("{fileId}", n),
        a = {};
      typeof r < "u" && (a.name = r), typeof o < "u" && (a.permissions = o);
      const l = new URL(this.client.config.endpoint + i);
      return yield this.client.call(
        "put",
        l,
        { "content-type": "application/json" },
        a
      );
    });
  }
  deleteFile(t, n) {
    return oe(this, void 0, void 0, function* () {
      if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
      if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
      const r = "/storage/buckets/{bucketId}/files/{fileId}"
          .replace("{bucketId}", t)
          .replace("{fileId}", n),
        o = {},
        i = new URL(this.client.config.endpoint + r);
      return yield this.client.call(
        "delete",
        i,
        { "content-type": "application/json" },
        o
      );
    });
  }
  getFileDownload(t, n) {
    if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
    if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
    const r = "/storage/buckets/{bucketId}/files/{fileId}/download"
        .replace("{bucketId}", t)
        .replace("{fileId}", n),
      o = {},
      i = new URL(this.client.config.endpoint + r);
    o.project = this.client.config.project;
    for (const [a, l] of Object.entries(Ht.flatten(o)))
      i.searchParams.append(a, l);
    return i;
  }
  getFilePreview(t, n, r, o, i, a, l, c, u, h, f, g, C) {
    if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
    if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
    const E = "/storage/buckets/{bucketId}/files/{fileId}/preview"
        .replace("{bucketId}", t)
        .replace("{fileId}", n),
      y = {};
    typeof r < "u" && (y.width = r),
      typeof o < "u" && (y.height = o),
      typeof i < "u" && (y.gravity = i),
      typeof a < "u" && (y.quality = a),
      typeof l < "u" && (y.borderWidth = l),
      typeof c < "u" && (y.borderColor = c),
      typeof u < "u" && (y.borderRadius = u),
      typeof h < "u" && (y.opacity = h),
      typeof f < "u" && (y.rotation = f),
      typeof g < "u" && (y.background = g),
      typeof C < "u" && (y.output = C);
    const M = new URL(this.client.config.endpoint + E);
    y.project = this.client.config.project;
    for (const [m, v] of Object.entries(Ht.flatten(y)))
      M.searchParams.append(m, v);
    return M;
  }
  getFileView(t, n) {
    if (typeof t > "u") throw new B('Missing required parameter: "bucketId"');
    if (typeof n > "u") throw new B('Missing required parameter: "fileId"');
    const r = "/storage/buckets/{bucketId}/files/{fileId}/view"
        .replace("{bucketId}", t)
        .replace("{fileId}", n),
      o = {},
      i = new URL(this.client.config.endpoint + r);
    o.project = this.client.config.project;
    for (const [a, l] of Object.entries(Ht.flatten(o)))
      i.searchParams.append(a, l);
    return i;
  }
}
var nm;
(function (e) {
  e.Totp = "totp";
})(nm || (nm = {}));
var rm;
(function (e) {
  (e.Email = "email"),
    (e.Phone = "phone"),
    (e.Totp = "totp"),
    (e.Recoverycode = "recoverycode");
})(rm || (rm = {}));
var om;
(function (e) {
  (e.Amazon = "amazon"),
    (e.Apple = "apple"),
    (e.Auth0 = "auth0"),
    (e.Authentik = "authentik"),
    (e.Autodesk = "autodesk"),
    (e.Bitbucket = "bitbucket"),
    (e.Bitly = "bitly"),
    (e.Box = "box"),
    (e.Dailymotion = "dailymotion"),
    (e.Discord = "discord"),
    (e.Disqus = "disqus"),
    (e.Dropbox = "dropbox"),
    (e.Etsy = "etsy"),
    (e.Facebook = "facebook"),
    (e.Github = "github"),
    (e.Gitlab = "gitlab"),
    (e.Google = "google"),
    (e.Linkedin = "linkedin"),
    (e.Microsoft = "microsoft"),
    (e.Notion = "notion"),
    (e.Oidc = "oidc"),
    (e.Okta = "okta"),
    (e.Paypal = "paypal"),
    (e.PaypalSandbox = "paypalSandbox"),
    (e.Podio = "podio"),
    (e.Salesforce = "salesforce"),
    (e.Slack = "slack"),
    (e.Spotify = "spotify"),
    (e.Stripe = "stripe"),
    (e.Tradeshift = "tradeshift"),
    (e.TradeshiftBox = "tradeshiftBox"),
    (e.Twitch = "twitch"),
    (e.Wordpress = "wordpress"),
    (e.Yahoo = "yahoo"),
    (e.Yammer = "yammer"),
    (e.Yandex = "yandex"),
    (e.Zoho = "zoho"),
    (e.Zoom = "zoom"),
    (e.Mock = "mock");
})(om || (om = {}));
var im;
(function (e) {
  (e.AvantBrowser = "aa"),
    (e.AndroidWebViewBeta = "an"),
    (e.GoogleChrome = "ch"),
    (e.GoogleChromeIOS = "ci"),
    (e.GoogleChromeMobile = "cm"),
    (e.Chromium = "cr"),
    (e.MozillaFirefox = "ff"),
    (e.Safari = "sf"),
    (e.MobileSafari = "mf"),
    (e.MicrosoftEdge = "ps"),
    (e.MicrosoftEdgeIOS = "oi"),
    (e.OperaMini = "om"),
    (e.Opera = "op"),
    (e.OperaNext = "on");
})(im || (im = {}));
var am;
(function (e) {
  (e.AmericanExpress = "amex"),
    (e.Argencard = "argencard"),
    (e.Cabal = "cabal"),
    (e.Cencosud = "cencosud"),
    (e.DinersClub = "diners"),
    (e.Discover = "discover"),
    (e.Elo = "elo"),
    (e.Hipercard = "hipercard"),
    (e.JCB = "jcb"),
    (e.Mastercard = "mastercard"),
    (e.Naranja = "naranja"),
    (e.TarjetaShopping = "targeta-shopping"),
    (e.UnionChinaPay = "union-china-pay"),
    (e.Visa = "visa"),
    (e.MIR = "mir"),
    (e.Maestro = "maestro");
})(am || (am = {}));
var lm;
(function (e) {
  (e.Afghanistan = "af"),
    (e.Angola = "ao"),
    (e.Albania = "al"),
    (e.Andorra = "ad"),
    (e.UnitedArabEmirates = "ae"),
    (e.Argentina = "ar"),
    (e.Armenia = "am"),
    (e.AntiguaAndBarbuda = "ag"),
    (e.Australia = "au"),
    (e.Austria = "at"),
    (e.Azerbaijan = "az"),
    (e.Burundi = "bi"),
    (e.Belgium = "be"),
    (e.Benin = "bj"),
    (e.BurkinaFaso = "bf"),
    (e.Bangladesh = "bd"),
    (e.Bulgaria = "bg"),
    (e.Bahrain = "bh"),
    (e.Bahamas = "bs"),
    (e.BosniaAndHerzegovina = "ba"),
    (e.Belarus = "by"),
    (e.Belize = "bz"),
    (e.Bolivia = "bo"),
    (e.Brazil = "br"),
    (e.Barbados = "bb"),
    (e.BruneiDarussalam = "bn"),
    (e.Bhutan = "bt"),
    (e.Botswana = "bw"),
    (e.CentralAfricanRepublic = "cf"),
    (e.Canada = "ca"),
    (e.Switzerland = "ch"),
    (e.Chile = "cl"),
    (e.China = "cn"),
    (e.CoteDIvoire = "ci"),
    (e.Cameroon = "cm"),
    (e.DemocraticRepublicOfTheCongo = "cd"),
    (e.RepublicOfTheCongo = "cg"),
    (e.Colombia = "co"),
    (e.Comoros = "km"),
    (e.CapeVerde = "cv"),
    (e.CostaRica = "cr"),
    (e.Cuba = "cu"),
    (e.Cyprus = "cy"),
    (e.CzechRepublic = "cz"),
    (e.Germany = "de"),
    (e.Djibouti = "dj"),
    (e.Dominica = "dm"),
    (e.Denmark = "dk"),
    (e.DominicanRepublic = "do"),
    (e.Algeria = "dz"),
    (e.Ecuador = "ec"),
    (e.Egypt = "eg"),
    (e.Eritrea = "er"),
    (e.Spain = "es"),
    (e.Estonia = "ee"),
    (e.Ethiopia = "et"),
    (e.Finland = "fi"),
    (e.Fiji = "fj"),
    (e.France = "fr"),
    (e.MicronesiaFederatedStatesOf = "fm"),
    (e.Gabon = "ga"),
    (e.UnitedKingdom = "gb"),
    (e.Georgia = "ge"),
    (e.Ghana = "gh"),
    (e.Guinea = "gn"),
    (e.Gambia = "gm"),
    (e.GuineaBissau = "gw"),
    (e.EquatorialGuinea = "gq"),
    (e.Greece = "gr"),
    (e.Grenada = "gd"),
    (e.Guatemala = "gt"),
    (e.Guyana = "gy"),
    (e.Honduras = "hn"),
    (e.Croatia = "hr"),
    (e.Haiti = "ht"),
    (e.Hungary = "hu"),
    (e.Indonesia = "id"),
    (e.India = "in"),
    (e.Ireland = "ie"),
    (e.IranIslamicRepublicOf = "ir"),
    (e.Iraq = "iq"),
    (e.Iceland = "is"),
    (e.Israel = "il"),
    (e.Italy = "it"),
    (e.Jamaica = "jm"),
    (e.Jordan = "jo"),
    (e.Japan = "jp"),
    (e.Kazakhstan = "kz"),
    (e.Kenya = "ke"),
    (e.Kyrgyzstan = "kg"),
    (e.Cambodia = "kh"),
    (e.Kiribati = "ki"),
    (e.SaintKittsAndNevis = "kn"),
    (e.SouthKorea = "kr"),
    (e.Kuwait = "kw"),
    (e.LaoPeopleSDemocraticRepublic = "la"),
    (e.Lebanon = "lb"),
    (e.Liberia = "lr"),
    (e.Libya = "ly"),
    (e.SaintLucia = "lc"),
    (e.Liechtenstein = "li"),
    (e.SriLanka = "lk"),
    (e.Lesotho = "ls"),
    (e.Lithuania = "lt"),
    (e.Luxembourg = "lu"),
    (e.Latvia = "lv"),
    (e.Morocco = "ma"),
    (e.Monaco = "mc"),
    (e.Moldova = "md"),
    (e.Madagascar = "mg"),
    (e.Maldives = "mv"),
    (e.Mexico = "mx"),
    (e.MarshallIslands = "mh"),
    (e.NorthMacedonia = "mk"),
    (e.Mali = "ml"),
    (e.Malta = "mt"),
    (e.Myanmar = "mm"),
    (e.Montenegro = "me"),
    (e.Mongolia = "mn"),
    (e.Mozambique = "mz"),
    (e.Mauritania = "mr"),
    (e.Mauritius = "mu"),
    (e.Malawi = "mw"),
    (e.Malaysia = "my"),
    (e.Namibia = "na"),
    (e.Niger = "ne"),
    (e.Nigeria = "ng"),
    (e.Nicaragua = "ni"),
    (e.Netherlands = "nl"),
    (e.Norway = "no"),
    (e.Nepal = "np"),
    (e.Nauru = "nr"),
    (e.NewZealand = "nz"),
    (e.Oman = "om"),
    (e.Pakistan = "pk"),
    (e.Panama = "pa"),
    (e.Peru = "pe"),
    (e.Philippines = "ph"),
    (e.Palau = "pw"),
    (e.PapuaNewGuinea = "pg"),
    (e.Poland = "pl"),
    (e.FrenchPolynesia = "pf"),
    (e.NorthKorea = "kp"),
    (e.Portugal = "pt"),
    (e.Paraguay = "py"),
    (e.Qatar = "qa"),
    (e.Romania = "ro"),
    (e.Russia = "ru"),
    (e.Rwanda = "rw"),
    (e.SaudiArabia = "sa"),
    (e.Sudan = "sd"),
    (e.Senegal = "sn"),
    (e.Singapore = "sg"),
    (e.SolomonIslands = "sb"),
    (e.SierraLeone = "sl"),
    (e.ElSalvador = "sv"),
    (e.SanMarino = "sm"),
    (e.Somalia = "so"),
    (e.Serbia = "rs"),
    (e.SouthSudan = "ss"),
    (e.SaoTomeAndPrincipe = "st"),
    (e.Suriname = "sr"),
    (e.Slovakia = "sk"),
    (e.Slovenia = "si"),
    (e.Sweden = "se"),
    (e.Eswatini = "sz"),
    (e.Seychelles = "sc"),
    (e.Syria = "sy"),
    (e.Chad = "td"),
    (e.Togo = "tg"),
    (e.Thailand = "th"),
    (e.Tajikistan = "tj"),
    (e.Turkmenistan = "tm"),
    (e.TimorLeste = "tl"),
    (e.Tonga = "to"),
    (e.TrinidadAndTobago = "tt"),
    (e.Tunisia = "tn"),
    (e.Turkey = "tr"),
    (e.Tuvalu = "tv"),
    (e.Tanzania = "tz"),
    (e.Uganda = "ug"),
    (e.Ukraine = "ua"),
    (e.Uruguay = "uy"),
    (e.UnitedStates = "us"),
    (e.Uzbekistan = "uz"),
    (e.VaticanCity = "va"),
    (e.SaintVincentAndTheGrenadines = "vc"),
    (e.Venezuela = "ve"),
    (e.Vietnam = "vn"),
    (e.Vanuatu = "vu"),
    (e.Samoa = "ws"),
    (e.Yemen = "ye"),
    (e.SouthAfrica = "za"),
    (e.Zambia = "zm"),
    (e.Zimbabwe = "zw");
})(lm || (lm = {}));
var sm;
(function (e) {
  (e.GET = "GET"),
    (e.POST = "POST"),
    (e.PUT = "PUT"),
    (e.PATCH = "PATCH"),
    (e.DELETE = "DELETE"),
    (e.OPTIONS = "OPTIONS");
})(sm || (sm = {}));
var cm;
(function (e) {
  (e.Center = "center"),
    (e.Topleft = "top-left"),
    (e.Top = "top"),
    (e.Topright = "top-right"),
    (e.Left = "left"),
    (e.Right = "right"),
    (e.Bottomleft = "bottom-left"),
    (e.Bottom = "bottom"),
    (e.Bottomright = "bottom-right");
})(cm || (cm = {}));
var um;
(function (e) {
  (e.Jpg = "jpg"),
    (e.Jpeg = "jpeg"),
    (e.Gif = "gif"),
    (e.Png = "png"),
    (e.Webp = "webp");
})(um || (um = {}));
function W5(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function dm(e) {
  return W5(e) || Array.isArray(e);
}
function G5() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function U0(e, t) {
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  const o = JSON.stringify(Object.keys(e.breakpoints || {})),
    i = JSON.stringify(Object.keys(t.breakpoints || {}));
  return o !== i
    ? !1
    : n.every((a) => {
        const l = e[a],
          c = t[a];
        return typeof l == "function"
          ? `${l}` == `${c}`
          : !dm(l) || !dm(c)
          ? l === c
          : U0(l, c);
      });
}
function fm(e) {
  return e
    .concat()
    .sort((t, n) => (t.name > n.name ? 1 : -1))
    .map((t) => t.options);
}
function Y5(e, t) {
  if (e.length !== t.length) return !1;
  const n = fm(e),
    r = fm(t);
  return n.every((o, i) => {
    const a = r[i];
    return U0(o, a);
  });
}
function B0(e) {
  return typeof e == "number";
}
function wf(e) {
  return typeof e == "string";
}
function F0(e) {
  return typeof e == "boolean";
}
function pm(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ge(e) {
  return Math.abs(e);
}
function W0(e) {
  return Math.sign(e);
}
function ga(e, t) {
  return Ge(e - t);
}
function K5(e, t) {
  if (e === 0 || t === 0 || Ge(e) <= Ge(t)) return 0;
  const n = ga(Ge(e), Ge(t));
  return Ge(n / e);
}
function Ia(e) {
  return Da(e).map(Number);
}
function yn(e) {
  return e[qa(e)];
}
function qa(e) {
  return Math.max(0, e.length - 1);
}
function G0(e, t) {
  return t === qa(e);
}
function hm(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Da(e) {
  return Object.keys(e);
}
function k8(e, t) {
  return [e, t].reduce(
    (n, r) => (
      Da(r).forEach((o) => {
        const i = n[o],
          a = r[o],
          l = pm(i) && pm(a);
        n[o] = l ? k8(i, a) : a;
      }),
      n
    ),
    {}
  );
}
function xf(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function q5(e, t) {
  const n = { start: r, center: o, end: i };
  function r() {
    return 0;
  }
  function o(c) {
    return i(c) / 2;
  }
  function i(c) {
    return t - c;
  }
  function a(c, u) {
    return wf(e) ? n[e](c) : e(t, c, u);
  }
  return { measure: a };
}
function Ha() {
  let e = [];
  function t(o, i, a, l = { passive: !0 }) {
    let c;
    if ("addEventListener" in o)
      o.addEventListener(i, a, l), (c = () => o.removeEventListener(i, a, l));
    else {
      const u = o;
      u.addListener(a), (c = () => u.removeListener(a));
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((o) => o());
  }
  const r = { add: t, clear: n };
  return r;
}
function X5(e, t, n) {
  const r = Ha(),
    o = 1e3 / 60;
  let i = null,
    a = 0,
    l = 0;
  function c() {
    r.add(e, "visibilitychange", () => {
      e.hidden && C();
    });
  }
  function u() {
    g(), r.clear();
  }
  function h(y) {
    if (!a) return;
    i || (i = y);
    const M = y - i;
    for (i = y, l += M; l >= o; ) n(), (l -= o);
    a && t.requestAnimationFrame(h);
  }
  function f() {
    a || (a = t.requestAnimationFrame(h));
  }
  function g() {
    t.cancelAnimationFrame(a), (i = null), (l = 0), (a = 0);
  }
  function C() {
    (i = null), (l = 0);
  }
  return { init: c, destroy: u, start: f, stop: g, update: n };
}
function Q5(e, t) {
  const n = t === "rtl",
    r = e === "y",
    o = r ? "y" : "x",
    i = r ? "x" : "y",
    a = !r && n ? -1 : 1,
    l = h(),
    c = f();
  function u(E) {
    const { height: y, width: M } = E;
    return r ? y : M;
  }
  function h() {
    return r ? "top" : n ? "right" : "left";
  }
  function f() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function g(E) {
    return E * a;
  }
  return {
    scroll: o,
    cross: i,
    startEdge: l,
    endEdge: c,
    measureSize: u,
    direction: g,
  };
}
function ho(e = 0, t = 0) {
  const n = Ge(e - t);
  function r(u) {
    return u < e;
  }
  function o(u) {
    return u > t;
  }
  function i(u) {
    return r(u) || o(u);
  }
  function a(u) {
    return i(u) ? (r(u) ? e : t) : u;
  }
  function l(u) {
    return n ? u - n * Math.ceil((u - t) / n) : u;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: a,
    reachedAny: i,
    reachedMax: o,
    reachedMin: r,
    removeOffset: l,
  };
}
function L8(e, t, n) {
  const { constrain: r } = ho(0, e),
    o = e + 1;
  let i = a(t);
  function a(g) {
    return n ? Ge((o + g) % o) : r(g);
  }
  function l() {
    return i;
  }
  function c(g) {
    return (i = a(g)), f;
  }
  function u(g) {
    return h().set(l() + g);
  }
  function h() {
    return L8(e, l(), n);
  }
  const f = { get: l, set: c, add: u, clone: h };
  return f;
}
function J5(e, t, n, r, o, i, a, l, c, u, h, f, g, C, E, y, M, m, v) {
  const { cross: b, direction: j } = e,
    N = ["INPUT", "SELECT", "TEXTAREA"],
    O = { passive: !1 },
    P = Ha(),
    R = Ha(),
    F = ho(50, 225).constrain(C.measure(20)),
    H = { mouse: 300, touch: 400 },
    K = { mouse: 500, touch: 600 },
    G = E ? 43 : 25;
  let ue = !1,
    ie = 0,
    pe = 0,
    ve = !1,
    re = !1,
    V = !1,
    _ = !1;
  function z(J) {
    if (!v) return;
    function me(De) {
      (F0(v) || v(J, De)) && fe(De);
    }
    const Le = t;
    P.add(Le, "dragstart", (De) => De.preventDefault(), O)
      .add(Le, "touchmove", () => {}, O)
      .add(Le, "touchend", () => {})
      .add(Le, "touchstart", me)
      .add(Le, "mousedown", me)
      .add(Le, "touchcancel", ke)
      .add(Le, "contextmenu", ke)
      .add(Le, "click", Je, !0);
  }
  function W() {
    P.clear(), R.clear();
  }
  function ne() {
    const J = _ ? n : t;
    R.add(J, "touchmove", be, O)
      .add(J, "touchend", ke)
      .add(J, "mousemove", be, O)
      .add(J, "mouseup", ke);
  }
  function ye(J) {
    const me = J.nodeName || "";
    return N.includes(me);
  }
  function he() {
    return (E ? K : H)[_ ? "mouse" : "touch"];
  }
  function Se(J, me) {
    const Le = f.add(W0(J) * -1),
      De = h.byDistance(J, !E).distance;
    return E || Ge(J) < F
      ? De
      : M && me
      ? De * 0.5
      : h.byIndex(Le.get(), 0).distance;
  }
  function fe(J) {
    const me = xf(J, r);
    (_ = me),
      (V = E && me && !J.buttons && ue),
      (ue = ga(o.get(), a.get()) >= 2),
      !(me && J.button !== 0) &&
        (ye(J.target) ||
          ((ve = !0),
          i.pointerDown(J),
          u.useFriction(0).useDuration(0),
          o.set(a),
          ne(),
          (ie = i.readPoint(J)),
          (pe = i.readPoint(J, b)),
          g.emit("pointerDown")));
  }
  function be(J) {
    if (!xf(J, r) && J.touches.length >= 2) return ke(J);
    const Le = i.readPoint(J),
      De = i.readPoint(J, b),
      at = ga(Le, ie),
      bt = ga(De, pe);
    if (!re && !_ && (!J.cancelable || ((re = at > bt), !re))) return ke(J);
    const te = i.pointerMove(J);
    at > y && (V = !0),
      u.useFriction(0.3).useDuration(0.75),
      l.start(),
      o.add(j(te)),
      J.preventDefault();
  }
  function ke(J) {
    const Le = h.byDistance(0, !1).index !== f.get(),
      De = i.pointerUp(J) * he(),
      at = Se(j(De), Le),
      bt = K5(De, at),
      te = G - 10 * bt,
      k = m + bt / 50;
    (re = !1),
      (ve = !1),
      R.clear(),
      u.useDuration(te).useFriction(k),
      c.distance(at, !E),
      (_ = !1),
      g.emit("pointerUp");
  }
  function Je(J) {
    V && (J.stopPropagation(), J.preventDefault(), (V = !1));
  }
  function it() {
    return ve;
  }
  return { init: z, destroy: W, pointerDown: it };
}
function eS(e, t) {
  let r, o;
  function i(f) {
    return f.timeStamp;
  }
  function a(f, g) {
    const E = `client${(g || e.scroll) === "x" ? "X" : "Y"}`;
    return (xf(f, t) ? f : f.touches[0])[E];
  }
  function l(f) {
    return (r = f), (o = f), a(f);
  }
  function c(f) {
    const g = a(f) - a(o),
      C = i(f) - i(r) > 170;
    return (o = f), C && (r = f), g;
  }
  function u(f) {
    if (!r || !o) return 0;
    const g = a(o) - a(r),
      C = i(f) - i(r),
      E = i(f) - i(o) > 170,
      y = g / C;
    return C && !E && Ge(y) > 0.1 ? y : 0;
  }
  return { pointerDown: l, pointerMove: c, pointerUp: u, readPoint: a };
}
function tS() {
  function e(n) {
    const { offsetTop: r, offsetLeft: o, offsetWidth: i, offsetHeight: a } = n;
    return {
      top: r,
      right: o + i,
      bottom: r + a,
      left: o,
      width: i,
      height: a,
    };
  }
  return { measure: e };
}
function nS(e) {
  function t(r) {
    return e * (r / 100);
  }
  return { measure: t };
}
function rS(e, t, n, r, o, i, a) {
  let l,
    c,
    u = [],
    h = !1;
  function f(y) {
    return o.measureSize(a.measure(y));
  }
  function g(y) {
    if (!i) return;
    (c = f(e)), (u = r.map(f));
    function M(v) {
      for (const b of v) {
        const j = b.target === e,
          N = r.indexOf(b.target),
          O = j ? c : u[N],
          P = f(j ? e : r[N]);
        if (Ge(P - O) >= 0.5) {
          n.requestAnimationFrame(() => {
            y.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    (l = new ResizeObserver((v) => {
      h || ((F0(i) || i(y, v)) && M(v));
    })),
      [e].concat(r).forEach((v) => l.observe(v));
  }
  function C() {
    l && l.disconnect(), (h = !0);
  }
  return { init: g, destroy: C };
}
function oS(e, t, n, r) {
  let o = 0,
    i = 0,
    a = n,
    l = r,
    c = e.get(),
    u = 0;
  function h() {
    const j = t.get() - e.get(),
      N = !a;
    let O = 0;
    return (
      N
        ? ((o = 0), e.set(t), (O = j))
        : ((o += j / a), (o *= l), (c += o), e.add(o), (O = c - u)),
      (i = W0(O)),
      (u = c),
      b
    );
  }
  function f() {
    const j = t.get() - e.get();
    return Ge(j) < 0.001;
  }
  function g() {
    return a;
  }
  function C() {
    return i;
  }
  function E() {
    return o;
  }
  function y() {
    return m(n);
  }
  function M() {
    return v(r);
  }
  function m(j) {
    return (a = j), b;
  }
  function v(j) {
    return (l = j), b;
  }
  const b = {
    direction: C,
    duration: g,
    velocity: E,
    seek: h,
    settled: f,
    useBaseFriction: M,
    useBaseDuration: y,
    useFriction: v,
    useDuration: m,
  };
  return b;
}
function iS(e, t, n, r, o) {
  const i = o.measure(10),
    a = o.measure(50),
    l = ho(0.1, 0.99);
  let c = !1;
  function u() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function h(C) {
    if (!u()) return;
    const E = e.reachedMin(t.get()) ? "min" : "max",
      y = Ge(e[E] - t.get()),
      M = n.get() - t.get(),
      m = l.constrain(y / a);
    n.subtract(M * m),
      !C &&
        Ge(M) < i &&
        (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function f(C) {
    c = !C;
  }
  return { shouldConstrain: u, constrain: h, toggleActive: f };
}
function aS(e, t, n, r, o) {
  const i = ho(-t + e, 0),
    a = f(),
    l = h(),
    c = g();
  function u(E, y) {
    return ga(E, y) < 1;
  }
  function h() {
    const E = a[0],
      y = yn(a),
      M = a.lastIndexOf(E),
      m = a.indexOf(y) + 1;
    return ho(M, m);
  }
  function f() {
    return n
      .map((E, y) => {
        const { min: M, max: m } = i,
          v = i.constrain(E),
          b = !y,
          j = G0(n, y);
        return b ? m : j || u(M, v) ? M : u(m, v) ? m : v;
      })
      .map((E) => parseFloat(E.toFixed(3)));
  }
  function g() {
    if (t <= e + o) return [i.max];
    if (r === "keepSnaps") return a;
    const { min: E, max: y } = l;
    return a.slice(E, y);
  }
  return { snapsContained: c, scrollContainLimit: l };
}
function lS(e, t, n) {
  const r = t[0],
    o = n ? r - e : yn(t);
  return { limit: ho(o, r) };
}
function sS(e, t, n, r) {
  const i = t.min + 0.1,
    a = t.max + 0.1,
    { reachedMin: l, reachedMax: c } = ho(i, a);
  function u(g) {
    return g === 1 ? c(n.get()) : g === -1 ? l(n.get()) : !1;
  }
  function h(g) {
    if (!u(g)) return;
    const C = e * (g * -1);
    r.forEach((E) => E.add(C));
  }
  return { loop: h };
}
function cS(e) {
  const { max: t, length: n } = e;
  function r(i) {
    const a = i - t;
    return n ? a / -n : 0;
  }
  return { get: r };
}
function uS(e, t, n, r, o) {
  const { startEdge: i, endEdge: a } = e,
    { groupSlides: l } = o,
    c = f().map(t.measure),
    u = g(),
    h = C();
  function f() {
    return l(r)
      .map((y) => yn(y)[a] - y[0][i])
      .map(Ge);
  }
  function g() {
    return r.map((y) => n[i] - y[i]).map((y) => -Ge(y));
  }
  function C() {
    return l(u)
      .map((y) => y[0])
      .map((y, M) => y + c[M]);
  }
  return { snaps: u, snapsAligned: h };
}
function dS(e, t, n, r, o, i) {
  const { groupSlides: a } = o,
    { min: l, max: c } = r,
    u = h();
  function h() {
    const g = a(i),
      C = !e || t === "keepSnaps";
    return n.length === 1
      ? [i]
      : C
      ? g
      : g.slice(l, c).map((E, y, M) => {
          const m = !y,
            v = G0(M, y);
          if (m) {
            const b = yn(M[0]) + 1;
            return hm(b);
          }
          if (v) {
            const b = qa(i) - yn(M)[0] + 1;
            return hm(b, yn(M)[0]);
          }
          return E;
        });
  }
  return { slideRegistry: u };
}
function fS(e, t, n, r, o) {
  const { reachedAny: i, removeOffset: a, constrain: l } = r;
  function c(E) {
    return E.concat().sort((y, M) => Ge(y) - Ge(M))[0];
  }
  function u(E) {
    const y = e ? a(E) : l(E),
      M = t
        .map((v, b) => ({ diff: h(v - y, 0), index: b }))
        .sort((v, b) => Ge(v.diff) - Ge(b.diff)),
      { index: m } = M[0];
    return { index: m, distance: y };
  }
  function h(E, y) {
    const M = [E, E + n, E - n];
    if (!e) return E;
    if (!y) return c(M);
    const m = M.filter((v) => W0(v) === y);
    return m.length ? c(m) : yn(M) - n;
  }
  function f(E, y) {
    const M = t[E] - o.get(),
      m = h(M, y);
    return { index: E, distance: m };
  }
  function g(E, y) {
    const M = o.get() + E,
      { index: m, distance: v } = u(M),
      b = !e && i(M);
    if (!y || b) return { index: m, distance: E };
    const j = t[m] - v,
      N = E + h(j, 0);
    return { index: m, distance: N };
  }
  return { byDistance: g, byIndex: f, shortcut: h };
}
function pS(e, t, n, r, o, i) {
  function a(h) {
    const f = h.distance,
      g = h.index !== t.get();
    o.add(f),
      f && e.start(),
      g && (n.set(t.get()), t.set(h.index), i.emit("select"));
  }
  function l(h, f) {
    const g = r.byDistance(h, f);
    a(g);
  }
  function c(h, f) {
    const g = t.clone().set(h),
      C = r.byIndex(g.get(), f);
    a(C);
  }
  return { distance: l, index: c };
}
function hS(e, t, n, r, o, i, a) {
  let l = 0;
  function c() {
    i.add(document, "keydown", u, !1), t.forEach(h);
  }
  function u(g) {
    g.code === "Tab" && (l = new Date().getTime());
  }
  function h(g) {
    const C = () => {
      if (new Date().getTime() - l > 10) return;
      e.scrollLeft = 0;
      const M = t.indexOf(g),
        m = n.findIndex((v) => v.includes(M));
      B0(m) && (o.useDuration(0), r.index(m, 0), a.emit("slideFocus"));
    };
    i.add(g, "focus", C, { passive: !0, capture: !0 });
  }
  return { init: c };
}
function Sf(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = a(c);
  }
  function o(c) {
    t += a(c);
  }
  function i(c) {
    t -= a(c);
  }
  function a(c) {
    return B0(c) ? c : c.get();
  }
  return { get: n, set: r, add: o, subtract: i };
}
function N8(e, t) {
  const n = e.scroll === "x" ? i : a,
    r = t.style;
  let o = !1;
  function i(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function a(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function l(f) {
    o || (r.transform = n(e.direction(f)));
  }
  function c(f) {
    o = !f;
  }
  function u() {
    o ||
      ((r.transform = ""),
      t.getAttribute("style") || t.removeAttribute("style"));
  }
  return { clear: u, to: l, toggleActive: c };
}
function mS(e, t, n, r, o, i, a, l, c) {
  const h = Ia(o),
    f = Ia(o).reverse(),
    g = m().concat(v());
  function C(P, R) {
    return P.reduce((F, H) => F - o[H], R);
  }
  function E(P, R) {
    return P.reduce((F, H) => (C(F, R) > 0 ? F.concat([H]) : F), []);
  }
  function y(P) {
    return i.map((R, F) => ({
      start: R - r[F] + 0.5 + P,
      end: R + t - 0.5 + P,
    }));
  }
  function M(P, R, F) {
    const H = y(R);
    return P.map((K) => {
      const G = F ? 0 : -n,
        ue = F ? n : 0,
        ie = F ? "end" : "start",
        pe = H[K][ie];
      return {
        index: K,
        loopPoint: pe,
        slideLocation: Sf(-1),
        translate: N8(e, c[K]),
        target: () => (l.get() > pe ? G : ue),
      };
    });
  }
  function m() {
    const P = a[0],
      R = E(f, P);
    return M(R, n, !1);
  }
  function v() {
    const P = t - a[0] - 1,
      R = E(h, P);
    return M(R, -n, !0);
  }
  function b() {
    return g.every(({ index: P }) => {
      const R = h.filter((F) => F !== P);
      return C(R, t) <= 0.1;
    });
  }
  function j() {
    g.forEach((P) => {
      const { target: R, translate: F, slideLocation: H } = P,
        K = R();
      K !== H.get() && (F.to(K), H.set(K));
    });
  }
  function N() {
    g.forEach((P) => P.translate.clear());
  }
  return { canLoop: b, clear: N, loop: j, loopPoints: g };
}
function gS(e, t, n) {
  let r,
    o = !1;
  function i(c) {
    if (!n) return;
    function u(h) {
      for (const f of h)
        if (f.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    (r = new MutationObserver((h) => {
      o || ((F0(n) || n(c, h)) && u(h));
    })),
      r.observe(e, { childList: !0 });
  }
  function a() {
    r && r.disconnect(), (o = !0);
  }
  return { init: i, destroy: a };
}
function vS(e, t, n, r) {
  const o = {};
  let i = null,
    a = null,
    l,
    c = !1;
  function u() {
    (l = new IntersectionObserver(
      (E) => {
        c ||
          (E.forEach((y) => {
            const M = t.indexOf(y.target);
            o[M] = y;
          }),
          (i = null),
          (a = null),
          n.emit("slidesInView"));
      },
      { root: e.parentElement, threshold: r }
    )),
      t.forEach((E) => l.observe(E));
  }
  function h() {
    l && l.disconnect(), (c = !0);
  }
  function f(E) {
    return Da(o).reduce((y, M) => {
      const m = parseInt(M),
        { isIntersecting: v } = o[m];
      return ((E && v) || (!E && !v)) && y.push(m), y;
    }, []);
  }
  function g(E = !0) {
    if (E && i) return i;
    if (!E && a) return a;
    const y = f(E);
    return E && (i = y), E || (a = y), y;
  }
  return { init: u, destroy: h, get: g };
}
function yS(e, t, n, r, o, i) {
  const { measureSize: a, startEdge: l, endEdge: c } = e,
    u = n[0] && o,
    h = E(),
    f = y(),
    g = n.map(a),
    C = M();
  function E() {
    if (!u) return 0;
    const v = n[0];
    return Ge(t[l] - v[l]);
  }
  function y() {
    if (!u) return 0;
    const v = i.getComputedStyle(yn(r));
    return parseFloat(v.getPropertyValue(`margin-${c}`));
  }
  function M() {
    return n
      .map((v, b, j) => {
        const N = !b,
          O = G0(j, b);
        return N ? g[b] + h : O ? g[b] + f : j[b + 1][l] - v[l];
      })
      .map(Ge);
  }
  return { slideSizes: g, slideSizesWithGaps: C, startGap: h, endGap: f };
}
function wS(e, t, n, r, o, i, a, l, c) {
  const { startEdge: u, endEdge: h, direction: f } = e,
    g = B0(n);
  function C(m, v) {
    return Ia(m)
      .filter((b) => b % v === 0)
      .map((b) => m.slice(b, b + v));
  }
  function E(m) {
    return m.length
      ? Ia(m)
          .reduce((v, b, j) => {
            const N = yn(v) || 0,
              O = N === 0,
              P = b === qa(m),
              R = o[u] - i[N][u],
              F = o[u] - i[b][h],
              H = !r && O ? f(a) : 0,
              K = !r && P ? f(l) : 0,
              G = Ge(F - K - (R + H));
            return j && G > t + c && v.push(b), P && v.push(m.length), v;
          }, [])
          .map((v, b, j) => {
            const N = Math.max(j[b - 1] || 0);
            return m.slice(N, v);
          })
      : [];
  }
  function y(m) {
    return g ? C(m, n) : E(m);
  }
  return { groupSlides: y };
}
function xS(e, t, n, r, o, i, a) {
  const {
      align: l,
      axis: c,
      direction: u,
      startIndex: h,
      loop: f,
      duration: g,
      dragFree: C,
      dragThreshold: E,
      inViewThreshold: y,
      slidesToScroll: M,
      skipSnaps: m,
      containScroll: v,
      watchResize: b,
      watchSlides: j,
      watchDrag: N,
    } = i,
    O = 2,
    P = tS(),
    R = P.measure(t),
    F = n.map(P.measure),
    H = Q5(c, u),
    K = H.measureSize(R),
    G = nS(K),
    ue = q5(l, K),
    ie = !f && !!v,
    pe = f || !!v,
    {
      slideSizes: ve,
      slideSizesWithGaps: re,
      startGap: V,
      endGap: _,
    } = yS(H, R, F, n, pe, o),
    z = wS(H, K, M, f, R, F, V, _, O),
    { snaps: W, snapsAligned: ne } = uS(H, ue, R, F, z),
    ye = -yn(W) + yn(re),
    { snapsContained: he, scrollContainLimit: Se } = aS(K, ye, ne, v, O),
    fe = ie ? he : ne,
    { limit: be } = lS(ye, fe, f),
    ke = L8(qa(fe), h, f),
    Je = ke.clone(),
    it = Ia(n),
    je = ({
      dragHandler: Ci,
      eventHandler: Te,
      scrollBody: ae,
      scrollBounds: Ur,
      scrollLooper: nl,
      slideLooper: ji,
      translate: rl,
      location: dt,
      animation: ol,
      options: { loop: Lt },
    }) => {
      Lt || Ur.constrain(Ci.pointerDown()), ae.seek();
      const yo = ae.settled(),
        Ai = !Ur.shouldConstrain(),
        Mi = Lt ? yo : yo && Ai;
      Mi && !Ci.pointerDown() && (ol.stop(), Te.emit("settle")),
        Mi || Te.emit("scroll"),
        Lt && (nl.loop(ae.direction()), ji.loop()),
        rl.to(dt.get());
    },
    J = X5(r, o, () => je(U)),
    me = 0.68,
    Le = fe[ke.get()],
    De = Sf(Le),
    at = Sf(Le),
    bt = oS(De, at, g, me),
    te = fS(f, fe, ye, be, at),
    k = pS(J, ke, Je, te, at, a),
    In = cS(be),
    $r = Ha(),
    tl = vS(t, n, a, y),
    { slideRegistry: D } = dS(ie, v, fe, Se, z, it),
    X = hS(e, n, D, k, bt, $r, a),
    U = {
      ownerDocument: r,
      ownerWindow: o,
      eventHandler: a,
      containerRect: R,
      slideRects: F,
      animation: J,
      axis: H,
      dragHandler: J5(
        H,
        e,
        r,
        o,
        at,
        eS(H, o),
        De,
        J,
        k,
        bt,
        te,
        ke,
        a,
        G,
        C,
        E,
        m,
        me,
        N
      ),
      eventStore: $r,
      percentOfView: G,
      index: ke,
      indexPrevious: Je,
      limit: be,
      location: De,
      options: i,
      resizeHandler: rS(t, a, o, n, H, b, P),
      scrollBody: bt,
      scrollBounds: iS(be, De, at, bt, G),
      scrollLooper: sS(ye, be, De, [De, at]),
      scrollProgress: In,
      scrollSnapList: fe.map(In.get),
      scrollSnaps: fe,
      scrollTarget: te,
      scrollTo: k,
      slideLooper: mS(H, K, ye, ve, re, W, fe, De, n),
      slideFocus: X,
      slidesHandler: gS(t, a, j),
      slidesInView: tl,
      slideIndexes: it,
      slideRegistry: D,
      slidesToScroll: z,
      target: at,
      translate: N8(H, t),
    };
  return U;
}
function SS() {
  let e = {},
    t;
  function n(u) {
    t = u;
  }
  function r(u) {
    return e[u] || [];
  }
  function o(u) {
    return r(u).forEach((h) => h(t, u)), c;
  }
  function i(u, h) {
    return (e[u] = r(u).concat([h])), c;
  }
  function a(u, h) {
    return (e[u] = r(u).filter((f) => f !== h)), c;
  }
  function l() {
    e = {};
  }
  const c = { init: n, emit: o, off: a, on: i, clear: l };
  return c;
}
const ES = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function bS(e) {
  function t(i, a) {
    return k8(i, a || {});
  }
  function n(i) {
    const a = i.breakpoints || {},
      l = Da(a)
        .filter((c) => e.matchMedia(c).matches)
        .map((c) => a[c])
        .reduce((c, u) => t(c, u), {});
    return t(i, l);
  }
  function r(i) {
    return i
      .map((a) => Da(a.breakpoints || {}))
      .reduce((a, l) => a.concat(l), [])
      .map(e.matchMedia);
  }
  return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function CS(e) {
  let t = [];
  function n(i, a) {
    return (
      (t = a.filter(({ options: l }) => e.optionsAtMedia(l).active !== !1)),
      t.forEach((l) => l.init(i, e)),
      a.reduce((l, c) => Object.assign(l, { [c.name]: c }), {})
    );
  }
  function r() {
    t = t.filter((i) => i.destroy());
  }
  return { init: n, destroy: r };
}
function Gs(e, t, n) {
  const r = e.ownerDocument,
    o = r.defaultView,
    i = bS(o),
    a = CS(i),
    l = Ha(),
    c = SS(),
    { mergeOptions: u, optionsAtMedia: h, optionsMediaQueries: f } = i,
    { on: g, off: C, emit: E } = c,
    y = K;
  let M = !1,
    m,
    v = u(ES, Gs.globalOptions),
    b = u(v),
    j = [],
    N,
    O,
    P;
  function R() {
    const { container: je, slides: J } = b;
    O = (wf(je) ? e.querySelector(je) : je) || e.children[0];
    const Le = wf(J) ? O.querySelectorAll(J) : J;
    P = [].slice.call(Le || O.children);
  }
  function F(je) {
    const J = xS(e, O, P, r, o, je, c);
    if (je.loop && !J.slideLooper.canLoop()) {
      const me = Object.assign({}, je, { loop: !1 });
      return F(me);
    }
    return J;
  }
  function H(je, J) {
    M ||
      ((v = u(v, je)),
      (b = h(v)),
      (j = J || j),
      R(),
      (m = F(b)),
      f([v, ...j.map(({ options: me }) => me)]).forEach((me) =>
        l.add(me, "change", K)
      ),
      b.active &&
        (m.translate.to(m.location.get()),
        m.animation.init(),
        m.slidesInView.init(),
        m.slideFocus.init(),
        m.eventHandler.init(it),
        m.resizeHandler.init(it),
        m.slidesHandler.init(it),
        m.options.loop && m.slideLooper.loop(),
        O.offsetParent && P.length && m.dragHandler.init(it),
        (N = a.init(it, j))));
  }
  function K(je, J) {
    const me = W();
    G(), H(u({ startIndex: me }, je), J), c.emit("reInit");
  }
  function G() {
    m.dragHandler.destroy(),
      m.eventStore.clear(),
      m.translate.clear(),
      m.slideLooper.clear(),
      m.resizeHandler.destroy(),
      m.slidesHandler.destroy(),
      m.slidesInView.destroy(),
      m.animation.destroy(),
      a.destroy(),
      l.clear();
  }
  function ue() {
    M || ((M = !0), l.clear(), G(), c.emit("destroy"), c.clear());
  }
  function ie(je, J, me) {
    !b.active ||
      M ||
      (m.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : b.duration),
      m.scrollTo.index(je, me || 0));
  }
  function pe(je) {
    const J = m.index.add(1).get();
    ie(J, je, -1);
  }
  function ve(je) {
    const J = m.index.add(-1).get();
    ie(J, je, 1);
  }
  function re() {
    return m.index.add(1).get() !== W();
  }
  function V() {
    return m.index.add(-1).get() !== W();
  }
  function _() {
    return m.scrollSnapList;
  }
  function z() {
    return m.scrollProgress.get(m.location.get());
  }
  function W() {
    return m.index.get();
  }
  function ne() {
    return m.indexPrevious.get();
  }
  function ye() {
    return m.slidesInView.get();
  }
  function he() {
    return m.slidesInView.get(!1);
  }
  function Se() {
    return N;
  }
  function fe() {
    return m;
  }
  function be() {
    return e;
  }
  function ke() {
    return O;
  }
  function Je() {
    return P;
  }
  const it = {
    canScrollNext: re,
    canScrollPrev: V,
    containerNode: ke,
    internalEngine: fe,
    destroy: ue,
    off: C,
    on: g,
    emit: E,
    plugins: Se,
    previousScrollSnap: ne,
    reInit: y,
    rootNode: be,
    scrollNext: pe,
    scrollPrev: ve,
    scrollProgress: z,
    scrollSnapList: _,
    scrollTo: ie,
    selectedScrollSnap: W,
    slideNodes: Je,
    slidesInView: ye,
    slidesNotInView: he,
  };
  return H(t, n), setTimeout(() => c.emit("init"), 0), it;
}
Gs.globalOptions = void 0;
function Y0(e = {}, t = []) {
  const n = w.useRef(e),
    r = w.useRef(t),
    [o, i] = w.useState(),
    [a, l] = w.useState(),
    c = w.useCallback(() => {
      o && o.reInit(n.current, r.current);
    }, [o]);
  return (
    w.useEffect(() => {
      if (G5() && a) {
        Gs.globalOptions = Y0.globalOptions;
        const u = Gs(a, n.current, r.current);
        return i(u), () => u.destroy();
      } else i(void 0);
    }, [a, i]),
    w.useEffect(() => {
      U0(n.current, e) || ((n.current = e), c());
    }, [e, c]),
    w.useEffect(() => {
      Y5(r.current, t) || ((r.current = t), c());
    }, [t, c]),
    [l, o]
  );
}
Y0.globalOptions = void 0;
const P8 = w.createContext(null);
function bc() {
  const e = w.useContext(P8);
  if (!e) throw new Error("useCarousel must be used within a <Carousel />");
  return e;
}
const Cc = w.forwardRef(
  (
    {
      orientation: e = "horizontal",
      opts: t,
      setApi: n,
      plugins: r,
      className: o,
      children: i,
      ...a
    },
    l
  ) => {
    const [c, u] = Y0({ ...t, axis: e === "horizontal" ? "x" : "y" }, r),
      [h, f] = w.useState(!1),
      [g, C] = w.useState(!1),
      E = w.useCallback((v) => {
        v && (f(v.canScrollPrev()), C(v.canScrollNext()));
      }, []),
      y = w.useCallback(() => {
        u == null || u.scrollPrev();
      }, [u]),
      M = w.useCallback(() => {
        u == null || u.scrollNext();
      }, [u]),
      m = w.useCallback(
        (v) => {
          v.key === "ArrowLeft"
            ? (v.preventDefault(), y())
            : v.key === "ArrowRight" && (v.preventDefault(), M());
        },
        [y, M]
      );
    return (
      w.useEffect(() => {
        !u || !n || n(u);
      }, [u, n]),
      w.useEffect(() => {
        if (u)
          return (
            E(u),
            u.on("reInit", E),
            u.on("select", E),
            () => {
              u == null || u.off("select", E);
            }
          );
      }, [u, E]),
      p.jsx(P8.Provider, {
        value: {
          carouselRef: c,
          api: u,
          opts: t,
          orientation:
            e ||
            ((t == null ? void 0 : t.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev: y,
          scrollNext: M,
          canScrollPrev: h,
          canScrollNext: g,
        },
        children: p.jsx("div", {
          ref: l,
          onKeyDownCapture: m,
          className: Fe("relative", o),
          role: "region",
          "aria-roledescription": "carousel",
          ...a,
          children: i,
        }),
      })
    );
  }
);
Cc.displayName = "Carousel";
const jc = w.forwardRef(({ className: e, ...t }, n) => {
  const { carouselRef: r, orientation: o } = bc();
  return p.jsx("div", {
    ref: r,
    className: "overflow-hidden",
    children: p.jsx("div", {
      ref: n,
      className: Fe("flex", o === "horizontal" ? "-ml-4" : "-mt-4 flex-col", e),
      ...t,
    }),
  });
});
jc.displayName = "CarouselContent";
const Ac = w.forwardRef(({ className: e, ...t }, n) => {
  const { orientation: r } = bc();
  return p.jsx("div", {
    ref: n,
    role: "group",
    "aria-roledescription": "slide",
    className: Fe(
      "min-w-0 shrink-0 grow-0 basis-full",
      r === "horizontal" ? "pl-4" : "pt-4",
      e
    ),
    ...t,
  });
});
Ac.displayName = "CarouselItem";
const jS = w.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollPrev: a, canScrollPrev: l } = bc();
    return p.jsxs(Be, {
      ref: o,
      variant: t,
      size: n,
      className: Fe(
        "absolute  h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: a,
      ...r,
      children: [
        p.jsx(hx, { className: "h-4 w-4" }),
        p.jsx("span", { className: "sr-only", children: "Previous slide" }),
      ],
    });
  }
);
jS.displayName = "CarouselPrevious";
const AS = w.forwardRef(
  ({ className: e, variant: t = "outline", size: n = "icon", ...r }, o) => {
    const { orientation: i, scrollNext: a, canScrollNext: l } = bc();
    return p.jsxs(Be, {
      ref: o,
      variant: t,
      size: n,
      className: Fe(
        "absolute h-8 w-8 rounded-full",
        i === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        e
      ),
      disabled: !l,
      onClick: a,
      ...r,
      children: [
        p.jsx(gx, { className: "h-4 w-4" }),
        p.jsx("span", { className: "sr-only", children: "Next slide" }),
      ],
    });
  }
);
AS.displayName = "CarouselNext";
const MS = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null,
};
function Xa(e = {}) {
  let t,
    n,
    r,
    o = !1,
    i = !0,
    a = !1,
    l = 0;
  function c(j, N) {
    n = j;
    const { mergeOptions: O, optionsAtMedia: P } = N,
      R = O(MS, Xa.globalOptions),
      F = O(R, e);
    if (((t = P(F)), n.scrollSnapList().length <= 1)) return;
    (a = t.jump), (r = !1);
    const { eventStore: H, ownerDocument: K } = n.internalEngine(),
      G = n.rootNode(),
      ue = (t.rootNode && t.rootNode(G)) || G,
      ie = n.containerNode();
    n.on("pointerDown", f),
      t.stopOnInteraction || n.on("pointerUp", h),
      t.stopOnMouseEnter &&
        (H.add(ue, "mouseenter", () => {
          (i = !1), f();
        }),
        t.stopOnInteraction ||
          H.add(ue, "mouseleave", () => {
            (i = !0), h();
          })),
      t.stopOnFocusIn &&
        (H.add(ie, "focusin", f),
        t.stopOnInteraction || H.add(ie, "focusout", h)),
      H.add(K, "visibilitychange", g),
      t.playOnInit && !C() && h();
  }
  function u() {
    n.off("pointerDown", f).off("pointerUp", h), f(), (r = !0), (o = !1);
  }
  function h() {
    if (r || !i) return;
    o || n.emit("autoplay:play");
    const { ownerWindow: j } = n.internalEngine();
    j.clearInterval(l), (l = j.setInterval(v, t.delay)), (o = !0);
  }
  function f() {
    if (r) return;
    o && n.emit("autoplay:stop");
    const { ownerWindow: j } = n.internalEngine();
    j.clearInterval(l), (l = 0), (o = !1);
  }
  function g() {
    if (C()) return (i = o), f();
    i && h();
  }
  function C() {
    const { ownerDocument: j } = n.internalEngine();
    return j.visibilityState === "hidden";
  }
  function E(j) {
    typeof j < "u" && (a = j), (i = !0), h();
  }
  function y() {
    o && f();
  }
  function M() {
    o && E();
  }
  function m() {
    return o;
  }
  function v() {
    const { index: j } = n.internalEngine(),
      N = j.clone().add(1).get(),
      O = n.scrollSnapList().length - 1;
    t.stopOnLastSnap && N === O && f(),
      n.canScrollNext() ? n.scrollNext(a) : n.scrollTo(0, a);
  }
  return {
    name: "autoplay",
    options: e,
    init: c,
    destroy: u,
    play: E,
    stop: y,
    reset: M,
    isPlaying: m,
  };
}
Xa.globalOptions = void 0;
const kS = ({ slideDown: e }) => {
    var u, h, f;
    const [t, n] = w.useState([]),
      [r, o] = w.useState([]),
      i = new Tn();
    i.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const a = new tr(i),
      l = async () => {
        try {
          const g = await a.listDocuments(
            "6680506f003dd11a430b",
            "668d4fb5000e2603bb3b",
            []
          );
          n(g.documents);
        } catch (g) {
          console.error("Error fetching data:", g);
        }
      },
      c = async () => {
        try {
          const g = await a.listDocuments(
              "6680506f003dd11a430b",
              "668e654100003e7cfea1",
              []
            ),
            C = await a.listDocuments(
              "6680506f003dd11a430b",
              "668e659200005a5fba69",
              []
            ),
            E = await a.listDocuments(
              "6680506f003dd11a430b",
              "668e65b30012aaa8d027",
              []
            );
          o([...g.documents, ...C.documents, ...E.documents]);
        } catch (g) {
          console.error("Error fetching data:", g);
        }
      };
    return (
      w.useEffect(() => {
        l(), c();
      }, []),
      p.jsxs("div", {
        className: " min-h-full relative",
        children: [
          p.jsx("div", {
            className: " min-h-full flex justify-center items-center",
            children: p.jsx(Cc, {
              plugins: [Xa({ delay: 3e3 })],
              className: "w-full",
              children: p.jsx(jc, {
                children:
                  r.length > 0 &&
                  (r == null
                    ? void 0
                    : r.map(({ image: g }, C) =>
                        p.jsx(
                          Ac,
                          {
                            className: "",
                            children: p.jsx("img", {
                              src: g,
                              className: " w-full  object-fill h-screen",
                              alt: "",
                            }),
                          },
                          C
                        )
                      )),
              }),
            }),
          }),
          p.jsx("div", {
            className: " absolute lg:top-1/3 top-1/3  block lg:left-1/2",
            children: p.jsx("div", {
              className: "w-[80%] lg:w-full mx-auto",
              children: p.jsxs("div", {
                className:
                  " lg:space-y-3 space-y-2 opacity-90 rounded bg-white lg:w-3/4 p-5 z-50 lg:p-[50px]",
                children: [
                  p.jsx("p", {
                    className:
                      " uppercase text-primary font-medium text-xs lg:text-lg",
                    children: (u = t[0]) == null ? void 0 : u.smallTitle,
                  }),
                  p.jsx("p", {
                    className: " uppercase lg:text-4xl text-base font-semibold",
                    children: (h = t[0]) == null ? void 0 : h.mainTitle,
                  }),
                  p.jsx("p", {
                    className: " font-light text-black/60 text-xs lg:text-base",
                    children: (f = t[0]) == null ? void 0 : f.heroText,
                  }),
                  p.jsx(Be, {
                    onClick: e,
                    size: "sm",
                    className: " rounded-lg",
                    children: "Get To Know Service",
                  }),
                ],
              }),
            }),
          }),
        ],
      })
    );
  },
  wi = ({ section: e, heading: t, desc: n }) =>
    p.jsxs("div", {
      className: " space-y-1",
      children: [
        p.jsx("p", {
          className: " text-primary text-sm lg:text-lg font-medium",
          children: e,
        }),
        p.jsx("p", {
          className: " text-base lg:text-4xl text-black font-semibold",
          children: t,
        }),
        p.jsx("p", {
          className: " text-xs lg:text-sm font-light lg:pt-2 text-black/60",
          children: n,
        }),
      ],
    }),
  LS = ({ icon: e, heading: t, desc: n }) =>
    p.jsxs("div", {
      className: " flex gap-3 items-center",
      children: [
        e,
        p.jsxs("div", {
          className: " space-y-1",
          children: [
            p.jsx("p", {
              className: " font-medium text-base  lg:text-xl text-black ",
              children: t,
            }),
            p.jsx("p", {
              className: "text-xs font-light text-black/60",
              children: n,
            }),
          ],
        }),
      ],
    });
var NS = Object.defineProperty,
  Ys = Object.getOwnPropertySymbols,
  O8 = Object.prototype.hasOwnProperty,
  R8 = Object.prototype.propertyIsEnumerable,
  mm = (e, t, n) =>
    t in e
      ? NS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  PS = (e, t) => {
    for (var n in t || (t = {})) O8.call(t, n) && mm(e, n, t[n]);
    if (Ys) for (var n of Ys(t)) R8.call(t, n) && mm(e, n, t[n]);
    return e;
  },
  OS = (e, t) => {
    var n = {};
    for (var r in e) O8.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Ys)
      for (var r of Ys(e)) t.indexOf(r) < 0 && R8.call(e, r) && (n[r] = e[r]);
    return n;
  };
const T8 = w.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o = "currentColor",
      size: i = "1em",
      weight: a = "regular",
      mirrored: l = !1,
      children: c,
      weights: u,
    } = n,
    h = OS(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]);
  return S.createElement(
    "svg",
    PS(
      {
        ref: t,
        xmlns: "http://www.w3.org/2000/svg",
        width: i,
        height: i,
        fill: o,
        viewBox: "0 0 256 256",
        transform: l ? "scale(-1, 1)" : void 0,
      },
      h
    ),
    !!r && S.createElement("title", null, r),
    c,
    u.get(a)
  );
});
T8.displayName = "SSRBase";
const RS = T8,
  TS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M180,216a12,12,0,0,1-12,12H24a12,12,0,1,1,0-24H168A12,12,0,0,1,180,216ZM251.79,89.88a12,12,0,0,1-5.64,8.1L98.75,186l-.13.07a43.74,43.74,0,0,1-52.2-5.94l-.19-.18-36-35.25A20,20,0,0,1,15.78,112l2.94-1.44a12,12,0,0,1,9.12-.59l26.5,8.94,14.15-8.56L50.42,92.78a20,20,0,0,1,5.7-33.05l.48-.2,7.15-2.7a12,12,0,0,1,8.4,0L124.29,76l49.93-29.8a43.8,43.8,0,0,1,56.43,10,1.84,1.84,0,0,1,.17.22L249.46,80.3A11.94,11.94,0,0,1,251.79,89.88Zm-29.61-5.54L212,71.29a19.89,19.89,0,0,0-25.54-4.48l-54.77,32.7a12,12,0,0,1-10.3,1l-46-16.94,21,20.4a12,12,0,0,1-2.15,18.87L62,142.29a12,12,0,0,1-10,1.1l-13.35-4.5,24.31,23.8a19.89,19.89,0,0,0,23.6,2.65Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,91.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,140a8,8,0,0,1,2.32-13.19L24,125.27,55.79,136,88,116.51,58.65,88a8,8,0,0,1,2.2-13.3L68,72l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM246.31,86.76,227.67,62.87l-.12-.15a39.82,39.82,0,0,0-51.28-9.12L124.7,84.38,70.76,64.54a8,8,0,0,0-5.59,0L58,67.27l-.32.13a16,16,0,0,0-4.53,26.47L75,115.06l-20.17,12.2-28.26-9.54a8,8,0,0,0-6.08.4l-3,1.47A16,16,0,0,0,13,145.8l36,35.27.12.12a39.78,39.78,0,0,0,27.28,10.87,40.18,40.18,0,0,0,20.26-5.52l147.41-88a8,8,0,0,0,2.21-11.78Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M174,216a6,6,0,0,1-6,6H24a6,6,0,0,1,0-12H168A6,6,0,0,1,174,216ZM245.9,92.78a6,6,0,0,1-2.82,4l-147.41,88a38.22,38.22,0,0,1-19.23,5.23,37.8,37.8,0,0,1-25.92-10.33l-.1-.09L14.37,144.36a14,14,0,0,1,4-23l3-1.49a6,6,0,0,1,4.56-.29l29.15,9.83,23.17-14-23.7-23a14,14,0,0,1,4-23.18l.24-.1,7.15-2.71a6,6,0,0,1,4.19,0l54.84,20.18,52.38-31.27A37.81,37.81,0,0,1,226,64l.09.11L244.73,88A6,6,0,0,1,245.9,92.78ZM231.09,90,216.67,71.53a25.86,25.86,0,0,0-33.26-5.89L128.6,98.36a6,6,0,0,1-5.15.48L68,78.45l-4.9,1.85A1.91,1.91,0,0,0,62,81.77a2,2,0,0,0,.63,1.82l.17.15,29.35,28.49a6,6,0,0,1-1.07,9.44L58.89,141.16a6,6,0,0,1-5,.55l-29.45-9.94-.93.46-.28.13a2,2,0,0,0-.58,3.29l.1.09,36,35.28a25.84,25.84,0,0,0,30.81,3.47Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M176,216a8,8,0,0,1-8,8H24a8,8,0,0,1,0-16H168A8,8,0,0,1,176,216ZM247.86,93.15a8,8,0,0,1-3.76,5.39l-147.41,88a40.18,40.18,0,0,1-20.26,5.52,39.78,39.78,0,0,1-27.28-10.87l-.12-.12L13,145.8a16,16,0,0,1,4.49-26.21l3-1.47a8,8,0,0,1,6.08-.4l28.26,9.54L75,115.06,53.17,93.87A16,16,0,0,1,57.7,67.4l.32-.13,7.15-2.71a8,8,0,0,1,5.59,0L124.7,84.38,176.27,53.6a39.82,39.82,0,0,1,51.28,9.12l.12.15,18.64,23.89A8,8,0,0,1,247.86,93.15Zm-19.74-3.7-13-16.67a23.88,23.88,0,0,0-30.68-5.42l-54.8,32.72a8.06,8.06,0,0,1-6.87.64L68,80.58l-4,1.53.21.2L93.57,110.8a8,8,0,0,1-1.43,12.58L59.93,142.87a8,8,0,0,1-6.7.73l-28.67-9.67-.19.1-.37.17a.71.71,0,0,1,.13.12l36,35.26a23.85,23.85,0,0,0,28.42,3.18Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M172,216a4,4,0,0,1-4,4H24a4,4,0,0,1,0-8H168A4,4,0,0,1,172,216ZM243.93,92.41a4,4,0,0,1-1.88,2.7l-147.41,88a36.15,36.15,0,0,1-18.2,4.95,35.78,35.78,0,0,1-24.55-9.79L15.73,142.89a12,12,0,0,1,3.44-19.68l3.07-1.5a4,4,0,0,1,3-.2l30,10.13L81.5,115.8,55.91,91a12,12,0,0,1,3.36-19.89l.16-.06,7.15-2.71a4,4,0,0,1,2.8,0L125.11,88.8,178.32,57a35.83,35.83,0,0,1,46.14,8.22l18.69,24A4,4,0,0,1,243.93,92.41Zm-9.87-1.85L218.21,70.24a27.85,27.85,0,0,0-35.81-6.33L127.58,96.64a4,4,0,0,1-3.44.32L68,76.31l-5.66,2.14a4,4,0,0,0-1,6.62,1.14,1.14,0,0,0,.11.11l29.35,28.49a4,4,0,0,1-.72,6.29L57.86,139.44a4,4,0,0,1-3.35.37l-30.23-10.2-1.67.82-.18.09a4,4,0,0,0-1.16,6.59L57.42,172.5a27.82,27.82,0,0,0,33.16,3.72Z",
        })
      ),
    ],
  ]),
  IS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222.33,106.79,212,103.35V56a20,20,0,0,0-20-20H140V24a12,12,0,0,0-24,0V36H64A20,20,0,0,0,44,56v47.35l-10.33,3.44a20,20,0,0,0-13.67,19V152c0,64.63,100.8,90.57,105.09,91.64a11.94,11.94,0,0,0,5.82,0C135.2,242.57,236,216.63,236,152V125.77A20,20,0,0,0,222.33,106.79ZM68,60H188V95.35L131.79,76.62a11.85,11.85,0,0,0-7.58,0L68,95.35Zm144,92c0,36.69-58.08,60.43-84,67.59-25.94-7.17-84-30.9-84-67.59V128.65l72-24V168a12,12,0,0,0,24,0V104.65l72,24Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,125.77V152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18A8,8,0,0,1,224,125.77Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM64,56H192v44.9L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9Zm152,96c0,24.91-23.68,43-43.55,53.83A228.13,228.13,0,0,1,128,223.72,226.85,226.85,0,0,1,83.81,206C47.6,186.35,40,165.79,40,152V125.77L120,99.1V168a8,8,0,0,0,16,0V99.1l80,26.67Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM136,168a8,8,0,0,1-16,0V104.87a8,8,0,0,1,16,0Zm56-67.1L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9V56H192Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M220.43,112.48,206,107.68V56a14,14,0,0,0-14-14H134V24a6,6,0,0,0-12,0V42H64A14,14,0,0,0,50,56v51.68l-14.43,4.8A14,14,0,0,0,26,125.77V152c0,60,96.44,84.79,100.54,85.82a6,6,0,0,0,2.92,0,235.44,235.44,0,0,0,49.4-19.54C212.32,200.15,230,177.24,230,152V125.77A14,14,0,0,0,220.43,112.48ZM62,56a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2v47.68L129.9,82.31a6,6,0,0,0-3.8,0L62,103.68Zm156,96c0,47.1-78.28,70.54-90,73.79C116.27,222.54,38,199.1,38,152V125.77a2,2,0,0,1,1.37-1.9L122,96.32V168a6,6,0,0,0,12,0V96.32l82.63,27.55a2,2,0,0,1,1.37,1.9Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM64,56H192v44.9L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9Zm152,96c0,24.91-23.68,43-43.55,53.83A228.13,228.13,0,0,1,128,223.72,226.85,226.85,0,0,1,83.81,206C47.6,186.35,40,165.79,40,152V125.77L120,99.1V168a8,8,0,0,0,16,0V99.1l80,26.67Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M219.79,114.38,204,109.12V56a12,12,0,0,0-12-12H132V24a4,4,0,0,0-8,0V44H64A12,12,0,0,0,52,56v53.12l-15.8,5.26A12,12,0,0,0,28,125.77V152c0,24.46,17.32,46.77,50.09,64.52A233.22,233.22,0,0,0,127,235.88a4,4,0,0,0,1.94,0,233.22,233.22,0,0,0,48.94-19.36C210.68,198.77,228,176.46,228,152V125.77A12,12,0,0,0,219.79,114.38ZM60,56a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4v50.45L129.26,84.21a3.89,3.89,0,0,0-2.52,0L60,106.45Zm160,96c0,49.32-82.08,73.16-92,75.86-9.92-2.7-92-26.54-92-75.86V125.77a4,4,0,0,1,2.73-3.8L124,93.55V168a4,4,0,0,0,8,0V93.55L217.26,122a4,4,0,0,1,2.74,3.8Z",
        })
      ),
    ],
  ]),
  DS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Zm77.39,12.7A83.94,83.94,0,0,1,190.61,184a12,12,0,0,1-17.89-16,59.92,59.92,0,0,0,0-80,12,12,0,0,1,17.89-16,84.07,84.07,0,0,1,14.78,88.7ZM83.28,168a12,12,0,0,1-17.89,16,83.94,83.94,0,0,1,0-112A12,12,0,0,1,83.28,88a59.92,59.92,0,0,0,0,80ZM252,128a123.63,123.63,0,0,1-35.43,86.78A12,12,0,1,1,199.43,198a99.88,99.88,0,0,0,0-140,12,12,0,0,1,17.14-16.8A123.63,123.63,0,0,1,252,128ZM56.57,198a12,12,0,0,1-17.14,16.8,123.89,123.89,0,0,1,0-173.56A12,12,0,0,1,56.57,58a99.88,99.88,0,0,0,0,140Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M160,128a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M168,128a40,40,0,1,1-40-40A40,40,0,0,1,168,128Zm40,0a79.74,79.74,0,0,0-20.37-53.33,8,8,0,1,0-11.92,10.67,64,64,0,0,1,0,85.33,8,8,0,0,0,11.92,10.67A79.79,79.79,0,0,0,208,128ZM80.29,85.34A8,8,0,1,0,68.37,74.67a79.94,79.94,0,0,0,0,106.67,8,8,0,0,0,11.92-10.67,63.95,63.95,0,0,1,0-85.33Zm158.28-4A119.48,119.48,0,0,0,213.71,44a8,8,0,1,0-11.42,11.2,103.9,103.9,0,0,1,0,145.56A8,8,0,1,0,213.71,212,120.12,120.12,0,0,0,238.57,81.29ZM32.17,168.48A103.9,103.9,0,0,1,53.71,55.22,8,8,0,1,0,42.29,44a119.87,119.87,0,0,0,0,168,8,8,0,1,0,11.42-11.2A103.61,103.61,0,0,1,32.17,168.48Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,90a38,38,0,1,0,38,38A38,38,0,0,0,128,90Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,154Zm78-26a77.74,77.74,0,0,1-19.86,52,6,6,0,0,1-8.94-8,65.93,65.93,0,0,0,0-88,6,6,0,1,1,8.94-8A77.74,77.74,0,0,1,206,128ZM67.18,102.31A65.93,65.93,0,0,0,78.8,172a6,6,0,0,1-.47,8.47,6,6,0,0,1-8.47-.47,77.93,77.93,0,0,1,0-104,6,6,0,1,1,8.94,8A66.21,66.21,0,0,0,67.18,102.31ZM246,128a117.71,117.71,0,0,1-33.71,82.58,6,6,0,0,1-8.58-8.4,105.88,105.88,0,0,0,0-148.36,6,6,0,0,1,8.58-8.4A117.71,117.71,0,0,1,246,128ZM52.29,202.18a6,6,0,0,1-8.58,8.4,117.92,117.92,0,0,1,0-165.16,6,6,0,1,1,8.58,8.4,105.88,105.88,0,0,0,0,148.36Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,92a36,36,0,1,0,36,36A36,36,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm76-28a75.74,75.74,0,0,1-19.35,50.67,4,4,0,0,1-6-5.34,67.92,67.92,0,0,0,0-90.66,4,4,0,0,1,6-5.34A75.74,75.74,0,0,1,204,128ZM65.34,101.53a67.92,67.92,0,0,0,12,71.8,4,4,0,0,1-6,5.34,75.93,75.93,0,0,1,0-101.34,4,4,0,1,1,6,5.34A68,68,0,0,0,65.34,101.53ZM244,128a115.68,115.68,0,0,1-33.14,81.18,4,4,0,0,1-5.72-5.6,107.89,107.89,0,0,0,0-151.16,4,4,0,0,1,5.72-5.6A115.68,115.68,0,0,1,244,128ZM50.86,203.58a4,4,0,0,1-5.72,5.6,115.91,115.91,0,0,1,0-162.36,4,4,0,1,1,5.72,5.6,107.89,107.89,0,0,0,0,151.16Z",
        })
      ),
    ],
  ]),
  HS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,100h-8.2L205.08,39.88A20,20,0,0,0,186.8,28H69.2A20,20,0,0,0,50.92,39.88L24.2,100H16a12,12,0,0,0,0,24h4v76a20,20,0,0,0,20,20H68a20,20,0,0,0,20-20V180h80v20a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V124h4a12,12,0,0,0,0-24ZM71.8,52H184.2l21.33,48H50.47ZM64,196H44V180H64Zm128,0V180h20v16Zm20-40H44V124H212Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M184,176h40v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8ZM32,200a8,8,0,0,0,8,8H64a8,8,0,0,0,8-8V176H32ZM194.11,44.75A8,8,0,0,0,186.8,40H69.2a8,8,0,0,0-7.31,4.75L32,112H224Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16v-8h96v8a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM80,152H56a8,8,0,0,1,0-16H80a8,8,0,0,1,0,16Zm120,0H176a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16ZM44.31,104,69.2,48H186.8l24.89,56Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,106H227.9L199.59,42.31A14,14,0,0,0,186.8,34H69.2a14,14,0,0,0-12.79,8.31L28.1,106H16a6,6,0,0,0,0,12H26v82a14,14,0,0,0,14,14H64a14,14,0,0,0,14-14V182H178v18a14,14,0,0,0,14,14h24a14,14,0,0,0,14-14V118h10a6,6,0,0,0,0-12ZM67.37,47.19A2,2,0,0,1,69.2,46H186.8a2,2,0,0,1,1.83,1.19L214.77,106H41.23ZM66,200a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V182H66Zm150,2H192a2,2,0,0,1-2-2V182h28v18A2,2,0,0,1,216,202Zm2-32H38V118H218ZM58,144a6,6,0,0,1,6-6H80a6,6,0,0,1,0,12H64A6,6,0,0,1,58,144Zm112,0a6,6,0,0,1,6-6h16a6,6,0,0,1,0,12H176A6,6,0,0,1,170,144Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,104H229.2L201.42,41.5A16,16,0,0,0,186.8,32H69.2a16,16,0,0,0-14.62,9.5L26.8,104H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V184h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V120h8a8,8,0,0,0,0-16ZM69.2,48H186.8l24.89,56H44.31ZM64,200H40V184H64Zm128,0V184h24v16Zm24-32H40V120H216ZM56,144a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,144Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,144Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M240,108H226.6L197.77,43.13a12,12,0,0,0-11-7.13H69.2a12,12,0,0,0-11,7.13L29.4,108H16a4,4,0,0,0,0,8H28v84a12,12,0,0,0,12,12H64a12,12,0,0,0,12-12V180H180v20a12,12,0,0,0,12,12h24a12,12,0,0,0,12-12V116h12a4,4,0,0,0,0-8ZM65.54,46.38A4,4,0,0,1,69.2,44H186.8a4,4,0,0,1,3.66,2.38L217.84,108H38.16ZM68,200a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V180H68Zm148,4H192a4,4,0,0,1-4-4V180h32v20A4,4,0,0,1,216,204Zm4-32H36V116H220ZM60,144a4,4,0,0,1,4-4H80a4,4,0,0,1,0,8H64A4,4,0,0,1,60,144Zm112,0a4,4,0,0,1,4-4h16a4,4,0,0,1,0,8H176A4,4,0,0,1,172,144Z",
        })
      ),
    ],
  ]),
  _S = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z",
        })
      ),
    ],
  ]),
  VS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M192,20H64A28,28,0,0,0,36,48V208a28,28,0,0,0,28,28H192a28,28,0,0,0,28-28V48A28,28,0,0,0,192,20ZM60,84H196v88H60Zm4-40H192a4,4,0,0,1,4,4V60H60V48A4,4,0,0,1,64,44ZM192,212H64a4,4,0,0,1-4-4V196H196v12A4,4,0,0,1,192,212Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", { d: "M208,64V192H48V64Z", opacity: "0.2" }),
        S.createElement("path", {
          d: "M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM56,72H200V184H56Zm8-32H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM64,40H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M192,26H64A22,22,0,0,0,42,48V208a22,22,0,0,0,22,22H192a22,22,0,0,0,22-22V48A22,22,0,0,0,192,26ZM54,70H202V186H54ZM64,38H192a10,10,0,0,1,10,10V58H54V48A10,10,0,0,1,64,38ZM192,218H64a10,10,0,0,1-10-10V198H202v10A10,10,0,0,1,192,218Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M192,24H64A24,24,0,0,0,40,48V208a24,24,0,0,0,24,24H192a24,24,0,0,0,24-24V48A24,24,0,0,0,192,24ZM56,72H200V184H56Zm8-32H192a8,8,0,0,1,8,8v8H56V48A8,8,0,0,1,64,40ZM192,216H64a8,8,0,0,1-8-8v-8H200v8A8,8,0,0,1,192,216Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M192,28H64A20,20,0,0,0,44,48V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28ZM52,68H204V188H52ZM64,36H192a12,12,0,0,1,12,12V60H52V48A12,12,0,0,1,64,36ZM192,220H64a12,12,0,0,1-12-12V196H204v12A12,12,0,0,1,192,220Z",
        })
      ),
    ],
  ]),
  zS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44Zm-96,83.72L62.85,68h130.3ZM92.79,128,44,172.72V83.28Zm17.76,16.28,9.34,8.57a12,12,0,0,0,16.22,0l9.34-8.57L193.15,188H62.85ZM163.21,128,212,83.28v89.44Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", { d: "M224,56l-96,88L32,56Z", opacity: "0.2" }),
        S.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50Zm-96,85.86L47.42,62H208.58ZM101.67,128,38,186.36V69.64Zm8.88,8.14L124,148.42a6,6,0,0,0,8.1,0l13.4-12.28L208.58,194H47.43ZM154.33,128,218,69.64V186.36Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-96,86.57L42.28,60H213.72ZM104.63,128,36,190.91V65.09Zm5.92,5.43L125.3,147a4,4,0,0,0,5.4,0l14.75-13.52L213.72,196H42.28ZM151.37,128,220,65.09V190.91Z",
        })
      ),
    ],
  ]),
  ZS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M220,112v96a20,20,0,0,1-20,20H56a20,20,0,0,1-20-20V112A20,20,0,0,1,56,92H76a12,12,0,0,1,0,24H60v88H196V116H180a12,12,0,0,1,0-24h20A20,20,0,0,1,220,112ZM96.49,72.49,116,53v83a12,12,0,0,0,24,0V53l19.51,19.52a12,12,0,1,0,17-17l-40-40a12,12,0,0,0-17,0l-40,40a12,12,0,1,0,17,17Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", { d: "M208,104V216H48V104Z", opacity: "0.2" }),
        S.createElement("path", {
          d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96h64v48a8,8,0,0,0,16,0V96h64A16,16,0,0,1,216,112ZM136,43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66L120,43.31V96h16Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M214,112v96a14,14,0,0,1-14,14H56a14,14,0,0,1-14-14V112A14,14,0,0,1,56,98H80a6,6,0,0,1,0,12H56a2,2,0,0,0-2,2v96a2,2,0,0,0,2,2H200a2,2,0,0,0,2-2V112a2,2,0,0,0-2-2H176a6,6,0,0,1,0-12h24A14,14,0,0,1,214,112ZM92.24,68.24,122,38.49V136a6,6,0,0,0,12,0V38.49l29.76,29.75a6,6,0,1,0,8.48-8.48l-40-40a6,6,0,0,0-8.48,0l-40,40a6,6,0,1,0,8.48,8.48Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M216,112v96a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V112A16,16,0,0,1,56,96H80a8,8,0,0,1,0,16H56v96H200V112H176a8,8,0,0,1,0-16h24A16,16,0,0,1,216,112ZM93.66,69.66,120,43.31V136a8,8,0,0,0,16,0V43.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,69.66Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M212,112v96a12,12,0,0,1-12,12H56a12,12,0,0,1-12-12V112a12,12,0,0,1,12-12H80a4,4,0,0,1,0,8H56a4,4,0,0,0-4,4v96a4,4,0,0,0,4,4H200a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H176a4,4,0,0,1,0-8h24A12,12,0,0,1,212,112ZM90.83,66.83,124,33.66V136a4,4,0,0,0,8,0V33.66l33.17,33.17a4,4,0,1,0,5.66-5.66l-40-40a4,4,0,0,0-5.66,0l-40,40a4,4,0,0,0,5.66,5.66Z",
        })
      ),
    ],
  ]),
  $S = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M216,120v96H152V152H104v64H40V120a8,8,0,0,1,2.34-5.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,216,120Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V156h40v60a4,4,0,0,0,4,4h64a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H156V152a4,4,0,0,0-4-4H104a4,4,0,0,0-4,4v60H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z",
        })
      ),
    ],
  ]),
  US = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M200,220H160.73c5.18-5,10.75-10.71,16.33-17.13C205.15,170.57,220,136.37,220,104a92,92,0,0,0-184,0c0,50,34.12,91.94,59.18,116H56a12,12,0,0,0,0,24H200a12,12,0,0,0,0-24ZM60,104a68,68,0,0,1,136,0c0,33.31-20,63.37-36.7,82.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104Zm68,44a44,44,0,1,0-44-44A44.05,44.05,0,0,0,128,148Zm0-64a20,20,0,1,1-20,20A20,20,0,0,1,128,84Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M200,226H145.22a266.37,266.37,0,0,0,27.31-27.06c27.13-31.2,41.47-64,41.47-94.94a86,86,0,0,0-172,0c0,30.91,14.34,63.74,41.47,94.94A266.37,266.37,0,0,0,110.78,226H56a6,6,0,0,0,0,12H200a6,6,0,0,0,0-12ZM54,104a74,74,0,0,1,148,0c0,59.62-59,108.93-74,120.51C113,212.93,54,163.62,54,104Zm112,0a38,38,0,1,0-38,38A38,38,0,0,0,166,104Zm-64,0a26,26,0,1,1,26,26A26,26,0,0,1,102,104Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M200,228H139.72A263.66,263.66,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62a84,84,0,0,0-168,0c0,30.42,14.17,62.79,41,93.62A263.66,263.66,0,0,0,116.28,228H56a4,4,0,0,0,0,8H200a4,4,0,0,0,0-8ZM90.9,192.23C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0c0,35.9-21.15,67.8-38.9,88.23A254.62,254.62,0,0,1,128,227,254.62,254.62,0,0,1,90.9,192.23ZM164,104a36,36,0,1,0-36,36A36,36,0,0,0,164,104Zm-64,0a28,28,0,1,1,28,28A28,28,0,0,1,100,104Z",
        })
      ),
    ],
  ]),
  BS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,178.5,96.89a4,4,0,0,0-.58-.4l-88-48.18Zm1.92,96L39.33,76,81.56,52.87l88.67,48.54Zm-89.92,54.8a4,4,0,0,1-2.08-3.5V83.29l88,48.16v94.91Zm179.84,0h0l-85.92,47V131.45l40-21.89V152a4,4,0,0,0,8,0V105.18l40-21.89v92.53A4,4,0,0,1,217.92,179.32Z",
        })
      ),
    ],
  ]),
  FS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M230.15,70.54,185.46,25.86a20,20,0,0,0-28.28,0L33.86,149.17A19.86,19.86,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.85,19.85,0,0,0,14.14-5.86l79.46-79.45,4.16,13.89-34.93,34.93a12,12,0,0,0,17,17l40-40a12,12,0,0,0,3-11.94l-9.94-33.13,24.59-24.59A20,20,0,0,0,230.15,70.54ZM65,152l71-71,39,39-71,71ZM52,173l31,31H52ZM192,103,153,64l18.34-18.34,39,39Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-36.8,36.79a8,8,0,0,0,11.31,11.32l40-40a8,8,0,0,0,2.11-7.6l-6.9-27.61L227.32,96A16,16,0,0,0,227.32,73.37ZM48,208V179.31L76.69,208Zm48-3.31L51.31,160,136,75.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-36.8,36.79a8,8,0,0,0,11.31,11.32l40-40a8,8,0,0,0,2.11-7.6l-6.9-27.61L227.32,96A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M225.91,74.79,181.22,30.1a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1l86.16-86.16,4.61,18.42-37.6,37.6a6,6,0,1,0,8.49,8.48l40-40a6,6,0,0,0,1.58-5.7l-7.18-28.7,27.26-27.25A14,14,0,0,0,225.91,74.79ZM46,208V174.49L81.52,210H48A2,2,0,0,1,46,208Zm50-.49L48.48,160,136,72.49,183.52,120ZM217.42,86.1,192,111.52,144.49,64,169.9,38.59a2,2,0,0,1,2.83,0l44.69,44.68A2,2,0,0,1,217.42,86.1Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31l83.67-83.66,3.48,13.9-36.8,36.79a8,8,0,0,0,11.31,11.32l40-40a8,8,0,0,0,2.11-7.6l-6.9-27.61L227.32,96A16,16,0,0,0,227.32,73.37ZM48,179.31,76.69,208H48Zm48,25.38L51.31,160,136,75.31,180.69,120Zm96-96L147.32,64l24-24L216,84.69Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.51,154.83A12,12,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a11.93,11.93,0,0,0,8.48-3.51l88.67-88.67,5.73,23-38.39,38.4a4,4,0,1,0,5.65,5.66l40-40a4,4,0,0,0,1.06-3.8l-7.46-29.8,28.06-28.06A12,12,0,0,0,224.49,76.2ZM44,208V169.66L86.35,212H48A4,4,0,0,1,44,208Zm52,2.34L45.66,160,136,69.66,186.35,120ZM218.83,87.51,192,114.34,141.66,64l26.83-26.83a4,4,0,0,1,5.66,0l44.68,44.69A4,4,0,0,1,218.83,87.51Z",
        })
      ),
    ],
  ]),
  WS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM93,180l71-71,11,11-71,71ZM76,163,65,152l71-71,11,11ZM52,173l15.51,15.51h0L83,204H52ZM192,103,153,64l18.34-18.34,39,39Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160l90.35-90.35,16.68,16.69L68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188l90.35-90.35h0l16.68,16.69Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM48.49,160,136,72.48,155.51,92,68,179.51ZM46,208V174.48L81.51,210H48A2,2,0,0,1,46,208Zm50-.49L76.49,188,164,100.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM51.31,160,136,75.31,152.69,92,68,176.68ZM48,179.31,76.69,208H48Zm48,25.38L79.31,188,164,103.31,180.69,120Zm96-96L147.31,64l24-24L216,84.68Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17ZM45.66,160,136,69.65,158.34,92,68,182.34ZM44,208V169.66l21.17,21.17h0L86.34,212H48A4,4,0,0,1,44,208Zm52,2.34L73.66,188,164,97.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z",
        })
      ),
    ],
  ]),
  GS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z",
        })
      ),
    ],
  ]),
  YS = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z",
        })
      ),
    ],
  ]);
var KS = Object.defineProperty,
  qS = Object.defineProperties,
  XS = Object.getOwnPropertyDescriptors,
  gm = Object.getOwnPropertySymbols,
  QS = Object.prototype.hasOwnProperty,
  JS = Object.prototype.propertyIsEnumerable,
  vm = (e, t, n) =>
    t in e
      ? KS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  e7 = (e, t) => {
    for (var n in t || (t = {})) QS.call(t, n) && vm(e, n, t[n]);
    if (gm) for (var n of gm(t)) JS.call(t, n) && vm(e, n, t[n]);
    return e;
  },
  t7 = (e, t) => qS(e, XS(t));
const Ef = w.forwardRef((e, t) =>
  S.createElement(RS, t7(e7({ ref: t }, e), { weights: YS }))
);
Ef.displayName = "Plus";
const n7 = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H134v34a6,6,0,0,1-12,0V134H88a6,6,0,0,1,0-12h34V88a6,6,0,0,1,12,0v34h34A6,6,0,0,1,174,128Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H132v36a4,4,0,0,1-8,0V132H88a4,4,0,0,1,0-8h36V88a4,4,0,0,1,8,0v36h36A4,4,0,0,1,172,128Z",
        })
      ),
    ],
  ]),
  r7 = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M160,116h48a20,20,0,0,0,20-20V48a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20V60H128a28,28,0,0,0-28,28v28H76v-4A20,20,0,0,0,56,92H24A20,20,0,0,0,4,112v32a20,20,0,0,0,20,20H56a20,20,0,0,0,20-20v-4h24v28a28,28,0,0,0,28,28h12v12a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V160a20,20,0,0,0-20-20H160a20,20,0,0,0-20,20v12H128a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h12V96A20,20,0,0,0,160,116ZM52,140H28V116H52Zm112,24h40v40H164Zm0-112h40V92H164Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M64,112v32a8,8,0,0,1-8,8H24a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H56A8,8,0,0,1,64,112ZM208,40H160a8,8,0,0,0-8,8V96a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40Zm0,112H160a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V160A8,8,0,0,0,208,152Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M144,96V80H128a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16V160a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16v48a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V192H128a24,24,0,0,1-24-24V136H72v8a16,16,0,0,1-16,16H24A16,16,0,0,1,8,144V112A16,16,0,0,1,24,96H56a16,16,0,0,1,16,16v8h32V88a24,24,0,0,1,24-24h16V48a16,16,0,0,1,16-16h48a16,16,0,0,1,16,16V96a16,16,0,0,1-16,16H160A16,16,0,0,1,144,96Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M160,110h48a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H160a14,14,0,0,0-14,14V66H128a22,22,0,0,0-22,22v34H70V112A14,14,0,0,0,56,98H24a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H56a14,14,0,0,0,14-14V134h36v34a22,22,0,0,0,22,22h18v18a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V160a14,14,0,0,0-14-14H160a14,14,0,0,0-14,14v18H128a10,10,0,0,1-10-10V88a10,10,0,0,1,10-10h18V96A14,14,0,0,0,160,110ZM58,144a2,2,0,0,1-2,2H24a2,2,0,0,1-2-2V112a2,2,0,0,1,2-2H56a2,2,0,0,1,2,2Zm100,16a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2v48a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2Zm0-112a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2V96a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M160,112h48a16,16,0,0,0,16-16V48a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16V64H128a24,24,0,0,0-24,24v32H72v-8A16,16,0,0,0,56,96H24A16,16,0,0,0,8,112v32a16,16,0,0,0,16,16H56a16,16,0,0,0,16-16v-8h32v32a24,24,0,0,0,24,24h16v16a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V160a16,16,0,0,0-16-16H160a16,16,0,0,0-16,16v16H128a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h16V96A16,16,0,0,0,160,112ZM56,144H24V112H56v32Zm104,16h48v48H160Zm0-112h48V96H160Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M160,108h48a12,12,0,0,0,12-12V48a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12V68H128a20,20,0,0,0-20,20v36H68V112a12,12,0,0,0-12-12H24a12,12,0,0,0-12,12v32a12,12,0,0,0,12,12H56a12,12,0,0,0,12-12V132h40v36a20,20,0,0,0,20,20h20v20a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V160a12,12,0,0,0-12-12H160a12,12,0,0,0-12,12v20H128a12,12,0,0,1-12-12V88a12,12,0,0,1,12-12h20V96A12,12,0,0,0,160,108ZM60,144a4,4,0,0,1-4,4H24a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H56a4,4,0,0,1,4,4Zm96,16a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4v48a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Zm0-112a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V96a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4Z",
        })
      ),
    ],
  ]),
  o7 = new Map([
    [
      "bold",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,93.65A60.08,60.08,0,0,0,164,36a20,20,0,0,0-20,20V172H128V72a12,12,0,0,0-12-12H20A20,20,0,0,0,0,80V184a36,36,0,0,0,60,26.8A36,36,0,0,0,117.94,196h68.12A36,36,0,0,0,256,184V136A44.08,44.08,0,0,0,224,93.65ZM168,60.22A36.06,36.06,0,0,1,200,96v8a12,12,0,0,0,12,12,20,20,0,0,1,20,20v14.06A36,36,0,0,0,186.06,172H168ZM104,84v70.08a35.92,35.92,0,0,0-44,3.12,35.93,35.93,0,0,0-36-7.14V84ZM36,196a12,12,0,1,1,12-12A12,12,0,0,1,36,196Zm48,0a12,12,0,1,1,12-12A12,12,0,0,1,84,196Zm136,0a12,12,0,1,1,12-12A12,12,0,0,1,220,196Z",
        })
      ),
    ],
    [
      "duotone",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M16,72H120V184H104a24,24,0,0,0-48,0,24,24,0,0,0-48,0V80A8,8,0,0,1,16,72Zm200,32V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z",
          opacity: "0.2",
        }),
        S.createElement("path", {
          d: "M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z",
        })
      ),
    ],
    [
      "fill",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z",
        })
      ),
    ],
    [
      "light",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M222,98.47V96a54.06,54.06,0,0,0-54-54h-8a14,14,0,0,0-14,14V178H126V72a6,6,0,0,0-6-6H16A14,14,0,0,0,2,80V184a30,30,0,0,0,54,18,30,30,0,0,0,53.4-12h85.2a30,30,0,0,0,59.4-6V136A38.07,38.07,0,0,0,222,98.47ZM158,56a2,2,0,0,1,2-2h8a42,42,0,0,1,42,42v8a6,6,0,0,0,6,6,26,26,0,0,1,26,26v24a30,30,0,0,0-47.4,18H158ZM16,78h98V178h-4.6A30,30,0,0,0,56,166a30,30,0,0,0-42-6V80A2,2,0,0,1,16,78ZM32,202a18,18,0,1,1,18-18A18,18,0,0,1,32,202Zm48,0a18,18,0,1,1,18-18A18,18,0,0,1,80,202Zm144,0a18,18,0,1,1,18-18A18,18,0,0,1,224,202Z",
        })
      ),
    ],
    [
      "regular",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M224,96.8V96a56.06,56.06,0,0,0-56-56h-8a16,16,0,0,0-16,16V176H128V72a8,8,0,0,0-8-8H16A16,16,0,0,0,0,80V184a32,32,0,0,0,56,21.13A32,32,0,0,0,111,192h82a32,32,0,0,0,63-8V136A40.07,40.07,0,0,0,224,96.8ZM160,56h8a40,40,0,0,1,40,40v8a8,8,0,0,0,8,8,24,24,0,0,1,24,24v20.31A31.71,31.71,0,0,0,224,152a32.06,32.06,0,0,0-31,24H160ZM112,80v96h-1a32,32,0,0,0-55-13.13,31.9,31.9,0,0,0-40-6.56V80ZM32,200a16,16,0,1,1,16-16A16,16,0,0,1,32,200Zm48,0a16,16,0,1,1,16-16A16,16,0,0,1,80,200Zm144,0a16,16,0,1,1,16-16A16,16,0,0,1,224,200Z",
        })
      ),
    ],
    [
      "thin",
      S.createElement(
        S.Fragment,
        null,
        S.createElement("path", {
          d: "M220,100.22V96a52.06,52.06,0,0,0-52-52h-8a12,12,0,0,0-12,12V180H124V72a4,4,0,0,0-4-4H16A12,12,0,0,0,4,80V184a28,28,0,0,0,52,14.41A28,28,0,0,0,107.71,188h88.58A28,28,0,0,0,252,184V136A36.06,36.06,0,0,0,220,100.22ZM12,80a4,4,0,0,1,4-4H116V180h-8.29A28,28,0,0,0,56,169.59a28,28,0,0,0-44-5.16ZM32,204a20,20,0,1,1,20-20A20,20,0,0,1,32,204Zm48,0a20,20,0,1,1,20-20A20,20,0,0,1,80,204Zm144,0a20,20,0,1,1,20-20A20,20,0,0,1,224,204Zm0-48a28,28,0,0,0-27.71,24H156V56a4,4,0,0,1,4-4h8a44.05,44.05,0,0,1,44,44v8a4,4,0,0,0,4,4,28,28,0,0,1,28,28v28.43A27.9,27.9,0,0,0,224,156Z",
        })
      ),
    ],
  ]),
  i7 = w.createContext({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: !1,
  });
var a7 = Object.defineProperty,
  Ks = Object.getOwnPropertySymbols,
  I8 = Object.prototype.hasOwnProperty,
  D8 = Object.prototype.propertyIsEnumerable,
  ym = (e, t, n) =>
    t in e
      ? a7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  wm = (e, t) => {
    for (var n in t || (t = {})) I8.call(t, n) && ym(e, n, t[n]);
    if (Ks) for (var n of Ks(t)) D8.call(t, n) && ym(e, n, t[n]);
    return e;
  },
  xm = (e, t) => {
    var n = {};
    for (var r in e) I8.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Ks)
      for (var r of Ks(e)) t.indexOf(r) < 0 && D8.call(e, r) && (n[r] = e[r]);
    return n;
  };
const H8 = w.forwardRef((e, t) => {
  const n = e,
    {
      alt: r,
      color: o,
      size: i,
      weight: a,
      mirrored: l,
      children: c,
      weights: u,
    } = n,
    h = xm(n, [
      "alt",
      "color",
      "size",
      "weight",
      "mirrored",
      "children",
      "weights",
    ]),
    f = w.useContext(i7),
    {
      color: g = "currentColor",
      size: C,
      weight: E = "regular",
      mirrored: y = !1,
    } = f,
    M = xm(f, ["color", "size", "weight", "mirrored"]);
  return S.createElement(
    "svg",
    wm(
      wm(
        {
          ref: t,
          xmlns: "http://www.w3.org/2000/svg",
          width: i ?? C,
          height: i ?? C,
          fill: o ?? g,
          viewBox: "0 0 256 256",
          transform: l || y ? "scale(-1, 1)" : void 0,
        },
        M
      ),
      h
    ),
    !!r && S.createElement("title", null, r),
    c,
    u.get(a ?? E)
  );
});
H8.displayName = "IconBase";
const Et = H8;
var l7 = Object.defineProperty,
  s7 = Object.defineProperties,
  c7 = Object.getOwnPropertyDescriptors,
  Sm = Object.getOwnPropertySymbols,
  u7 = Object.prototype.hasOwnProperty,
  d7 = Object.prototype.propertyIsEnumerable,
  Em = (e, t, n) =>
    t in e
      ? l7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  f7 = (e, t) => {
    for (var n in t || (t = {})) u7.call(t, n) && Em(e, n, t[n]);
    if (Sm) for (var n of Sm(t)) d7.call(t, n) && Em(e, n, t[n]);
    return e;
  },
  p7 = (e, t) => s7(e, c7(t));
const _8 = w.forwardRef((e, t) =>
  S.createElement(Et, p7(f7({ ref: t }, e), { weights: TS }))
);
_8.displayName = "AirplaneTakeoff";
var h7 = Object.defineProperty,
  m7 = Object.defineProperties,
  g7 = Object.getOwnPropertyDescriptors,
  bm = Object.getOwnPropertySymbols,
  v7 = Object.prototype.hasOwnProperty,
  y7 = Object.prototype.propertyIsEnumerable,
  Cm = (e, t, n) =>
    t in e
      ? h7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  w7 = (e, t) => {
    for (var n in t || (t = {})) v7.call(t, n) && Cm(e, n, t[n]);
    if (bm) for (var n of bm(t)) y7.call(t, n) && Cm(e, n, t[n]);
    return e;
  },
  x7 = (e, t) => m7(e, g7(t));
const qs = w.forwardRef((e, t) =>
  S.createElement(Et, x7(w7({ ref: t }, e), { weights: IS }))
);
qs.displayName = "Boat";
var S7 = Object.defineProperty,
  E7 = Object.defineProperties,
  b7 = Object.getOwnPropertyDescriptors,
  jm = Object.getOwnPropertySymbols,
  C7 = Object.prototype.hasOwnProperty,
  j7 = Object.prototype.propertyIsEnumerable,
  Am = (e, t, n) =>
    t in e
      ? S7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  A7 = (e, t) => {
    for (var n in t || (t = {})) C7.call(t, n) && Am(e, n, t[n]);
    if (jm) for (var n of jm(t)) j7.call(t, n) && Am(e, n, t[n]);
    return e;
  },
  M7 = (e, t) => E7(e, b7(t));
const bf = w.forwardRef((e, t) =>
  S.createElement(Et, M7(A7({ ref: t }, e), { weights: DS }))
);
bf.displayName = "Broadcast";
var k7 = Object.defineProperty,
  L7 = Object.defineProperties,
  N7 = Object.getOwnPropertyDescriptors,
  Mm = Object.getOwnPropertySymbols,
  P7 = Object.prototype.hasOwnProperty,
  O7 = Object.prototype.propertyIsEnumerable,
  km = (e, t, n) =>
    t in e
      ? k7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  R7 = (e, t) => {
    for (var n in t || (t = {})) P7.call(t, n) && km(e, n, t[n]);
    if (Mm) for (var n of Mm(t)) O7.call(t, n) && km(e, n, t[n]);
    return e;
  },
  T7 = (e, t) => L7(e, N7(t));
const V8 = w.forwardRef((e, t) =>
  S.createElement(Et, T7(R7({ ref: t }, e), { weights: HS }))
);
V8.displayName = "Car";
var I7 = Object.defineProperty,
  D7 = Object.defineProperties,
  H7 = Object.getOwnPropertyDescriptors,
  Lm = Object.getOwnPropertySymbols,
  _7 = Object.prototype.hasOwnProperty,
  V7 = Object.prototype.propertyIsEnumerable,
  Nm = (e, t, n) =>
    t in e
      ? I7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  z7 = (e, t) => {
    for (var n in t || (t = {})) _7.call(t, n) && Nm(e, n, t[n]);
    if (Lm) for (var n of Lm(t)) V7.call(t, n) && Nm(e, n, t[n]);
    return e;
  },
  Z7 = (e, t) => D7(e, H7(t));
const z8 = w.forwardRef((e, t) =>
  S.createElement(Et, Z7(z7({ ref: t }, e), { weights: _S }))
);
z8.displayName = "Clock";
var $7 = Object.defineProperty,
  U7 = Object.defineProperties,
  B7 = Object.getOwnPropertyDescriptors,
  Pm = Object.getOwnPropertySymbols,
  F7 = Object.prototype.hasOwnProperty,
  W7 = Object.prototype.propertyIsEnumerable,
  Om = (e, t, n) =>
    t in e
      ? $7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  G7 = (e, t) => {
    for (var n in t || (t = {})) F7.call(t, n) && Om(e, n, t[n]);
    if (Pm) for (var n of Pm(t)) W7.call(t, n) && Om(e, n, t[n]);
    return e;
  },
  Y7 = (e, t) => U7(e, B7(t));
const Z8 = w.forwardRef((e, t) =>
  S.createElement(Et, Y7(G7({ ref: t }, e), { weights: VS }))
);
Z8.displayName = "DeviceTablet";
var K7 = Object.defineProperty,
  q7 = Object.defineProperties,
  X7 = Object.getOwnPropertyDescriptors,
  Rm = Object.getOwnPropertySymbols,
  Q7 = Object.prototype.hasOwnProperty,
  J7 = Object.prototype.propertyIsEnumerable,
  Tm = (e, t, n) =>
    t in e
      ? K7(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  e9 = (e, t) => {
    for (var n in t || (t = {})) Q7.call(t, n) && Tm(e, n, t[n]);
    if (Rm) for (var n of Rm(t)) J7.call(t, n) && Tm(e, n, t[n]);
    return e;
  },
  t9 = (e, t) => q7(e, X7(t));
const $8 = w.forwardRef((e, t) =>
  S.createElement(Et, t9(e9({ ref: t }, e), { weights: zS }))
);
$8.displayName = "Envelope";
var n9 = Object.defineProperty,
  r9 = Object.defineProperties,
  o9 = Object.getOwnPropertyDescriptors,
  Im = Object.getOwnPropertySymbols,
  i9 = Object.prototype.hasOwnProperty,
  a9 = Object.prototype.propertyIsEnumerable,
  Dm = (e, t, n) =>
    t in e
      ? n9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  l9 = (e, t) => {
    for (var n in t || (t = {})) i9.call(t, n) && Dm(e, n, t[n]);
    if (Im) for (var n of Im(t)) a9.call(t, n) && Dm(e, n, t[n]);
    return e;
  },
  s9 = (e, t) => r9(e, o9(t));
const U8 = w.forwardRef((e, t) =>
  S.createElement(Et, s9(l9({ ref: t }, e), { weights: ZS }))
);
U8.displayName = "Export";
var c9 = Object.defineProperty,
  u9 = Object.defineProperties,
  d9 = Object.getOwnPropertyDescriptors,
  Hm = Object.getOwnPropertySymbols,
  f9 = Object.prototype.hasOwnProperty,
  p9 = Object.prototype.propertyIsEnumerable,
  _m = (e, t, n) =>
    t in e
      ? c9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  h9 = (e, t) => {
    for (var n in t || (t = {})) f9.call(t, n) && _m(e, n, t[n]);
    if (Hm) for (var n of Hm(t)) p9.call(t, n) && _m(e, n, t[n]);
    return e;
  },
  m9 = (e, t) => u9(e, d9(t));
const B8 = w.forwardRef((e, t) =>
  S.createElement(Et, m9(h9({ ref: t }, e), { weights: $S }))
);
B8.displayName = "House";
var g9 = Object.defineProperty,
  v9 = Object.defineProperties,
  y9 = Object.getOwnPropertyDescriptors,
  Vm = Object.getOwnPropertySymbols,
  w9 = Object.prototype.hasOwnProperty,
  x9 = Object.prototype.propertyIsEnumerable,
  zm = (e, t, n) =>
    t in e
      ? g9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  S9 = (e, t) => {
    for (var n in t || (t = {})) w9.call(t, n) && zm(e, n, t[n]);
    if (Vm) for (var n of Vm(t)) x9.call(t, n) && zm(e, n, t[n]);
    return e;
  },
  E9 = (e, t) => v9(e, y9(t));
const F8 = w.forwardRef((e, t) =>
  S.createElement(Et, E9(S9({ ref: t }, e), { weights: US }))
);
F8.displayName = "MapPinLine";
var b9 = Object.defineProperty,
  C9 = Object.defineProperties,
  j9 = Object.getOwnPropertyDescriptors,
  Zm = Object.getOwnPropertySymbols,
  A9 = Object.prototype.hasOwnProperty,
  M9 = Object.prototype.propertyIsEnumerable,
  $m = (e, t, n) =>
    t in e
      ? b9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  k9 = (e, t) => {
    for (var n in t || (t = {})) A9.call(t, n) && $m(e, n, t[n]);
    if (Zm) for (var n of Zm(t)) M9.call(t, n) && $m(e, n, t[n]);
    return e;
  },
  L9 = (e, t) => C9(e, j9(t));
const W8 = w.forwardRef((e, t) =>
  S.createElement(Et, L9(k9({ ref: t }, e), { weights: BS }))
);
W8.displayName = "Package";
var N9 = Object.defineProperty,
  P9 = Object.defineProperties,
  O9 = Object.getOwnPropertyDescriptors,
  Um = Object.getOwnPropertySymbols,
  R9 = Object.prototype.hasOwnProperty,
  T9 = Object.prototype.propertyIsEnumerable,
  Bm = (e, t, n) =>
    t in e
      ? N9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  I9 = (e, t) => {
    for (var n in t || (t = {})) R9.call(t, n) && Bm(e, n, t[n]);
    if (Um) for (var n of Um(t)) T9.call(t, n) && Bm(e, n, t[n]);
    return e;
  },
  D9 = (e, t) => P9(e, O9(t));
const G8 = w.forwardRef((e, t) =>
  S.createElement(Et, D9(I9({ ref: t }, e), { weights: FS }))
);
G8.displayName = "Pen";
var H9 = Object.defineProperty,
  _9 = Object.defineProperties,
  V9 = Object.getOwnPropertyDescriptors,
  Fm = Object.getOwnPropertySymbols,
  z9 = Object.prototype.hasOwnProperty,
  Z9 = Object.prototype.propertyIsEnumerable,
  Wm = (e, t, n) =>
    t in e
      ? H9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  $9 = (e, t) => {
    for (var n in t || (t = {})) z9.call(t, n) && Wm(e, n, t[n]);
    if (Fm) for (var n of Fm(t)) Z9.call(t, n) && Wm(e, n, t[n]);
    return e;
  },
  U9 = (e, t) => _9(e, V9(t));
const Y8 = w.forwardRef((e, t) =>
  S.createElement(Et, U9($9({ ref: t }, e), { weights: WS }))
);
Y8.displayName = "Pencil";
var B9 = Object.defineProperty,
  F9 = Object.defineProperties,
  W9 = Object.getOwnPropertyDescriptors,
  Gm = Object.getOwnPropertySymbols,
  G9 = Object.prototype.hasOwnProperty,
  Y9 = Object.prototype.propertyIsEnumerable,
  Ym = (e, t, n) =>
    t in e
      ? B9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  K9 = (e, t) => {
    for (var n in t || (t = {})) G9.call(t, n) && Ym(e, n, t[n]);
    if (Gm) for (var n of Gm(t)) Y9.call(t, n) && Ym(e, n, t[n]);
    return e;
  },
  q9 = (e, t) => F9(e, W9(t));
const K8 = w.forwardRef((e, t) =>
  S.createElement(Et, q9(K9({ ref: t }, e), { weights: GS }))
);
K8.displayName = "Phone";
var X9 = Object.defineProperty,
  Q9 = Object.defineProperties,
  J9 = Object.getOwnPropertyDescriptors,
  Km = Object.getOwnPropertySymbols,
  eE = Object.prototype.hasOwnProperty,
  tE = Object.prototype.propertyIsEnumerable,
  qm = (e, t, n) =>
    t in e
      ? X9(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  nE = (e, t) => {
    for (var n in t || (t = {})) eE.call(t, n) && qm(e, n, t[n]);
    if (Km) for (var n of Km(t)) tE.call(t, n) && qm(e, n, t[n]);
    return e;
  },
  rE = (e, t) => Q9(e, J9(t));
const q8 = w.forwardRef((e, t) =>
  S.createElement(Et, rE(nE({ ref: t }, e), { weights: n7 }))
);
q8.displayName = "PlusCircle";
var oE = Object.defineProperty,
  iE = Object.defineProperties,
  aE = Object.getOwnPropertyDescriptors,
  Xm = Object.getOwnPropertySymbols,
  lE = Object.prototype.hasOwnProperty,
  sE = Object.prototype.propertyIsEnumerable,
  Qm = (e, t, n) =>
    t in e
      ? oE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  cE = (e, t) => {
    for (var n in t || (t = {})) lE.call(t, n) && Qm(e, n, t[n]);
    if (Xm) for (var n of Xm(t)) sE.call(t, n) && Qm(e, n, t[n]);
    return e;
  },
  uE = (e, t) => iE(e, aE(t));
const X8 = w.forwardRef((e, t) =>
  S.createElement(Et, uE(cE({ ref: t }, e), { weights: r7 }))
);
X8.displayName = "TreeStructure";
var dE = Object.defineProperty,
  fE = Object.defineProperties,
  pE = Object.getOwnPropertyDescriptors,
  Jm = Object.getOwnPropertySymbols,
  hE = Object.prototype.hasOwnProperty,
  mE = Object.prototype.propertyIsEnumerable,
  e2 = (e, t, n) =>
    t in e
      ? dE(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  gE = (e, t) => {
    for (var n in t || (t = {})) hE.call(t, n) && e2(e, n, t[n]);
    if (Jm) for (var n of Jm(t)) mE.call(t, n) && e2(e, n, t[n]);
    return e;
  },
  vE = (e, t) => fE(e, pE(t));
const va = w.forwardRef((e, t) =>
  S.createElement(Et, vE(gE({ ref: t }, e), { weights: o7 }))
);
va.displayName = "TruckTrailer";
const yE = () => {
    const [e, t] = w.useState(""),
      n = [
        {
          icon: p.jsx(X8, {
            className: " rotate-90",
            size: 42,
            color: "#0058ff",
          }),
          heading: "Connect with Us",
          desc: "We build partnerships with personalized logistics and expert guidance.",
        },
        {
          icon: p.jsx(bf, { size: 42, color: "#0058ff" }),
          heading: "Your Logistics Junction",
          desc: "We integrate warehousing, transportation, and air logistics to streamline your supply chain.",
        },
        {
          icon: p.jsx(bf, { size: 42, color: "#0058ff" }),
          heading: "Delivering Excellence",
          desc: "We ensure timely, reliable deliveries with precision and care.",
        },
      ],
      r = new Tn();
    r.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const o = new tr(r),
      i = async () => {
        try {
          const a = await o.listDocuments(
            "6680506f003dd11a430b",
            "668e86e7000a684c3450",
            []
          );
          t(a.documents);
        } catch (a) {
          console.error("Error fetching data:", a), setLoading(!1);
        }
      };
    return (
      w.useEffect(() => {
        i();
      }, []),
      p.jsx("div", {
        className:
          " lg:pt-0 lg:justify-center min-h-screen bg-primary-foreground flex flex-col items-center ",
        children: p.jsx(_r, {
          children: p.jsxs("div", {
            className: " grid grid-cols-12 items-center gap-5",
            children: [
              p.jsx("div", {
                className: " col-span-full lg:col-span-6",
                children: p.jsxs("div", {
                  className: " w-[90%] space-y-6",
                  children: [
                    p.jsx(wi, {
                      section: "About Us",
                      heading: "Global logistics with efficiency",
                      desc: "We ensure seamless logistics for your business, handling both shipping and air logistics with efficiency and reliability. ",
                    }),
                    n.map((a, l) => w.createElement(LS, { ...a, key: l })),
                  ],
                }),
              }),
              p.jsx("div", {
                className: " col-span-full lg:col-span-6",
                children:
                  e &&
                  e.map(({ url: a, type: l }, c) =>
                    p.jsx(
                      "div",
                      {
                        children:
                          l === "image"
                            ? p.jsx("img", {
                                className: "h-[400px] object-cover ",
                                src: a,
                                alt: "About Us Media",
                              })
                            : p.jsxs("video", {
                                className: "h-[400px] object-cover",
                                controls: !0,
                                children: [
                                  p.jsx("source", {
                                    src: a,
                                    type: "video/mp4",
                                  }),
                                  "Your browser does not support the video tag.",
                                ],
                              }),
                      },
                      c
                    )
                  ),
              }),
            ],
          }),
        }),
      })
    );
  },
  wE = ({ icon: e, heading: t, desc: n }) =>
    p.jsxs("div", {
      className: "select-none space-y-2 text-start p-5",
      children: [
        p.jsx("button", {
          className: "cursor-default rounded-full  bg-primary p-4",
          children: e,
        }),
        p.jsx("p", {
          className: " font-medium text-sm lg:text-xl text-black ",
          children: t,
        }),
        p.jsx("p", {
          className: "text-xs lg:text-sm font-light text-black/60",
          children: n,
        }),
      ],
    }),
  xE = () => {
    const e = [
      {
        icon: p.jsx(qs, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Sea Freight",
        desc: "Manage sea freight logistics for both inbound and outbound shipments to and from Myanmar.",
      },
      {
        icon: p.jsx(_8, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Air Freight",
        desc: "Handle inbound and outbound cargo for Myanmar with speed and reliability.",
      },
      {
        icon: p.jsx(va, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "white",
          weight: "thin",
        }),
        heading: "Vehicle Imports",
        desc: "Importing vehicles from Europe, US, and China via sea freight.",
      },
      {
        icon: p.jsx(qs, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Cross Border Sales",
        desc: "Offer cross-border trucking and customs clearance services through China and Thailand.",
      },
      {
        icon: p.jsx(V8, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Cargo Insurance",
        desc: "Handle inbound and outbound cargo for Myanmar with speed and reliability.",
      },
      {
        icon: p.jsx(U8, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Import/Export Customs",
        desc: "Provide efficient customs clearance services for both import and export activities.",
      },
      {
        icon: p.jsx(Z8, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "License Application",
        desc: "Assist with the application process for import and export licenses.",
      },
      {
        icon: p.jsx(B8, {
          className: "lg:h-[30px] lg:w-[30px]",
          color: "#ffffff",
        }),
        heading: "Warehousing",
        desc: "Solutions offer secure storage for your goods.",
      },
    ];
    return p.jsx("div", {
      className:
        "lg:pt-0 pb-12 lg:justify-center min-h-screen bg-primary-foreground flex flex-col items-center ",
      children: p.jsx(_r, {
        children: p.jsx("div", {
          className: "flex items-center flex-col",
          children: p.jsxs("div", {
            className: "space-y-3 text-center",
            children: [
              p.jsx(wi, {
                section: "Our Services",
                heading: "Distribution to Forwarding",
                desc: "Delivering world class solutions to customers & stakeholders on broad range of industry sectors.",
              }),
              p.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center",
                children: e.map((t, n) =>
                  w.createElement(wE, { ...t, key: n })
                ),
              }),
            ],
          }),
        }),
      }),
    });
  },
  SE = ({ icon: e, heading: t, desc: n }) =>
    p.jsx("div", {
      className: " flex items-center justify-center",
      children: p.jsxs("div", {
        className:
          "select-none space-y-0.5 lg:space-y-2 flex flex-col items-center justify-center",
        children: [
          p.jsx("button", {
            className: "cursor-default rounded-full bg-primary p-3 lg:p-4",
            children: e,
          }),
          p.jsx("p", {
            className:
              " font-medium lg:text-xl text-center text-sm text-black ",
            children: t,
          }),
          p.jsx("p", {
            className: "text-xs text-center lg:w-42 font-light text-black/60",
            children: n,
          }),
        ],
      }),
    }),
  EE = () => {
    const e = [
      {
        icon: p.jsx(W8, {
          className: " lg:h-[30px] lg:w-[30px]",
          color: "white",
          weight: "duotone",
        }),
        heading: "Booking",
        desc: "Verify cargo readiness and book the vessel.",
      },
      {
        icon: p.jsx(va, {
          className: " lg:h-[30px] lg:w-[30px]",
          color: "white",
          weight: "thin",
        }),
        heading: "Picking up",
        desc: "Collect cargo from the shipper's factory.",
      },
      {
        icon: p.jsx(va, {
          className: " lg:h-[30px] lg:w-[30px]",
          color: "white",
          weight: "thin",
        }),
        heading: "Loading",
        desc: "Load cargo into the container and transport it to the port.",
      },
      {
        icon: p.jsx(qs, {
          className: " lg:h-[30px] lg:w-[30px]",
          color: "white",
        }),
        heading: "Shipping",
        desc: "Ship the container and handle customs clearance.",
      },
      {
        icon: p.jsx(va, {
          className: " lg:h-[30px] lg:w-[30px]",
          color: "white",
        }),
        heading: "Delivering",
        desc: "Deliver cargo to the consignee's warehouse.",
      },
    ];
    return p.jsx(_r, {
      children: p.jsxs("div", {
        className:
          " pb-12 text-center min-h-screen lg:gap-12 gap-8 h-full lg:pt-0 lg:justify-center flex flex-col items-center",
        children: [
          p.jsx(wi, {
            section: "Working Process",
            heading: "The Heart of Our Caring",
            desc: "Streamlined steps to ensure efficient logistics and delivery.",
          }),
          p.jsx("div", {
            className: "grid lg:grid-cols-5 grid-cols-1 gap-3 items-center",
            children: e.map((t, n) => w.createElement(SE, { ...t, key: n })),
          }),
        ],
      }),
    });
  },
  bE = "/assets/image2-CJmTdXjU.png",
  CE = "/assets/image1-Nrn4ZpqS.png",
  jE = "/assets/image3-DRtcz5dE.png",
  AE = "/assets/image4-COp9NPhd.png",
  ME = "/assets/image5-B6SenF9G.png",
  kE = "/assets/image6-D4KXCu3O.png",
  LE = () => {
    const e = [CE, bE, jE, AE, ME, kE];
    return p.jsx("div", {
      className:
        "py-12 lg:pt-0 lg:justify-center min-h-screen bg-primary-foreground ",
      children: p.jsxs("div", {
        className: " relative h-screen",
        children: [
          p.jsx("div", {
            className: "",
            children: p.jsx("div", {
              className: "gallery",
              children: e.map((t, n) =>
                p.jsx(
                  "figure",
                  {
                    className: `gallery__item gallery__item--${n + 1}`,
                    children: p.jsx("img", {
                      src: t,
                      className: "gallery__img  grayscale",
                    }),
                  },
                  n
                )
              ),
            }),
          }),
          p.jsx("div", {
            className: " absolute top-0 h-full w-full ",
            children: p.jsx("div", {
              className:
                " flex lg:mt-24 justify-center lg:w-[80%] mx-auto items-center bg-black/70",
              children: p.jsxs("div", {
                className:
                  " grid grid-cols-12 gap-3 lg:px-10 lg:p-24 p-5 items-center",
                children: [
                  p.jsxs("div", {
                    className: " lg:col-span-6 space-y-1.5 col-span-full",
                    children: [
                      p.jsx("p", {
                        className: " text-base lg:text-4xl  font-semibold",
                        children: "Specialization",
                      }),
                      p.jsx("p", {
                        className:
                          " text-xs lg:text-sm font-light lg:pt-2 text-white",
                        children:
                          "NSD is one of the leading freight forwarders in Myanmar, known for its superior performance of handling OOG (out of gauge) shipments and pharmaceutical shipments.",
                      }),
                    ],
                  }),
                  p.jsx("div", {
                    className: " lg:col-span-6 col-span-full",
                    children: p.jsx(Cc, {
                      plugins: [Xa({ delay: 3e3 })],
                      className: "w-full",
                      children: p.jsx(jc, {
                        children:
                          e.length > 0 &&
                          (e == null
                            ? void 0
                            : e.map((t, n) =>
                                p.jsx(
                                  Ac,
                                  {
                                    className: "",
                                    children: p.jsx("img", {
                                      src: t,
                                      className: " h-[400px] mx-auto",
                                    }),
                                  },
                                  n
                                )
                              )),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  NE = "/assets/vision-Bsei8MZn.png",
  PE = "/assets/mission-OaUyl_gw.png",
  OE = () =>
    p.jsx("div", {
      className:
        " flex lg:pt-0 justify-center items-center min-h-screen flex-col",
      children: p.jsx(_r, {
        children: p.jsxs("div", {
          className: " text-center space-y-5",
          children: [
            p.jsx(wi, {
              section: "Our Core",
              heading: "Commitment is always Key",
              desc: "The foundation of our commitment to excellence..",
            }),
            p.jsxs("div", {
              className:
                " grid grid-cols-1 lg:grid-cols-2 items-center gap-2 lg:gap-8",
              children: [
                p.jsx("img", {
                  src: PE,
                  className: " lg:h-[300px] h-[100px] col-span-1 ",
                  alt: "",
                }),
                p.jsx("p", {
                  className:
                    " text-xs lg:text-sm text-black/70 col-span-1 text-start ",
                  children:
                    "To be your reliable forwarding partner by leveraging our extensive experience in Myanmar’s logistics industry.",
                }),
              ],
            }),
            p.jsxs("div", {
              className:
                " grid grid-cols-1 lg:grid-cols-2 items-center gap-2  lg:gap-8",
              children: [
                p.jsx("img", {
                  src: NE,
                  className:
                    " lg:h-[300px] h-[100px] lg:w-full col-span-1  order-1 lg:order-2",
                  alt: "",
                }),
                p.jsx("p", {
                  className:
                    " text-xs lg:text-sm text-black/70 col-span-1 order-2 lg:order-1 text-start text-blacks",
                  children:
                    "To provide cost-effective, efficient logistics solutions, planning and managing your shipments with exceptional service.",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  RE = () => {
    const [e, t] = w.useState([]),
      n = new Tn();
    n.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const r = new tr(n),
      o = async () => {
        try {
          const i = await r.listDocuments(
            "6680506f003dd11a430b",
            "668057a7002f221d1adc",
            []
          );
          t(i.documents);
        } catch (i) {
          console.error("Error fetching data:", i);
        }
      };
    return (
      w.useEffect(() => {
        o();
      }, []),
      p.jsx("div", {
        className:
          " lg:pt-0 justify-center min-h-screen bg-primary-foreground flex flex-col items-center ",
        children: p.jsx(_r, {
          children: p.jsxs("div", {
            className: "lg:space-y-12 space-y-5 w-full text-center",
            children: [
              p.jsx(wi, {
                section: "Review",
                heading: "Hear What Our Clients Say",
                desc: "Sometimes we need to listen what others words about some proves.",
              }),
              p.jsx("div", {
                className: "",
                children: p.jsx(Cc, {
                  plugins: [Xa({ delay: 3e3 })],
                  className: "w-full",
                  children: p.jsx(jc, {
                    children:
                      e.length > 0 &&
                      (e == null
                        ? void 0
                        : e.map(
                            (
                              {
                                photo: i,
                                name: a,
                                message: l,
                                organization: c,
                                position: u,
                              },
                              h
                            ) =>
                              p.jsx(
                                Ac,
                                {
                                  className: "lg:basis-1/3",
                                  children: p.jsxs("div", {
                                    className: "mx-auto basis-1/2",
                                    children: [
                                      p.jsxs("div", {
                                        className:
                                          " bg-blue-500 rounded-lg p-4",
                                        children: [
                                          p.jsx("div", {
                                            className: "flex justify-center",
                                            children: p.jsx("svg", {
                                              width: "44",
                                              height: "44",
                                              viewBox: "0 0 86 86",
                                              fill: "none",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              children: p.jsx("path", {
                                                d: "M64.5 64.5C65.9255 64.5 67.2927 63.9337 68.3007 62.9257C69.3087 61.9177 69.875 60.5505 69.875 59.125V45.9992C69.875 44.5737 69.3087 43.2066 68.3007 42.1985C67.2927 41.1905 65.9255 40.6243 64.5 40.6243H57.0395C57.0395 38.7358 57.1506 36.8474 57.3727 34.959C57.706 32.9595 58.2614 31.1822 59.039 29.627C59.8166 28.0718 60.8181 26.8481 62.0436 25.9559C63.262 24.9561 64.8171 24.4563 66.7091 24.4563V16.125C63.5988 16.125 60.8755 16.7915 58.5391 18.1245C56.219 19.4407 54.2255 21.2633 52.7072 23.4565C51.1787 25.8707 50.0531 28.5175 49.3747 31.2933C48.6888 34.3556 48.3534 37.4861 48.375 40.6243V59.125C48.375 60.5505 48.9413 61.9177 49.9493 62.9257C50.9573 63.9337 52.3245 64.5 53.75 64.5H64.5ZM32.25 64.5C33.6755 64.5 35.0427 63.9337 36.0507 62.9257C37.0587 61.9177 37.625 60.5505 37.625 59.125V45.9992C37.625 44.5737 37.0587 43.2066 36.0507 42.1985C35.0427 41.1905 33.6755 40.6243 32.25 40.6243H24.7895C24.7895 38.7358 24.9006 36.8474 25.1228 34.959C25.4596 32.9595 26.015 31.1822 26.789 29.627C27.5666 28.0718 28.5681 26.8481 29.7936 25.9559C31.012 24.9561 32.5671 24.4563 34.4591 24.4563V16.125C31.3488 16.125 28.6255 16.7915 26.2891 18.1245C23.969 19.4407 21.9755 21.2633 20.4573 23.4565C18.9287 25.8707 17.8031 28.5175 17.1248 31.2933C16.4388 34.3556 16.1034 37.4861 16.125 40.6243V59.125C16.125 60.5505 16.6913 61.9177 17.6993 62.9257C18.7073 63.9337 20.0745 64.5 21.5 64.5H32.25Z",
                                                fill: "#F2F2F2",
                                              }),
                                            }),
                                          }),
                                          p.jsx("p", {
                                            className:
                                              " mb-16 text-xs lg:text-base font-medium text-white",
                                            children: l,
                                          }),
                                        ],
                                      }),
                                      p.jsxs("div", {
                                        className:
                                          " gap-3 flex -mt-14 justify-center flex-col items-center rounded-full",
                                        children: [
                                          p.jsx("img", {
                                            src: i,
                                            className:
                                              " w-[100px] lg:w-[100px] rounded-full object-cover h-[100px] lg:h-[100px]",
                                          }),
                                          p.jsxs("div", {
                                            className:
                                              " lg:space-y-0.5 space-y-1.5",
                                            children: [
                                              p.jsx("p", {
                                                className:
                                                  " font-medium text-sm lg:text-base text-black",
                                                children: a,
                                              }),
                                              p.jsxs("p", {
                                                className:
                                                  "text-xs lg:text-xs text-black/70",
                                                children: [
                                                  u,
                                                  " of",
                                                  " ",
                                                  p.jsx("i", {
                                                    className: " text-black",
                                                    children: c,
                                                  }),
                                                  " ",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                h
                              )
                          )),
                  }),
                }),
              }),
            ],
          }),
        }),
      })
    );
  },
  TE = () => {
    const [e, t] = w.useState([]),
      n = new Tn();
    n.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const r = new tr(n),
      o = async () => {
        try {
          const a = await r.listDocuments(
            "6680506f003dd11a430b",
            "6687f441001d1490e932",
            []
          );
          t(a.documents);
        } catch (a) {
          console.error("Error fetching data:", a);
        }
      };
    w.useEffect(() => {
      o();
    }, []);
    const i = [
      {
        icon: p.jsx(F8, { size: 42, color: "#0058ff", weight: "light" }),
        heading: "Address",
        info1: "No. 87, Yarza Thingyan St.",
        info2: "Dawpon Tsp, Yangon, Myanmar.",
      },
      {
        icon: p.jsx(K8, { size: 42, color: "#0058ff", weight: "light" }),
        heading: "Call Us",
        phone: !0,
      },
      {
        icon: p.jsx($8, { size: 42, color: "#0058ff", weight: "light" }),
        heading: "Email Us",
        mail: !0,
      },
      {
        icon: p.jsx(z8, { size: 42, color: "#0058ff", weight: "light" }),
        heading: "Open Hour",
        info1: "Monday - Saturday",
        info2: "9 : 00 AM - 5 : 00 PM",
      },
    ];
    return p.jsx("div", {
      className:
        "flex justify-center items-center min-h-screen py-12 flex-col bg-primary-foreground",
      children: p.jsx(_r, {
        children: p.jsxs("div", {
          className: "text-center space-y-8 lg:space-y-12",
          children: [
            p.jsx(wi, {
              section: "Contact Us",
              heading: "Reach Out to Us",
              desc: "Contact with us for expert support & Solutions.",
            }),
            p.jsxs("div", {
              className: "grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-8",
              children: [
                p.jsx("div", {
                  className: "grid lg:grid-cols-2 grid-cols-1 gap-4",
                  children: i.map(
                    (
                      {
                        icon: a,
                        heading: l,
                        info1: c,
                        info2: u,
                        phone: h,
                        mail: f,
                      },
                      g
                    ) =>
                      p.jsxs(
                        "div",
                        {
                          className:
                            "bg-white text-start text-black lg:p-6 p-3 space-y-3",
                          children: [
                            a,
                            p.jsx("p", {
                              className:
                                "font-medium text-base lg:text-lg text-black",
                              children: l,
                            }),
                            h &&
                              p.jsx(p.Fragment, {
                                children: e
                                  .filter(
                                    ({ type: C }) => C.toLowerCase() === "phone"
                                  )
                                  .map(({ data: C }, E) =>
                                    p.jsx(
                                      "a",
                                      {
                                        href: `tel:${C}`,
                                        className:
                                          "text-xs mb-3 lg:text-sm font-light text-black/60",
                                        children: p.jsx("p", { children: C }),
                                      },
                                      E
                                    )
                                  ),
                              }),
                            f &&
                              p.jsx(p.Fragment, {
                                children: e
                                  .filter(
                                    ({ type: C }) => C.toLowerCase() === "email"
                                  )
                                  .map(({ data: C }, E) =>
                                    p.jsx(
                                      "a",
                                      {
                                        href: `mailto:${C}`,
                                        className:
                                          "text-xs mb-3 lg:text-sm font-light text-black/60",
                                        children: p.jsx("p", { children: C }),
                                      },
                                      E
                                    )
                                  ),
                              }),
                            !h &&
                              !f &&
                              p.jsxs(p.Fragment, {
                                children: [
                                  p.jsx("p", {
                                    className:
                                      "text-xs lg:text-sm font-light text-black/60",
                                    children: c,
                                  }),
                                  p.jsx("p", {
                                    className:
                                      "text-xs lg:text-sm font-light text-black/60",
                                    children: u,
                                  }),
                                ],
                              }),
                          ],
                        },
                        g
                      )
                  ),
                }),
                p.jsx("div", {
                  className: "mb-3",
                  children: p.jsx("iframe", {
                    className: "w-full h-full",
                    src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4953.583417847888!2d96.18264731757506!3d16.779111495949195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ2JzQ1LjgiTiA5NsKwMTAnNTYuOSJF!5e0!3m2!1sen!2smm!4v1720610595635!5m2!1sen!2smm",
                    allowFullScreen: "",
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  };
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function _a() {
  return (
    (_a = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _a.apply(this, arguments)
  );
}
var wr;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(wr || (wr = {}));
const t2 = "popstate";
function IE(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: a, hash: l } = r.location;
    return Cf(
      "",
      { pathname: i, search: a, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Xs(o);
  }
  return HE(t, n, null, e);
}
function Qe(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Q8(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function DE() {
  return Math.random().toString(36).substr(2, 8);
}
function n2(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Cf(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    _a(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? xi(t) : t,
      { state: n, key: (t && t.key) || r || DE() }
    )
  );
}
function Xs(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function xi(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function HE(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    a = o.history,
    l = wr.Pop,
    c = null,
    u = h();
  u == null && ((u = 0), a.replaceState(_a({}, a.state, { idx: u }), ""));
  function h() {
    return (a.state || { idx: null }).idx;
  }
  function f() {
    l = wr.Pop;
    let M = h(),
      m = M == null ? null : M - u;
    (u = M), c && c({ action: l, location: y.location, delta: m });
  }
  function g(M, m) {
    l = wr.Push;
    let v = Cf(y.location, M, m);
    u = h() + 1;
    let b = n2(v, u),
      j = y.createHref(v);
    try {
      a.pushState(b, "", j);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      o.location.assign(j);
    }
    i && c && c({ action: l, location: y.location, delta: 1 });
  }
  function C(M, m) {
    l = wr.Replace;
    let v = Cf(y.location, M, m);
    u = h();
    let b = n2(v, u),
      j = y.createHref(v);
    a.replaceState(b, "", j),
      i && c && c({ action: l, location: y.location, delta: 0 });
  }
  function E(M) {
    let m = o.location.origin !== "null" ? o.location.origin : o.location.href,
      v = typeof M == "string" ? M : Xs(M);
    return (
      (v = v.replace(/ $/, "%20")),
      Qe(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          v
      ),
      new URL(v, m)
    );
  }
  let y = {
    get action() {
      return l;
    },
    get location() {
      return e(o, a);
    },
    listen(M) {
      if (c) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(t2, f),
        (c = M),
        () => {
          o.removeEventListener(t2, f), (c = null);
        }
      );
    },
    createHref(M) {
      return t(o, M);
    },
    createURL: E,
    encodeLocation(M) {
      let m = E(M);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: g,
    replace: C,
    go(M) {
      return a.go(M);
    },
  };
  return y;
}
var r2;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(r2 || (r2 = {}));
function _E(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? xi(t) : t,
    o = di(r.pathname || "/", n);
  if (o == null) return null;
  let i = J8(e);
  VE(i);
  let a = null;
  for (let l = 0; a == null && l < i.length; ++l) {
    let c = qE(o);
    a = YE(i[l], c);
  }
  return a;
}
function J8(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, a, l) => {
    let c = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: a,
      route: i,
    };
    c.relativePath.startsWith("/") &&
      (Qe(
        c.relativePath.startsWith(r),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (c.relativePath = c.relativePath.slice(r.length)));
    let u = kr([r, c.relativePath]),
      h = n.concat(c);
    i.children &&
      i.children.length > 0 &&
      (Qe(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      J8(i.children, t, h, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: WE(u, i.index), routesMeta: h });
  };
  return (
    e.forEach((i, a) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, a);
      else for (let c of e6(i.path)) o(i, a, c);
    }),
    t
  );
}
function e6(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let a = e6(r.join("/")),
    l = [];
  return (
    l.push(...a.map((c) => (c === "" ? i : [i, c].join("/")))),
    o && l.push(...a),
    l.map((c) => (e.startsWith("/") && c === "" ? "/" : c))
  );
}
function VE(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : GE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const zE = /^:[\w-]+$/,
  ZE = 3,
  $E = 2,
  UE = 1,
  BE = 10,
  FE = -2,
  o2 = (e) => e === "*";
function WE(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(o2) && (r += FE),
    t && (r += $E),
    n
      .filter((o) => !o2(o))
      .reduce((o, i) => o + (zE.test(i) ? ZE : i === "" ? UE : BE), r)
  );
}
function GE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function YE(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      c = a === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      h = jf(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        u
      );
    if (!h) return null;
    Object.assign(r, h.params);
    let f = l.route;
    i.push({
      params: r,
      pathname: kr([o, h.pathname]),
      pathnameBase: eb(kr([o, h.pathnameBase])),
      route: f,
    }),
      h.pathnameBase !== "/" && (o = kr([o, h.pathnameBase]));
  }
  return i;
}
function jf(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = KE(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    a = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, h, f) => {
      let { paramName: g, isOptional: C } = h;
      if (g === "*") {
        let y = l[f] || "";
        a = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const E = l[f];
      return (
        C && !E ? (u[g] = void 0) : (u[g] = (E || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: a,
    pattern: e,
  };
}
function KE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Q8(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, l, c) => (
            r.push({ paramName: l, isOptional: c != null }),
            c ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function qE(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Q8(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function di(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function XE(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? xi(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : QE(n, t)) : t,
    search: tb(r),
    hash: nb(o),
  };
}
function QE(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function wd(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function JE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function t6(e, t) {
  let n = JE(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function n6(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = xi(e))
    : ((o = _a({}, e)),
      Qe(
        !o.pathname || !o.pathname.includes("?"),
        wd("?", "pathname", "search", o)
      ),
      Qe(
        !o.pathname || !o.pathname.includes("#"),
        wd("#", "pathname", "hash", o)
      ),
      Qe(!o.search || !o.search.includes("#"), wd("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    a = i ? "/" : o.pathname,
    l;
  if (a == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && a.startsWith("..")) {
      let g = a.split("/");
      for (; g[0] === ".."; ) g.shift(), (f -= 1);
      o.pathname = g.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = XE(o, l),
    u = a && a !== "/" && a.endsWith("/"),
    h = (i || a === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (u || h) && (c.pathname += "/"), c;
}
const kr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  eb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  tb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  nb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function rb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const r6 = ["post", "put", "patch", "delete"];
new Set(r6);
const ob = ["get", ...r6];
new Set(ob);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Va() {
  return (
    (Va = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Va.apply(this, arguments)
  );
}
const Mc = w.createContext(null),
  o6 = w.createContext(null),
  Vr = w.createContext(null),
  kc = w.createContext(null),
  zr = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  i6 = w.createContext(null);
function ib(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Qa() || Qe(!1);
  let { basename: r, navigator: o } = w.useContext(Vr),
    { hash: i, pathname: a, search: l } = Lc(e, { relative: n }),
    c = a;
  return (
    r !== "/" && (c = a === "/" ? r : kr([r, a])),
    o.createHref({ pathname: c, search: l, hash: i })
  );
}
function Qa() {
  return w.useContext(kc) != null;
}
function Si() {
  return Qa() || Qe(!1), w.useContext(kc).location;
}
function a6(e) {
  w.useContext(Vr).static || w.useLayoutEffect(e);
}
function K0() {
  let { isDataRoute: e } = w.useContext(zr);
  return e ? xb() : ab();
}
function ab() {
  Qa() || Qe(!1);
  let e = w.useContext(Mc),
    { basename: t, future: n, navigator: r } = w.useContext(Vr),
    { matches: o } = w.useContext(zr),
    { pathname: i } = Si(),
    a = JSON.stringify(t6(o, n.v7_relativeSplatPath)),
    l = w.useRef(!1);
  return (
    a6(() => {
      l.current = !0;
    }),
    w.useCallback(
      function (u, h) {
        if ((h === void 0 && (h = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = n6(u, JSON.parse(a), i, h.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : kr([t, f.pathname])),
          (h.replace ? r.replace : r.push)(f, h.state, h);
      },
      [t, r, a, i, e]
    )
  );
}
const lb = w.createContext(null);
function sb(e) {
  let t = w.useContext(zr).outlet;
  return t && w.createElement(lb.Provider, { value: e }, t);
}
function Lc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(Vr),
    { matches: o } = w.useContext(zr),
    { pathname: i } = Si(),
    a = JSON.stringify(t6(o, r.v7_relativeSplatPath));
  return w.useMemo(() => n6(e, JSON.parse(a), i, n === "path"), [e, a, i, n]);
}
function cb(e, t) {
  return ub(e, t);
}
function ub(e, t, n, r) {
  Qa() || Qe(!1);
  let { navigator: o } = w.useContext(Vr),
    { matches: i } = w.useContext(zr),
    a = i[i.length - 1],
    l = a ? a.params : {};
  a && a.pathname;
  let c = a ? a.pathnameBase : "/";
  a && a.route;
  let u = Si(),
    h;
  if (t) {
    var f;
    let M = typeof t == "string" ? xi(t) : t;
    c === "/" || ((f = M.pathname) != null && f.startsWith(c)) || Qe(!1),
      (h = M);
  } else h = u;
  let g = h.pathname || "/",
    C = g;
  if (c !== "/") {
    let M = c.replace(/^\//, "").split("/");
    C = "/" + g.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let E = _E(e, { pathname: C }),
    y = mb(
      E &&
        E.map((M) =>
          Object.assign({}, M, {
            params: Object.assign({}, l, M.params),
            pathname: kr([
              c,
              o.encodeLocation
                ? o.encodeLocation(M.pathname).pathname
                : M.pathname,
            ]),
            pathnameBase:
              M.pathnameBase === "/"
                ? c
                : kr([
                    c,
                    o.encodeLocation
                      ? o.encodeLocation(M.pathnameBase).pathname
                      : M.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && y
    ? w.createElement(
        kc.Provider,
        {
          value: {
            location: Va(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: wr.Pop,
          },
        },
        y
      )
    : y;
}
function db() {
  let e = wb(),
    t = rb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const fb = w.createElement(db, null);
class pb extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          zr.Provider,
          { value: this.props.routeContext },
          w.createElement(i6.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function hb(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(Mc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(zr.Provider, { value: t }, r)
  );
}
function mb(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let a = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let h = a.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    h >= 0 || Qe(!1), (a = a.slice(0, Math.min(a.length, h + 1)));
  }
  let c = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let h = 0; h < a.length; h++) {
      let f = a[h];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = h),
        f.route.id)
      ) {
        let { loaderData: g, errors: C } = n,
          E =
            f.route.loader &&
            g[f.route.id] === void 0 &&
            (!C || C[f.route.id] === void 0);
        if (f.route.lazy || E) {
          (c = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]]);
          break;
        }
      }
    }
  return a.reduceRight((h, f, g) => {
    let C,
      E = !1,
      y = null,
      M = null;
    n &&
      ((C = l && f.route.id ? l[f.route.id] : void 0),
      (y = f.route.errorElement || fb),
      c &&
        (u < 0 && g === 0
          ? ((E = !0), (M = null))
          : u === g &&
            ((E = !0), (M = f.route.hydrateFallbackElement || null))));
    let m = t.concat(a.slice(0, g + 1)),
      v = () => {
        let b;
        return (
          C
            ? (b = y)
            : E
            ? (b = M)
            : f.route.Component
            ? (b = w.createElement(f.route.Component, null))
            : f.route.element
            ? (b = f.route.element)
            : (b = h),
          w.createElement(hb, {
            match: f,
            routeContext: { outlet: h, matches: m, isDataRoute: n != null },
            children: b,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || g === 0)
      ? w.createElement(pb, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: C,
          children: v(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : v();
  }, null);
}
var l6 = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(l6 || {}),
  Qs = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Qs || {});
function gb(e) {
  let t = w.useContext(Mc);
  return t || Qe(!1), t;
}
function vb(e) {
  let t = w.useContext(o6);
  return t || Qe(!1), t;
}
function yb(e) {
  let t = w.useContext(zr);
  return t || Qe(!1), t;
}
function s6(e) {
  let t = yb(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Qe(!1), n.route.id;
}
function wb() {
  var e;
  let t = w.useContext(i6),
    n = vb(Qs.UseRouteError),
    r = s6(Qs.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function xb() {
  let { router: e } = gb(l6.UseNavigateStable),
    t = s6(Qs.UseNavigateStable),
    n = w.useRef(!1);
  return (
    a6(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Va({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function Sb(e) {
  return sb(e.context);
}
function $n(e) {
  Qe(!1);
}
function Eb(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = wr.Pop,
    navigator: i,
    static: a = !1,
    future: l,
  } = e;
  Qa() && Qe(!1);
  let c = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: c,
        navigator: i,
        static: a,
        future: Va({ v7_relativeSplatPath: !1 }, l),
      }),
      [c, l, i, a]
    );
  typeof r == "string" && (r = xi(r));
  let {
      pathname: h = "/",
      search: f = "",
      hash: g = "",
      state: C = null,
      key: E = "default",
    } = r,
    y = w.useMemo(() => {
      let M = di(h, c);
      return M == null
        ? null
        : {
            location: { pathname: M, search: f, hash: g, state: C, key: E },
            navigationType: o,
          };
    }, [c, h, f, g, C, E, o]);
  return y == null
    ? null
    : w.createElement(
        Vr.Provider,
        { value: u },
        w.createElement(kc.Provider, { children: n, value: y })
      );
}
function bb(e) {
  let { children: t, location: n } = e;
  return cb(Af(t), n);
}
new Promise(() => {});
function Af(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, Af(r.props.children, i));
        return;
      }
      r.type !== $n && Qe(!1), !r.props.index || !r.props.children || Qe(!1);
      let a = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (a.children = Af(r.props.children, i)), n.push(a);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Js() {
  return (
    (Js = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Js.apply(this, arguments)
  );
}
function c6(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Cb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function jb(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Cb(e);
}
const Ab = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Mb = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  kb = "6";
try {
  window.__reactRouterVersion = kb;
} catch {}
const Lb = w.createContext({ isTransitioning: !1 }),
  Nb = "startTransition",
  i2 = M2[Nb];
function Pb(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = IE({ window: o, v5Compat: !0 }));
  let a = i.current,
    [l, c] = w.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    h = w.useCallback(
      (f) => {
        u && i2 ? i2(() => c(f)) : c(f);
      },
      [c, u]
    );
  return (
    w.useLayoutEffect(() => a.listen(h), [a, h]),
    w.createElement(Eb, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: r,
    })
  );
}
const Ob =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Rb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Tb = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: a,
        state: l,
        target: c,
        to: u,
        preventScrollReset: h,
        unstable_viewTransition: f,
      } = t,
      g = c6(t, Ab),
      { basename: C } = w.useContext(Vr),
      E,
      y = !1;
    if (typeof u == "string" && Rb.test(u) && ((E = u), Ob))
      try {
        let b = new URL(window.location.href),
          j = u.startsWith("//") ? new URL(b.protocol + u) : new URL(u),
          N = di(j.pathname, C);
        j.origin === b.origin && N != null
          ? (u = N + j.search + j.hash)
          : (y = !0);
      } catch {}
    let M = ib(u, { relative: o }),
      m = Hb(u, {
        replace: a,
        state: l,
        target: c,
        preventScrollReset: h,
        relative: o,
        unstable_viewTransition: f,
      });
    function v(b) {
      r && r(b), b.defaultPrevented || m(b);
    }
    return w.createElement(
      "a",
      Js({}, g, { href: E || M, onClick: y || i ? r : v, ref: n, target: c })
    );
  }),
  Ib = w.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: o = !1,
        className: i = "",
        end: a = !1,
        style: l,
        to: c,
        unstable_viewTransition: u,
        children: h,
      } = t,
      f = c6(t, Mb),
      g = Lc(c, { relative: f.relative }),
      C = Si(),
      E = w.useContext(o6),
      { navigator: y, basename: M } = w.useContext(Vr),
      m = E != null && _b(g) && u === !0,
      v = y.encodeLocation ? y.encodeLocation(g).pathname : g.pathname,
      b = C.pathname,
      j =
        E && E.navigation && E.navigation.location
          ? E.navigation.location.pathname
          : null;
    o ||
      ((b = b.toLowerCase()),
      (j = j ? j.toLowerCase() : null),
      (v = v.toLowerCase())),
      j && M && (j = di(j, M) || j);
    const N = v !== "/" && v.endsWith("/") ? v.length - 1 : v.length;
    let O = b === v || (!a && b.startsWith(v) && b.charAt(N) === "/"),
      P =
        j != null &&
        (j === v || (!a && j.startsWith(v) && j.charAt(v.length) === "/")),
      R = { isActive: O, isPending: P, isTransitioning: m },
      F = O ? r : void 0,
      H;
    typeof i == "function"
      ? (H = i(R))
      : (H = [
          i,
          O ? "active" : null,
          P ? "pending" : null,
          m ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let K = typeof l == "function" ? l(R) : l;
    return w.createElement(
      Tb,
      Js({}, f, {
        "aria-current": F,
        className: H,
        ref: n,
        style: K,
        to: c,
        unstable_viewTransition: u,
      }),
      typeof h == "function" ? h(R) : h
    );
  });
var Mf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Mf || (Mf = {}));
var a2;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(a2 || (a2 = {}));
function Db(e) {
  let t = w.useContext(Mc);
  return t || Qe(!1), t;
}
function Hb(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: a,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    c = K0(),
    u = Si(),
    h = Lc(e, { relative: a });
  return w.useCallback(
    (f) => {
      if (jb(f, n)) {
        f.preventDefault();
        let g = r !== void 0 ? r : Xs(u) === Xs(h);
        c(e, {
          replace: g,
          state: o,
          preventScrollReset: i,
          relative: a,
          unstable_viewTransition: l,
        });
      }
    },
    [u, c, h, r, o, n, e, i, a, l]
  );
}
function _b(e, t) {
  t === void 0 && (t = {});
  let n = w.useContext(Lb);
  n == null && Qe(!1);
  let { basename: r } = Db(Mf.useViewTransitionState),
    o = Lc(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let i = di(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    a = di(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return jf(o.pathname, a) != null || jf(o.pathname, i) != null;
}
const q0 = ({ closeRef: e, children: t, openSheet: n, disabled: r }) =>
    p.jsxs(x8, {
      className: "!z-[1005]",
      children: [
        p.jsx(S8, {
          disabled: r,
          ref: n,
          asChild: !0,
          children: p.jsxs(Be, {
            className: " hover:bg-neutral-800 bg-neutral-900",
            children: [p.jsx(q8, { className: " w-6 h-6 me-1" }), " Add"],
          }),
        }),
        p.jsxs(Z0, {
          children: [
            p.jsxs(b8, {
              children: [
                p.jsx(j8, { children: "NSD" }),
                p.jsx(A8, { children: "Customize Your website!" }),
              ],
            }),
            p.jsx("div", { className: " my-8", children: t }),
            p.jsxs(C8, {
              className: "flex !justify-between items-center",
              children: [
                p.jsx(tm, {
                  asChild: !0,
                  children: p.jsx(Be, {
                    ref: e,
                    className: "hidden",
                    variant: "link",
                    children: "Cancel",
                  }),
                }),
                p.jsx(tm, {
                  asChild: !0,
                  children: p.jsx(Be, {
                    className: "hidden",
                    size: "sm",
                    children: "Save changes",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  zt = w.forwardRef(({ className: e, type: t, ...n }, r) =>
    p.jsx("input", {
      type: t,
      className: Fe(
        "flex h-9 w-full rounded-md border border-black/50 file:border-none bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...n,
    })
  );
zt.displayName = "Input";
const Vb = ["top", "right", "bottom", "left"],
  Ln = Math.min,
  Yt = Math.max,
  ec = Math.round,
  is = Math.floor,
  Or = (e) => ({ x: e, y: e }),
  zb = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Zb = { start: "end", end: "start" };
function kf(e, t, n) {
  return Yt(e, Ln(t, n));
}
function Qn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e) {
  return e.split("-")[0];
}
function Ei(e) {
  return e.split("-")[1];
}
function X0(e) {
  return e === "x" ? "y" : "x";
}
function Q0(e) {
  return e === "y" ? "height" : "width";
}
function Rr(e) {
  return ["top", "bottom"].includes(Jn(e)) ? "y" : "x";
}
function J0(e) {
  return X0(Rr(e));
}
function $b(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ei(e),
    o = J0(e),
    i = Q0(o);
  let a =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (a = tc(a)), [a, tc(a)];
}
function Ub(e) {
  const t = tc(e);
  return [Lf(e), t, Lf(t)];
}
function Lf(e) {
  return e.replace(/start|end/g, (t) => Zb[t]);
}
function Bb(e, t, n) {
  const r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function Fb(e, t, n, r) {
  const o = Ei(e);
  let i = Bb(Jn(e), n === "start", r);
  return (
    o && ((i = i.map((a) => a + "-" + o)), t && (i = i.concat(i.map(Lf)))), i
  );
}
function tc(e) {
  return e.replace(/left|right|bottom|top/g, (t) => zb[t]);
}
function Wb(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function u6(e) {
  return typeof e != "number"
    ? Wb(e)
    : { top: e, right: e, bottom: e, left: e };
}
function nc(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function l2(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Rr(t),
    a = J0(t),
    l = Q0(a),
    c = Jn(t),
    u = i === "y",
    h = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    g = r[l] / 2 - o[l] / 2;
  let C;
  switch (c) {
    case "top":
      C = { x: h, y: r.y - o.height };
      break;
    case "bottom":
      C = { x: h, y: r.y + r.height };
      break;
    case "right":
      C = { x: r.x + r.width, y: f };
      break;
    case "left":
      C = { x: r.x - o.width, y: f };
      break;
    default:
      C = { x: r.x, y: r.y };
  }
  switch (Ei(t)) {
    case "start":
      C[a] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      C[a] += g * (n && u ? -1 : 1);
      break;
  }
  return C;
}
const Gb = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: a,
    } = n,
    l = i.filter(Boolean),
    c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let u = await a.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: h, y: f } = l2(u, r, c),
    g = r,
    C = {},
    E = 0;
  for (let y = 0; y < l.length; y++) {
    const { name: M, fn: m } = l[y],
      {
        x: v,
        y: b,
        data: j,
        reset: N,
      } = await m({
        x: h,
        y: f,
        initialPlacement: r,
        placement: g,
        strategy: o,
        middlewareData: C,
        rects: u,
        platform: a,
        elements: { reference: e, floating: t },
      });
    (h = v ?? h),
      (f = b ?? f),
      (C = { ...C, [M]: { ...C[M], ...j } }),
      N &&
        E <= 50 &&
        (E++,
        typeof N == "object" &&
          (N.placement && (g = N.placement),
          N.rects &&
            (u =
              N.rects === !0
                ? await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : N.rects),
          ({ x: h, y: f } = l2(u, g, c))),
        (y = -1));
  }
  return { x: h, y: f, placement: g, strategy: o, middlewareData: C };
};
async function za(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: a, elements: l, strategy: c } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: h = "viewport",
      elementContext: f = "floating",
      altBoundary: g = !1,
      padding: C = 0,
    } = Qn(t, e),
    E = u6(C),
    M = l[g ? (f === "floating" ? "reference" : "floating") : f],
    m = nc(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(M))) == null ||
          n
            ? M
            : M.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: h,
        strategy: c,
      })
    ),
    v =
      f === "floating"
        ? { x: r, y: o, width: a.floating.width, height: a.floating.height }
        : a.reference,
    b = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    j = (await (i.isElement == null ? void 0 : i.isElement(b)))
      ? (await (i.getScale == null ? void 0 : i.getScale(b))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    N = nc(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: v,
            offsetParent: b,
            strategy: c,
          })
        : v
    );
  return {
    top: (m.top - N.top + E.top) / j.y,
    bottom: (N.bottom - m.bottom + E.bottom) / j.y,
    left: (m.left - N.left + E.left) / j.x,
    right: (N.right - m.right + E.right) / j.x,
  };
}
const Yb = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: a,
          elements: l,
          middlewareData: c,
        } = t,
        { element: u, padding: h = 0 } = Qn(e, t) || {};
      if (u == null) return {};
      const f = u6(h),
        g = { x: n, y: r },
        C = J0(o),
        E = Q0(C),
        y = await a.getDimensions(u),
        M = C === "y",
        m = M ? "top" : "left",
        v = M ? "bottom" : "right",
        b = M ? "clientHeight" : "clientWidth",
        j = i.reference[E] + i.reference[C] - g[C] - i.floating[E],
        N = g[C] - i.reference[C],
        O = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(u));
      let P = O ? O[b] : 0;
      (!P || !(await (a.isElement == null ? void 0 : a.isElement(O)))) &&
        (P = l.floating[b] || i.floating[E]);
      const R = j / 2 - N / 2,
        F = P / 2 - y[E] / 2 - 1,
        H = Ln(f[m], F),
        K = Ln(f[v], F),
        G = H,
        ue = P - y[E] - K,
        ie = P / 2 - y[E] / 2 + R,
        pe = kf(G, ie, ue),
        ve =
          !c.arrow &&
          Ei(o) != null &&
          ie !== pe &&
          i.reference[E] / 2 - (ie < G ? H : K) - y[E] / 2 < 0,
        re = ve ? (ie < G ? ie - G : ie - ue) : 0;
      return {
        [C]: g[C] + re,
        data: {
          [C]: pe,
          centerOffset: ie - pe - re,
          ...(ve && { alignmentOffset: re }),
        },
        reset: ve,
      };
    },
  }),
  Kb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: a,
              initialPlacement: l,
              platform: c,
              elements: u,
            } = t,
            {
              mainAxis: h = !0,
              crossAxis: f = !0,
              fallbackPlacements: g,
              fallbackStrategy: C = "bestFit",
              fallbackAxisSideDirection: E = "none",
              flipAlignment: y = !0,
              ...M
            } = Qn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const m = Jn(o),
            v = Rr(l),
            b = Jn(l) === l,
            j = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
            N = g || (b || !y ? [tc(l)] : Ub(l)),
            O = E !== "none";
          !g && O && N.push(...Fb(l, y, E, j));
          const P = [l, ...N],
            R = await za(t, M),
            F = [];
          let H = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((h && F.push(R[m]), f)) {
            const ie = $b(o, a, j);
            F.push(R[ie[0]], R[ie[1]]);
          }
          if (
            ((H = [...H, { placement: o, overflows: F }]),
            !F.every((ie) => ie <= 0))
          ) {
            var K, G;
            const ie = (((K = i.flip) == null ? void 0 : K.index) || 0) + 1,
              pe = P[ie];
            if (pe)
              return {
                data: { index: ie, overflows: H },
                reset: { placement: pe },
              };
            let ve =
              (G = H.filter((re) => re.overflows[0] <= 0).sort(
                (re, V) => re.overflows[1] - V.overflows[1]
              )[0]) == null
                ? void 0
                : G.placement;
            if (!ve)
              switch (C) {
                case "bestFit": {
                  var ue;
                  const re =
                    (ue = H.filter((V) => {
                      if (O) {
                        const _ = Rr(V.placement);
                        return _ === v || _ === "y";
                      }
                      return !0;
                    })
                      .map((V) => [
                        V.placement,
                        V.overflows
                          .filter((_) => _ > 0)
                          .reduce((_, z) => _ + z, 0),
                      ])
                      .sort((V, _) => V[1] - _[1])[0]) == null
                      ? void 0
                      : ue[0];
                  re && (ve = re);
                  break;
                }
                case "initialPlacement":
                  ve = l;
                  break;
              }
            if (o !== ve) return { reset: { placement: ve } };
          }
          return {};
        },
      }
    );
  };
function s2(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function c2(e) {
  return Vb.some((t) => e[t] >= 0);
}
const qb = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...o } = Qn(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await za(t, { ...o, elementContext: "reference" }),
              a = s2(i, n.reference);
            return {
              data: { referenceHiddenOffsets: a, referenceHidden: c2(a) },
            };
          }
          case "escaped": {
            const i = await za(t, { ...o, altBoundary: !0 }),
              a = s2(i, n.floating);
            return { data: { escapedOffsets: a, escaped: c2(a) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function Xb(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    a = Jn(n),
    l = Ei(n),
    c = Rr(n) === "y",
    u = ["left", "top"].includes(a) ? -1 : 1,
    h = i && c ? -1 : 1,
    f = Qn(t, e);
  let {
    mainAxis: g,
    crossAxis: C,
    alignmentAxis: E,
  } = typeof f == "number"
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    l && typeof E == "number" && (C = l === "end" ? E * -1 : E),
    c ? { x: C * h, y: g * u } : { x: g * u, y: C * h }
  );
}
const Qb = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: a, middlewareData: l } = t,
            c = await Xb(t, e);
          return a === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + c.x, y: i + c.y, data: { ...c, placement: a } };
        },
      }
    );
  },
  Jb = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: a = !1,
              limiter: l = {
                fn: (M) => {
                  let { x: m, y: v } = M;
                  return { x: m, y: v };
                },
              },
              ...c
            } = Qn(e, t),
            u = { x: n, y: r },
            h = await za(t, c),
            f = Rr(Jn(o)),
            g = X0(f);
          let C = u[g],
            E = u[f];
          if (i) {
            const M = g === "y" ? "top" : "left",
              m = g === "y" ? "bottom" : "right",
              v = C + h[M],
              b = C - h[m];
            C = kf(v, C, b);
          }
          if (a) {
            const M = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              v = E + h[M],
              b = E - h[m];
            E = kf(v, E, b);
          }
          const y = l.fn({ ...t, [g]: C, [f]: E });
          return { ...y, data: { x: y.x - n, y: y.y - r } };
        },
      }
    );
  },
  eC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: a } = t,
            { offset: l = 0, mainAxis: c = !0, crossAxis: u = !0 } = Qn(e, t),
            h = { x: n, y: r },
            f = Rr(o),
            g = X0(f);
          let C = h[g],
            E = h[f];
          const y = Qn(l, t),
            M =
              typeof y == "number"
                ? { mainAxis: y, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...y };
          if (c) {
            const b = g === "y" ? "height" : "width",
              j = i.reference[g] - i.floating[b] + M.mainAxis,
              N = i.reference[g] + i.reference[b] - M.mainAxis;
            C < j ? (C = j) : C > N && (C = N);
          }
          if (u) {
            var m, v;
            const b = g === "y" ? "width" : "height",
              j = ["top", "left"].includes(Jn(o)),
              N =
                i.reference[f] -
                i.floating[b] +
                ((j && ((m = a.offset) == null ? void 0 : m[f])) || 0) +
                (j ? 0 : M.crossAxis),
              O =
                i.reference[f] +
                i.reference[b] +
                (j ? 0 : ((v = a.offset) == null ? void 0 : v[f]) || 0) -
                (j ? M.crossAxis : 0);
            E < N ? (E = N) : E > O && (E = O);
          }
          return { [g]: C, [f]: E };
        },
      }
    );
  },
  tC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          const { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: a = () => {}, ...l } = Qn(e, t),
            c = await za(t, l),
            u = Jn(n),
            h = Ei(n),
            f = Rr(n) === "y",
            { width: g, height: C } = r.floating;
          let E, y;
          u === "top" || u === "bottom"
            ? ((E = u),
              (y =
                h ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = u), (E = h === "end" ? "top" : "bottom"));
          const M = C - c.top - c.bottom,
            m = g - c.left - c.right,
            v = Ln(C - c[E], M),
            b = Ln(g - c[y], m),
            j = !t.middlewareData.shift;
          let N = v,
            O = b;
          if (
            (f ? (O = h || j ? Ln(b, m) : m) : (N = h || j ? Ln(v, M) : M),
            j && !h)
          ) {
            const R = Yt(c.left, 0),
              F = Yt(c.right, 0),
              H = Yt(c.top, 0),
              K = Yt(c.bottom, 0);
            f
              ? (O = g - 2 * (R !== 0 || F !== 0 ? R + F : Yt(c.left, c.right)))
              : (N =
                  C - 2 * (H !== 0 || K !== 0 ? H + K : Yt(c.top, c.bottom)));
          }
          await a({ ...t, availableWidth: O, availableHeight: N });
          const P = await o.getDimensions(i.floating);
          return g !== P.width || C !== P.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function bi(e) {
  return d6(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Xt(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function nr(e) {
  var t;
  return (t = (d6(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function d6(e) {
  return e instanceof Node || e instanceof Xt(e).Node;
}
function On(e) {
  return e instanceof Element || e instanceof Xt(e).Element;
}
function Rn(e) {
  return e instanceof HTMLElement || e instanceof Xt(e).HTMLElement;
}
function u2(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Xt(e).ShadowRoot;
}
function Ja(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = xn(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function nC(e) {
  return ["table", "td", "th"].includes(bi(e));
}
function Nc(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function e1(e) {
  const t = t1(),
    n = xn(e);
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) =>
      (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function rC(e) {
  let t = Tr(e);
  for (; Rn(t) && !fi(t); ) {
    if (Nc(t)) return null;
    if (e1(t)) return t;
    t = Tr(t);
  }
  return null;
}
function t1() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function fi(e) {
  return ["html", "body", "#document"].includes(bi(e));
}
function xn(e) {
  return Xt(e).getComputedStyle(e);
}
function Pc(e) {
  return On(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Tr(e) {
  if (bi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (u2(e) && e.host) || nr(e);
  return u2(t) ? t.host : t;
}
function f6(e) {
  const t = Tr(e);
  return fi(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Rn(t) && Ja(t)
    ? t
    : f6(t);
}
function Za(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = f6(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    a = Xt(o);
  return i
    ? t.concat(
        a,
        a.visualViewport || [],
        Ja(o) ? o : [],
        a.frameElement && n ? Za(a.frameElement) : []
      )
    : t.concat(o, Za(o, [], n));
}
function p6(e) {
  const t = xn(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Rn(e),
    i = o ? e.offsetWidth : n,
    a = o ? e.offsetHeight : r,
    l = ec(n) !== i || ec(r) !== a;
  return l && ((n = i), (r = a)), { width: n, height: r, $: l };
}
function n1(e) {
  return On(e) ? e : e.contextElement;
}
function ni(e) {
  const t = n1(e);
  if (!Rn(t)) return Or(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = p6(t);
  let a = (i ? ec(n.width) : n.width) / r,
    l = (i ? ec(n.height) : n.height) / o;
  return (
    (!a || !Number.isFinite(a)) && (a = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: a, y: l }
  );
}
const oC = Or(0);
function h6(e) {
  const t = Xt(e);
  return !t1() || !t.visualViewport
    ? oC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function iC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Xt(e)) ? !1 : t;
}
function mo(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = n1(e);
  let a = Or(1);
  t && (r ? On(r) && (a = ni(r)) : (a = ni(e)));
  const l = iC(i, n, r) ? h6(i) : Or(0);
  let c = (o.left + l.x) / a.x,
    u = (o.top + l.y) / a.y,
    h = o.width / a.x,
    f = o.height / a.y;
  if (i) {
    const g = Xt(i),
      C = r && On(r) ? Xt(r) : r;
    let E = g,
      y = E.frameElement;
    for (; y && r && C !== E; ) {
      const M = ni(y),
        m = y.getBoundingClientRect(),
        v = xn(y),
        b = m.left + (y.clientLeft + parseFloat(v.paddingLeft)) * M.x,
        j = m.top + (y.clientTop + parseFloat(v.paddingTop)) * M.y;
      (c *= M.x),
        (u *= M.y),
        (h *= M.x),
        (f *= M.y),
        (c += b),
        (u += j),
        (E = Xt(y)),
        (y = E.frameElement);
    }
  }
  return nc({ width: h, height: f, x: c, y: u });
}
function aC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    a = nr(r),
    l = t ? Nc(t.floating) : !1;
  if (r === a || (l && i)) return n;
  let c = { scrollLeft: 0, scrollTop: 0 },
    u = Or(1);
  const h = Or(0),
    f = Rn(r);
  if (
    (f || (!f && !i)) &&
    ((bi(r) !== "body" || Ja(a)) && (c = Pc(r)), Rn(r))
  ) {
    const g = mo(r);
    (u = ni(r)), (h.x = g.x + r.clientLeft), (h.y = g.y + r.clientTop);
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - c.scrollLeft * u.x + h.x,
    y: n.y * u.y - c.scrollTop * u.y + h.y,
  };
}
function lC(e) {
  return Array.from(e.getClientRects());
}
function m6(e) {
  return mo(nr(e)).left + Pc(e).scrollLeft;
}
function sC(e) {
  const t = nr(e),
    n = Pc(e),
    r = e.ownerDocument.body,
    o = Yt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Yt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + m6(e);
  const l = -n.scrollTop;
  return (
    xn(r).direction === "rtl" && (a += Yt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: a, y: l }
  );
}
function cC(e, t) {
  const n = Xt(e),
    r = nr(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    a = r.clientHeight,
    l = 0,
    c = 0;
  if (o) {
    (i = o.width), (a = o.height);
    const u = t1();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (c = o.offsetTop));
  }
  return { width: i, height: a, x: l, y: c };
}
function uC(e, t) {
  const n = mo(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Rn(e) ? ni(e) : Or(1),
    a = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    c = o * i.x,
    u = r * i.y;
  return { width: a, height: l, x: c, y: u };
}
function d2(e, t, n) {
  let r;
  if (t === "viewport") r = cC(e, n);
  else if (t === "document") r = sC(nr(e));
  else if (On(t)) r = uC(t, n);
  else {
    const o = h6(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return nc(r);
}
function g6(e, t) {
  const n = Tr(e);
  return n === t || !On(n) || fi(n)
    ? !1
    : xn(n).position === "fixed" || g6(n, t);
}
function dC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Za(e, [], !1).filter((l) => On(l) && bi(l) !== "body"),
    o = null;
  const i = xn(e).position === "fixed";
  let a = i ? Tr(e) : e;
  for (; On(a) && !fi(a); ) {
    const l = xn(a),
      c = e1(a);
    !c && l.position === "fixed" && (o = null),
      (
        i
          ? !c && !o
          : (!c &&
              l.position === "static" &&
              !!o &&
              ["absolute", "fixed"].includes(o.position)) ||
            (Ja(a) && !c && g6(e, a))
      )
        ? (r = r.filter((h) => h !== a))
        : (o = l),
      (a = Tr(a));
  }
  return t.set(e, r), r;
}
function fC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const a = [
      ...(n === "clippingAncestors"
        ? Nc(t)
          ? []
          : dC(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = a[0],
    c = a.reduce((u, h) => {
      const f = d2(t, h, o);
      return (
        (u.top = Yt(f.top, u.top)),
        (u.right = Ln(f.right, u.right)),
        (u.bottom = Ln(f.bottom, u.bottom)),
        (u.left = Yt(f.left, u.left)),
        u
      );
    }, d2(t, l, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top,
  };
}
function pC(e) {
  const { width: t, height: n } = p6(e);
  return { width: t, height: n };
}
function hC(e, t, n) {
  const r = Rn(t),
    o = nr(t),
    i = n === "fixed",
    a = mo(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = Or(0);
  if (r || (!r && !i))
    if (((bi(t) !== "body" || Ja(o)) && (l = Pc(t)), r)) {
      const f = mo(t, !0, i, t);
      (c.x = f.x + t.clientLeft), (c.y = f.y + t.clientTop);
    } else o && (c.x = m6(o));
  const u = a.left + l.scrollLeft - c.x,
    h = a.top + l.scrollTop - c.y;
  return { x: u, y: h, width: a.width, height: a.height };
}
function xd(e) {
  return xn(e).position === "static";
}
function f2(e, t) {
  return !Rn(e) || xn(e).position === "fixed"
    ? null
    : t
    ? t(e)
    : e.offsetParent;
}
function v6(e, t) {
  const n = Xt(e);
  if (Nc(e)) return n;
  if (!Rn(e)) {
    let o = Tr(e);
    for (; o && !fi(o); ) {
      if (On(o) && !xd(o)) return o;
      o = Tr(o);
    }
    return n;
  }
  let r = f2(e, t);
  for (; r && nC(r) && xd(r); ) r = f2(r, t);
  return r && fi(r) && xd(r) && !e1(r) ? n : r || rC(e) || n;
}
const mC = async function (e) {
  const t = this.getOffsetParent || v6,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: hC(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function gC(e) {
  return xn(e).direction === "rtl";
}
const vC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aC,
  getDocumentElement: nr,
  getClippingRect: fC,
  getOffsetParent: v6,
  getElementRects: mC,
  getClientRects: lC,
  getDimensions: pC,
  getScale: ni,
  isElement: On,
  isRTL: gC,
};
function yC(e, t) {
  let n = null,
    r;
  const o = nr(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function a(l, c) {
    l === void 0 && (l = !1), c === void 0 && (c = 1), i();
    const { left: u, top: h, width: f, height: g } = e.getBoundingClientRect();
    if ((l || t(), !f || !g)) return;
    const C = is(h),
      E = is(o.clientWidth - (u + f)),
      y = is(o.clientHeight - (h + g)),
      M = is(u),
      v = {
        rootMargin: -C + "px " + -E + "px " + -y + "px " + -M + "px",
        threshold: Yt(0, Ln(1, c)) || 1,
      };
    let b = !0;
    function j(N) {
      const O = N[0].intersectionRatio;
      if (O !== c) {
        if (!b) return a();
        O
          ? a(!1, O)
          : (r = setTimeout(() => {
              a(!1, 1e-7);
            }, 1e3));
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(j, { ...v, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(j, v);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function wC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: a = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: c = !1,
    } = r,
    u = n1(e),
    h = o || i ? [...(u ? Za(u) : []), ...Za(t)] : [];
  h.forEach((m) => {
    o && m.addEventListener("scroll", n, { passive: !0 }),
      i && m.addEventListener("resize", n);
  });
  const f = u && l ? yC(u, n) : null;
  let g = -1,
    C = null;
  a &&
    ((C = new ResizeObserver((m) => {
      let [v] = m;
      v &&
        v.target === u &&
        C &&
        (C.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var b;
          (b = C) == null || b.observe(t);
        }))),
        n();
    })),
    u && !c && C.observe(u),
    C.observe(t));
  let E,
    y = c ? mo(e) : null;
  c && M();
  function M() {
    const m = mo(e);
    y &&
      (m.x !== y.x ||
        m.y !== y.y ||
        m.width !== y.width ||
        m.height !== y.height) &&
      n(),
      (y = m),
      (E = requestAnimationFrame(M));
  }
  return (
    n(),
    () => {
      var m;
      h.forEach((v) => {
        o && v.removeEventListener("scroll", n),
          i && v.removeEventListener("resize", n);
      }),
        f == null || f(),
        (m = C) == null || m.disconnect(),
        (C = null),
        c && cancelAnimationFrame(E);
    }
  );
}
const xC = Qb,
  SC = Jb,
  EC = Kb,
  bC = tC,
  CC = qb,
  p2 = Yb,
  jC = eC,
  AC = (e, t, n) => {
    const r = new Map(),
      o = { platform: vC, ...n },
      i = { ...o.platform, _c: r };
    return Gb(e, t, { ...o, platform: i });
  };
var Ss = typeof document < "u" ? w.useLayoutEffect : w.useEffect;
function rc(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!rc(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !rc(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function y6(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function h2(e, t) {
  const n = y6(e);
  return Math.round(t * n) / n;
}
function m2(e) {
  const t = w.useRef(e);
  return (
    Ss(() => {
      t.current = e;
    }),
    t
  );
}
function MC(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: a } = {},
      transform: l = !0,
      whileElementsMounted: c,
      open: u,
    } = e,
    [h, f] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, C] = w.useState(r);
  rc(g, r) || C(r);
  const [E, y] = w.useState(null),
    [M, m] = w.useState(null),
    v = w.useCallback((re) => {
      re !== O.current && ((O.current = re), y(re));
    }, []),
    b = w.useCallback((re) => {
      re !== P.current && ((P.current = re), m(re));
    }, []),
    j = i || E,
    N = a || M,
    O = w.useRef(null),
    P = w.useRef(null),
    R = w.useRef(h),
    F = c != null,
    H = m2(c),
    K = m2(o),
    G = w.useCallback(() => {
      if (!O.current || !P.current) return;
      const re = { placement: t, strategy: n, middleware: g };
      K.current && (re.platform = K.current),
        AC(O.current, P.current, re).then((V) => {
          const _ = { ...V, isPositioned: !0 };
          ue.current &&
            !rc(R.current, _) &&
            ((R.current = _),
            Ga.flushSync(() => {
              f(_);
            }));
        });
    }, [g, t, n, K]);
  Ss(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), f((re) => ({ ...re, isPositioned: !1 })));
  }, [u]);
  const ue = w.useRef(!1);
  Ss(
    () => (
      (ue.current = !0),
      () => {
        ue.current = !1;
      }
    ),
    []
  ),
    Ss(() => {
      if ((j && (O.current = j), N && (P.current = N), j && N)) {
        if (H.current) return H.current(j, N, G);
        G();
      }
    }, [j, N, G, H, F]);
  const ie = w.useMemo(
      () => ({ reference: O, floating: P, setReference: v, setFloating: b }),
      [v, b]
    ),
    pe = w.useMemo(() => ({ reference: j, floating: N }), [j, N]),
    ve = w.useMemo(() => {
      const re = { position: n, left: 0, top: 0 };
      if (!pe.floating) return re;
      const V = h2(pe.floating, h.x),
        _ = h2(pe.floating, h.y);
      return l
        ? {
            ...re,
            transform: "translate(" + V + "px, " + _ + "px)",
            ...(y6(pe.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: V, top: _ };
    }, [n, l, pe.floating, h.x, h.y]);
  return w.useMemo(
    () => ({ ...h, update: G, refs: ie, elements: pe, floatingStyles: ve }),
    [h, G, ie, pe, ve]
  );
}
const kC = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? p2({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? p2({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  LC = (e, t) => ({ ...xC(e), options: [e, t] }),
  NC = (e, t) => ({ ...SC(e), options: [e, t] }),
  PC = (e, t) => ({ ...jC(e), options: [e, t] }),
  OC = (e, t) => ({ ...EC(e), options: [e, t] }),
  RC = (e, t) => ({ ...bC(e), options: [e, t] }),
  TC = (e, t) => ({ ...CC(e), options: [e, t] }),
  IC = (e, t) => ({ ...kC(e), options: [e, t] });
var DC = "Arrow",
  w6 = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return p.jsx(It.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : p.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
w6.displayName = DC;
var HC = w6;
function _C(e) {
  const [t, n] = w.useState(void 0);
  return (
    fo(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let a, l;
          if ("borderBoxSize" in i) {
            const c = i.borderBoxSize,
              u = Array.isArray(c) ? c[0] : c;
            (a = u.inlineSize), (l = u.blockSize);
          } else (a = e.offsetWidth), (l = e.offsetHeight);
          n({ width: a, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var r1 = "Popper",
  [x6, S6] = xc(r1),
  [VC, E6] = x6(r1),
  b6 = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = w.useState(null);
    return p.jsx(VC, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
b6.displayName = r1;
var C6 = "PopperAnchor",
  j6 = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = E6(C6, n),
      a = w.useRef(null),
      l = tn(t, a);
    return (
      w.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
      }),
      r ? null : p.jsx(It.div, { ...o, ref: l })
    );
  });
j6.displayName = C6;
var o1 = "PopperContent",
  [zC, ZC] = x6(o1),
  A6 = w.forwardRef((e, t) => {
    var be, ke, Je, it, je, J;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: a = 0,
        arrowPadding: l = 0,
        avoidCollisions: c = !0,
        collisionBoundary: u = [],
        collisionPadding: h = 0,
        sticky: f = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: C = "optimized",
        onPlaced: E,
        ...y
      } = e,
      M = E6(o1, n),
      [m, v] = w.useState(null),
      b = tn(t, (me) => v(me)),
      [j, N] = w.useState(null),
      O = _C(j),
      P = (O == null ? void 0 : O.width) ?? 0,
      R = (O == null ? void 0 : O.height) ?? 0,
      F = r + (i !== "center" ? "-" + i : ""),
      H =
        typeof h == "number"
          ? h
          : { top: 0, right: 0, bottom: 0, left: 0, ...h },
      K = Array.isArray(u) ? u : [u],
      G = K.length > 0,
      ue = { padding: H, boundary: K.filter(UC), altBoundary: G },
      {
        refs: ie,
        floatingStyles: pe,
        placement: ve,
        isPositioned: re,
        middlewareData: V,
      } = MC({
        strategy: "fixed",
        placement: F,
        whileElementsMounted: (...me) =>
          wC(...me, { animationFrame: C === "always" }),
        elements: { reference: M.anchor },
        middleware: [
          LC({ mainAxis: o + R, alignmentAxis: a }),
          c &&
            NC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === "partial" ? PC() : void 0,
              ...ue,
            }),
          c && OC({ ...ue }),
          RC({
            ...ue,
            apply: ({
              elements: me,
              rects: Le,
              availableWidth: De,
              availableHeight: at,
            }) => {
              const { width: bt, height: te } = Le.reference,
                k = me.floating.style;
              k.setProperty("--radix-popper-available-width", `${De}px`),
                k.setProperty("--radix-popper-available-height", `${at}px`),
                k.setProperty("--radix-popper-anchor-width", `${bt}px`),
                k.setProperty("--radix-popper-anchor-height", `${te}px`);
            },
          }),
          j && IC({ element: j, padding: l }),
          BC({ arrowWidth: P, arrowHeight: R }),
          g && TC({ strategy: "referenceHidden", ...ue }),
        ],
      }),
      [_, z] = L6(ve),
      W = Pr(E);
    fo(() => {
      re && (W == null || W());
    }, [re, W]);
    const ne = (be = V.arrow) == null ? void 0 : be.x,
      ye = (ke = V.arrow) == null ? void 0 : ke.y,
      he = ((Je = V.arrow) == null ? void 0 : Je.centerOffset) !== 0,
      [Se, fe] = w.useState();
    return (
      fo(() => {
        m && fe(window.getComputedStyle(m).zIndex);
      }, [m]),
      p.jsx("div", {
        ref: ie.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...pe,
          transform: re ? pe.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: Se,
          "--radix-popper-transform-origin": [
            (it = V.transformOrigin) == null ? void 0 : it.x,
            (je = V.transformOrigin) == null ? void 0 : je.y,
          ].join(" "),
          ...(((J = V.hide) == null ? void 0 : J.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: p.jsx(zC, {
          scope: n,
          placedSide: _,
          onArrowChange: N,
          arrowX: ne,
          arrowY: ye,
          shouldHideArrow: he,
          children: p.jsx(It.div, {
            "data-side": _,
            "data-align": z,
            ...y,
            ref: b,
            style: { ...y.style, animation: re ? void 0 : "none" },
          }),
        }),
      })
    );
  });
A6.displayName = o1;
var M6 = "PopperArrow",
  $C = { top: "bottom", right: "left", bottom: "top", left: "right" },
  k6 = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = ZC(M6, r),
      a = $C[i.placedSide];
    return p.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [a]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: p.jsx(HC, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
k6.displayName = M6;
function UC(e) {
  return e !== null;
}
var BC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var M, m, v;
    const { placement: n, rects: r, middlewareData: o } = t,
      a = ((M = o.arrow) == null ? void 0 : M.centerOffset) !== 0,
      l = a ? 0 : e.arrowWidth,
      c = a ? 0 : e.arrowHeight,
      [u, h] = L6(n),
      f = { start: "0%", center: "50%", end: "100%" }[h],
      g = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + l / 2,
      C = (((v = o.arrow) == null ? void 0 : v.y) ?? 0) + c / 2;
    let E = "",
      y = "";
    return (
      u === "bottom"
        ? ((E = a ? f : `${g}px`), (y = `${-c}px`))
        : u === "top"
        ? ((E = a ? f : `${g}px`), (y = `${r.floating.height + c}px`))
        : u === "right"
        ? ((E = `${-c}px`), (y = a ? f : `${C}px`))
        : u === "left" &&
          ((E = `${r.floating.width + c}px`), (y = a ? f : `${C}px`)),
      { data: { x: E, y } }
    );
  },
});
function L6(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var FC = b6,
  N6 = j6,
  WC = A6,
  GC = k6,
  i1 = "Popover",
  [P6, Dj] = xc(i1, [S6]),
  el = S6(),
  [YC, Zr] = P6(i1),
  O6 = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: a = !1,
      } = e,
      l = el(t),
      c = w.useRef(null),
      [u, h] = w.useState(!1),
      [f = !1, g] = zv({ prop: r, defaultProp: o, onChange: i });
    return p.jsx(FC, {
      ...l,
      children: p.jsx(YC, {
        scope: t,
        contentId: ys(),
        triggerRef: c,
        open: f,
        onOpenChange: g,
        onOpenToggle: w.useCallback(() => g((C) => !C), [g]),
        hasCustomAnchor: u,
        onCustomAnchorAdd: w.useCallback(() => h(!0), []),
        onCustomAnchorRemove: w.useCallback(() => h(!1), []),
        modal: a,
        children: n,
      }),
    });
  };
O6.displayName = i1;
var R6 = "PopoverAnchor",
  KC = w.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Zr(R6, n),
      i = el(n),
      { onCustomAnchorAdd: a, onCustomAnchorRemove: l } = o;
    return (
      w.useEffect(() => (a(), () => l()), [a, l]),
      p.jsx(N6, { ...i, ...r, ref: t })
    );
  });
KC.displayName = R6;
var T6 = "PopoverTrigger",
  I6 = w.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Zr(T6, n),
      i = el(n),
      a = tn(t, o.triggerRef),
      l = p.jsx(It.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": z6(o.open),
        ...r,
        ref: a,
        onClick: Bt(e.onClick, o.onOpenToggle),
      });
    return o.hasCustomAnchor
      ? l
      : p.jsx(N6, { asChild: !0, ...i, children: l });
  });
I6.displayName = T6;
var a1 = "PopoverPortal",
  [qC, XC] = P6(a1, { forceMount: void 0 }),
  D6 = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: o } = e,
      i = Zr(a1, t);
    return p.jsx(qC, {
      scope: t,
      forceMount: n,
      children: p.jsx(yi, {
        present: n || i.open,
        children: p.jsx(P0, { asChild: !0, container: o, children: r }),
      }),
    });
  };
D6.displayName = a1;
var pi = "PopoverContent",
  H6 = w.forwardRef((e, t) => {
    const n = XC(pi, e.__scopePopover),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Zr(pi, e.__scopePopover);
    return p.jsx(yi, {
      present: r || i.open,
      children: i.modal
        ? p.jsx(QC, { ...o, ref: t })
        : p.jsx(JC, { ...o, ref: t }),
    });
  });
H6.displayName = pi;
var QC = w.forwardRef((e, t) => {
    const n = Zr(pi, e.__scopePopover),
      r = w.useRef(null),
      o = tn(t, r),
      i = w.useRef(!1);
    return (
      w.useEffect(() => {
        const a = r.current;
        if (a) return Jv(a);
      }, []),
      p.jsx(O0, {
        as: Ya,
        allowPinchZoom: !0,
        children: p.jsx(_6, {
          ...e,
          ref: o,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Bt(e.onCloseAutoFocus, (a) => {
            var l;
            a.preventDefault(),
              i.current || (l = n.triggerRef.current) == null || l.focus();
          }),
          onPointerDownOutside: Bt(
            e.onPointerDownOutside,
            (a) => {
              const l = a.detail.originalEvent,
                c = l.button === 0 && l.ctrlKey === !0,
                u = l.button === 2 || c;
              i.current = u;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: Bt(e.onFocusOutside, (a) => a.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  JC = w.forwardRef((e, t) => {
    const n = Zr(pi, e.__scopePopover),
      r = w.useRef(!1),
      o = w.useRef(!1);
    return p.jsx(_6, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var a, l;
        (a = e.onCloseAutoFocus) == null || a.call(e, i),
          i.defaultPrevented ||
            (r.current || (l = n.triggerRef.current) == null || l.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var c, u;
        (c = e.onInteractOutside) == null || c.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const a = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(a)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  _6 = w.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: a,
        onEscapeKeyDown: l,
        onPointerDownOutside: c,
        onFocusOutside: u,
        onInteractOutside: h,
        ...f
      } = e,
      g = Zr(pi, n),
      C = el(n);
    return (
      Bv(),
      p.jsx(N0, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        children: p.jsx(L0, {
          asChild: !0,
          disableOutsidePointerEvents: a,
          onInteractOutside: h,
          onEscapeKeyDown: l,
          onPointerDownOutside: c,
          onFocusOutside: u,
          onDismiss: () => g.onOpenChange(!1),
          children: p.jsx(WC, {
            "data-state": z6(g.open),
            role: "dialog",
            id: g.contentId,
            ...C,
            ...f,
            ref: t,
            style: {
              ...f.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  V6 = "PopoverClose",
  ej = w.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = Zr(V6, n);
    return p.jsx(It.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: Bt(e.onClick, () => o.onOpenChange(!1)),
    });
  });
ej.displayName = V6;
var tj = "PopoverArrow",
  nj = w.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      o = el(n);
    return p.jsx(GC, { ...o, ...r, ref: t });
  });
nj.displayName = tj;
function z6(e) {
  return e ? "open" : "closed";
}
var rj = O6,
  oj = I6,
  ij = D6,
  Z6 = H6;
const aj = rj,
  lj = oj,
  $6 = w.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, o) =>
      p.jsx(ij, {
        children: p.jsx(Z6, {
          ref: o,
          align: t,
          sideOffset: n,
          className: Fe(
            "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
$6.displayName = Z6.displayName;
const sj = () => {
  const e = w.useRef(),
    [t, n] = w.useState([]),
    [r, o] = w.useState(!1),
    [i, a] = w.useState("image"),
    l = new Tn();
  l.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
    "667f66890024fecae008"
  );
  const c = new tr(l),
    u = new $0(l),
    h = async () => {
      try {
        o(!0);
        const C = await c.listDocuments(
          "6680506f003dd11a430b",
          "668e86e7000a684c3450",
          []
        );
        n(C.documents), o(!1);
      } catch (C) {
        console.error("Error fetching data:", C), o(!1);
      }
    };
  w.useEffect(() => {
    h();
  }, []);
  const f = async (C) => {
      try {
        const E = await u.createFile("668057df00116ffcc42d", "unique()", C);
        return `https://appwrite.mms-it.com/v1/storage/buckets/${E.bucketId}/files/${E.$id}/view?project=${l.config.project}`;
      } catch (E) {
        throw (console.error("Error uploading file:", E), E);
      }
    },
    g = async (C) => {
      C.preventDefault();
      try {
        o(!0);
        const E = C.target.elements.file;
        if (E.files.length === 0) {
          alert("Please select a file.");
          return;
        }
        const y = E.files[0],
          m = { url: await f(y), type: i };
        t.length > 0
          ? await c.updateDocument(
              "6680506f003dd11a430b",
              "668e86e7000a684c3450",
              t[0].$id,
              m
            )
          : await c.createDocument(
              "6680506f003dd11a430b",
              "668e86e7000a684c3450",
              "unique()",
              m
            ),
          e.current.click(),
          h(),
          o(!1);
      } catch (E) {
        console.error("Error submitting data:", E), o(!1);
      }
    };
  return p.jsxs("div", {
    className: "pb-4",
    children: [
      p.jsxs("div", {
        className: "pb-4 flex justify-between items-center",
        children: [
          p.jsxs("div", {
            className: "flex gap-3 items-center",
            children: [
              p.jsx("p", {
                className: "font-normal text-lg",
                children: "Media of About Us section",
              }),
              p.jsxs(aj, {
                children: [
                  p.jsx(lj, {
                    className: "text-xs",
                    children: p.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      fill: "#030202",
                      viewBox: "0 0 256 256",
                      children: p.jsx("path", {
                        d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z",
                      }),
                    }),
                  }),
                  p.jsx($6, {
                    className: "text-sm",
                    children:
                      "About us section can display only one photo or video. When you add new, the current one will be deleted!",
                  }),
                ],
              }),
            ],
          }),
          p.jsx(q0, {
            closeRef: e,
            children: p.jsxs("form", {
              onSubmit: g,
              children: [
                p.jsxs("div", {
                  className: "flex items-center",
                  children: [
                    p.jsx("label", { className: "mr-2", children: "Type:" }),
                    p.jsx("input", {
                      type: "radio",
                      value: "image",
                      checked: i === "image",
                      onChange: () => a("image"),
                    }),
                    p.jsx("label", {
                      className: "mr-2 ml-2",
                      children: "Image",
                    }),
                    p.jsx("input", {
                      type: "radio",
                      value: "video",
                      checked: i === "video",
                      onChange: () => a("video"),
                    }),
                    p.jsx("label", {
                      className: "mr-2 ml-2",
                      children: "Video",
                    }),
                  ],
                }),
                p.jsx(zt, { type: "file", className: " mt-3", name: "file" }),
                p.jsxs("div", {
                  className: "flex mb-1.5 justify-between items-center mt-8",
                  children: [
                    p.jsx(Be, {
                      onClick: () => e.current.click(),
                      className: "text-black",
                      type: "button",
                      variant: "link",
                      children: "Cancel",
                    }),
                    p.jsx(Be, {
                      disabled: r,
                      className: "bg-black hover:bg-black/90",
                      size: "sm",
                      type: "submit",
                      children: "Save Changes",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      p.jsx("hr", { className: "py-3" }),
      t.map(({ url: C, type: E }, y) =>
        p.jsx(
          "div",
          {
            children:
              E === "image"
                ? p.jsx("img", { src: C, alt: "About Us Media" })
                : p.jsxs("video", {
                    controls: !0,
                    children: [
                      p.jsx("source", { src: C, type: "video/mp4" }),
                      "Your browser does not support the video tag.",
                    ],
                  }),
          },
          y
        )
      ),
    ],
  });
};
var U6 = "AlertDialog",
  [cj, Hj] = xc(U6, [t8]),
  rr = t8(),
  B6 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = rr(t);
    return p.jsx(v8, { ...r, ...n, modal: !0 });
  };
B6.displayName = U6;
var uj = "AlertDialogTrigger",
  F6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = rr(n);
    return p.jsx(y8, { ...o, ...r, ref: t });
  });
F6.displayName = uj;
var dj = "AlertDialogPortal",
  W6 = (e) => {
    const { __scopeAlertDialog: t, ...n } = e,
      r = rr(t);
    return p.jsx(w8, { ...r, ...n });
  };
W6.displayName = dj;
var fj = "AlertDialogOverlay",
  G6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = rr(n);
    return p.jsx(H0, { ...o, ...r, ref: t });
  });
G6.displayName = fj;
var ri = "AlertDialogContent",
  [pj, hj] = cj(ri),
  Y6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, children: r, ...o } = e,
      i = rr(n),
      a = w.useRef(null),
      l = tn(t, a),
      c = w.useRef(null);
    return p.jsx(_5, {
      contentName: ri,
      titleName: K6,
      docsSlug: "alert-dialog",
      children: p.jsx(pj, {
        scope: n,
        cancelRef: c,
        children: p.jsxs(_0, {
          role: "alertdialog",
          ...i,
          ...o,
          ref: l,
          onOpenAutoFocus: Bt(o.onOpenAutoFocus, (u) => {
            var h;
            u.preventDefault(),
              (h = c.current) == null || h.focus({ preventScroll: !0 });
          }),
          onPointerDownOutside: (u) => u.preventDefault(),
          onInteractOutside: (u) => u.preventDefault(),
          children: [p.jsx(Ov, { children: r }), p.jsx(gj, { contentRef: a })],
        }),
      }),
    });
  });
Y6.displayName = ri;
var K6 = "AlertDialogTitle",
  q6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = rr(n);
    return p.jsx(V0, { ...o, ...r, ref: t });
  });
q6.displayName = K6;
var X6 = "AlertDialogDescription",
  Q6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = rr(n);
    return p.jsx(z0, { ...o, ...r, ref: t });
  });
Q6.displayName = X6;
var mj = "AlertDialogAction",
  J6 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      o = rr(n);
    return p.jsx(Ec, { ...o, ...r, ref: t });
  });
J6.displayName = mj;
var e4 = "AlertDialogCancel",
  t4 = w.forwardRef((e, t) => {
    const { __scopeAlertDialog: n, ...r } = e,
      { cancelRef: o } = hj(e4, n),
      i = rr(n),
      a = tn(t, o);
    return p.jsx(Ec, { ...i, ...r, ref: a });
  });
t4.displayName = e4;
var gj = ({ contentRef: e }) => {
    const t = `\`${ri}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${ri}\` by passing a \`${X6}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${ri}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;
    return (
      w.useEffect(() => {
        var r;
        document.getElementById(
          (r = e.current) == null ? void 0 : r.getAttribute("aria-describedby")
        ) || console.warn(t);
      }, [t, e]),
      null
    );
  },
  vj = B6,
  yj = F6,
  wj = W6,
  n4 = G6,
  r4 = Y6,
  o4 = J6,
  i4 = t4,
  a4 = q6,
  l4 = Q6;
const xj = vj,
  Sj = yj,
  Ej = wj,
  s4 = w.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(n4, {
      className: Fe(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
s4.displayName = n4.displayName;
const c4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsxs(Ej, {
    children: [
      p.jsx(s4, {}),
      p.jsx(r4, {
        ref: n,
        className: Fe(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...t,
      }),
    ],
  })
);
c4.displayName = r4.displayName;
const u4 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: Fe("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
u4.displayName = "AlertDialogHeader";
const d4 = ({ className: e, ...t }) =>
  p.jsx("div", {
    className: Fe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t,
  });
d4.displayName = "AlertDialogFooter";
const f4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(a4, { ref: n, className: Fe("text-lg font-semibold", e), ...t })
);
f4.displayName = a4.displayName;
const p4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(l4, { ref: n, className: Fe("text-sm text-muted-foreground", e), ...t })
);
p4.displayName = l4.displayName;
const h4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(o4, { ref: n, className: Fe(k0(), e), ...t })
);
h4.displayName = o4.displayName;
const m4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx(i4, {
    ref: n,
    className: Fe(k0({ variant: "outline" }), "mt-2 sm:mt-0", e),
    ...t,
  })
);
m4.displayName = i4.displayName;
const Nf = ({ run: e }) =>
    p.jsxs(xj, {
      children: [
        p.jsx(Sj, {
          asChild: !0,
          children: p.jsx(Be, {
            size: "sm",
            variant: "outline",
            children: "Del",
          }),
        }),
        p.jsxs(c4, {
          children: [
            p.jsxs(u4, {
              children: [
                p.jsx(f4, { children: "Are You Sure?" }),
                p.jsx(p4, { children: "This action can't be undone!" }),
              ],
            }),
            p.jsxs(d4, {
              children: [
                p.jsx(m4, { children: "Cancel" }),
                p.jsx(h4, {
                  className: "bg-black hover:bg-black/90",
                  onClick: e,
                  children: "Yes, Delete this!",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  bj = () => {
    const e = w.useRef(),
      [t, n] = w.useState(!1),
      [r, o] = w.useState([]),
      [i, a] = w.useState(!1),
      [l, c] = w.useState(""),
      u = new Tn();
    u.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const h = new tr(u),
      f = async () => {
        try {
          a(!0);
          const E = await h.listDocuments(
            "6680506f003dd11a430b",
            "6687f441001d1490e932",
            []
          );
          o(E.documents), a(!1);
        } catch (E) {
          console.error("Error fetching data:", E), a(!1);
        }
      };
    w.useEffect(() => {
      f();
    }, []);
    const g = async (E) => {
        E.preventDefault();
        try {
          const y = { title: l, type: l, data: e.current.value };
          await h.createDocument(
            "6680506f003dd11a430b",
            "6687f441001d1490e932",
            "unique()",
            y
          ),
            n(!1),
            f();
        } catch (y) {
          console.log(y), console.error("Error submitting data:", y);
        }
      },
      C = async (E) => {
        try {
          await h.deleteDocument(
            "6680506f003dd11a430b",
            "6687f441001d1490e932",
            E
          ),
            f();
        } catch (y) {
          console.error("Error deleting document:", y);
        }
      };
    return p.jsxs("div", {
      className: "pb-4",
      children: [
        p.jsx("div", {
          className: "pb-4 flex justify-between items-center",
          children: p.jsx("div", {
            className: "space-y-2",
            children: p.jsx("p", {
              className: "font-normal text-lg",
              children: "Your Contact Data",
            }),
          }),
        }),
        p.jsx("hr", { className: "py-3" }),
        i
          ? p.jsx("div", {
              className: "grid grid-cols-3 gap-8",
              children: p.jsx("div", {
                className: "bg-white rounded space-y-4 p-8",
                children: p.jsxs("div", {
                  className: "space-y-3 ",
                  children: [
                    p.jsxs("div", {
                      className: "text-base font-medium",
                      children: [
                        p.jsx("div", {
                          className: "animate-pulse h-3 bg-secondary",
                        }),
                        p.jsx("div", {
                          className: "animate-pulse h-3 bg-secondary",
                        }),
                      ],
                    }),
                    p.jsx("div", {
                      className: "animate-pulse h-3 bg-secondary",
                    }),
                    p.jsx("div", {
                      className: "animate-pulse h-3 bg-secondary",
                    }),
                  ],
                }),
              }),
            })
          : p.jsxs("div", {
              className: "bg-white w-1/3 rounded space-y-4 p-8",
              children: [
                p.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    p.jsxs("div", {
                      className: " flex justify-between items-center",
                      children: [
                        p.jsx("p", {
                          className: "text-lg font-medium",
                          children: "Phone",
                        }),
                        p.jsx(Be, {
                          onClick: () => {
                            n(!t), c("phone");
                          },
                          variant: "ghost",
                          children:
                            t && l == "phone" ? "Cancel" : p.jsx(Ef, {}),
                        }),
                      ],
                    }),
                    r
                      .filter(({ type: E }) => E.toLowerCase() == "phone")
                      .map(({ data: E, $id: y }, M) =>
                        p.jsxs(
                          "div",
                          {
                            className: "flex gap-3 items-center",
                            children: [
                              p.jsx("p", { children: E }),
                              r.filter(
                                ({ type: m }) => m.toLowerCase() == "phone"
                              ).length !== 1 && p.jsx(Nf, { run: () => C(y) }),
                            ],
                          },
                          M
                        )
                      ),
                    t &&
                      l == "phone" &&
                      p.jsx("form", {
                        onSubmit: g,
                        children: p.jsxs("div", {
                          className: " gap-3 flex",
                          children: [
                            p.jsx(zt, { required: !0, ref: e, type: "text" }),
                            p.jsx(Be, {
                              className: "bg-black hover:bg-black/90",
                              children: p.jsx($h, {}),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
                p.jsx("hr", {}),
                p.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    p.jsxs("div", {
                      className: " flex justify-between items-center",
                      children: [
                        p.jsx("p", {
                          className: "text-lg font-medium",
                          children: "Email",
                        }),
                        p.jsx(Be, {
                          onClick: () => {
                            n(!t), c("email");
                          },
                          variant: "ghost",
                          children:
                            t && l == "email" ? "Cancel" : p.jsx(Ef, {}),
                        }),
                      ],
                    }),
                    r
                      .filter(({ type: E }) => E.toLowerCase() == "email")
                      .map(({ data: E, $id: y }, M) =>
                        p.jsxs(
                          "div",
                          {
                            className: "flex gap-3 items-center",
                            children: [
                              p.jsx("p", { children: E }),
                              r.filter(
                                ({ type: m }) => m.toLowerCase() == "email"
                              ).length !== 1 && p.jsx(Nf, { run: () => C(y) }),
                            ],
                          },
                          M
                        )
                      ),
                    t &&
                      l == "email" &&
                      p.jsx("form", {
                        onSubmit: g,
                        children: p.jsxs("div", {
                          className: " gap-3 flex",
                          children: [
                            p.jsx(zt, { required: !0, ref: e, type: "text" }),
                            p.jsx(Be, {
                              className: "bg-black hover:bg-black/90",
                              children: p.jsx($h, {}),
                            }),
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
      ],
    });
  };
var Cj = "Label",
  g4 = w.forwardRef((e, t) =>
    p.jsx(It.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
g4.displayName = Cj;
var v4 = g4;
const jj = A0(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Do = w.forwardRef(({ className: e, ...t }, n) =>
    p.jsx(v4, { ref: n, className: Fe(jj(), e), ...t })
  );
Do.displayName = v4.displayName;
const y4 = w.forwardRef(({ className: e, ...t }, n) =>
  p.jsx("textarea", {
    className: Fe(
      "flex min-h-[60px] w-full rounded-md border border-black/50 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
y4.displayName = "Textarea";
const Aj = () => {
    const [e, t] = w.useState([]),
      [n, r] = w.useState(!0),
      [o, i] = w.useState({ status: !1, msg: "" }),
      a = w.useRef(null),
      [l, c] = w.useState({
        photo: null,
        name: "",
        position: "",
        organization: "",
        review: "",
      }),
      u = (m) => {
        const { name: v, value: b, files: j } = m.target;
        c(j ? { ...l, [v]: j[0] } : { ...l, [v]: b });
      },
      h = new Tn();
    h.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const f = new tr(h),
      g = new $0(h),
      C = async () => {
        try {
          const m = await f.listDocuments(
            "6680506f003dd11a430b",
            "668057a7002f221d1adc",
            []
          );
          t(m.documents), r(!1), i({ status: !1, msg: "" });
        } catch (m) {
          i({ status: !0, msg: "Something Went Wrong" }),
            console.log(m),
            console.error("Error fetching data:", m);
        }
      };
    w.useEffect(() => {
      C();
    }, []);
    const E = async (m) => {
        try {
          const v = await g.createFile("668057df00116ffcc42d", "unique()", m),
            b = `https://appwrite.mms-it.com/v1/storage/buckets/${v.bucketId}/files/${v.$id}/view?project=${h.config.project}`;
          return i({ status: !1, msg: "" }), b;
        } catch (v) {
          throw (
            (i({ status: !0, msg: "Something Went Wrong" }),
            console.error("Error uploading photo:", v),
            v)
          );
        }
      },
      y = async (m) => {
        m.preventDefault(), r(!0);
        try {
          const v = await E(l.photo),
            b = {
              name: l.name,
              position: l.position,
              organization: l.organization,
              message: l.review,
              photo: v,
            },
            j = await f.createDocument(
              "6680506f003dd11a430b",
              "668057a7002f221d1adc",
              "unique()",
              b
            );
          r(!1),
            a.current.click(),
            c({
              photo: null,
              name: "",
              position: "",
              organization: "",
              review: "",
            }),
            i({ status: !1, msg: "" }),
            C();
        } catch (v) {
          r(!1),
            i({ status: !0, msg: "Something Went Wrong" }),
            console.error("Error submitting data:", v);
        }
      },
      M = async (m) => {
        try {
          const v = await f.deleteDocument(
            "6680506f003dd11a430b",
            "668057a7002f221d1adc",
            m
          );
          console.log(v), t(e.filter((b) => b.$id !== m));
        } catch (v) {
          console.error("Error deleting document:", v);
        }
      };
    return p.jsxs("div", {
      className: "pb-4",
      children: [
        p.jsxs("div", {
          className: "pb-4 flex justify-between items-center",
          children: [
            p.jsx("div", {
              className: "space-y-2",
              children: p.jsx("p", {
                className: "font-normal text-lg",
                children: "Your Clients' Reviews",
              }),
            }),
            p.jsx(q0, {
              closeRef: a,
              children: p.jsxs("form", {
                onSubmit: y,
                className: "space-y-3",
                children: [
                  p.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      p.jsx(Do, { children: "Photo" }),
                      p.jsx(zt, {
                        required: !0,
                        type: "file",
                        name: "photo",
                        onChange: u,
                      }),
                      l.photo &&
                        p.jsx("img", {
                          className:
                            " w-[200px] mx-auto object-contain h-[200px]",
                          src: URL.createObjectURL(l.photo),
                          alt: "preview",
                        }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      p.jsx(Do, { children: "Name" }),
                      p.jsx(zt, {
                        required: !0,
                        type: "text",
                        name: "name",
                        value: l.name,
                        onChange: u,
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex gap-3",
                    children: [
                      p.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          p.jsx(Do, { children: "Position" }),
                          p.jsx(zt, {
                            required: !0,
                            type: "text",
                            name: "position",
                            value: l.position,
                            onChange: u,
                          }),
                        ],
                      }),
                      p.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          p.jsx(Do, { children: "Organization" }),
                          p.jsx(zt, {
                            required: !0,
                            type: "text",
                            name: "organization",
                            value: l.organization,
                            onChange: u,
                          }),
                        ],
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      p.jsx(Do, { children: "Review" }),
                      p.jsx(y4, {
                        name: "review",
                        value: l.review,
                        onChange: u,
                      }),
                    ],
                  }),
                  p.jsxs("div", {
                    className: "flex mb-1.5 justify-between items-center mt-8",
                    children: [
                      p.jsx(Be, {
                        onClick: () => a.current.click(),
                        className: "text-black",
                        type: "button",
                        variant: "link",
                        children: "Cancel",
                      }),
                      p.jsx(Be, {
                        disabled: n,
                        className: "bg-black hover:bg-black/90",
                        size: "sm",
                        type: "submit",
                        children: "Save Changes",
                      }),
                    ],
                  }),
                  o &&
                    p.jsx("p", {
                      className: " text-sm text-red-700",
                      children: o.msg,
                    }),
                ],
              }),
            }),
          ],
        }),
        p.jsx("hr", { className: "py-3" }),
        n
          ? p.jsx("div", {
              className: "grid grid-cols-3 gap-8",
              children: [...Array(9)].map((m, v) =>
                p.jsxs(
                  "div",
                  {
                    className: " bg-white rounded space-y-4 p-8",
                    children: [
                      p.jsx("div", {
                        className:
                          " w-[100px] h-[100px] mx-auto rounded-lg bg-secondary animate-pulse",
                      }),
                      p.jsxs("div", {
                        className: "space-y-3 ",
                        children: [
                          p.jsxs("div", {
                            className: "text-base font-medium",
                            children: [
                              p.jsx("div", {
                                className: " animate-pulse h-3 bg-secondary",
                              }),
                              p.jsx("div", {
                                className: " animate-pulse h-3 bg-secondary",
                              }),
                            ],
                          }),
                          p.jsx("div", {
                            className: " animate-pulse h-3 bg-secondary",
                          }),
                          p.jsx("div", {
                            className: " animate-pulse h-3 bg-secondary",
                          }),
                        ],
                      }),
                    ],
                  },
                  v
                )
              ),
            })
          : p.jsx("div", {
              className: "grid grid-cols-3 gap-8",
              children:
                e == null
                  ? void 0
                  : e.map(
                      (
                        {
                          photo: m,
                          name: v,
                          message: b,
                          organization: j,
                          position: N,
                          $id: O,
                        },
                        P
                      ) =>
                        p.jsxs(
                          "div",
                          {
                            className: "bg-white rounded space-y-4 p-8",
                            children: [
                              p.jsx("div", {
                                className: " flex justify-end",
                                children: p.jsx(Nf, { run: () => M(O) }),
                              }),
                              p.jsx("div", {
                                className: "",
                                children: p.jsx("img", {
                                  className:
                                    "mx-auto rounded-lg w-[100px] shadow-lg object-cover h-[100px]",
                                  src: m,
                                  alt: "client",
                                }),
                              }),
                              p.jsxs("div", {
                                className: "space-y-3 ",
                                children: [
                                  p.jsxs("div", {
                                    className: "text-base font-medium",
                                    children: [
                                      p.jsx("p", {
                                        className: "text-lg",
                                        children: v,
                                      }),
                                      p.jsxs("p", {
                                        className: "text-sm font-normal",
                                        children: [
                                          p.jsx("span", {
                                            className: "font-light",
                                            children: N,
                                          }),
                                          " of",
                                          " ",
                                          p.jsx("i", { children: j }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  p.jsx("p", {
                                    className: "text-xs text-black/70",
                                    children: b,
                                  }),
                                ],
                              }),
                            ],
                          },
                          P
                        )
                    ),
            }),
      ],
    });
  },
  Mj = () => p.jsx("div", { children: "Specialization" }),
  kj = () => {
    const { pathname: e } = Si(),
      [t, n] = w.useState("");
    return (
      w.useEffect(() => {
        const r = e.split("/"),
          o = r[r.length - 1];
        n(o);
      }, [e]),
      p.jsx("p", {
        className: "text-2xl capitalize font-medium",
        children: t == "" ? "Banner" : t,
      })
    );
  },
  Lj = () => {
    const e = [
      { icon: "", path: "", name: "Banner" },
      { icon: "", path: "/about", name: "About" },
      { icon: "", path: "/reviews", name: "Reviews" },
      { icon: "", path: "/contact", name: "Contact" },
    ];
    return p.jsx("div", {
      children: p.jsxs("div", {
        className: "space-y-8",
        children: [
          p.jsx("p", {
            className: " text-black text-lg font-medium",
            children: "NSD Co.Ltd",
          }),
          p.jsx("ul", {
            className: " space-y-5",
            children: e.map(({ name: t, icon: n, path: r }, o) =>
              p.jsx(
                "li",
                {
                  className: "sidebar",
                  children: p.jsxs(Ib, {
                    to: `/dashboard${r}`,
                    end: !0,
                    className:
                      "flex gap-3 items-center cursor-pointer text-black select-none hover:bg-secondary capitalize text-sm px-3 py-2 mb-2 rounded-md",
                    children: [n, " ", t],
                  }),
                },
                o
              )
            ),
          }),
        ],
      }),
    });
  },
  Nj = () => {
    const e = K0(),
      t = () => {
        localStorage.removeItem("cookieFallback"), e("/login");
      };
    return p.jsxs("div", {
      className: " grid grid-cols-12 h-screen",
      children: [
        p.jsx("div", {
          className: " md:col-span-3 xl:col-span-2 overflow-scroll",
          children: p.jsx("div", {
            className: "p-5 h-screen",
            children: p.jsxs("div", {
              className: "flex h-full justify-between flex-col",
              children: [
                p.jsx(Lj, {}),
                p.jsx(Be, {
                  onClick: t,
                  variant: "outline",
                  size: "sm",
                  children: "Log Out",
                }),
              ],
            }),
          }),
        }),
        p.jsx("div", {
          className:
            "md:col-span-9 xl:col-span-10 bg-secondary max-h-full overflow-scroll",
          children: p.jsx("div", {
            className: "py-5 mb-12 h-screen bg-secondary",
            children: p.jsx(_r, {
              children: p.jsxs("div", {
                className: " space-y-3 h-[93%]",
                children: [p.jsx(kj, {}), p.jsx(Sb, {})],
              }),
            }),
          }),
        }),
      ],
    });
  },
  w4 = new Tn();
w4.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
  "667f66890024fecae008"
);
const g2 = new F5(w4),
  Pj = () => {
    const e = K0(),
      [t, n] = w.useState(null),
      [r, o] = w.useState(""),
      [i, a] = w.useState(""),
      l = async (c) => {
        c.preventDefault();
        try {
          await g2.createEmailPasswordSession(r, i),
            n(await g2.get()),
            o(""),
            a("");
        } catch (u) {
          console.error("Login failed", u);
        }
      };
    return (
      w.useEffect(() => {
        (t || localStorage.getItem("cookieFallback")) && e("/dashboard");
      }, [t, localStorage.getItem("cookieFallback")]),
      p.jsx("div", {
        className:
          " w-[50%] min-h-screen flex justify-center items-center mx-auto",
        children: p.jsxs("div", {
          className: "",
          children: [
            p.jsxs("div", {
              className: "text-start mb-3",
              children: [
                p.jsx("p", {
                  className: "text-3xl mb-1.5 tracking-wider font-semibold",
                  children: "NSD",
                }),
                p.jsxs("p", {
                  className: "text-base tracking-wider font-medium",
                  children: [
                    "Welcome Back!",
                    p.jsxs("span", {
                      className: "font-normal opacity-75",
                      children: [" ", "Please enter details"],
                    }),
                  ],
                }),
              ],
            }),
            p.jsxs("form", {
              onSubmit: l,
              children: [
                p.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    p.jsx(zt, {
                      type: "email",
                      placeholder: "Email",
                      value: r,
                      onChange: (c) => o(c.target.value),
                      className:
                        "block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                      required: !0,
                    }),
                    p.jsx(zt, {
                      type: "password",
                      placeholder: "Password",
                      value: i,
                      onChange: (c) => a(c.target.value),
                      className:
                        "block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",
                      required: !0,
                    }),
                  ],
                }),
                p.jsx("button", {
                  type: "submit",
                  className:
                    "block mt-11 w-full bg-blue-500 text-white p-3 rounded-md",
                  children: "Login to account",
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Oj = () => {
    var E, y, M, m, v, b;
    const [e, t] = w.useState(!1),
      [n, r] = w.useState([]),
      [o, i] = w.useState(!0),
      [a, l] = w.useState(null),
      c = new Tn();
    c.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const u = new tr(c),
      h = async () => {
        try {
          const j = await u.listDocuments(
            "6680506f003dd11a430b",
            "668d4fb5000e2603bb3b",
            []
          );
          console.log(j), r(j.documents);
        } catch (j) {
          console.error("Error fetching data:", j), l(j);
        } finally {
          i(!1);
        }
      };
    w.useEffect(() => {
      h();
    }, []);
    const f = () => {
        t(!0);
      },
      g = async () => {
        try {
          const j = n[0].$id;
          console.log(j),
            await u.updateDocument(
              "6680506f003dd11a430b",
              "668d4fb5000e2603bb3b",
              j,
              {
                smallTitle: n[0].smallTitle,
                mainTitle: n[0].mainTitle,
                heroText: n[0].heroText,
              }
            ),
            t(!1),
            h();
        } catch (j) {
          console.error("Error saving data:", j), l(j);
        }
      },
      C = () => {
        t(!1), h();
      };
    return p.jsxs("div", {
      className: "space-y-3",
      children: [
        p.jsxs("div", {
          className: "flex gap-3 items-center",
          children: [
            p.jsx("p", { className: "text-lg font-medium", children: "Title" }),
            p.jsx(Be, {
              variant: "outline",
              size: "sm",
              onClick: f,
              children: p.jsx(G8, {}),
            }),
          ],
        }),
        p.jsxs("div", {
          className: `bg-white ${e ? "space-y-3" : "space-y-0.5"} p-5`,
          children: [
            n.length > 0 &&
              p.jsx(p.Fragment, {
                children: e
                  ? p.jsx(zt, {
                      type: "text",
                      value: (E = n[0]) == null ? void 0 : E.smallTitle,
                      onChange: (j) =>
                        r([{ ...n[0], smallTitle: j.target.value }]),
                    })
                  : p.jsx("p", {
                      className: "font-light text-sm",
                      children: (y = n[0]) == null ? void 0 : y.smallTitle,
                    }),
              }),
            n.length > 0 &&
              p.jsx(p.Fragment, {
                children: e
                  ? p.jsx(zt, {
                      type: "text",
                      value: (M = n[0]) == null ? void 0 : M.mainTitle,
                      onChange: (j) =>
                        r([{ ...n[0], mainTitle: j.target.value }]),
                    })
                  : p.jsx("p", {
                      className: "font-medium text-lg",
                      children: (m = n[0]) == null ? void 0 : m.mainTitle,
                    }),
              }),
            n.length > 0 &&
              p.jsx(p.Fragment, {
                children: e
                  ? p.jsx(zt, {
                      type: "text",
                      value: (v = n[0]) == null ? void 0 : v.heroText,
                      onChange: (j) =>
                        r([{ ...n[0], heroText: j.target.value }]),
                    })
                  : p.jsx("p", {
                      className: "font-base text-xs",
                      children: (b = n[0]) == null ? void 0 : b.heroText,
                    }),
              }),
          ],
        }),
        e &&
          p.jsxs("div", {
            className: "flex gap-2",
            children: [
              p.jsx(Be, { onClick: g, children: "Save" }),
              p.jsx(Be, { variant: "outline", onClick: C, children: "Cancel" }),
            ],
          }),
      ],
    });
  };
var Rj = {
  VITE_API_BASE_URL: "https://appwrite.mms-it.com/v1",
  VITE_PROJECT_ID: "667f66890024fecae008",
  VITE_DATABASE_ID: "6680506f003dd11a430b",
  VITE_COLLECTION_ID: "6687f441001d1490e932",
  VITE_REVIEWS_COLLECTION_ID: "668057a7002f221d1adc",
  VITE_CONTACT_COLLECTION_ID: "6687f441001d1490e932",
  VITE_HERO_SLIDES1_COLLECTION_ID: "668e654100003e7cfea1",
  VITE_HERO_SLIDES2_COLLECTION_ID: "668e659200005a5fba69",
  VITE_HERO_SLIDES3_COLLECTION_ID: "668e65b30012aaa8d027",
  VITE_ABOUT_US_COLLECTION_ID: "668e86e7000a684c3450",
  VITE_HERO_CONTENT_COLLECTION_ID: "668d4fb5000e2603bb3b",
  VITE_BUCKET_ID: "668057df00116ffcc42d",
  BASE_URL: "/",
  MODE: "production",
  DEV: !1,
  PROD: !0,
  SSR: !1,
};
const Tj = () => {
    const e = w.useRef(),
      t = w.useRef(),
      n = w.useRef(),
      [r, o] = w.useState(!1),
      [i, a] = w.useState([]),
      [l, c] = w.useState(null),
      [u, h] = w.useState(!1),
      f = new Tn();
    f.setEndpoint("https://appwrite.mms-it.com/v1").setProject(
      "667f66890024fecae008"
    );
    const g = new $0(f),
      C = new tr(f),
      E = async () => {
        try {
          h(!0);
          const v = await C.listDocuments(
              "6680506f003dd11a430b",
              "668e654100003e7cfea1",
              []
            ),
            b = await C.listDocuments(
              "6680506f003dd11a430b",
              "668e659200005a5fba69",
              []
            ),
            j = await C.listDocuments(
              "6680506f003dd11a430b",
              "668e65b30012aaa8d027",
              []
            );
          a([...v.documents, ...b.documents, ...j.documents]);
        } catch (v) {
          console.error("Error fetching data:", v);
        } finally {
          h(!1);
        }
      };
    w.useEffect(() => {
      E();
    }, []);
    const y = async (v) => {
        try {
          const b = await g.createFile("668057df00116ffcc42d", "unique()", v);
          return `https://appwrite.mms-it.com/v1/storage/buckets/${b.bucketId}/files/${b.$id}/view?project=${f.config.project}`;
        } catch (b) {
          throw (console.error("Error uploading photo:", b), b);
        }
      },
      M = async (v) => {
        v.preventDefault();
        const b = await y(e.current.files[0]);
        try {
          h(!0);
          const j = { image: b };
          l
            ? await C.updateDocument(
                "6680506f003dd11a430b",
                l.$collectionId,
                l.$id,
                j
              )
            : await C.createDocument(
                "6680506f003dd11a430b",
                Rj.VITE_HERO_COLLECTION_ID,
                "unique()",
                j
              ),
            o(!1),
            c(null),
            E(),
            h(!1),
            n.current.click();
        } catch (j) {
          console.error("Error submitting data:", j), h(!1);
        }
      },
      m = (v) => {
        o(!0), c(v), t.current.click();
      };
    return p.jsxs("div", {
      className: "pb-4",
      children: [
        p.jsxs("div", {
          className: "pb-4 flex justify-between items-center",
          children: [
            p.jsx("div", {
              className: "flex gap-3 items-center",
              children: p.jsx("p", {
                className: "font-normal text-lg",
                children: "Landing page",
              }),
            }),
            p.jsx("div", {
              children: p.jsx(q0, {
                closeRef: n,
                openSheet: t,
                children: p.jsxs("form", {
                  onSubmit: M,
                  action: "",
                  children: [
                    p.jsx(zt, { required: !0, ref: e, type: "file" }),
                    p.jsxs("div", {
                      className:
                        "flex mb-1.5 justify-between items-center mt-8",
                      children: [
                        p.jsx(Be, {
                          onClick: () => n.current.click(),
                          className: "text-black",
                          type: "button",
                          variant: "link",
                          children: "Cancel",
                        }),
                        p.jsx(Be, {
                          disabled: u,
                          className: "bg-black hover:bg-black/90",
                          size: "sm",
                          type: "submit",
                          children: "Save Changes",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        p.jsx("hr", { className: "py-3" }),
        p.jsx(Oj, {}),
        p.jsxs("div", {
          className: "mt-3 space-y-3",
          children: [
            p.jsx("p", {
              className: "text-lg font-medium",
              children: "Background Photos of landing page",
            }),
            p.jsx("div", {
              className: "flex gap-3 w-full overflow-auto",
              children: i.map((v, b) =>
                p.jsxs(
                  "div",
                  {
                    className: "relative p-3",
                    children: [
                      p.jsx("img", {
                        src: v.image,
                        className: "w-[500px] h-[400px] object-cover",
                      }),
                      p.jsx("div", {
                        className: "z-50 top-3 p-3 right-3 absolute",
                        children: p.jsx(Be, {
                          onClick: () => m(v),
                          variant: "outline",
                          size: "sm",
                          children: p.jsx(Y8, {}),
                        }),
                      }),
                    ],
                  },
                  b
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  Ij = () => {
    const [e, t] = w.useState("home"),
      n = (o, i, a) => {
        var u, h, f, g;
        t(i.anchor),
          document.querySelectorAll(".section").forEach((C) => {
            C.classList.remove("up", "down", "next", "prev");
          });
        const c = document.querySelector(
          `#fullpage .section:nth-child(${i.index + 1})`
        );
        a === "up"
          ? (c.classList.add("up"),
            (u = c.nextElementSibling) == null || u.classList.add("next", "up"),
            (h = c.previousElementSibling) == null ||
              h.classList.add("prev", "up"))
          : (c.classList.add("down"),
            (f = c.nextElementSibling) == null ||
              f.classList.add("next", "down"),
            (g = c.previousElementSibling) == null ||
              g.classList.add("prev", "down"));
      },
      r = [
        p.jsx(yE, {}, "about"),
        p.jsx(xE, {}, "service"),
        p.jsx(EE, {}, "process"),
        p.jsx(LE, {}, "specializations"),
        p.jsx(OE, {}, "core"),
        p.jsx(RE, {}, "reviews"),
        p.jsx(TE, {}, "contact"),
      ];
    return p.jsxs(bb, {
      children: [
        p.jsx($n, {
          path: "/",
          element: p.jsxs(p.Fragment, {
            children: [
              p.jsx(B5, { activeSection: e }),
              p.jsx("div", { className: " h-16 " }),
              p.jsx(Dh, {
                scrollingSpeed: 1e3,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1500,
                sectionsColor: [
                  "white",
                  "white",
                  "white",
                  "white",
                  "white",
                  "white",
                  "white",
                ],
                anchors: [
                  "home",
                  "about",
                  "service",
                  "process",
                  "specializations",
                  "core",
                  "reviews",
                  "contact",
                ],
                verticalCentered: !1,
                navigation: !0,
                navigationPosition: "right",
                navigationTooltips: [
                  "home",
                  "about",
                  "service",
                  "process",
                  "specializations",
                  "core",
                  "reviews",
                  "contact",
                ],
                onLeave: n,
                render: ({ state: o, fullpageApi: i }) =>
                  p.jsxs(Dh.Wrapper, {
                    children: [
                      p.jsx("div", {
                        className: "section",
                        children: p.jsx(kS, {
                          slideDown: () => i.moveTo("service"),
                        }),
                      }),
                      r.map((a, l) =>
                        p.jsx("div", { className: "section", children: a }, l)
                      ),
                    ],
                  }),
              }),
            ],
          }),
        }),
        p.jsx($n, { element: p.jsx(Pj, {}), path: "/login" }),
        p.jsxs($n, {
          path: "/dashboard",
          element: p.jsx(Nj, {}),
          children: [
            p.jsx($n, { path: "", element: p.jsx(Tj, {}) }),
            p.jsx($n, { path: "about", element: p.jsx(sj, {}) }),
            p.jsx($n, { path: "contact", element: p.jsx(bj, {}) }),
            p.jsx($n, { path: "specialization", element: p.jsx(Mj, {}) }),
            p.jsx($n, { path: "reviews", element: p.jsx(Aj, {}) }),
          ],
        }),
      ],
    });
  };
Sd.createRoot(document.getElementById("root")).render(
  p.jsx(Pb, { children: p.jsx(Ij, {}) })
);
window.addEventListener("load", () => {
  console.clear();
});
