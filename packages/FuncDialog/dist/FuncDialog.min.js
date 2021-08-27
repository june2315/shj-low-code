!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(
        require('React'),
        require('ReactDOM'),
        require('antd'),
      ))
    : 'function' == typeof define && define.amd
    ? define(['React', 'ReactDOM', 'antd'], t)
    : 'object' == typeof exports
    ? (exports.ProFuncdialog = t(
        require('React'),
        require('ReactDOM'),
        require('antd'),
      ))
    : (e.ProFuncdialog = t(e.React, e.ReactDOM, e.antd));
})(this, function (e, t, r) {
  return (() => {
    'use strict';
    var n = {
        804: (t) => {
          t.exports = e;
        },
        196: (e) => {
          e.exports = t;
        },
        953: (e) => {
          e.exports = r;
        },
        64: (e, t, r) => {
          function n(e, t, r) {
            return (
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          r.d(t, { Z: () => n });
        },
        851: (e, t, r) => {
          function n() {
            return (n =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }).apply(this, arguments);
          }
          r.d(t, { Z: () => n });
        },
        930: (e, t, r) => {
          r.d(t, { Z: () => c });
          var n = r(64);
          function o(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function c(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? o(Object(r), !0).forEach(function (t) {
                    (0, n.Z)(e, t, r[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(r),
                  )
                : o(Object(r)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t),
                    );
                  });
            }
            return e;
          }
        },
        589: (e, t, r) => {
          r.d(t, { Z: () => o });
          var n = r(762);
          function o(e, t) {
            if (null == e) return {};
            var r,
              o,
              c = (0, n.Z)(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (o = 0; o < a.length; o++)
                (r = a[o]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (c[r] = e[r]));
            }
            return c;
          }
        },
        762: (e, t, r) => {
          function n(e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (r = c[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          }
          r.d(t, { Z: () => n });
        },
      },
      o = {};
    function c(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var r = (o[e] = { exports: {} });
      return n[e](r, r.exports, c), r.exports;
    }
    (c.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return c.d(t, { a: t }), t;
    }),
      (c.d = (e, t) => {
        for (var r in t)
          c.o(t, r) &&
            !c.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (c.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var a = {};
    return (
      (() => {
        c.r(a), c.d(a, { destroyFns: () => f, default: () => p });
        var e = c(851),
          t = c(589),
          r = c(930),
          n = c(804),
          o = c.n(n),
          i = c(196),
          u = c.n(i),
          l = c(953),
          f = [];
        const p = function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            c = document.createElement('div');
          document.body.appendChild(c);
          var a = (0, r.Z)(
            (0, r.Z)({ maskClosable: !1 }, n),
            {},
            { close: d, visible: !0 },
          );
          function i() {
            var e = u().unmountComponentAtNode(c);
            e && c.parentNode && c.parentNode.removeChild(c);
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
              r[o] = arguments[o];
            var a = r.some(function (e) {
              return e && e.triggerCancel;
            });
            n.onCancel && a && n.onCancel.apply(n, r);
            for (var i = 0; i < f.length; i++) {
              var l = f[i];
              if (l === d) {
                f.splice(i, 1);
                break;
              }
            }
          }
          function p(e) {
            var t = null;
            '[object Function]' ===
              Object.prototype.toString.call(n.beforeClose) &&
              (t = n.beforeClose()),
              '[object Promise]' === Object.prototype.toString.call(t)
                ? t.then(function () {
                    return e.close({ triggerCancel: !0 });
                  })
                : e.close({ triggerCancel: !0 });
          }
          function s(r) {
            r.okText, r.cancelText, r.prefixCls;
            var n = (0, t.Z)(r, ['okText', 'cancelText', 'prefixCls']);
            setTimeout(function () {
              u().render(
                o().createElement(
                  l.Modal,
                  (0, e.Z)(
                    {
                      footer: null,
                      onCancel: function () {
                        return p(n);
                      },
                    },
                    n,
                  ),
                  n.content,
                ),
                c,
              );
            });
          }
          function d() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            s(
              (a = (0, r.Z)(
                (0, r.Z)({}, a),
                {},
                {
                  visible: !1,
                  afterClose: function () {
                    return i.apply(void 0, t);
                  },
                },
              )),
            );
          }
          function b(e) {
            s(
              (a =
                'function' == typeof e ? e(a) : (0, r.Z)((0, r.Z)({}, a), e)),
            );
          }
          return s(a), f.push(d), { destroy: d, update: b };
        };
      })(),
      a
    );
  })();
});
