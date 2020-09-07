// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(g,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.HUDOcclusionPass=function(a){a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n  void main(void) {\n    vec4 posProjCenter;\n    if (dot(position, position) \x3e 0.0) {\n      // Render single point to center of the pixel to avoid subpixel\n      // filtering to affect the marker color\n      ProjectHUDAux projectAux;\n      vec4 posProj \x3d projectPositionHUD(projectAux);\n      posProjCenter \x3d alignToPixelCenter(posProj, viewport.zw);\n\n      vec3 vpos \x3d projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        // Project out of clip space\n        posProjCenter \x3d vec4(1e038, 1e038, 1e038, 1.0);\n      }\n    }\n    else {\n      // Project out of clip space\n      posProjCenter \x3d vec4(1e038, 1e038, 1e038, 1.0);\n    }\n\n    gl_Position \x3d posProjCenter;\n    gl_PointSize \x3d 1.0;\n  }\n  "],
["\n  void main(void) {\n    vec4 posProjCenter;\n    if (dot(position, position) \x3e 0.0) {\n      // Render single point to center of the pixel to avoid subpixel\n      // filtering to affect the marker color\n      ProjectHUDAux projectAux;\n      vec4 posProj \x3d projectPositionHUD(projectAux);\n      posProjCenter \x3d alignToPixelCenter(posProj, viewport.zw);\n\n      vec3 vpos \x3d projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        // Project out of clip space\n        posProjCenter \x3d vec4(1e038, 1e038, 1e038, 1.0);\n      }\n    }\n    else {\n      // Project out of clip space\n      posProjCenter \x3d vec4(1e038, 1e038, 1e038, 1.0);\n    }\n\n    gl_Position \x3d posProjCenter;\n    gl_PointSize \x3d 1.0;\n  }\n  "]))));
a.fragment.uniforms.add("color","vec4");a.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n  void main() {\n    gl_FragColor \x3d color;\n  }\n  "],["\n  void main() {\n    gl_FragColor \x3d color;\n  }\n  "]))))};(function(a){a.bindUniforms=function(a){a.setUniform4f("color",1,1,1,1)}})(b.HUDOcclusion||(b.HUDOcclusion={}));var e,f});