// In your routes or controller file
import accountModel from '../models/account.js';

export const deleteAllAccounts = async (req, res) => {
    try {
        await accountModel.deleteMany({});
        res.status(200).json({ message: 'All accounts deleted successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to delete accounts.' });
    }
};