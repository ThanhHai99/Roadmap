const logger = require('./winston');

logger.info('Info log %');
logger.warn('Warning log');
logger.error(new Error('Error log'));
