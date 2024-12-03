import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {DndProvider, TouchTransition} from 'react-dnd-multi-backend';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {TouchBackend} from 'react-dnd-touch-backend';

import {store} from '@store';

// import {Preloader} from '@components/common';

import {ErrorBoundary, MainContent, ContentWrapper} from './parts';

const HTML5toTouch = {
    backends: [
        {
            id: 'touch',
            backend: TouchBackend,
            options: {enableMouseEvents: true},
            preview: true,
            transition: TouchTransition,
        },
        {
            id: 'html5',
            backend: HTML5Backend,
            preview: true,
        },
    ],
};

export const App = () =>
    <Suspense fallback={null}>
        <Provider store={store}>
            <ErrorBoundary>
                <MainContent>
                    <DndProvider options={HTML5toTouch}>
                        <ContentWrapper/>
                    </DndProvider>
                </MainContent>
            </ErrorBoundary>
        </Provider>
    </Suspense>;
