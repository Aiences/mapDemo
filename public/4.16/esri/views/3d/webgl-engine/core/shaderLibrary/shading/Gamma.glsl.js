// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.Gamma=function(a){a.fragment.code.add(d.glsl(b||(b=c.__makeTemplateObject(["\n    const float GAMMA \x3d 2.2;\n    const float INV_GAMMA \x3d 0.4545454545;\n\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n  "],["\n    const float GAMMA \x3d 2.2;\n    const float INV_GAMMA \x3d 0.4545454545;\n\n    vec4 delinearizeGamma(vec4 color) {\n      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);\n    }\n\n    vec3 linearizeGamma(vec3 color) {\n      return pow(color, vec3(GAMMA));\n    }\n  "]))))};
var b});