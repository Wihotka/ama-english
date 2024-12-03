import React, {Component, ErrorInfo, FC} from 'react';
// import {useSelector} from 'react-redux';

// import {ErrorInJs, StoreInner} from '@custom-types';
import {sendErrorData} from '@components/app/parts/error-boundary/send-error-data';
import {ErrorWindow} from '@components/app/parts/error-boundary/error-window';

export const ErrorBoundary:FC = ({children}) => 
// const errorInJs = useSelector((state:StoreInner) => state.errorInJs);

    (
        <Body errorInJs={false}>{children}</Body>
    )
;

type BodyProps = {
    errorInJs:any;
};

type State = {
    error:Error|null;
};

class Body extends Component <BodyProps, State> {
    static hasRenderError = false;

    state = {
        error: null,
    };

    static getDerivedStateFromError(error:Error) {
        Body.hasRenderError = true;

        return {error};
    }

    static getDerivedStateFromProps(props:BodyProps) {
        const {error} = props.errorInJs;

        if (error) {
            if (Body.hasRenderError) return null;

            sendErrorData(error);

            return {
                error
            };
        }
 
        return null;
    }

    componentDidCatch(error:Error, info:ErrorInfo) {
        sendErrorData(error, info);
    }

    render() {
        const {children} = this.props;
        const {error} = this.state;

        return error ? <ErrorWindow/> : children;
    }
}