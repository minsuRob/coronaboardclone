import React from "react";
import {css} from '@emotion/react';

import {formatDiff, numberWithCommas} from '../utils/formatter';

export function DashboardItem(props) {
    const {text, current, prev, diffColor, unit} = props;
    const finalDiffColor = diffColor ? diffColor : 'red';
    const formatNumber = unit === 'percent' ? `${current.toFixed(2)%}` : numberWithCommas(current);

    return (
        <div>
            <p>
                {formatNumber};
            </p>
            {prev ? (
                <p>{formatDiff(current, prev)}</p>
            ) : null }
            <p>{text}</p>
        </div>
    )
}

