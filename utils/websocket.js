export const initWebSocket = (onMessage) => {
    const ws = new WebSocket('wss://example.com/ws');
    ws.onmessage = (event) => onMessage(JSON.parse(event.data));
    return ws;
};