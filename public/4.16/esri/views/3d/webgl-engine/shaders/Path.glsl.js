// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/ForwardLinearDepth.glsl ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/attributes/PathVertexPosition.glsl ../core/shaderLibrary/output/OutputDepth.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl ../core/shaderLibrary/shading/EvaluateSceneLighting.glsl ../core/shaderLibrary/shading/Normals.glsl ../core/shaderLibrary/shading/NormalUtils.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),
function(H,g,c,z,e,f,A,B,C,D,E,F,h,k,d,G){Object.defineProperty(g,"__esModule",{value:!0});g.build=function(b){var a=new G.ShaderBuilder;a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3");a.varyings.add("vpos","vec3");a.include(A.PathVertexPosition,b);0===b.output&&(a.include(f.Transform,{linearDepth:!1}),b.receiveShadows&&a.include(k.ReadShadowMap,b),a.include(z.ForwardLinearDepth,b),a.varyings.add("vnormal","vec3"),a.varyings.add("vcolor","vec4"),
a.vertex.code.add(d.glsl(l||(l=c.__makeTemplateObject(["\n      void main() {\n        vpos \x3d calculateVPos();\n        vnormal \x3d normalize(localNormal());\n\n        gl_Position \x3d transformPosition(proj, view, vpos);\n\n        forwardLinearDepth();\n\n        vcolor \x3d getColor();\n      }\n    "],["\n      void main() {\n        vpos \x3d calculateVPos();\n        vnormal \x3d normalize(localNormal());\n\n        gl_Position \x3d transformPosition(proj, view, vpos);\n\n        forwardLinearDepth();\n\n        vcolor \x3d getColor();\n      }\n    "])))),
a.include(e.Slice,b),a.include(E.EvaluateSceneLighting,b),a.include(D.EvaluateAmbientOcclusion,b),b.receiveShadows&&a.include(k.ReadShadowMap,b),a.include(F.Normals,b),a.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("specular","vec3").add("opacity","float"),a.fragment.code.add(d.glsl(m||(m=c.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n\n        shadingParams.viewDirection \x3d normalize(vpos - camPos);\n        shadingParams.normalView \x3d vnormal;\n        vec3 normal \x3d shadingNormal(shadingParams);\n        float ssao \x3d evaluateAmbientOcclusionInverse();\n\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight \x3d ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n    "],
["\n      void main() {\n        discardBySlice(vpos);\n\n        shadingParams.viewDirection \x3d normalize(vpos - camPos);\n        shadingParams.normalView \x3d vnormal;\n        vec3 normal \x3d shadingNormal(shadingParams);\n        float ssao \x3d evaluateAmbientOcclusionInverse();\n\n        float additionalAmbientScale \x3d _oldHeuristicLighting(vpos + localOrigin);\n        vec3 additionalLight \x3d ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;\n    "])))),
b.receiveShadows?a.fragment.code.add(d.glsl(n||(n=c.__makeTemplateObject(["\n        float shadow \x3d readShadowMap(vpos, linearDepth);\n      "],["\n        float shadow \x3d readShadowMap(vpos, linearDepth);\n      "])))):0===b.viewingMode?a.fragment.code.add(d.glsl(p||(p=c.__makeTemplateObject(["\n        float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);\n      "],["\n        float shadow \x3d lightingGlobalFactor * (1.0 - additionalAmbientScale);\n      "])))):a.fragment.code.add(d.glsl(q||
(q=c.__makeTemplateObject(["\n        float shadow \x3d 0.0;\n      "],["\n        float shadow \x3d 0.0;\n      "])))),a.fragment.code.add(d.glsl(r||(r=c.__makeTemplateObject(["\n        vec3 albedo \x3d vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one\n        float combinedOpacity \x3d vcolor.a * opacity;\n        albedo +\x3d 0.25 * specular; // don't completely ignore specular for now\n\n        vec3 shadedColor \x3d evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);\n        gl_FragColor \x3d vec4(shadedColor, combinedOpacity);\n        gl_FragColor \x3d highlightSlice(gl_FragColor, vpos);\n      }\n    "],
["\n        vec3 albedo \x3d vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one\n        float combinedOpacity \x3d vcolor.a * opacity;\n        albedo +\x3d 0.25 * specular; // don't completely ignore specular for now\n\n        vec3 shadedColor \x3d evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);\n        gl_FragColor \x3d vec4(shadedColor, combinedOpacity);\n        gl_FragColor \x3d highlightSlice(gl_FragColor, vpos);\n      }\n    "])))));
if(1===b.output||3===b.output)a.include(f.Transform,{linearDepth:!0}),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth","float"),a.vertex.code.add(d.glsl(t||(t=c.__makeTemplateObject(["\n        void main() {\n          vpos \x3d calculateVPos();\n          gl_Position \x3d transformPositionWithDepth(proj, view, vpos, nearFar, depth);\n        }\n    "],["\n        void main() {\n          vpos \x3d calculateVPos();\n          gl_Position \x3d transformPositionWithDepth(proj, view, vpos, nearFar, depth);\n        }\n    "])))),
a.include(e.Slice,b),a.include(B.OutputDepth,b),a.fragment.uniforms.add("timeElapsed","float"),a.fragment.code.add(d.glsl(u||(u=c.__makeTemplateObject(["\n        void main() {\n          discardBySlice(vpos);\n          outputDepth(depth);\n        }\n    "],["\n        void main() {\n          discardBySlice(vpos);\n          outputDepth(depth);\n        }\n    "]))));2===b.output&&(a.include(f.Transform,{linearDepth:!1}),a.include(h.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal",
"vec3"),a.vertex.code.add(d.glsl(v||(v=c.__makeTemplateObject(["\n        void main(void) {\n          vpos \x3d calculateVPos();\n          vnormal \x3d normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "],["\n        void main(void) {\n          vpos \x3d calculateVPos();\n          vnormal \x3d normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "])))),
a.include(e.Slice,b),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(d.glsl(w||(w=c.__makeTemplateObject(["\n        void main() {\n          discardBySlice(vpos);\n          vec3 normal \x3d normalize(vnormal);\n          if (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\n          gl_FragColor \x3d vec4(vec3(0.5) + 0.5 * normal, 1.0);\n        }\n    "],["\n        void main() {\n          discardBySlice(vpos);\n          vec3 normal \x3d normalize(vnormal);\n          if (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;\n          gl_FragColor \x3d vec4(vec3(0.5) + 0.5 * normal, 1.0);\n        }\n    "])))));
4===b.output&&(a.include(f.Transform,{linearDepth:!1}),a.include(h.NormalUtils,b),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vnormal","vec3"),a.vertex.code.add(d.glsl(x||(x=c.__makeTemplateObject(["\n        void main(void) {\n          vpos \x3d calculateVPos();\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "],["\n        void main(void) {\n          vpos \x3d calculateVPos();\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "])))),
a.include(e.Slice,b),a.include(C.OutputHighlight),a.fragment.code.add(d.glsl(y||(y=c.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n        outputHighlight();\n      }\n    "],["\n      void main() {\n        discardBySlice(vpos);\n        outputHighlight();\n      }\n    "])))));return a};var l,m,n,p,q,r,t,u,v,w,x,y});