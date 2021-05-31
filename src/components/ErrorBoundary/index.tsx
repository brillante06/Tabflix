import { AxiosError } from 'axios';
import React, { ErrorInfo } from 'react';
import * as S from './styles';

class ErrorBoundary extends React.Component<
    {},
    { hasError: boolean; status: number; message: string }
> {
    constructor(props: {}) {
        super(props);
        this.state = { hasError: false, status: 200, message: '🙏' };
    }

    componentDidCatch(Error: AxiosError, Info: ErrorInfo) {
        if (!Error) return;
        const statusCode: number | undefined = Error.response?.status;
        this.setState({ hasError: true });
        if (!statusCode) return;
        this.setState({ status: statusCode });
        if (statusCode === 400) this.setState({ message: 'This is Bad request Try again' });
        else if (statusCode === 401)
            this.setState({ message: 'This is unauthorized. please authorized first' });
        else if (statusCode === 403) this.setState({ message: 'Forbidden to access to server!' });
        else if (statusCode === 404) this.setState({ message: 'Cannot found the resource' });
        else if (statusCode === 500) this.setState({ message: 'Server Error please try again' });
    }

    handleClick() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <S.Container onClick={this.handleClick}>
                    <S.ErrorMessage>{this.state.message}</S.ErrorMessage>
                </S.Container>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
