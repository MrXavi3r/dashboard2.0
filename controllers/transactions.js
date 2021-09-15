const Transaction = require("../models/Transactions");

// @desc   GET ALL TRANSACTIONS
// @route   /api/v1/transactions
// @access   Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc   ADD TRANSACTIONS
// @route   POST /api/v1/transactions
// @access   Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if(error.name === 'ValidationError'){
        const messages = Object.values(error.errors).map(val => val.message);

        res.status(400).json({
            success: false,
            error: messages
        })
    } else {
        return res.status(500).json({
            success: false,
            error: "Server Error",
          });
    }
  }
};

// @desc   DELETE TRANSACTION
// @route   DELETE /api/v1/transactions/:id
// @access   Public
exports.deleteTransaction = async (req, res, next) => {
  
    try {
        const transaction = await Transaction.findById(req.params.id);

        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found"
            })
        }

        await transaction.remove();

        return res.status(200).json({
            success: true, 
            data: {}
        })
    } catch (error) {
        res.status(500).json({
            success: false, 
            error: "Server Error"
        })
    }
};
