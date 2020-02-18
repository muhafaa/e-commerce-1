'use strict'
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Transaction extends Model {}

  Transaction.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'User Id is required'
          }
        }
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Product Id is required'
          }
        }
      },
      date_purchased: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: 'Date Purchased is required'
          }
        }
      }
    },
    { sequelize }
  )
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User)
    Transaction.belongsTo(models.Product)
  }
  return Transaction
}
