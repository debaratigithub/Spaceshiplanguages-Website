'use client'

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


export default function Checkboxes(props: any) {
    const label = { inputProps: { 'aria-label': props.label || '' } };
    return (
        <Checkbox {...label}
            // defaultChecked={props.defaultChecked || false}
            disabled={props.disabled || false}
            // checked={props.checked || false}
            onChange={props.onChange}
        />
    );
}