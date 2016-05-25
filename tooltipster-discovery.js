/**
 * tooltipster.discovery v1.0.0
 * https://github.com/louisameline/tooltipster.discovery/
 * Developed by Louis Ameline
 * MIT license
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module unless amdModuleId is set
		define(['tooltipster'], function ($) {
			return (factory($));
		});
	}
	else if (typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but
		// only CommonJS-like environments that support module.exports,
		// like Node.
		module.exports = factory(require('tooltipster'));
	}
	else {
		factory(jQuery);
	}
}(this, function($) {
	
	$.tooltipster.plugin({
		name: 'laa.discovery',
		core: {
			_init: function() {
				
				var self = this;
				
				self.classNames = [];
				
				// bind on start events (triggered on mouseenter)
				$.tooltipster.on('start', function(event) {
					
					$.each(self.classNames, function(i, className) {
						
						if ($(event.instance.elementOrigin()).hasClass(className)) {
							
							var instances = $.tooltipster.instances('.' + className),
								open = false,
								duration;
							
							$.each(instances, function(i, instance) {
								
								if (instance !== event.instance) {
									
									// if another instance is already open
									if (instance.status().open) {
										
										open = true;
										
										// get the current animationDuration
										duration = instance.option('animationDuration');
										
										// close the tooltip without animation
										instance.option('animationDuration', 0);
										instance.close();
										
										// restore the animationDuration to its normal value
										instance.option('animationDuration', duration);
									}
								}
							});
							
							// if another instance was open
							if (open) {
								
								duration = event.instance.option('animationDuration');
								
								// open the tooltip without animation
								event.instance.option('animationDuration', 0);
								event.instance.open();
								
								// restore the animationDuration to its normal value
								event.instance.option('animationDuration', duration);
								
								// now that we have opened the tooltip, the hover trigger must be stopped
								event.stop();
							}
						}
					});
				});
			},
			group: function(className) {
				this.classNames.push(className);
			},
			ungroup: function(className) {
				this.classNames = $.grep(this.classNames, function(el, i){ return el !== className });
			}
		}
	});
}));
