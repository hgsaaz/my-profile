const lightmodeCss = " mx-1 mx-lg-2 d-inline-flex justify-content-center align-items-center rounded-circle connect-icon bg-primary-light text-primary-fade"
const darkModeCss = " mx-1 mx-lg-2 d-inline-flex justify-content-center align-items-center rounded-circle connect-icon bg-dark text-primary-light"

const phoneIconCssString_light = "fa fa-phone" + lightmodeCss
const phoneIconCssString_dark = "fa fa-phone" + darkModeCss
export const phone = (isLight) => isLight ? phoneIconCssString_light : phoneIconCssString_dark

const mailIconCssString_light = "fa fa-envelope" + lightmodeCss
const mailIconCssString_dark = "fa fa-envelope" + darkModeCss
export const mail = (isLight) => isLight ? mailIconCssString_light : mailIconCssString_dark

const fbIconCssString_light = "fa fa-facebook" + lightmodeCss
const fbIconCssString_dark = "fa fa-facebook" + darkModeCss
export const fb = (isLight) => isLight ? fbIconCssString_light : fbIconCssString_dark

const twitterIconCssString_light = "fa fa-twitter" + lightmodeCss
const twitterIconCssString_dark = "fa fa-twitter" + darkModeCss
export const twitter = (isLight) => isLight ? twitterIconCssString_light : twitterIconCssString_dark

const instagramIconCssString_light = "fa fa-instagram" + lightmodeCss
const instagramIconCssString_dark = "fa fa-instagram" + darkModeCss
export const instagram = (isLight) => isLight ? instagramIconCssString_light : instagramIconCssString_dark

const skypeIconCssString_light = "fa fa-skype" + lightmodeCss
const skypeIconCssString_dark = "fa fa-skype" + darkModeCss
export const skype = (isLight) => isLight ? skypeIconCssString_light : skypeIconCssString_dark

const linkedinIconCssString_light = "fa fa-linkedin" + lightmodeCss
const linkedinIconCssString_dark = "fa fa-linkedin" + darkModeCss
export const linkedin = (isLight) => isLight ? linkedinIconCssString_light : linkedinIconCssString_dark

const back_to_top_light = "d-inline-flex justify-content-center align-items-center rounded-circle shadow bg-primary-fade text-primary-light back-to-top connect-icon cursor"
const back_to_top_dark = "d-inline-flex justify-content-center align-items-center rounded-circle shadow bg-primary-light text-dark back-to-top connect-icon cursor"
export const back_to_top = (isLight) => isLight ? back_to_top_light : back_to_top_dark