"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"37b75525c8b0\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL1JFQUNUL0dpdC1EaWdpdG1hbi9zdHlsZXMvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIzN2I3NTUyNWM4YjBcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _AudioRecorderAndUploader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioRecorderAndUploader */ \"(app-pages-browser)/./app/AudioRecorderAndUploader.jsx\");\n/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dashboard */ \"(app-pages-browser)/./app/Dashboard.jsx\");\n/* harmony import */ var _TextToSpeech__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextToSpeech */ \"(app-pages-browser)/./app/TextToSpeech.jsx\");\n/* harmony import */ var _UploadAudioPictureFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./UploadAudioPictureFile */ \"(app-pages-browser)/./app/UploadAudioPictureFile.jsx\");\n/* harmony import */ var _VideoChecker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VideoChecker */ \"(app-pages-browser)/./app/VideoChecker.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // 新的录音与上传组件\n // 导入仪表盘组件\n\n\n\nfunction Home() {\n    _s();\n    const [audioUrl, setAudioUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [audioName, setAudioName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [imageName, setImageName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [videoUrl, setVideoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [audioBlob, setAudioBlob] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [recordWavName, setRecordWavName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 动态文件名\n    const handleAudioGenerated = (url, fileName)=>{\n        setAudioUrl(url);\n        setAudioName(fileName);\n    };\n    const handleImageNameGenerated = (name)=>{\n        setImageName(name);\n    };\n    const handleRecordingComplete = (blob, fileName)=>{\n        setAudioBlob(blob);\n        setAudioName(fileName); // 传递文件名给父组件\n    };\n    const handleCallGradioApi = async ()=>{\n        if (!audioName || !imageName) {\n            console.error(\"Both audioName and imageName are required.\");\n            return;\n        }\n        setLoading(true);\n        const params = new URLSearchParams();\n        params.append(\"audio_name\", audioName);\n        params.append(\"image_name\", imageName);\n        try {\n            const response = await fetch(\"http://localhost:8000/api/call-gradio-api?\".concat(params.toString()), {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            if (response.ok) {\n                console.log(\"Gradio API Request Sent\");\n                const videoGeneratedUrl = \"http://119.255.238.247:1107/generated_audio_\".concat(audioName.match(/(\\d{8}_\\d{4})/)[0], \"_sig.mp4\");\n                setVideoUrl(videoGeneratedUrl);\n            } else {\n                const errorData = await response.json();\n                console.error(\"API Error:\", errorData);\n            }\n        } catch (error) {\n            console.error(\"Request failed:\", error);\n        } finally{\n            setLoading(false); // 请求完成后停止 loading\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-40 flex flex-col items-center pt-6 text-center md:flex-row md:items-start md:text-left lg:grow mt-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-1/2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mb-5 items-center text-5xl text-gray-900 sm:text-6xl\",\n                                children: \"Digitman Generatation System\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-4 text-lg text-gray-600 xl:w-3/4\",\n                                children: \"Digitman is a free to use AI tool made with CosyVoice, Echomimic, ReactJS and styled with Tailwind CSS\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#section-1\",\n                                    className: \"mt-2 inline-flex items-center rounded-lg border bg-gray-900 px-5 py-3 font-medium text-white transition duration-500 ease-in-out\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"justify-center\",\n                                        children: \"开始创造\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"md:w-1/2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            className: \"ml-24 w-full md:ml-1 max-w-lg\",\n                            alt: \"iPhone-12\",\n                            src: \"/color2-removebg-preview.png\",\n                            width: 320,\n                            height: 320\n                        }, void 0, false, {\n                            fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"text-gray-900\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        id: \"section-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4\",\n                                children: \"请按下录音按钮并念出下面的文本：\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-2xl font-bold text-blue-600 bg-yellow-300 p-2 rounded-lg shadow-md\",\n                                children: \"我正在记录声音模版\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AudioRecorderAndUploader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                onRecordingComplete: handleRecordingComplete\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TextToSpeech__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                onAudioGenerated: handleAudioGenerated\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    audioUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UploadAudioPictureFile__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        audioUrl: audioUrl,\n                        onImageNameGenerated: handleImageNameGenerated\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        onClick: handleCallGradioApi,\n                        disabled: loading,\n                        children: loading ? \"正在生成...\" : \"调用 Gradio API\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    videoUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_VideoChecker__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        videoUrl: videoUrl,\n                        isLoading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/page.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"z/064DTFcX5n27bMGkLTz/QWdMc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLTCxXQUFVOzBDQUEwRTs7Ozs7Ozs7Ozs7O2tDQU01Riw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDN0MsaUVBQXdCQTtnQ0FBQ3lELHFCQUFxQmhDOzs7Ozs7MENBRS9DLDhEQUFDdkIscURBQVlBO2dDQUFDd0Qsa0JBQWtCdEM7Ozs7Ozs7Ozs7OztvQkFJL0JkLDBCQUNDLDhEQUFDSCwrREFBc0JBO3dCQUNyQkcsVUFBVUE7d0JBQ1ZxRCxzQkFBc0JwQzs7Ozs7O2tDQUkxQiw4REFBQzFCLHlEQUFNQTt3QkFBQytELFNBQVNqQzt3QkFBcUJrQyxVQUFVakQ7a0NBQzdDQSxVQUFVLFlBQVk7Ozs7OztvQkFHeEJFLDBCQUNDLDhEQUFDVixxREFBWUE7d0JBQUNVLFVBQVVBO3dCQUFVZ0QsV0FBV2xEOzs7Ozs7a0NBSS9DLDhEQUFDWCxrREFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxCO0dBN0h3Qkk7S0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL1JFQUNUL0dpdC1EaWdpdG1hbi9hcHAvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7ICAvLyDnoa7kv53lrqLmiLfnq6/muLLmn5NcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXVkaW9SZWNvcmRlckFuZFVwbG9hZGVyIGZyb20gJy4vQXVkaW9SZWNvcmRlckFuZFVwbG9hZGVyJzsgLy8g5paw55qE5b2V6Z+z5LiO5LiK5Lyg57uE5Lu2XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4vRGFzaGJvYXJkJzsgLy8g5a+85YWl5Luq6KGo55uY57uE5Lu2XG5pbXBvcnQgVGV4dFRvU3BlZWNoIGZyb20gJy4vVGV4dFRvU3BlZWNoJztcbmltcG9ydCBVcGxvYWRBdWRpb1BpY3R1cmVGaWxlIGZyb20gJy4vVXBsb2FkQXVkaW9QaWN0dXJlRmlsZSc7XG5pbXBvcnQgVmlkZW9DaGVja2VyIGZyb20gJy4vVmlkZW9DaGVja2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2F1ZGlvVXJsLCBzZXRBdWRpb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1ZGlvTmFtZSwgc2V0QXVkaW9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaW1hZ2VOYW1lLCBzZXRJbWFnZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ZpZGVvVXJsLCBzZXRWaWRlb1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2F1ZGlvQmxvYiwgc2V0QXVkaW9CbG9iXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVjb3JkV2F2TmFtZSwgc2V0UmVjb3JkV2F2TmFtZV0gPSB1c2VTdGF0ZSgnJyk7ICAvLyDliqjmgIHmlofku7blkI1cblxuICBjb25zdCBoYW5kbGVBdWRpb0dlbmVyYXRlZCA9ICh1cmwsIGZpbGVOYW1lKSA9PiB7XG4gICAgc2V0QXVkaW9VcmwodXJsKTtcbiAgICBzZXRBdWRpb05hbWUoZmlsZU5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUltYWdlTmFtZUdlbmVyYXRlZCA9IChuYW1lKSA9PiB7XG4gICAgc2V0SW1hZ2VOYW1lKG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlY29yZGluZ0NvbXBsZXRlID0gKGJsb2IsIGZpbGVOYW1lKSA9PiB7XG4gICAgc2V0QXVkaW9CbG9iKGJsb2IpO1xuICAgIHNldEF1ZGlvTmFtZShmaWxlTmFtZSk7ICAvLyDkvKDpgJLmlofku7blkI3nu5nniLbnu4Tku7ZcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDYWxsR3JhZGlvQXBpID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghYXVkaW9OYW1lIHx8ICFpbWFnZU5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJCb3RoIGF1ZGlvTmFtZSBhbmQgaW1hZ2VOYW1lIGFyZSByZXF1aXJlZC5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBwYXJhbXMuYXBwZW5kKFwiYXVkaW9fbmFtZVwiLCBhdWRpb05hbWUpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJpbWFnZV9uYW1lXCIsIGltYWdlTmFtZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9jYWxsLWdyYWRpby1hcGk/JHtwYXJhbXMudG9TdHJpbmcoKX1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHcmFkaW8gQVBJIFJlcXVlc3QgU2VudFwiKTtcbiAgICAgICAgY29uc3QgdmlkZW9HZW5lcmF0ZWRVcmwgPSBgaHR0cDovLzExOS4yNTUuMjM4LjI0NzoxMTA3L2dlbmVyYXRlZF9hdWRpb18ke2F1ZGlvTmFtZS5tYXRjaCgvKFxcZHs4fV9cXGR7NH0pLylbMF19X3NpZy5tcDRgO1xuICAgICAgICBzZXRWaWRlb1VybCh2aWRlb0dlbmVyYXRlZFVybCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBUEkgRXJyb3I6XCIsIGVycm9yRGF0YSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgIC8vIOivt+axguWujOaIkOWQjuWBnOatoiBsb2FkaW5nXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtNiB0ZXh0LWNlbnRlciBtZDpmbGV4LXJvdyBtZDppdGVtcy1zdGFydCBtZDp0ZXh0LWxlZnQgbGc6Z3JvdyBtdC0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8yXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTUgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS05MDAgc206dGV4dC02eGxcIj5EaWdpdG1hbiBHZW5lcmF0YXRpb24gU3lzdGVtPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgdGV4dC1ncmF5LTYwMCB4bDp3LTMvNFwiPlxuICAgICAgICAgICAgRGlnaXRtYW4gaXMgYSBmcmVlIHRvIHVzZSBBSSB0b29sIG1hZGUgd2l0aCBDb3N5Vm9pY2UsIEVjaG9taW1pYyxcbiAgICAgICAgICAgIFJlYWN0SlMgYW5kIHN0eWxlZCB3aXRoIFRhaWx3aW5kIENTU1xuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCIjc2VjdGlvbi0xXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMiBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgYmctZ3JheS05MDAgcHgtNSBweS0zIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlclwiPuW8gOWni+WIm+mAoDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTEvMlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMjQgdy1mdWxsIG1kOm1sLTEgbWF4LXctbGdcIlxuICAgICAgICAgICAgYWx0PVwiaVBob25lLTEyXCJcbiAgICAgICAgICAgIHNyYz1cIi9jb2xvcjItcmVtb3ZlYmctcHJldmlldy5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezMyMH1cbiAgICAgICAgICAgIGhlaWdodD17MzIwfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgIDxwIGlkPVwic2VjdGlvbi0xXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIHAtMiByb3VuZGVkLWxnIGJsb2NrIG1iLTRcIj5cbiAgICAgICAgICAgIOivt+aMieS4i+W9lemfs+aMiemSruW5tuW/teWHuuS4i+mdoueahOaWh+acrO+8mlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMCBiZy15ZWxsb3ctMzAwIHAtMiByb3VuZGVkLWxnIHNoYWRvdy1tZFwiPlxuICAgICAgICAgICAg5oiR5q2j5Zyo6K6w5b2V5aOw6Z+z5qih54mIXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgey8qIOeUqOaWsOeahCBBdWRpb1JlY29yZGVyQW5kVXBsb2FkZXIg57uE5Lu25pu/5o2i5pen55qE5b2V6Z+z5ZKM5LiK5Lyg6Z+z6aKR5Yqf6IO9ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIG10LTggbWItNFwiPlxuICAgICAgICA8QXVkaW9SZWNvcmRlckFuZFVwbG9hZGVyIG9uUmVjb3JkaW5nQ29tcGxldGU9e2hhbmRsZVJlY29yZGluZ0NvbXBsZXRlfSAvPlxuXG4gICAgICAgIDxUZXh0VG9TcGVlY2ggb25BdWRpb0dlbmVyYXRlZD17aGFuZGxlQXVkaW9HZW5lcmF0ZWR9IC8+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAge2F1ZGlvVXJsICYmIChcbiAgICAgICAgICA8VXBsb2FkQXVkaW9QaWN0dXJlRmlsZVxuICAgICAgICAgICAgYXVkaW9Vcmw9e2F1ZGlvVXJsfVxuICAgICAgICAgICAgb25JbWFnZU5hbWVHZW5lcmF0ZWQ9e2hhbmRsZUltYWdlTmFtZUdlbmVyYXRlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2FsbEdyYWRpb0FwaX0gZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICAgIHtsb2FkaW5nID8gXCLmraPlnKjnlJ/miJAuLi5cIiA6IFwi6LCD55SoIEdyYWRpbyBBUElcIn1cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAge3ZpZGVvVXJsICYmIChcbiAgICAgICAgICA8VmlkZW9DaGVja2VyIHZpZGVvVXJsPXt2aWRlb1VybH0gaXNMb2FkaW5nPXtsb2FkaW5nfSAvPiAgXG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIOWcqOmhtemdouW6lemDqOa3u+WKoOS7quihqOebmCAqL31cbiAgICAgICAgPERhc2hib2FyZCAvPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkltYWdlIiwidXNlU3RhdGUiLCJBdWRpb1JlY29yZGVyQW5kVXBsb2FkZXIiLCJEYXNoYm9hcmQiLCJUZXh0VG9TcGVlY2giLCJVcGxvYWRBdWRpb1BpY3R1cmVGaWxlIiwiVmlkZW9DaGVja2VyIiwiSG9tZSIsImF1ZGlvVXJsIiwic2V0QXVkaW9VcmwiLCJhdWRpb05hbWUiLCJzZXRBdWRpb05hbWUiLCJpbWFnZU5hbWUiLCJzZXRJbWFnZU5hbWUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInZpZGVvVXJsIiwic2V0VmlkZW9VcmwiLCJhdWRpb0Jsb2IiLCJzZXRBdWRpb0Jsb2IiLCJyZWNvcmRXYXZOYW1lIiwic2V0UmVjb3JkV2F2TmFtZSIsImhhbmRsZUF1ZGlvR2VuZXJhdGVkIiwidXJsIiwiZmlsZU5hbWUiLCJoYW5kbGVJbWFnZU5hbWVHZW5lcmF0ZWQiLCJuYW1lIiwiaGFuZGxlUmVjb3JkaW5nQ29tcGxldGUiLCJibG9iIiwiaGFuZGxlQ2FsbEdyYWRpb0FwaSIsImNvbnNvbGUiLCJlcnJvciIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJ0b1N0cmluZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsImxvZyIsInZpZGVvR2VuZXJhdGVkVXJsIiwibWF0Y2giLCJlcnJvckRhdGEiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiYSIsImhyZWYiLCJzcGFuIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJzZWN0aW9uIiwiaWQiLCJvblJlY29yZGluZ0NvbXBsZXRlIiwib25BdWRpb0dlbmVyYXRlZCIsIm9uSW1hZ2VOYW1lR2VuZXJhdGVkIiwib25DbGljayIsImRpc2FibGVkIiwiaXNMb2FkaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});