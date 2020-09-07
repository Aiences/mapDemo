// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(n,e,b,c){Object.defineProperty(e,"__esModule",{value:!0});e.TerrainTexture=function(a,d){a.varyings.add("vtc","vec2");a.vertex.uniforms.add("texOffsetAndScale","vec4");a.fragment.uniforms.add("tex","sampler2D");d.textureFadingEnabled&&(a.vertex.uniforms.add("nextTexOffsetAndScale","vec4"),a.varyings.add("nvtc","vec2"),a.fragment.uniforms.add("texNext","sampler2D"),a.fragment.uniforms.add("textureFadeFactor","float"));a.vertex.code.add(c.glsl(f||
(f=b.__makeTemplateObject(["\n  void forwardTextureCoordinates(in vec2 uv) {\n    vtc \x3d uv * texOffsetAndScale.zw + texOffsetAndScale.xy;\n    ","\n  }\n  "],["\n  void forwardTextureCoordinates(in vec2 uv) {\n    vtc \x3d uv * texOffsetAndScale.zw + texOffsetAndScale.xy;\n    ","\n  }\n  "])),d.textureFadingEnabled?c.glsl(g||(g=b.__makeTemplateObject(["nvtc \x3d uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;"],["nvtc \x3d uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;"]))):
c.glsl(h||(h=b.__makeTemplateObject([""],[""])))));a.fragment.code.add(c.glsl(k||(k=b.__makeTemplateObject(["\n  vec4 getTileColor() {\n    ","\n  }\n  "],["\n  vec4 getTileColor() {\n    ","\n  }\n  "])),d.textureFadingEnabled?c.glsl(l||(l=b.__makeTemplateObject(["return textureFadeFactor \x3c 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);"],["return textureFadeFactor \x3c 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);"]))):
c.glsl(m||(m=b.__makeTemplateObject(["return texture2D(tex, vtc);"],["return texture2D(tex, vtc);"])))))};var g,h,f,l,m,k});