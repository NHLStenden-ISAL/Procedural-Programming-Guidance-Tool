/**
 * Copyright (c) 2009-2012 Jeremy Ashkenas, DocumentCloud
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * The following code has been adapted from Underscore.js (commit dc624f457a), shared under the MIT License.
 * GitHub Repository: https://github.com/jashkenas/underscore/tree/dc624f457a156669073a21c676ef525a62a57217
 *
 * Function found at: https://davidwalsh.name/function-debounce, on 2022-05-17.
 * Archived page: https://web.archive.org/web/20220519074432/https://davidwalsh.name/javascript-debounce-function
 */

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * 
 * @param func The function to be debounced.
 * @param wait The amount of milliseconds to wait before running the actual function.
 * @param immediate 
 * @returns 
 */
export default function debounce(func: any, wait: number, immediate: boolean = false) {
	var timeout: any;
	return function(this: any) {
		var context = this, args = arguments;
        var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

        var callNow = immediate && !timeout;

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
	};
}
