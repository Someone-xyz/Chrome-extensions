/// ===============================
/// ELEMENTS KO SELECT KAR RAHE HAIN
/// ===============================

// Color picker input
const colorInp = document.getElementById('colorInp');

// Preview text
const color = document.getElementById('color');

// HEX code dikhane ke liye
const colorCodeHex = document.getElementById('colorCodeHex');

// RGB code dikhane ke liye
const colorCodeRgb = document.getElementById('colorCodeRgb');

// RGBA code dikhane ke liye
const colorCodeRgba = document.getElementById('colorCodeRgba');



/// =======================================
/// HEX COLOR KO RGB ME CONVERT KARNE KA FUNCTION
/// =======================================

function hexToRgb(hex) {

    /*
        Example HEX:
        #ff0000

        Breakdown:
        ff = Red
        00 = Green
        00 = Blue
    */

    // Red value nikal rahe hain
    const r = parseInt(hex.slice(1, 3), 16);

    // Green value
    const g = parseInt(hex.slice(3, 5), 16);

    // Blue value
    const b = parseInt(hex.slice(5, 7), 16);

    // Object return kar diya
    return { r, g, b };
}



/// =======================================
/// INPUT EVENT
/// Jab bhi user color change kare
/// =======================================

colorInp.addEventListener('input', () => {

    // Input se HEX value milti hai
    // Example: #3498db
    const hex = colorInp.value;

    // Text preview
    color.textContent = `Selected Color: ${hex}`;

    // Background bhi same color ka kar diya
    const body = document.getElementById('bdy').style.backgroundColor = hex;



    /// ==========================
    /// HEX SHOW KARNA
    /// ==========================

    colorCodeHex.textContent = `HEX: ${hex}`;



    /// ==========================
    /// RGB BANANA
    /// ==========================

    // Function call kiya
    const rgb = hexToRgb(hex);

    /*
        rgb object:
        {
            r: 52,
            g: 152,
            b: 219
        }
    */

    // RGB string
    const rgbCode = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

    // Show in HTML
    colorCodeRgb.textContent = `RGB: ${rgbCode}`;



    /// ==========================
    /// RGBA BANANA
    /// ==========================

    /*
        Alpha:
        0   = transparent
        1   = full visible
    */

    const rgbaCode = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.5)`; 

    // Show in HTML
    colorCodeRgba.textContent = `RGBA: ${rgbaCode}`;

});



/// =======================================
/// DEFAULT COLOR SHOW KARWANA
/// Page load hote hi
/// =======================================

colorInp.dispatchEvent(new Event('input'));