// testUtils.js
import React from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';

import AppProviders from 'context/AppContext';

const customRender = (ui, props = {}) => {
    const { state, context, options } = props;
    return render(ui, {
        wrapper: ({ children }) => AppProviders({ children }),
        ...options,
    });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
