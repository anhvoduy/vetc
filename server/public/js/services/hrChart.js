(function () {
    'use strict';    
    //angular.module('appService')
    app.directive('hrChart', function() {
        return {
            restrict: 'AE',
            scope: {
                hrValue: "@value",
                backgroundColor: "@backgroundColor",
                color: "@color",
                maxValue: "@maxValue",
                minValue: "@minValue",
                setFn: "&"
            },
            link: function(scope, element, attrs) {

                var margin = 2;
                var barWidth;
                var barHeight;
                var border = 2;

                var maxBarHeight;
                var maxBarWidth;
                var gradient;
                var largestValue;
                var graphAreaX = 0;
                var graphAreaY = 0;
                var graphAreaWidth;
                var graphAreaHeight;

                var maxBarWidth = graphAreaWidth;
                var barHeight;

                //create canvas for Device HR
                var createCanvas = function() {
                    var canvas = document.createElement('canvas');
                    element.append(canvas);
                    if (typeof G_vmlCanvasManager != 'undefined') {
                        canvas = G_vmlCanvasManager.initElement(canvas);
                    }
                    var ctx = canvas.getContext("2d");
                    return ctx;
                }

                scope.draw = function(stop) {
					
                    graphAreaWidth = $(element).parent().width();
                    graphAreaHeight = $(element).height() + 20;

                    if (ctx.canvas.width !== graphAreaWidth || ctx.canvas.height !== graphAreaHeight) {
                        ctx.canvas.width = graphAreaWidth;
                        ctx.canvas.height = graphAreaHeight;
                    }

                    // Calculate dimensions of the bar
                    maxBarWidth = graphAreaWidth;
                    barHeight = graphAreaHeight - margin * 2;

					if(stop){
						//then stop draw
						ctx.fillStyle = "#DDDDDD";
						ctx.fillRect(0,
							0,
							graphAreaWidth,
							graphAreaHeight);
						return;
					}
					
					// Draw bar background
                    ctx.fillStyle = scope.backgroundColor;
                    ctx.fillRect(0,
                        0,
                        graphAreaWidth,
                        graphAreaHeight);

					
					
                    var ratio = (parseInt(scope.hrValue) - parseInt(scope.minValue)) / (parseInt(scope.maxValue)- parseInt(scope.minValue));
                    barWidth = ratio * maxBarWidth;

                    

                    // Draw bar color if it is large enough to be visible
                    if (barHeight > border * 2) {
                        // Create gradient
                        gradient = ctx.createLinearGradient(0, 0, graphAreaWidth, 0);
                        gradient.addColorStop(0.1, "#00D025");
                        gradient.addColorStop(0.2, "#00E51A");
                        gradient.addColorStop(0.3, "#A7D900");
                        gradient.addColorStop(0.5, "#D5C700");
                        gradient.addColorStop(0.6, "#CE4B00");
                        gradient.addColorStop(0.8, "#CA0A00");
                        gradient.addColorStop(1, "#C60030");

                        // Turn on shadow
                        ctx.shadowOffsetX = 2;
                        ctx.shadowOffsetY = 2;
                        ctx.shadowBlur = 2;
                        ctx.shadowColor = "#999";

                        ctx.fillStyle = gradient;
                        // Fill rectangle with gradient						
                        ctx.fillRect(0,
                            margin + border,
                            barWidth - border,
                            barHeight - border * 2);

                        // Turn off shadow
                        ctx.shadowOffsetX = 0;
                        ctx.shadowOffsetY = 0;
                        ctx.shadowBlur = 0;
                    }

                }

                var ctx = createCanvas();
                scope.setFn({ theDirFn: scope.draw });

            }
        };
    });
})();