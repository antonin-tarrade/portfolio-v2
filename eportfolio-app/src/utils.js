export const fetchSvg = async (svgPath) => {
    try {
        const response = await fetch(`/icons/${svgPath}`);
        return await response.text();
    } catch (error) {
        console.error(`Error fetching SVG: ${svgPath}`, error);
        return "";
    }
};