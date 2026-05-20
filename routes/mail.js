const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

/**
 * Protected Route Example
 * Send Mail Route - Requires Authentication
 */
router.post('/send-mail', authMiddleware, (req, res) => {
  try {
    const { to, subject, body } = req.body;
    const userId = req.user.id;

    // Validation
    if (!to || !subject || !body) {
      return res.status(400).json({
        success: false,
        message: 'Please provide to, subject, and body'
      });
    }

    // Mock mail sending logic
    console.log(`Email sent by user ${userId} to ${to}`);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      data: {
        to,
        subject,
        sentBy: userId,
        timestamp: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email'
    });
  }
});

/**
 * Track Parcel Route - Protected
 */
router.get('/track-parcel/:parcelId', authMiddleware, (req, res) => {
  try {
    const { parcelId } = req.params;
    const userId = req.user.id;

    // Mock parcel tracking logic
    res.status(200).json({
      success: true,
      message: 'Parcel details retrieved',
      data: {
        parcelId,
        status: 'In Transit',
        location: 'Warehouse',
        lastUpdate: new Date(),
        retrievedBy: userId
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to track parcel'
    });
  }
});

/**
 * Register Parcel Route - Protected
 */
router.post('/register-parcel', authMiddleware, (req, res) => {
  try {
    const { recipientName, address, weight } = req.body;
    const userId = req.user.id;

    // Validation
    if (!recipientName || !address || !weight) {
      return res.status(400).json({
        success: false,
        message: 'Please provide recipientName, address, and weight'
      });
    }

    // Mock parcel registration logic
    const parcelId = `PKG-${Date.now()}`;

    res.status(201).json({
      success: true,
      message: 'Parcel registered successfully',
      data: {
        parcelId,
        recipientName,
        address,
        weight,
        status: 'Registered',
        registeredBy: userId,
        createdAt: new Date()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to register parcel'
    });
  }
});

module.exports = router;
