import { COLORS } from '@sf-ui-system/tokens';
import { getContrast } from 'polished';

export function ColorsGrid() {
    const COLORS_ARRAY = Object.entries(COLORS);
    return COLORS_ARRAY.map(([key, color], index) => {
        const needToAddEmptySpace = index > 0 && !COLORS_ARRAY[index - 1][0].includes(key.substring(0, 3));
        return (
            <div key={key} style={{ backgroundColor: color, padding: '2rem', marginTop: needToAddEmptySpace ? "1rem" : "0" }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontFamily: 'monospace',
                        color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'
                    }}
                >
                    <strong>${key}</strong>
                    <span>{color}</span>
                </div>
            </div>
        )
    })
}