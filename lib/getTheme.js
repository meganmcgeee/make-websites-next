import get from 'lodash/fp/get';

export default path => get(`theme.${path}`);
