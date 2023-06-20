(function(a) {
    'use strict';
  
    function b() {
      var d = a('.portfolio-grid'),
        f = a('.portfolio-filters');
      d && (d.shuffle({
        speed: 450,
        itemSelector: 'figure'
      }), f.on('click', '.filter', function(g) {
        d.shuffle('update'), g.preventDefault(), a('.portfolio-filters .filter').parent().removeClass('active'), a(this).parent().addClass('active'), d.shuffle('shuffle', a(this).attr('data-group'))
      }))
    }
  
    function c() {
      var d = a(window).width(),
        f = a('#site_header');
      992 > d ? (f.addClass('mobile-menu-hide'), setTimeout(function() {
        f.addClass('animate')
      }, 500)) : f.removeClass('animate')
    }
    a(window).on('load', function() {
      a('.preloader').fadeOut(800, 'linear');
      var d = a('.subpages');
      d[0] && PageTransitions.init({
        menu: 'ul.site-main-menu'
      })
    }).on('resize', function() {
      c()
    }), a(document).on('ready', function() {
      var d = a('.portfolio-grid');
      d.imagesLoaded(function() {
        b(this)
      });
      var f = a('.blog-masonry');
      f.imagesLoaded(function() {
        f.masonry()
      }), a('.menu-toggle').on('click', function() {
        a('#site_header').addClass('animate'), a('#site_header').toggleClass('mobile-menu-hide')
      }), a('.site-main-menu').on('click', 'a', function() {
        c()
      }), a('.sidebar-toggle').on('click', function() {
        a('#blog-sidebar').toggleClass('open')
      }), a('body').magnificPopup({
        delegate: 'a.lightbox',
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        image: {
          titleSrc: 'title',
          gallery: {
            enabled: !0
          }
        },
        
        callbacks: {
          markupParse: function(g, h, i) {
            h.title = i.el.attr('title')
          }
        }
      }), a('.ajax-page-load-link').magnificPopup({
        type: 'ajax',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
          enabled: !0
        }
      }), a('.form-control').val('').on('focusin', function() {
        a(this).parent('.form-group').addClass('form-group-focus')
      }).on('focusout', function() {
        0 === a(this).val().length && a(this).parent('.form-group').removeClass('form-group-focus')
      })
    })
  })(jQuery);