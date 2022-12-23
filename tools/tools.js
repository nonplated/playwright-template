/*
    This function is designed to create friendly path for screenshot method, for example:

    // Init
    const screenshot = filenameWithTimestampCreator('./images/mypage/', 'dev');

    // Use inside tests
    await page.screenshot({ path: screenshot.path('should_be_visible_menu') })
    await page.screenshot({ path: screenshot.path('should_be_available_button') })

    Screenshots will be saved with filenames similar to:
    ./images/mypage/20221230_0000000012_dev_should_be_visible_menu.jpg
    ./images/mypage/20221230_0000000257_dev_should_be_available_button.jpg

    This is usefull for debuging and scrolling history of screenshots image by image in running order.
*/

exports.filenameWithTimestampCreator = (dir = './', prefix = '', file_extension = 'jpg') => {
    const start_time_string = `${(new Date()).getFullYear()}${("0"+(1+(new Date()).getMonth())).slice(-2)}${("0"+(new Date()).getDate()).slice(-2)}_${("0"+(new Date()).getHours()).slice(-2)}${("0"+(new Date()).getMinutes()).slice(-2)}${("0"+(new Date()).getSeconds()).slice(-2)}`;
    const timestamp_start = Date.now();
    return {
        path: (description = '') => {
            const timestamp_current = Date.now();
            const timestamp_diff = timestamp_current - timestamp_start;
            const timestamp_diff_string = ("0000000000"+timestamp_diff).slice(-10);
            return `${dir}${start_time_string}_${timestamp_diff_string}_${prefix}_${description}.${file_extension}`;
        }
    }
}