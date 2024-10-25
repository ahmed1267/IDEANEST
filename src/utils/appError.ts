class appError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;

    constructor(message: string | undefined, statusCode: number) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        this.message = message || '';
        console.log(`Error: ${message}`)
        Error.captureStackTrace(this, this.constructor);
    }
}

export default appError;