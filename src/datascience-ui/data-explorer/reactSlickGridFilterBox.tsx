// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

import * as React from 'react';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { IIconProps } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@fluentui/react';

initializeIcons();

import './reactSlickGridFilterBox.css';

const filterIcon: IIconProps = { iconName: 'Filter', styles: { root: {
    fontSize: 'var(--vscode-font-size)',
    width: 'var(--vscode-font-size)',
    color: 'var(--vscode-editor-inactiveSelectionBackground)'
}}};

interface IFilterProps {
    column: Slick.Column<Slick.SlickData>;
    fontSize: number;
    onChange(val: string, column: Slick.Column<Slick.SlickData>): void;
}

export class ReactSlickGridFilterBox extends React.Component<IFilterProps> {
    constructor(props: IFilterProps) {
        super(props);
    }

    public render() {
        const placeholder = this.props.column.id === '0' ? 'Filter' : '';
        return (
            <SearchBox placeholder={placeholder} iconProps={filterIcon} onChange={this.updateInputValue} onClear={this.clearInputValue} tabIndex={0} ariaLabel={this.props.column.name} className="filter-box" />
        );
    }

    private clearInputValue = () => {
        this.props.onChange('', this.props.column);
    }

    private updateInputValue = (_event?: React.ChangeEvent<HTMLInputElement> | undefined, newValue?: string | undefined) => {
        if (newValue) {
            this.props.onChange(newValue, this.props.column);
        }
    };
}
