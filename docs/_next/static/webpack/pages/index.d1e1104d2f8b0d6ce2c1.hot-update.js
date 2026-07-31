webpackHotUpdate_N_E("pages/index",{

/***/ "./component/personalProject/row.tsx":
/*!*******************************************!*\
  !*** ./component/personalProject/row.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalProjectRow; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_CommonRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/CommonRow */ "./component/common/CommonRow.tsx");
/* harmony import */ var _common_Util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Util */ "./component/common/Util.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common */ "./component/common/index.tsx");

var _jsxFileName = "C:\\Users\\softchain\\Desktop\\\uAE40\uC9C0\uC6D0\\\uB0B4 \uAE43\uD5C8\uBE0C \uBE14\uB85C\uADF8\\component\\personalProject\\row.tsx";




function PersonalProjectRow(_ref) {
  var _this = this;

  var payload = _ref.payload;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common__WEBPACK_IMPORTED_MODULE_4__["EmptyRowCol"], {
    children: payload.list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_CommonRow__WEBPACK_IMPORTED_MODULE_2__["CommonRows"], {
        payload: serialize(item),
        index: index
      }, index.toString(), false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 16
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
_c = PersonalProjectRow;

function serialize(payload) {
  var DATE_FORMAT = _common_Util__WEBPACK_IMPORTED_MODULE_3__["default"].LUXON_DATE_FORMAT;
  var startedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);

  var title = function () {
    if (payload.endedAt) {
      var endedAt = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(DATE_FORMAT.YYYY_DOT_LL);
      return "".concat(startedAt, " ~ ").concat(endedAt);
    }

    return "".concat(startedAt, " ~");
  }();

  return {
    left: {
      title: title
    },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions
    }
  };
}

var _c;

$RefreshReg$(_c, "PersonalProjectRow");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3BlcnNvbmFsUHJvamVjdC9yb3cudHN4Il0sIm5hbWVzIjpbIlBlcnNvbmFsUHJvamVjdFJvdyIsInBheWxvYWQiLCJsaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Iiwic2VyaWFsaXplIiwidG9TdHJpbmciLCJEQVRFX0ZPUk1BVCIsIlV0aWwiLCJMVVhPTl9EQVRFX0ZPUk1BVCIsInN0YXJ0ZWRBdCIsIkRhdGVUaW1lIiwiZnJvbUZvcm1hdCIsIllZWVlfTEwiLCJ0b0Zvcm1hdCIsIllZWVlfRE9UX0xMIiwidGl0bGUiLCJlbmRlZEF0IiwibGVmdCIsInJpZ2h0Iiwic3ViVGl0bGUiLCJ3aGVyZSIsImRlc2NyaXB0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFFZSxTQUFTQSxrQkFBVCxPQUU4QztBQUFBOztBQUFBLE1BRDNEQyxPQUMyRCxRQUQzREEsT0FDMkQ7QUFDM0Qsc0JBQ0UscUVBQUMsbURBQUQ7QUFBQSxjQUNHQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsR0FBYixDQUFpQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDakMsMEJBQU8scUVBQUMsNERBQUQ7QUFBbUMsZUFBTyxFQUFFQyxTQUFTLENBQUNGLElBQUQsQ0FBckQ7QUFBNkQsYUFBSyxFQUFFQztBQUFwRSxTQUFpQkEsS0FBSyxDQUFDRSxRQUFOLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDtLQVZ1QlAsa0I7O0FBWXhCLFNBQVNNLFNBQVQsQ0FBbUJMLE9BQW5CLEVBQWlFO0FBQy9ELE1BQU1PLFdBQVcsR0FBR0Msb0RBQUksQ0FBQ0MsaUJBQXpCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyw4Q0FBUSxDQUFDQyxVQUFULENBQW9CWixPQUFPLENBQUNVLFNBQTVCLEVBQXVDSCxXQUFXLENBQUNNLE9BQW5ELEVBQTREQyxRQUE1RCxDQUNoQlAsV0FBVyxDQUFDUSxXQURJLENBQWxCOztBQUdBLE1BQU1DLEtBQUssR0FBSSxZQUFNO0FBQ25CLFFBQUloQixPQUFPLENBQUNpQixPQUFaLEVBQXFCO0FBQ25CLFVBQU1BLE9BQU8sR0FBR04sOENBQVEsQ0FBQ0MsVUFBVCxDQUFvQlosT0FBTyxDQUFDaUIsT0FBNUIsRUFBcUNWLFdBQVcsQ0FBQ00sT0FBakQsRUFBMERDLFFBQTFELENBQ2RQLFdBQVcsQ0FBQ1EsV0FERSxDQUFoQjtBQUdBLHVCQUFVTCxTQUFWLGdCQUF5Qk8sT0FBekI7QUFDRDs7QUFDRCxxQkFBVVAsU0FBVjtBQUNELEdBUmEsRUFBZDs7QUFVQSxTQUFPO0FBQ0xRLFFBQUksRUFBRTtBQUNKRixXQUFLLEVBQUxBO0FBREksS0FERDtBQUlMRyxTQUFLLEVBQUU7QUFDTEgsV0FBSyxFQUFFaEIsT0FBTyxDQUFDZ0IsS0FEVjtBQUVMSSxjQUFRLEVBQUVwQixPQUFPLENBQUNxQixLQUZiO0FBR0xDLGtCQUFZLEVBQUV0QixPQUFPLENBQUNzQjtBQUhqQjtBQUpGLEdBQVA7QUFVRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMWUxMTA0ZDJmOGIwZDZjZTJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tICdsdXhvbic7XHJcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJUGVyc29uYWxQcm9qZWN0IH0gZnJvbSAnLi9JUGVyc29uYWxQcm9qZWN0JztcclxuaW1wb3J0IHsgQ29tbW9uUm93cyB9IGZyb20gJy4uL2NvbW1vbi9Db21tb25Sb3cnO1xyXG5pbXBvcnQgeyBJUm93IH0gZnJvbSAnLi4vY29tbW9uL0lSb3cnO1xyXG5pbXBvcnQgVXRpbCBmcm9tICcuLi9jb21tb24vVXRpbCc7XHJcbmltcG9ydCB7IEVtcHR5Um93Q29sIH0gZnJvbSAnLi4vY29tbW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNvbmFsUHJvamVjdFJvdyh7XHJcbiAgcGF5bG9hZCxcclxufTogUHJvcHNXaXRoQ2hpbGRyZW48eyBwYXlsb2FkOiBJUGVyc29uYWxQcm9qZWN0LlBheWxvYWQgfT4pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVtcHR5Um93Q29sPlxyXG4gICAgICB7cGF5bG9hZC5saXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICByZXR1cm4gPENvbW1vblJvd3Mga2V5PXtpbmRleC50b1N0cmluZygpfSBwYXlsb2FkPXtzZXJpYWxpemUoaXRlbSl9IGluZGV4PXtpbmRleH0gLz47XHJcbiAgICAgIH0pfVxyXG4gICAgPC9FbXB0eVJvd0NvbD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJpYWxpemUocGF5bG9hZDogSVBlcnNvbmFsUHJvamVjdC5JdGVtKTogSVJvdy5QYXlsb2FkIHtcclxuICBjb25zdCBEQVRFX0ZPUk1BVCA9IFV0aWwuTFVYT05fREFURV9GT1JNQVQ7XHJcbiAgY29uc3Qgc3RhcnRlZEF0ID0gRGF0ZVRpbWUuZnJvbUZvcm1hdChwYXlsb2FkLnN0YXJ0ZWRBdCwgREFURV9GT1JNQVQuWVlZWV9MTCkudG9Gb3JtYXQoXHJcbiAgICBEQVRFX0ZPUk1BVC5ZWVlZX0RPVF9MTCxcclxuICApO1xyXG4gIGNvbnN0IHRpdGxlID0gKCgpID0+IHtcclxuICAgIGlmIChwYXlsb2FkLmVuZGVkQXQpIHtcclxuICAgICAgY29uc3QgZW5kZWRBdCA9IERhdGVUaW1lLmZyb21Gb3JtYXQocGF5bG9hZC5lbmRlZEF0LCBEQVRFX0ZPUk1BVC5ZWVlZX0xMKS50b0Zvcm1hdChcclxuICAgICAgICBEQVRFX0ZPUk1BVC5ZWVlZX0RPVF9MTCxcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIGAke3N0YXJ0ZWRBdH0gfiAke2VuZGVkQXR9YDtcclxuICAgIH1cclxuICAgIHJldHVybiBgJHtzdGFydGVkQXR9IH5gO1xyXG4gIH0pKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBsZWZ0OiB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHJpZ2h0OiB7XHJcbiAgICAgIHRpdGxlOiBwYXlsb2FkLnRpdGxlLFxyXG4gICAgICBzdWJUaXRsZTogcGF5bG9hZC53aGVyZSxcclxuICAgICAgZGVzY3JpcHRpb25zOiBwYXlsb2FkLmRlc2NyaXB0aW9ucyxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9