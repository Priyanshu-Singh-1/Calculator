$(document).ready(function(){
        $('#generate').click(function(){
                console.log("Clicled");
                $('#container').printThis()
        });

        $("#clear_all").on("click", function() {
                // Clear all input text fields
                $("input[type='text']").val('');
        
                // Reset all dropdowns to their default values
                $("select").prop('selectedIndex', 0);
        });

        $("#add").on("click", function() {
                // Create the "Add Sizes" row
                var addSizesRow = `
                    <tr>
                        <th class="bold_category">Add Sizes</th>
                        <td><input type="text" placeholder="Size 1" class="box-input"></td>
                        <td><input type="text" placeholder="Size 2" class="box-input"></td>
                        <td><input type="text" placeholder="width 1" class="box-input"></td>
                        <td><input type="text" placeholder="width 2" class="box-input"></td>
                        <td><input type="text" placeholder="direction 1" class="box-input"></td>
                        <td><input type="text" placeholder="direction 2" class="box-input"></td>
                        <td><input type="text" placeholder="direction 3" class="box-input"></td>
                    </tr>
                `;
        
                // Create the "Marker Ratio" row
                var markerRatioRow = `
                    <tr>
                        <th class="bold_category">Marker ratio</th>
                        <td><input type="text" placeholder="Size 1" class="box-input"></td>
                        <td><input type="text" placeholder="Size 2" class="box-input"></td>
                        <td><input type="text" placeholder="width 1" class="box-input"></td>
                        <td><input type="text" placeholder="width 2" class="box-input"></td>
                        <td><input type="text" placeholder="direction 1" class="box-input"></td>
                        <td><input type="text" placeholder="direction 2" class="box-input"></td>
                        <td><input type="text" placeholder="direction 3" class="box-input"></td>
                    </tr>
                `;
        
                // Append the rows to the table body
                $("th.bold_category:contains('Marker ratio')").last().closest("tr").after(addSizesRow, markerRatioRow);
        });

        $("#minus").on("click", function() {
                // Check if there's more than one "Add Sizes" and "Marker Ratio" rows
                if ($("th.bold_category:contains('Add Sizes')").length > 1 && $("th.bold_category:contains('Marker ratio')").length > 1) {
                    // Find the last "Add Sizes" and "Marker Ratio" rows and remove them
                    $("th.bold_category:contains('Add Sizes')").last().closest("tr").remove();
                    $("th.bold_category:contains('Marker ratio')").last().closest("tr").remove();
                } else {
                    alert("At least one row for 'Add Sizes' and 'Marker Ratio' must remain.");
                }
            });
        
        // Fabric sets
        // const fabricSet1 = [
        //         { value: "", text: "Type Fabric", disabled: true, selected: true },
        //         { value: "self", text: "Self" },
        //         { value: "lining", text: "Lining" },
        //         { value: "underlining", text: "Underlining" },
        //         { value: "tearaway", text: "Tear Away" }
        // ];

        // const fabricSet2 = [
        //         { value: "", text: "Type Fabric", disabled: true, selected: true },
        //         { value: "cotton", text: "Cotton" },
        //         { value: "silk", text: "Silk" },
        //         { value: "wool", text: "Wool" },
        //         { value: "polyester", text: "Polyester" }
        // ];

        // // Function to update fabric dropdown
        // function updateFabricDropdown(options) {
        //         const selectFabric = $("#select_fabric");
        //         selectFabric.empty();
        //         options.forEach(option => {
        //         selectFabric.append(new Option(option.text, option.value, option.disabled, option.selected));
        //         });
        // }

        // // Next Fabric functionality
        // $("#next_fabric").on("click", function() {
        //         updateFabricDropdown(fabricSet2);
        // });

        // // Back Fabric functionality
        // $("#back_fabric").on("click", function() {
        //         updateFabricDropdown(fabricSet1);
        // });
})

