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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"508d6d99f8ea\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL1JFQUNUL0dpdC1EaWdpdG1hbi9zdHlsZXMvZ2xvYmFscy5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI1MDhkNmQ5OWY4ZWFcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/UploadAudioPictureFile.jsx":
/*!****************************************!*\
  !*** ./app/UploadAudioPictureFile.jsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"(app-pages-browser)/./styles/globals.css\");\n\nvar _s = $RefreshSig$();\n\n\n // 导入 PropTypes\n\n // 假设你将 Tailwind 样式放在 styles 文件夹中\nconst UploadAudioPictureFile = (param)=>{\n    let { audioUrl, onImageNameGenerated } = param;\n    _s();\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // 用于存储图片\n    const [imageName, setImageName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"); // 用于存储图片文件名\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 用于显示上传状态\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"); // 状态信息\n    const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // 用于显示摄像头视频流\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // 用于截图\n    const [cameraStream, setCameraStream] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null); // 用于存储摄像头流\n    const [isCameraActive, setIsCameraActive] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 控制拍照上传按钮的显示状态\n    // 设置图片文件名，假设图片是 jpg 格式\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"UploadAudioPictureFile.useEffect\": ()=>{\n            if (audioUrl) {\n                const audioFileName = audioUrl.split(\"/\").pop();\n                const baseFileName = audioFileName.split(\".\")[0];\n                const generatedImageName = \"\".concat(baseFileName, \".jpg\");\n                setImageName(generatedImageName);\n                // 调用父组件的回调函数，传递图片名称\n                if (onImageNameGenerated) {\n                    onImageNameGenerated(generatedImageName); // 传递图片名称\n                }\n            }\n        }\n    }[\"UploadAudioPictureFile.useEffect\"], [\n        audioUrl,\n        onImageNameGenerated\n    ]);\n    // 启动摄像头并显示视频流\n    const startCamera = async ()=>{\n        try {\n            // 请求摄像头权限\n            const stream = await navigator.mediaDevices.getUserMedia({\n                video: true\n            });\n            if (videoRef.current) {\n                videoRef.current.srcObject = stream;\n            }\n            setCameraStream(stream); // 保存摄像头流\n            setIsCameraActive(true); // 激活拍照上传按钮\n        } catch (error) {\n            console.error(\"访问摄像头失败\", error);\n            setMessage(\"无法访问摄像头，请检查设备权限。\");\n        }\n    };\n    // 停止摄像头\n    const stopCamera = ()=>{\n        if (cameraStream) {\n            const tracks = cameraStream.getTracks();\n            tracks.forEach((track)=>track.stop()); // 停止所有轨道\n        }\n        setIsCameraActive(false); // 停止拍照上传按钮\n    };\n    // 拍照功能\n    const takePhoto = ()=>{\n        const canvas = canvasRef.current;\n        const video = videoRef.current;\n        if (video && canvas) {\n            canvas.width = video.videoWidth;\n            canvas.height = video.videoHeight;\n            const ctx = canvas.getContext(\"2d\");\n            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);\n            canvas.toBlob((blob)=>{\n                const renamedImage = new File([\n                    blob\n                ], imageName, {\n                    type: \"image/jpeg\"\n                });\n                setImage(renamedImage); // 更新为新的图片文件\n                stopCamera(); // 拍照后停止摄像头\n            });\n        }\n    };\n    // 选择本地图片\n    const handleImageChange = (e)=>{\n        const file = e.target.files[0];\n        if (file) {\n            // 使用基于音频文件名生成的图片名称\n            const renamedImage = new File([\n                file\n            ], imageName, {\n                type: file.type\n            });\n            setImage(renamedImage); // 更新图片文件为新的文件名\n        }\n    };\n    // 上传文件\n    const handleUpload = async ()=>{\n        if (!image) {\n            setMessage(\"请确保图片文件已选择！\");\n            return;\n        }\n        setLoading(true);\n        setMessage(\"正在上传...\");\n        const formData = new FormData();\n        try {\n            // 只上传图片，忽略音频部分\n            formData.append(\"image_file\", image); // 上传图片文件\n            // 发送上传请求到原来的 API 路径\n            const response = await fetch(\"http://119.255.238.247:8000/api/upload-audio-and-image\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (response.ok) {\n                setMessage(\"文件上传成功！\");\n            } else {\n                setMessage(\"文件上传失败，请稍后重试！\");\n            }\n        } catch (error) {\n            console.error(\"上传失败：\", error);\n            setMessage(\"上传过程中发生了错误！\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 border border-gray-300 p-4 rounded-lg shadow-md mt-8 mb-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl font-medium text-gray-700 p-2 rounded-lg block mb-4 \",\n                children: \"上传图片\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: audioUrl && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                    lineNumber: 129,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"imageUploadLocal\",\n                        className: \"text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4\",\n                        children: \"请根据参考样式与手势选择本地图片或拍照上传:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"/0003.png\",\n                        alt: \"示例图片\",\n                        className: \"ml-[80px] w-[250px] h-auto\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        id: \"imageUploadLocal\",\n                        type: \"file\",\n                        accept: \"image/*\",\n                        onChange: handleImageChange,\n                        className: \"block w-[400px] h-[40px] border border-black p-2 rounded-md text-[30px] mt-4\" // 增大字体和边框深色\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 144,\n                        columnNumber: 9\n                    }, undefined),\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4\",\n                        children: [\n                            \"已选择图片: \",\n                            imageName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 152,\n                        columnNumber: 19\n                    }, undefined),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        className: \"mr-4 mt-4 mb-4\",\n                        onClick: startCamera,\n                        children: \"启动摄像头\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, undefined),\n                    isCameraActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        className: \"mb-4\",\n                        onClick: takePhoto,\n                        children: \"拍照上传\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                        ref: videoRef,\n                        width: \"300\",\n                        height: \"200\",\n                        autoPlay: true,\n                        style: {\n                            display: isCameraActive ? 'block' : 'none'\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        ref: canvasRef\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 172,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined),\n            image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-medium text-gray-700 p-2 rounded-lg block mb-4\",\n                        children: \"拍摄到的图片：\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 179,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: URL.createObjectURL(image),\n                        alt: \"Captured\",\n                        width: \"300\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                        lineNumber: 180,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 178,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: handleUpload,\n                className: \"mt-4\",\n                disabled: loading,\n                children: loading ? \"上传中...\" : \"上传\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, undefined),\n            message && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n                lineNumber: 190,\n                columnNumber: 19\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Documents/REACT/Git-Digitman/app/UploadAudioPictureFile.jsx\",\n        lineNumber: 123,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UploadAudioPictureFile, \"U6L0TioMc4bHawX4CVtqdm/DX1I=\");\n_c = UploadAudioPictureFile;\n// 为 audioUrl 添加 PropTypes 校验\nUploadAudioPictureFile.propTypes = {\n    audioUrl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,\n    onImageNameGenerated: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadAudioPictureFile);\nvar _c;\n$RefreshReg$(_c, \"UploadAudioPictureFile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9VcGxvYWRBdWRpb1BpY3R1cmVGaWxlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNGO0FBQ1gsQ0FBQyxlQUFlO0FBQ0M7QUFDckIsQ0FBQyxpQ0FBaUM7QUFHakUsTUFBTU0seUJBQXlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxvQkFBb0IsRUFBRTs7SUFDaEUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDLE9BQVEsU0FBUztJQUNwRCxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsS0FBTSxZQUFZO0lBQzdELE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxRQUFTLFdBQVc7SUFDM0QsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDLEtBQU0sT0FBTztJQUNwRCxNQUFNWSxXQUFXYiw2Q0FBTUEsQ0FBQyxPQUFRLGFBQWE7SUFDN0MsTUFBTWMsWUFBWWQsNkNBQU1BLENBQUMsT0FBUSxPQUFPO0lBQ3hDLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDLE9BQVEsV0FBVztJQUNwRSxNQUFNLENBQUNnQixnQkFBZ0JDLGtCQUFrQixHQUFHakIsK0NBQVFBLENBQUMsUUFBUyxnQkFBZ0I7SUFFOUUsdUJBQXVCO0lBQ3ZCRixnREFBU0E7NENBQUM7WUFDUixJQUFJSSxVQUFVO2dCQUNaLE1BQU1nQixnQkFBZ0JoQixTQUFTaUIsS0FBSyxDQUFDLEtBQUtDLEdBQUc7Z0JBQzdDLE1BQU1DLGVBQWVILGNBQWNDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEQsTUFBTUcscUJBQXFCLEdBQWdCLE9BQWJELGNBQWE7Z0JBQzNDZCxhQUFhZTtnQkFFYixvQkFBb0I7Z0JBQ3BCLElBQUluQixzQkFBc0I7b0JBQ3hCQSxxQkFBcUJtQixxQkFBcUIsU0FBUztnQkFDckQ7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QUN0QztBQUVBLGlFQUFlSSxzQkFBc0JBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvRG9jdW1lbnRzL1JFQUNUL0dpdC1EaWdpdG1hbi9hcHAvVXBsb2FkQXVkaW9QaWN0dXJlRmlsZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiOyAvLyDlr7zlhaUgUHJvcFR5cGVzXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJzsgLy8g5YGH6K6+5L2g5bCGIFRhaWx3aW5kIOagt+W8j+aUvuWcqCBzdHlsZXMg5paH5Lu25aS55LitXG5cblxuY29uc3QgVXBsb2FkQXVkaW9QaWN0dXJlRmlsZSA9ICh7IGF1ZGlvVXJsLCBvbkltYWdlTmFtZUdlbmVyYXRlZCB9KSA9PiB7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUobnVsbCk7ICAvLyDnlKjkuo7lrZjlgqjlm77niYdcbiAgY29uc3QgW2ltYWdlTmFtZSwgc2V0SW1hZ2VOYW1lXSA9IHVzZVN0YXRlKFwiXCIpOyAgLy8g55So5LqO5a2Y5YKo5Zu+54mH5paH5Lu25ZCNXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTsgIC8vIOeUqOS6juaYvuekuuS4iuS8oOeKtuaAgVxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTsgIC8vIOeKtuaAgeS/oeaBr1xuICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTsgIC8vIOeUqOS6juaYvuekuuaRhOWDj+WktOinhumikea1gVxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7ICAvLyDnlKjkuo7miKrlm75cbiAgY29uc3QgW2NhbWVyYVN0cmVhbSwgc2V0Q2FtZXJhU3RyZWFtXSA9IHVzZVN0YXRlKG51bGwpOyAgLy8g55So5LqO5a2Y5YKo5pGE5YOP5aS05rWBXG4gIGNvbnN0IFtpc0NhbWVyYUFjdGl2ZSwgc2V0SXNDYW1lcmFBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpOyAgLy8g5o6n5Yi25ouN54Wn5LiK5Lyg5oyJ6ZKu55qE5pi+56S654q25oCBXG5cbiAgLy8g6K6+572u5Zu+54mH5paH5Lu25ZCN77yM5YGH6K6+5Zu+54mH5pivIGpwZyDmoLzlvI9cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoYXVkaW9VcmwpIHtcbiAgICAgIGNvbnN0IGF1ZGlvRmlsZU5hbWUgPSBhdWRpb1VybC5zcGxpdChcIi9cIikucG9wKCk7XG4gICAgICBjb25zdCBiYXNlRmlsZU5hbWUgPSBhdWRpb0ZpbGVOYW1lLnNwbGl0KFwiLlwiKVswXTtcbiAgICAgIGNvbnN0IGdlbmVyYXRlZEltYWdlTmFtZSA9IGAke2Jhc2VGaWxlTmFtZX0uanBnYDtcbiAgICAgIHNldEltYWdlTmFtZShnZW5lcmF0ZWRJbWFnZU5hbWUpO1xuXG4gICAgICAvLyDosIPnlKjniLbnu4Tku7bnmoTlm57osIPlh73mlbDvvIzkvKDpgJLlm77niYflkI3np7BcbiAgICAgIGlmIChvbkltYWdlTmFtZUdlbmVyYXRlZCkge1xuICAgICAgICBvbkltYWdlTmFtZUdlbmVyYXRlZChnZW5lcmF0ZWRJbWFnZU5hbWUpOyAvLyDkvKDpgJLlm77niYflkI3np7BcbiAgICAgIH1cbiAgICB9XG4gIH0sIFthdWRpb1VybCwgb25JbWFnZU5hbWVHZW5lcmF0ZWRdKTtcblxuICAvLyDlkK/liqjmkYTlg4/lpLTlubbmmL7npLrop4bpopHmtYFcbiAgY29uc3Qgc3RhcnRDYW1lcmEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIOivt+axguaRhOWDj+WktOadg+mZkFxuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICB2aWRlbzogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHZpZGVvUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICB9XG4gICAgICBzZXRDYW1lcmFTdHJlYW0oc3RyZWFtKTsgIC8vIOS/neWtmOaRhOWDj+WktOa1gVxuICAgICAgc2V0SXNDYW1lcmFBY3RpdmUodHJ1ZSk7ICAvLyDmv4DmtLvmi43nhafkuIrkvKDmjInpkq5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuiuv+mXruaRhOWDj+WktOWksei0pVwiLCBlcnJvcik7XG4gICAgICBzZXRNZXNzYWdlKFwi5peg5rOV6K6/6Zeu5pGE5YOP5aS077yM6K+35qOA5p+l6K6+5aSH5p2D6ZmQ44CCXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyDlgZzmraLmkYTlg4/lpLRcbiAgY29uc3Qgc3RvcENhbWVyYSA9ICgpID0+IHtcbiAgICBpZiAoY2FtZXJhU3RyZWFtKSB7XG4gICAgICBjb25zdCB0cmFja3MgPSBjYW1lcmFTdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgICB0cmFja3MuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7ICAvLyDlgZzmraLmiYDmnInovajpgZNcbiAgICB9XG4gICAgc2V0SXNDYW1lcmFBY3RpdmUoZmFsc2UpOyAgLy8g5YGc5q2i5ouN54Wn5LiK5Lyg5oyJ6ZKuXG4gIH07XG5cbiAgLy8g5ouN54Wn5Yqf6IO9XG4gIGNvbnN0IHRha2VQaG90byA9ICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCB2aWRlbyA9IHZpZGVvUmVmLmN1cnJlbnQ7XG4gICAgaWYgKHZpZGVvICYmIGNhbnZhcykge1xuICAgICAgY2FudmFzLndpZHRoID0gdmlkZW8udmlkZW9XaWR0aDtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB2aWRlby52aWRlb0hlaWdodDtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICBjdHguZHJhd0ltYWdlKHZpZGVvLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgY2FudmFzLnRvQmxvYigoYmxvYikgPT4ge1xuICAgICAgICBjb25zdCByZW5hbWVkSW1hZ2UgPSBuZXcgRmlsZShbYmxvYl0sIGltYWdlTmFtZSwgeyB0eXBlOiBcImltYWdlL2pwZWdcIiB9KTtcbiAgICAgICAgc2V0SW1hZ2UocmVuYW1lZEltYWdlKTsgIC8vIOabtOaWsOS4uuaWsOeahOWbvueJh+aWh+S7tlxuICAgICAgICBzdG9wQ2FtZXJhKCk7ICAvLyDmi43nhaflkI7lgZzmraLmkYTlg4/lpLRcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyDpgInmi6nmnKzlnLDlm77niYdcbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgLy8g5L2/55So5Z+65LqO6Z+z6aKR5paH5Lu25ZCN55Sf5oiQ55qE5Zu+54mH5ZCN56ewXG4gICAgICBjb25zdCByZW5hbWVkSW1hZ2UgPSBuZXcgRmlsZShbZmlsZV0sIGltYWdlTmFtZSwgeyB0eXBlOiBmaWxlLnR5cGUgfSk7XG4gICAgICBzZXRJbWFnZShyZW5hbWVkSW1hZ2UpOyAgLy8g5pu05paw5Zu+54mH5paH5Lu25Li65paw55qE5paH5Lu25ZCNXG4gICAgfVxuICB9O1xuXG4gIC8vIOS4iuS8oOaWh+S7tlxuICBjb25zdCBoYW5kbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFpbWFnZSkge1xuICAgICAgc2V0TWVzc2FnZShcIuivt+ehruS/neWbvueJh+aWh+S7tuW3sumAieaLqe+8gVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldE1lc3NhZ2UoXCLmraPlnKjkuIrkvKAuLi5cIik7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIOWPquS4iuS8oOWbvueJh++8jOW/veeVpemfs+mikemDqOWIhlxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VfZmlsZVwiLCBpbWFnZSk7IC8vIOS4iuS8oOWbvueJh+aWh+S7tlxuXG4gICAgICAvLyDlj5HpgIHkuIrkvKDor7fmsYLliLDljp/mnaXnmoQgQVBJIOi3r+W+hFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly8xMTkuMjU1LjIzOC4yNDc6ODAwMC9hcGkvdXBsb2FkLWF1ZGlvLWFuZC1pbWFnZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBzZXRNZXNzYWdlKFwi5paH5Lu25LiK5Lyg5oiQ5Yqf77yBXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TWVzc2FnZShcIuaWh+S7tuS4iuS8oOWksei0pe+8jOivt+eojeWQjumHjeivle+8gVwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIuS4iuS8oOWksei0pe+8mlwiLCBlcnJvcik7XG4gICAgICBzZXRNZXNzYWdlKFwi5LiK5Lyg6L+H56iL5Lit5Y+R55Sf5LqG6ZSZ6K+v77yBXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcC00IHJvdW5kZWQtbGcgc2hhZG93LW1kIG10LTggbWItNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgcC0yIHJvdW5kZWQtbGcgYmxvY2sgbWItNCBcIj7kuIrkvKDlm77niYc8L2gyPlxuXG4gICAgICB7Lyog5pi+56S66Z+z6aKR5paH5Lu2ICovfVxuICAgICAgPGRpdj5cbiAgICAgICAge2F1ZGlvVXJsICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgcC0yIHJvdW5kZWQtbGcgYmxvY2sgbWItNFwiID7pn7PpopHlh4blpIflpb3vvJo8L2gzPlxuICAgICAgICAgICAgPHA+e2F1ZGlvVXJsfTwvcD4gKi99XG4gICAgICAgICAgICB7LyogPGF1ZGlvIGNvbnRyb2xzPlxuICAgICAgICAgICAgICA8c291cmNlIHNyYz17YXVkaW9Vcmx9IHR5cGU9XCJhdWRpby93YXZcIiAvPlxuICAgICAgICAgICAgICDmgqjnmoTmtY/op4jlmajkuI3mlK/mjIHpn7PpopHmkq3mlL7jgIJcbiAgICAgICAgICAgIDwvYXVkaW8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDmnKzlnLDlm77niYfkuIrkvKDpg6jliIYgKi99XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlVXBsb2FkTG9jYWxcIiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgcC0yIHJvdW5kZWQtbGcgYmxvY2sgbWItNFwiID7or7fmoLnmja7lj4LogIPmoLflvI/kuI7miYvlir/pgInmi6nmnKzlnLDlm77niYfmiJbmi43nhafkuIrkvKA6PC9sYWJlbD5cbiAgICAgICAgPGltZyBzcmM9XCIvMDAwMy5wbmdcIiBhbHQ9XCLnpLrkvovlm77niYdcIiBjbGFzc05hbWU9XCJtbC1bODBweF0gdy1bMjUwcHhdIGgtYXV0b1wiIC8+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIGlkPVwiaW1hZ2VVcGxvYWRMb2NhbFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LVs0MDBweF0gaC1bNDBweF0gYm9yZGVyIGJvcmRlci1ibGFjayBwLTIgcm91bmRlZC1tZCB0ZXh0LVszMHB4XSBtdC00XCIgIC8vIOWinuWkp+Wtl+S9k+WSjOi+ueahhua3seiJslxuICAgICAgICAvPlxuXG4gICAgICAgIHtpbWFnZSAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgcC0yIHJvdW5kZWQtbGcgYmxvY2sgbWItNFwiID7lt7LpgInmi6nlm77niYc6IHtpbWFnZU5hbWV9PC9wPn0gey8qIOaYvuekuuWbvueJh+WQjeensCAqL31cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyog5pGE5YOP5aS05pi+56S6ICovfVxuICAgICAgPGRpdj5cbiAgICAgICAgXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXItNCBtdC00IG1iLTRcIiBvbkNsaWNrPXtzdGFydENhbWVyYX0+5ZCv5Yqo5pGE5YOP5aS0PC9CdXR0b24+XG4gICAgICAgIHsvKiDlj6rmnInlnKjmkYTlg4/lpLTlkK/liqjlkI7miY3mmL7npLrmi43nhafkuIrkvKDmjInpkq4gKi99XG4gICAgICAgIHtpc0NhbWVyYUFjdGl2ZSAmJiAoXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtYi00XCJvbkNsaWNrPXt0YWtlUGhvdG99PuaLjeeFp+S4iuS8oDwvQnV0dG9uPlxuICAgICAgICAgIFxuICAgICAgICApfVxuICAgICAgICB7Lyog5pGE5YOP5aS05pi+56S66YOo5YiGICovfVxuICAgICAgICA8dmlkZW9cbiAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgIHdpZHRoPVwiMzAwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxuICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogaXNDYW1lcmFBY3RpdmUgPyAnYmxvY2snIDogJ25vbmUnIH19IC8vIOaOp+WItuinhumikeaYvuekulxuICAgICAgICA+PC92aWRlbz5cbiAgICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gPjwvY2FudmFzPiBcbiAgICAgICAgey8qIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiDmmL7npLrmi43nhaflkI7nmoTlm77niYcgKi99XG4gICAgICB7aW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgcC0yIHJvdW5kZWQtbGcgYmxvY2sgbWItNFwiID7mi43mkYTliLDnmoTlm77niYfvvJo8L2gzPlxuICAgICAgICAgIDxpbWcgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGltYWdlKX0gYWx0PVwiQ2FwdHVyZWRcIiB3aWR0aD1cIjMwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgey8qIOS4iuS8oOaMiemSriAqL31cbiAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlVXBsb2FkfSBjbGFzc05hbWU9XCJtdC00XCIgZGlzYWJsZWQ9e2xvYWRpbmd9PlxuICAgICAgICB7bG9hZGluZyA/IFwi5LiK5Lyg5LitLi4uXCIgOiBcIuS4iuS8oFwifVxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIHsvKiDmmL7npLrnirbmgIHkv6Hmga8gKi99XG4gICAgICB7bWVzc2FnZSAmJiA8cD57bWVzc2FnZX08L3A+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8g5Li6IGF1ZGlvVXJsIOa3u+WKoCBQcm9wVHlwZXMg5qCh6aqMXG5VcGxvYWRBdWRpb1BpY3R1cmVGaWxlLnByb3BUeXBlcyA9IHtcbiAgYXVkaW9Vcmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCwgLy8g5qCh6aqMIGF1ZGlvVXJsIOW/hemhu+aYr+Wtl+espuS4suW5tuS4lOaYr+W/heWhq+eahFxuICBvbkltYWdlTmFtZUdlbmVyYXRlZDogUHJvcFR5cGVzLmZ1bmMsICAvLyDmt7vliqDlm57osIPlh73mlbDnmoQgcHJvcCDmoKHpqoxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEF1ZGlvUGljdHVyZUZpbGU7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJQcm9wVHlwZXMiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlVwbG9hZEF1ZGlvUGljdHVyZUZpbGUiLCJhdWRpb1VybCIsIm9uSW1hZ2VOYW1lR2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlTmFtZSIsInNldEltYWdlTmFtZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ2aWRlb1JlZiIsImNhbnZhc1JlZiIsImNhbWVyYVN0cmVhbSIsInNldENhbWVyYVN0cmVhbSIsImlzQ2FtZXJhQWN0aXZlIiwic2V0SXNDYW1lcmFBY3RpdmUiLCJhdWRpb0ZpbGVOYW1lIiwic3BsaXQiLCJwb3AiLCJiYXNlRmlsZU5hbWUiLCJnZW5lcmF0ZWRJbWFnZU5hbWUiLCJzdGFydENhbWVyYSIsInN0cmVhbSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsInZpZGVvIiwiY3VycmVudCIsInNyY09iamVjdCIsImVycm9yIiwiY29uc29sZSIsInN0b3BDYW1lcmEiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwidGFrZVBob3RvIiwiY2FudmFzIiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwidG9CbG9iIiwiYmxvYiIsInJlbmFtZWRJbWFnZSIsIkZpbGUiLCJ0eXBlIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiaGFuZGxlVXBsb2FkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxhYmVsIiwiaHRtbEZvciIsImltZyIsInNyYyIsImFsdCIsImlkIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJwIiwib25DbGljayIsInJlZiIsImF1dG9QbGF5Iiwic3R5bGUiLCJkaXNwbGF5IiwiaDMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkaXNhYmxlZCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/UploadAudioPictureFile.jsx\n"));

/***/ })

});