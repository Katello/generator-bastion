/**
 * Copyright <%= year %> Red Hat, Inc.
 *
 * This software is licensed to you under the GNU General Public
 * License as published by the Free Software Foundation; either version
 * 2 of the License (GPLv2) or (at your option) any later version.
 * There is NO WARRANTY for this software, express or implied,
 * including the implied warranties of MERCHANTABILITY,
 * NON-INFRINGEMENT, or FITNESS FOR A PARTICULAR PURPOSE. You should
 * have received a copy of GPLv2 along with this software; if not, see
 * http://www.gnu.org/licenses/old-licenses/gpl-2.0.txt.
 **/

(function () {
    'use strict';

    /**
     * @ngdoc <%= type %>
     * @name  Bastion.<%= module %>.<%= type %>:<%= name %>
     *
     * @description
     *   Enter a description!
     */
    function <%= name %>() {

    }

    angular
        .module('Bastion.<%= module %>')
        .service('<%= name %>', <%= name %>);

    <%= name %>.$inject = [];

})();
