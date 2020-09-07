// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/hud/AlignPixel.glsl ../core/shaderLibrary/hud/HUD.glsl ../core/shaderLibrary/hud/HUDOcclusionPass.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/VisualVariables.glsl ../core/shaderLibrary/util/AlphaDiscard.glsl ../core/shaderLibrary/util/ColorConversion.glsl ../core/shaderLibrary/util/RgbaFloatEncoding.glsl ../core/shaderLibrary/util/ScreenSizePerspective.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),
function(S,f,d,E,F,G,H,I,J,K,L,M,g,N,O,P,c,Q){function k(a,b){void 0===b&&(b=R);if(a.textureIsSignedDistanceField){var c=a.anchorPos;a=a.distanceFieldBoundingBox;var d=b;d[0]=c[0]*(a[2]-a[0])+a[0];d[1]=c[1]*(a[3]-a[1])+a[1]}else E.vec2.copy(b,a.anchorPos);return b}Object.defineProperty(f,"__esModule",{value:!0});f.build=function(a){var b=new Q.ShaderBuilder,e=a.signedDistanceFieldEnabled;b.include(I.AlignPixel);b.include(J.HUD,a);b.include(H.Slice,a);if(6===a.output)return b.include(K.HUDOcclusionPass,
a),b;b.include(P.ScreenSizePerspective);b.include(O.RgbaFloatEncoding);b.include(N.ColorConversion,{stages:1});b.include(M.VisualVariables,a);b.varyings.add("vcolor","vec4");b.varyings.add("vtc","vec2");b.varyings.add("vsize","vec2");a.binaryHighlightOcclusionEnabled&&b.varyings.add("voccluded","float");b.vertex.uniforms.add("screenOffset","vec2").add("anchorPos","vec2").add("textureCoordinateScaleFactor","vec2").add("materialColor","vec4");e&&b.vertex.uniforms.add("outlineColor","vec4");a.screenSizePerspectiveEnabled&&
b.vertex.uniforms.add("screenSizePerspective","vec4");(a.debugDrawBorder||a.binaryHighlightOcclusionEnabled)&&b.varyings.add("debugBorderCoords","vec4");b.attributes.add("uv0","vec2");b.attributes.add("color","vec4");b.attributes.add("size","vec2");b.attributes.add("auxpos2","vec4");b.vertex.code.add(c.glsl(l||(l=d.__makeTemplateObject(["\n    void main(void) {\n      ProjectHUDAux projectAux;\n      vec4 posProj \x3d projectPositionHUD(projectAux);\n\n      if (rejectBySlice(projectAux.posModel)) {\n        // Project outside of clip plane\n        gl_Position \x3d vec4(1e038, 1e038, 1e038, 1.0);\n        return;\n      }\n      vec2 inputSize;\n      ",
"\n\n      ","\n\n      vec2 combinedSize \x3d inputSize * pixelRatio;\n      vec4 quadOffset \x3d vec4(0.0);\n\n      ","\n\n      ","\n    "],["\n    void main(void) {\n      ProjectHUDAux projectAux;\n      vec4 posProj \x3d projectPositionHUD(projectAux);\n\n      if (rejectBySlice(projectAux.posModel)) {\n        // Project outside of clip plane\n        gl_Position \x3d vec4(1e038, 1e038, 1e038, 1.0);\n        return;\n      }\n      vec2 inputSize;\n      ","\n\n      ","\n\n      vec2 combinedSize \x3d inputSize * pixelRatio;\n      vec4 quadOffset \x3d vec4(0.0);\n\n      ",
"\n\n      ","\n    "])),a.screenSizePerspectiveEnabled?c.glsl(m||(m=d.__makeTemplateObject(["\n      inputSize \x3d screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);\n      vec2 screenOffsetScaled \x3d screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);\n         "],["\n      inputSize \x3d screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);\n      vec2 screenOffsetScaled \x3d screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);\n         "]))):
c.glsl(n||(n=d.__makeTemplateObject(["\n      inputSize \x3d size;\n      vec2 screenOffsetScaled \x3d screenOffset;"],["\n      inputSize \x3d size;\n      vec2 screenOffsetScaled \x3d screenOffset;"]))),a.vvSize?"inputSize *\x3d vvScale(auxpos2).xx;":"",a.occlusionTestEnabled||a.binaryHighlightOcclusionEnabled?"bool visible \x3d testVisibilityHUD(posProj);":"",a.binaryHighlightOcclusionEnabled?"voccluded \x3d visible ? 0.0 : 1.0;":""));var h=c.glsl(p||(p=d.__makeTemplateObject(["\n      vec2 uv01 \x3d floor(uv0);\n      vec2 uv \x3d uv0 - uv01;\n      quadOffset.xy \x3d ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;\n  "],
["\n      vec2 uv01 \x3d floor(uv0);\n      vec2 uv \x3d uv0 - uv01;\n      quadOffset.xy \x3d ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;\n  "]))),f=e?c.glsl(q||(q=d.__makeTemplateObject(["\n  posProj \x3d alignToPixelOrigin(posProj, viewport.zw) + quadOffset;"],["\n  posProj \x3d alignToPixelOrigin(posProj, viewport.zw) + quadOffset;"]))):c.glsl(r||(r=d.__makeTemplateObject(["\n  posProj +\x3d quadOffset;\n  if (inputSize.x \x3d\x3d size.x) {\n    posProj \x3d alignToPixelOrigin(posProj, viewport.zw);\n  }"],
["\n  posProj +\x3d quadOffset;\n  if (inputSize.x \x3d\x3d size.x) {\n    posProj \x3d alignToPixelOrigin(posProj, viewport.zw);\n  }"])));b.vertex.code.add(c.glsl(t||(t=d.__makeTemplateObject(["\n      ","\n      ","\n      ","\n\n      bool alphaDiscard \x3d vcolor.a \x3c ",";\n      ",'\n      if (alphaDiscard) {\n        // "early discard" if both symbol color (\x3d fill) and outline color (if applicable) are transparent\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      } else {\n        ',
"\n        gl_Position \x3d posProj;\n      }\n\n      vtc \x3d uv * textureCoordinateScaleFactor;\n\n      ","\n      vsize \x3d inputSize;\n      ","\n    }\n    "],["\n      ","\n      ","\n      ","\n\n      bool alphaDiscard \x3d vcolor.a \x3c ",";\n      ",'\n      if (alphaDiscard) {\n        // "early discard" if both symbol color (\x3d fill) and outline color (if applicable) are transparent\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      } else {\n        ',
"\n        gl_Position \x3d posProj;\n      }\n\n      vtc \x3d uv * textureCoordinateScaleFactor;\n\n      ","\n      vsize \x3d inputSize;\n      ","\n    }\n    "])),a.occlusionTestEnabled?"if (visible) {":"",h,a.vvColor?"vcolor \x3d vvGetColor(auxpos2, vvColorValues, vvColorColors) * materialColor;":"vcolor \x3d color / 255.0 * materialColor;",c.glsl.float(g.symbolAlphaCutoff),e?"alphaDiscard \x3d alphaDiscard \x26\x26 outlineColor.a \x3c "+c.glsl.float(g.symbolAlphaCutoff)+";":"",f,a.debugDrawBorder?
"debugBorderCoords \x3d vec4(uv01, 1.5 / combinedSize);":"",a.occlusionTestEnabled?c.glsl(u||(u=d.__makeTemplateObject(["} else { vtc \x3d vec2(0.0);\n        ",""],["} else { vtc \x3d vec2(0.0);\n        ",""])),a.debugDrawBorder?"debugBorderCoords \x3d vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"):""));b.fragment.uniforms.add("tex","sampler2D");e&&(b.fragment.uniforms.add("outlineColor","vec4"),b.fragment.uniforms.add("outlineSize","float"));h=a.debugDrawBorder?c.glsl(v||(v=d.__makeTemplateObject(["(isBorder \x3e 0.0 ? 0.0 : ",
")"],["(isBorder \x3e 0.0 ? 0.0 : ",")"])),c.glsl.float(g.defaultMaskAlphaCutoff)):c.glsl.float(g.defaultMaskAlphaCutoff);e=c.glsl(w||(w=d.__makeTemplateObject(["\n    ","\n\n    ","\n\n    ","\n  "],["\n    ","\n\n    ","\n\n    ","\n  "])),a.debugDrawBorder?c.glsl(x||(x=d.__makeTemplateObject(["\n      float isBorder \x3d float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));"],["\n      float isBorder \x3d float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));"]))):
"",e?c.glsl(y||(y=d.__makeTemplateObject(["\n      vec4 fillPixelColor \x3d vcolor;\n\n      // Attempt to sample texel centers to avoid that thin cross outlines\n      // disappear with large symbol sizes.\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041\n      const float txSize \x3d 128.0;\n      const float texelSize \x3d 1.0 / txSize;\n      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel\n      vec2 scaleFactor \x3d (vsize - txSize) * texelSize;\n      vec2 samplePos \x3d vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;\n\n      // Get distance and map it into [-0.5, 0.5]\n      float d \x3d rgba2float(texture2D(tex, samplePos)) - 0.5;\n\n      // Distance in output units (i.e. pixels)\n      float dist \x3d d * vsize.x;\n\n      // Create smooth transition from the icon into its outline\n      float fillAlphaFactor \x3d clamp(0.5 - dist, 0.0, 1.0);\n      fillPixelColor.a *\x3d fillAlphaFactor;\n\n      if (outlineSize \x3e 0.25) {\n        vec4 outlinePixelColor \x3d outlineColor;\n        float clampedOutlineSize \x3d min(outlineSize, 0.5*vsize.x);\n\n        // Create smooth transition around outline\n        float outlineAlphaFactor \x3d clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);\n        outlinePixelColor.a *\x3d outlineAlphaFactor;\n\n        if (\n          outlineAlphaFactor + fillAlphaFactor \x3c ",
" ||\n          fillPixelColor.a + outlinePixelColor.a \x3c ","\n        ) {\n          discard;\n        }\n\n        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)\n        float compositeAlpha \x3d outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);\n        vec3 compositeColor \x3d vec3(outlinePixelColor) * outlinePixelColor.a +\n          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);\n\n        gl_FragColor \x3d vec4(compositeColor, compositeAlpha);\n      } else {\n        if (fillAlphaFactor \x3c ",
") {\n          discard;\n        }\n\n        gl_FragColor \x3d premultiplyAlpha(fillPixelColor);\n      }\n\n      // visualize SDF:\n      // gl_FragColor \x3d vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);\n      "],["\n      vec4 fillPixelColor \x3d vcolor;\n\n      // Attempt to sample texel centers to avoid that thin cross outlines\n      // disappear with large symbol sizes.\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041\n      const float txSize \x3d 128.0;\n      const float texelSize \x3d 1.0 / txSize;\n      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel\n      vec2 scaleFactor \x3d (vsize - txSize) * texelSize;\n      vec2 samplePos \x3d vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;\n\n      // Get distance and map it into [-0.5, 0.5]\n      float d \x3d rgba2float(texture2D(tex, samplePos)) - 0.5;\n\n      // Distance in output units (i.e. pixels)\n      float dist \x3d d * vsize.x;\n\n      // Create smooth transition from the icon into its outline\n      float fillAlphaFactor \x3d clamp(0.5 - dist, 0.0, 1.0);\n      fillPixelColor.a *\x3d fillAlphaFactor;\n\n      if (outlineSize \x3e 0.25) {\n        vec4 outlinePixelColor \x3d outlineColor;\n        float clampedOutlineSize \x3d min(outlineSize, 0.5*vsize.x);\n\n        // Create smooth transition around outline\n        float outlineAlphaFactor \x3d clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);\n        outlinePixelColor.a *\x3d outlineAlphaFactor;\n\n        if (\n          outlineAlphaFactor + fillAlphaFactor \x3c ",
" ||\n          fillPixelColor.a + outlinePixelColor.a \x3c ","\n        ) {\n          discard;\n        }\n\n        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)\n        float compositeAlpha \x3d outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);\n        vec3 compositeColor \x3d vec3(outlinePixelColor) * outlinePixelColor.a +\n          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);\n\n        gl_FragColor \x3d vec4(compositeColor, compositeAlpha);\n      } else {\n        if (fillAlphaFactor \x3c ",
") {\n          discard;\n        }\n\n        gl_FragColor \x3d premultiplyAlpha(fillPixelColor);\n      }\n\n      // visualize SDF:\n      // gl_FragColor \x3d vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);\n      "])),h,c.glsl.float(g.symbolAlphaCutoff),h):c.glsl(z||(z=d.__makeTemplateObject(["\n          vec4 texColor \x3d texture2D(tex, vtc, -0.5);\n          if (texColor.a \x3c ",") {\n            discard;\n          }\n          gl_FragColor \x3d texColor * premultiplyAlpha(vcolor);\n          "],
["\n          vec4 texColor \x3d texture2D(tex, vtc, -0.5);\n          if (texColor.a \x3c ",") {\n            discard;\n          }\n          gl_FragColor \x3d texColor * premultiplyAlpha(vcolor);\n          "])),h),a.debugDrawBorder?c.glsl(A||(A=d.__makeTemplateObject(["gl_FragColor \x3d mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);"],["gl_FragColor \x3d mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder);"]))):"");0===a.output&&b.fragment.code.add(c.glsl(B||(B=d.__makeTemplateObject(["\n    void main() {\n      ",
"\n    }\n    "],["\n    void main() {\n      ","\n    }\n    "])),e));4===a.output&&(b.include(L.OutputHighlight),b.fragment.code.add(c.glsl(C||(C=d.__makeTemplateObject(["\n    void main() {\n      ","\n      ","\n    }\n    "],["\n    void main() {\n      ","\n      ","\n    }\n    "])),e,a.binaryHighlightOcclusionEnabled?c.glsl(D||(D=d.__makeTemplateObject(["\n          if (voccluded \x3d\x3d 1.0) {\n            gl_FragColor \x3d vec4(1.0, 1.0, 0.0, 1.0);\n          } else {\n            gl_FragColor \x3d vec4(1.0, 0.0, 1.0, 1.0);\n          }"],
["\n          if (voccluded \x3d\x3d 1.0) {\n            gl_FragColor \x3d vec4(1.0, 1.0, 0.0, 1.0);\n          } else {\n            gl_FragColor \x3d vec4(1.0, 0.0, 1.0, 1.0);\n          }"]))):"outputHighlight();")));return b};(function(a){a.bindUniforms=function(b,a,c){b.setUniform4fv("materialColor",a.color);a.textureIsSignedDistanceField&&(0>=a.outlineColor[3]||0>=a.outlineSize?(b.setUniform4fv("outlineColor",G.vec4f64.ZEROS),b.setUniform1f("outlineSize",0)):(b.setUniform4fv("outlineColor",
a.outlineColor),b.setUniform1f("outlineSize",a.outlineSize)));c=c.pixelRatio||1;b.setUniform2f("screenOffset",2*a.screenOffset[0]*c,2*a.screenOffset[1]*c);b.setUniform2fv("anchorPos",k(a))}})(f.HUDMaterial||(f.HUDMaterial={}));f.calculateAnchorPosForRendering=k;var R=F.vec2f64.create(),m,n,l,p,q,r,u,t,v,x,y,z,A,w,B,D,C});