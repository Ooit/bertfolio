//Band-aid for positioning the CTA button in the Landing section to the bottom.
(function() {

    var landingHeight = document.getElementById("landing_section").offsetHeight,
    landingCTA = document.getElementById("landing_cta_button"),
    landingHeadline = document.getElementById("landing_headline_text").offsetHeight,
    landingSubtext = document.getElementById("landing_subtext_text").offsetHeight,
    ctaMargin = landingHeight - landingHeadline - landingSubtext;

    landingCTA.style.marginTop = ctaMargin / 1.3;
})();
