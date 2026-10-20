
app.get('/protected_data', authenticateToken, (req, res) => {
res.json({
message: 'This is protected data',
user: req.user

});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
});