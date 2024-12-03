import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const StudyStageBody = lazy(() => import('./StudyStageBody'));

export const StudyStage = () =>
    <React.Suspense fallback={<Preloader/>}>
        <StudyStageBody/>
    </React.Suspense>;