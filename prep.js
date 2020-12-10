document.addEventListener("DOMContentLoaded", function(e) {

    var c = d3.select("circle");
	var t  = d3.select("#lbl");
	function clr(){
		c.attr("transform", "translate(0)");
	}
	
	d3.select("svg").append('svg:image')
	  .attr("xlink:href", "/preps/pharaoh-right-facing.svg?1")
	  	.attr("x", 0)
		.attr("y", 130)
		.attr("width", 180)
		.attr("height", 180)
		;
			
		
	var sp = 1000;
	var fns = [
		function(){
			c.transition()
			.attr("transform", "translate(270)")
			.attr("fill", "red")
			.duration(1000).ease('bounce')
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			;
			
		},
		function(){
			var idInt;
			var radius  = 150;
			var a = 0;
			// var cs = [];
			// for (var i =0; i < 360; ){
				// i+=45;
				
				
				// x= 150 + Math.cos(i)*radius;
				// y= 150 + Math.sin(i)*radius;
				// cs.push([x, y]);
				// //c.transition().delay(sp).attr("transform", "translate("+x+","+ y+")");
				// //console.log(i, x, y);
			// }
			function animate(){
				a +=45;
				if (a>360){
					clr();
					clearInterval(idInt);
					console.log("stop");
					return;
				}
				x= 330 + Math.cos(a)*radius;
				y= 0 + Math.sin(a)*radius;
				c.transition().duration(sp).attr("transform", "translate("+x+","+ y+")");
				// console.log(a, x, y);
				
			}
			idInt=setInterval(animate, 1100);
			
			// c.data(cs).transition().duration(sp).attr("transform", function(d){
				// return "translate("+d[0]+", "+d[1]+")";
			// })
			
			// c
			// .transition().duration(sp).attr("transform", "translate(150)")
			// .transition().duration(sp).attr("transform", "translate(225, 125)")
			// .transition().duration(sp).attr("transform", "translate(225, 125)")
			// .transition().duration(sp).attr("transform", "translate(350, 125)")
			// .transition().duration(sp).attr("transform", "translate(500, 125)")
			// .transition().duration(sp).attr("transform", "translate(500, 25)")
			// .transition().duration(sp).attr("transform", "translate(500, -125)")
			// .transition().duration(sp).attr("transform", "translate(150, -125)")
			// .transition().duration(sp).attr("transform", "translate(150)")
			// ;
		},
		function(){
			c.transition().attr("transform", "translate(425)")
			.transition().duration(1000)
			.ease('linear')
			.delay(1000)
			.attr("transform", "translate(625)")
			.attr("fill", "red")
			.transition().delay(3000).duration(0).attr("transform", "translate(0)")
			
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black");
			
		},
		function(){
			c.transition()
			.attr("transform", "translate(270)")
			.attr("fill", "red")
			.duration(1000).ease('linear')
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			;			
		},
		function(){
			c.transition()
			.attr("transform", "translate(272)")
			.attr("fill", "red")
			.duration(1000).ease('linear')
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			;
			d3.select("#sq")
			.transition()
			.duration(1000).ease('linear')
			.attr("stroke", "red")
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("stroke", "navy")
		},
		function(){
			c
			.attr("transform", "translate(0, 100)")
			.transition().delay(3000).duration(1000)
			
			
			.attr("transform", "translate(0, 10)")
			c.transition()
			.attr("transform", "translate(800, 100)")
			.attr("fill", "red")
			.duration(1000).ease('linear')
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			;
			
		},
		function(){
			t.text("Acc");
			
			c
			.transition().duration(1000)
			.attr("transform", "translate(0)")
			.transition().duration(1000)
			.attr("transform", "translate(347, -97)")
			.attr("fill", "red")
			.each('end', function() {
				t
				.text("L")
				.transition()
				.delay(1000)
				.text("Loc");
			})
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {t.text("")})
			;
			},
		function(){
			t.text("Instr");
			
			c
			
			.attr("transform", "translate(347, -120)")
			.attr("fill", "red")
			
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {t.text("")})
			;
			},
		function(){
			t.text("Acc");
			c.transition()
			.attr("transform", "translate(270)")
			.duration(1000).ease('linear')
			.transition()
			.attr("transform", "translate(270, 50)")
			.attr("fill", "red")
			.each('end', function() {t.text("Instr")})
			.transition()
			.attr("transform", "translate(351, 58)")
			.duration(1000).ease('linear')
			.transition().delay(5000).duration(0)
			
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {t.text("")})
			;			
		},
		function(){
			t.text("Loc");
			
			c
			// .transition().duration(1000)
			.attr("transform", "translate(307, -97)")
			.transition().duration(1000)
			.attr("transform", "translate(387, -97)")
			.attr("fill", "red")
			.transition().duration(1000)
			.attr("transform", "translate(307, -97)")
			
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {t.text("")})
			;
			},
		function(){
			t.text("Instr");
			
			d3.select("#sq2").style("opacity", 1);
			
			c
			.attr("transform", "translate(449, 0)")
			.attr("fill", "red")
			
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {
				t.text("");
				d3.select("#sq2").style("opacity", 0);
			})
			;
			},
		function(){
			t.text("Acc");
			
			c
			// .attr("transform", "translate(0, -50)")
			.transition().duration(1000)
			
			.transition().duration(1000)
			.attr("transform", "translate(430, 0)")
			.attr("fill", "red")
			.each('end', function() {
				t
				.text("L")
				.transition()
				.delay(1000)
				.text("Loc");
				d3.select("#lineZa").attr("opacity", 1);
			})
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {
				t.text("");
				d3.select("#lineZa").attr("opacity", 0);
				})
			;
			},
		function(){
				t.text("Gen");
				
				c
				.transition().duration(0)
				.attr("transform", "translate(347, -97)")			
				.transition().duration(1000).delay(1000)
				.attr("transform", "translate(0)")
				.attr("fill", "red")
				.each('end', function() {
					// t.text("Loc");
				})
				.transition().delay(5000).duration(0)
				// .attr("transform", "translate(0)")
				.attr("fill", "black")
				.each('end', function() {t.text("")})
				;
			},
			function(){
				t.text("Gen");
				
				c
				.transition().duration(0)
				.attr("transform", "translate(347, 0)")			
				.transition().duration(1000).delay(1000)
				.attr("transform", "translate(0)")
				.attr("fill", "red")
				.each('end', function() {
					
				})
				.transition().delay(5000).duration(0)
				// .attr("transform", "translate(0)")
				.attr("fill", "black")
				.each('end', function() {t.text("")})
				;
			},
			function(){
				t.text("Instr");
				d3.select("#sq").transition().duration(0)
				.attr("fill", "red")
				.attr("stroke", "red")
				.each("end", function() {
					c.transition()
					.attr("transform", "translate(295)")
					.attr("fill", "red")
					.attr("stroke", "pink")
					.duration(0).ease('linear')
					.transition().delay(3000).duration(0)
					.attr("transform", "translate(0)")
					.attr("fill", "black")
					.attr("stroke", "black")
					.each("end", function() {
						d3.select("#sq").transition().duration(0).attr("stroke", "navy")
						.attr("fill", "blue");
						t.text("");
					})
					;			
					// 
				})
			},
			function(){
				t.text("Gen");
				c
				.attr("transform", "translate(351, 58)")
				.transition()
				.duration(1000)
				.attr("transform", "translate(270, 50)")
				.attr("fill", "red")
				.transition()
				.duration(1000)
				.attr("transform", "translate(270, 0)")
				.transition()
				.duration(1000)
				// .attr("transform", "translate(0)")
				// .each('end', function() {t.text("Instr")})
				.transition()
				// .attr("transform", "translate(351, 58)")
				.duration(1000).ease('linear')
				.transition().delay(5000).duration(0)
				
				.attr("transform", "translate(0)")
				.attr("fill", "black")
				.each('end', function() {t.text("")})
				;			
			},
		function(){
			t.text("Gen");
			
			c
			.attr("transform", "translate(430, 0)")
			.attr("fill", "red")
			.transition().duration(1000)
			.attr("transform", "translate(0, 0)")
			.each('end', function() {
				
			})
			.transition().duration(1000)
			.attr("fill", "black")
			.each('end', function() {
				t.text("");
				})
			;
			},
			function(){
				t.text("Instr");
				
				c
				.transition().duration(0)
				.attr("transform", "translate(347, 0)")			
				.transition().duration(1000).delay(1000);
				c.attr("fill", "white");
				d3.select("svg")
				.transition().delay(1000)
				.style("background", "red")
				.transition().delay(3000)
				.style("background", "white")
				.each('end', function() {
					c
					.attr("transform", "translate(0)")
					.attr("fill", "black")
					.transition().delay(5000).duration(0)
					// .attr("transform", "translate(0)")
					.attr("fill", "black")
					
					;
					t.text("")}
					)
				;
				
				
			},
			function(){
			t.text("Gen");
			c
			.transition()
			.attr("fill", "red")
			.attr("transform", "translate(435)")
			.transition().duration(0).delay(1000).attr("transform", "translate(235)")
			.transition().delay(3000).duration(0)
			.attr("fill", "black")
			.attr("transform", "translate(0)")
			.each('end', function() {
				t.text("");
			})
			;
			
		}, 
			function(){
				t.text("Acc");
				
				d3.select("#way").style("opacity", 1);
				d3.select("#sq").attr("stroke", "white");
				
				c
				.attr("transform", "translate(0, -20)")
				.attr("fill", "red")
				.transition().duration(1000)
				.each('end', function() {
					d3.select("#way").style("opacity", 1);
					
				})
				.attr("transform", "translate(600, -20)")
				.each('end', function() {
					
				})
				.transition().duration(0).delay(3000)
				.attr("transform", "translate(0, 0)")
				.attr("fill", "black")
				.each('end', function() {
					d3.select("#way").style("opacity", 0);
					d3.select("#sq").attr("stroke", "navy");
					t.text("");
					})
				;
			},
		function(){
			
			
			t.text("Instr");
			c
			.attr("transform", "translate(270)")
			.transition().delay(0).duration(0)
			.attr("fill", "red")
			.each('end', function() {
					d3.select("#lineP1")
					.transition().duration(1000)
					.style("opacity", 1)
					.each('end', function() {
						d3.select("#lineP2")
						.transition().duration(1000)
						.style("opacity", 1)
					});					
			})
			.transition().delay(5000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {
				t.text("");
				d3.select("#lineP1").style("opacity", 0);
				d3.select("#lineP2").style("opacity", 0);
			})
			;			
			;
		}, 
		function(){
			t.text("Gen");
			c
			.transition()
			.attr("fill", "red")
			.attr("transform", "translate(435)")
			.transition().duration(0).delay(1000).attr("transform", "translate(265)")
			.transition().duration(0).delay(2000).attr("transform", "translate(165)")
			.transition().duration(0).delay(3000).attr("transform", "translate(465)")
			.transition().duration(0).delay(4000).attr("transform", "translate(565)")			
			.transition().delay(5000).duration(0).attr("transform", "translate(0)")
			.attr("fill", "black")
			.transition().delay(7000).duration(0)
			.attr("transform", "translate(0)")
			.each('end', function() {
				t.text("");
			})
			;
			
		}, 
		function(){
			t.text("Acc");
			c.transition()
			.attr("transform", "translate(350)")
			.attr("fill", "red")
			.each('end', function() {
				t.text("Loc");				
			})
			.duration(1000).ease('linear')
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black").each('end', function() {
				t.text("");				
			})
			;			
		},
		function(){
			t.text("Gen");
			
			d3.select("#sq2").style("opacity", 1);
			d3.select("#sq3").style("opacity", 1);
			d3.select("#c2").style("opacity", 1);
			
			c
			.attr("transform", "translate(449, 0)")
			.attr("fill", "red")
			
			.transition().delay(3000).duration(0)
			.attr("transform", "translate(0)")
			.attr("fill", "black")
			.each('end', function() {
				t.text("");
				d3.select("#sq2").style("opacity", 0);
				d3.select("#sq3").style("opacity", 0);
				d3.select("#c2").style("opacity", 0);
			})
			;
			}, function(){				
				t.text("Instr");
				c
				.transition()
				.attr("fill", "red")
				.attr("transform", "translate(427)")
				.transition().duration(0).delay(1000).attr("transform", "translate(273)")
				.transition().delay(3000).duration(0)
				.attr("fill", "black")
				.attr("transform", "translate(0)")
				.each('end', function() {
					t.text("");
				})
				;
			
			}, 
		
	]

	var main = d3.select("#ff");			
	function makeBtn(fn, n){
		main.append("input")
		.attr("type", "button")
		.attr("id", fn)
		.attr("value", fn.toUpperCase())
		.on("click", function() { fns[n](); });	
	}
	
	makeBtn("ab", 0);
	makeBtn("vakol", 1);
	makeBtn("ad", 2);
	makeBtn("da", 3);
	makeBtn("k", 4);
	makeBtn("mima", 5);
	makeBtn("na", 6);
	makeBtn("nad", 7);
	makeBtn("pad", 8);
	makeBtn("pa", 9);
	makeBtn("mizh", 10);
	makeBtn("za", 11);
	makeBtn("z/s→na", 12);
	makeBtn("z→u", 13);
	makeBtn("z/sa+", 14);
	makeBtn("z-pad", 15);
	makeBtn("z-za", 16);
	makeBtn("pa-za", 17);
	makeBtn("kalya", 18);
	makeBtn("pawz/skroz/praz/tseraz", 19);
	makeBtn("pierad", 20);
	makeBtn("u~", 21);
	makeBtn("u→", 22);
	makeBtn("syarod", 23);
	makeBtn("pry", 24);
	
	
  
  });