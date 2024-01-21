using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RazorUIComponentLibrary.Components.Models.Javascript_Models
{
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMRect
    public class DOMRect
    {
        // The x coordinate of the DOMRect's origin (typically the top-left corner of the rectangle).
        public string? X { get; set; }
        // The y coordinate of the DOMRect's origin (typically the top-left corner of the rectangle).
        public string? Y { get; set; }
        // Returns the top coordinate value of the DOMRect(has the same value as y, or y + height if height is negative).
        public string? Top { get; set; }
        // Returns the right coordinate value of the DOMRect(has the same value as x + width, or x if width is negative).
        public string? Right { get; set; }
        // Returns the bottom coordinate value of the DOMRect(has the same value as y + height, or y if height is negative).
        public string? Bottom { get; set; }
        // Returns the left coordinate value of the DOMRect(has the same value as x, or x + width if width is negative).
        public string? Left { get; set; }
        // The height of the DOMRect.
        public string? Height { get; set; }
        // The width of the DOMRect.
        public string? Width { get; set; }
    }
}
