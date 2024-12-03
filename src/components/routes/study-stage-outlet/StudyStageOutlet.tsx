import React, {lazy} from 'react';

import {Preloader} from '@components/common';

const StudyStageOutletBody = lazy(() => import('./StudyStageOutletBody'));

export const StudyStageOutlet = () =>
    <React.Suspense fallback={<Preloader/>}>
        <StudyStageOutletBody/>
    </React.Suspense>;