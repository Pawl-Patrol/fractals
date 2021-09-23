// c = a + bi

// square(c) -> c^2
function square(c)
{
    let aa = c.real * c.real;
    let bb = c.imag * c.imag;
    let ab2 = c.real * c.imag * 2;
    c.real = aa - bb;
    c.imag = ab2;
    return aa + bb > 4;
}

// mandelbrot(c, o) -> c^2 + o
// o = original starting point
function mandelbrot(c, o)
{
    let state = square(c);
    c.real += o.real;
    c.imag += o.imag;
    return state
}

// f1(c) -> 0.5sin(x/x^3)
function f1(c)
{
    let aa = c.real * c.real;
    let bb = c.imag * c.imag;
    let aabb = (aa + bb) * (aa + bb);
    let the = (aa - bb) / aabb;
    let fuck = 2 * c.real * c.imag / aabb;
    c.real = 0.5 * Math.sin(the) * Math.cosh(fuck);
    c.imag = -0.5 * Math.cos(the) * Math.sinh(fuck);
    return aa + bb > 4
}

// f2(c) -> c^2 - 0.6 + (a - 0.6)i
// I'd call it fidget spinner lol
function f2(c)
{
    state = square(c);
    c.real -= 0.6;
    c.imag += c.real;
    return state;
}
