export const baseURL = 'https://bilibili.tv';
export const apiBaseURL = 'https://api.bilibili.tv';
/**
 * Get api gateway url.
 * @param {string} version api version.
 * @return {string}
 */
export const getGatewayURL = (version) => {
    if (typeof version === 'string') {
        return apiBaseURL.concat(`/intl/gateway/web/${version.toLowerCase()}/`);
    } else return apiBaseURL.concat('/intl/gateway/web/');
};
